
# Jira - Overview

## Overview

The Jira plug-in provides for integration with a Jira server. This plug-in imports Jira issues and saves them as DevOps Velocity issues. Data between the Jira server and the DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running DevOps Velocity version 1.2.1 and later to use the plug-in.

## Upgrade notes

Beginning with DevOps Velocity version 2.4.0 users must enter a user access key is required to connect with the DevOps Velocity server. If you are upgrading from a previous version, you must obtain and add the key to the DevOps Velocity configuration property. If the user access key is not added, the integration fails. A proper JQL query must be provided while integration.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-jira/tags).

### History

### Version 2.3.20

* **Bug Fix**: Active Sprint Field Mapping in JIRA Cloud. 

### Version 2.3.17

* **Bug Fix**: Plugin now supports proxy server enabled Jira integration, the configuration page is enhanced to capture proxy server details to enable this functionality.

### Version 2.3.14

* **Improved ReSync functionality**: In this version plug-in uses updated ServiceNow API, changes prevent the duplication of issues or records in DevOps Velocity, making the resync process more efficient and reducing the time required for synchronization. 

### Version 2.3.12

* Added request timeout option

### Version 2.3.10

* **Bug fix**: First automation task was failing and also updated integration configuration property description. 

### Version 2.3.9

* Fixed version-check bug in jira plugin
* Resync functionality improved 

### Version 2.3.6
* **Bug fix**: Previous version was unable to handle too many requests for API call. It was throwing 429 error. 

#### Version 2.3.1

* **Personal Access Token Support**: The Jira Plugin was unable to use Personal Access Tokens for authentication in previous versions for Jira Server. However, a new field called Personal Access Token has been introduced to enable authentication using this feature.

#### Version 2.2.9

* **Minor Bug Fix**: Previous version of plugin was failing with ECONNREFUSED error

#### Version 2.2.8

* **Deployment plan task added for release process**: Deployment plan task created in order to release selected version in the task

#### Version 2.2.7

* **Previous Version Bug Fix**: Previous versions of the plugin had a bug due to which plugin was giving 401 error.
* **Added Category**: Application lifecycle management (ALM) is the category of Jira plugin.

#### Version 2.2.5

* Added Project keys

#### Version 2.2.1

* Added JQL Query.
* Removed Project Keys.
* Removed Initial Sync Date.

#### Version 1.1.89

* Labels updated.
* Debug logs added.

* Reintroduce base path.
* Initial Sync Data added.
* Payload size more than 10MB data issue resolved.

#### Version 1.0.80

* Minor enhancements.

#### Version 1.0.74

* Minor enhancements.

#### Version 1.0.65

* Minor enhancements.

#### Version 1.0.64

* ReSync support added. Applies to DevOps Velocity version 2.4.4 or later.
* Auto-generated User Access Key support added. Applies to DevOps Velocity version 2.4.0 or later.

#### Version 1.0.51

* Minor enhancements.

#### Version 1.0.50

* Jira rate limit issue fix.

#### Version 1.0.49

* Minor bug fix.

#### Version 1.0.39

* Minor bug fix.

#### Version 1.0.38

* Minor bug fix.

#### Version 1.0.36

* Added HTTP proxy support.

#### Version 1.0.27

* Update plugin version from 0.x.x to 1.x.x format.

#### Version 0.0.17

* Initial release

|Back to ...||Latest Version|Jira |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.3.20-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira/ucv-ext-jira%3A2.3.20.tar.7z.001)[and 2.3.20-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira/ucv-ext-jira%3A2.3.20.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
