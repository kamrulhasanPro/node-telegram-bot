// ─── All text strings ─────────────────────────────────────────────
const strings = {
  en: {
    welcome: (name) =>
      `🎉 <b>Welcome, ${name}!</b>\n\nYou selected <b>English</b>.\n\nUse the menu below to get started:`,
    chooseOption: "📋 <b>Main Menu</b>\n\nPlease choose an option:",
    useButtons: "👇 Please use the buttons below to navigate:",

    affiliateTitle: "🔗 <b>Affiliate Program</b>",
    affiliateText:
      "Earn money by sharing your referral link!\n\n💰 <b>Your affiliate link:</b>\n👉 <code>https://your-affiliate-link.com/?ref=USER_ID</code>\n\n📊 <b>Commission:</b> 30% per referral\n\nShare this link and earn every time someone signs up!",

    howtoTitle: "📖 <b>How to Use</b>",
    howtoText:
      "Here's a quick guide:\n\n<b>1️⃣ Start the bot</b> — Send /start\n<b>2️⃣ Choose language</b> — Bengali or English\n<b>3️⃣ Browse the menu</b> — Use the buttons\n<b>4️⃣ Affiliate</b> — Share your link and earn\n<b>5️⃣ Support</b> — Contact us anytime\n\n✅ It's that simple!",

    supportTitle: "🆘 <b>Support</b>",
    supportText:
      "Need help? We're here for you!\n\n📩 <b>Contact Admin:</b>\n👉 @YourAdminUsername\n\n⏰ Response time: Within 24 hours",

    groupTitle: "📢 <b>Join Our Community</b>",
    groupText:
      "Stay updated and connect with others!\n\n📣 <b>Official Channel:</b>\n👉 @YourChannel\n\n👥 <b>Community Group:</b>\n👉 @YourGroup",

    btn_affiliate: "🔗 Affiliate Link",
    btn_howto: "📖 How to Use",
    btn_support: "🆘 Support",
    btn_group: "📢 Group & Channel",
    btn_changelang: "🌐 Change Language",
  },

  bn: {
    welcome: (name) =>
      `🎉 <b>স্বাগতম, ${name}!</b>\n\nআপনি <b>বাংলা</b> ভাষা বেছে নিয়েছেন।\n\nনিচের মেনু থেকে শুরু করুন:`,
    chooseOption: "📋 <b>মূল মেনু</b>\n\nঅনুগ্রহ করে একটি অপশন বেছে নিন:",
    useButtons: "👇 নেভিগেট করতে নিচের বোতামগুলো ব্যবহার করুন:",

    affiliateTitle: "🔗 <b>অ্যাফিলিয়েট প্রোগ্রাম</b>",
    affiliateText:
      "আপনার রেফারেল লিঙ্ক শেয়ার করে আয় করুন!\n\n💰 <b>আপনার অ্যাফিলিয়েট লিঙ্ক:</b>\n👉 <code>https://your-affiliate-link.com/?ref=USER_ID</code>\n\n📊 <b>কমিশন:</b> প্রতি রেফারেলে ৩০%\n\nলিঙ্কটি শেয়ার করুন এবং প্রতিবার কেউ সাইন আপ করলে আয় করুন!",

    howtoTitle: "📖 <b>কীভাবে ব্যবহার করবেন</b>",
    howtoText:
      "এখানে একটি সংক্ষিপ্ত গাইড:\n\n<b>১️⃣ বট শুরু করুন</b> — /start পাঠান\n<b>২️⃣ ভাষা বেছে নিন</b> — বাংলা বা ইংরেজি\n<b>৩️⃣ মেনু ব্রাউজ করুন</b> — বোতামগুলো ব্যবহার করুন\n<b>৪️⃣ অ্যাফিলিয়েট</b> — লিঙ্ক শেয়ার করুন এবং আয় করুন\n<b>৫️⃣ সাপোর্ট</b> — যেকোনো সময় আমাদের সাথে যোগাযোগ করুন\n\n✅ এটাই সব!",

    supportTitle: "🆘 <b>সাপোর্ট</b>",
    supportText:
      "সাহায্য দরকার? আমরা আছি!\n\n📩 <b>অ্যাডমিনের সাথে যোগাযোগ করুন:</b>\n👉 @YourAdminUsername\n\n⏰ রেসপন্স টাইম: ২৪ ঘণ্টার মধ্যে",

    groupTitle: "📢 <b>আমাদের কমিউনিটিতে যোগ দিন</b>",
    groupText:
      "আপডেট থাকুন এবং অন্যদের সাথে সংযুক্ত হন!\n\n📣 <b>অফিসিয়াল চ্যানেল:</b>\n👉 @YourChannel\n\n👥 <b>কমিউনিটি গ্রুপ:</b>\n👉 @YourGroup",

    btn_affiliate: "🔗 অ্যাফিলিয়েট লিঙ্ক",
    btn_howto: "📖 কীভাবে ব্যবহার করবেন",
    btn_support: "🆘 সাপোর্ট",
    btn_group: "📢 গ্রুপ ও চ্যানেল",
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