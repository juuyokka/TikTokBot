const { readFileSync } = require('fs');
const { basename } = require('path');
const { create } = require('tar');
const { gitignore } = require('globby');

const ignore = readFileSync('./.gitignore').toString().split('\n');

const filter = (path, stat) => {
    const base = basename(path);
    const isGit = base == '.git' || base == '.gitignore';

    return !gitignore.sync()(path) && !isGit;
}

create(
    {
        file: 'TikTokBot.tar.gz',
        sync: true,
        gzip: true,
        prefix: 'TikTokBot',
        filter
    },
    [ '.' ]
)
