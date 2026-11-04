
# DevOps Control - Overview

The DevOps Control plug-in provides for integration with a DevOps Control server. This plug-in imports pull requests and commit data from a DevOps Control server and saves them as IBM DevOps Velocity pull requests and commits. Data between the DevOps Control server and the IBM DevOps Velocity server is synchronized every five minutes.

## Compatibility

The table below lists the compatible versions of the DevOps Control plug-in and IBM DevOps Velocity:

| DevOps Velocity Version | DevOps Control Plug-in Versions |
| --- | --- |
| 5.1.9 or later | 1.1.7, 1.1.3, 1.1.1 |

## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-control/tags).

## History

### Version 1.1.7

* **Technical upgrade**: Upgraded the NPM Wrapper package version to support pod multiplexing feature.
* **Vulnerability fix**: Addressed and resolved Whitesource-reported vulnerabilities.

### Version 1.1.3

* **Bug fix**: Fixed data mismatch issue in DevOps Control pull request records.

### Version 1.1.1

* **Enhancement**: Added teamId and teamspaceId to integration properties for data access control support.

### Version 1.0.5

* **Bug fix**: APIs for retrieving PR comments and event timelines have been re-enabled, restoring functionality for the Pull Request schedule event in the Control Plug-in.

### Version 1.0.4

* **Rebranding**: Name of the plugin is changed from Control to DevOps Control.

### Version 1.0.2

* Initial release
