const YT = require('../../../lib/yt');
const { formatK } = require('../../../utils');

module.exports = {
    tags: ['downloader'],
    cmd: ['yts', 'ytsearch'],
    args: ['query'],
    help: ['yts'],
    exec: async (m, client, { prefix, args, cmd, url }) => {
        if (args.length < 1) return m.reply('query diperlukan')
        try {
            const list = await YT.search(args.join(' '));
            let tex = `*YouTube Search*\n`
            let n = 1
            for (let x of list) {
                tex += `\n*${n}. ${x.title}*\nš *Channel :* ${x.author.name}\nā *Duration :* ${x.timestamp}\nš *Views :* ${formatK(x.views)}\nš *Uploaded :* ${x.ago}\nš *Url :* ${x.url}\n`
                n++
            }

            m.reply(tex)
        } catch (error) {
            m.reply(util.format(error))
            console.log(error);
        }
    }
}