
ClearCase UCM - Steps
=====================

# Steps


### Steps




### Process steps in the ClearCase UCM Snapshot plug-in

* [ClearCase Changelog](#clearcase_changelog)
* [ClearCase Cleanup](#clearcase_cleanup)
* [ClearCase Get Source](#clearcase_get_source)
* [ClearCase Label](#clearcase_label)
* [ClearCase Quiet Period](#clearcase_quiet_period)


### ClearCase Changelog

Perform a ClearCase changelog.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| End Revision | String | End the changelog at this revision | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Start Revision | String | Start the changelog at this revision | No |

### ClearCase Cleanup

Perform a cleanup of the ClearCase working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### ClearCase Get Source

This is a no-op


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Date | String | Date of source code to checkout (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch). Defaults to the current time. | No |
| Source Config |  |  | No |

### ClearCase Label

ClearCase Label Step


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message | String | A message for the label | Yes |
| Source Config |  |  | No |
| Tag | String | The label name to create | Yes |

### ClearCase Quiet Period

Check ClearCase history for quiet period detection and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |


### Roles in the ClearCase UCM Snapshot plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [ClearCase UCM Snapshot Repository](#clearcase_ucm_snapshot_repository_role)
* [ClearCase UCM Snapshot Source Config](#clearcase_ucm_snapshot_source_config_role)


### ClearCase UCM Snapshot Repository

A placeholder for using the scm system. The repository is configured on a per workflow basis.



| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The full path of the cleartool executable including the file name. No value required if already on the path. |

### ClearCase UCM Snapshot Source Config


| Name | Type | Description |
| --- | --- | --- |
| Alternate View | String | Specify an alternate view to be used for the baseline. This is only used with the Label step. |
| Components | String | A comma separated list of the components you would like to baseline. This field is only used with the Label step. |
| Exclude Filters | String | Exclude this list of usernames |
| File Filters | String | Restrict changelog to files matching these patterns. Lines start with + to include andto exclude. Wildcards \*, \*\*, and ? are allowed. |
| Force Label | Boolean | Select here if you want to create a baseline even if there are no changes. This is only used with the Label step. |
| Global Storage Path (gpath) | String | Provides the value for the -gpath parameter to be used in the mkview command. This parameter will be used presented to command verbatim so the viewname will not be appended. This value cannot be empty if you supply a hostname. |
| Host Storage Path (hpath) | String | Provides the value for the -hpath parameter to be used in the mkview command. This parameter will be used presented to command verbatim so the viewname will not be appended. This value cannot be empty if you supply a hostname. |
| Hostname | String | Provides the value for the -host parameter to be used in the mkview command. |
| Label Behavior | Enumeration:
| Select the labeling behavior of the mkbl command. This is only used with the Label step. |
| Paths | String | Please list all the paths in your view in the form: VOB\path\to\files Please specify one rule per line! This information is used to detect changes, cleanup, and populate the snapshot. |
| Populate Using All Components | Boolean | Check this box if you want the populate step to run the update command using only the VOB name, which will pull files from all components within the VOB. If this is unchecked, the update command will use each of the listed paths as the source to pull from instead of the entire VOB. |
| Project VOB Name | String | The name of the Project VOB. It should begin with either \ or /. This is only used when creating a view. Ex: \pvob |
| Repository |  | Select the ClearCase Repository |
| Stream Name | String | The name of the stream used by the view. |
| Tmode | Enumeration:
| The Tmode to use. This is required if you are using a Populate step. |
| Use Tags | Boolean | Select here if you want your view to be globally created. Having this option checked can cause problems with creating and dropping snapshots if you wish to have the same snapshot on multiple agents. |
| Use VOB Time | Boolean |  |
| View Creation Strategy | Enumeration:
| The view strategy to use. Create Once: Create a new view only if one does not already exist. Always Create: Create a new view with every build. Use Existing: The view already exists and will be used every time. |
| View Location | String | If strategy is Use Existing, the location of the view on the local machine. Otherwise, The location of the view storage directory on the ClearCase server where the views are stored. For Windows operating systems this should always be a UNC path. |
| View Name | String | The name of the view. |



|Back to ...||Latest Version|ClearCase UCM ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[16.973040](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ClearCaseUCM/ClearCaseUCM-16.973040.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
