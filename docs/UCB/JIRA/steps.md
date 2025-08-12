
JIRA for IBM UrbanCode Build - Steps
====================================

# Steps


### Steps




### Process steps in the JIRA plug-in

* [Add Comments](#add_comments)
* [Check Status](#check_status)
* [Create Issue](#create_issue)
* [Publish Issue Report](#publish_issue_report)
* [Update Issue](#update_issue)


### Add Comments

Add comments to JIRA issues detected by parsing the source change comments of the build life.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Comment | String | The template to use for adding a comment to JIRA Issues. | Yes |
| Fail Mode | Enumeration:
| What should be done when an issue can not be commented on. | Yes |
| Issue ID Pattern | String | A regular expression that represents the IDs to search for in the build life source change comments.Eg. TEST-[0-9]+ | Yes |
| JIRA Workspace |  |  | Yes |

### Check Status

Validate the status of JIRA issues detected by parsing the source change comments of the build life.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail Mode | Enumeration:
| What should be done when an unexpected status is found. | Yes |
| Issue ID Pattern | String | A regular expression that represents the IDs to search for in the build life source change comments.Eg. TEST-[0-9]+ | Yes |
| JIRA Workspace |  |  | Yes |
| Status Name | String | The status to that we expect the issue to be in. | Yes |

### Create Issue

Create a new issue in JIRA. The type of issue created is configurable.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Assignee | String | The JIRA username to assign the issue to. Use -1 to use JIRAs automatic assignment. | Yes |
| Environment | String | The environment of this issue. | No |
| Issue Description | String | The description of this issue. | Yes |
| Issue Type | String | The name of the issue type to create. Eg. Bug, Improvement, New Feature, etc | Yes |
| JIRA Workspace |  |  | Yes |
| Project Key | String | The project key in JIRA | Yes |
| Summary | String | The summary for this issue. | Yes |

### Publish Issue Report

Create a report of JIRA issues detected by parsing the source change comments of the build life.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Issue ID Pattern | String | A regular expression that represents the IDs to search for in the build life source change comments.Eg. TEST-[0-9]+ | Yes |
| JIRA Workspace |  |  | Yes |

### Update Issue

Update JIRA issues detected by parsing the source change comments of the build life.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Action Name | String | The Action which should be performed upon the issues. (e.g. Resolve Issue or Close Issue) | Yes |
| Additional Comment | String | Enter any comments that you would like to be added to the issue when it is updated. Leave the field blank if you do not want to add any comments. | No |
| Issue ID Pattern | String | A regular expression that represents the IDs to search for in the build life source change comments.Eg. TEST-[0-9]+ | Yes |
| JIRA Workspace |  |  | Yes |


### Roles in the JIRA plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Automation](#automation_role)


### Automation


| Name | Type | Description |
| --- | --- | --- |
| Issue URL | String | This field provides a template which will be used to generate links from issues directly to the issue page within JIRA. The value ``${issueId}`` will be replacedin the template with the issue id of the associated issue. Please provide a url template suchas https://bugs.company.com/browse/``${issueId}``. |
| JIRA Base URL | String | The JIRA server URL. Eg. https://bugs.company.com |
| Password | Password | The password to be used to connect to the JIRA server. |
| Password Script | String | If you wish to use a script or server:property lookups for your password, leave the Password field blank and enter it here. |
| Server Version | Enumeration:
| Specify the version of your JIRA server, chose the highest version available without going over your current version (versions 3.9 and above have been reported to workwith the 3.11 integration). |
| User Name | String | The user name to be used to connect to the JIRA server. |



|Back to ...||Latest Version|JIRA for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[7.876389](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/JIRA/JIRA-7.876389.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
