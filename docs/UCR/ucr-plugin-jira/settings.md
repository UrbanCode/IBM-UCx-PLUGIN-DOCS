
Jira for IBM UrbanCode Release - Settings
=========================================

# Settings


### Settings



### Process steps in the JIRA Plug-in plug-in

* [Integration](#integration)
*
[JiraFields](#jirafields)
* [JiraPriorities](#jirapriorities)
* [JiraProjects](#jiraprojects)
*
[JiraProjectsOnly](#jiraprojectsonly)
* [JiraStatuses](#jirastatuses)
* [JiraTypes](#jiratypes)
*
[PingServerButton](#pingserverbutton)
* [ResetButton](#resetbutton)
* [UCRApplications](#ucrapplications)


###
Integration

Integration


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Mapping |
| Specify any Text or Single Select field to automatically map to an UrbanCode Release application using the custom
auto map dropdown. (The `Component/s` field is the only exception to the Text or Single Select field rule.) JIRA custom
values must take the form `[ID:]Name`. Use the manual Application Mapping boxes to have maximum control over the desired
Application and Project/Component pairs. If an issue has more than one matching component, a change for each component
will be created. Most commonly, JIRA plug-in users will utilize the `Project` or `Component/s` field. If an Auto Map
field is specified, the manually mapped values will be ignored. | No |
| Auto Map Applications |  | Select the standard
or custom JIRA field to map to Applications in UrbanCode Release. It is suggested that the `Project` or `Component/s`
field is specified. | No |
| Auto Map Releases |  | Select the JIRA field to map to Releases in UrbanCode Release. | No
|
| Child Link Depth (integer) | String | This is number of issue link steps the integration will make to associate
issues to an initiative. If the depth is 2, the issue that is imported as an initiative will be imported and the
children of that issue as well as the children of thos issues will be imported as changes. | No |
| Configuring an
integration provider for JIRA |  | The JIRA plug-in can import various JIRA objects. Select JIRA Application, Release,
Type, and Status mappings to define changes in IBM UrbanCode Release. Migration from the built-in plug-in is not
supported. | No |
| Create New Initiatives | Boolean | Check this box to create Initiatives in UrbanCode Release if they
do not exist. | No |
| Create Releases from Jira Releases (Fix Versions) |  | Specify any Text or Single Select JIRA
field to automatically map to a release in UrbanCode Release using the Release Auto Map dropdown. (The `Fix Version/s`
field is the only exception to the Text or Single Select field rule.) JIRA values must be a single string of name and ID
separated by an underscore or colon. The auto mapping first uses the ID to determine whether a matching Release ID
exists, and otherwise uses the name. Only JIRA issues with a corresponding release will be imported. Most commonly, JIRA
plug-in users will utilize the `Fix Version/s` field. | No |
| Custom Auto Map Initiatives |  | Select the JIRA field
to map to Initiatives in UrbanCode Release. | No |
| Custom Field (Id) Or Issue Link (Name) for Parent Changes | String
| This plugin allows you to use either a custom field (such as Parent Link, customfield\_10202) or an Issue Link to
determine the changes that will be associated to a given initiative | No |
| Custom Issue Type (Name) | String | This
type of issue will be imported as an initiative in UCR | No |
| Custom Issue Types as Initiatives |  | If importing a
custom issue type as an initiative is more suitable than importing epics as initiatives, you may specify the issue type
here. You may also specify the issue link type that is used to import child changes. | No |
| Epics as Initiatives |  |
All Epics will be imported as initiatives, and all linked issues will be added to this initiative | No |
| Full
Integration | Boolean | Select to run the complete integration regardless of the time last run. | No |
| HTTP Proxy Host
| String | Provide the hostname of the HTTP proxy to use to connect to JIRA. Eg proxy.domain.com | No |
| HTTP Proxy
Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide
the port number of the HTTP proxy to use to connect to JIRA. | No |
| HTTP Proxy Username | String | Provide the
username to authenticate with HTTP proxy. | No |
| Import Epics as Initiatives | Boolean | All Epics will be imported as
initiatives, and all linked issues will be added to this initiative | No |
| Import a Custom Issue Type as Initiatives
| Boolean | All issues of the specified issue type will be imported as initiatives, and all linked issues will be added
to this initiative | No |
| Initiative Auto Mapping |  | Specify any Text or Single Select field to automatically map to
an initiative in UrbanCode Release using the custom auto map dropdown. JIRA values must be a single string of name and
ID separated by an underscore or colon. The custom mapping first uses the ID to determine whether a matching Initiative
ID exists, and otherwise uses the name. If the initiative does not exist, the Initiative field for the change in
UrbanCode Release is left blank. | No |
| JIRA Base URL | String | The JIRA server URL | Yes |
| JIRA Password |
Password | The password to use to connect to JIRA | Yes |
| JIRA Username | String | The username to use to connect to
JIRA | Yes |
| Jira Types to Exclude | String | This is a comma-delimited field of Jira Type names to exclude on import
| No |
| Ping the JIRA Server |  | Click to check the connection to the JIRA server. | No |
| Release Auto Mapping |  |
Specify any Text or Single Select JIRA field to automatically map to a release in UrbanCode Release using the Release
Auto Map dropdown. (The `Fix Version/s` field is the only exception to the Text or Single Select field rule.) JIRA
values must be a single string of name and ID separated by an underscore or colon. The auto mapping first uses the ID to
determine whether a matching Release ID exists, and otherwise uses the name. Only JIRA issues with a corresponding
release will be imported. Most commonly, JIRA plug-in users will utilize the `Fix Version/s` field. | No |
| Remove all
imported issues |  | Click to delete all items that were retrieved from the integration. | No |

### JiraFields


Allowed Custom Fields Select. Default, Textbox, and Single Select.

This step has no input properties.

###
JiraPriorities

Priorities Select

This step has no input properties.

### JiraProjects

Project Select

This step
has no input properties.

### JiraProjectsOnly

Project Select

This step has no input properties.

### JiraStatuses


Status Select

This step has no input properties.

### JiraTypes

Type Select

This step has no input properties.


### PingServerButton

Ping the JIRA Server

This step has no input properties.

### ResetButton

ResetButton


This step has no input properties.

### UCRApplications

Application Select

This step has no input properties.



|Back to ...||Latest Version|Jira for IBM UrbanCode Release |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[18.1079383](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-jira/ucr-plugin-jira-18.1079383.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
