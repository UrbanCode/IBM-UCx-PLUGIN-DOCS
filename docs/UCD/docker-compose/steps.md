
# Docker Compose - Process Steps

* [Create Child Resources](#create_child_resources)
* [Launch Docker Compose Application](#launch_docker_compose_application)
* [Run Docker Compose](#run_docker_compose)
* [Scale Docker Compose Application](#scale_docker_compose_application)


### Create Child Resources

Create child resources of the component from Compose application resources. Dynamically generate an overrides file for docker-compose.yml based on the selected component versions at deployment.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Template | String | The template to use when creating components from Compose application resources. You can use component templates to store different sets of registry credentials. | No |
| Compose Files | String | A list of paths to Compose YAML files, separated by newline characters. The default Compose file is docker-compose.yml. | No |

### Launch Docker Compose Application

Start all of the application services that are defined in a Compose file. Invoke docker-compose up for compose file version less than or equal 2, and docker stack deploy when version is 3+.This specialized step is expected to be follow the Create Resource Tree step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Options | String | Specify additional command-line options for the docker-compose up command. | No |
| Compose Files | String | A list of paths to Compose YAML files, separated by newline characters. The default Compose file is docker-compose.yml. | No |
| Do Not Delete Script | Boolean | Select to save the plugins generated executable script to analyze and run manually later. | No |
| Environment Script Paths | String | Specify the paths to shell scripts to run before the Docker Compose command runs. Typically, this property is used to run a Docker environment script. This property is utilized only on \*nix machines. | No |
| Project Name | String | Specify an alternate project name. By default, the project name is the directory name. | No |
| Stack Name | String | Name to give to the stack when compose file version is 3+. | No |
| docker-compose Command Path | String | Full path to the docker-compose executable, or command name (docker-compose) if it is on the $PATH environment variable. Default value is docker-compose. | No |

### Run Docker Compose

Run any docker-compose command through this generalized step. It is highly suggested to use a commands specific step if available.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Options and Services | String | List of command specific options and services. Input will be placed directly onto the command line. | No |
| Compose Command | Enumeration:
* build
* bundle
* config
* create
* down
* events
* exec
* help
* kill
* logs
* pause
* port
* ps
* pull
* push
* restart
* rm
* run
* scale
* start
* stop
* unpause
* up
| Select the docker-compose command to run. | Yes |
| Compose Files | String | A list of paths to Compose YAML files, separated by newline characters. The default Compose file is docker-compose.yml. | No |
| Compose Options | String | Specify additional command-line options for the general docker-compose command. | No |
| Do Not Delete Script | Boolean | Select to save the plugins generated executable script to analyze and run manually later. | No |
| Environment Script Paths | String | Specify the paths to shell scripts to run before the Docker Compose command runs. Typically, this property is used to run a Docker environment script. This property is utilized only on \*nix machines. | No |
| Project Name | String | Specify an alternate project name. By default, the project name is the directory name. | No |
| docker-compose Command Path | String | Full path to the docker-compose executable, or command name (docker-compose) if it is on the $PATH environment variable. Default value is docker-compose. | No |

### Scale Docker Compose Application

Scale a service by assigning a number of available containers.(docker-compose scale)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Options | String | Specify additional command-line options for the docker-compose Scale command. | No |
| Compose Files | String | A list of paths to Compose YAML files, separated by newline characters. The default Compose file is docker-compose.yml. | No |
| Do Not Delete Script | Boolean | Select to save the plugins generated executable script to analyze and run manually later. | No |
| Environment Script Paths | String | Specify the paths to shell scripts to run before the Docker Compose command runs. Typically, this property is used to run a Docker environment script. This property is utilized only on \*nix machines. | No |
| Project Name | String | Specify an alternate project name. By default, the project name is the directory name. | No |
| Service and Container Pairs | String | List of services and number of container pairs delimited by newlines or commas. Each pair is separated by an equals (=) sign. For example: service=num | Yes |
| Timeout | String | Specify in seconds a shutdown timeout. Default is 10 seconds. | No |
| docker-compose Command Path | String | Full path to the docker-compose executable, or command name (docker-compose) if it is on the $PATH environment variable. Default value is docker-compose. | No |



|Back to ...||Latest Version|Docker Compose |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1174442](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-compose/ucd-docker-compose-24.1174442.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
