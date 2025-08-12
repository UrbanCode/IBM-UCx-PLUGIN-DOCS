
# Docker - Proces Steps

## Steps

- [Docker - Proces Steps](#docker---proces-steps)
  - [Steps](#steps)
    - [Create Config](#create-config)
    - [Create Image Registry Resource](#create-image-registry-resource)
    - [Create Secret](#create-secret)
    - [Create Service](#create-service)
    - [Deploy Stack](#deploy-stack)
    - [Docker Login](#docker-login)
    - [Docker Logout](#docker-logout)
    - [Initialize Swarm](#initialize-swarm)
    - [Join Swarm](#join-swarm)
    - [Leave Swarm](#leave-swarm)
    - [Manage Swarm Join Tokens](#manage-swarm-join-tokens)
    - [Promote Image](#promote-image)
    - [Pull Docker Image](#pull-docker-image)
    - [Push Docker Image](#push-docker-image)
    - [Remove Config](#remove-config)
    - [Remove Docker Container](#remove-docker-container)
    - [Remove Secret](#remove-secret)
    - [Remove Service](#remove-service)
    - [Remove Stack](#remove-stack)
    - [Run Docker Container](#run-docker-container)
    - [Scale Service](#scale-service)
    - [Start Docker Container](#start-docker-container)
    - [Stop Docker Container](#stop-docker-container)
    - [Tag Docker Image](#tag-docker-image)
    - [Update Service](#update-service)
  - [Roles in the Docker plug-in](#roles-in-the-docker-plug-in)
    - [ImageRegistry Role](#imageregistry-role)

### Create Config

Create a configuration file from a file as content.ID of the new config will be stored in the output property configID.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Config | String | Name of the new configuration | Yes |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Config Create Options | String | Options for the Docker config create command. For example: label name=value | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| File | String | Path to file holding contents of config | Yes |

### Create Image Registry Resource

Create an image registry resource in the Resource Tree.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Command Line File | String | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | No |
| AWS Region | String | When type is Amazon ECR. Amazon ECR Region. | No |
| Allow Insecure Connections | String | Set this property to true to allow insecure registry connections. | No |
| CF\_HOME | String | When type is IBM Containers. The CF\_HOME environment variable specifies the location of config.json for authentication. | No |
| Email Address | String | The image registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | No |
| ICS API | String | The api to use when logging in to IBM Cloud | No |
| ICS Organization | String | The IBM Cloud organization to use when logging in to IBM Cloud | No |
| ICS Space | String | The IBM Cloud space to use when logging in to IBM Cloud | No |
| ICS apikey | Password | The IBM Cloud apikey to use when logging in to IBM Cloud | No |
| Image Registry Host | String | The image registry server. | Yes |
| Image Registry Type | Enumeration: | Specify which API to connect with the Image Registry. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| | * docker | | |
| | * ibm-containers | | |
| | * artifactory | | |
| | * amazon-ecr | | |
| Parent Resource | String | The parent resource under which the image registry resource will be created. | Yes |
| Password | Password | The image registry password. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| User Name | String | The image registry user name.When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |

### Create Secret

Create a secret from a file.ID of the new secret will be stored in the output property secretID.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Secret Create Options | String | Options for the Docker secret create command. For example: label name=value | No |
| File | String | Path to file holding contents of secret. | Yes |
| Secret | String | Name of the new secret. | Yes |

### Create Service

Create a new service. ID of the new service will be stored in the output property serviceID.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command | String | Command and args to execute in the container. | No |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Service Create Options | String | Options for the Docker service create command. For example: name serviceName | No |
| Image | String | Image the service will run. | Yes |

### Deploy Stack

Deploy a new stack or update an existing stack.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Bundle File | String | Path to a bundle file. Either Bundle File or Compose File must be specified. | No |
| Compose File | String | Path to a Compose file. Either Compose File or Bundle File must be specified. | No |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Stack Deploy Options | String | Options for the Docker stack deploy command. For example: with-registry-auth | No |
| Stack Name | String | The name of the stack to deploy | Yes |

### Docker Login

Log in to a Docker registry.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Registry | String | The Docker registry server. Leave blank to use the default, <https://index.docker.io/v1/>. | No |
| Email Address | String | The Docker registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | No |
| Password | Password | The Docker registry password. | Yes |
| User Name | String | The Docker registry user name. | Yes |

### Docker Logout

Logout of a Docker registry.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Registry | String | The Docker registry server. Leave blank to use the default, <https://index.docker.io/v1/>. | No |

### Initialize Swarm

Initialize a swarm. Output properties will contain the manager/worker tokens and the address:port of the new swarm manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Swarm Init Options | String | Options for the Docker swarm init command. For example: advertise-addr | No |

### Join Swarm

Join a swarm as a node and/or manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Swarm Join Options | String | Options for the Docker swarm join command. For example: advertise-addr | No |
| Manager Host Address | String | The host:port of an existing swarm manager node. | Yes |
| Swarm Join Token | String | Token for entry into the swarm. | Yes |

### Leave Swarm

Leave the swarm.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Swarm Leave Options | String | Options for the Docker swarm leave command. For example: force | No |

### Manage Swarm Join Tokens

Manage join tokens. Output properties will contain the requested token and optionally the advertise address for the swarm.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Swarm Join-Token Options | String | Options for the Docker swarm join-token command. For example: rotate | No |
| Docker Swarm Join-Token Type | Enumeration: | The type of swarm token to manage, worker or manager | Yes |
| | * worker | | |
| | * manager | | |

### Promote Image

Promote an image from a source registry to a destination registry.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination AWS Command Line Interface | String | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | No |
| Destination AWS Region | String | When type is Amazon ECR. Region to use when logging into AWS. | No |
| Destination Allow Insecure Connections | String | Set this property to true to allow insecure registry connections to the destination regsitry. | No |
| Destination CF\_HOME | String | When type is IBM Containers. The CF\_HOME environment variable specifies the location of config.json for authentication. | No |
| Destination Email Address | String | The destination registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | No |
| Destination ICS API | String | The api to use when logging in to IBM Container Service on IBM Cloud | No |
| Destination ICS Organization | String | The IBM Cloud organization to use when logging in to IBM Container Service on IBM Cloud | No |
| Destination ICS Space | String | The IBM Cloud space to use when logging in to IBM Container Service on IBM Cloud | No |
| Destination ICS apikey | Password | The IBM Cloud apikey to use when logging in to IBM Container Service on IBM Cloud | No |
| Destination Image Registry Type | Enumeration: | Specify which API to connect with the Destination Image Registry. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| | * docker  | | |
| | * ibm-containers | | |
| | * artifactory | | |
| | * amazon-ecr | | |
| Destination Image Tag | String | The tag to apply to the image in the destination registry.If not specified, the tag given in the Image field will be used. | No |
| Destination Password | Password | The destination registry password. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Destination Registry | String | The Docker registry server the image will be promoted to. Leave blank to use the default, <https://index.docker.io/v1/>. | Yes |
| Destination User Name | String | The destination registry user name. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Image | String | The source image to be promoted to the destination registry. For example: mysql:5.5 | Yes |

### Pull Docker Image

Retrieve an image from a Docker registry.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Image | String | The name of the image to pull. For example: mysql:5.5 | Yes |
| Pull Options | String | Options for the pull command. For example: all-tags=false disable-content-trust=true | No |

### Push Docker Image

Upload an image to a Docker registry.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Image | String | The name of the image to push. For example: mysql:5.5 | Yes |
| Push Options | String | Options for the push command. For example: disable-content-trust=true help=false | No |

### Remove Config

Remove one or more configuration files.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Config Name | String | Name or ID of the docker configuration file(s) to remove. If multiple configuration files are specified, separate them with spaces. | Yes |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |

### Remove Docker Container

Remove a Docker container.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Container | String | The name or ID of the container to remove. | Yes |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Remove Options | String | Options for the Docker rm command. For example: link -f | No |

### Remove Secret

Remove one or more secrets.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Secret Name | String | Name or ID of the docker secret(s) to remove. If multiple secrets are specified, separate them with spaces. | Yes |

### Remove Service

Remove one or more services.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Service Name | String | Name or ID of the docker service(s) to remove. If multiple services are specified, separate them with spaces. | Yes |

### Remove Stack

Remove the specified stack.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Stack Name | String | The name of the stack to remove | Yes |

### Run Docker Container

Create a Docker container and run a command in the container.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command | String | The command and arguments to run inside the new container. | No |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Image | String | The image to create the container from. | Yes |
| Run Options | String | Options for the Docker run command. For example: publish-all restart=no | No |

### Scale Service

Scale one or multiple replicated services.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Service Name | String | One or more ServiceName=ReplicaCount values. If multiple services are specified, separate them with spaces. No spaces around the equal sign. | Yes |

### Start Docker Container

Start a Docker container.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Container | String | The name or ID of the container to start. | Yes |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Start Options | String | Options for the Docker start command. For example: attach=false | No |

### Stop Docker Container

Stop a Docker container.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Container | String | The name or ID of the container to stop. | Yes |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Stop Options | String | Options for the Docker stop command. For example: time=30 | No |

### Tag Docker Image

Tag an image into a repository.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Image | String | The name of the image to tag. For example: ubuntu:latest | Yes |
| Tag | String | This will give a new alias to an image in the repository. Use the form: [REGISTRYHOST/][USERNAME/]NAME[:TAG]. For example: hub.urbancode.com/node:0.10 | Yes |
| Tag Options | String | Options for the Docker tag command. docker tag Options source destination | No |

### Update Service

Update a service.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Docker Client Variables | String | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER\_HOST=tcp://192.0.2.100:2376 | No |
| Docker Options | String | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 log-level=info | No |
| Docker Service Update Options | String | Options for the Docker service update command. For example: image string | No |
| Service Name | String | The service to update. | Yes |

## Roles in the Docker plug-in

- [ImageRegistry](#imageregistry-role)

### ImageRegistry Role

Role for resources that represents a Container Image Registry.

| Name | Type | Description |
| --- | --- | --- |
| AWS Command Line File | String | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. |
| AWS Region | String | When type is Amazon ECR. Amazon ECR Region. |
| Allow Insecure Connections | String | Set this property to true to allow insecure registry connections. |
| CF\_HOME | String | When type is IBM Containers. The CF\_HOME environment variable specifies the location of config.json for authentication. |
| Email | String | Email address associated with User Name. |
| ICS API | String | When type is IBM Containers. The api to use when logging in to IBM Cloud Container Registry. |
| ICS Organization | String | When type is IBM Containers. The IBM Cloud organization to login to. |
| ICS Space | String | When type is IBM Containers. The IBM Cloud space to login to. |
| ICS apikey | Password | When type is IBM Containers. The IBM Cloud apikey to login with. |
| Image Registry Host | String | The Docker image registry server. |
| Password | Password | Password used to access the image registery. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |
| Registry Type | Enumeration: | Specify which API to connect with the Image Registry. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |
| User Name | String | User name used to access the image registery. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |

|Back to ...||Latest Version|Docker |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[11.1154926](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-plugin/ucd-docker-plugin-11.1154926.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
