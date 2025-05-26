
# IBM Containers - Process Steps


* [Bind IP Address](#bind_ip_address)
* [Build Image from Dockerfile](#build_image_from_dockerfile)
* [Create Group](#create_group)
* [Execute Command On Container](#execute_command_on_container)
* [Initialize Plug-in](#initialize_plug-in)
* [Install IBM Containers Plug-in](#install_ibm_containers_plug-in)
* [Log in to Cloud Foundry](#log_in_to_cloud_foundry)
* [Log out of Cloud Foundry](#log_out_of_cloud_foundry)
* [Release IP Address](#release_ip_address)
* [Remove Group](#remove_group)
* [Request IP Address](#request_ip_address)
* [Run Container](#run_container)
* [Set Namespace](#set_namespace)
* [Start Containers](#start_containers)
* [Stop Containers](#stop_containers)
* [Unbind IP Address](#unbind_ip_address)
* [Uninstall IBM Containers Plug-in](#uninstall_ibm_containers_plug-in)
* [Update Group](#update_group)


## Bind IP Address

Bind a floating IP address to a running container. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Container Name/ID | String | The name or ID of the container to bind to the IP address. | Yes |
| IP Address | String | The floating IP address to release from the container cloud service. | Yes |

## Build Image from Dockerfile

Build a Docker image locally or in the private Bluemix repository by using a Dockerfile text document. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional command-line arguments to pass when running this command (for example, pull). | No |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Dockerfile Path | String | The path to the directory that contains the Dockerfile document used to build the image.Artifacts used in the build must also exist in this directory. | Yes |
| Tag | String | The repository name to apply to the created image. | Yes |

## Create Group

Create a container group for scaling containers.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional argument flags to include with the command, split by a new line. | No |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Desired Instances | String | The number of required container instances. This is the number of containers by default. | No |
| Domain Name | String | Domain name to combine with the host name to form the full public route URL (for example, .mybluemix.net). | No |
| Environment Variables | String | Specify a key value pair for each environment variable to set on the containers. Split multiple variables by using a new line (for example, CSS\_BIND\_APP=MyApplication). | No |
| Exposed Port | String | Expose this port for HTTP traffic on the containers. You cannot include multiple ports for container groups. | No |
| Group Name | String | Name to assign to the group. Must start with a letter and can include uppercase letters, lowercase letters, numbers, periods, underscores, or hyphens. | Yes |
| Host Name | String | Host name to combine with the domain to form the full public route URL. | No |
| Image Name | String | The image to include in each container instance in the container group. You can include commands after the container name (for example, registry.ng.bluemix.net/myimage ping localhost). | Yes |
| Maximum Instances | String | The maximum number of container instances. | No |
| Minimum Instances | String | The minimum number of container instances. | No |

## Execute Command On Container

Execute a command on a running container. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional command-line arguments to pass when running this command separated by new lines (for example, user USERNAME). | No |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Command | String | The command to run within the container (for example, cp /root/dependency.jar ``${JAVA\_HOME}``/lib). | No |
| Container Name/ID | String | The name or ID of the container on which to run a command. | No |

## Initialize Plug-in

Refresh the bearer token for authentication and reinitialize the CLI. This step will also set the output properties cfic.dockerHost and cfic.dockerCertPath. Use these properties to set the host and tlscert with the Docker CLI. This will allow use of the Docker CLI directly for the current session to run supported Docker commands. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |

## Install IBM Containers Plug-in

Install the IBM Containers plug-in to run Docker commands from within the Cloud Foundry CLI.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Path To IBM Containers Plugin | String | Override the default URL with a local path to the IBM Containers plug-in or a URL path. | No |

## Log in to Cloud Foundry

Log in to the Cloud Foundry instance in order to use the CF Containers CLI.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Endpoint | String | The API Endpoint used to connect to the Cloud Foundry web service. | Yes |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Cloud Foundry Password | Password | The password to authenticate with your Cloud Foundry instance. | Yes |
| Cloud Foundry User Name | String | The user name to authenticate with your Cloud Foundry instance. | Yes |
| Organization | String | The Cloud Foundry Organization that can be accessed according to the users permissions. | No |
| Space | String | The Cloud Foundry Space that provides the scope for services, applications, and containers. | No |

## Log out of Cloud Foundry

Log out of the Cloud Foundry instance.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |

## Release IP Address

Release an IP address from the container cloud service instance. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| IP Address | String | The floating IP address to release from the container cloud service. | Yes |

## Remove Group

Remove a container group from the Bluemix repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Forced Removal | Boolean | Force the removal of a running or failed container. | No |
| Group Name | String | Name to assign to the group. Must start with a letter and can include uppercase letters, lowercase letters, numbers, periods, underscores, or hyphens. | Yes |

## Request IP Address

Request a new floating IP address that can be used within your container cloud service instance. You must be logged into Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |

## Run Container

Start a new container from an image name or ID. You must be logged in to Cloud Foundry

before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional command-line arguments to pass when running this command (for example, memory 1024). | No |
| Bind Application | String | The name of the application to bind to the running container. | No |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Command | String | Command to run on the container (for example, export GROOVY\_HOME=/opt/groovy). | No |
| Container Name | String | Name to assign to the running container. | No |
| Exposed Ports | Boolean | Automatically expose any ports specified in the images Dockerfile document for HTTP traffic. | No |
| Image Name/ID | String | The name or ID of the image to use for running the container. | Yes |
| Ports | String | Specify any ports to expose for HTTP traffic on the running container. Split multiple ports by new line. | No |

## Set Namespace

Set the namespace for the targeted organization. Be careful, this namespace cannot be unset. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Namespace | String | The namespace to be assigned to uniquely identify your organization in the Bluemix registry. The namespace must start with a lowercase letter and be 430 characters. You can use lowercase letters, numbers, and underscores. | No |
| On Failure | Enumeration:
* fail
* warn
| What to do when the namespace is already set for the organization. A setting of Fail will cause the step to fail and Warn will cause the step to warn but continue with process execution. | No |

## Start Containers

Start stopped containers. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Container Names/IDs | String | The names or IDs of the containers to start. Multiple containers separated by new lines. | No |

## Stop Containers

Stop running containers. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Container Name/ID | String | The names or IDs of the containers to start. Multiple containers separated by new lines. | No |

## Unbind IP Address

Unbind the IP address allocated to the specified container. You must be logged in to Cloud Foundry before running this step by either running the Log in to Cloud Foundry step or by manually logging in on the agent computer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Container Name/ID | String | The name or ID of the container from which to unbind the IP address. If not specified, the container that is currently bound to the specified IP address will be unbound. | No |
| IP Address | String | The floating IP address to release from the container cloud service. | Yes |

## Uninstall IBM Containers Plug-in

Uninstall the IBM Containers plug-in.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |

## Update Group

Update specific options for a container group. You can update only one parameter at a time.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Auto Recovery | String | Automatically restart failed container instances. | No |
| Cloud Foundry CLI Path | String | Absolute path to the Cloud Foundry CLI executable file, specified if it is not already on the system path. | No |
| Desired Instances | String | The number of required container instances. This is the number of containers by default. | No |
| Group Name | String | Name to assign to the group. Must start with a letter and can include uppercase letters, lowercase letters, numbers, periods, underscores, or hyphens. | Yes |
| Maximum Instances | String | The maximum number of container instances. | No |
| Minimum Instances | String | The minimum number of container instances. | No |



|Back to ...||Latest Version|IBM Containers ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1103420](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry-ibm-containers/cloud-foundry-containers-6.1103420.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
