
Artifactory for IBM UrbanCode Build - Steps
===========================================

# Steps


### Steps




### Process steps in the Artifactory plug-in

* [Download From Repository](#download_from_repository)
* [Upload Build Information](#upload_build_information)
* [Upload To Repository](#upload_to_repository)


### Download From Repository

Download artifacts from an Artifactory repository


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifactory |  | Select an Artifactory repository from the list or specify a property whose value is the property sheet UUID of the relevant integration. | Yes |
| Repository name | String | The name of the repository. | Yes |
| Target Paths | String | A list of target paths to download. Specify each target path in a separate line. Target path should not contain the repository name. | Yes |
| Verify Hash | Boolean | Verify hash value after each artifact download is completed. | No |

### Upload Build Information

Upload artifacts to an Artifactory repository


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifactory |  |  | Yes |
| Build Info Json File | String | Specify the build info json file containing the build information to be uploaded | Yes |

### Upload To Repository

Upload artifacts to an Artifactory repository


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact Properties | String | Properties to add to each artifact. Properties should be in key=value format in each line | No |
| Artifactory |  | Select an Artifactory repository from the list or specify a property whose value is the property sheet UUID of the relevant integration. | Yes |
| Exclude Patterns | String | List of files to exclude Multiple ant-style patterns can be used, with each pattern in a separate line. | No |
| Include Patterns | String | List of files to include. Multiple ant-style patterns can be used, with each pattern in a separate line. | No |
| Preserve Artifact Directories | Boolean | If this checkbox is checked, the directory structure of the included artifacts (based off of the specified Base Directory property) will be appended to Target Path to determine each artifacts final target path. Otherwise, the final target path will be calculated based on Target Path and included artifacts file names. | No |
| Repository name | String | The name of the repository. | Yes |
| Target Path | String | The target path of the artifacts in Artifactory. | No |


### Roles in the Artifactory plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Artifactory](#artifactory_role)


### Artifactory


| Name | Type | Description |
| --- | --- | --- |
| User name | String | The user name to use to log in to the Artifactory repository. |
| Password | Password | The password to use to log in to Artifactory repository. |
| Artifactory Url | String | The fully-qualified base URL of the Artifactory repository. For example: http://192.168.1.1:8081/artifactory. |
| Password Script | String | The property script to use instead of the Password property to connect to the Artifactory repository. If using this property, do not specify a value for the Password property. |



|Back to ...||Latest Version|Artifactory for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[11.930715](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Artifactory/Artifactory-11.930715.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
