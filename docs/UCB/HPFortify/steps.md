
HP Fortify - Steps
==================

# Steps


### Steps




### Process steps in the HP Fortify plug-in

* [Fortify Build](#fortify_build)
* [Fortify Clean](#fortify_clean)
* [Fortify Scan](#fortify_scan)
* [Fortify Upload](#fortify_upload)


### Fortify Build

Run a build using Fortify


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Id | String | The build id for HP Fortify | Yes |
| Build Options | String | The options passed to the SourceAnalyzer. Each argument should be on a new line. | No |
| HP Fortify Configuration |  |  | No |
| Java Memory Setting | String | An optional argument given to the HP Fortify scan to allocate its maximum memory. Example: -Xmx1200m | No |
| SourceAnalyzer Options | String | A list of new-line or space separated options to add to the SourceAnalyzer command. Example: -64 | No |

### Fortify Clean

Run a clean with the Fortify SourceAnalyzer


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Id | String | The build id for HP Fortify | Yes |
| HP Fortify Configuration |  |  | No |
| Java Memory Setting | String | An optional argument given to the HP Fortify scan to allocate its maximum memory. Example: -Xmx1200m | No |
| SourceAnalyzer Options | String | A list of new-line or space separated options to add to the SourceAnalyzer command. Example: -64 | No |

### Fortify Scan

Run a scan using Fortify and upload the results to uBuild


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Id | String | The build id for HP Fortify | Yes |
| HP Fortify Configuration |  |  | No |
| Java Memory Setting | String | An optional argument given to the HP Fortify scan to allocate its maximum memory. Example: -Xmx1200m | No |
| Report Name | String | The name of the report | Yes |
| Scan File | String | The output file of the scan. The file name must be in FVDL format. | Yes |
| SourceAnalyzer Options | String | A list of new-line or space separated options to add to the SourceAnalyzer command. Example: -64 | No |

### Fortify Upload

Upload the Fortify scan output to the HP Fortify and uBuild servers


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| HP Fortify Configuration |  |  | No |
| Project | String | The Project name in the HP Fortify server to upload results to | Yes |
| Report Name | String | The name of the report | Yes |
| Scan File | String | The output file of the scan. The file name must be in FVDL format. | Yes |
| Version | String | The Project Version name in the HP Fortify server to upload results to. | Yes |


### Roles in the HP Fortify plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [HP Fortify Configuration](#hp_fortify_configuration_role)


### HP Fortify Configuration


| Name | Type | Description |
| --- | --- | --- |
| Access Token | Password | Access Token to use to log in to the HP Fortify server instead of using a username and password |
| Command Path | String | Optional path to the SourceAnalyzer and FortifyClient executables if not on the path. This should only be the path to the directory containing them. |
| Password | Password | Password to login to the HP Fortify server |
| Server URL | String | URL to the HP Fortify server web interface. This should include protocol and port if needed. Eg. http://fortify.example.com:8080 |
| Username | String | Username to login to the HP Fortify server |



|Back to ...||Latest Version|HP Fortify |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[4.752922](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/HPFortify/Fortify-4.752922.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
