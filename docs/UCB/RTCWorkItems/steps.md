
Rational Team Concert Work Items - Steps
========================================

# Steps


### Steps




### Process steps in the RTC Work Items plug-in

* [Add Comment](#add_comment)
* [Change Work Item Status](#change_work_item_status)
* [Publish Work Item Report](#publish_work_item_report)


### Add Comment

Add Comments from the current changelog to matching RTC work items.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add Changelog Comments | Boolean | Include comments from the changelog. | Yes |
| Additional Comment | String | Any additional text to be added to the RTC work item comment in addtion to the commit comment. | No |
| RTC Repository |  | Select RTC Repository to connect to. | Yes |

### Change Work Item Status

Update the status of RTC work items. \*Note\* If updating multiple work items it is possible that some may be updated within a Failed step if they occurred before the execption was thrown.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Action | String | The action to be performed on the work item(s). | No |
| New Status | String | The new state for the work item(s). (Will not be used if Action is given.) | No |
| RTC Repository |  | Select RTC Repository to connect to. | Yes |
| Work Item Ids | String | A comma separated list of Ids of the defects or tasks for which the state should be updated. Use ``${p:buildlife/issueIds}`` to update all issues in the current build life. | Yes |
| Work Item Types | String | A comma separated list of work item types that will be effected. Leave blank for all. | No |

### Publish Work Item Report

Create a report of RTC work items from the build lifes changelog on the build life.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| RTC Repository |  | Select RTC Repository to connect to. | Yes |
| Work Item Id Pattern | String | This is a regular expression to locate RTC work item Ids within changelog comments. You may add ()s around the portion of the pattern which identifies the actual Issue Id. The pattern DE[0-9]+ would match (returning the same string as issue ids) DE1 and DE932415, but not match DEa, DE, or DE.1The pattern Issue:\[(DE[0-9]+)\] would match Issue:[DE1] using issue Id DE1. | No |


### Roles in the RTC Work Items plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Automation](#automation_role)


### Automation


| Name | Type | Description |
| --- | --- | --- |
| Password | Password | The password to be used to connect to the RTC Server. Either Password or Password Script is required. |
| Password Script | String | If you wish to use a script or property lookups for your password, leave the Password field blank and enter it here. |
| Project Name | String | The name of the RTC project |
| RTC Server URL | String | The URL of the RTC server like https://myserver:9443/jazz |
| User Name | String | The user name to be used to connect to the RTC server. |



|Back to ...||Latest Version|Rational Team Concert Work Items |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[10.866824](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/RTCWorkItems/RTC-WorkItems-10.866824.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
