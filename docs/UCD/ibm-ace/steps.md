
# App Connect Enterprise - Process Steps

- [App Connect Enterprise - Steps](#app-connect-enterprise---steps)
- [Process steps in the IBM ACE plug-in](#process-steps-in-the-ibm-ace-plug-in)
- [Create Integration Node](#create-integration-node)
- [Create Integration Server](#create-integration-server)
- [Delete Integration Node](#delete-integration-node)
- [Delete Integration Server](#delete-integration-server)
- [Deploy](#deploy)
- [Does Integration Server Exist](#does-integration-server-exist)
- [Start Integration Node](#start-integration-node)
- [Start Integration Server](#start-integration-server)
- [Re-start Integration Server](#re-start-integration-server)
- [Stop Integration Node](#stop-integration-node)
- [Stop Integration Server](#stop-integration-server)

## Create Integration Node

Create an Integration Node (Broker). This command creates the WebSphere MQ queues required by the broker if they do not already exist.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ACE Installation Directory | String | The installation directory of the IBM ACE server. For example: /opt/ibm/server. | Yes |
| Additional Arguments | String | A list of arguments to pass to the mqsicreatebroker script when running this step, for example: -i generalDefaultUserId. When specifying multiple arguments, list each arguments on a new line. | No |
| Integration Node (Broker) | String | The name of the integration node to create. | Yes |
| Queue Manager | String | The name of your WebSphere MQ Queue Manager. If you do not specify a value for this property,a queue manager is not created. | No |
| Service Password | String | The password for the service user ID. | No |
| Service User ID | String | The user ID under which the broker runs. | No |

## Create Integration Server

Create integration servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Servers | String | A list of integration servers to create. The servers must be defined on the broker. Seperate each with a comma or new line. | Yes |
| Port | String | The port of the target integration node. | Yes |

## Delete Integration Node

Delete an Integration Node (Broker).

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ACE Installation Directory | String | The installation directory of the IBM ACE server. For example: /opt/ibm/server. | Yes |
| Delete Trace Files | Boolean | Check this box to delete the node’s trace files from its work directory. | No |
| Delete WebSphere MQ Queues | Boolean | Check this box to delete all current integration server administration security WebSphere MQ queues along with the integration node. | No |
| Integration Node (Broker) | String | The name of the integration node to delete. | Yes |

## Delete Integration Server

Create integration servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Servers | String | A list of integration servers to delete. The servers must be defined on the broker. Seperate each with a comma or new line. | Yes |
| Port | String | The port of the target integration node. | Yes |

## Deploy

Deploy a Broker Archive.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ACE Installation Directory | String | The installation directory of the IBM ACE server. For example: /opt/ibm/server. | Yes |
| BAR File | String | This parameter specifies the BAR file that you want to use to deploy a message flow and other resources. Example: C:\Users\IBM\_ADMIN\IBM\ACET11\workspace\AppConnectToIIB\AppConnectToIIB.bar | No |
| Clear Old Deployments  | Boolean | The default operation is a delta or incremental deployment. Use this parameter to override the default operation and run a complete deployment. | No |
| Deployed Objects | String | This parameter describes the set of objects that you want to remove from the integration server. You can specify multiple files to delete by separating the filenames with a colon (:). | No |
| IP Address | String | The host name or IP address of the computer on which the integration node or server is running. If you do not specify this parameter, a value that represents the local computer is used. | No |
| Integration Node FileName | String | The name of a .broker file that contains the connection details for an integration node or independent integration server. Include the location (path) and file name when you specify this parameter. | No |
| Integration Node Name | String | Name of a specific integration node. To connect to a remote integration node by name, you must also specify ip Address and port. | No |
| Integration Server Name | String | This parameter specifies the name of the integration server on an integration node on which to perform the deploy action. | No |
| Port | String | The port on which the web user interface HTTP connection listener is listening. | No |
| Timeout Value | String |  This parameter specifies the maximum time in seconds that the command waits for the integration node to complete the request before returning. | No |
| Trace File Name | String | This parameter sends internal debug trace information about a command to the specified file. | No |

## Does Integration Server Exist

Does Integration Server Exist.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Server | String | Integration Server name to identify its existence. | Yes |
| Port | String | The port of the target integration node. | Yes |

## Start Integration Node

Starts an integration node (broker).

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ACE Installation Directory | String | The installation directory of the IBM ACE server. For example: /opt/ibm/server. | Yes |
| Integration Node (Broker) | String | The name of the integration node to start. | Yes |

## Start Integration Server

Start integration servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Servers | String | A list of integration servers to start. The servers must be defined on the broker. Seperate each with a comma or new line. | Yes |
| Port | String | The port of the target integration node. | Yes |

## Re-start Integration Server

Re-start integration servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Servers | String | A list of integration servers to start. The servers must be defined on the broker. Seperate each with a comma or new line. | Yes |
| Port | String | The port of the target integration node. | Yes |

## Stop Integration Node

Stops an integration node (broker).

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ACE Installation Directory | String | The installation directory of the IBM ACE server. For example: /opt/ibm/server. | Yes |
| Integration Node (Broker) | String | The name of the integration node to stop. | Yes |

## Stop Integration Server

Stop integration servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IP | String | The IP address of the target integration node. | Yes |
| Integration Servers | String | A list of integration servers to stop. The servers must be defined on the broker. Seperate each with a comma or new line. | Yes |
| Port | String | The port of the target integration node. | Yes |

|Back to ...||Latest Version|App Connect Enterprise ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1174437](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-ace/ucd-plugins-ibm-ace-13.1174437.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
