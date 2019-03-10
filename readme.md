
[![CircleCI](https://circleci.com/gh/yuta-ron/kujira.svg?style=svg)](https://circleci.com/gh/yuta-ron/kujira)

#### Slackに投稿してくれるやつ

#### やること
1. IncomingWebHookを有効にしておく
2. 環境変数を設定する
```
SLACK_ENTRYPOINT=https://hooks.slack.com/services/xxxxxxxx
TARGET_CHANNEL=xxxxxx
USER_NAME=xxxxxx
ICON_URL=https://xxxxx.jpg
TEST_USER_NAME=xxxxx
TEST_ICON_URL=https://xxxxxxx
```

#### 使い方
`docker-compose up` するだけ
