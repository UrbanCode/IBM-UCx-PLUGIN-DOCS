
# IBM WebSphere Liberty - Process Steps

* [Create Collective](#create_collective)
* [Create Server](#create_server)
* [Delete Server](#delete_server)
* [Generate Component-Resource Properties](#generate_component-resource_properties)
* [Generate Plugin Config](#generate_plugin_config)
* [Install Server Archive](#install_server_archive)
* [Install or Update Application with Server XML](#install_or_update_application_with_server_xml)
* [Install or Update Applications with Dropins](#install_or_update_applications_with_dropins)
* [Join Collective](#join_collective)
* [Merge Plugin Config](#merge_plugin_config)
* [Propagate Plugin Config](#propagate_plugin_config)
* [Register Host](#register_host)
* [Replace Variable Values with Component-Resource Properties](#replace_variable_values_with_component-resource_properties)
* [Start Application](#start_application)
* [Start Server](#start_server)
* [Stop Application](#stop_application)
* [Stop Server](#stop_server)
* [Uninstall Application from Dropins](#uninstall_application_from_dropins)
* [Uninstall Application with Server XML](#uninstall_application_with_server_xml)
* [Unregister Host](#unregister_host)
* [Update Host](#update_host)
* [Upload File To Collective Host](#upload_file_to_collective_host)
* [Wait for Application to be STARTED](#wait_for_application_to_be_started)


## Create Collective

Create a new collective controller configuration in the WebSphere Liberty Profile.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional command arguments | String | Any additional arguments that should be passed to the collective create command | No |
| Keystore Password | Password | The password to use for the generated keystores | Yes |
| Password | Password | The password to include in quickStartSecurity XML node | Yes |
| Server Name | String | The name of the server to act as the collective controller | Yes |
| User Name | String | The name of the user to include in quickStartSecurity XML node | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Create Server

Create a server in the WebSphere Liberty profile.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Server Name(s) | String | The name of the server(s) to create. Multiple server names are separated by commas. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory for the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Delete Server

Delete a server in the WebSphere Liberty profile.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Server Name(s) | String | The name of the server(s) to delete. Multiple server names are separated by commas. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Generate Component-Resource Properties

Generate Component-Resource properties from variable tags in the server.xml file


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Location of the server.xml file | String | The location of the server.xml file to be processed. | Yes |

## Generate Plugin Config

Generate plug-in configuration for a WebSphere Liberty server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Install Root | String | The installation root to add to the plug-in configuration. This property is required if Server Name is specified. | No |
| Password | Password | The password for WebSphere Liberty. | Yes |
| Server HTTPS Port | String | The HTTPS port of the server. | Yes |
| Server Hostname | String | The host name or IP address of the server. | Yes |
| Server Name | String | The name of the server to add to the plug-in configuration. This property is required if Install Root is specified. | No |
| Trust Store File Path | String | The path to the trust store file. This path can be relative or absolute. | Yes |
| Trust Store Password | Password | The password for the trust store file. | Yes |
| User Name | String | The user name for WebSphere Liberty. | Yes |

## Install Server Archive

Install a WebSphere Liberty archive file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Accept License | Boolean | Select to automatically accept the license if extracting from a jar file. | Yes |
| Source File | String | The archive file to extract. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Install or Update Application with Server XML

Install or update an application in the WebSphere Liberty profile by editing the server.xml file.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to install. | Yes |
| Application Type | String | The type of application archive. Valid values are war, ear, eba, and esa. | Yes |
| Auto Start | Boolean | Select to configure the application to start automatically when the server starts. | No |
| Context Root | String | The context root of the application. | No |
| Server Name | String | The name of the server to install the application into. | Yes |
| Source File Location | String | Location of the application, expressed as an absolute path or a path that is relative to the server-level apps directory. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Install or Update Applications with Dropins

Install or update an application in WebSphere Liberty by using the dropins directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Server Name | String | The name of the server to install the application into. | Yes |
| Source File | String | The archive file (for example, an EAR or WAR file) that contains the application to install. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Join Collective

Join a server to the collective controlled by the designated controller.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional command arguments | String | Any additional arguments that should be passed to the collective join command | No |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | Yes |
| Admin User Name | String | An Administrator user for the target Collective Controller | Yes |
| Collective Controller Host Name | String | The host name of the target Collective Controller | Yes |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | Yes |
| Keystore Password | Password | The password to use for the generated keystores | Yes |
| RPC User | String | The user with which to authenticate to the RPC mechanism | No |
| RPC User Password | Password | The password for the rpcUser.Only one authentication option (rpcUserPassword or sshPrivateKey) should be used, but not both. | No |
| SSH Private Key Password | Password | The password for the specified SSH key | No |
| SSH Private Key Path | String | The path to the SSH key to use to authenticate to the host.Only one authentication option (rpcUserPassword or sshPrivateKey) should be used, but not both. | No |
| Server Host Name | String | The name of the collective host where the server to join resides | No |
| Server Name(s) | String | The name of the server(s) that will join the Collective. Multiple server names are separated by commas. | Yes |
| Trust Store File Path | String | The path to the trust store to be used when connecting to the collective controller | No |
| Trust Store Password | Password | The password for the trust store file. | No |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/. This path is on the host where the server joining the collective resides. | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Merge Plugin Config

Merge multiple plugin-cfg.xml files into one xml for web servers for clarity and eliminate errors caused by dealing with multiple config files.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Directory | String | Location of the source directory where all the plugin files are located, or a comma separated list of source plugin file names specified as full filepaths | Yes |
| Target Directory | String | Parent directory of the merge-plugin-cofig file Optional. By default the merged file is generated in the same directory where pluginUtility.sh is located and named merged-plugin-cfg.xml. Users can either specify the directory name where the merged file must be placed, or a fully qualified file name. In case there is already a file named merged-plugin-cfg.xml or the specified file specified file name is already present, then the contents of the file will be overwritten. | No |
| WebSphere Liberty Installation Directory | String | The base directory for the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Propagate Plugin Config

Make the merged plugin config xml available to the web server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Plugin-Config File | String | Full filepath of the plugin config xml targeted for use by the web server.This is produced by the Merge Plugin Config step. | Yes |
| Web Server Home | String | The install directory of web server.For example: /opt/IBM/HTTPServer | Yes |
| WebSphere Plugins Home | String | Full path to top-level directory where WebSphere Plugins are installed. This directory contains libraries used to connect WebSphere Liberty servers to web servers. | Yes |

## Register Host

Register a new host with the collective controlled by the designated controller.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional command arguments | String | Any additional arguments that should be passed to the collective registerHost command | No |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | Yes |
| Admin User Name | String | An Administrator user for the target Collective Controller | Yes |
| Collective Controller Host Name | String | The host name of the target Collective Controller | Yes |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | Yes |
| Host JAVA\_HOME Path | String | The path to the Java home directory for the registrant. | No |
| Host Name | String | The name of the host that will be registered with the Collective | Yes |
| Host Read Path | String | A readable path for the file transfer operations originated from the controller. Specify multiple paths on separate lines. | No |
| Host Write Path | String | A writable path for the file transfer operations originated from the controller. Specify multiple paths on separate lines. | No |
| RPC User | String | The user with which to authenticate to the RPC mechanism | No |
| RPC User Password | Password | The password for the rpcUser.Only one authentication option (rpcUserPassword or sshPrivateKey)should be used, but not both. | No |
| SSH Private Key Password | Password | The password for the specified SSH key | No |
| SSH Private Key Path | String | The path to the SSH key to use to authenticate to the host.Only one authentication option(rpcUserPassword or sshPrivateKey) should be used, but not both. | No |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Replace Variable Values with Component-Resource Properties

Replace variable values in the server.xml file with Component-Resource properties


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Location of the server.xml file | String | The location of the server.xml file to be processed. | Yes |

## Start Application

Start an application in the WebSphere Liberty profile.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to start. | Yes |
| Password | Password | The password for WebSphere Liberty. | Yes |
| Server HTTPS Port | String | The HTTPS port of the server. | Yes |
| Server Hostname | String | The host name or IP address of the server. | Yes |
| Trust Store File Path | String | The path to the trust store file. This path can be relative or absolute. | Yes |
| Trust Store Password | Password | The password for the trust store file. | Yes |
| User Name | String | The user name for WebSphere Liberty. | Yes |

## Start Server

Start one or more servers in the WebSphere Liberty profile. This step will create output properties named startedServers, alreadyStartedServers, and failedServers. Servers that were successfully started will be listed in the startedServers output property. Servers that were already in the started state will be listed in the alreadyStartedServers output property. Servers that failed to start will be listed in the failedServers output property.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | No |
| Admin User Name | String | An Administrator user for the target Collective Controller | No |
| Collective Controller Host Name | String | The host name of the Collective Controller that will route the startServer request to serverHost.If controllerHost is specified, controllerPort, admin user/password, trustStore/trustStorePassword, and serverHost must also be given. | No |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | No |
| Server Host Name | String | The name of the collective host where the server to start resides | No |
| Server Name(s) | String | The name of the server(s) to start. Multiple server names are separated by commas. Specify ALL to start all servers in wlp.user.dir. | Yes |
| Trust Store File Path | String | The path to the trust store to be used when connecting to the collective controller | No |
| Trust Store Password | Password | The password for the trust store file. | No |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/. This path is on the host where the server being started resides. | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Stop Application

Stop an application in the WebSphere Liberty profile.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to stop. | Yes |
| Password | Password | The password for WebSphere Liberty. | Yes |
| Server HTTPS Port | String | The HTTPS port of the server. | Yes |
| Server Hostname | String | The host name or IP address of the server. | Yes |
| Trust Store File Path | String | The path to the trust store file. This path can be relative or absolute. | Yes |
| Trust Store Password | Password | The password for the trust store file. | Yes |
| User Name | String | The user name for WebSphere Liberty. | Yes |

## Stop Server

Stop one or more servers in the WebSphere Liberty profile. This step will create output properties named stoppedServers, alreadyStoppedServers, and failedServers. Servers that were successfully stopped will be listed in the stoppedServers output property. Servers that were already in the stopped state will be listed in the alreadyStoppedServers output property. Servers that failed to stop will be listed in the failedServers output property.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | No |
| Admin User Name | String | An Administrator user for the target Collective Controller | No |
| Collective Controller Host Name | String | The host name of the Collective Controller that will route the stopServer request to serverHost.If controllerHost is specified, controllerPort, admin user/password, trustStore/trustStorePassword, and serverHost must also be given. | No |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | No |
| Server Host Name | String | The name of the collective host where the server to stop resides | No |
| Server Name(s) | String | The name of the server(s) to be stopped. Multiple server names are separated by commas. Specify ALL to stop all servers in wlp.user.dir. | Yes |
| Trust Store File Path | String | The path to the trust store to be used when connecting to the collective controller | No |
| Trust Store Password | Password | The password for the trust store file. | No |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation.For example: /opt/IBM/WebSphere/Liberty/. This path is on the host where the server being stopped resides. | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Uninstall Application from Dropins

Uninstall an application from the WebSphere Liberty profile by using the dropins directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Server Name | String | The name of the server to uninstall the application from. | Yes |
| Source File Name | String | The full name of the archive file to uninstall. For example: JPetStore.war | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Uninstall Application with Server XML

Uninstall an application in the WebSphere Liberty profile by editing the server.xml file.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to uninstall. | Yes |
| Server Name | String | The name of the server to uninstall the application from. | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation. For example: /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Unregister Host

Unregisters a host and all of its associated servers from the collective.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | Yes |
| Admin User Name | String | An Administrator user for the target Collective Controller | Yes |
| Collective Controller Host Name | String | The host name of the target Collective Controller | Yes |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | Yes |
| Host Name | String | The name of the host that will be unregistered from the Collective | Yes |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Update Host

Updates the authentication information for a host that has been registered with the collective.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional command arguments | String | Any additional arguments that should be passed to the collective registerHost command | No |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | Yes |
| Admin User Name | String | An Administrator user for the target Collective Controller | Yes |
| Collective Controller Host Name | String | The host name of the target Collective Controller | Yes |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | Yes |
| Host JAVA\_HOME Path | String | The path to the Java home directory for the registrant. | No |
| Host Name | String | The name of the registered host that will be updated within the Collective | Yes |
| Host Read Path | String | A readable path for the file transfer operations originated from the controller. Specify multiple paths on separate lines. | No |
| Host Write Path | String | A writable path for the file transfer operations originated from the controller. Specify multiple paths on separate lines. | No |
| RPC User | String | The user with which to authenticate to the RPC mechanism | No |
| RPC User Password | Password | The password for the rpcUser.Only one authentication option (rpcUserPassword or sshPrivateKey)should be used, but not both. | No |
| SSH Private Key Password | Password | The password for the specified SSH key | No |
| SSH Private Key Path | String | The path to the SSH key to use to authenticate to the host.Only one authentication option(rpcUserPassword or sshPrivateKey) should be used, but not both. | No |
| WebSphere Liberty Installation Directory | String | The base directory of the WebSphere Liberty profile installation, such as /opt/IBM/WebSphere/Liberty/ | Yes |
| WebSphere Liberty User Directory | String | The directory where WebSphere Liberty server configuration is held. Specify a value here when ``${wlp\_install\_dir}``/usr is not writable. | No |

## Upload File To Collective Host

Upload a file to the target collective host.The target host must already be registered with the collective.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Password | Password | The password for the Administrator user for the target Collective Controller | Yes |
| Admin User Name | String | An Administrator user for the target Collective Controller | Yes |
| Collective Controller Host Name | String | The host name of the target Collective Controller | Yes |
| Collective Controller Port | String | The HTTPS port number of the target Collective Controller | Yes |
| Install Target Directory/File | String | The path on the target host where the source file will be installed/expanded.If source file is not a zip to be expanded, this value must be a file path, not a directory. | Yes |
| Source File Path | String | The path to the file to upload to the target machine | Yes |
| Target Host Name | String | The name of the collective host the file will be uploaded to | Yes |
| Trust Store File Path | String | The path to the trust store to be used when connecting to the collective controller | Yes |
| Trust Store Password | Password | The password for the trust store file. | Yes |

## Wait for Application to be STARTED

Wait for an application to run (have a status of Started).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application. | Yes |
| Password | Password | The password for WebSphere Liberty. | Yes |
| Server HTTPS Port | String | The HTTPS port of the server. | Yes |
| Server Hostname | String | The host name or IP address of the server. | Yes |
| Timeout (seconds) | String | The maximum time to wait, in seconds. | Yes |
| Trust Store File Path | String | The path to the trust store file. This path can be relative or absolute. | Yes |
| Trust Store Password | Password | The password for the trust store file. | Yes |
| User Name | String | The user name for WebSphere Liberty. | Yes |



|Back to ...||Latest Version|IBM WebSphere Liberty |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[23.1174431](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereLiberty/ucd-WebSphereLiberty-23.1174431.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Downloads](downloads.md)|
