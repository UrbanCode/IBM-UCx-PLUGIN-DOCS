# Docker - Process Steps

## Run Docker Container

Create a Docker container and run a command in the container.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | The image to create the container from. | Yes |
| Command | textBox | The command and arguments to run inside the new container. | Yes |
| Container Name | textBox | The name to assign to the container. If no name is specified, an ID is assigned automatically. Use the containerId output property to reference the new container. | Yes |
| Run Options | textAreaBox | Options for the Docker run command. For example: --publish-all --restart=no | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Pull Docker Image

Retrieve an image from a Docker registry.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | The name of the image to pull. For example: mysql:5.5 | Yes |
| Pull Options | textBox | Options for the pull command. For example: --all-tags=false --disable-content-trust=true | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Push Docker Image

Upload an image to a Docker registry.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | The name of the image to push. For example: mysql:5.5 | Yes |
| Push Options | textBox | Options for the push command. For example: --disable-content-trust=true --help=false | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Tag Docker Image

Tag an image into a repository.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | The name of the image to tag. For example: ubuntu:latest | Yes |
| Tag | textBox | This will give a new alias to an image in the repository. Use the form: [REGISTRYHOST/][USERNAME/]NAME[:TAG]. For example: hub.urbancode.com/node:0.10 | Yes |
| Tag Options | textBox | Options for the Docker tag command. docker tag Options source destination | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Docker Login

Log in to a Docker registry.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Registry | textBox | The Docker registry server. Leave blank to use the default, `https://index.docker.io/v1/.` | Yes |
| User Name | textBox | The Docker registry user name. | Yes |
| Password | secureBox | The Docker registry password. | Yes |
| Email Address | textBox | The Docker registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |
| AWS Command Line Interface | textBox | Command or path to the AWS command line interface. If specified, AWS authentication will be used.                            Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | Yes |
| AWS Region | textBox | Region to use when logging in to AWS. | Yes |

## Stop Docker Container

Stop a Docker container.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Container | textBox | The name or ID of the container to stop. | Yes |
| Stop Options | textBox | Options for the Docker stop command. For example: --time=30 | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Start Docker Container

Start a Docker container.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Container | textBox | The name or ID of the container to start. | Yes |
| Start Options | textBox | Options for the Docker start command. For example: --attach=false | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Remove Docker Container

Remove a Docker container.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Container | textBox | The name or ID of the container to remove. | Yes |
| Docker Remove Options | textBox | Options for the Docker rm command. For example: --link -f | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Docker Logout

Logout of a Docker registry.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Registry | textBox | The Docker registry server. Leave blank to use the default, `https://index.docker.io/v1/.` | Yes |

## Create Image Registry Resource

Create an image registry resource in the Resource Tree.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Parent Resource | textBox | The parent resource under which the image registry resource will be created. | Yes |
| Image Registry Host | textBox | The image registry server. | Yes |
| User Name | textBox | The image registry user name.  When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Password | secureBox | The image registry password. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Email Address | textBox | The image registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | Yes |
| Allow Insecure Connections | textBox | Set this property to "true" to allow insecure registry connections. | Yes |
| Image Registry Type | selectBox | Specify which API to connect with the Image Registry. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| ICS API | textBox | The api to use when logging in to Bluemix | Yes |
| ICS Space | textBox | The Bluemix space to use when logging in to Bluemix | Yes |
| ICS Organization | textBox | The Bluemix organization to use when logging in to Bluemix | Yes |
| ICS apikey | secureBox | The Bluemix apikey to use when logging in to Bluemix | Yes |
| CF_HOME | textBox | When type is IBM Containers. The CF_HOME environment variable specifies the location of config.json for authentication. | Yes |
| AWS Region | textBox | When type is Amazon ECR. Amazon ECR Region. | Yes |
| AWS Command Line File | textBox | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.  Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | Yes |

## Promote Image

