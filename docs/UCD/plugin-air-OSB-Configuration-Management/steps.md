
# Oracle Service Bus Configuration Management - Process Steps

* [Apply Customization](#apply_customization)
* [Import Configuration](#import_configuration)
* [Import Configuration and Apply Customization](#import_configuration_and_apply_customization)


## Apply Customization

Customize Oracle Service Bus with an XML file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Customization XML File | String | The full path to the Oracle Service Bus XML customization file. | Yes |
| Hostname | String | The host name of the computer running Oracle WebLogic Server. | Yes |
| Password | Password | The password of the Oracle WebLogic Server user. | Yes |
| Port | String | The port used by Oracle WebLogic Server. | Yes |
| Timeout | String | Specify a timeout value, in milliseconds, to wait for the customization task to run. | No |
| UserId | String | User ID | Yes |
| WebLogic Dependencies | String | The class path to the WebLogic dependencies that are required to run Oracle Service Bus commands. | Yes |

## Import Configuration

Import a configuration into Oracle Service Bus with a JAR file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Abort On First Failure | Boolean | Select to stop the Oracle Service Bus session after the first failure. Clear to try all specified JAR files. | Yes |
| Always Activate Session | Boolean | Select to activate the session even if failures occur. (This matches behavior from version 1 of the plug-in.) | Yes |
| Configuration JAR Files | String | A list, separated by commas, of paths to Oracle Service Bus configuration JAR files. | Yes |
| Hostname | String | The host name of the computer running Oracle WebLogic Server. | Yes |
| Password | Password | The password of the Oracle WebLogic Server user. | Yes |
| Port | String | The port used by Oracle WebLogic Server. | Yes |
| Timeout | String | Specify a timeout value, in milliseconds, to wait for the configuration task to run. | No |
| UserId | String | User ID | Yes |
| WebLogic Dependencies | String | The class path to the WebLogic dependencies that are required to run Oracle Service Bus commands. | Yes |

## Import Configuration and Apply Customization

Import a configuration into Oracle Service Bus with a JAR file and customize Oracle Service Bus with an XML file in the same WebLogic session.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Abort On First Failure | Boolean | Select to stop the Oracle Service Bus session after the first failure. Clear to try all specified JAR files. | Yes |
| Always Activate Session | Boolean | Select to activate the session even if failures occur. (This matches behavior from version 1 of the plug-in.) | Yes |
| Configuration JAR Files | String | A list, separated by commas, of paths to Oracle Service Bus configuration JAR files. | Yes |
| Customization XML File | String | The full path to the Oracle Service Bus XML customization file. | Yes |
| Hostname | String | The host name of the computer running Oracle WebLogic Server. | Yes |
| Password | Password | The password of the Oracle WebLogic Server user. | Yes |
| Port | String | The port used by Oracle WebLogic Server. | Yes |
| Timeout | String | Specify a timeout value, in milliseconds, to wait for the configuration task to run. | No |
| UserId | String | User ID | Yes |
| WebLogic Dependencies | String | The class path to the WebLogic dependencies that are required to run Oracle Service Bus commands. | Yes |



|Back to ...||Latest Version|Oracle Service Bus Configuration Management |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.914640](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-OSB-Configuration-Management/plugin-air-OSB-Configuration-Management-13.914640.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
