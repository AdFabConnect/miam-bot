# miam-bot

> A very simple bot based on [Botkit](https://github.com/howdyai/botkit) to notify a Slack channel when it's time to order food on http://foodcheri.com!  
> _miam-bot_ is Heavily inspired by [uzfood-bot](https://github.com/UzfulLab).

## Installation

```bash
npm install
```

### Slack tokens

You need to set an environment variable:

```bash
export SLACK_BOT_TOKEN="xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX"
```

> You'll find `SLACK_BOT_TOKEN` at https://my.slack.com/apps/A0F7YS25R-bots.

### Slack channels

The bot daily message is sent to:
- #test-bot channel on debug mode
- #a-table channel on production mode

## Usage

```bash
# Served with hot reload (+ ESLint verification).
npm run dev

# Run ESLint to check if code respects it's syntax.
npm run lint

# Start server in production environment.
npm run start
```

### Supported commands

Just ask `help` to `@miam-bot`.

## Deploy

### Heroku

```bash
heroku create --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git
heroku config:set SLACK_BOT_TOKEN=xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX
heroku config:set TZ=Europe/Paris
heroku ps:scale web=0 worker=1
```

## Development

This project uses ESLint for its syntax. You should read [some documentation before](http://eslint.org/docs/rules/).

## License

_miam-bot_ is a free software distributed under the terms of the [MIT license](http://opensource.org/licenses/MIT).

Copyright (c) 2017, Arnaud Ligny
