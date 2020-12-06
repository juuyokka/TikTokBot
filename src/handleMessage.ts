import { Message, MessageAttachment } from 'discord.js'
import axios, { AxiosResponse } from 'axios'

import getTikTokLink from './scripts/checkTikTok'
import getTikTokCdnURL from './scripts/tikTokCdn'

export default async (msg: Message) => {
    const tikTokLink = getTikTokLink(msg.content);

    if (msg.author.bot) return;
    if (!tikTokLink) return;

    msg.channel.startTyping();

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
}
