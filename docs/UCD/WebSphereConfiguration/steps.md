
# WebSphere Application Server - Configure - Process Steps

- [WebSphere Application Server - Configure - Steps](#websphere-application-server---configure---steps)
  - [Steps](#steps)
    - [Process steps in the WAS Configure plug-in](#process-steps-in-the-was-configure-plug-in)
    - [WebSphere Create Configuration Snippet](#websphere-create-configuration-snippet)
    - [WebSphere Extract Configuration Data](#websphere-extract-configuration-data)
    - [WebSphere Merge Configuration Files](#websphere-merge-configuration-files)
    - [WebSphere Templatize Cell Configuration Data](#websphere-templatize-cell-configuration-data)
    - [WebSphere Templatize Cluster Configuration Data](#websphere-templatize-cluster-configuration-data)
    - [WebSphere Templatize Node Configuration Data](#websphere-templatize-node-configuration-data)
    - [WebSphere Templatize Server Configuration Data](#websphere-templatize-server-configuration-data)
    - [WebSphere Templatize Server for Cluster Configuration Data](#websphere-templatize-server-for-cluster-configuration-data)
    - [WebSphere Templatize Snippet Configuration Data](#websphere-templatize-snippet-configuration-data)
    - [WebSphere Configuration Apply](#websphere-configuration-apply)
    - [WebSphere Configuration Compare](#websphere-configuration-compare)
    - [WebSphere Configuration Discovery](#websphere-configuration-discovery)
    - [WebSphere Configuration Partial Apply](#websphere-configuration-partial-apply)
    - [WebSphere Configuration Partial Remove](#websphere-configuration-partial-remove)
    - [WebSphere Get Compare Result](#websphere-get-compare-result)

## WebSphere Create Configuration Snippet

Extract a resource and any child resources from WebSphere configuration data by resource name.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Create Snippet File for each Resource | Boolean | If this option is selected, a separate snippet file will be created for each extracted resource. File names will be in the format of the file name specified in the Extracted Snippet File field with the file name ending with [Object Type]\_[Integer].json | No |
| Extracted Snippet File | String | Name and location of the configuration snippet file to create containing the extracted resource. For example: /tmp/extractedResource.json. Leave blank if this file is not desired. | No |
| New Configuration File | String | Name and location of a file to be created which contains everything in the original configuration file minus the resource that was extracted. For example: /tmp/newConfigData.json. Useful for removing items from a configuration file. Leave blank if this file is not desired. | No |
| Object Types to Extract | String | New line separated list of WebSphere object types to extract. Each occurance of a resource with the specified object types in the configuraiton data will have a snippet created for it. | No |
| Original Configuration File | String | Name and location of the configuration file. For example: /tmp/configData.json | Yes |
| Paths of Resources to Extract | String | New line separated list of resource paths to extract. The values must match the path properties of resources in the configuration data. | No |

## WebSphere Extract Configuration Data

Parse a WebSphere configuration file into cell, node, cluster, and server components.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Configuration File | String | The full path to the configuration file. For example: /tmp/discoveredConfig.json | Yes |
| Output Directory | String | The location where the extracted and templatized data is stored. | Yes |

## WebSphere Merge Configuration Files

Merges all configuration data files in the working directory to one file.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Output File | String | Name and location of a file to be created which contains the merged configuration data. | Yes |

## WebSphere Templatize Cell Configuration Data

Templatize WebSphere cell configuration data.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Did Discovery Collect Cell Configuration Only? | Boolean | Select if the discovery process only collected Cell configuration data (and did not discover any Nodes, Servers, Clusters). Clear if discovery was run against the cell and all configuration data was captured. If selected, your process will not include the WebSphere Extract Configuration Data step. | No |
| Dmgr/Application Server Node | String | Some security settings may include the name of the node that hosts the deployment manager (WAS ND) or an application server (WAS Base). If the Did Discovery Collect Cell Configuration Only checkbox is checked and you wish to tokenize the node name value, enter the node name in this field. | No |
| Dmgr/Application Server Node Host Name | String | Some security settings may include the host name of the node that hosts the deployment manager (WAS ND) or an application server (WAS Base). If the Did Discovery Collect Cell Configuration Only checkbox is checked and you wish to tokenize the node host name value, enter the node host name in this field. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Output Directory | String | The location where the extracted and templatized data is stored. | Yes |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |

## WebSphere Templatize Cluster Configuration Data

Templatizes WebSphere cluster configuration data

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | If discovery was run on a cluster only, specify the name of the cell that contains the cluster. | No |
| Cluster Name | String | Name of the cluster to templatize. Enter ALL to templatize all available clusters. | Yes |
| Configuration file | String | If discovery was run on a cluster only, specify the location of the discovered configuration file. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Output Directory | String | Location where the extracted and templatized data is stored | Yes |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| Use Multiplicity | Boolean | Select to use the multiplicity feature. Use the multiplicity feature to specify a number of cluster members (servers) to create when applying configuration changes. For example, you can specify that three cluster members are each created on node A and node B. Cluster members are then created based on a single server template. If you do not use the multiplicity feature, create server components for each cluster member. | No |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |
| Was Discovery Run On a Cluster Only? | Boolean | Select if the discovery process step was run against a specific cluster resource role. Clear if discovery was run against the cell. If selected, your process will not include the WebSphere Extract Configuration Data step. | No |

## WebSphere Templatize Node Configuration Data

Templatizes WebSphere node configuration data.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | If discovery was run on a node only, specifiy the name of the Cell that contains the node. | No |
| Configuration file | String | If discovery was run on a node only, specify the location of the discovered configuration file. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Node Name | String | The name of the node to templatize | Yes |
| Output Directory | String | The location where the extracted and templatized data is stored. | Yes |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |
| Was Discovery Run On a Node Only? | Boolean | Select if the discovery process step was run against a specific node resource role. Clear if discovery was run against the cell. If selected, your process will not include the WebSphere Extract Configuration Data step. | No |

## WebSphere Templatize Server Configuration Data

Templatize WebSphere Server configuration data.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | If discovery was run on a server only, specify the name of the cell that contains the server. | No |
| Configuration file | String | If discovery was run on a server only, specify the location of the discovered configuration file. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Node Host Name | String | If discovery was run on a server only, specify the host name of the node that contains the server. | No |
| Node Name | String | Name of the node that contains the server. | Yes |
| Output Directory | String | The location where the extracted and templatized data is stored. | Yes |
| Server Name | String | Name of the server to templatize. Enter ALL to templatize all available servers. | Yes |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |
| Was Discovery Run On a Server Only? | Boolean | Select if the discovery process step was run against a specific server resource role. Clear if discovery was run against the cell. If selected, your process will not include the WebSphere Extract Configuration Data step. | No |

## WebSphere Templatize Server for Cluster Configuration Data

Templatizes WebSphere cluster Member configuration data

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | If discovery was run on a server only, specifiy the name of the cell that contains the server. | No |
| Cluster Name | String | Name of the cluster the server will be a member of. | Yes |
| Configuration file | String | If discovery was run on a server only, specify the location of the discovered configuration file. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Node Host Name | String | If discovery was run on a server only, specify the host name of the node that contains the server. | No |
| Node Name | String | Name of the node that contains the server. | Yes |
| Output Directory | String | The location where the extracted and templatized data is stored. | Yes |
| Server Name | String | Name of the server to templatize. | Yes |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |
| Was Discovery Run On a Server Only? | Boolean | Select if the discovery process step was run against a specific server resource role. Clear if discovery was run against the cell. If selected, your process will not include the WebSphere Extract Configuration Data step. | No |

## WebSphere Templatize Snippet Configuration Data

Templatize a snippet of configuration data.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | If you want to templatize the cell name, enter the cell name. | No |
| Cluster Name | String | If you want to templatize the cluster name, enter the cluster name | No |
| Configuration file | String | Location and name of the configuration file to templatize. (example: /tmp/config.json) | Yes |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | Yes |
| Node Host Name | String | If you want to templatize the node host name, enter the node host name | No |
| Node Name | String | If you want to templatize the node name, enter the node name | No |
| Output File | String | Location and name of file to use to store the templatized data. For example: /tmp/foo/snippet.json | Yes |
| Server Name | String | If you want to templatize the server name, enter the server name | No |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | Yes |
| User Defined Tokenization | String | To tokenize or change values in the configuration data, specify a new line separated list of values in the format stringToReplace->newValue. For example, entering the value abcd1234->@NewToken@ will replace every occurrence of abcd1234 in your configuration file with @NewToken@. | No |

## WebSphere Configuration Apply

Apply the configuration for a given resource.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
| | | * SOAP  |  |
| | | * RMI   |  |
| | | * NONE  |  |
| Host | String | The host name of the server to connect to. | No |
| Logging Level | Enumeration: | The logging and trace level to use when applying the configuration. | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |
| Only Update/Create Configuration Objects | Boolean | When selected, configuration objects that exist in WebSphere Application Server but are not present in the configuration file are not deleted when the configuration is applied. | No |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Configuration File | String | The configuration file that contains the configuration data to apply. | No |
| WebSphere Configuration Types | String | A newline or comma separated list of the configuration types to be available for Configuration Discovery and Apply steps. | No |

## WebSphere Configuration Compare

Export the live cell configuration based on the same object types in the input configuration and compare them.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Attributes to Ignore | String | A newline separated list of attributes which will be ignored during the comparison. The format is WebSphere Object Type, Attribute Name, Json Role Property. For example, DataSource,providerType,websphere.datasource.providertype. | No |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Component Process Request ID | String | The request ID which will be used to track the comparison REST call | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
| | | * SOAP  |  |
| | | * RMI   |  |
| | | * NONE  |  |
| Host | String | The host name of the server to connect to. | No |
| Logging Level | Enumeration: | The logging and trace level to use for configuration comparison. | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Properties to Ignore | String | A newline separated list of names of WebSphere Property objects which will be ignored during the comparison. | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Configuration File | String | The configuration file that contains the configuration data to apply. | No |
| WebSphere Configuration Types | String | A newline or comma separated list of the configuration types (WebSphere objects) to be available for Configuration Discovery and Apply steps. | No |

## WebSphere Configuration Discovery

Discover all known configuration objects and create resources for each under a root resource, apply the correct role, and set the role properties.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Configuration Output File | String | The file that stores the discovered configuration data. | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
| | | * SOAP  |  |
| | | * RMI   |  |
| | | * NONE  |  |
| Host | String | The host name of the server to connect to. | No |
| Limit Discovery Scope | Enumeration: | By default, when discovery is run at a scope (Cell, Node, Server, or Cluster), discovery will get configuration data for all objects underneath that scope. For example, if discovery is run at the Cell scope, all Nodes, Clusters, and Servers will also be discovered. Use this field to limit the scope of discovery. For example, if this field is set to Cell, only the Cell configuration will be discovered (configuration data for Nodes, Clusters, and Servers will not be discovered). | No |
| | | * None               |  |
| | | * Cell               |  |
| | | * Cell and Clusters  |  |
| | | * Node               |  |
| Logging Level | Enumeration: | Select the logging and trace level to use for configuration discovery. | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Configuration Types | String | A newline or comma separated list of the configuration types (WebSphere objects) to be available for Configuration Discovery and Apply steps. | No |
| wsadmin Max Heap | String | The javaoption passed to the wsadmin command. | No |

## WebSphere Configuration Partial Apply

Apply the configuration for a given resource.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
| | | * SOAP  |  |
| | | * RMI   |  |
| | | * NONE  |  |
| Host | String | The host name of the server to connect to. | No |
| Logging Level | Enumeration: | The logging and trace level to use when applying the configuration. | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Configuration File | String | The configuration file that contains the configuration data to apply. | No |
| WebSphere Configuration Types | String | A newline or comma separated list of the configuration types (WebSphere objects) which will be created/updated. Configuration types not in this list will not be created/updated. If a configuraiton type is specified but does not exist in your configuration data, no action is taken. If this field is blank, all supported object types in the configuration data will be created/updated. | No |

## WebSphere Configuration Partial Remove

Remove the configuration for a given resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Path | String | The full path to the directory that contains the wsadmin tool. For example: /opt/IBM/WebSphere/AppServer/bin/ | No |
| Connection Type | Enumeration: | The type of connection to use with the wsadmin tool. | Yes |
| | | * SOAP  |  |
| | | * RMI   |  |
| | | * NONE  |  |
| Host | String | The host name of the server to connect to. | No |
| Logging Level | Enumeration: | The logging and trace level to use when applying the configuration. | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |
| Password | Password | The password for connecting to the WebSphere node. | No |
| Port | String | The port to connect to. | No |
| Profile Path | String | The directory location of the WebSphere profile to use. For example: /opt/IBM/WebSphere/Profiles/DefaultDmgr01 | No |
| Resource | String | The resource to configure. | No |
| User Name | String | The user name for connecting to the WebSphere node. | No |
| WebSphere Configuration File | String | The configuration file that contains the configuration data to apply. | No |
| WebSphere Configuration Types | String | A newline or comma separated list of the configuration types (WebSphere objects) which will be removed. Configuration types not in this list will not be remove. If a configuraiton type is specified but does not exist in your configuration data, no action is taken. If this field is blank, all supported object types in the configuration data will be removed. | No |

## WebSphere Get Compare Result

This step will report on the result of the WebSphere Configuration Compare step. It will create output properties indicating the result the comparison and a link to the comparison process.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Process Request ID | String | The request ID which will be used to track the comparison REST call | No |
| Fail When Differences Found | Boolean | If this box is checked, the step will have a status of Failure if differences are found. If the box is unchecked, it will have a status of Success whether differences are found or not. | No |
| Logging Level | Enumeration: | The logging/trace level for the configuration compare | No |
| | | * 0  |  |
| | | * 1  |  |
| | | * 2  |  |
| | | * 3  |  |
| | | * 4  |  |
| | | * 5  |  |

|Back to ...||Latest Version|WebSphere Application Server - Configure ||||||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[94.1165946](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereConfiguration/ucd-WebSphereConfiguration-94.1165946.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Example Applications](example applications.md)|[Example Processes](example processes.md)|[Roles](roles.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
