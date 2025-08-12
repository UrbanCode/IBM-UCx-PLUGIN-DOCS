
# IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy - Overview

The IBM Business Process Manager plug-in includes steps that take the following actions on Business Process Manager cells:

* Deploy process application snapshots to an online (connected) Process Server.
* Deploy process application snapshots to an offline (disconnected) Process Server.
* Import and Export process applications to and from a Process Center.

Process service modules that are EAR files can also be deployed to a Process Server by using the WebSphere Application ServerDeployment plug-in for IBM DevOps Deploy.

This plug-in provides the following steps that automate deployment of process applications:

* Deploy process application snapshot.
* Generate offline package.
* Deploy offline package.
* Export a process application from a Process Center and import it into another Process Center.

The following steps are an overview of the typical process to follow:

1. Create resources. For the deployment of process application snapshots to an online or offline process server, you must populate resources manually. You can view the resources that you create in the Resources view. Each resource corresponds either to the Process Center or to an offline Process Server.
2. Define properties for the resources that you created manually.
3. Define components, applications, and environments to automate deployment.
4. Deploy.

## Compatibility

This plug-in requires version 6.0.1 of IBM DevOps Deploy.

The IBM DevOps Deploy plug-in for WebSphere Business Process Manager supports Business Process Manager versions 8.5 and later. Standard and Advanced editions are supported.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 13

Fixes APAR PH08137: Exception WASX8009E Invalid Parameter with BPM Deploy Process Application Snapshot step with spaces in Process Server Name

### Version 12

Warn the user when either conflicting credential properties or no credential properties are set. General refactoring.

### Version 11

* Updated all descriptions to specify whether the step connects to a Process Server or Process Center server.
* All step descriptions have the BPM command they are utilizing. If you are having trouble, we recommend referencing the WebSphere BPM documentation for CLI specific help. Many questions can be answered by following WebSphere BPMs official CLI documentation.
* Most steps will connect to and run against the Process Center server. However, we recommend that there is at least one agent is installed on every Process Server and Process Center server. By running against the agent located on the correct server, this will eliminate the need to specify each steps Host property. This is achievable through proper DevOps Deploy environment and resource management.
* The Update Installation Information steps Process application track property is now optional for Process Center servers. It is still required for Process Servers.

### Version 10

All step descriptions now include their wsadmin scriptings commands.

### Version 9

Fixes APAR PI78360Updated acronym parsing and identification.

### Version 8

Support encrypted properties.

### Version 7

Added timeout to Generate Offline Package to prevent BPM command line race conditions. The Track, Container, and Snapshot acronym finder will return the entered value if not found.

### Version 6

Version 6 adds a verbose mode to display additional troubleshooting output. Updated finder for identifying the track, snapshot, or container acronym from its full name.

### Version 5

Version 5 adds functionality for the following BPM functions:

* BPMDeactivate
* BPMExportInstallPackage
* BPMExtractMigrationPolicy
* BPMInstallPackage
* BPMMigrateInstances
* BPMSetDefaultSnapshot
* BPMStop
* BPMSyncEnvironmentVariables
* BPMSyncEPVValues
* BPMSyncTeamBindings
* BPMUpdateInstallationInformation

Minor fixes to Deploy Offline Package and Deploy Process Application Snapshot steps.

### Version 4

Version 4 adds functionality to pass the host name to the wsadmin script for all process steps.


|Back to ...||Latest Version|IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1100894](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereBPM/WebSphereBPM-13.1100894.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
