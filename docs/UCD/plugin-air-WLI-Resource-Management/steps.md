
# Oracle WebLogic Integration Resource Management - Process Steps

## Create FTP EG

Create an FTP Event Generator onthe WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the file event generator property file. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Create File EG

Create a file event generator on WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server Name | String | The name of the administration server. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the file event generator property file. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable. | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Create JMS EG

Create a JMS event generator on the WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the property file for the JMS event generator. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Create XML Cache Entry

Create an entry in the XML cache.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Key | String | The unique identifier for the XML file to be added to the XML Cache. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |
| XML File Path | String | The fully-qualified path for the XML file to be added to the XML cache. | Yes |

## Delete FTP EG

Use this step to delete an FTP event generator on the WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| FTP Event Generator Name | String | The name of the FTP event generator to delete. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the Weblogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Delete File EG

Delete a file event generator on the WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| File EG Name | String | File Event Generator name to delete. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | Path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | Full path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Delete JMS EG

Delete a JMS event generator on the WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| JMS Event Generator Name | String | The name of the JMS event generator name to delete. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Delete XML Cache Entry

Delete an entry from the XML Cache.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Key | String | The unique identifier for the XML file to be deleted from the XML Cache. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Update FTP EG

Update an FTP event generator onthe WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| FTP EG Name | String | FTP Event Generator name to update. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the property file for the file event generator. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Update File EG

Update a file event generator on the WebLogic integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server Name | String | The name of the administration server. | Yes |
| File Event Generator Name | String | The name of the file event generator to update. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the file event generator property file. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Update JMS EG

Update an JMS event generator on the WebLogic Integration server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Server name | String | The name of the administration server. | Yes |
| JMS Event Generator Name | String | The name of the JMS event generator to update. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Property File | String | The name of the property file for the JMS event generator. | Yes |
| Server URL | String | The URL to the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |

## Update XML Cache Entry

Update an entry in the XML Cache.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Key | String | The unique identifier for the XML file to be updated in the XML Cache. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Server URL | String | The URL to the WebLogic Integration server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Bin Directory | String | The fully-qualified path to the bin directory containing the wlst executable | Yes |
| WebLogic setDomainEnv Path | String | The fully-qualified path to the setDomainEnv executable in your WebLogic installation. | Yes |
| XML File Path | String | The fully-qualified path for the XML file to be added to the XML cache. | Yes |


