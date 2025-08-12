
# IBM Integration Bus (formerly WebSphere Message Broker) - CMP - Process Steps

* [Create Execution Group](#create_execution_group)
* [Create Integration Node](#create_integration_node)
* [Create Or Update Configurable Service](#create_or_update_configurable_service)
* [Delete Applications](#delete_applications)
* [Delete BAR File Contents](#delete_bar_file_contents)
* [Delete Configurable Service](#delete_configurable_service)
* [Delete Execution Group](#delete_execution_group)
* [Delete Integration Node](#delete_integration_node)
* [Deploy](#deploy)
* [Does Execution Group Exist](#does_execution_group_exist)
* [Override Bar Properties](#override_bar_properties)
* [Restart Execution Groups](#restart_execution_groups)
* [Set Execution Group Properties](#set_execution_group_properties)
* [Set Integration Node Properties](#set_integration_node_properties)
* [Set Message Flows Properties](#set_message_flows_properties)
* [Start Integration Node](#start_integration_node)
* [Start Message Flows](#start_message_flows)
* [Stop Integration Node](#stop_integration_node)
* [Stop Message Flows](#stop_message_flows)


## Create Execution Group

Create execution groups, but only if they do not exist.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Groups | String | Comma or new line separated list of Execution Groups defined on the broker to create if they do not exist. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Create Integration Node

Create an Integration Node (Broker). This command will create the WebSphere MQ queues required by the broker if they dont already exist.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the mqsicreatebroker script when running this step. Multiple arguments are split by new line. (e.g. -i generalDefaultUserId) | No |
| IIB Installation Directory | String | The installation directory of the IIB server. (e.g. /opt/ibm/server) | Yes |
| Integration Node (Broker) | String | The name of the integration node to create. | Yes |
| Queue Manager | String | The name of your WebSphere MQ Queue Manager. If this is not specified a queue manager is created unless running z/OS, in which case this step will fail. | No |
| Service Password | String | The password for the service user ID. This is only required for IIB version 9. | No |
| Service User ID | String | The user ID under which the broker runs. This is only required for IIB version 9. | No |

## Create Or Update Configurable Service

Create a configurable service if it doesnt exist. If it does, update its properties.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Delete Missing Properties | Boolean | This option will attempt to delete any properties that exist on the configurable service that arent referenced in the Properties field. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Properties | String | A new line separated list of properties to set in the format name->value or name=value | Yes |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Service Name | String | The name of the service to be created or updated | Yes |
| Service Type | String | The type of the service. If there is a service matching Service Name that is not of this type, the step will fail. | Yes |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Delete Applications

Delete an application or multiple applications deployed to an execution group by name.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Names | String | A list of IIB application names split by newlines or commas. | Yes |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group where the applications exist. | Yes |
| Fail On Missing Application | Boolean | Select this checkbox to fail immediately if any specified applications do not exist on the execution group. Otherwise, the step will only fail if none of the applications exist on the execution group. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Delete BAR File Contents

Delete all contents that have been deployed using a BAR file name that matches the given regular expression. Useful for deploying into shared execution groups.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Delete Libraries | Boolean | Check this box to delete any libraries that have been deployed to the execution group using the BAR file. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group to Deploy to. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| RegEx | String | Java compliant regular expression for matching the BAR file name of deployed flows. | Yes |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Delete Configurable Service

Delete a configurable service.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Service Name | String | The name of the service to be created or updated | Yes |
| Service Type | String | The type of the service. If there is a service matching Service Name that is not of this type, the step will fail. | Yes |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Delete Execution Group

Delete the specified execution group from the broker. This will also remove any resources used by the execution group.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | The name of the execution group to be deleted. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Delete Integration Node

Delete an Integration Node (Broker).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Delete Trace Files | Boolean | Check this box to delete the nodes trace files from its work directory. | No |
| Delete WebSphere MQ Queues | Boolean | Check this box to delete any current integration server administration security WebSphere MQ queues along with the integration node. | No |
| IIB Installation Directory | String | The installation directory of the IIB server. (e.g. /opt/ibm/server) | Yes |
| Integration Node (Broker) | String | The name of the integration node to create. | Yes |

## Deploy

Deploy a Broker Archive. This step will set the output property completionCode, representing the last completion code returned from the broker during deployment.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bar File Names | String | Comma or new line separated list of Broker Archive files to deploy. | Yes |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Deployment Type | Enumeration:
* full
* incremental
* ``${p?:iib.deployType}``
| Specify either an incremental or full deployment. You may specify the ``${p?:iib.deployType}`` option and set the iib.deployType property to either incremental or full at any level in the property hierarchy. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Groups | String | Comma or new line separated list of Execution Groups to Deploy to. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Start/Stop Message Flows | Boolean | Check to stop all Message Flows in the Execution Group before deployment and start all Message Flows after deployment. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Does Execution Group Exist

Sets an output property named exists with true or false based on the existence of the specified Execution Group.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Execution Group name to identify its existence. | Yes |
| Fail if Execution Group Not Found | Boolean | Select this checkbox to fail the step if the Execution Group is not found. The output property will still be set. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Override Bar Properties

Overrides configuration properties inside a Broker Archive file. This step is not compatible with WebSphere Message Broker version 7.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bar File Excludes | String | New line separated list of Broker Archives to exclude \*.bar includes all bar files in the working directory. | No |
| Bar File Includes | String | New line separated list of broker archive files or patterns to include \*.bar includes all bar files in the working directory. | Yes |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| On Failure | Enumeration:
* fastFail
* bestEffort
* warn
| Choice of action when overrides fail on a particular bar file. (Fast Fail: Step will fail right away. Best Effort: Step will attempt to override properties on all bar files, and will fail at the end if any override failures occurred. Useful to pinpoint which bar files are invalid. Warn: Step will continue on if an override failure occurs, and print a warning declaring the bar file that failed.) | No |
| Properties | String | A new line separated list of properties to set in the format name=value, or a Property file. (You must specify either Properties or a Properties File, not both) | Yes |

## Restart Execution Groups

Restart execution groups if they exist on the broker.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Groups | String | Comma or new line separated list of Execution Groups defined on the broker to restart. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Set Execution Group Properties

Set runtime properties for an execution group.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group defined on the broker. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Properties | String | A new line separated list of properties to set in the format name=value | Yes |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Set Integration Node Properties

Set Runtime Properties for the Integration Node (broker).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node (broker). You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Properties | String | A new line separated list of properties to set in the format type:name=value. Possible component types to specify for type are configurableservice, httplistener, securitycache, cachemanager, or webadmin. The name is specified in the format objectName/propertyName. For configurable services the name must be in the format service/objectName/propertyName. | Yes |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Set Message Flows Properties

Sets runtime properties on a list of message flows.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Directory Offset | String | Path under the current working directory where you want the step to execute. Absolute paths are not allowed. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group to Deploy to. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Message Flows | String | A new line separated list of message flows. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Properties | String | A new line separated list of properties to set in the format name=value | No |
| Property File | String | Specify the name and path to a property file to use as a source of the properties instead of explicitly listing the properties in the Properties field and the flows in the Message Flows field. The property file would be the same format as the one used by the mqsiapplybaroverride command. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Start Integration Node

Start an Integration Node (Broker).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IIB Installation Directory | String | The installation directory of the IIB server. (e.g. /opt/ibm/server) | Yes |
| Integration Node (Broker) | String | The name of the integration node to create. | Yes |

## Start Message Flows

Start Message Flows that are stopped.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Message Flows | String | Comma or new line separated list of Message Flow names to start. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |

## Stop Integration Node

Stop an Integration Node (Broker).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IIB Installation Directory | String | The installation directory of the IIB server. (e.g. /opt/ibm/server) | Yes |
| Integration Node (Broker) | String | The name of the integration node to create. | Yes |

## Stop Message Flows

Stop Message Flows that are running.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel | String | The name of the channel to use. Must be defined on the queue manager. Specify this value if you are using below version 10 of IIB. | No |
| Environment Variables | String | A file or list containing property entries, with each entry delimited by newlines. Entries must be in the form VAR=VALUE (i.e. java.library.path=/opt/mqm/java/lib64: /opt/mqm/java/lib). Implemented to support z/OS using an ENVFILE. | No |
| Execution Group | String | Name of the Execution Group. | Yes |
| IBM Integration Bus Version | String | Enter the version of the installed IBM Integration Bus. This determines which API will be required. For example: 10.0.0.1 | Yes |
| IP | String | The ip address of the target server for a remote connection. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Integration Node Name | String | Name of Integration Node. You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Jar Path | String | Specify either directories to recursively search from, or each individual jar path split by your file systems path separator. (e.g. /opt/ibm/server/classes:/opt/ibm/common/jetty/lib) You must specify your required JAR files in either the Jar Path field or the CLASSPATH environment variable. | No |
| MQSIPROFILE Executable | String | The absolute path to the mqsiprofile executable on your IIB server. Specifying this value will initialize your command environment. This value is required if your command environment is not initialized on startup through a script such as `.bashrc`. | No |
| Message Flows | String | Comma or new line separated list of Message Flow names to start. | No |
| Password | Password | Password for secure authentication. Explicit user authentication only available with IIB 10. | No |
| Port | String | The port of the target server for a remote connection.You must specify either an IP and Port to connect to a remote broker or an Integration Node Name to connect to a local broker. | No |
| Queue Manager | String | The WebSphere MQ Queue Manager which the broker is using. Specify this value if you are using below version 10 of IIB. | No |
| Trace File | String | The file to use for trace logging. If not set trace logging will be disabled. | No |
| Use SSL | Boolean | Administration security authentication/authorization. This option is only available in IIB version 10. | No |
| Username | String | Username for secure authentication. Explicit user authentication only available with IIB 10. | No |