Promote an image from a source registry to a destination registry.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | The source image to be promoted to the destination registry. For example: ucds:6.1 | Yes |
| Destination Image | textBox | The tag or [image:]tag to apply to the image in the destination registry. New destination image and tag names should follow the syntax: [image:]tag. For example: ibmcom/ucds:6.2 or 6.2. If not specified, the value given in the Image field will be used as the new destination image name. | Yes |
| Destination Registry | textBox | The Docker registry server the image will be promoted to. Leave blank to use Docker Hub. | Yes |
| Destination User Name | textBox | The destination registry user name. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Destination Password | secureBox | The destination registry password. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Destination Email Address | textBox | The destination registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | Yes |
| Destination Allow Insecure Connections | textBox | Set this property to "true" to allow insecure registry connections to the destination regsitry. | Yes |
| Destination Image Registry Type | selectBox | Specify which API to connect with the Destination Image Registry. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Destination ICS API | textBox | The api to use when logging in to IBM Container Service on Bluemix | Yes |
| Destination ICS Space | textBox | The Bluemix space to use when logging in to IBM Container Service on Bluemix | Yes |
| Destination ICS Organization | textBox | The Bluemix organization to use when logging in to IBM Container Service on Bluemix | Yes |
| Destination ICS apikey | secureBox | The Bluemix apikey to use when logging in to IBM Container Service on Bluemix | Yes |
| Destination CF_HOME | textBox | When type is IBM Containers. The CF_HOME environment variable specifies the location of config.json for authentication. | Yes |
| Destination AWS Region | textBox | When type is Amazon ECR. Region to use when logging into AWS. | Yes |
| Destination AWS Command Line Interface | textBox | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.  Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |
| Source Registry | textBox | The Docker registry server the image will be promoted from. Leave blank to use the default, `https://index.docker.io/v1/.` | Yes |
| Source User Name | textBox | The source registry user name. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Source Password | secureBox | The source registry password. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Source Email Address | textBox | The source registry email address. This field may be required if the Docker client attempts to prompt for the email interactively. | Yes |
| Source Allow Insecure Connections | textBox | Set this property to "true" to allow insecure registry connections to the source regsitry. | Yes |
| Source Image Registry Type | selectBox | Specify which API to connect with the Source Image Registry. When using IBM Containers, provide Bluemix Credentials. For Amazon ECR, use AWS access key as username and secret key as password. | Yes |
| Destination ICS API | textBox | The api to use when logging in to IBM Container Service on Bluemix | Yes |
| Source ICS Space | textBox | The Bluemix space to use when logging in to IBM Container Service on Bluemix | Yes |
| Source ICS Organization | textBox | The Bluemix organization to use when logging in to IBM Container Service on Bluemix | Yes |
| Source ICS apikey | secureBox | The Bluemix apikey to use when logging in to IBM Container Service on Bluemix | Yes |
| Source CF_HOME | textBox | When type is IBM Containers. The CF_HOME environment variable specifies the location of config.json for authentication. | Yes |
| Source AWS Region | textBox | When type is Amazon ECR. Region to use when logging into AWS. | Yes |
| Source AWS Command Line Interface | textBox | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.  Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. | Yes |

## Remove Stack

Remove the specified stack.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Stack Name | textBox | The name of the stack to remove | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Deploy Stack

Deploy a new stack or update an existing stack.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Stack Name | textBox | The name of the stack to deploy | Yes |
| Compose File | textBox | Path to a Compose file. Either Compose File or Bundle File must be specified. | Yes |
| Bundle File | textBox | Path to a bundle file. Either Bundle File or Compose File must be specified. | Yes |
| Docker Stack Deploy Options | textBox | Options for the Docker stack deploy command. For example: --with-registry-auth | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Initialize Swarm

Initialize a swarm. Output properties will contain the manager/worker tokens and the address:port of the new swarm manager.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Swarm Init Options | textBox | Options for the Docker swarm init command. For example: --advertise-addr | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Join Swarm

Join a swarm as a node and/or manager.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Manager Host Address | textBox | The host:port of an existing swarm manager node. | Yes |
| Swarm Join Token | textBox | Token for entry into the swarm. | Yes |
| Docker Swarm Join Options | textBox | Options for the Docker swarm join command. For example: --advertise-addr | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Manage Swarm Join Tokens

Manage join tokens. Output properties will contain the requested token and optionally the advertise address for the swarm.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Swarm Join-Token Type | selectBox | The type of swarm token to manage, worker or manager | Yes |
| Docker Swarm Join-Token Options | textBox | Options for the Docker swarm join-token command. For example: --rotate | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Leave Swarm

Leave the swarm.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Docker Swarm Leave Options | textBox | Options for the Docker swarm leave command. For example: --force | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Create Service

Create a new service. ID of the new service will be stored in the output property 'serviceID'.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image | textBox | Image the service will run. | Yes |
| Command | textBox | Command and args to execute in the container. | Yes |
| Docker Service Create Options | textBox | Options for the Docker service create command. For example: --name serviceName | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Remove Service

Remove one or more services.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Service Name | textBox | Name or ID of the docker service(s) to remove. If multiple services are specified, separate them with spaces. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Scale Service

Scale one or multiple replicated services.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Service Name | textBox | One or more ServiceName=ReplicaCount values. If multiple services are specified, separate them with spaces. No spaces around the equal sign. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Update Service

Update a service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Service Name | textBox | The service to update. | Yes |
| Docker Service Update Options | textBox | Options for the Docker service update command. For example: --image string | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Create Secret

Create a secret from a file. ID of the new secret will be stored in the output property 'secretID'.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Secret | textBox | Name of the new secret. | Yes |
| File | textBox | Path to file holding contents of secret. | Yes |
| Docker Secret Create Options | textBox | Options for the Docker secret create command. For example: --label name=value | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Remove Secret

Remove one or more secrets.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Secret Name | textBox | Name or ID of the docker secret(s) to remove. If multiple secrets are specified, separate them with spaces. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Create Config

Create a configuration file from a file as content. ID of the new config will be stored in the output property 'configID'.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Config | textBox | Name of the new configuration | Yes |
| File | textBox | Path to file holding contents of config | Yes |
| Docker Config Create Options | textBox | Options for the Docker config create command. For example: --label name=value | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

## Remove Config

Remove one or more configuration files.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Config Name | textBox | Name or ID of the docker configuration file(s) to remove. If multiple configuration files are specified, separate them with spaces. | Yes |
| Docker Options | textBox | Options for the Docker client. For example: -H tcp://127.0.0.1:2375 --log-level=info | Yes |
| Docker Client Variables | textAreaBox | A list, separated by newline characters, of runtime environment variables for the Docker client. For example: DOCKER_HOST=tcp://192.0.2.100:2376 | Yes |

