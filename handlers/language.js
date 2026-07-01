// ─── All text strings ─────────────────────────────────────────────
const strings = {
  en: {
    welcome: (name) =>
      `🎉 <b>Welcome, ${name}!</b>\n\nYou selected <b>English</b>.\n\nUse the menu below to get started:`,
    chooseOption: "📋 <b>Main Menu</b>\n\nPlease choose an option:",
    useButtons: "👇 Please use the buttons below to navigate:",

    affiliateTitle: "🔗 <b>Account Link</b>",
    affiliateText:
      "📈 <b>ACCOUNT REGISTRATION</b>\n\nWelcome to <b>BANGLADESH MULTIMILLIONAIRE SOCIETY</b>\n\n✅ <b>Official Registration Link</b>\n🔗 <a href=\"https://broker-qx.pro/sign-up/?lid=2174854\">https://broker-qx.pro/sign-up/?lid=2174854</a>\n\n⚠️ <b>Remember:</b>\n• Use your real information.\n• Verify your Email & Phone.\n• Never share your Password or OTP.\n• Use only the Official App/Website.\n\n📩 <b>Support:</b> @yoursupport26\n\n💹 <i>Trade Smart • Stay Disciplined • Build Wealth</i>",

    howtoTitle: "📖 <b>How to Open an Account</b>",
    howtoText:
      "📖 <b>Complete Account Opening Guide</b>\n\nWatch the video below and follow the steps carefully.\n\n🎥 <b>Video:</b>\nhttps://youtu.be/FR11E8ihHCg?si=Nf_7Gm8qvsEb-fWI\n\n✅ <b>Steps:</b>\n• Register using the Official Link.\n• Enter your real information.\n• Verify your Email.\n• Verify your Phone Number.\n• Complete Identity Verification (KYC).\n• Use a Strong Password.\n• Enable Two-Factor Authentication (2FA).\n\n❌ <b>Reasons Your Account May Be Blocked:</b>\n• Providing fake information.\n• Creating multiple accounts.\n• Using someone else's account.\n• Sharing your Password or OTP.\n• Violating Broker Policies.",

    supportTitle: "🆘 <b>Support</b>",
    supportText:
      "🛟 <b>Support Center</b>\n\nWe provide assistance for:\n\n📌 <b>Account Support</b>\n• Registration\n• Verification\n• Login Issues\n\n📌 <b>Trading Support</b>\n• Basic Guidance\n• Platform Help\n• General Questions\n\n⚠️ <b>Before Contacting Support:</b>\n✔️ Explain your issue clearly.\n✔️ Attach screenshots if available.\n✔️ Please wait patiently for a reply.\n\n📩 <b>Contact Support:</b>\n@yoursupport26",

    groupTitle: "📢 <b>Join Community</b>",
    groupText:
      "📈 <b>Welcome to BANGLADESH MULTIMILLIONAIRE SOCIETY</b>\n\nJoin our community and grow with professional traders.\n\n📌 <b>You'll Get:</b>\n✅ Free Learning\n✅ Market Updates\n✅ Trading Tips\n✅ Educational Content\n✅ Community Support\n\n📜 <b>Community Rules 💁‍♂️</b>\n• Respect Everyone.\n• No Spam.\n• No Fake Signals.\n• Follow Admin Instructions.\n\n🔗 <b>Join Community:</b>\nhttps://t.me/bangladeshtradingsociety",

    btn_affiliate: "🔗 Account Link",
    btn_howto: "📖 How to Open an Account",
    btn_support: "🆘 Support",
    btn_group: "📢 Join Community",
    btn_changelang: "🌐 Change Language",
  },

  bn: {
    welcome: (name) =>
      `🎉 <b>স্বাগতম, ${name}!</b>\n\nআপনি <b>বাংলা</b> ভাষা বেছে নিয়েছেন।\n\nনিচের মেনু থেকে শুরু করুন:`,
    chooseOption: "📋 <b>মূল মেনু</b>\n\nঅনুগ্রহ করে একটি অপশন বেছে নিন:",
    useButtons: "👇 নেভিগেট করতে নিচের বোতামগুলো ব্যবহার করুন:",

    affiliateTitle: "🔗 <b>একাউন্ট লিংক</b>",
    affiliateText:
      "📈 <b>BANGLADESH MULTIMILLIONAIRE SOCIETY</b>\n\n✅ <b>অফিসিয়াল রেজিস্ট্রেশন লিংক:</b> https://broker-qx.pro/sign-up/?lid=2174854\n\n⚠️ <b>মনে রাখুন:</b> নিজের সঠিক তথ্য দিয়ে অ্যাকাউন্ট খুলুন, ইমেইল ও ফোন ভেরিফাই করুন, Password ও OTP কারও সাথে শেয়ার করবেন না এবং শুধুমাত্র অফিসিয়াল অ্যাপ/ওয়েবসাইট ব্যবহার করুন।\n\n📩 <b>সাপোর্ট:</b> @yoursupport26\n\n💹 <i>Trade Smart • Stay Disciplined • Build Wealth</i>",

    howtoTitle: "📖 <b>কিভাবে একাউন্ট খুলবো</b>",
    howtoText:
      "📖 <b>অ্যাকাউন্ট খোলার সম্পূর্ণ গাইড</b>\n\nনিচের ভিডিওটি দেখে ধাপে ধাপে অ্যাকাউন্ট খুলুন।\n\n🎥 <b>ভিডিও লিংক:</b>\nhttps://youtu.be/FR11E8ihHCg?si=Nf_7Gm8qvsEb-fWI\n\n✅ <b>অ্যাকাউন্ট খোলার ধাপ:</b>\n• অফিসিয়াল লিংক ব্যবহার করুন।\n• সঠিক নাম ও তথ্য দিন।\n• ইমেইল ভেরিফাই করুন।\n• ফোন ভেরিফাই চাইলে সম্পন্ন করুন।\n• জাতীয় পরিচয়পত্র (NID) দিয়ে ভেরিফিকেশন সম্পন্ন করুন।\n• শক্তিশালী পাসওয়ার্ড ব্যবহার করুন।\n• Two-Factor Authentication (2FA) চালু করুন।\n\n❌ <b>যে কারণে Account Block হতে পারে:</b>\n• জাল তথ্য প্রদান।\n• একাধিক অ্যাকাউন্ট খোলা।\n• অন্যের অ্যাকাউন্ট ব্যবহার।\n• Password বা OTP শেয়ার করা।\n• ব্রোকারের নীতিমালা (Policy) ভঙ্গ করা।",

    supportTitle: "🆘 <b>সাপোর্ট</b>",
    supportText:
      "🛟 <b>সাপোর্ট সেন্টার</b>\n\nআপনি নিচের যেকোনো বিষয়ে সাহায্য নিতে পারবেন।\n\n📌 <b>অ্যাকাউন্ট সাপোর্ট:</b>\n• রেজিস্ট্রেশন\n• ভেরিফিকেশন\n• লগইন সমস্যা\n• মৌলিক নির্দেশিকা\n• প্ল্যাটফর্ম সহায়তা\n• সাধারণ প্রশ্ন\n\n⚠️ <b>যোগাযোগ করার সময়:</b>\n✔️ সমস্যাটি পরিষ্কারভাবে লিখুন।\n✔️ Screenshot থাকলে যুক্ত করুন।\n✔️ ধৈর্য ধরে অপেক্ষা করুন।\n\n📩 <b>যোগাযোগ:</b>\n@yoursupport26",
      
    groupTitle: "📢 <b>কমিউনিটিতে যোগ দিন</b>",
    groupText:
      "📈 <b>BANGLADESH MULTIMILLIONAIRE SOCIETY</b>\n\nআমাদের কমিউনিটিতে যোগ দিয়ে শিখুন ও এগিয়ে যান।\n\n📌 <b>আপনি যা পাবেন:</b>\n✅ ফ্রিতে শেখার সুযোগ\n✅ নিয়মিত মার্কেট আপডেট\n✅ Trading Tips 💁‍♂️\n✅ শিক্ষামূলক বিষয়বস্তু\n✅ কমিউনিটি সাপোর্ট\n\n📜 <b>কমিউনিটি রুলস:</b>\n• সকলকে সম্মান করুন।\n• Spam করবেন না।\n• Fake Signal শেয়ার করবেন না।\n• Admin-এর নির্দেশনা মেনে চলুন।\n\n🔗 <b>Join Community:</b>\nhttps://t.me/bangladeshtradingsociety",

    btn_affiliate: "🔗 একাউন্ট লিংক",
    btn_howto: "📖 কিভাবে একাউন্ট খুলবো",
    btn_support: "🆘 সাপোর্ট",
    btn_group: "📢 কমিউনিটিতে যোগ দিন",
    btn_changelang: "🌐 ভাষা পরিবর্তন",
  },
};

// ─── Get a text string ─────────────────────────────────────────────
function getText(lang, key, ...args) {
  const s = strings[lang] || strings["en"];
  const val = s[key];
  if (typeof val === "function") return val(...args);
  return val || "";
}

// ─── Welcome message ──────────────────────────────────────────────
function getStartMessage(lang, firstName) {
  return getText(lang, "welcome", firstName);
}

// ─── Persistent Reply Keyboard ────────────────────────────────────
function getMainMenu(lang) {
  const s = strings[lang] || strings["en"];
  return {
    keyboard: [
      [
        { text: s.btn_affiliate },
        { text: s.btn_howto },
      ],
      [
        { text: s.btn_support },
        { text: s.btn_group },
      ],
      [
        { text: s.btn_changelang },
      ],
    ],
    resize_keyboard: true,
    persistent: true,
  };
}

module.exports = { getStartMessage, getMainMenu, getText, strings };