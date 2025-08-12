
HP Quality Center - Steps
=========================

# Steps


### Steps




### Process steps in the HP Quality Center plug-in

* [Add Comments](#add_comments)
* [Create Issue](#create_issue)
* [Publish Issue Report](#publish_issue_report)
* [Publish Test Set Report](#publish_test_set_report)
* [Run Test Set](#run_test_set)
* [Update Issues](#update_issues)
* [Verify Issues Field](#verify_issues_field)


### Add Comments

Add comments to a defect in HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Comments | String | Any info you wish to be added to the Quality Center comment in addition to the commit comment. | No |
| Defect Ids | String | A regular expression representing a list of bug Ids. Ex: 14[0-9] to match issues 140 through 149. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Fail Mode | Enumeration:
| What should be done when a defect to be commented on is not found in Quality Center. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after attempting to comment on all defects. Warn: log a warning when a defect is not found. | Yes |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |

### Create Issue

Create a new defect in HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Fields | String | Additional defect fields to be added. Enter one per line, as name=value pairs. This uses Javas java.util.Properties format. | No |
| Assignee | String | The assignee for the new defect. | Yes |
| Detected By | String | Who detected the defect. | No |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Priority | String | The priority of the new defect. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Project Key | String | The Project Key in Quality Center. | Yes |
| Quality Center Configuration |  |  | Yes |
| Severity | String | The severity of the new defect. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | Yes |
| Status | String | The status of the new defect. Default values are ( Closed, Fixed, New, Open, Rejected, Reopen ) | No |
| Summary | String | A summary for the new defect. Default max length is 255. | Yes |

### Publish Issue Report

Create a report of Quality Center defects from the current changelog.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Defect Id Pattern | String | The regex used to match changes to defects. The default value, QC-([0-9]+) is a regex that parses the change log and applies the attributes of the step to matching defects. For example, if QC-52 was located in the comment of a change, this step would act on defect 52 in the Quality Center database. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Fail Mode | Enumeration:
| What should be done when a defect to be reported is not found in Quality Center. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after publishing the report of found defects. Warn: log a warning when a defect is not found. | Yes |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |

### Publish Test Set Report

Publish a HP Quality Center Test Set Report.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Folder | String | The folder in Quality Center the test set resides in. This usually starts with Root. | Yes |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |
| Report Name | String | The name of the report published to the Anthill build life. | Yes |
| Test Set | String | The test set results to publish. | Yes |

### Run Test Set

Run a Test Set using HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Folder | String | The folder in Quality Center the test set resides in. This usually starts with Root. | Yes |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |
| Remote Host | String | The host to run the tests on. If left blank, the tests will run locally. | No |
| Success Threshold | String | A numeric value representing the percentage of tests that must succeed for the step to be considered successful. If the test pass rate is below this value, the step will fail. Ex: For the success threshold to be 90%, enter 90. | Yes |
| Test Set | String | The test set to run. | Yes |

### Update Issues

Update one or more defects in HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Fields | String | Any other additional defect fields to update. These should be one per line, as name=value pairs. Adheres specifically to the java.util.Properties format. | No |
| Assignee | String | The new assignee for the defect or blank to not change. | No |
| Capture Mode | Enumeration:
| Choose how to locate defects to update. Select List to list the defect Ids as comma-separated values below. Eg. 4, 24, 13 Select Regex to specify a regular expressions used to parse the build lifes change logs for defects. Eg. QC-([0-9]+) | Yes |
| Comment | String | Optionally add a comment with this update. | No |
| Defect Ids | String | Comma separated list of defect ids to update. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Fail Mode | Enumeration:
| What should be done when a defect to be updated is not found in Quality Center. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after attempting to update all defects. Warn: log a warning when a defect is not found. | Yes |
| Priority | String | The new priority of the defect or blank to not change. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |
| Severity | String | The new severity of the defect or blank to not change. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Status | String | The new status of the defect or blank to not change. Default values are ( Closed, Fixed, New, Open, Rejected, Reopen ) | No |
| Summary | String | A new summary for the defect or blank to not change. Default max length is 255. | No |

### Verify Issues Field


Verify that all of the Issues associated with the current Build Life have a given field values


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check History | Boolean | Check the historical values in addition to the current value | No |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Field Name | String | The field name. Ex: BG\_STATUS | Yes |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Quality Center Configuration |  |  | Yes |
| Require All | Boolean | If all values must be present. Only valid if Check History is also selected | No |
| Value | String | A comma-separated list of expected values. Ex: Fixed,Closed | Yes |


### Roles in the HP Quality Center plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Automation](#automation_role)


### Automation


This represents the connectivity settings for a HP Quality Center. In order for this plugin to work with HP ALM 11 and later, you must open the web UI of HP ALM from the agent machine, click on their Add-ins Page link and install the HP ALM Connectivity add-in.


| Name | Type | Description |
| --- | --- | --- |
| Password | Password | The password to authenticate with Quality Center. |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. |
| Username | String | The username to authenticate with Quality Center. |



|Back to ...||Latest Version|HP Quality Center ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[8.752924](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/HPQualityCenter/HPQualityCenter-8.752924.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
