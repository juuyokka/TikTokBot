const { readFileSync } = require('fs');
const { create } = require('tar');
const { gitignore } = require('globby');

const ignore = readFileSync('./.gitignore').toString().split('\n');

const filter = (path, stat) => {
    const isGit = path.endsWith('.git') || path.endsWith('.gitignore');

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