
# Oracle WebLogic Scripting Tool (WLST) - Process Steps

* [Check Server Status](#check_server_status)
* [Deploy](#deploy)
* [Deploy SOA Composite Application](#deploy_soa_composite_application)
* [Execute Script](#execute_script)
* [Resume Server](#resume_server)
* [Shutdown Server](#shutdown_server)
* [Start Application](#start_application)
* [Start Server](#start_server)
* [Stop Application](#stop_application)
* [Suspend Server](#suspend_server)
* [Undeploy](#undeploy)


## Check Server Status

Use this step to check the status of a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |
| Server Name | String | The name of the WebLogic server. | Yes |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |

## Deploy

Use this step to deploy an application to a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to deploy. | No |
| Directory Offset | String | The directory offset relative to the current working directory where the step will run. | No |
| File Name | String | The name of the file to deploy to the application. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Deploy SOA Composite Application

Use this step to deploy an Oracle SOA Composite Application to a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step will run. | No |
| Optional Args | String | A comma-separated list of arguments to append to the sca\_deployComposite command, in the form option=value with string values in single quotes. For example: overwrite=true, forceDefault=true, configplan=C:/path/to/configplan, partition=default | No |
| Password | Password | The password to use to authenticate with the WebLogic server. | No |
| SAR Location | String | The absolute path to either a SAR file, a ZIP file that includes multiple SARS, MARS, or both, or an EAR file that contains a SAR file. | Yes |
| SOA URL | String | URL of the server that hosts the SOA Infrastructure application (for example, http://myhost10:7001). | Yes |
| URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | Yes |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Execute Script

Use this step to execute user defined python script files.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Script Files | String | User defined python scripts. | Yes |
| WLST Path | String | The fully-qualified path of the WebLogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Resume Server

Use this step to resume a suspended WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Server Name | String | The name of the WebLogic server. | Yes |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Shutdown Server

Use this step to shut down a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Server Name | String | The name of the WebLogic server. | Yes |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Start Application

Use this step to start a deployed application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to deploy. | No |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Start Server

Use this step to start a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Domain Directory | String | The directory where the domain is created. The default is ``${MW\_HOME}``/user\_projects/domains/``${YOUR\_DOMAIN}``. | Yes |
| Domain Name | String | The domain name that the WebLogic server exists in. | Yes |
| Host Name | String | Host name of Node Manager. This argument defaults to localhost. | No |
| NM Type | String | The Node Manager type.SSL is default.Note: If you specify plain for nmType, you must manually set the SecureListener parameter in WL\_HOME/common/nodemanager/nodemanager.properties to false. Otherwise, the nmConnect command will fail. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Port | String | Port number of Node Manager. This default argument should be based on the Node Manager type, as follows: plain=5556, rsh=514, ssh=22, ssl=5556.If left blank, defaults to 5556. | No |
| Server Name | String | The name of the WebLogic server. | Yes |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Stop Application

Use this step to stop a running application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to deploy. | No |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Suspend Server

Use this step to suspend a WebLogic server that is running.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Server Name | String | The name of the WebLogic server. | Yes |
| Server URL | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Username | String | The user name use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path for the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |

## Undeploy

Use this step to undeploy an application from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to undeploy. | No |
| Directory Offset | String | The URL of the WebLogic server. The default WebLogic server URL is t3://localhost:7001. | No |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Password | String | The password to use to authenticate with the WebLogic server. | No |
| Username | String | The user name to use to authenticate with the WebLogic server. | No |
| User Config File | String | Overrides Username and Password. Name and location of a user configuration file which contains an encrypted username and password. | No |
| User Key File | String | Overrides Username and Password. Name and location of the key file that is associated with the specified user configuration file and is used to decrypt it. | No |
| WLST Path | String | The fully-qualified path of the Weblogic Scripting Tool directory. (ex. {oracle\_home}``/oracle\_common/common/bin/) | Yes |



|Back to ...||Latest Version|Oracle WebLogic Scripting Tool (WLST) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.1100786](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebLogic-WLST/WebLogic-WLST-9.1100786.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
