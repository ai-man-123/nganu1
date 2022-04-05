const { S_WHATSAPP_NET, delay } = require("@adiwajshing/baileys")
const package = require('../../../package.json')
const config = require('../../../src/config.json')

module.exports = {
    tags: ['others', 'information'],
    cmd: ['owner', 'creator'],
    help: ['owner'],
    exec: async (m, client) => {
        config.owner.map(async (v) => await client.sendContact(m.chat, v.split(S_WHATSAPP_NET)[0], package.author, m))
        await delay(2000)
        const btn = [
            { urlButton: { displayText: `🌐 Web`, url: `https://s.id/aimaN` } },
            { urlButton: { displayText: `📸 Instagram`, url: `https://www.instagram.com/aiman1_23` } },
            { urlButton: { displayText: `🐈 Github`, url: `https://github.com/ai-man-123` } },
            { urlButton: { displayText: `🎨 TikTok`, url: `https://www.tiktok.com/@aiman_night` } },
        ]
        client.sendMessage(m.chat, { text: `Social Media`, footer: global.footer, templateButtons: btn }, { quoted: m })
    }
}
