require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const { getStartMessage, getMainMenu, getText, strings } = require("./handlers/language");
const { handleAffiliate } = require("./handlers/affiliate");
const { handleHelp } = require("./handlers/help");
const { handleStart } = require("./handlers/start");
const { handleSupport } = require("./handlers/support");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const userLanguages = {};

console.log("🤖 Bot is running...");

// ─── /start command ───────────────────────────────────────────────
bot.onText(/\/start/, async (msg) => {
  try {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || "Friend";

    delete userLanguages[chatId];

    // Remove old keyboard first
    await bot.sendMessage(chatId, "🌐 Choose language / ভাষা বেছে নিন:", {
      reply_markup: { remove_keyboard: true },
    });

    // Show inline language picker
    await bot.sendMessage(
      chatId,
      `👋 Hello ${firstName}! / হ্যালো ${firstName}!\n\nPlease choose your language:\nঅনুগ্রহ করে আপনার ভাষা বেছে নিন:`,
      {
        reply_markup: {
          inline_keyboard: [[
            { text: "🇧🇩 বাংলা", callback_data: "lang_bn" },
            { text: "🇬🇧 English", callback_data: "lang_en" },
          ]],
        },
      }
    );
  } catch (err) {
    console.error("/start error:", err.message);
  }
});

// ─── Callback query handler ────────────────────────────────────────
bot.on("callback_query", async (query) => {
  try {
    const chatId = query.message.chat.id;
    const data = query.data;
    const messageId = query.message.message_id;
    const firstName = query.from.first_name || "Friend";

    await bot.answerCallbackQuery(query.id);

    // ── Language selection ──
    if (data === "lang_bn" || data === "lang_en") {
      const lang = data === "lang_bn" ? "bn" : "en";
      userLanguages[chatId] = lang;

      // Delete the inline picker message
      try { await bot.deleteMessage(chatId, messageId); } catch (e) {}

      // Send welcome + show persistent reply keyboard
      await bot.sendMessage(chatId, getStartMessage(lang, firstName), {
        parse_mode: "HTML",
        reply_markup: getMainMenu(lang),
      });
      return;
    }

    // ── Change language ──
    if (data === "change_lang") {
      delete userLanguages[chatId];
      await bot.sendMessage(chatId, "🌐 Choose language / ভাষা বেছে নিন:", {
        reply_markup: { remove_keyboard: true },
      });
      await bot.sendMessage(chatId, "👇 Tap to select:", {
        reply_markup: {
          inline_keyboard: [[
            { text: "🇧🇩 বাংলা", callback_data: "lang_bn" },
            { text: "🇬🇧 English", callback_data: "lang_en" },
          ]],
        },
      });
      return;
    }

  } catch (err) {
    console.error("callback_query error:", err.message);
  }
});

// ─── Message handler (reply keyboard button taps) ─────────────────
bot.on("message", async (msg) => {
  try {
    if (!msg.text || msg.text.startsWith("/")) return;

    const chatId = msg.chat.id;
    const lang = userLanguages[chatId] || "en";
    const s = strings[lang];
    const text = msg.text.trim();

    if (text === s.btn_affiliate) {
      await handleAffiliate(bot, chatId, lang);

    } else if (text === s.btn_howto) {
      await handleHelp(bot, chatId, lang);

    } else if (text === s.btn_support) {
      await handleSupport(bot, chatId, lang);

    } else if (text === s.btn_group) {
      await handleStart(bot, chatId, lang);

    } else if (text === s.btn_changelang) {
      delete userLanguages[chatId];
      await bot.sendMessage(chatId, "🌐 Choose language / ভাষা বেছে নিন:", {
        reply_markup: { remove_keyboard: true },
      });
      await bot.sendMessage(chatId, "👇 Tap to select:", {
        reply_markup: {
          inline_keyboard: [[
            { text: "🇧🇩 বাংলা", callback_data: "lang_bn" },
            { text: "🇬🇧 English", callback_data: "lang_en" },
          ]],
        },
      });

    } else {
      // Unknown text — re-show the menu
      await bot.sendMessage(chatId, getText(lang, "useButtons"), {
        parse_mode: "HTML",
        reply_markup: getMainMenu(lang),
      });
    }

  } catch (err) {
    console.error("message handler error:", err.message);
  }
});

// ─── Polling error handler ─────────────────────────────────────────
bot.on("polling_error", (err) => {
  console.error("Polling error:", err.message);
});

// ─── Global safety net ────────────────────────────────────────────
process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err.message);
});