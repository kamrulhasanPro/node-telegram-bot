const { getText } = require("./language");

async function handleSupport(bot, chatId, lang) {
  const title = getText(lang, "supportTitle");
  const text = getText(lang, "supportText");

  await bot.sendMessage(chatId, `${title}\n\n${text}`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: lang === "bn" ? "📩 অ্যাডমিনকে মেসেজ করুন" : "📩 Message Admin",
            url: "https://t.me/YourAdminUsername",
          },
        ],
      ],
    },
  });
}

module.exports = { handleSupport };