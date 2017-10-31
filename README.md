# miam-bot

> A very simple bot based on [Botkit](https://github.com/howdyai/botkit) to notify a Slack channel when it's time to order food on http://foodcheri.com!
> _miam-bot_ is Heavily inspired by [uzfood-bot](https://github.com/UzfulLab).

![Slack screen capture](./docs/miam-bot-slack-example.png)

## Installation

```bash
npm install
```

### Slack token

You need to set an environment variable:

```bash
export SLACK_BOT_TOKEN="xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX"
```

> You'll find your Slack token at https://my.slack.com/apps/A0F7YS25R-bots.

## Configuration

See `config.json` file.

### Slack channel

Set `CHANNEL` key.

By default, the bot daily message is sent to:
- `#test-bot` channel on _development_ environment
- `#a-table` channel on _production_ environment

### Reminder schedule

Set `SCHEDULE` key.

The cron-style scheduling format consists of:
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

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

Copyright (c) 2017, AdFab
