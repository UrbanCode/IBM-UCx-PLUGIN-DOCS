
# SonarQube - Overview

DevOps Velocity elevates the value of code quality data by providing a rich context for visibility,
analysis, and results. SonarQube metrics used by DevOps Velocity include bugs, code smells, and security vulnerabilities. From
an operational perspective, continuous integration often relies on quality gates to keep code quality high. DevOps
Velocity is designed for operational value as well.SonarQube integrates with Velocity by targeting an integration
endpoint URL with a webhook. SonarQube will then notify that endpoint to retrieve data whenever a project analysis
finishes. The following diagram shows the flow between SonarQube and DevOps Velocity.![](/wp-
content/uploads/SonarQube_Velocity_Flow.png)

## Compatibility

Must be running DevOps Velocity version 1.2.1 or later to use the plug-in.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-sonarqube/tags).

## History

### Version 1.0.65

* Reduced Vulnerabilities

### Version 1.0.50

* User access key related changes.

### Version 1.0.42

* Minor enhancements.

###
Version 1.0.34

* Improve plug-in security.

### Version 1.0.33

* Improve debug logs,resolved Pull-request analysis data

### Version 1.0.30

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.24

* Update property descriptions

### Version 0.0.23

* Update api-client to 1.0.11


|Back to ...||Latest Version|SonarQube |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.50](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-sonarqube/ucv-ext-sonarqube-1.0.50.tar.zip)|[Readme](README.md)|[Usage](usage.md)|[Scripts](scripts.md)|[Certificate](certificate.md)|[Downloads](downloads.md)|
