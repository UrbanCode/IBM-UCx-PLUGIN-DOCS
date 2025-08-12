
# WebSphere Application Server - Install - Process Steps

* [Create Deployment Manager Profile](#create_deployment_manager_profile)
* [Create Node Profile](#create_node_profile)
* [Install WebSphere Application Server](#install_websphere_application_server)
* [Remove Deployment Manager Profile](#remove_deployment_manager_profile)
* [Remove Node Profile](#remove_node_profile)
* [Start Deployment Manager](#start_deployment_manager)
* [Start Node](#start_node)
* [Start and Register Node](#start_and_register_node)
* [Stop Deployment Manager](#stop_deployment_manager)
* [Stop Node](#stop_node)
* [Stop WebSphere Application Server Process](#stop_websphere_application_server_process)
* [Uninstall WebSphere Application Server](#uninstall_websphere_application_server)


## Create Deployment Manager Profile

Creates a Deployment Manager Profile


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Dmgr Profile Template Path | String | Path to the template of the profile that will be created | No |
| WAS Admin Password | Password | Password to set for the WAS administrator account | No |
| WAS Admin Username | String | Username to set for the WAS administrator account | No |
| WAS Cell Name | String | Optional overide of the WAS Cell Name | No |
| WAS Host Name | String | Optional overide of the WAS Host Name | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Node Name | String | Optional overide of the WAS Node Name | No |
| WAS Ports File | String | Optional overide to provide ports file for cell create to use | No |
| WAS Profile Name | String | Name of the new profile to create | No |
| WAS Profile Path | String | Directory to place the new profile in | No |

## Create Node Profile

Creates a Node profile


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| Node Profile Template Path | String | Path to the template for the profile to create | No |
| WAS Admin Password | Password | Password to set for the WAS administrator account | No |
| WAS Admin Username | String | Username to set for the WAS administrator account | No |
| WAS Cell Name | String | Optional overide of the WAS Cell Name | No |
| WAS Host Name | String | Optional overide of the WAS Host Name | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Node Name | String | Optional overide of the WAS Node Name | No |
| WAS Ports File | String | Optional overide to provide ports file for cell create to use | No |
| WAS Profile Name | String | Name of the new profile to create | No |
| WAS Profile Path | String | Directory to place the new profile in | No |

## Install WebSphere Application Server

Installs Webshere Application Server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | A list, separated by newline characters, of additional arguments to pass to the wsadmin tool. These arguments are appended at the end of the command line. | No |
| IBM Installation Manager Home | String | Path IBM Installation Manager is installed to (for example, /opt/IBM/InstallationManager. | No |
| IM Shared | String | Location of the IM Shared location | No |
| Java IM Repository | String | Starting in WAS 9, the IBM Java SDK must be installed alongside WAS. In thie field, specify the location of the repository where IBM Java SDK is stored, if the repository differs from the WAS repository (this may be in the format C:\installation\_files\repository.config or http://hostname:8081) | No |
| Java Version | String | Starting in WAS 9, the IBM Java SDK must be installed alongside WAS. In thie field, specify the version of IBM Java SDK to install as described in the source repository (for example, com.ibm.java.jdk.v8\_8.0.3000.20160526\_1317.jar) | No |
| WAS IM Repository | String | Location of the repository where WAS is stored (this may be in the format C:\installation\_files\repository.config or http://hostname:8081) | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer). | No |
| WAS Version | String | Version of WAS ND to install as described in the source repository (for example, com.ibm.websphere.ND.v85\_8.5.5000.20130514\_1044) | No |

## Remove Deployment Manager Profile

Removes a Deployment Manager profile


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Delete Profile Directory | Boolean | Determines if the profiles directory should be deleted after the manageprofiles command completes. | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Profile Name | String | Name of the profile to remove | No |
| WAS Profile Path | String | Directory of the profile | No |

## Remove Node Profile

Removes a node profile


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Delete Profile Directory | Boolean | Determines if the profiles directory should be deleted after the manageprofiles command completes. | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Profile Name | String | Name of the profile to remove | No |
| WAS Profile Path | String | Directory of the node | No |

## Start Deployment Manager

Starts the Deployment Manager


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password of the WAS administrator user | No |
| WAS Admin Username | String | WAS user with administrator privileges | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer). | No |
| WAS Profile Name | String | Name of the new Deployment Manager | No |

## Start Node

Starts a Node


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password to set for the WAS administrator account | No |
| WAS Admin Username | String | Username to set for the WAS administrator account | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Profile Name | String | Name of the profile to start | No |

## Start and Register Node

Starts and registers a node


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password of the WAS administrator user | No |
| WAS Admin Username | String | WAS user with administrator privileges | No |
| WAS Deployment Manager Hostname | String | Hostname of the deployment manager | No |
| WAS Deployment Manager Port | String | Port of the deployment manager | No |
| WAS Profile Path | String | Directory to place the new profile in | No |

## Stop Deployment Manager

Stops the Deployment Manager


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password of the WAS administrator user | No |
| WAS Admin Username | String | WAS user with administrator privileges | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Profile Name | String | Name of the profile to stop | No |

## Stop Node

Stops a Node


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password to set for the WAS administrator account | No |
| WAS Admin Username | String | Username to set for the WAS administrator account | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |
| WAS Profile Name | String | Name of the profile to stop | No |

## Stop WebSphere Application Server Process

Stops the Webshere Application Server process


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| WAS Admin Password | Password | Password of the WAS administrator user | No |
| WAS Admin Username | String | WAS user with administrator privileges | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |

## Uninstall WebSphere Application Server

Uninstalls Webshere Application Server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IBM Installation Manager install path | String | Path IBM Installation Manager is installed to. | No |
| Version | String | Version of WAS to uninstall (for example, com.ibm.websphere.ND.v85\_8.5.5000.20130514\_1044) | No |
| WAS Install Path | String | Path WAS is installed to (for example, /opt/IBM/WebSphere/AppServer) | No |



|Back to ...||Latest Version|WebSphere Application Server - Install ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[11.1154050](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/websphere-install/ucd-WAS-Install-11.1154050.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
