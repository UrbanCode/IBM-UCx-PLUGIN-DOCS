
Rational Team Concert SCM - Steps and Settings
==============================================

# Steps and Settings


### Steps and Settings




### Process steps in the Rational Team Concert plug-in

* [RTC Changelog](#rtc_changelog)
* [RTC Checkout](#rtc_checkout)
* [RTC Cleanup](#rtc_cleanup)
* [RTC Create Baseline](#rtc_create_baseline)
* [RTC Quiet Period](#rtc_quiet_period)


### RTC Changelog

Create a RTC changelog. The default timeframe for creating the changelog is between the previous BuildLife and the current BuildLife.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Start BuildLife ID | String | The BuildLife ID to begin the changelog. | No |

### RTC Checkout

Checkout source from the RTC repository. There are no input properties for this step.

### RTC Cleanup

Clean the current working directory. There are no input properties for this step.

### RTC Create Baseline

Create a baseline in RTC.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Label | String | The name of the baseline. | Yes |
| Message | String | A description of the baseline. | No |

### RTC Quiet Period

Check the RTC history for quiet period detection and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End the changelog at the specified date. Enter the date in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or in milliseconds since Unix Epoch. | No |
| Start Date | String | Start the changelog at the specified date. Enter the date in one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or in milliseconds since Unix Epoch. | No |


### Settings in the Rational Team Concert SCM plug-in

The following settings are available when you import component versions by using the Rational Team Concert SCM plug-in.

* [RTC Repository](#rtc_repository_role)
* [RTC Source Config](#rtc_source_config_role)

### RTC Repository


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The fully-qualified path of the RTC executable file. If the RTC executable is specified on the system PATH statement, you do not need to specify a value for this property. |
| List Snapshots Command Date Format | String | The date format used in the output of the`list snapshots` SCM command. The default format is `MMM d, yyyy h:mm a`. This property affects only the quiet period jobs. |
| Password Script | String | The property to use for the password to connect to the RTC repository, for example the**``${p:RTCPassword}``** property. If specifying a property, do not specify a value in the **Password** property field. |
| RTC Password | Password | The password to use to connect to the RTC server. |
| RTC Server URL | String | The fully-qualified URL of the RTC server. For example, `https://www.mycompany.com:9443/jazz`. |
| RTC User Name | String | The user name to use to connect to the RTC server. |

### RTC Source Config


This is an RTC source configuration.


| Name | Type | Description |
| --- | --- | --- |
| Baseline | String | Specify a baseline name or alias to build from a baseline. The value for this property isignored if the Snapshot property contains a value. |
| Build Snapshot Description | String | The description of the snapshot created by the server. |
| Build Snapshot Name | String | The name of the snapshot. A snapshot is created for every build. The default is based on the value of the uBuild-``${p:buildlife/id}`` property. |
| Component List | String | A comma-separated list of component names or aliases to load in the local workspace.To specify all, leave this property blank. |
| Directory Offset | String | Override the root directory of the template to an offset from the current job working directory. Use a period (.) for the current job working directory. Leave this property blank for the job working directory to be changed to the predefined root directory of the template. |
| Exclude Users | String | A list of users to exclude from the changelog. Enter each name on a new line. |
| File Filters | String | A list of patterns used to restrict the changelog to files matching the patterns. Specify each pattern on a new line. Patterns cancontain the following wildcards: \*, \*\*, and ?. Begin the line with a plus sign (+) to include or a negative sign (-) to exclue. |
| Force | Boolean | Overwrite existing files when loading. |
| Include Root | Boolean | Load component roots as directories on the file system. |
| Repository |  | The name of the RTC repository. |
| Snapshot | String | Specify a snapshot name or alias to build from a snapshot. |
| Stream | String | The name or alias of the default flow target stream for the workspace. |
| Workspace Name | String | The name of the workspace to use. If the workspace does not exist, it is created. You can use an alias for existing workspaces. |



|Back to ...||Latest Version|Rational Team Concert SCM |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[24.1013888](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/RationalTeamConcert/RTC-scm-24.1013888.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
