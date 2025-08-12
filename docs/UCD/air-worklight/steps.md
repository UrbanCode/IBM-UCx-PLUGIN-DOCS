
# IBM MobileFirst Platform (formerly Worklight) - Process Steps


* [Change Application Configuration](#change_application_configuration)
* [Delete Adapter](#delete_adapter)
* [Delete Application](#delete_application)
* [Deploy Adapter](#deploy_adapter)
* [Deploy Application](#deploy_application)
* [Deploy Web Resource](#deploy_web_resource)
* [Remove Application from Application Center](#remove_application_from_application_center)
* [Upload Application to Application Center](#upload_application_to_application_center)


## Change Application Configuration


Changes an applications configuration on IBM MobileFirst. Note: This step is for server 6.2 or later.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The application name to reconfigure. | Yes |
| Configuration File | String | The .json or .xml file path containing the applications new configuration. | Yes |
| Environment | String | The name of the environment. | Yes |
| Password | Password | The users password to access the IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Runtime | String | The runtime on which to change the applications configuration. | Yes |
| Secure | Boolean | Whether to transmit in a secure way. Utilized in versions 6.2 to 7.1. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access a secure IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Version | String | The name of the version. | Yes |
| Worklight Ant JAR File Path | String | The path to the Worklight Ant Deployer JAR (worklight-ant-deployer.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/worklight-ant.jar. Required for server versions less than 8.0. | No |

## Delete Adapter


Deletes the adapter from the IBM MobileFirst server. Note: This step is for Worklight and IBM MobileFirst servers 6.2 and later.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Adapter Name | String | The adapter to delete from the IBM MobileFirst server. | Yes |
| Password | Password | The users password to access the IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Runtime | String | The runtime on which to remove the adapter. | Yes |
| Secure | Boolean | Whether to transmit in a secure way. Utilized in server versions 6.2 to 7.1. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access a secure IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Worklight Ant JAR File Path | String | The path to the Worklight Ant Deployer JAR (worklight-ant-deployer.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/worklight-ant.jar. Required for server versions less than 8.0. | No |

## Delete Application


Delete an application from IBM MobileFirst. Note: This step is for Worklight Server 6.2 or later.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the Worklight application to remove. | Yes |
| Environment | String | The applications environment. Only required if using IBM MobileFirst v8+. | No |
| Password | Password | The users password to access the IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Runtime | String | The runtime on which to remove the IBM MobileFirst application. Note: This property is required for Worklight 6.2 or later. | No |
| Secure | Boolean | Whether to transmit in a secure way. Utilized in server versions 6.2 to 7.1. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access a secure IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Version | String | The applications version number. Only required if using IBM MobileFirst v8+. | No |
| Worklight Ant JAR File Path | String | The path to the Worklight Ant Deployer JAR (worklight-ant-deployer.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/worklight-ant.jar. Required for IBM MobileFirst versions less than 8.0. | No |

## Deploy Adapter

Deploys the adapter to IBM MobileFirst.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Adapter Files | String | A list, separated by commas or newline characters, of IBM MobileFirst Adapter (.adapter) files to deploy to the IBM MobileFirst Server. | Yes |
| Password | Password | The users password to access the IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Runtime | String | The runtime on which to deploy the adapter. Note: This property is required for Worklight 6.2 and later. | No |
| Secure | Boolean | Whether to transmit in a secure way. Utilized in server versions 6.2 to 7.1. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access a secure IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Worklight Ant JAR File Path | String | The path to the Worklight Ant Deployer JAR (worklight-ant-deployer.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/worklight-ant.jar. Required for server versions less than 8.0. | No |

## Deploy Application

Deploys an application to IBM MobileFirst.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Files | String | A list, separated by commas or newline characters, of theWorklight Application files to deploy to the Worklight Server.Specify .wlapp files for IBM MobileFirst pre-v8 and .json or .xml files for IBM MobileFirst v8+. | Yes |
| Password | Password | The users password to access the IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Runtime | String | The runtime on which to deploy the IBM MobileFirst application. Note: This property is required for Worklight 6.2 or later. | No |
| Secure | Boolean | Whether to transmit in a secure way. Utilized in server versions 6.2 to 7.1. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access a secure IBM MobileFirst server. Note: This property is required for Worklight 6.2 and later. | No |
| Worklight Ant JAR File Path | String | The path to the Worklight Ant Deployer JAR (worklight-ant-deployer.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/worklight-ant.jar. Required for IBM MobileFirst versions less than 8.0. | No |

## Deploy Web Resource


Deploys a web resource compressed file (.zip) for a specific application version. Note: This step is for MobileFirst 8.0 or later.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Identifier | String | The MobileFirst application in which to deploy the web resource archive. | Yes |
| Environment | String | The MobileFirst applications environment in which to deploy the web resource archive. | Yes |
| Password | Password | The user password that is required to access the Application Center. | Yes |
| Runtime | String | The MobileFirst runtime in which to deploy the web resource archive. | Yes |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access the Application Center. | Yes |
| Version | String | The MobileFirst applications version number in which to deploy the web resource archive. | Yes |
| Web Resource File | String | The name of the web resource (.zip) file to deploy to the IBM MobileFirst Server. | Yes |

## Remove Application from Application Center

Removes the native application from the IBM MobileFirst Application Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Center Ant JAR File Path | String | The path to the Application Center Deploy Tool Ant JAR (applicationcenterdeploytool.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/applicationcenterdeploytool.jar. | Yes |
| Application Package | String | The package name of the application to remove from the Application Center. | Yes |
| Context | String | The context of the Application Center. For example, applicationcenter. | Yes |
| Disable SSL Security Checking | Boolean | Disables SSL security checking. Use of this flag is a security risk. | No |
| JSON4J JAR File Path | String | The path to the JSON4J JAR (json4j.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/json4j.jar. | Yes |
| Operating System | Enumeration:
* all
* Android
* iOS
| The operating system of the application to remove from the Application Center. | No |
| Password | Password | The user password. The default value is: ``${p:environment/applicationCenterPassword}``. | Yes |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access the Application Center. | Yes |
| Version | String | The internal version (not the commercial version) of the application to remove from the Application Center. | No |

## Upload Application to Application Center

Uploads the application to the IBM MobileFirst Application Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Active | Boolean | Store the application in the Application Center as an active application. | No |
| Application Center Ant JAR File Path | String | The path to the Application Center Deploy Tool Ant JAR (applicationcenterdeploytool.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/applicationcenterdeploytool.jar. | Yes |
| Context | String | The context of the Application Center. For example, applicationcenter. | Yes |
| Description | String | The description of the application to upload to the Application Center. | No |
| Disable SSL Security Checking | Boolean | Disables SSL security checking. Use of this flag is a security risk. | No |
| File | String | The Android application package (.apk) or iOS application (.ipa) file to upload to the Application Center. | Yes |
| Force Upload | Boolean | Force existing applications to be uploaded to the Application Center. | No |
| Installer | Boolean | Store the application in the Application Center with the installer flag. | No |
| JSON4J JAR File Path | String | The path to the JSON4J JAR (json4j.jar) file. The Worklight 6.0.0 Server can use the value: ``${PLUGIN\_HOME}``/lib/json4j.jar. | Yes |
| Label | String | The fallback label in the Application Center. | No |
| Password | Password | The user password. The default value is: ``${p:environment/applicationCenterPassword}``. | Yes |
| Ready for production | Boolean | Store the application in the Application Center with the ready-for-production flag. | No |
| Recommended | Boolean | Store the application in the Application Center with the recommended flag. | No |
| Server Path | String | The URL to the IBM MobileFirst server and role of the MobileFirst authorized user. For Worklight versions 7.1 and older, the default path is /worklightadmin. For MobileFirst versions 8.0 and newer, the default path is /mfpadmin. | Yes |
| User | String | The user name that is required to access the Application Center. | Yes |



|Back to ...||Latest Version|IBM MobileFirst Platform (formerly Worklight) |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1174444](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-worklight/ucd-ibm-mobilefirst-13.1174444.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
