
# Oracle WebLogic Server Resource Management - Process Steps

* [Create Capacity](#create_capacity)
* [Create Connection Factory](#create_connection_factory)
* [Create Distributed Queue](#create_distributed_queue)
* [Create Distributed Topic](#create_distributed_topic)
* [Create File Store](#create_file_store)
* [Create JDBC Data Source](#create_jdbc_data_source)
* [Create JDBC Store](#create_jdbc_store)
* [Create JMS Server](#create_jms_server)
* [Create Max Threads Constraint](#create_max_threads_constraint)
* [Create Min Threads Constraint](#create_min_threads_constraint)
* [Create Module](#create_module)
* [Create Queue](#create_queue)
* [Create Quota](#create_quota)
* [Create SAF Imported Destination](#create_saf_imported_destination)
* [Create SubDeployment](#create_subdeployment)
* [Create Template](#create_template)
* [Create Topic](#create_topic)
* [Create Work Manager](#create_work_manager)
* [Delete Capacity](#delete_capacity)
* [Delete Connection Factory](#delete_connection_factory)
* [Delete Distributed Queue](#delete_distributed_queue)
* [Delete Distributed Topic](#delete_distributed_topic)
* [Delete File Store](#delete_file_store)
* [Delete JDBC Data Source](#delete_jdbc_data_source)
* [Delete JDBC Store](#delete_jdbc_store)
* [Delete JMS Server](#delete_jms_server)
* [Delete Max Threads Constraint](#delete_max_threads_constraint)
* [Delete Min Threads Constraint](#delete_min_threads_constraint)
* [Delete Module](#delete_module)
* [Delete Queue](#delete_queue)
* [Delete Quota](#delete_quota)
* [Delete SAF Imported Destination](#delete_saf_imported_destination)
* [Delete SubDeployment](#delete_subdeployment)
* [Delete Template](#delete_template)
* [Delete Topic](#delete_topic)
* [Delete Work Manager](#delete_work_manager)
* [Update Capacity](#update_capacity)
* [Update Connection Factory](#update_connection_factory)
* [Update Distributed Queue](#update_distributed_queue)
* [Update Distributed Topic](#update_distributed_topic)
* [Update File Store](#update_file_store)
* [Update JDBC Data Source](#update_jdbc_data_source)
* [Update JDBC Store](#update_jdbc_store)
* [Update JMS Server](#update_jms_server)
* [Update Max Threads Constraint](#update_max_threads_constraint)
* [Update Min Threads Constraint](#update_min_threads_constraint)
* [Update Module](#update_module)
* [Update Queue](#update_queue)
* [Update Quota](#update_quota)
* [Update SAF Imported Destination](#update_saf_imported_destination)
* [Update SubDeployment](#update_subdeployment)
* [Update Template](#update_template)
* [Update Topic](#update_topic)
* [Update Work Manager](#update_work_manager)


## Create Capacity

Use this step to create a capacity on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Capacity Name | String | The name of the capacity to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Connection Factory

Use this step to create a JMS connection factory on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Connection Factory Name | String | The name of the JMS connection factory to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource where the connection factory will be created in the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Distributed Queue

Use this step to create a distributed queue on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The destination type of the distributed queue. Specify either `DistributedQueue` for weighted distributed or `UniformDistributedQueue` for uniform distributed. | Yes |
| Distributed Queue Name | String | The name of the distributed queue to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the distributed queue is to be located. | Yes |
| Uniform Distributed Queue Name | String | The name of the uniform distributed queue to create. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Distributed Topic

Use this step to create a distributed topic on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The destination type for the distributed topic. Specify either `DistributedTopic` for weighted distributed or `UniformDistributedTopic` for uniform distributed. | Yes |
| Distributed Topic Name | String | The name of the distributed topic to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the /server/lib directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module, where the topic is to be located. | Yes |
| Uniform Distributed Topic Name | String | The name of the uniform distributed topic to create. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create File Store

Use this step to create a file store on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| File Store Name | String | Name of the file store to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create JDBC Data Source

Use this step to create a JDBC data source on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Data Source Name | String | The name of the JDBC data source to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create JDBC Store

Use this step to create a JDBC store on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Store Name | String | The name of the JDBC store to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create JMS Server

Use this step to create a JMS server on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMS Server Name | String | The name of the JMS Server to create. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Max Threads Constraint

Use this step to creates a max-threads constraint on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Max Threads Constrain Name | String | The name of the max-threads constraint to create. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Min Threads Constraint

Use this step to create a min-threads constraint on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Min Threads Constraint Name | String | The name of the min-threads constraint to create. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Module

Use this step to create a module on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Module Name | String | Name of the module to create. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Queue

Use this step to create a queue on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Queue Name | String | The name of the queue to create. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the queue is to belocated. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The name of the host where WebLogic server is located. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Quota

Use this step to creates a quota on a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Quota Name | String | The name of the quota to be created. | Yes |
| System Resource | String | The name of the system resource on the JMS server nodule where the quota is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create SAF Imported Destination

Use this step to create a store-and-forward (SAF) imported destination on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SAF Imported Destination Name | String | The name of the store-and-forward imported destination to create. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the store-and-forward imported destination is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create SubDeployment

Use this step to create a subdeployment on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SubDeployment Name | String | The name of the subdeployment to create. | Yes |
| System Resource | String | The name of the system resource where the subdeployment is located in the WebLogicserver. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic Server. | Yes |

## Create Template

Use this step to create a template.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the template is to be located. | Yes |
| Template Name | String | The name of the template to create on WebLogic Server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Topic

Use this step to create a topic on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the topic is to be located. | Yes |
| Topic Name | String | The name of the topic to create. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create Work Manager

Use this step to create a work manager on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |
| Work Manager Name | String | The name of the work manager to create. | Yes |

## Delete Capacity

Use this step to delete a capacity from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Capacity Name | String | The name of the capacity to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Connection Factory

Use this step to delete a JMS connection factory from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Connection Factory Name | String | Name of the JMS connection factory to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource where the connection factory is located in the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Distributed Queue

Use this step to delete a distributed queue from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The destination type of the distributed queue. Specify either `DistributedQueue` for weighted distributed or `UniformDistributedQueue` for uniform distributed. | Yes |
| Distributed Queue Name | String | The name of the distributed queue to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the distributed queueis to be located. | Yes |
| Uniform Distributed Queue Name | String | The name of the uniform distributed queue to create. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Distributed Topic

Use this step to delete a distributed topic from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The destination type for the distributed topic. Specify either `DistributedTopic` for weighted distributed or `UniformDistributedTopic` for uniform distributed | Yes |
| Distributed Topic Name | String | The name of the distributed topic to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the topic is to belocated. | Yes |
| Uniform Distributed Topic Name | String | The name of the uniform distributed topic to delete. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete File Store

Use this step to delete a file store from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| File Store Name | String | The name of the file store to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete JDBC Data Source

Use this step to delete a JDBC data source from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Data Source Name | String | The name of the JDBC data source to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete JDBC Store

Use this step to delete a JDBC store from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Store Name | String | The name of the JDBC store to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete JMS Server

Use this step to delete a JMS server from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMS Server Name | String | The name of the JMS server to delete. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Max Threads Constraint

Use this step to delete a max threads constraint from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Max Threads Constraint Name | String | The name of the max-threads constraint to delete. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Min Threads Constraint

Use this step to delete a min-threads constraint from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Min Threads Constraint Name | String | The name of the min threads constraint to delete. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Module

Use this step to delete a module from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Module Name | String | The name of the module to delete. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Queue

Use this step to delete a queue on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Queue Name | String | The name of the queue to delete. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the queue is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Quota

Use this step to delete a quota in the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Quota Name | String | The name of the quota to delete. | Yes |
| System Resource | String | he name of the system resource on the JMS server module where the quota is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The name of the host where WebLogic server is located. | Yes |
| WebLogic Port | String | The port number of the WebLogic Server. | Yes |

## Delete SAF Imported Destination

Use this step to delete a store-and-Forward (SAF) imported destination from the WebLogic server.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SAF Imported Destination Name | String | The name of the Store-and-Forward imported destination to delete. | Yes |
| System Resource | String | The name of the system resource where the store-and-forward imported destination islocated. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete SubDeployment

Use this step to delete a subdeployment from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SubDeployment Name | String | The name of the subdeployment to delete. | Yes |
| System Resource | String | The name of the system resource where the subdeployment is located in the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Template

Use this step to delete a template on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the template is to be located. | Yes |
| Template Name | String | The name of the template to delete. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The name of the host where WebLogic server is located. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Topic

Use this step to delete a topic from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the topic is to belocated. | Yes |
| Topic Name | String | The name of the topic to delete. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Delete Work Manager

Use this step to delete a work manager from the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | TThe path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |
| Work Manager Name | String | The name of the work manager to delete. | Yes |

## Update Capacity

Use this step to update a capacity on the WebLogic server. If the capacity does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Capacity Name | String | The name of the capacity to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to used. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic Server. | Yes |

## Update Connection Factory

Use this step to update a JMS connection factory on the WebLogic server. If the JMS connection factory does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Connection Factory Name | String | The name of the JMS connection factory to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource where the connection factory is located in WebLogic server | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Distributed Queue

Use this step to update a distributed queue on the WebLogic server. If the distributed queue does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The type of distributed distribution queue. Specify either `DistributedQueue` for weighted distributed or `UniformDistributedQueue` for uniform distributed. | Yes |
| Distributed Queue Name | String | The name of the distributed queue to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the distributed queue is to be located. | Yes |
| Uniform Distributed Queue Name | String | The name of the uniform distributed queue to update. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic Server. | Yes |

## Update Distributed Topic

Use this step to update a distributed topic on the WebLogic server. If the distributed topic does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| Destination Type | Enumeration | The destination type for the distributed topic. Specify either `DistributedTopic` for weighted distributed or `UniformDistributedTopic` for uniform distributed . | Yes |
| Distributed Topic Name | String | The name of the distributed topic to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the topic is to be located. | Yes |
| Uniform Distributed Topic Name | String | The name of the uniform distributed topic to update on WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update File Store

Use this step to update a file store on the WebLogic server. If the file store does not exist, the file store is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| File Store Name | String | Name of the file store to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update JDBC Data Source

Use this step to update a JDBC data source on the WebLogic server. If the JDBC data source does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Data Source Name | String | The name of the JDBC data source to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update JDBC Store

Use this step to updates a JDBC store on the WebLogic server. If the JDBC store does not exist, the step creates the JDBC store.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JDBC Store Name | String | The name of the JDBC store to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update JMS Server

Use this step to update a JMS server on the WebLogic server. If the JMS server does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMS Server Name | String | The name of the JMS Server to update. | Yes |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Max Threads Constraint

Use this step to update a max-threads constraint on the WebLogic server. If the max-threads constraint does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Max Threads Constraint Name | String | The name of the max threads-constraint to update. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Min Threads Constraint

Use this step to update a min-threads constraint on the WebLogic server. If the min-threads constraint does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Min Threads Constraint Name | String | The name of the min-threads constraint to update. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Module

Use this step to update a module on the WebLogic server. If the module does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Module Name | String | The name of the module to update. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Queue

Use this step toupdate a queue on the WebLogic server. If the queue does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Queue Name | String | The name of the queue to update on WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the queue is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Quota

Use this step to update a quota in the WebLogic server. If the quota does not exist, he quota is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to be used. | Yes |
| Metadata File Path | String | The path to the metadata XML file to used. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Quota Name | String | The name of the quota to update. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the quota is to be located. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic Server. | Yes |

## Update SAF Imported Destination

Use this step to update a store-and-forward (SAF) imported destination on the WebLogic server. If the store-and-forward imported destination does not exist, the destination is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SAF Imported Destination Name | String | The name of the Store-and-Forward imported destination to update. | Yes |
| System Resource | String | The name of the system resource where the store-and-forward imported destination is located in the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update SubDeployment

Use this step to update a subdeployment on the Weblogic server. If the subdeployment does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| SubDeployment Name | String | The name of the subdeployment to update. | Yes |
| System Resource | String | The name of the system resource where the subdeployment is located in the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Template

Use this step to update a template. If the template does not exist, the template is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the template is to be located. | Yes |
| Template Name | String | The name of the template to update. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Topic

Use this step to update a topic on the WebLogic server. If the topic does not exist, the topic is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| System Resource | String | The name of the system resource on the JMS server module where the topic is to be located. | Yes |
| Topic Name | String | The name of the topic to update on WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Work Manager

Use this step to update a work manager on the WebLogic server. If the work manager does not exist, it is created.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma-separated list of additional properties to pass. | No |
| JMX JAR Path | String | The path to the `wljmxclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `*WebLogic\_home\_directory*/server/lib/wljmxclient.jar`. | Yes |
| JMX Properties Path | String | The path to the JMX properties file to use. | Yes |
| Metadata File Path | String | The path to the metadata XML file to use. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |
| Work Manager Name | String | The name of the Work Manager to update. | Yes |


