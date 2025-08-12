
# PVCS - Settings


## Create Component

The following settings are available when you create a component by using the PVCS plug-in.


| Name | Type | Description |
| --- | --- | --- |
| Archive Path | String | The location of the archive relative to the database path. |
| Base Path | String | Base path of the repository. |
| Database Path | String | Path to the PVCS database. |
| Excludes | String | The patterns to exclude files to upload. |
| Extensions of files to Convert | String | The comma-separated list of extensions of files that need to be converted to a new character set on download (for example: txt,properties,log). |
| Includes | String | The patterns to match files to upload. The wildcard \*\* indicates every file. So the pattern dist/\*\*/\* would retrieve the entire file tree underneath the dist directory. |
| PCLI Path | String | Path to the PVCS CLI tool. |
| Password | Password |  |
| Preserve Execute Permissions | Boolean | When enabled, file execute permissions are saved with files. |
| Project Path | String | Path to the project. |
| User | String |  |

## Import New Versions

The following settings are available when you import new component versions by using the PVCS plug-in.


| Name | Type | Description |
| --- | --- | --- |
| Branch | String | Pull the latest files from this branch. (Specify only one of these values) |
| Label | String | Pull the latest files with this label. (Specify only one of these values) |
| Promo Group | String | Pull the latest files in this promotion group. (Specify only one of these values) |
| Version Name | String | Name of the resulting component version. |



|Back to ...||Latest Version|PVCS ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[7.1026780](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PvcsSourceConfig/PvcsSourceConfig-7.1026780.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
