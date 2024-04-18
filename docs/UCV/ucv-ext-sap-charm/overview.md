
# SAP ChaRM - Overview

- Plug-in sync SAP Normal Changes in SAP’s Change Request Management with Jira issues
- Fetch all Jira issues using the provided JQL Query, for each Jira issue plug-in checks whether Charm ID is already there or not. If not, it creates a Charm ID for each issue 
- In user input, user specifies Custom field name in Jira where they have stored Transport ID 
- If Transport ID is not there, then in SAP status changes to “In Development” using the Charm ID
- Jira status and DevOps Velocity’s VSM status changes as the SAP Charm ID’s status changes 
- Charm ID and Transport ID will be shown as “labels” in DevOps Velocity
- Plug-in will sync in every 5 min


## Compatibility

This plug-in requires DevOps Velocity version 3.0.0 or later.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode
DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-sap-charm/tags).

## History

### Version 4.3.1

* Minor plugin enhancements

### Version 4.2.9

* Minor Accelerate Description Enhancements

### Version 4.2.8

* Workflow modified
* Automated features added
* Multiple Transport ID enhancement

### Version 2.2.1

- Manage multiple Transport IDs
- Jira UI improvements

### Version 1.2.1

- Added multiple Transport ID creation
- Other fixes

### Version 1.1.1

- Added ATC checks and details

### Version 1.0.3

- Minor Improvements

### Version 1.0.2

- Initial release syncs SAP Normal changes with Jira issues

### Version 1.0.1

- Initial release syncs SAP Normal changes with Jira issues

|Back to ...||Latest Version|SAP ChaRM ||
| :---: | :---: | :---: | :---: | :---: | 
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-sap-charm/ucv-ext-sap-charm%3A1.0.1.tar.7z.001)|[Readme](README.md)|[Downloads](downloads.md)|
