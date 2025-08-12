
AccuWork - Steps
================

# Steps


### Steps




### Process steps in the AccuWork plug-in

* [Add Comments](#add_comments)
* [Change Status](#change_status)
* [Get Details](#get_details)


### Add Comments

Use this step to add comments to one or more existing issues.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AccuWork Config |  | The name of the AccuWork integration. | Yes |
| Comment | String | The comment text to add. | Yes |
| Issue ID List | String | A comma-separated list of issue IDs for which a comment is added.If you do not specify a value for this property, a comment is added to all issues detected through source changes in AccuRev on the current build life. | No |

### Change Status

Use this step to change the status of one or more existing issues.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AccuWork Config |  | The name of the AccuWork integration. | Yes |
| Issue ID List | String | A comma-separated list of issue IDs for which the status is changed. If you do not specify a value for this property, all issues detected through source changes in AccuRev on the current build life are changed. | No |
| New Status | Enumeration:
| The new status for the issues. | Yes |

### Get Details

Use this step to retrieve information about issues using source changes detected in AccuRev.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AccuWork Config |  | The name of the AccuWork integration. | Yes |



The following settings are available when you import component versions by using the AccuWork plug-in.



| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The location of the AccuRev executable if not on the system PATH statement. |
| Depot Name | String | The AccuRev depot name or ID. If a value isnot specified for this property, the depot name is taken from the AccuRev change set information and the AccuRev repository configuration must have a value for the **Depot Name** property. |
| Issue URL | String | This field is used to generate a link to the issue page within AccuWork. Some specific patterns are replaced with the appropriate values. For example, the pattern ```${issueId}``` is replaced with the issue ID of the associated issue and ```${depot}``` is replaced with the value of the **Depot Name** property. The results is `http://accuwork:8080/accurev/issue/``${depot}``/``${issueId}```. |
| Password | Password | The password to be used to connect to the AccuWork server. |
| Password Script | String | If you wish to use another property for your password, do not specify a value for the **Password** property, instead; enter a value in this property. For example: ```${p:AccuWorkPassword}```. |
| Repository Host | String | The hostname and port of the AccuRev server. Specify in format: `host:port`. |
| User Name | String | The user name to be used to connect to the AccuWork server. |



|Back to ...||Latest Version|AccuWork |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[8.1096129](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/AccuWork/AccuWork-8.1096129.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
