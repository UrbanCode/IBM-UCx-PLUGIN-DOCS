
# DevOps Control - Overview

The DevOps Control plug-in provides for integration with a DevOps Control server. This plug-in imports pull requests and commit data from a DevOps Control server and saves them as IBM DevOps Velocity pull requests and commits. Data between the DevOps Control server and the IBM DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running IBM DevOps Velocity version 5.0.0 and later to use the plug-in.

## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-control/tags).

## History

### Version 1.0.5

* **Bug fix**: APIs for retrieving PR comments and event timelines have been re-enabled, restoring functionality for the Pull Request schedule event in the Control Plug-in.

### Version 1.0.4

* **Rebranding**: Name of the plugin is changed from Control to DevOps Control.

### Version 1.0.2

* Initial release
