const { getText } = require("./language");

async function handleHelp(bot, chatId, lang) {
  const title = getText(lang, "howtoTitle");
  const text = getText(lang, "howtoText");

  await bot.sendMessage(chatId, `${title}\n\n${text}`, {
    parse_mode: "HTML",
  });
}

module.exports = { handleHelp };