import { config } from 'dotenv'
import { Client } from 'discord.js'

import handleMessage from './modules/handleMessage'

{
    const { TIMEOUT, TOKEN } = process.env;
    if (TIMEOUT === undefined || TOKEN === undefined) config();
}

const client = new Client();

// Some stuff in case the client's upload speed is slow. Increase if nessesary
client.options.restRequestTimeout = <number | undefined> process.env.TIMEOUT ?? 15000;
client.options.retryLimit = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
    client.user?.setPresence({ activity: { name: 'Send TikTok links for videos in chat!' } });
});

client.on('message', handleMessage);

client.login(process.env.TOKEN);
