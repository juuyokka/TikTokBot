![TikTokBot](assets/wordmark.svg)

TikTokBot is a Discord bot that reads TikTok links and posts the videos directly into chat.

## Installation

Clone this repo using the following command

```bash
git clone --depth 1 https://github.com/juuyokka/TikTokBot.git
```

Use `npm` or `yarn` to install the dependencies

```bash
npm install OR yarn install
```

## Usage

### Heroku

You can easilly deploy to Heroku with the following button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**You need to add puppeteer heroku buildpack to your Buildpacks** [Click here if you need help. this is where you should add or bot wont run.](https://cdn.discordapp.com/attachments/776404482002780191/793416722920505344/unknown.png)

### Run on local machine

Rename `.env.example` to `.env` and replace text with your bot's token

```conf
TOKEN=BOT-TOKEN-HERE
```

Build and run using `npm` or `yarn`

```bash
npm run build and npm start
OR
yarn build and yarn start
```
