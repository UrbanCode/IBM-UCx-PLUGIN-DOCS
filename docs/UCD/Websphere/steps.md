
# WebSphere Application Server - Deployment - Steps


Process steps in the WAS Deploy plug-in

- [WebSphere Application Server - Deployment - Steps](#websphere-application-server---deployment---steps)
  - [Steps](#steps)
    - [Activate Application Edition](#activate-application-edition)
    - [Add Asset to BLA](#add-asset-to-bla)
    - [Add BLA to BLA](#add-bla-to-bla)
    - [Add Shared Library to Application](#add-shared-library-to-application)
    - [Add Shared Library to Module](#add-shared-library-to-module)
    - [Add Target To Module](#add-target-to-module)
    - [Add Target to Composition Unit](#add-target-to-composition-unit)
    - [Apply Configuration Properties](#apply-configuration-properties)
    - [Cancel Application Edition Validation](#cancel-application-edition-validation)
    - [Check Application is Installed](#check-application-is-installed)
    - [Check Application is not running](#check-application-is-not-running)
    - [Check Application is running](#check-application-is-running)
    - [Check If BLA Exists](#check-if-bla-exists)
    - [Check If Composition Unit Exists](#check-if-composition-unit-exists)
    - [Check If Config Object Exists DEPRECATED](#check-if-config-object-exists-deprecated)
    - [Check Initial Heap Size DEPRECATED](#check-initial-heap-size-deprecated)
    - [Check Maximum Heap Size DEPRECATED](#check-maximum-heap-size-deprecated)
    - [Check Node Status](#check-node-status)
    - [Check Status](#check-status)
    - [Clear Target Mappings For Application](#clear-target-mappings-for-application)
    - [Create BLA](#create-bla)
    - [Create Cluster](#create-cluster)
    - [Create Cluster Member](#create-cluster-member)
    - [Create DataSource DEPRECATED](#create-datasource-deprecated)
    - [Create DataSource For Cluster DEPRECATED](#create-datasource-for-cluster-deprecated)
    - [Create IHS Web Server](#create-ihs-web-server)
    - [Create JDBCProvider DEPRECATED](#create-jdbcprovider-deprecated)
    - [Create JDBCProvider For Cluster DEPRECATED](#create-jdbcprovider-for-cluster-deprecated)
    - [Create SIBJMSConnectionFactory DEPRECATED](#create-sibjmsconnectionfactory-deprecated)
    - [Create SIBJMSQueue DEPRECATED](#create-sibjmsqueue-deprecated)
    - [Create SIBJMSTopic DEPRECATED](#create-sibjmstopic-deprecated)
    - [Create Shared Library](#create-shared-library)
    - [Create Unmanaged Node](#create-unmanaged-node)
    - [Deactivate Application Edition](#deactivate-application-edition)
    - [Delete Asset](#delete-asset)
    - [Delete BLA](#delete-bla)
    - [Delete Composition Unit](#delete-composition-unit)
    - [Delete Configuration Properties](#delete-configuration-properties)
    - [Delete Server](#delete-server)
    - [Disable Auto Start of an Application](#disable-auto-start-of-an-application)
    - [Disable AutoSync](#disable-autosync)
    - [Display Application Deployment Options](#display-application-deployment-options)
    - [Enable Auto Start of an Application](#enable-auto-start-of-an-application)
    - [Enable AutoSync](#enable-autosync)
    - [Execute Batch Script](#execute-batch-script)
    - [Execute wsadmin Script](#execute-wsadmin-script)
    - [Export Application](#export-application)
    - [Export DataSource Properties from Cluster DEPRECATED](#export-datasource-properties-from-cluster-deprecated)
    - [Export JVMHeapSizes from Server DEPRECATED](#export-jvmheapsizes-from-server-deprecated)
    - [Extract Configuration Properties](#extract-configuration-properties)
    - [Generate Plugin](#generate-plugin)
    - [Import Asset](#import-asset)
    - [Import DataSource Properties into Cluster DEPRECATED](#import-datasource-properties-into-cluster-deprecated)
    - [Import JVMHeapSizes for Cluster DEPRECATED](#import-jvmheapsizes-for-cluster-deprecated)
    - [Install Application](#install-application)
    - [Install OSGI Bundle](#install-osgi-bundle)
    - [Install Or Update Application](#install-or-update-application)
    - [Intelligent Management Add Conditional Trace Rule](#intelligent-management-add-conditional-trace-rule)
    - [Intelligent Management Add Remote Cell](#intelligent-management-add-remote-cell)
    - [Intelligent Management Delete Remote Cell](#intelligent-management-delete-remote-cell)
    - [Intelligent Management Disable](#intelligent-management-disable)
    - [Intelligent Management Enable](#intelligent-management-enable)
    - [Intelligent Management Generate Plugin](#intelligent-management-generate-plugin)
    - [Intelligent Management List Remote Cells](#intelligent-management-list-remote-cells)
    - [Intelligent Management List Trace Rules](#intelligent-management-list-trace-rules)
    - [Intelligent Management Modify](#intelligent-management-modify)
    - [Intelligent Management Modify Remote Cell](#intelligent-management-modify-remote-cell)
    - [Intelligent Management Refresh Local Cell](#intelligent-management-refresh-local-cell)
    - [Intelligent Management Refresh Remote Cell](#intelligent-management-refresh-remote-cell)
    - [Intelligent Management Remove Conditional Trace Rule](#intelligent-management-remove-conditional-trace-rule)
    - [Intelligent Management Set Default Trace Rule](#intelligent-management-set-default-trace-rule)
    - [List Cluster Nodes](#list-cluster-nodes)
    - [Map Resource References to EJB for Application](#map-resource-references-to-ejb-for-application)
    - [Map Users And Groups to Roles for Application](#map-users-and-groups-to-roles-for-application)
    - [Modify Application ClassLoaders](#modify-application-classloaders)
    - [Remove OSGI Bundle](#remove-osgi-bundle)
    - [Restart Application](#restart-application)
    - [Restart Server](#restart-server)
    - [Rollout Edition Atomically](#rollout-edition-atomically)
    - [Rollout Edition In Groups](#rollout-edition-in-groups)
    - [Set Application Defaults](#set-application-defaults)
    - [Start Application](#start-application)
    - [Start BLA](#start-bla)
    - [Start Server](#start-server)
    - [Stop Application](#stop-application)
    - [Stop BLA](#stop-bla)
    - [Stop Server](#stop-server)
    - [Synchronize nodes](#synchronize-nodes)
    - [Terminate Server or Cluster](#terminate-server-or-cluster)
    - [Uninstall Application](#uninstall-application)
    - [Update Application](#update-application)
    - [Update Application On Cluster](#update-application-on-cluster)
    - [Update Context Root For Web Modules](#update-context-root-for-web-modules)
    - [Update J2EEResourceProperty on Object DEPRECATED](#update-j2eeresourceproperty-on-object-deprecated)
    - [Update Simple Attribute on Object DEPRECATED](#update-simple-attribute-on-object-deprecated)
    - [Update Virtual Host For Web Modules](#update-virtual-host-for-web-modules)
    - [Update soap.client.props File](#update-soapclientprops-file)
    - [Validate Configuration Properties](#validate-configuration-properties)
    - [Validate Edition Using Dynamic Cluster](#validate-edition-using-dynamic-cluster)
    - [Validate Edition Using Static Cluster](#validate-edition-using-static-cluster)
    - [Wait for Application](#wait-for-application)
    - [Wait for server or cluster](#wait-for-server-or-cluster)
    - [Wait for server or cluster to stop](#wait-for-server-or-cluster-to-stop)
    - [WebSphere Discovery](#websphere-discovery)
    - [WebSphere Topology Discovery](#websphere-topology-discovery)

## Activate Application Edition

Activate an edition of a WebSphere enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to activate. This edition is used for a WebSphere reference. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to activate. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Add Asset to BLA

Add an asset to a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Asset Name | String | The name of the asset to add to the business-level application. | Yes |
| BLA Name | String | The name of the business-level application to add the asset to. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Composition Unit Name | String | Name of the composition unit. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Context Root Mappings | String | Specify a list of mappings from web modules to context roots, separated by newline characters. Use the following format: modulename->contextroot | No |
| Description | String | Description of the composition unit. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Restart Behavior On Update | String | Specify whether to restart the composition unit after it is updated. Allowed values are ALL, NONE, or DEFAULT. | Yes |
| Server Name | String | The name of the server to administer. | No |
| Starting Weight | String |  | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Virtual Host Mappings | String | Specify a list of mappings from web modules to virtual hosts, separated by newline characters. Use the following format: modulename->virtualhost | No |

## Add BLA to BLA

Add and associate a business-level application to another business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Child BLA Name | String | The name of the child business-level application. This child application is added to the other business-level application. | Yes |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Composition Unit Name | String | Name of the composition unit. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Description | String | Description of the composition unit. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Parent BLA Name | String | The name of the parent business-level application. The other business-level application is added to this parent application. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Add Shared Library to Application

Add a shared library to an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Application Edition | String | The edition of the application to add the shared library to. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to add the shared library to. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| Shared Library Name(s) | String | A list of names, separated by newline characters, of shared libraries to add. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Add Shared Library to Module

Add a shared library to a module.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Application Edition | String | The edition of the application to add the shared library to. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to add the shared library to. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Module URI | String | The URI of the module to add the shared library to. For example: PlantsByWebSphere.war | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| Shared Library Name(s) | String | A list of names, separated by newline characters, of shared libraries to add. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Add Target To Module

Map a target server or cluster to a module of an enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to map the target to. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application being installed. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Module URI | String | The URI of the module. For example: PlantsByWebSphere.war,WEB-INF/web.xml | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Add Target to Composition Unit

Add a target to composition unit.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to change the target mapping for. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Composition Unit Name | String | The name of the composition unit. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Apply Configuration Properties

Apply the properties in the specified properties file to the WebSphere configuration.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Properties File Name | String | The name of the properties file to apply. | Yes |
| Report File Name | String | The name of a report file that contains the output for the applyConfigProperties command. | No |
| Report Filter Mechanism | String | The type of report filter mechanism. Specify All to display all report information. Specify Errors to display error information. Specify Errors\_And\_Changes to display error and change information. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Validate | String | Specifies whether to validate the properties file before applying the changes. | No |
| Variables Map | String | The values of the variables to use with the properties file. | No |
| Variables Map File Name | String | The name of the variables map file. This file contains values for variables that the system uses from the properties file. | No |
| Zip File Name | String | The name of the compressed file that contains the policy sets that you want applied to the cell. | No |

## Cancel Application Edition Validation

Cancel the validation of an edtion of a WebSphere enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to cancel validation of. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to cancel validation of. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Application is Installed

Check that an application is installed.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Command Line Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to check. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to check for. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Application is not running

Check that an application is not running.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to check. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String |  | Yes |
| Application Type | String | The type of application to check in WebSphere. Specify J2EEApplication or Application. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Application is running

Check that an application is running.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to be checked. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String |  | Yes |
| Application Type | String | The type of application to check in WebSphere. Specify J2EEApplication or Application. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check If BLA Exists

Check if a business-level application exists in a cell.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to check for. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check If Composition Unit Exists

Check if a composition unit exists in a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to check. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Composition Unit Name | String | The name of the composition unit to check for. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check If Config Object Exists DEPRECATED

DEPRECATED. Check if a config object exists in the WebSphere Configuration by Containment Path. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Object Containment Path | String | The containment path to the object to check for. i.e. /Cell:cellName/ServerCluster:clusterName/JDBCProvider:providerName/. Note, it must end with a JDBCProvider type and a / | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Initial Heap Size DEPRECATED

DEPRECATED. Check that initial heap size. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Maximum Size(MB) | String | The maximum expected heapsize. | Yes |
| Minimum Size(MB) | String | The minimum expected heapsize. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the Server whose heap size to check. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Maximum Heap Size DEPRECATED

DEPRECATED. Check that maximum heap size. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Maximum Size(MB) | String | The maximum expected heapsize. | Yes |
| Minimum Size(MB) | String | The minimum expected heapsize. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the Server whose heap size to check. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Node Status

Check the status of nodes in a cell.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Node Names | String | A list of node names to check, separated by newline characters. Leave blank to check status on all nodes in a cell. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Check Status

Check the status of a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Clear Target Mappings For Application

Clear all target mappings for an enterprise application and associated modules.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to clear mappings for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to install. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create BLA

Create a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to create. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration:| The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Description | String |  | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create Cluster

Create a cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the cluster to create. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create Cluster Member

Create a cluster member.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the cluster to create. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Member Name | String | The name of the cluster member to create. | Yes |
| Node Name | String | The name of the node to create the cluster member on. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create DataSource DEPRECATED

DEPRECATED. Create a DataSource on a given JDBCProvider. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Alias Password | Password | The Password to use for the Auth Alias if not already created. | Yes |
| Alias User Name | String | The User name to use for the Auth Alias if not already created. | Yes |
| Auth Alias | String | The Alias to create or use for this DataSource. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| DB Name(Legacy) | String | The DB Name for this DataSource. This is for legacy support. Please use the Resource Properties text area. | No |
| DataSource Name | String | The name of the DataSource to create. | Yes |
| DataStore Helper ClassName | String | The ClassName of the dataStoreHelper. | Yes |
| Description | String | The Description of the DataSource to create. | Yes |
| Host | String | The host name of the server to connect to. | No |
| JDBCProvider Location | String | The containment path to the JDBCProvider. i.e. /Cell:cellName/ServerCluster:clusterName/JDBCProvider:providerName/. Note, it must end with a JDBCProvider type and a / | Yes |
| JNDI Name | String | The JNDI Name for this DataSource. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Resource Properties | String | The resource properties to configure this data source with. Newline separated list of properties in the form name|type|value | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create DataSource For Cluster DEPRECATED

DEPRECATED. Create a data source on a cluster. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Alias Password | Password | The Password to use for the Auth Alias if not already created. | Yes |
| Alias User Name | String | The User name to use for the Auth Alias if not already created. | Yes |
| Auth Alias | String | The Alias to create or use for this DataSource. | Yes |
| Cluster Name | String | The name of the cluster where the JDBC provider resides. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| DB Name(Legacy) | String | The database name for the data source. This is for legacy support. Use the Resource Properties field. | No |
| DataSource Name | String | The name of the data Source to create. | Yes |
| DataStore Helper ClassName | String | The class name of the datastore helper. | Yes |
| Description | String | The Description of the DataSource to create. | Yes |
| Driver Type | String | The Driver Type for this DataSource. This is for legacy support. Please use the Resource Properties text area. | No |
| Host | String | The host name of the server to connect to. | No |
| JDBCProvider Name | String | The name of the JDBC provider to create the data source on. | Yes |
| JNDI Name | String | The JNDI name for the data source. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Port Number | String | The Port Number for this DataSource to connect to. This is for legacy support. Please use the Resource Properties text area. | No |
| Resource Properties | String | The resource properties to configure this data source with. Newline separated list of properties in the form name|type|value | Yes |
| Server Name | String | The Server Name for this DataSource to connect to. This is for legacy support. Please use the Resource Properties text area. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create IHS Web Server

Create an IBM HTTP Server definition with a template, and configure the web server definition properties. Web server definitions generate and propagate the plugin-config.xml file for each web server. For IBM HTTP Server only, you can use web server definitions to administer and configure IBM HTTP Server web servers with the administrative console. These functions include: Start, Stop, View logs, View and Edit configuration files.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Log File | String | The path for the IBM HTTP Server access log (access.log file). | Yes |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Admin Password | Password | Specify the password for the user ID. The password is generated by the htpasswd utility and stored in the admin.password file. | No |
| Admin Port | String | The port of the IBM HTTP Server administrative server. The administrative server is installed on the same computer as the IBM HTTP Server and handles administrative requests to the web server. | No |
| Admin UserID | String | Specify the user ID, if authentication is activated on the administration server in the admin.conf configuration file. This value must match the authentication information in the admin.conf file. | No |
| AdminProtocol | Enumeration: | Select the administrative protocol type. | No |
|                 | * HTTP     |                                          |    |
|                 | * HTTPS    |                                          |    |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Configuration File | String | The file path for the IBM HTTP Server. This option is required only for viewing and editing the IBM HTTP Server Configuration file. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Error Log File | String | The path for the IBM HTTP Server error log (error.log file). | Yes |
| Host | String | The host name of the server to connect to. | No |
| Name | String | The name of the server. | Yes |
| Node Name | String | The name of the node. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Plugin Install Root Directory | String | The root directory where the plug-in for the web server is installed. | Yes |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Web App Mapping | String | Specify the configuration information for web application mapping. | Yes |
| Web Install Root Directory | String | The installation root directory for the web server. | Yes |
| Web Port | String | The port number of the web server. | Yes |
| Web Protocol | Enumeration: | Specify the protocol for the IBM HTTP Server administration server running with an unmanaged or remote Web server. | Yes |
|                 | * HTTP    |                                                      |     |
|                 | * HTTPS   |                                                      |     |
| Windows Service Name | String | The Windows service name to use for IBM HTTP Server. | Yes |

## Create JDBCProvider DEPRECATED

DEPRECATED. Create a JDBCProvider with specified scope. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Class Path | String | The Classpath of the JDBCPRovider to create. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| DB Type | String | The DB Type of the JDBCPRovider to create. | Yes |
| Description | String | The Description of the JDBCPRovider to create. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Implementation Type | String | The Implementation Type of the JDBCPRovider to create. | Yes |
| JDBCProvider Name | String | The name of the JDBCPRovider to create. | Yes |
| Native Path | String | The Native of the JDBCPRovider to create. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Provider Type | String | The Type of the JDBCPRovider to create. | Yes |
| Scope | String | The scope at which to create teh JDBCProvider. Format: type=name. Type can be Cell, Node, Server, Application, or Cluster, and name is the name of the specific instance of the cell, node, server, application, or cluster that you are using. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create JDBCProvider For Cluster DEPRECATED

DEPRECATED. Create a JDBCProvider on a cluster. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Class Path | String | The Classpath of the JDBCPRovider to create. | Yes |
| Cluster Name | String | The name of the Cluster that the JDBCProvider lives on. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| DB Type | String | The DB Type of the JDBCPRovider to create. | Yes |
| Description | String | The Description of the JDBCPRovider to create. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Implementation Type | String | The Implementation Type of the JDBCPRovider to create. | Yes |
| JDBCProvider Name | String | The name of the JDBCPRovider to create. | Yes |
| Native Path | String | The Native of the JDBCPRovider to create. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Provider Type | String | The Type of the JDBCPRovider to create. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create SIBJMSConnectionFactory DEPRECATED

DEPRECATED. Create a SIBJMSConnectionFactory on a given scope. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bus Name | String | The name of the SIBus to association this Connection Factory with. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| JNDI Name | String | The JNDI name of the Connection Factory to create. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| SIBJMSConnectionFactory Name | String | The name of the SIBJMSConnectionFactory to create. | Yes |
| Scope | String | The containment path to the parent on which to create this SIBJMSConnectionFactory. i.e. /Cell:cellName/ServerCluster:clusterName/. Note, it must end with a / | Yes |
| Type | String | The type of the Connection Factory to create. Use Queue or Topic. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create SIBJMSQueue DEPRECATED

DEPRECATED. Create a SIBJMSQueue on a given scope. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| JNDI Name | String | The JNDI name of the Queue to create. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Queue Name | String | The name of the service integration bus destination to which this queue maps. | Yes |
| SIBJMSQueue Name | String | The name of the Queue to create. | Yes |
| Scope | String | The containment path to the parent on which to create this SIBJMSQueue. i.e. /Cell:cellName/ServerCluster:clusterName/. Note, it must end with a / | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create SIBJMSTopic DEPRECATED

DEPRECATED. Create a SIBJMSTopic on a given scope. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| JNDI Name | String | The JNDI name of the Topic to create. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| SIBJMSTopic Name | String | The name of the SIBJMSTopic to create. | Yes |
| Scope | String | The containment path to the parent on which to create this SIBJMSTopic. i.e. /Cell:cellName/ServerCluster:clusterName/. Note, it must end with a / | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create Shared Library

Create a shared library at the cell level.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Classpath | String | The class path for the shared library. | Yes |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Description | String |  | No |
| Host | String | The host name of the server to connect to. | No |
| Nativepath | String | The native path for the shared library. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| Shared Library Name | String | The name of the shared library to create. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Create Unmanaged Node

Create a new unmanaged node in the configuration. An unmanaged node is a node that does not have a node agent or a Deployment Manager. Unmanaged nodes can contain Web servers, such as IBM HTTP Server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Host Name | String | The host name of the system that is associated with the node. | Yes |
| Node Name | String | The name that represents the node in the configuration repository. | Yes |
| Operating System | Enumeration: | The operating system in use on the system associated with this node. | Yes |
|                 | - linux       |                                                      |     |
|                 | - windows     |                                                      |     |
|                 | - os400       |                                                      |     |
|                 | - aix         |                                                      |     |
|                 | - hpux        |                                                      |     |
|                 | - solaris     |                                                      |     |
|                 | - os390       |                                                      |     |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Deactivate Application Edition

Deactivate an edition of a WebSphere enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to deactivate. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to deactivate. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Delete Asset

Delete an asset from an enterprise bundle archive (EBA) file.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Asset Name | String | The name of the asset to delete. | Yes |
| Asset Version | String | The version of the asset to delete. Required only if more than one version of the asset exits in WebSphere Application Server. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Force | Boolean | Select to remove all dependency relationships that other assets declare on this asset. If not selected, the asset can be deleted only if no other assets declare a dependency on this asset. By default, Force is not selected. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Delete BLA

Delete a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to delete. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Delete Composition Unit

Delete a composition unit from a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to delete the composition unit from. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Composition Unit Name | String | The name of the composition unit to delete. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Force | Boolean | Select to remove all dependency relationships that other assets declare on this asset. If not selected, the asset can be deleted only if no other assets declare a dependency on this asset. By default, Force is not selected. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Delete Configuration Properties

Delete the properties in the specified properties file from the WebSphere configuration.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Properties File Name | String | The name of the properties file containing the resources to delete. | Yes |
| Report File Name | String | The name of a report file that contains the output for the deleteConfigProperties command. | No |
| Report Filter Mechanism | String | The type of report filter mechanism. Specify All to display all report information. Specify Errors to display error information. Specify Errors\_And\_Changes to display error and change information. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Validate | String | Specifies whether to validate the properties file before deleting the resources. | No |
| Variables Map | String | The values of the variables to use with the properties file. | No |
| Variables Map File Name | String | The name of the variables map file. This file contains values for variables that the system uses from the properties file. | No |

## Delete Server

Delete the WebSphere server running on the specified node.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node the server resides on. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to delete. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Disable Auto Start of an Application

Disable automatic start/loading of the application

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of an Application | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Disable AutoSync

Disable automatic synchronization on nodes.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Node Names | String | A list of node names to disable automatic synchronization on, separated by newline characters. Leave blank for all nodes in cell. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Display Application Deployment Options

Echo the options used to install a currently installed application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Edition | String | The edition of the application to display the options for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to display the options for. This name is used for a WebSphere reference. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Enable Auto Start of an Application

Enable automatic start/loading of the application

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of an Application | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Enable AutoSync

Enable automatic synchronization on nodes.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Node Names | String | A list of node names to enable automatic synchronization on, separated by newline characters. Leave blank for all nodes in cell. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Execute Batch Script

Run a batch script generated from plug-in steps.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to run. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Execute wsadmin Script

Run a Jython or JACL script with the wsadmin tool.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Language | Enumeration:       | The scripting language. | Yes |
|                 | - jython    |                         |     |
|                 | - jacl      |                         |     |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script Body | String | The body of the script to run with the wsadmin tool. If a script path is specified, this field is ignored. | No |
| Script Path | String | The script to run with the wsadmin tool. If specified, the Script Body field is ignored. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Export Application

Export an application from the WebSphere server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to export. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to export. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| File Path | String | The absolute path of the exported file. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Export DataSource Properties from Cluster DEPRECATED

DEPRECATED. Export the data source properties from a Cluster. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the Cluster that the JDBCProvider lives on. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Data Source Name | String | The name of the data source to get properties from. | Yes |
| Host | String | The host name of the server to connect to. | No |
| JDBCProvider Name | String | The name of the JDBCPRovider that the data source lives on. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Export JVMHeapSizes from Server DEPRECATED

DEPRECATED. Export the JVM Heap Size values from a server. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the Server whose heap size to export. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Extract Configuration Properties

Extracts configuration data in the form of a properties file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Config Data Key | String | Specifies the configuration object in the format Ex: Node, Server, VirtualHost, etc,. | No |
| Config Data Value | String | Specifies the corresponding configuration object instance | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Filter Mechanism | Enumeration:        | Specifies filter information for extracting configuration properties. | No |
|                  | - none              |                                                                       |    |
|                  | - ALL               |                                                                       |    |
|                  | - NO_SUBTYPES       |                                                                       |    |
|                  | - SELECTED_SUBTYPES |                                                                       |    |
| Host | String | The host name of the server to connect to. | No |
| Options Key | String | Specifies additional configuration options, such as GenerateTemplates, PortablePropertiesFile, etc,.. | No |
| Options Value | Enumeration: | Specifies additional configuration options value. | No |
|               | - none       |                                                   |    |
|               | - true       |                                                   |    |
|               | - false      |                                                   |    |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Properties File Name | String | The name of the file to store the properties extracted from configuration | Yes |
| Selected Sub Types Key | String | Specifies the configuration properties to include or exclude when the command extracts the properties. Specify this parameter if you set the filterMechanism parameter to NO\_SUBTYPES or SELECTED\_SUBTYPES. | No |
| Selected Sub Types Value | String | The value to include or exclude when NO\_SUBTYPES or SELECTED\_SUBTYPES is set as filterMechanism | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Zip File Name | String | Specifies the name of the compressed file into which you want to extract policy sets. | No |

## Generate Plugin

Generate a WebSphere plug-in for web servers.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Server Root Directory | String | The root directory of the application server. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Configuration Repo Root Directory | String | The root directory of the configuration repository for the plug-in. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Output file name | String | The name of the output file to generate. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Propagate | Boolean |  | No |
| Propagate Key Ring | Boolean |  | No |
| Server Name | String | The name of the server to administer. | No |
| Server Scope | Boolean | Select to generate a plug-in for a web server that is defined by the server property instead of the cell scope. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Import Asset

Import an asset from an enterprise bundle archive (EBA) file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| EBA File | String | The location of the EBA file to import. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| Storage Type    | Enumeration: | The storage type for the imported asset.            | Yes |
|                 | - FULL      |                                                      |     |
|                 | - METADATA  |                                                      |     |
|                 | - NONE      |                                                      |     |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Import DataSource Properties into Cluster DEPRECATED

DEPRECATED. Import the data source properties into a Cluster. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the Cluster that the JDBCProvider lives on. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Timeout | String | The Connection Timeout to use. | Yes |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| DataSource Name | String | The name of the data source to import properties into. | Yes |
| Host | String | The host name of the server to connect to. | No |
| JDBCProvider Name | String | The name of the JDBCPRovider that the data source lives on. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Statement Cache Size | String | The Statement Cache Size to use. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Import JVMHeapSizes for Cluster DEPRECATED

DEPRECATED. Import the JVM Heap Size values for all servers in a cluster. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the Cluster whose heap size is to be updated. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Initial Heap Size | String | The initial heap size to use for all servers in this cluster. | Yes |
| Maximum Heap Size | String | The initial heap size to use for all servers in this cluster. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Install Application

Install an application to a WebSphere server or cluster. If you are installing an application at the cell scope, then the Options String must contain a -MapModulesToServers argument to indicate which servers/clusters are affected.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to install. This name is used for a WebSphere reference. | Yes |
| Application Path | String | The path where the application will be installed on the server. | No |
| Application Source | String | The location of the application to install. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Context Root | String | The context root for this application. | No |
| Edition Description | String | The description of the edition of the application, which is used for a WebSphere reference. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Options String | String | The string of options to concatenate to the installation command. If blank, the -usedefaultbindings option is used. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Install OSGI Bundle

Install an OSGI bundle to WebSphere Application Server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Bundle File | String | The location of the OSGI bundle to install. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Install Or Update Application

Install or update an application on a WebSphere server or cluster. If you are installing or updating an application at the cell scope, then the Options String must contain a -MapModulesToServers argument to indicate which servers/clusters are affected.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to install or update. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to install. This name is used for a WebSphere reference. | Yes |
| Application Path | String | The path where the application will be installed on the server. | No |
| Application Source | String | The location of the application to install. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Context Root | String | The context root for this application. | No |
| Edition Description | String | The description of the edition of the application, which is used for a WebSphere reference. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Options String | String | The string of options to concatenate to the installation command. If blank, the -usedefaultbindings option is used. | No |
| Partial Update | Boolean | Select if updating an application and the application source specifies only a subset of the application files. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Intelligent Management Add Conditional Trace Rule

Sets the conditional trace specification for a web server. Use this operation to configure conditional tracing from the web server plug-in.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| Trace Condition | String | Specifies the trace condition. Use \ escape character for quotes | No |
| Trace Specification | String | Indicates the trace specification | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Add Remote Cell

Adds a remote cell to the list of cells for a web server. This operation enables a web server to extend the Intelligent Management service to multiple cells.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Enable Remote Cell Connectors | Enumeration: | Enables Intelligent Management remote cell connectors. Valid values are true or false | No |
|                               | - none       |                                                      |     |
|                               | - true       |                                                      |     |
|                               | - false      |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Import Certificates | Enumeration:  | Specifies whether to import certificates. Valid values are true or false | Yes |
|                     | - true        |                                                      |     |
|                     | - false       |                                                      |     |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Remote Cell Host | String | Specifies the host name for the remote cell | Yes |
| Remote Cell ID | String | Specifies a unique cell identifier | No |
| Remote Cell Password | Password | Specifies the password for the remote cell. Only required if security is enabled | No |
| Remote Cell Port | String | Specifies the port for the remote cell | Yes |
| Remote Cell User ID | String | Specifies the user ID for the remote cell. Only required if security is enabled | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Delete Remote Cell

Removes a remote cell from the list of cells for this web server

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Enable Remote Cell Connectors | Enumeration: | Enables Intelligent Management remote cell connectors. Valid values are true or false | Yes |
|                               | - true       |                                                      |     |
|                               | - false      |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Remote Cell Host | String | Specifies the host name for the remote cell | Yes |
| Remote Cell Port | String | Specifies the port for the remote cell | Yes |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Disable

Disable the Websphere application server Intelligent management.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Enable

Enable the Websphere application server Intelligent management.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | The name of the cell to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Maximum Retries | String | Specifies the maximum number of retries for enabling the Intelligent Management service(zero, positive integer or infinite) | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Retry Interval | String | Specifies the time interval (in seconds) between connection attempts | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Generate Plugin

Generates a plug-in that is required by the web server. The plug-in configuration file stores all your Intelligent Management settings.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | The name of the cell to administer. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Deployment Manager Directory | String | Specifies the deployment manager profile directory. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management List Remote Cells

Lists the remote cells for a web server which are available for Intelligent Management service

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management List Trace Rules

List Trace Rules for a web server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Modify

Modifies Intelligent Management properties for a web server. Use this operation to configure your Intelligent Management service

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | The name of the cell to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Maximum Retries | String | Specifies the maximum number of retries for enabling the Intelligent Management service(zero, positive integer or infinite) | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Retry Interval | String | Specifies the time interval (in seconds) between connection attempts | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Modify Remote Cell

Modifies a remote cell for a web server. Use this operation to change remote cell properties.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Enable Remote Cell Connectors | Enumeration: | Enables Intelligent Management remote cell connectors. Valid values are true or false | No |
|                               | - none       |                                                      |     |
|                               | - true       |                                                      |     |
|                               | - false      |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Remote Cell Host | String | Specifies the host name for the remote cell | Yes |
| Remote Cell ID | String | Specifies a unique cell identifier | No |
| Remote Cell Port | String | Specifies the port for the remote cell | Yes |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Refresh Local Cell

Use this operation to refresh the local cell connectors for your web server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Refresh Remote Cell

Use this operation to refresh the remote cell connectors for your web server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Remote Cell Host | String | Specifies the host name for the remote cell | Yes |
| Remote Cell Password | Password | Specifies the password for the remote cell. Only required if security is enabled | No |
| Remote Cell Port | String | Specifies the port for the remote cell | Yes |
| Remote Cell User ID | String | Specifies the user ID for the remote cell. Only required if security is enabled | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Remove Conditional Trace Rule

Removes a conditional trace rule from your web server. Use this operation to manage the conditional trace rules in your environment.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## Intelligent Management Set Default Trace Rule

Sets the default trace rule for a web server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | Yes |
| Trace Specification | String | Indicates the trace specification. Use comma seperator between specifications Ex:control.mapper:ERROR | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Application Server Install Path | String | The full path to the installation directory of WebSphere Application Server For example: /opt/IBM/WebSphere/AppServer/ | Yes |

## List Cluster Nodes

Return the list of nodes the cluster is running on and set it as an output property in the format ``${p:stepName/nodeList}``

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | The name of the WebSphere cluster | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Map Resource References to EJB for Application

Update the resource reference mappings for an enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to map resource references for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to install. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Resource References | String | The resource references to update. Specify a list, separated by newline characters, in the following format: moduleName->bean->uri->resourceReference->resourceType->targetJNDIName. Get this information for your application by using the following command: wsadmin print AdminApp.taskInfo(EarFileLocation, MapResRefToEJB) | Yes |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Map Users And Groups to Roles for Application

Map users to roles for an enterprise application.

| Name                             | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required |
|----------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Additional CommandLine Arguments | String       | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No       |
| Application Edition              | String       | The edition of the application to map users for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | No       |
| Application Name                 | String       | The name of the application to install. This name is used for a WebSphere reference.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes      |
| Batch Script                     | Boolean      | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No       |
| Cell Name                        | String       | The name of the cell to administer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No       |
| Cluster Name                     | String       | The name of the cluster to administer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | No       |
| Command Path                     | String       | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | No       |
| Connection Type                  | Enumeration: | The type of connection to use with the wsadmin tool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes      |
|                                  | * SOAP       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |          |
|                                  | * RMI        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |          |
|                                  | * NONE       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |          |
| Host                             | String       | The host name of the server to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No       |
| Node Name                        | String       | The name of the node to administer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No       |
| Password                         | Password     | The password for connecting to the WebSphere node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | No       |
| Port                             | String       | The port to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No       |
| Role Mappings                    | String       | The role mappings to update. Specify a list, separated by newline characters, in one of the following formats:<br><br><strong>Application Realm (5 params)</strong>:<br>roleName-&gt;Allow Everyone (yes &#124; no)-&gt;Allow Authenticated (yes &#124; no)-&gt;user1 &#124; user2-&gt;group1&#124;group2<br><br><strong>Trusted Realm (8 params)</strong>:<br>roleName-&gt;Allow Everyone (yes &#124; no)-&gt;Allow Authenticated (yes &#124; no)-&gt;user1&#124;user2-&gt;group1&#124;group2-&gt;Allow Trusted Realm Users (yes &#124; no)-&gt;mappedUser1&#124;mappedUser2-&gt;mappedGroup1 &#124; mappedGroup2<br><br>Use <strong>&#124;</strong> to separate multiple users/groups.<br>Leave fields blank if not applicable.<br>View current mappings with:<br>wsadmin print AdminApp.taskInfo('EarFileLocation', 'MapRolesToUsers') | Yes      |
| Script File                      | String       | The name of the script file to create or append to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No       |
| Server Name                      | String       | The name of the server to administer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No       |
| User Name                        | String       | The user name for connecting to the WebSphere node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No       |

## Modify Application ClassLoaders

Modify the class loader settings for an application and associated web modules.

| Name | Type | Description                                                                                                              | Required |
| ---- | ---- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application ClassLoader | String | The class loader mode to use for the overall application. Specify PARENT\_FIRST or PARENT\_LAST. | No |
| Application Edition | String | The edition of the application to modify. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to update the class loader settings for. | No |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WAR Classloader Policy | String | The policy that the classloader is to use to load the WAR modules of the application. Specify SINGLE or MULTIPLE. | No |
| Web Module ClassLoader | String | The class loader mode to use for the web modules in the application. Specify PARENT\_FIRST or PARENT\_LAST. | No |

## Remove OSGI Bundle

Remove an OSGI bundle from WebSphere Application Server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| Bundle Symbolic Name | String | The symbolic name of the OSGI bundle to remove. | Yes |
| Bundle Version | String | The version of the OSGI bundle to remove. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Restart Application

Restart an application on a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to restart. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to restart This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Restart Server

Restart a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Rollout Edition Atomically

Atomically roll out an edition of a WebSphere enterprise application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to roll out. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to roll out. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Drainage Interval | String | Specifies the number of seconds to wait before stopping an application edition instance during the rollout so that sessions can complete. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Quiesce Interval | String | Specifies the number of seconds to wait before cluster members and servers quiesce. If not set, server and cluster quiesce when active dialogs and sessions complete. | No |
| Reset Strategy | String | Reset strategy to use for rolling out the application. Specify hard or soft. Hard stops or restarts the application server, while soft stops or restarts the application instance, while leaving the application server running. | Yes |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Rollout Edition In Groups

Roll out an edition of a WebSphere enterprise application in groups.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to roll out. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to roll out. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Drainage Interval | String | Specifies the number of seconds to wait before stopping an application edition instance during the rollout so that sessions can complete. | Yes |
| Group Size | String | The size of the group for rolling out. | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Quiesce Interval | String | Specifies the number of seconds to wait before cluster members and servers quiesce. If not set, server and cluster quiesce when active dialogs and sessions complete. | No |
| Reset Strategy | String | Reset strategy to use for rolling out the application. Specify hard or soft. Hard stops or restarts the application server, while soft stops or restarts the application instance, while leaving the application server running. | Yes |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Set Application Defaults

Generate default IBM WebSphere Bindings for the specified EAR file.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the ws\_ant tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| DB Password | Password | The password associated with the default data source. | No |
| DB User | String | The user associated with the default data source. | No |
| Default Connection Factory | String | The default connection factory to be used for all EJB 2.x CMPs. | No |
| Default Data Source | String | A default data source JNDI name to be used for all EJB 1.x CMPs. | No |
| EAR File | String | The path of the ear for which you wish to generate bindings. | Yes |
| EJB JNDI Prefix | String | A prefix that is prepended to any generated EJB JNDI names. The default is ejb. | No |
| Export File | String | Path to a file that will be generated containing the bindings information. This file is in the custom strategy format. | No |
| Fail On Error | String | When true, the build will fail if any exception is thrown. The default is true. | No |
| Force Bindings | String | When false, any pre-existing bindings will not be altered. When true, new bindings are completely generated. The default is false. | No |
| Output EAR to Generate | String | The path of the bound EAR. | Yes |
| Resource Authorization | String | The resource authorization on the connection factory for EJB 2.x CMPs. | No |
| Strategy | String | Path to a custom strategy file that further affects the bindings. See the properties/dfltbndngs.dtd of your WebSphere installation for more details. | No |
| Virtual Host | String | The virtual host for all wars in the application. | No |

## Start Application

Start an application on a WebSphere server or cluster. If you are starting an application at the cell scope, the module list of the installed application is checked to determine which servers/clusters are started.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to start. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to start. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Start BLA

Start a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to start. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Edition | String | The edition of the business-level application to start, if more than one edition exists. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Start Server

Start a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| SOAP Connection Timeout (s) | String | The timeout for SOAP connections. Default is 180 seconds | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Stop Application

Stop an application on a WebSphere server or cluster. If you are stopping an application at the cell scope, the module list of the installed application is checked to determine which servers/clusters are stopped.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Edition | String | The edition of the application to stop. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to stop. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Stop BLA

Stop a business-level application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended as the last arguments on the command line before the script declaration. | No |
| BLA Name | String | The name of the business-level application to stop. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Edition | String | The edition of the business-level application to stop, if more than one edition exists. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Stop Server

Stop a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Immediate Stop | Boolean | Call the stopImmediate operation instead of the stop operation. This is supported only when stopping clusters. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Synchronize nodes

Synchronize all nodes in a cell.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Full Synchronize | Boolean | Select to run a full synchronization. Clear to run a normal synchronization. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | Name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| Synchronize All Nodes | Boolean | Select to synchronize every node. Clear to synchronize only the node specified in the Node Name property. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Terminate Server or Cluster

Stop a WebSphere server or cluster. For advanced users only. Use this step only after a Stop Server or Stop Cluster step has failed to stop the server or cluster. Sets the output property only if any of the node agents are inactive ``${p:stepName/checkNodeAgent}``

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Uninstall Application

Uninstall an application from a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to uninstall. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to uninstall. This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Update Application

Update an application on a WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to update. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to update.This name is used for a WebSphere reference. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Content Path | String | The location of the content to use to update the application. | Yes |
| Content Type | Enumeration: | The content type of the update. | Yes |
|              | - app        |                                 |     |
|              | - file       |                                 |     |
|              | - modulefile |                                 |     |
|              | - partialapp |                                 |     |
| Content URI | String | If content type is file, specify the location of the file to update, relative to the EAR root. | No |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Operation | Enumeration: | The operation to complete during the update. You must select Update to complete an application update or a partial application update. | Yes |
|           | - update |                                 |     |
|           | - add    |                                 |     |
|           | - delete |                                 |     |
|           | - addupdate |                                 |     |
| Options String | String | The string of options to concatenate to the update command. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Update Application On Cluster

Call the AdminTask.updateAppOnCluster command to start a rolling update of an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to update. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to update. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| Timeout | String | The timeout in seconds. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Update Context Root For Web Modules

Update the context root for the specified web module(s) of the installed application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to update context roots for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the installed application. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Context Root For Web Module | String | The web modules and context roots to update. Specify a list, separated by newline characters, in the following format: moduleName->uri->contextRoot. For example: PlantsByWebSphere Web Application->PlantsByWebSphere.war,WEB-INF/web.xml->/PlantsByWebSphere | Yes |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Update J2EEResourceProperty on Object DEPRECATED

DEPRECATED. Create or Update J2EEResourceProperty on a config object. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Object Containment Path | String | The containment path to the object on which to update attribute. i.e. /Cell:cellName/ServerCluster:clusterName/. Note, it must end with a / | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Property Name | String | The property name to update the value of. | Yes |
| Type | String | The type of the property. i.e. java.lang.String. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Value | String | The value to set the property to. | Yes |

## Update Simple Attribute on Object DEPRECATED

DEPRECATED. Update simple attribute on a config object. This step is deprecated. Use the WebSphere Application Server Configure plug-in to work with configurations in WebSphere.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Attribute Name | String | The attribute name to update the value of. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Object Containment Path | String | The containment path to the object on which to update attribute. i.e. /Cell:cellName/ServerCluster:clusterName/. Note, it must end with a / | Yes |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Value | String | The value to set the attribute to. | Yes |

## Update Virtual Host For Web Modules

Update the virtual host for the specified web module(s) of the installed application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to update context roots for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the installed application. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Virtual Host For Web Module | String | The web modules and virtual hosts to update. Specify a list, separated by newline characters, in the following format: moduleName->uri->virtualHost. For example: PlantsByWebSphere Web Application->PlantsByWebSphere.war,WEB-INF/web.xml->default\_host | Yes |

## Update soap.client.props File

Update the properties in WebSpheres soap.client.props file.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Properties to Set | String | New line separated list of additional properties to set, where the variable name and value are delimited by an equals character. For example: com.ibm.SOAP.authenticationTarget=BasicAuth. Variables will be replaced, not added, and unencrypted. | No |
| Authentication Target | Enumeration: | The method of authorization. BasicAuth and KRB5 are the only supported selections on a pure JMX SOAP Connector Client. Use the additional arguments property if you need to add a different property. | No |
|                       | - ignore         |                                                                                                 |    |
|                       | - BasicAuth     |                                                                                                 |    |
|                       | - KRB5         |                                                                                                 |    |
| Encode Password | Boolean | Select to encode the password in the soap.client.props file. | No |
| Password | Password | The password for connecting to the WebSphere node. Set to update the com.ibm.SOAP.loginPassword property. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | Yes |
| Security Enabled | Enumeration: | Select to enable authentication through the variables configured in the soap.client.props file. | No |
|                  | - ignore     |                                                                                                 |    |
|                  | - false      |                                                                                                 |    |
|                  | - true       |                                                                                                 |    |
| User Name | String | The user name for connecting to the WebSphere node. Set to update the com.ibm.SOAP.loginUserid property. | No |

## Validate Configuration Properties

Validate the WebSphere configuration properties in the specified properties file.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Properties File Name | String | The name of the properties file to validate. | Yes |
| Report File Name | String | The name of a report file that contains the output for the applyConfigProperties command. | No |
| Report Filter Mechanism | String | The type of report filter mechanism. Specify All to display all report information. Specify Errors to display error information. Specify Errors_And_Changes to display error and change information. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| Variables Map | String | The values of the variables to use with the properties file. | No |
| Variables Map File Name | String | The name of the variables map file. This file contains values for variables that the system uses from the properties file. | No |
| Zip File Name | String | The name of the compressed file that contains the policy sets that you want applied to the cell. | No |

## Validate Edition Using Dynamic Cluster

Validate an edition using a dynamic cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to validate. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to validate. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Maximum Size | String | The maximum size of the dynamic cluster. | Yes |
| Minimum Size | String | The minimum size of the dynamic cluster. | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Validate Edition Using Static Cluster

Validate an edition using a static cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to validate. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to validate. | Yes |
| Batch Script | Boolean | Select to use this command as part of a batch script. When selected, this command is added to a batch script that is saved and can be run later. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Cluster Size | String | The size of the static cluster. | Yes |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Script File | String | The name of the script file to create or append to. | No |
| Server Name | String | The name of the server to administer. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Wait for Application

Wait for an application to be ready on the WebSphere server or cluster.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Application Edition | String | The edition of the application to wait for. This is supported only for WebSphere Virtual Enterprise and WebSphere Application Server 8.5 and later. | No |
| Application Name | String | The name of the application to wait for. | Yes |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Inverval(Seconds) | String | The time, in seconds, to wait between status checks. | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| Timeout(Seconds) | String | The time, in seconds, to wait for the application to be in the ready state before the step fails. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Wait for server or cluster

Wait for a server or cluster to start.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Inverval(Seconds) | String | The time, in seconds, to wait between status checks. | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| Timeout(Seconds) | String | The time, in seconds, to wait for the server or cluster to start before the step fails. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## Wait for server or cluster to stop

Wait for a server or cluster to stop.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Cell Name | String | The name of the cell to administer. | No |
| Cluster Name | String | The name of the cluster to administer. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Delete Script File On Failure | Boolean | Select to delete the temporary script file if the step fails. | No |
| Host | String | The host name of the server to connect to. | No |
| Inverval(Seconds) | String | The time, in seconds, to wait between status checks. | Yes |
| Node Name | String | The name of the node to administer. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Server Name | String | The name of the server to administer. | No |
| Timeout(Seconds) | String | The time, in seconds, to wait for the server or cluster to stop before the step fails. | Yes |
| User Name | String | The user name for connecting to the WebSphere node. | No |

## WebSphere Discovery

This step discovers if Websphere is on an agent by checking common installation paths. If WebSphere is installed, the step assigns the WebSphereCell role to the resource and sets the command path property.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Path Override | String | Override the path to the wsadmin tool. | No |
| Profile Path Agent | String | Specify an additional path to search for the wsadmin tool for creating profile resources. By default, the path from the property websphere.profilePath defined on the agent is searched. | No |
| Profile Path Resource | String | Specify an additional path to search for the wsadmin tool for creating profile resources. By default, the path from the property websphere.profilePath defined on the resource is searched. | No |
| Resource | String | The resource to configure. | No |

## WebSphere Topology Discovery

This step discovers all the nodes, servers, and clusters in a cell and creates resources for each under a root resource, applies the correct roles, and sets the role properties. This step can be called directly or from an Update from Live Configuration wrapper step.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
|                 | * SOAP       |                                                      |     |
|                 | * RMI        |                                                      |     |
|                 | * NONE       |                                                      |     |
| Host | String | The host name of the server to connect to. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the profile for Rational Application Framework to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| wsadmin Max Heap | String | The javaoption passed to the wsadmin command. | No |
