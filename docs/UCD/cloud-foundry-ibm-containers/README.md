
# IBM Containers

The IBM Containers plug-in uses the Cloud Foundry IBM® Containers command-line utility (cf ic) to interact with containers running in IBM Bluemix®.


## Available Steps


Install IBM Containers PluginInstall the IBM containers plugin to run native docker commands from within the Cloud Foundry CLI

Uninstall IBM Containers PluginUninstall the IBM containers plugin.

Login to Cloud FoundryLogin to the Cloud Foundry instance in order to use the CF Containers CLI.

Logout of Cloud FoundryLogout of the Cloud Foundry instance.

Set NamespaceSet the namespace for the targeted organization.

Initialize PluginRefresh the bearer token for authentication and reinitialize the CLI. Will also set the output properties ‘cfic.dockerHost’ and ‘cfic.dockerCertPath’. Use these to set the ‘–host’ and ‘–tlscert’ with the docker CLI. This will allows use of the Docker CLI directly for the current session to run supported Docker commands.

Build Image from DockerfileBuild a Docker image locally or in the private Bluemix repository using a Dockerfile.

Run ContainerStart a new container from an image name or id.

Request IP AddressRequest a new floating IP address that can be used within your container cloud service instance.

Release IP AddressRelease an IP address from the container cloud service instance.

Bind IP AddressBind a floating IP address to a running container.

Unbind IP AddressUnbind the IP address allocated to the specified container.

Execute Command on ContainerExecute a command on a running container.

Start ContainersStart stopped containers.

Stop ContainersStop running containers.

Create GroupCreate a container group for scaling containers.

Remove GroupRemove a container group from the Bluemix repository.

Update GroupUpdate specific option for a container group. You may only update one parameter at a time.


