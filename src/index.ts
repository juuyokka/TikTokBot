import { Client } from 'discord.js'

import token from './token'

import handleMessage from './handleMessage'

const client = new Client();

// Some stuff in case the client's upload speed is slow. Increase if nessesary
client.options.restRequestTimeout = 60000;
client.options.retryLimit = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
    client.user?.setPresence({ activity: { name: 'Send TikTok links for videos in chat!' } });
});

client.on('message', handleMessage);

client.login(token);
