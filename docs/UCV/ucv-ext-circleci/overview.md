
# CircleCI - Overview

The CircleCI plugin imports pipeline, workflow, and job execution data of a project from CicleCI and displays it in IBM DevOps Velocity. The IBM DevOps Velocity Pipeline displays the version of the application that was deployed to different environments. You can configure the CircleCI project as an application in an IBM DevOps Velocity pipeline.

## Compatibility

The table below lists the compatible versions of the CircleCI plug-in and IBM DevOps Velocity:

| DevOps Velocity Version | CircleCI Plug-in Versions |
| --- | --- |
| 5.2.5 or later | 1.0.33 |

## Versions

The IBM DevOps Velocity plug-in images are located in DockerHub. For available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-circleci/tags).

## History

### Version 1.0.33

* **Vulnerability fix**: Addressed and resolved Whitesource-reported vulnerabilities.
* **Sonarqube coverage**: Improved test coverage for the CircleCI plug-in.
* **Enhancement**: Added support for Team and Teamspace fields in plugin integrations. These fields can now be configured during plugin setup and integration.
* **Technical upgrade**: Upgraded the NPM Wrapper package to the latest supported version.

### Version 1.0.24

* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of DevOps Velocity.
* **Preventing Installation on Older Versions**: This version of Circleci Plugin can only be installed on DevOps Velocity version 3.0.0 and later
* **Added Category**:Build and Deploy are the plugin category of Circleci.
* **Initial Sync Date Field Added**: Under the hidden properties section of add integration page for the plugin an Initial Sync Date field is added.This field is optional and can be used only for the first sync.

### Version 1.0.22

* Clarifying delimitation problem for properties used. ( Example: Comma separated list )

### Version 1.0.18

* Fixed whitesource vulnerabilities

### Version 1.0.16

* Auto generated user Access Key Related Changes.

### Version 1.0.13

* Removed IBM related keywords


