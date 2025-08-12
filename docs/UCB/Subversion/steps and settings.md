
Subversion for IBM UrbanCode Build - Steps and Settings
=======================================================

# Steps and Settings


### Steps and Settings




### Process steps in the Subversion plug-in

* [Svn Changelog](#svn_changelog)
* [Svn Checkout](#svn_checkout)
* [Svn Cleanup](#svn_cleanup)
* [Svn Quiet Period](#svn_quiet_period)
* [Svn Tag](#svn_tag)


### Svn Changelog

Perform a Subversion changelog and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | The last date to include in the changelog. Use the one of the following formats:`yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. | No |
| End Revision | String | The revision level to end the changelog. | No |
| Start Date | String | The begin date to include in the changelog. Use the one of the following formats:`yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. | No |
| Start Revision | String | The revision level to start the changelog. | No |

### Svn Checkout

Checkout or export code from a Subversion repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Clean Workspace | Boolean | Erase all files from the workspace before performing a checkout. | No |
| Date | String | The date of the source code to checkout. Use the one of the following formats: `yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. | No |
| Tag | String | The revision level of the source code to check out. | No |

### Svn Cleanup

Perform a cleanup of the Subversion working directory.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### Svn Quiet Period

Perform a Subversion changelog for a quiet period detection and publish the results.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | The date to stop including data in the changelog. Use one of the following formats:`yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. | No |
| End Revision | String | The ending revision level to include in the changelog. | No |
| Start Date | String | The date to start including data in the changelog.Use one of the following formats:`yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. | No |
| Start Revision | String | The beginning revision level to include in the changelog. | No |

### Svn Tag

Create a branch or tag in Subversion of the specified branch, tag, or date.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message | String | Message text for the commit. | Yes |
| Source Date | String | Date of source to label. Use one of the following formats:`yyyy-MM-dd HH:mm:ss z`, `E MMM dd HH:mm:ss zzz yyyy`, or milliseconds since the Unix Epoch. If you specify a value for this property, you must use Source Branch and you cannot use the **Source Revision** property. | No |
| Source Revision | String | The label for this revision. If a value is specified, you must use Source Branch and you can not use the **Source Tag** or **Source Date** properties. | No |
| Tag | String | The name of the tag you are creating. | No |


The following settings are available when you import component versions by using the Subversion plug-in.


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The location of the `svn` command if it is not specified on the system PATH statement. |
| Is Subversion Repository | Boolean | The repository URL corresponds to a specific Subversion repository. If the repository corresponds to a collection of repositories do not enable this property.A single repository per Subversion repository is more manageable than multiple repositories per Subversion repository. |
| Password Script | String | The script or property to lookup the password. If using a script or property, do not specify a value for the **Repository Password** property. |
| Repository Base URL | String | The base URL of the Subversion repository. |
| Repository Password | Password | The password to use to access the Subversion repository. |
| Repository Username | String | The user name to use to access the Subversion repository using the HTTP or HTTPSprotocol. |



| Name | Type | Description |
| --- | --- | --- |
| Directory Offset | String | Override the root directory of the template to an offset from the current job working directory. You can use a period(.) for the current job working directory. Leave this property blank to have the job working directory changed to the predefined root directory of the template. |
| Exclude Filters | String | A list of user names to exclude. |
| File Filters | String | A list of patterns to determine the files included in the changelog. Lines start with + to include andto exclude.The pattern can include the following wildcards: \*, \*\*, and ?. |
| Ignore Externals | Boolean | The ignore-externals argument is used at checkout. |
| Perform Export | Boolean | Perform an svn export instead of a checkout. |
| Repository |  | The name of the repository to use. |
| Source | String | The path to the project source relative to the repository URL. |
| Tags | String | The path to the project tags directory relative to the repository URL. |



|Back to ...||Latest Version|Subversion for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[11.1023828](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Subversion/Subversion-11.1023828.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
