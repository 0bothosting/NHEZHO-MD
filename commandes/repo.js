'use strict';

Object.defineProperty(exports, '__esModule', {
  'value': true
});
const {
  adams
} = require("../framework/zokou");
adams({
  'nomCom': "repo",
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x256950, _0x3cdb38, _0x2c604e) => {
  const _0x2f4eff = await fetch('https://api.github.com/repos/caseyweb/ZHEZHO-MD');
  const _0x36b130 = await _0x2f4eff.json();
  if (_0x36b130) {
    const _0x50985d = {
      'stars': _0x36b130.stargazers_count,
      'forks': _0x36b130.forks_count,
      'lastUpdate': _0x36b130.updated_at,
      'owner': _0x36b130.owner.login
    };
    const _0x20cf11 = "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒-𝐗𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *BMW-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Ibrahim Adams*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n🌐 Repo: " + _0x36b130.html_url + "\n⭕ For More Info : https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});
