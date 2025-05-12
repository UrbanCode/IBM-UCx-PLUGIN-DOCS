
Control for IBM UrbanCode Build - Steps
===================================

# Steps


### Steps



### Process steps in the Control plug-in

* [Create Control Status](#create-control-status)
* [Control Changelog](#control-changelog)
* [Control Checkout](#control-checkout)
* [Control Cleanup](#control-cleanup)
* [Control Create Tag](#control-create-tag)
* [Control Quiet Period](#control-quiet-period)


### Create Control Status

Create a commit status in Control or Control Enterprise.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Base REST URL | String | The base URL of the REST API. This value should be left blank to be automatically inferred from Control's webhook data, unless a different URL needs be used. | No |
| Context | String | The service that is providing the status. | No |
| Description | String | High level summary of the status update. | No |
| Source Config |  |  | No |
| State | Enumeration: | The state of the status. | Yes |

### Control Changelog

Perform a Control changelog and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| End Revision | String | End changelog at this revision | No |
| Source Config |  |  | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Start Revision | String | Start changelog at this revision | No |

### Control Checkout

Perform a Control checkout of the workflows source


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Clean Workspace | Boolean | Erase all files from the workspace before performing checkout | No |
| Date | String | Date of sourcecode to checkout (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch). Defaults to the current time. | No |
| Source Config |  |  | No |

### Control Cleanup

Perform a cleanup of the Control working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### Control Create Tag

Create a tag in Control of the specified working copy.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message | String | A message for the commit | Yes |
| Source Config |  |  | No |
| Tag | String | The tag name to create | Yes |

### Control Quiet Period

Perform a Control changelog for quiet period detection and publish most recent change date within the period.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |


### Roles in the Control plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

* [Control Repository](#control-repository)
* [Control Source Repo](#control-source-repo)


### Control Repository

Global settings for accessing control repositories.


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The location of the Control executable, if it is not specified in the PATH. |
| Disable Build on Draft PR | Boolean | Skip Build triggers on Draft Pull Requests. |
| Password Script | String | Enter a script or property lookup to obtain the password. This field will only be effective if the Repository Password field is blank. |
| Repository Base URL | String | A URL prefix for source configurations to specify a relative path to the control repository.|
| Repository Password | Password | The password to use for http(s) access to repositories |
| Repository Username | String | The username to use for http(s) access to repositories |
| Use Author Email | Boolean | The plugin will use the committer’s email instead of the author’s name.By default, the author name is used. |

### Control Source Repo


| Name | Type | Description |
| --- | --- | --- |
| Branch | String | The remote branch name to check out (defaults to master) |
| Directory Offset | String | Directory offset from the current jobs working directory. (Use . to clone into the current working directory) |
| Exclude Filters | String | Exclude this list of usernames |
| File Filters | String | Restrict changelog to files matching these patterns. Lines start with + to include and to exclude. Wildcards \*, \*\*, and ? are allowed. |
| Remote Name | String | The name to use for the remote (defaults to origin) |
| Remote URL | String | The path to the project repository e.g. username/project. The value of Remote URL will be appended to the repositorys Base URL |
| Repository |  | Select the Control Repository |



|Back to ...||Latest Version|Control for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[1.1177008](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Control/Control-1.1177008.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
