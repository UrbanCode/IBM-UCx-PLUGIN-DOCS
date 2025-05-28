
# IBM MobileFirst Platform Foundation on IBM Containers - Process Steps


* [Create Databases](#create_databases)
* [Create Server Container (Create database, Prepare, Push and Start Container)](#create_server_container_(create_database,_prepare,_push_and_start_container))
* [Create Server Container Group (Create database, Prepare, Push and Start Container Group)](#create_server_container_group_(create_database,_prepare,_push_and_start_container_group))
* [Deploy Apps and Adapters](#deploy_apps_and_adapters)
* [Prepare and Push Analytics Image](#prepare_and_push_analytics_image)
* [Prepare and Push Server Image](#prepare_and_push_server_image)
* [Remove Existing Container](#remove_existing_container)
* [Remove Existing Container Group](#remove_existing_container_group)
* [Remove Server Runtime](#remove_server_runtime)
* [Start Analytics Container](#start_analytics_container)
* [Start Analytics Container Group](#start_analytics_container_group)
* [Start Server Container](#start_server_container)
* [Start Server Container Group](#start_server_container_group)
* [Un-Deploy Apps and Adapters from a Runtime](#un-deploy_apps_and_adapters_from_a_runtime)


## Create Databases

Based on the number of projects placed under /usr/projects folder, which is part of the artifacts directory, this step iteratively creates the Admin and Runtime databases. The database is created as a service in IBM Bluemix and bound to a IBM Bluemix Application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Schema Name | String | Database schema name (defaults to WLADMIN) | No |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that should be bound to the container | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| DB Service Name in the Bluemix | String | Bluemix database service instance name | Yes |
| DB Service Plan | String | Bluemix database service plan | Yes |
| DB Type (sqldb or cloudantNoSQLDB) | String | Type of the DB for IBM MobileFirst Platform Foundation to usesqldb or cloudantNoSQLDB are accepted | Yes |

## Create Server Container (Create database, Prepare, Push and Start Container)

Create the IBM MobileFirst Platform Foundation container in IBM Bluemix as a single stepCreate the admin and runtime databases, Prepare the image, Push the image to the IBM Bluemix container image registry, Start the container



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Schema Name | String | Database schema name (defaults to WLADMIN) | No |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that should be bound to the container | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| DB Service Name | String | Bluemix database service instance name | Yes |
| DB Service Plan | String | Bluemix database service plan | Yes |
| DB Type (sqldb or cloudantNoSQLDB) | String | Type of the DB for IBM MobileFirst Platform Foundation to usesqldb or cloudantNoSQLDB are accepted | Yes |
| Enable SSH? | Boolean | Enable SSH for the container. Accepted values are Y or N | No |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | IBM MobileFirst Platform Foundation properties as comma-separated key:value pairs | No |
| Expose HTTP? | Boolean | Expose HTTP Port. Accepted values are Y or N | No |
| Expose HTTPS? | Boolean | Expose HTTPS Port. Accepted values are Yor N | No |
| Maximum Log File Size | String | Maximum size of a log file | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| SSH Key | String | SSH Key to be injected into the container | No |
| Server Container Name | String | Name of the IBM MobileFirst Platform Foundation container to be created | Yes |
| Server IP | String | IP address that the IBM MobileFirst Platform Foundation container should be bound to. | Yes |
| Server Image Tag | String | Tag to be used for tagging the IBM MobileFirst Platform Foundation image | Yes |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied to IBM MobileFirst Platform Foundation | No |

## Create Server Container Group (Create database, Prepare, Push and Start Container Group)

Create the IBM MobileFirst Platform Foundation container group in IBM Bluemix as a single stepCreate the admin and runtime databases, Prepare the image, Push the image to the IBM Bluemix container image registry, Start the container group.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Admin Schema Name | String | Database schema name (defaults to WLADMIN) | No |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that should be bound to the container | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| DB Service Name | String | Bluemix database service instance name | Yes |
| DB Service Plan | String | Bluemix database service plan | Yes |
| DB Type (sqldb or cloudantNoSQLDB) | String | Type of the DB for IBM MobileFirst Platform Foundation to usesqldb or cloudantNoSQLDB are accepted | Yes |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | IBM MobileFirst Platform Foundation properties as comma-separated key:value pairs | No |
| Maximum Log File Size | String | Maximum size of a log file | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| Server Container Group Desired | String | The desired number of instances | Yes |
| Server Container Group Domain | String | The domain name of the route | Yes |
| Server Container Group Host | String | The host name of the route | Yes |
| Server Container Group Maximum | String | The maximum number of instances | Yes |
| Server Container Group Minimum | String | The minimum number of instances. | Yes |
| Server Container Group Name | String | Name of the IBM MobileFirst Platform Foundation container group | Yes |
| Server Image Tag | String | Tag to be used for tagging the IBM MobileFirst Platform Foundation image | Yes |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied to IBM MobileFirst Platform Foundation | No |

## Deploy Apps and Adapters

From the artifacts directory (/usr/projects folder), iteratively deploy all the apps and adapters in to the running IBM MobileFist Platform Foundation container runtime.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Certificate Directory | String | Direcotory which stores the certificate bundle to verify | No |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Server Admin Password | Password | Password of IBM MobileFirst Platform Foundation administrator | Yes |
| Server Admin Root | String | Admin context path of the IBM MobileFirst Platform Foundation (worklightadmin) | No |
| Server Admin Username | String | User name of IBM MobileFirst Platform Foundation administrator | Yes |
| Server IP | String | IP address that the IBM MobileFirst Platform Foundation container | Yes |
| Server Port (HTTPS) | String | Server Port (HTTPS) | Yes |

## Prepare and Push Analytics Image


Prepare the IBM MobileFirst Platform Foundation Operational Analytics Image and pushes it to the IBM Bluemix Container image registry to the corresponding organization and space.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Analytics Image Tag | String | Tag to be used for tagging the analytics image | Yes |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |

## Prepare and Push Server Image

Prepares the IBM MobileFirst Platform Foundation Image and pushes it to the IBM Bluemix Container image registry to the corresponding organization and space.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Server Image Tag | String | Tag to be used for tagging the IBM MobileFirst Platform Foundation image | Yes |

## Remove Existing Container

Removes the existing IBM MobileFirst Platform Foundation single node container (existing in any state).



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Name | String | Name of the IBM MobileFirst Platform Foundation container to be removed | Yes |

## Remove Existing Container Group

Removes the existing IBM MobileFirst Platform Foundation container group (existing in any state).



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Group Name | String | Name of the IBM MobileFirst Platform Foundation container group | Yes |

## Remove Server Runtime


Removes a specified runtime from a running IBM MobileFirst Platform Foundation container or container group on IBM Bluemix.It can also delete the runtime database, if selected.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that is bound to the container | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Certificate Directory | String | Direcotory which stores the certificate bundle to verify | No |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| DB Service Name | String | Bluemix database service instance name | No |
| Delete Runtime Data? | Boolean | Confirmation to delete the project-related data | No |
| Liberty Admin Password | Password | Password of the Liberty administrator role | Yes |
| Liberty Admin Username | String | User name of the Liberty administrator role | Yes |
| Runtime Name | String | The name of the runtime to be removed | Yes |
| Runtime Schema Name | String | Runtime Schema Name | No |
| Server Admin Password | Password | Password of IBM MobileFirst Platform Foundation administrator | Yes |
| Server Admin Root | String | Admin context path of the IBM MobileFirst Platform Foundation (worklightadmin) | No |
| Server Admin Username | String | User name of IBM MobileFirst Platform Foundation administrator | Yes |
| Server IP | String | The IP address the IBM MobileFirst Platform Foundation container is bound to. | Yes |
| Server Port (HTTPS) | String | The HTTPS port number exposed on the IBM MobileFirst Platform Foundation container. | Yes |

## Start Analytics Container

Start IBM MobileFirst Platform Foundation Operational Analytics Container on IBM Bluemix, based on the configurations provided. This uses the image tag from the IBM Bluemix image registry to create the container.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Analytics Container Name | String | Name of the Container to be created | Yes |
| Analytics Data Directory | String | Specify the directory to be used for storing analytics data. | No |
| Analytics Data Volume Name | String | Specify name of the volume to be created and mounted for analytics data. | No |
| Analytics IP | String | IP address that the Analytics container | Yes |
| Analytics Image Tag | String | Tag to be used for tagging the analytics image | Yes |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Enable Analytics Data Volume? | Boolean | Enable mounting volume for analytics data. | No |
| Enable SSH? | Boolean | Enable SSH for the container. Accepted values are Y or N | No |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | Provide related IBM MobileFirst Platform Foundation Operational Analytics image properties as comma-separated | No |
| Expose HTTP? | Boolean | Expose HTTP Port. Accepted values are Y or N | No |
| Expose HTTPS? | Boolean | Expose HTTPS Port. Accepted values are Yor N | No |
| Maximum Log File Size | String | Maximum Log File Size | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| SSH Key | String | SSH Key to be injected into the container | No |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied | No |

## Start Analytics Container Group

Start the IBM MobileFirst Platform Foundation Operational Anlaytics Container Group on IBM Bluemix, based on the configurations provided. This uses the image tag from the IBM Bluemix image registry to create the container group.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Analytics Container Group Desired | String | Analytics Container Group desired number of nodes | Yes |
| Analytics Container Group Domain | String | Analytics Container Group Domain | Yes |
| Analytics Container Group Host | String | Hostname for the Container Group to be created | Yes |
| Analytics Container Group Maximum | String | AnalyticsContainer Group maximum number of nodes | Yes |
| Analytics Container Group Minimum | String | AnalyticsContainer Group minimum number of nodes | Yes |
| Analytics Container Group Name | String | Name of the Container Group to be created | Yes |
| Analytics Data Directory | String | Specify the directory to be used for storing analytics data. | No |
| Analytics Data Volume Name | String | Specify name of the volume to be created and mounted for analytics data. | No |
| Analytics Image Tag | String | Tag to be used for tagging the analytics image | Yes |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Enable Analytics Data Volume? | Boolean | Enable mounting volume for analytics data. | No |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | Provide related IBM MobileFirst Platform Foundation Operational Analytics image properties as comma-separated | No |
| Maximum Log File Size | String | Maximum Log File Size | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied to IBM MobileFirst Platform Foundation | No |

## Start Server Container

Start the IBM MobileFirst Platform Foundation Container on IBM Bluemix, based on the configurations provided. This uses the image tag from the IBM Bluemix image registry to create the container.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that should be bound to the container | No |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Enable SSH? | Boolean | Enable SSH for the container. Accepted values are Y or N | No |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | IBM MobileFirst Platform Foundation properties as comma-separated key:value pairs | No |
| Expose HTTP? | Boolean | Expose HTTP Port. Accepted values are Y or N | No |
| Expose HTTPS? | Boolean | Expose HTTPS Port. Accepted values are Y or N | No |
| Maximum Log File Size | String | Maximum size of a log file | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| SSH Key | String | SSH Key to be injected into the container | No |
| Server Container Name | String | Name of the IBM MobileFirst Platform Foundation container to be created | Yes |
| Server IP | String | IP address that the IBM MobileFirst Platform Foundation container should be bound to. | Yes |
| Server Image Tag | String | Tag to be used for tagging the IBM MobileFirst Platform Foundation image | Yes |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied to IBM MobileFirst Platform Foundation | No |

## Start Server Container Group

Start the IBM MobileFirst Platform Foundation Container group (clustering) on IBM Bluemix, based on the configurations provided. This uses the image tag from the IBM Bluemix image registry to create the container group.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bluemix API URL | String | Bluemix API endpoint. (https://api.ng.bluemix.net) | Yes |
| Bluemix Application Name | String | The Bluemix application name that should be bound to the container | No |
| Bluemix CCS Host | String | IBM Containers Cloud Service Host (https://containers-api.ng.bluemix.net/v3) | Yes |
| Bluemix Org | String | Bluemix Organization to be used | Yes |
| Bluemix Password | Password | Password for Bluemix login | Yes |
| Bluemix Space | String | Bluemix Space to be used | Yes |
| Bluemix User | String | Bluemix user ID or email address | Yes |
| Container Artifacts Folder | String | Container Artifacts un-zipped location | Yes |
| Enable Volume? | Boolean | Enable mounting volume for container logs | No |
| Environment Properties | String | IBM MobileFirst Platform Foundation properties as comma-separated key:value pairs | No |
| Maximum Log File Size | String | Maximum size of a log file | No |
| Maximum Log Files | String | Maximum number of log files to maintain before overwriting | No |
| Server Container Group Desired | String | The desired number of instances | Yes |
| Server Container Group Domain | String | The domain name of the route | Yes |
| Server Container Group Host | String | The host name of the route | Yes |
| Server Container Group Maximum | String | The maximum number of instances | Yes |
| Server Container Group Minimum | String | The minimum number of instances. | Yes |
| Server Container Group Name | String | Name of the IBM MobileFirst Platform Foundation container group | Yes |
| Server Image Tag | String | Tag to be used for tagging the IBM MobileFirst Platform Foundation image | Yes |
| Server Memory | String | Assign a memory size limit to the container in megabytes (MB) | Yes |
| Trace Specification | String | Trace specification to be applied to IBM MobileFirst Platform Foundation | No |

## Un-Deploy Apps and Adapters from a Runtime

Apps and adapters provided with comma separated, are undeployed from the specified runtime, in the running IBM MobileFirst Foundation Platform Container.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Adapters (, separated) | String | List of adapters to be un-deployed with , separated | No |
| Apps (, separated) | String | List of apps to be un-deployed with , separated | No |
| Certificate Directory | String | Direcotory which stores the certificate bundle to verify | No |
| Server Admin Password | Password | Password of IBM MobileFirst Platform Foundation administrator | Yes |
| Server Admin Root | String | Admin context path of the IBM MobileFirst Platform Foundation (worklightadmin) | No |
| Server Admin Username | String | User name of IBM MobileFirst Platform Foundation administrator | Yes |
| Server IP | String | IP address that the IBM MobileFirst Platform Foundation container | Yes |
| Server Port (HTTPS) | String | Server Port (HTTPS) | Yes |
| Server Runtime Name | String | Runtime that need to be modified | Yes |



|Back to ...||Latest Version|IBM MobileFirst Platform Foundation on IBM Containers |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MFPFC/MobileFirstContainerAutomate-1.0.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
