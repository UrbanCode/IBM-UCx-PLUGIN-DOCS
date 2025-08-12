
Docker Build - Steps
====================

# Steps


### Steps




### Job steps in the Docker plug-in

* [Docker Build](#docker_build)
* [Docker Push](#docker_build)


### Docker Build

Build a Docker image from a Dockerfile and set the image id as a build life property.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Image Property | String | The name of the build life property to set the image id as. | No |
| DOCKER\_HOST | String | Optionally use a different Docker host value than the default. e.g. tcp://host:port | No |
| Tag | String | The name to tag the image with if the build is successful. | No |
| Build Flags | String | Additional flags to pass to Docker build. e.g. no-cache=true -q rm=true | No |

### Docker Push

Publish a Docker image to a registry.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| DOCKER\_HOST | String | Optionally use a different Docker host value than the default. e.g. tcp://host:port | No |
| Image Name | String | The name of the image to push to the registry. e.g. username/ubuntu or localhost.localdomain:5000/ubuntu | Yes |
| Username | String | The username used to log in to the registry | Yes |
| Password | String | The password used to log in to the registry | Yes |
| Email | String | The email address used to log in to the registry | Yes |
| Server | String | The registry server. e.g. localhost:5000. If no server is specified, https://index.docker.io/v1 is the default. | No |



|Back to ...||Latest Version|Docker Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[6.1036529](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Docker/docker-plugin-6.1036529.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
