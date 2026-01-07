const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰Rahat Islam🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━━━┓
┃   🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟    
┣━━━━━━━━━━━━━━━━━━┫
┃👤 𝗡𝗔𝗠𝗘      : 𝗥𝗔𝗛𝗔𝗧 𝐁𝐁Z
┃🚹 𝗚𝗘𝗡𝗗𝗘𝗥    : 𝗠𝗔𝗟𝗘
┃🎂 𝗔𝗚𝗘       : 18
┃🕌 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 : 𝗜𝗦𝗟𝗔𝗠
┃🏫 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 : 𝐈𝐍𝐓𝐄𝐑 2𝐍𝐃 𝐘𝐄𝐀𝐑
┃🏡 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 : 𝐌𝐘𝐌𝐄𝐍𝐒𝐈𝐍𝐆𝐇, বাংলাদেশ 
┣━━━━━━━━━━━━━━━━━━┫
┃𝗧𝗜𝗞𝗧𝗢𝗞 : @𝐑𝐀𝐇𝐀𝐓 𝐅𝐅 71
┃📢 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 : আছে 🥴🤪
┃🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : বায়ো-তে আছে
┣━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𝗧𝗜𝗠𝗘: ${time}
┗━━━━━━━━━━━━━━━━━━┛ `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/wTaUpg5.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
