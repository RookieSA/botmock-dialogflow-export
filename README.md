# Botmock Dialogflow Export

Import [Botmock](https://botmock.com) projects in [Dialogflow](https://console.dialogflow.com/).

This script produces a compressible directory able to be uploaded to Dialogflow.

## ethos

Currently, the script maps context to the ordering of intents in the Botmock flow to control
conversation paths. In other words, in the flow, a message downstream of a particular intent will
require that intent as input context in the created file. Similarly, output contexts are set by
the intents on connectors that go out of particular messages.

> Note that Dialogflow has a limit of **5** input contexts per intent. Projects should be structured to take account of this fact.

There are future plans to leverage followup intents to accomplish similar goals.

Files are named by the formula: `${PROJECT_NAME}-${...INPUT_CONTEXT}-${MESSAGE_NAME}`.
The hyphens can be replaced by setting the `INTENT_NAME_DELIMITER` environment variable.

## prerequisites

- [Node.js](https://nodejs.org/en/) >= 10.16.x

```shell
node --version
```

- [Dialogflow](https://console.dialogflow.com) account

## guide

Clone this repository and install dependencies:

```shell
git clone git@github.com:Botmock/botmock-dialogflow-export.git

cd botmock-dialogflow-export

npm i
```

Create `.env` in the newly-made directory and fill in values for the following:

```shell
BOTMOCK_TOKEN=@YOUR-BOTMOCK-TOKEN
BOTMOCK_TEAM_ID=@YOUR-BOTMOCK-TEAM-ID
BOTMOCK_BOARD_ID=@YOUR-BOTMOCK-BOARD-ID
BOTMOCK_PROJECT_ID=@YOUR-BOTMOCK-PROJECT-ID
```

Start the script:

```shell
npm start
```

- Run `npm install`.
- Run `npm start`.
- Compress your output directory (`/output` by default).

### importing to Dialogflow

- Visit [your dashboard](console.dialogflow.com) and create a new agent
- Choose the 'Export and Import' tab and choose 'Import From Zip'
- Select your compressed output, typing 'IMPORT' in their form field and clicking 'IMPORT'

## glossary

| **Botmock** | **Dialogflow**  |
| ----------- | --------------- |
| utterance   | training phrase |
| variable    | parameter       |

## want to help?

Found bugs or have some ideas to improve this plugin? We'd love to to hear from you! You can start by submitting an issue at the [Issues](https://github.com/Botmock/botmock-dialogflow-export/issues) tab. If you want, feel free to submit a pull request and propose a change as well!

_NOTE: Make sure to leave any sensitive information out of an issue when reporting a bug with imagery or copying and pasting error data. We want to make sure all your info is safe!_

## license

Botmock Dialogflow Export is copyright © 2019 Botmock. It is free software, and may be redistributed under the terms specified in the LICENSE file.
