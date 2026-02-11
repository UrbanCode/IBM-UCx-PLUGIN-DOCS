# Process Steps

## Post Notification to Slack

Send a notification to a Slack channel.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Incoming WebHook | textBox | The Incoming WebHook URL that will accept external messages into Slack. | Yes |
| Channel | textBox | Your public channel within Slack where UrbanCode Deploy messages will be sent. The WebHook must have access to this channel. | Yes |
| Colour | textBox | An optional value that can either be one of good, warning, danger, or any hex color code (eg. #439FE0). | No |
| Emoji Icon | textBox | The list of emoji supported are taken from https://github.com/iamcal/emoji-data . | Yes |
| Environment | textBox | The environment where the application has been deployed. | Yes |
| Component Name | textBox | The name of the component deployed. | Yes |
| Version | textBox | The version of the component deployed. | Yes |

## Post Attachment Notification to Slack

Send a notification to a Slack channel.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Incoming WebHook | textBox | The Incoming WebHook URL that will accept external messages into Slack. | Yes |
| Username | textBox | A custom name overriding the default defined in the webhook configuration | No |
| Channels | textAreaBox | Your public channels or usernames within Slack where UrbanCode Deploy messages will be sent. The WebHook must have access to this channels. Separate each channel or username with a new line or comma. | Yes |
| Emoji Icon | textBox | The list of emoji supported are taken from https://github.com/iamcal/emoji-data . | Yes |
| Attachment Payload | textAreaBox | The Attachment JSON Payload to generate the Slack message. | Yes |

