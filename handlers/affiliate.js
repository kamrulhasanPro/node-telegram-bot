const { getText, strings } = require("./language");

async function handleAffiliate(bot, chatId, lang) {
  const title = getText(lang, "affiliateTitle");
  let text = getText(lang, "affiliateText");

  text = text.replace("USER_ID", chatId);

  await bot.sendMessage(chatId, `${title}\n\n${text}`, {
    parse_mode: "HTML",
  });
}

module.exports = { handleAffiliate };