
ClearCase Base Snapshot - Steps
===============================

# Steps


### Steps




Process steps in the ClearCase Base Snapshot plug-in
----------------------------------------------------

* [ClearCase Changelog](#clearcase_changelog)
* [ClearCase Cleanup](#clearcase_cleanup)
* [ClearCase Get Source](#clearcase_get_source)
* [ClearCase Label](#clearcase_label)
* [ClearCase Quiet Period](#clearcase_quiet_period)


ClearCase Changelog
-------------------

Perform a ClearCase changelog.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End the changelog at this date (‘yyyy-MM-dd HH:mm:ss z’ OR ‘E MMM dd HH:mm:ss zzz yyyy’ OR milliseconds since Unix Epoch) | No |
| End Revision | String | End the changelog at this revision | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (‘yyyy-MM-dd HH:mm:ss z’ OR ‘E MMM dd HH:mm:ss zzz yyyy’ OR milliseconds since Unix Epoch) | No |
| Start Revision | String | Start the changelog at this revision | No |

ClearCase Cleanup
-----------------

Perform a cleanup of the ClearCase working directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

ClearCase Get Source
--------------------

This is a no-op.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Date | String | Date of source code to checkout (‘yyyy-MM-dd HH:mm:ss z’ OR ‘E MMM dd HH:mm:ss zzz yyyy’ OR milliseconds since Unix Epoch). Defaults to the current time. | No |
| Source Config |  |  | No |

ClearCase Label
---------------

ClearCase Label Step.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message | String | A message for the label | Yes |
| Source Config |  |  | No |
| Tag | String | The label name to create | Yes |

ClearCase Quiet Period
----------------------

Check ClearCase history for quiet period detection and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End the changelog at this date (‘yyyy-MM-dd HH:mm:ss z’ OR ‘E MMM dd HH:mm:ss zzz yyyy’ OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start the changelog at this date (‘yyyy-MM-dd HH:mm:ss z’ OR ‘E MMM dd HH:mm:ss zzz yyyy’ OR milliseconds since Unix Epoch) | No |


|Back to ...||Latest Version|ClearCase Base Snapshot |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[14.767774](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ClearCaseBaseSnapshot/ClearCaseBaseSnapshot-14.767774.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Settings](settings.md)|[Downloads](downloads.md)|
