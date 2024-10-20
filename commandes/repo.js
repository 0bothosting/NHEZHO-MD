const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
      *𝐍𝐇𝐄𝐙𝐇𝐎 𝐈𝐍𝐅𝐎* 
❒───────────────────❒
*𝐆𝐈𝐓𝐇𝐔𝐁*
> https://caseyweb/ZHEZHO

*𝐇𝐀𝐂𝐇𝐄𝐑𝐒 𝐇𝐎𝐎𝐃 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*
> https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E
⁠
╭───────────────────❒
│😂 *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❣️ *DEV1* : *NHEZHO*
│⚽ *DEV2* : *𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦 𝐓𝐄𝐂𝐇*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     *𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃*

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Anywaymd*, déveloper Anyway Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Anywaymd*, déveloper Anyway Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
