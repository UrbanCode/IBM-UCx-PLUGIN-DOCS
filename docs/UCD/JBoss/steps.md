
# JBoss Application Server - Process Steps

* [Add Data Source](#add_data_source)
* [Add JMS Connection Factory](#add_jms_connection_factory)
* [Add JMS Queue](#add_jms_queue)
* [Add JMS Topic](#add_jms_topic)
* [Check Deployment Status](#check_deployment_status)
* [Create Server](#create_server)
* [Create Server Group](#create_server_group)
* [Deploy Application](#deploy_application)
* [Deploy JDBC Driver](#deploy_jdbc_driver)
* [Disable Application](#disable_application)
* [Enable Application](#enable_application)
* [Remove JMS Connection Factory](#remove_jms_connection_factory)
* [Restart Server](#restart_server)
* [Restart Server Group](#restart_server_group)
* [Run Script](#run_script)
* [Start JBoss](#start_jboss)
* [Stop JBoss](#stop_jboss)
* [Undeploy Application](#undeploy_application)


## Add Data Source

Add a new Data Source to JBoss


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add as XA Source | Boolean | Check to create this data source as an XA Data Source. | No |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Additional Properties | String | Additional properties to pass to the CLI, new-line separated. | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Connection URL | String | For use with non-XA Data Sources. The connection URL to the database to be used. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Data Source Name | String | Name of the Data Source to be created. | Yes |
| Database Name | String | For use with XA Data Sources. The name of the database for the XA Data Source. | No |
| Driver Name | String | Name of the driver to be used for this connection. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| JNDI Name | String | The JNDI name for the Data Source. Must begin with java:/ or java:jboss/. | Yes |
| Password | Password | The password to the database to be used. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Port Number | String | For use with XA Data Sources. The port number of the server. | No |
| Server Name | String | For use with XA Data Sources. The name of the server for the XA data source. | No |
| Start enabled | Boolean | Check to enable on creation. Leave clear to enable manually later. | No |
| User Name | String | The user name to the database to be used. | Yes |
| Username | String | The username to authenticate with. | No |

## Add JMS Connection Factory

Add a JMS Connection Factory to JBoss


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Connector | String | The connector to be used, comma separated. The first will be the default, the rest will be backups. | Yes |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Entries | String | The JNDI names the Factory will be bound to, comma separated, must end with the name of the Factory. | Yes |
| Factory Name | String | The name of the Factory to be created. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Profile | String | The profile to add the Factory to. Required if JBoss is in Domain Mode. | No |
| Username | String | The username to authenticate with. | No |

## Add JMS Queue

Add a JMS Queue to JBoss


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Entries | String | The JNDI names the Queue will be bound to, comma separated. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Profile | String | The profile to add the Queue to. Required in Domain Mode. | No |
| Queue Name | String | The name of the Queue to be created. | Yes |
| Username | String | The username to authenticate with. | No |

## Add JMS Topic

Add a JMS Topic to JBoss


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Entries | String | The JNDI names the Topic will be bound to, comma separated. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Profile | String | The profile to add the Topic to. Required if JBoss is in Domain Mode. | No |
| Topic Name | String | The name of the Topic to be created. | Yes |
| Username | String | The username to authenticate with. | No |

## Check Deployment Status

Get the status information on a deployment


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Deployment Name | String | The name of the deployment to check. | Yes |
| Host Name | String | Required in Domain Mode. The name of the host the deployment is on. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Server Name | String | Required in Domain mode. The Name of the server the deployment is on. | No |
| Username | String | The username to authenticate with. | No |

## Create Server

Create a server and add it to a server group


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Auto-Start | Boolean | Check to set auto-start to true. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Group Name | String | The server group to add this server to. | Yes |
| Host Name | String | The name of the server host. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Server Name | String | The name to give the server to be created. | Yes |
| Socket Offset | String | The socket offset for this server. | Yes |
| Username | String | The username to authenticate with. | No |

## Create Server Group

Create Server Group on a JBoss Domain instance


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Profile | String | The profile to create this server group under. | Yes |
| Server Group Name | String | The name of the server group to be created. | Yes |
| Socket Binding Group | String | The name of the socket binding group to use for the server group. | Yes |
| Username | String | The username to authenticate with. | No |

## Deploy Application

Deploy application to JBoss.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Application name | String | The name of the application to be deployed. If no source is specified, the named application will be enabled instead. If no application name is supplied, the file name will be used. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Deploy To All Server Groups | Boolean | Only applicable in Domain Mode. Check to deploy to all servers. | No |
| Deploy To Server Groups | String | Only applicable in Domain Mode. List the servers youd like to deploy to, comma separated. | No |
| Exclude Files | String | A new line separated list of file patterns for files to exclude. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| Include Files | String | A new line separated list of file patterns for included files. \*\*/\* includes all files and files in subdirectories. | Yes |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Runtime name | String | The runtime name of the application to be deployed. Should end with the file ending of the deployment source. | No |
| Username | String | The username to authenticate with. | No |

## Deploy JDBC Driver

Deploy JDBC Driver to JBoss.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Deploy To All Server Groups | Boolean | Only applicable in Domain Mode. Check to deploy to all servers. | No |
| Deploy To Server Groups | String | Only applicable in Domain Mode. List the servers youd like to deploy to, comma separated. | No |
| Driver name | String | The name of the driver. If no name is specified, the file name (including .jar) will be the name. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| JDBC Driver Path | String | Path to the JDBC Driver jar. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Username | String | The username to authenticate with. | No |

## Disable Application

Disable an application that has been deployed to JBoss, Standalone Only.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Application name | String | The name of the application to be deployed. If no source is specified, the named application will be enabled instead. | Yes |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Username | String | The username to authenticate with. | No |

## Enable Application

Enable an application that has been deployed to JBoss, Standalone Only.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Application name | String | The name of the application to be deployed. If no source is specified, the named application will be enabled instead. | Yes |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Username | String | The username to authenticate with. | No |

## Remove JMS Connection Factory

Remove a JMS Connection Factory from JBoss


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Factory Name | String | The name of the Factory to be removed. | Yes |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Profile | String | The profile to remove the Factory from. Required if JBoss is in Domain Mode. | No |
| Username | String | The username to authenticate with. | No |

## Restart Server

Restart a JBoss Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the Jboss instance to connect to. | No |
| Domain Hostname | String | If in domain mode, specify the Jboss domain hostname. | No |
| Hostname | String | Hostname to connect to the administration console of the JBoss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Timeout | String | How long to wait (in milliseconds) to bring the server up before failing. | No |
| Username | String | The username to authenticate with. | No |

## Restart Server Group

Restart a JBoss Server Group.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Server Groups | String | List of JBoss server groups to be restarted. Comma-separated, no spaces. | Yes |
| Timeout | String | How long to wait (in milliseconds) to bring the server up before failing. | No |
| Username | String | The username to authenticate with. | No |

## Run Script

Run a custom script on JBoss using the CLI


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Script Data | String | The script to be executed. | Yes |
| Username | String | The username to authenticate with. | No |

## Start JBoss

Start JBoss in either Standalone or Domain mode.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | The host name of the server to be started. | Yes |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Port Number | String | The port number of the server to be started. | Yes |
| Server Configuration | String | Provide a file name to start the server with a specfic configuration | No |
| Server Start Wait Timeout | String | The amount of time (in milliseconds) to wait for the server to start before declaring timeout. | Yes |
| Startup Mode | Enumeration:
* standalone
* domain
| Choose whether to start in Standalone or Domain mode. | Yes |

## Stop JBoss

Stop JBoss in either standalone or domain mode.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Mode Host Name | String | The name of your host. Only required when your server is in Domain mode. | No |
| JBoss Startup Path | String | The path to the JBoss startup executable. | Yes |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Server Mode | Enumeration:
* standalone
* domain
| Choose whether your server is in Standalone or Domain mode. | Yes |
| Username | String | The username to authenticate with. | No |
| Management Hostname | String | The JBoss management hostname for connecting to a standalone server. | No |
| Management Port | String | The JBoss management port for connecting to a standalone server. | No |

## Undeploy Application

Undeploy application in JBoss.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the Jboss CLI. (example: force) | No |
| Administrative Port | String | Jboss server administrative port. Default is 9999. | No |
| Application Name | String | The name of the file to be undeployed. | Yes |
| Controller Name | String | The controller name of the JBoss instance to connect to. | No |
| Hostname | String | Hostname to connect to the administration console of the Jboss server. Defaults to localhost. | No |
| JBoss CLI Path | String | The path to the JBoss Command Line Interface executable. | Yes |
| Keep Content | Boolean | Check to keep the content on your JBoss server. This will deactivate the application, but will not delete anything. | No |
| Password | Password | The password to authenticate with. Default value is ``${p?:resource/JBoss.password}``. | No |
| Undeploy From All Server Groups | Boolean | Only applicable in Domain Mode. Check to undeploy to allrelevant servers. | No |
| Uneploy From Server Groups | String | Only applicable in Domain Mode. List the servers youd like to undeploy from, comma separated. | No |
| Username | String | The username to authenticate with. | No |



|Back to ...||Latest Version|JBoss Application Server ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[25.1155393](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/JBoss/ucd-JBoss-25.1155393.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
