‎const axios = require("axios");
‎const request = require("request");
‎const fs = require("fs-extra");
‎const moment = require("moment-timezone");
‎
‎module.exports.config = {
‎ name: "info",
‎ version: "1.0.0",
‎ hasPermssion: 0,
‎ credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
‎ description: "Show  Info",
‎ commandCategory: "info",
‎ usages: "info",
‎ cooldowns: 2
‎};
‎
‎module.exports.run = async function({ api, event }) {
‎ const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
‎
‎ const callback = () => api.sendMessage({
‎ body: `
‎┏━━━━━━━━━━━━━━━┓
‎┃   🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟    
‎┣━━━━━━━━━━━━━━━┫
‎┃👤 𝗡𝗔𝗠𝗘      : 𝐑𝐀𝐇𝐀𝐓  𝗕𝗕𝗭𝗭
‎┃🚹 𝗚𝗘𝗡𝗗𝗘𝗥    : 𝗠𝗔𝗟𝗘
‎┃🎂 𝗔𝗚𝗘       : 18
‎┃🕌 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 : 𝗜𝗦𝗟𝗔𝗠
‎┃🏫 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 :inter 12𝐍𝐃 year 
‎┃🏡 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 : 𝗠𝗬𝗠𝗘𝗡𝗦𝗜𝗡𝗚
‎┣━━━━━━━━━━━━━━━┫
‎┃𝗧𝗜𝗞𝗧𝗢𝗞 : 𝐑𝐀𝐇𝐀𝐓 𝐅𝐅 71
‎┃📢 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 : আছে 🥴🤪
‎┃🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : বায়ো-তে আছে
‎┣━━━━━━━━━━━━━━━┫
‎┃ 🕒 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𝗧𝗜𝗠𝗘: ${time}
‎┗━━━━━━━━━━━━━━━┛ `,
‎ attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
‎ }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));
‎
‎ return request("https://i.imgur.com/hioJhGJ.jpeg")
‎ .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
‎ .on('close', () => callback());
‎};
‎
