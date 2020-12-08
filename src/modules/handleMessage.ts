import { Message, MessageAttachment } from 'discord.js'
import axios, { AxiosResponse } from 'axios'

import getTikTokLink from './checkTikTok'
import getTikTokCdnURL from './tikTokCdn'

export default async (msg: Message) => {
    const tikTokLinks = getTikTokLink(msg.content);

    if (msg.author.bot) return;
    if (tikTokLinks === null) return;

    msg.channel.startTyping(tikTokLinks.length);

    tikTokLinks.forEach(async tikTokLink => {
        const cdnURL = await getTikTokCdnURL(tikTokLink);

        const vidBuf: AxiosResponse<Buffer> = await axios.get(cdnURL, { responseType: 'arraybuffer' });
        const attachment = new MessageAttachment(vidBuf.data, 'tiktok.mp4');

        try {
            await msg.channel.send({ files: [ attachment ] });
        } catch {
            msg.reply("Failed to send video!");
        } finally {
            msg.channel.stopTyping();
        }
    });
}
