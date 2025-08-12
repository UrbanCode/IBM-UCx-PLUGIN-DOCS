
# Docker - Overview

The Docker plug-in includes steps that map Docker images to components in IBM DevOps Deploy.

To add the Docker plug-in steps to processes, click **Cloud > Docker** in the step palette of the process editor.

## Prerequisites

The Docker automation plug-in requires the [Docker source-configuration plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DockerSourceConfig/).

## Compatibility

The IBM DevOps Deploy automation plug-in for Docker works with Docker Version 1.0 and later.

This plug-in requires IBM DevOps Deploy version 6.1.1 or later.

This plug-in supports agents on any operating system that is supported by IBM DevOps Deploy. This plug-in also supports agents on Linux OS on z Systems.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Versions

#### Version 11

* Log4j and Jettison dependency updated .

#### Version 10

* The Promote Image step assumes a Docker Hub destination registry by default.
* The Promote Image steps Destination Image Tag property has been renamed to Destination Image and can now accept a new image and tag.

#### Version 9

* Added new Deploy Stack step.
* Added new Remove Stack step.
* Added new Initialize Swarm step.
* Added new Join Swarm step.
* Added new Leave Swarm step.
* Added new Manage Swarm Join Tokens step.
* Added new Create Service step.
* Added new Remove Service step.
* Added new Scale Service step.
* Added new Update Service step.
* Added new Create Secret step.
* Added new Remove Secret step.
* Added new Create Config step.
* Added new Remove Config step.

#### Version 8

* Added new Promote Image step.

#### Version 7.922009

* AWS EC Login Support. Must specify the hidden AWS Command Line Property to utilize.
* New Docker Logout step.

#### Version 6

* Added new Image Registry Resource Role.
* Added new plugin step Create Image Registry Resource.

#### Version 5.867423

This version of the plug-in includes the following features:

* Support property file encryption.
* Added Gather Version step to Docker Template.

#### Version 4

This version of the plug-in includes the following updates to the Docker Login step:

* The Password is now a secure box.
* The Email is no longer required.

#### Version 3.780462

This version of the plug-in includes the following features:

* A fix for an issue that is related to the Docker Login step.
* The ability to set Docker environment variables.

|Back to ...||Latest Version|Docker |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[11.1154926](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-plugin/ucd-docker-plugin-11.1154926.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
