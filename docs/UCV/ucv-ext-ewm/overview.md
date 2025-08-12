
# IBM Engineering Workflow Management (EWM) - Overview

The IBM Engineering Workflow Management (EWM) plug-in provides integration with the IBM EWM server. The plug-in imports work items from an IBM EWM server and provides a single view consisting of all the work items in DevOps Velocity value stream map. Data between the IBM EWM server and the DevOps Velocity server is synchronized every five minutes.

**Note:** IBM Engineering WorkFlow Management (EWM) was formerly called IBM Rational Team Concert (RTC). The name change occurred beginning with Version 7.0.

## Compatibility

This plug-in requires DevOps Velocity Version 1.2.6 or later and IBM RTC Version 6.0.5, 6.0.6.1, EWM Version 7.0 or later.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-ewm/tags).

## History

### Version 1.1.34

* **Feature Enhancement**: The EWM plugin now supports syncing release and sprint data to Velocity, enabling dot filtering by sprints and releases within the Value Stream Map (VSM).

### Version 1.1.32

* Fixed an issue where invalid date formats were causing errors in date processing due to a change in the EWM API date format.

### Version 1.1.30

* **Previous Version Bug Fix** : Version 1.1.28 of the plugin had a major bug related to Projects UI field.
* **Normalise Sever URL** : In the previous versions of the plugin if Server URL ended with / , plugin was failing.

### Version 1.1.28

* **Clarifying delimitation** : For the properties used in index.js file clarified delimitation problem . Updated label information and description as comma separated list must be used. So that it is more clear while integrating.

### Version 1.1.27

* Added change sets related data to history section of VSM dot.

### Version 1.1.24

* minor fix

### Version 1.1.22

* IssueRelationIn data added
* Additional debug logs added
* Minor bug fix

### Version 1.1.22

* Debug Logs Added
* UAK Changes
* Resync Data Feature
* Proxy Server Configuration Added
* Support for EWM 7.0.2

### Version 1.0.2

* Initial release


|Back to ...||Latest Version|IBM Engineering Workflow Management (EWM) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.34-File 1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ewm/ucv-ext-ewm%3A1.1.34.tar.7z.001)[and 1.1.34-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ewm/ucv-ext-ewm%3A1.1.34.tar.7z.002)[and 1.1.34-File 3](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ewm/ucv-ext-ewm%3A1.1.34.tar.7z.003)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
