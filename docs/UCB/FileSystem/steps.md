
File System for IBM UrbanCode Build - Steps
===========================================

# Steps


### Steps




### Process steps in the File System plug-in

* [FileSystem Changelog](#filesystem_changelog)
* [FileSystem Checkout](#filesystem_checkout)
* [FileSystem Cleanup](#filesystem_cleanup)
* [FileSystem Quiet Period](#filesystem_quiet_period)
* [FileSystem Tag](#filesystem_tag)


### FileSystem Changelog

Get the latest modified date for the working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |

### FileSystem Checkout

Does nothing.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### FileSystem Cleanup

Perform a cleanup of the working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### FileSystem Quiet Period

Get the latest modified date for the working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |

### FileSystem Tag

Does nothing.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |


### Roles in the File System plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [FileSystem Repository](#filesystem_repository_role)
* [FileSystem Source Config](#filesystem_source_config_role)


### FileSystem Repository

Instead of using a SCM system, the File System repository expects files to be present in the working directory.


### FileSystem Source Config


| Name | Type | Description |
| --- | --- | --- |
| Directory Offset | String | Directory offset from the current jobs working directory. (Use . to clone into the current working directory) |
| File Filters | String | Restrict changelog to files matching these patterns. Lines start with + to include andto exclude. Wildcards \*, \*\*, and ? are allowed. |
| Repository |  | Select the File System Repository |



|Back to ...||Latest Version|File System for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[5.913286](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/FileSystem/FileSystem-5.913286.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
