# miam-bot

> A very simple bot based on [Botkit](https://github.com/howdyai/botkit) to inform you when it's time to order food on http://foodcheri.com!
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

> You'll find `SLACK_BOT_TOKEN` ay https://my.slack.com/apps/A0F7YS25R-bots.

### Slack channels

The bot daily message is sent to:
- #test-bot channel on debug mode
- #paris channel on production mode

## Usage

```bash
# Served with hot reload (+ ESLint verification).
npm run dev

# Run ESLint to check if code respects it's syntax.
npm run eslint

# Start server in production environment.
npm run start
```

### Supported commands

Just ask `help` to `@miam-bot`.

## Development

This project uses ESLint for its syntax. You should read [some documentation before](http://eslint.org/docs/rules/).

## License

_miam-bot_ is a free software distributed under the terms of the [MIT license](http://opensource.org/licenses/MIT).

Copyright (c) 2017, Arnaud Ligny
