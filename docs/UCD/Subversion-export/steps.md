
# Subversion-Export - Process Steps

* [Svn Export](#svn_export)


## Svn Export

Use this step to checkout or export data from the Subversion repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Clean Workspace | Boolean | Erase all files from the workspace before you export data. | No |
| Command Path | String | The location of the svn command-line executable file. For example, `c:\Program Files\TortoiseSVN\bin\svn.exe`. | No |
| Date | String | The date to export. Use one of these formats: `yyyy-MM-dd HH:mm:ss z` `E MMM dd HH:mm:ss zzz yyyy` milliseconds | No |
| Project Path | String | The project path to export to relative to therepository URL. | Yes |
| Repository Password | Password | The password to authenticate with the Subversion repository. | No |
| Repository Url | String | The base URL of the Subversion repository. | Yes |
| Repository User Name | String | The user name to authenticate with the Subversion repository. | No |
| Revision | String | Revision level to export. If nothing is specified for this property, the export is at the head level. | No |



|Back to ...||Latest Version|Subversion-Export ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[5.1100775](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Subversion-export/Subversion-export-5.1100775.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
