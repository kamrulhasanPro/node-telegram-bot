require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const { getStartMessage, getMainMenu, getText, strings } = require("./handlers/language");
const { handleAffiliate } = require("./handlers/affiliate");
const { handleHelp } = require("./handlers/help");
const { handleStart } = require("./handlers/start");
const { handleSupport } = require("./handlers/support");

const bot = new TelegramBot(process.env.BOT_TOKEN);
const app = express();
const userLanguages = {};

const PORT = Number(process.env.PORT || 3000);
const WEBHOOK_URL = process.env.WEBHOOK_URL;

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN is not set.");
  process.exit(1);
}

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Bot is running");
});

app.post("/webhook", (req, res) => {
  console.log("🔥 Webhook hit!");
  console.log(JSON.stringify(req.body, null, 2));

  bot.processUpdate(req.body);

  res.sendStatus(200);
});

// async function startWebhook() {
// if (WEBHOOK_URL) {
//   console.log(`${WEBHOOK_URL}${WEBHOOK_PATH}`);
//   await bot.setWebHook(`${WEBHOOK_URL}${WEBHOOK_PATH}`);
//   console.log("✅ Webhook registered");
// } else {
//   console.log("⚠️ WEBHOOK_URL not set. Starting server without registering webhook.");
// }
//   app.listen(PORT, () => {
//     console.log(`🤖 Bot is running on port ${PORT}`);
//   });
// }

async function startWebhook() {
  try {
    console.log("Setting webhook...");
    console.log(`${WEBHOOK_URL}${WEBHOOK_PATH}`);

    const result = await bot.setWebHook(
      `${WEBHOOK_URL}${WEBHOOK_PATH}`
    );

    console.log("setWebHook result:", result);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });

  } catch (err) {
    console.error("Full error:");
    console.dir(err, { depth: null });
  }
}

startWebhook().catch((err) => {
  console.error(err);
});
// startWebhook().catch((err) => {
//   console.error("Webhook setup error:", err.message);
//   process.exit(1);
// });

// ─── /start command ───────────────────────────────────────────────
bot.onText(/\/start/, async (msg) => {
  try {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || "Friend";

    delete userLanguages[chatId];

    await bot.sendMessage(chatId, "🌐 Choose language / ভাষা বেছে নিন:", {
      reply_markup: { remove_keyboard: true },
    });

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

    if (data === "lang_bn" || data === "lang_en") {
      const lang = data === "lang_bn" ? "bn" : "en";
      userLanguages[chatId] = lang;

      try { await bot.deleteMessage(chatId, messageId); } catch (e) { }

      await bot.sendMessage(chatId, getStartMessage(lang, firstName), {
        parse_mode: "HTML",
        reply_markup: getMainMenu(lang),
      });
      return;
    }

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
      await bot.sendMessage(chatId, getText(lang, "useButtons"), {
        parse_mode: "HTML",
        reply_markup: getMainMenu(lang),
      });
    }
  } catch (err) {
    console.error("message handler error:", err.message);
  }
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err.message);
});