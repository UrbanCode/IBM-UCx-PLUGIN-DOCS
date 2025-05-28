
# AccuRev SCM - Steps and Roles


## Process steps in the AccuRev plug-in

* [Import Version](#import_version)


## Import Version

Creates a new component version and imports artifacts from AccuRev.

This step has no input properties.


## Roles in the AccuRev plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [AccuRevComponentProperties](#accurevcomponentproperties_role)
* [AccuRevImportProperties](#accurevimportproperties_role)


## AccuRevComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| AccuRev Executable Path | String | Full path to the AccuRev executable on the agents file system. |
| AccuRev URL | String | Full URL for the AccuRev server. Hostname and port can be identified by running the `accurev info` command locally. |
| Depot | String | Specify a Depot to retrieve artifacts from. |
| Excludes | String | Specify a list of files to exclude during artifact import. |
| Import Issues | Boolean | Select to import latest Issue change set artifacts on automatic import. Artifacts will still be retrieved if the Issue number is specified on manual import. Only valid for a non-Workspace Stream. |
| Import Promote Transactions | Boolean | Select to import latest Promote Transaction artifacts on automatic import. Artifacts will still be retrieved if the Transaction number is specified on manual import. Only valid for a non-Workspace Stream. |
| Import Snapshots | Boolean | Select to import latest Snapshot artifacts on automatic import. Artifacts will still be retrieved if the Snapshot name is specified on manual import. Only valid for a non-Workspace Stream. |
| Includes | String | Specify a list of files to include during artifact import. |
| Password | Password | Specify the password of the user with permissions to access the AccuRev Depot and Stream. |
| Preserve Execute Permissions | Boolean | Select to save file execute permissions with files. |
| Stream | String | Specify a Stream or Workspace to retrieve artifacts from. If empty, the Depot name will be used. If a Workspace is specified, the checkboxes and manual import values for Promote Transactions, Issues, and Snapshot will be ignored. A version will be created based on the runtime timestamp and file contents of the Workspace. |
| Username | String | Specify a user with permissions to access the AccuRev Depot and Stream. |

## AccuRevImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Issue Numbers | String | Specify a Issue Number to import. Only valid for a non-Workspace Stream. Separate multiple Issue Numbers with commas. Example: 5, 16, 27 |
| Stream Snapshots | String | Specify a Stream Snapshot to import. Only valid for a non-Workspace Stream. Separate multiple Snapshots with a comma. Example: snap-stream1, snap-stream2 |
| Transaction Numbers | String | Specify a Promote Transaction Number to import. Only valid for a non-Workspace Stream. Separate multiple Transaction Numbers with commas. Example: 80, 120, 184 |
| Version Name Tag | String | Specify a tag to append to the versions name. |



|Back to ...||Latest Version|AccuRev SCM ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.1100795](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AccuRevSourceConfig/AccuRevSourceConfig-9.1100795.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
