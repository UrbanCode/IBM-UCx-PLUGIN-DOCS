
AccuRev - Settings
==================

# Settings


### Settings




The following settings are available when you import component versions by using the AccuRev plug-in.


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The location of the AccuRev command executable file, if the location is not specified on the system PATH statement. |
| Depot Name | String | The name or ID of the AccuRev depot. The depot is the repository on the server for all related source code. The value for this property can be used as part of the sourceconfig stream name with **``${source/repo/depotName}``**. If set, this will be recorded with any source changes for use by the AccuWork plug-in. |
| Password | Password | The password to be used to connect to the AccuRev server. |
| Password Script | String | The property to use for the password to connect to the AccuRev server. For example: ``${p:AccuRevPassword}``. If this property is specified, do not specify a value for the Password property. |
| Repository Host | String | The location of the AccuRev server. Specify in the format: `host:port`. |
| User Name | String | The user name to be used to connect to the AccuRev server. |


| Name | Type | Description |
| --- | --- | --- |
| Directory Offset | String | The directory offset of the working directory for the current job. Use a period (.) to clone into the current working directory. |
| Exclude Filters | String | A list of user names to exclude. |
| File Filters | String | Restrict the changelog to files matching these patterns. Start each lines with a plus sign (+) to include or minus sign (- )to exclude. You can use the following wildcards in the pattern: \*, \*\*, and ?. |
| Populate Locations | String | A list of depot-relative path for the files that you want to populate the workspace or stream. The pop command is use to restore the listed files.Only the specified files are updated, without building the associated directory tree. |
| Repository |  | The AccuRev repository to be used. |
| Revision | String | The version that is to be checked out. |
| Stream | String | The stream that is to be checked out. |



|Back to ...||Latest Version|AccuRev |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[6.752929](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/AccuRev/AccuRev-6.752929.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
