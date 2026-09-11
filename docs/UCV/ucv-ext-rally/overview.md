# Rally - Overview

The Rally plug-in provides for integration with a Rally server. This plug-in imports work items from a Rally server and saves them as DevOps Velocity issues. The plug-in uses the Rally REST API to import data from a Rally server.

Data between the Rally server and the DevOps Velocity server is synchronized every five minutes.

## Compatibility

The table below lists the compatible versions of the Rally plug-in and IBM DevOps Velocity:

| IBM DevOps Velocity Version | Rally plug-in version |
| --- | --- |
| 5.2.5 or later | 1.0.50 |

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode
DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-rally/tags).

## History

### Version 1.0.50

* **Vulnerability fix**: Addressed and resolved Whitesource-reported vulnerabilities.
* **Sonarqube coverage**: Improved test coverage for the GitLab plug-in.
* **Enhancement**: Added support for Team and Teamspace fields in plugin integrations. These fields can now be configured during plugin setup and integration.
* **Technical upgrade**: Upgraded the NPM Wrapper package to the latest supported version.

### Version 1.0.34

* User access key related changes.

### Version 1.0.17

* Added HTTP proxy support

### Version 1.0.16

* improve history data.

### Version 1.0.11

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.3

* Update to api-client 1.0.11 and user access key authentication.
* Fix problem when history is empty.

### Version 0.0.2

* Fix problem with Jenkins job failing.

### Version 0.0.1

* Initial release
