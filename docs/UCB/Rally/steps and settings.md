
Rally for IBM UrbanCode Build - Steps and Settings
==================================================

# Steps and Settings


### Steps and Settings






### Process steps in the Rally plug-in

* [Add Comments](#add_comments)
* [Change Rally Artifact Property](#change_rally_artifact_property)
* [Change Status](#change_status)
* [Create Defect](#create_defect)
* [Publish Defect Report](#publish_defect_report)
* [Report Build Status](#report_build_status)


### Add Comments

Add comments from the current changelog to defects that match the specified pattern.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Comment | String | Text to add to the Rally defect comment in addition to the commit comment. | No |
| Defect ID Pattern | String | A regular expression to use to locate Rally defect IDs in changelog comments. Use parentheses to group the part of the pattern that identifies the issue ID. For example, the pattern DE[0-9]+ matches DE1 and DE932415, but it does not match DEa, DE, or DE.1. However, the pattern Issue:\[(DE[0-9]+)\] matches Issue:[DE1] using Issue ID DE1. | No |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |
| Task ID Pattern | String | A regular expression to locate Rally Task IDs in changelog comments. You can add parentheses around the part of the pattern that identifies the actual Task ID. The pattern TA[0-9]+ matches TA1 and TA932415, but does not match TAa, TA, or TA.1.The pattern Issue:\[(TA[0-9]+)\] matches Issue:[TA1] using Task ID TA1. | No |
| User Story ID Pattern | String | A regular expression to locate Rally User Story IDs in changelog comments. You can add parentheses around the portion of the pattern that identifies the User Story Issue ID. The pattern US[0-9]+ matches US1 and US932415, but does not match USa, US, or US.1.The pattern Issue:\[(US[0-9]+)\] matches Issue:[US1] using User Story ID US1. | No |

### Change Rally Artifact Property

Update a property on a Rally artifact.

`


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| newValue | String | The new values for the artifacts properties. This can either be one value for all artifacts or a comma-separated list of values, where the number of values must match the number of artifact IDs. If the property is a select from list in Rally, then the value must match exactly. It is case sensitive. | Yes |
| Artifact IDs | String | A comma separated list of artifact IDs for which the state is to be updated. Use ``${p:buildlife/issueIds}`` to update all issues in the current buildlife. | Yes |
| Object Type | String | The type of artifacts to update. The specified artifact must match the type in the Rally Rest API documentation which can be found at %rallybase%/slm/doc/webservice/index.jsp, where %rallybase% is the Rally url such as https://trial.rallydev.com. Command examples include Task, Defect, HierarchicalRequirement, and more. | Yes |
| Property | String | The property to be updated. This must match the documentation for the Rally property name. It is case sensitive. | Yes |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |

### Change Status

Change the status of a defect.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Item Type | Enumeration:
| The type of item to be updated. The type can be a defect, task or user story. | Yes |
| Items IDs | String | A comma-separated list of Defect IDs, Task IDs, or User Story IDs to change the state of.Use ``${p:buildlife/issues/id}`` to update all issues in the current build life. | Yes |
| New State | Enumeration:
| The state to change to. The state can be Submitted, Open, Fixed, or Closed. | Yes |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |

### Create Defect

Create a defect in the Rally repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Defect Description | String | The description for the defect. | No |
| Defect Name | String | The name for the new defect. | Yes |
| Environment | Enumeration:
| The environment for the defect. The environment can be Development, Test, Staging, or Production. | No |
| Found in Build | String | The build where the defect was found. | No |
| Priority | Enumeration:
| The priority for the defect. The priority can be Resolve Immediately, High Attention, Normal, or Low. | No |
| Project Name | String | The project key in Rally to use when you create a defect that is general for the project and not for a specific User Story. This or the requirement key below is required | No |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |
| Severity | Enumeration:
| The severity for the defect. The severity can be Crash/Data Lost, Major Problem, Minor Problem, orCosmetic. | No |
| State | Enumeration:
| The state for the defect. The state can be Submitted, Open, Fixed, or Closed. | Yes |
| Submitted By | String | The name of the person who submitted the defect. The specified value must match a user name defined in Rally. | No |
| User Story ID | String | The User Story in Rally to create the defect under a specific User Story in your project. This or the project key above is required. | No |

### Publish Defect Report

Create a report of Rally defects based on the current changelog.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Defect ID Pattern | String | A regular expression to use to locate Rally defect IDs in changelog comments. You can add parentheses around the part of the pattern that identifies the Issue ID.The pattern DE[0-9]+ matchesDE1 and DE932415, but it does not match DEa, DE, or DE.1.The pattern Issue:\[(DE[0-9]+)\] matches Issue:[DE1] using Issue ID DE1. | No |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |
| Task ID Pattern | String | A regular expression to locate Rally Task IDs in changelog comments. You can add parentheses around the part of the pattern that identifies the actual Task ID. The pattern TA[0-9]+ matches TA1 and TA932415, but does not match TAa, TA, or TA.1.The pattern Issue:\[(TA[0-9]+)\] matches Issue:[TA1] using Task ID TA1. | No |
| User Story ID Pattern | String | A regular expression to locate Rally User Story IDs in changelog comments. You can add parentheses around the portion of the pattern that identifies the User Story Issue ID. The pattern US[0-9]+ matches US1 and US932415, but does not match USa, US, or US.1.The pattern Issue:\[(US[0-9]+)\] matches Issue:[US1] using User Story ID US1. | No |

### Report Build Status

Report the build status to Rally.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Definition ID | String | The Build Definition ID associated with the project that you want to assign the build status. | Yes |
| Build Number | String | The build number or the label applied to the build if Rally is version 1.20 or earlier. | No |
| Duration | String | The number of milliseconds for the build. | No |
| Message | String | Message for this build status. | No |
| Rally Workspace |  | The name of the Rally workspace to use. | Yes |
| Status | Enumeration:
| Was the build success or failure. | Yes |


### Settings

The following integration settings are available when you install the Rally plug-in.



| Name | Type | Description |
| --- | --- | --- |
| Password | Password | The password to use to connect to the Rally server. |
| Password Script | String | If you wish to use a script or property lookups for your password, leave the Password property blank and enter it here. |
| Proxy Host | String | The host name, if there is a proxy between the agent and the Rally server. |
| Proxy Password | Password | The password, if there is a proxy between the agent and the Rally server. |
| Proxy Port | String | The port number, if there is a proxy between the agent and the Rally server. |
| Proxy User name | String | The user name, if there is a proxy between the agent and the Rally server. |
| Rally Base URL | String | The Rally server URL to connect to. For example: https://trial.rallydev.com. |
| Rally Workspace Name | String | The name of the Rally workspace to use. |
| User Name | String | The user name to use to connect to the Rally server. |



|Back to ...||Latest Version|Rally for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[17.1126865](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Rally/ucd-Rally-17.1126865.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
