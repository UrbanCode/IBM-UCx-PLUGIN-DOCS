
Team Foundation Server - Steps and Settings
===========================================

# Steps and Settings


### Steps and Settings




### Process steps in the TFS plug-in

* [TFS Changelog](#tfs_changelog)
* [TFS Create Label](#tfs_create_label)
* [TFS Get Source](#tfs_get_source)
* [TFS Quiet Period](#tfs_quiet_period)


### TFS Changelog

Use this step to perform a Team Foundation Server (TFS) changelog and publish the results.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | The date that the changelog is to end. Specify in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since Unix Epoch. | No |
| Start Date | String | The date that the changelog is to begin. Specify in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since Unix Epoch. | No |

### TFS Create Label

Use this step to create a label in TFS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Label | String | The name of the label to create. | No |
| Message | String | The message text for the commit. | Yes |
| Source Date | String | The date of the initial source to get in milliseconds. | Yes |

### TFS Get Source

Use this step to perform a TFS get source action.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Date | String | The date of sourcecode to checkout in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since Unix Epoch. The default value is the requested build date for the workflow. | No |

### TFS Quiet Period

Use this step to perform a TFS changelog for quiet period detection and publish the most recent change date within the period.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | The date the changelog is to end. Specify in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or in milliseconds since Unix Epoch. | No |
| Start Date | String | The date that the changelog is to begin. Specify the date in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or in milliseconds since Unix Epoch. | No |


### Settings in the TFS plug-in

The following settings are available when you import component versions by using the TFS plug-in.

* [TFS Repository](#tfs_repository_role)
* [TFS Source Config](#tfs_source_config_role)


### TFS Repository


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The full path for the `tf.exe` file which is the TFS command line client, if the path is not specified in the system path. |
| Password | Password | The password to use to authenticate with the TFS server. |
| Password Script | String | The script or property to lookup the password. If using a script or property, do not specify a value for the Password property. |
| TFS Server URL | String | The URL of the TFS server. For example: `http://tfs.domain.com:8080`. |
| TFS Server Version | Enumeration
| The version number of the TFS server. |
| User Name | String | The user name to use to authenticate with the TFS server. Enter the user name in the following format: `domain\user`. |

### TFS Source Config


| Name | Type | Description |
| --- | --- | --- |
| Changeset | String | The name of the changeset in TFS to checkout. |
| Create Workspace | Boolean | Create the specified workspace if it does not exist. |
| Directory Offset | String | The directory to retrieve files. If a value is not specified, the TFS default directory is used. |
| Exclude Filters | String | A list of user names to exclude. Enter users names in the following format: `domain/user`. |
| File Filters | String | List of patterns to determine files to include. Files matching the pattern are included in the changelog. Start the lines with a plus sign(+) to include or a minus sign (-) to exclude. The following wildcards are permitted: asterisk(\*), double asterisk(\*\*), and question mark(?). |
| Force Get Source | Boolean | Use the `/force` flag for the tf get command. |
| Label | String | The label name in TFS to checkout from. |
| Remove All Files | Boolean | Delete all files from the local workspace directory during the cleanup step.This feature overrides the **Remove Unversioned files** and **Revert Versioned Files** properties. |
| Remove Unversioned Files | Boolean | Remove all local files that are not in TFS during the cleanup step. |
| Repository |  | The repository in TFS. |
| Revert Versioned Files | Boolean | Reverse any versioned files during cleanup step. This feature runs the undo command for the workspace. |
| Source Location | String | The location of the project source in TFS. For example: $/Test-Project. |
| Workspace Name | String | The name of the TFS workspace. |



|Back to ...||Latest Version|Team Foundation Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[11.1049734](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/TFS/TFS-11.1049734.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
