
# JIRA for IBM DevOps Deploy - Process Steps


* [Add Comments](#add_comments)
* [Check Status](#check_status)
* [Create Issue](#create_issue)
* [Does issues exist](#does_issues_exist)
* [Edit Issue](#edit_issue)
* [Transition Issue](#transition_issue)


## Add Comments

Use this step to add comments from the current changelog to the matching JIRA issues.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Comment | String | The template to use for adding a comment to JIRA issues. | Yes |
| Fail Mode | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
* FAIL\_ON\_NO\_UPDATES
| The action to take when an unknown issue ID is found. | Yes |
| Issue IDs | String | A list of issue IDs to update. Separated by commas and/or newline characters. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server. If this method is used to authenticate with the server, leave the Password property blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |

## Check Status

Check JIRA Issues


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail Mode | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
* FAIL\_ON\_NO\_UPDATES
* FAIL\_ON\_ANY\_FAILURE
| The action to take when an issue ID cannot be found. | Yes |
| Issue IDs | String | A list of issue IDs to check. Separated by commas and/or newline characters. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server. If this method is used to authenticate with the server, leave the Password property blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Status Name | String | The expected status of the issue. | Yes |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |

## Create Issue

Use this step to create a new issue in a JIRA Bug Tracker.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Assignee | String | The assignee for the new issue. If there is no value for this property, the assignee uses the JIRA automatic assignment. | No |
| Components | String | Components for the new issue. Separated by commas and/or newline characters. | No |
| Custom Fields | String | A JSON object used to set custom field values on the JIRA issue. If standard field names are used here, they will be silently ignored. See https://docs.atlassian.com/jira/REST/latest/ for syntax. | No |
| Environment | String | The environment for this issue. | No |
| Fix Versions | String | Fix versions for the new issue. Separated by commas and/or newline characters. | No |
| Issue Description | String | The description of this issue. | No |
| Issue Type | String | The name of the issue type to create. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Labels | String | Labels for the new issue. Separated by commas and/or newline characters. | No |
| Parent Issue ID | String | The issue ID of the parent issue.Overrides environment if entered, ignored if empty. | No |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server.If this method is used to authenicate with the server, leave the Password field blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Priority | String | The priority of the created issue. All values are predefined JIRA priority names. | Yes |
| Project Key | String | The project key in JIRA. | Yes |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Summary | String | The summary for this issue. | Yes |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |

## Does issues exist

Check if issues with specified issue type exists


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JIRA projects | String | A list of Jira project names or keys separated by commas. Note : Please surround the name with quotes if it has spaces. | No |
| Issue Type | Enumeration:
* Bug
* Epic
* Story
* Sub-task
* Task
| Type of issue. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server. If this method is used to authenticate with the server, leave the Password property blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Status Name | Enumeration:
* All
* Closed
* In Progress
* Open
* Reopened
* To Do
* Resolved
* Done
| Search issues for sepcified status. | Yes |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |

## Edit Issue

Use this step to edit fields on an existing JIRA issue.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Components | String | Components to be added to the issue. Separated by commas and/or newline characters. | No |
| Custom Fields | String | A JSON object used to set custom field values on the JIRA issue. If standard field names are used here, they will be silently ignored. See https://docs.atlassian.com/jira/REST/latest/ for syntax. | No |
| Fail Mode | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
* FAIL\_ON\_NO\_UPDATES
* FAIL\_ON\_ANY\_FAILURE
| The action to perform when an unknown issue ID is found. | Yes |
| Fix Versions | String | Fix versions to be added to the issue. Separated by commas and/or newline characters. | No |
| Issue IDs | String | A list of issue IDs to edit. Separated by commas and/or newline characters. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server.If this method is used to authenicate with the server, leave the Password field blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |

## Transition Issue

Use this step to perform JIRA issue transitions.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Comment | String | Comments to add to the issue when it is updated. Leave the field blank to exclude comments. You can use scripts in this field. | No |
| Custom Fields | String | A JSON object used to set custom field values on the JIRA issue during transition. If standard field names are used here, they will be silently ignored. See https://docs.atlassian.com/jira/REST/latest/ for syntax. | No |
| Fail Mode | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
* FAIL\_ON\_NO\_UPDATES
* FAIL\_ON\_ANY\_FAILURE
| The action to perform when an unknown issue ID is found. | Yes |
| Issue IDs | String | A list of issue IDs. Separated by commas and/or newline characters. | Yes |
| JIRA Base URL | String | The URL of the JIRA server. | Yes |
| Password | Password | The password to use to connect to the JIRA server. | No |
| Password Script | String | The property or script to use to authenticate with the JIRA server. If this method is used to authenticate with the server, leave the Password attribute blank. | No |
| PAT token | Password | The PAT token to authenticate with the Jira Server 9(On Prem). If using pat token, username and password will be ignored. | No |
| Proxy Hostname | String | The hostname to be specified if connecting through http proxy. | No |
| Proxy Port | String | The port number to be specified if connecting through http proxy. | No |
| Resolution Name | String | The resolution which the action has caused. For example, Fixed or Cannot Reproduce. This property is applicable only when the value for the Action Name property is Resolve Issue or Close Issue. | No |
| Transition Name | String | The transition action to perform upon the issues. For example, Resolve Issue or Close Issue. | Yes |
| Trust All Certificates | Boolean | Select this option to allow insecure connections to the server. | No |
| User Name | String | The user name to use to connect to the JIRA server. | No |



|Back to ...||Latest Version|JIRA for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[19.1167047](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/JIRA/ucd-JIRA-19.1167047.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
