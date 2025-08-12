
# Git - Troubleshooting

For more questions and answers about plug-ins, see the [DevOps forum on IBM developerWorks](https://community.ibm.com/community/user/wasdevops/urbancode-discussion "DevOps forum").

## Import process fails when using GitHub Enterprise

When using the Git source configuration plug-in with GitHub Enterprise, the import process can lock up or fail with the following error message:

Error Creating New Version: GIT error: Cloning into '{temp\_dir}``'... fatal: unable to access 'https://{username}``:\*\*\*\*@{HTTPS\_GitHub\_Repo\_Address}``': Failed to connect to {enterprise\_url}`` port 443: Connection refused

This error is caused by specifying an incorrect user name, password (access token), or GitHub repository address. The user name is the part of your email address before the at sign (@), and does not include the at sign or the domain name. The password is a personal access token that is generated in GitHub Enterprise. GitHub Enterprise requires the use of access tokens as a more secure login method.

To create a personal access token, complete the following steps.

1. Log in to GitHub Enterprise, using your standard user name and password.
2. Click your profile icon at the upper right of the page, and then click Settings.
3. Click **Personal access tokens** on the left side of the window.
4. Click **Generate new token**.
5. Specify a name for the new token. Do not change the default scopes. Click **Generate token**.
6. Copy and save the new token, which is a 40-character string.
7. Use this personal access token as the Git source configuration password.

**Note:** To use this token with other deployments, you must save the token. If you do not save the token, you must follow the previous steps to generate a token again.


|Back to ...||Latest Version|Git |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[28.1176784](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/GitSourceConfig/ucd-GitSourceConfig-28.1176784.zip)|[Readme](README.md)|[Overview](overview.md)|[Settings](settings.md)|[Usage](usage.md)|[Downloads](downloads.md)|
