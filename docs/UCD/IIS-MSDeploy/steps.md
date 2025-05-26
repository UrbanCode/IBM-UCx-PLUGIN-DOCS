
# Microsoft IIS MS-Deploy (Azure App Service) - Process Steps

* [Delete](#delete)
* [Recycle Application](#recycle_application)
* [Start Application](#start_application)
* [Stop Application](#stop_application)
* [Synchronize](#synchronize)
* [msdeploy](#msdeploy)


## Delete

Delete an IIS object.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Options String | String | A newline separated list of options to be concatenated onto the delete command. i.e. -setParam:hello,value=hey\n-setParam:goodbye,value=seeya. | No |
| Provider Destination | String | The Provider path and setting for the destination in the form path,setting1,setting2 | Yes |
| Provider Type | Enumeration:
* iisApp
* archiveDir
* contentPath
* dirPath
* filePath
* manifest
* package
* appHostConfig
| The provider type for the destination argument of the delete. | Yes |

## Recycle Application

Recycle an application in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Target Name | String | The name of the Web Site or Application, i.e. WebSite/MyApp | Yes |

## Start Application

Start an application in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Target Name | String | The name of the Web Site or Application, i.e. WebSite/MyApp | Yes |

## Stop Application

Stop an application in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Target Name | String | The name of the Web Site or Application, i.e. WebSite/MyApp | Yes |

## Synchronize

Synchronize two IIS objects.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Destination Provider Type | Enumeration:
* auto
* iisApp
* archiveDir
* contentPath
* dirPath
* filePath
* manifest
* metaKey
* package
* webServer
* webServer60
* appHostConfig
| The provider type for the destination argument of the synchronize. | Yes |
| Options String | String | A newline separated list of options to be concatenated onto the synchronize command. i.e. -setParam:hello,value=hey\n-setParam:goodbye,value=seeya. | No |
| Provider Destination | String | The Provider path and setting for the destination in the form path,setting1,setting2 | No |
| Provider Source | String | The Provider path and setting for the source in the form path,setting1,setting2 | Yes |
| Source Provider Type | Enumeration:
* iisApp
* archiveDir
* contentPath
* dirPath
* filePath
* manifest
* metaKey
* package
* webServer
* webServer60
* appHostConfig
| The provider type for the source argument of the synchronize. | Yes |

## msdeploy

Run an msdeploy command


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The directory location of the msdeploy.exe command-line executable: e.g., C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Destination Provider Type | String | The provider type for the destination argument of the command. | No |
| Options String | String | A newline separated list of options to be concatenated onto the command. i.e. -setParam:hello,value=hey\n-setParam:goodbye,value=seeya. | No |
| Provider Destination | String | The Provider path and setting for the destination in the form path,setting1,setting2 | No |
| Provider Source | String | The Provider path and setting for the source in the form path,setting1,setting2 | No |
| Source Provider Type | String | The provider type for the source argument of the command. Required if providing Provider Source. | No |
| Verb | String | The verb (operation) to be performed by msdeploy | Yes |



|Back to ...||Latest Version|Microsoft IIS MS-Deploy (Azure App Service) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1164186](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IIS-MSDeploy/ucd-IIS-MSDeploy-6.1164186.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
