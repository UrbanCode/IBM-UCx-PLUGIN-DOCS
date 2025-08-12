# Available Steps

## Send an SMTP email

| Name                 | Type   | Description                                                                                                                                                                                                                           | Required |
|----------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| To List              | String | Comma separated list of email addresses to send an email to                                                                                                                                                                           | Yes      |
| Subject              | String | The email subject                                                                                                                                                                                                                     | No       |
| Message              | String | The message contents                                                                                                                                                                                                                  | Yes      |
| Attachment           | String | The attachment (with full path) to send with the mail. Ex - /home/manisha/file.txt.                                                                                                                                                   | No       |
| SMTP Host            | String | The SMTP Host server (Ex: mail.smtp.host). If left blank, the Mail Server Host property from the General Settings will be retrieved. Must have General Settings privileges for this capability.                                       | No       |
| SMTP Port            | String | The SMTP server port (Ex: mail.smtp.port). If left blank, the Mail Server Port property from the General Settings will be retrieved. Must have General Settings privileges for this capability.                                       | No       |
| SMTP Secure TLS      | String | Select to enable SMTP TLS Security. (Ex: mail.smtp.starttls.enable) If left blank, the Secure Mail Server Connection property from the General Settings will be retrieved. Must have General Settings privileges for this capability. | No       |
| Sender Email Address | String | THE SMTP Sender Email Address. If left blank, the Mail Server Sender Address property from the General Settings will be retrieved. Must have General Settings privileges for this capability.                                         | No       |
| Username             | String | THE SMTP username. The authentication properties will not be pulled from the General Settings.                                                                                                                                        | Yes      |
| Password             | String | THE SMTP password. The authentication properties will not be pulled from the General Settings.                                                                                                                                        | Yes      |

|Back to ...||Latest Version|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[4.1179024](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Send-SMTP-Email/devops-deploy-Send-SMTP-Email-4.1179024.zip)|[Downloads](downloads.md)|[README](README.md)|[Overview](overview.md)|[Usage](usage.md)|