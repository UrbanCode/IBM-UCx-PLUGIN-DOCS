
# IBM DevOps Deploy Configuration Management - Process Steps

* [Batch Import Properties](#batch_import_properties)
* [Import Properties](#import_properties)
* [Import Resource Properties](#import_resource_properties)
* [Install Template](#install_template)


## Batch Import Properties

Import Component Environment Properties from a properties file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Delete Extra Properties | Boolean | Remove all properties not present in the properties file. | No |
| Excludes | String | Property files or directories containing property files to exclude. | No |
| Includes | String | Property files or directories containing property files to include. | Yes |

## Import Properties

Import Component Environment Properties from a properties file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The component to import properties to. | Yes |
| Delete Extra Properties | Boolean | Remove all properties not present in the properties file. | No |
| Properties File | String | The properties file to import. | Yes |
| Template File | String | The property file to output property resolution values to. | Yes |

## Import Resource Properties

Import Resource Properties from a properties file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Properties File | String | The properties file to import. This file must be in EBCDIC format for z/OS systems. | Yes |
| Resource Name | String | The path/id of the resource to import properties to. | Yes |

## Install Template

Install a configuration template from IBM DevOps Deploy.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Environment Property List | String |  | Yes |
| File Name | String | The name of the template file to download. | No |
| Repository URL | String | The base URL of the VFS server. | Yes |
| Request Id | String | The request Id to lookup the correct template to download. | Yes |



|Back to ...||Latest Version|IBM DevOps Deploy Configuration Management ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[20.1155711](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeployConfigManagement/ucd-uDeployConfigManagement-20.1155711.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
