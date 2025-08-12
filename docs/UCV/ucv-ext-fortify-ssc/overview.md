
# Fortify SSC - Overview

Fortify Software security center (SSC) enables teams with the application security program automation capabilities. It enables to manage, develop, and provide security for the software protection activities.

## Compatibility

Must be running DevOps Velocity version 2.0.0 and later to use the plug-in.

## Versions
DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-fortify-ssc/tags).


## History

### Version 1.0.19

* Added WorkflowId: Under the hidden properties section of add integration page for the plugin a Workflow ID field is added. This field is optional and can be used to provide WorkflowId - the ID of a Value Stream (VSM )to which the vulnerability data is associated.

### Version 1.0.18

* Resolved Incorrect Count Issue: The count of Critical, High, Low, and Medium level issues in Application Vulnerabilities chart was incorrect in previous version of plugin.

* Changed Record Name: Previously record name in Application Vulnerabilities chart was equivalent to Application Name + Application version. Now the Application Name part has been removed from record name.

### Version 1.0.16

* Project Names Field Added: The Fortify SSC Plugin was syncing all project data. Added a field to provide a comma separated list of project names to sync data from. Due to a massive no. of projects, plugin was crashing.

* Removed Manual User Access Key: From current version onwards this plugin will only support Auto Generated User Access Key feature of DevOps Velocity.

* Initial Sync Date Field Added: Under the hidden properties section of add integration page for Fortify SSC plugin an Initial Sync Date field is added. This field is optional and can be used only for first sync.

### Version 1.0.7

* Reduced whitesource vulnerabilities.

### Version 1.0.1

* Initial Release


|Back to ...||Latest Version|Fortify SSC |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.19](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-fortify-ssc/ucv-ext-fortify-ssc%3A1.0.19.tar.7z.001)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
