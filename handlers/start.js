const { getText } = require("./language");

async function handleStart(bot, chatId, lang) {
  const title = getText(lang, "groupTitle");
  const text = getText(lang, "groupText");

  await bot.sendMessage(chatId, `${title}\n\n${text}`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: lang === "bn" ? "📣 চ্যানেলে যোগ দিন" : "📣 Join Channel",
            url: "https://t.me/YourChannel",
          },
        ],
        [
          {
            text: lang === "bn" ? "👥 গ্রুপে যোগ দিন" : "👥 Join Group",
            url: "https://t.me/bangladeshtradingsociety",
          },
        ],
      ],
    },
  });
}

module.exports = { handleStart };