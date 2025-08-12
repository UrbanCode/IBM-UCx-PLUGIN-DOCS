
# Jenkins Pipeline - Overview

Jenkins is a continuous integration server that supports interactions with other technologies by using a plug-in model. The Jenkins Pipeline plug-in orchestrates DevOps Deploy deployments as part of a pipeline in Jenkins. You can complete the following tasks with this plug-in.

* Create components
* Publish artifacts to a version
* Start component version imports
* Deploy snapshots or component versions
* Run operational processes
* Run the step multiple times within a single job

## Compatibility

This plug-in is supported to run against Jenkins Server 2.0 or later.

This plug-in runs on DevOps Deploy 6.1 or later. For previous versions of IBM DevOps Deploy, download version 1.0.2 of the plug-in.

## Installation

Install the Jenkins Pipeline plug-in onto a Jenkins server.

## Tutorials

The [Jenkins Pipeline Plug-in Tutorial](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/12/jenkins-pipeline-plug-in-tutorial-component-versio) blog provides a walkthrough for a first time plug-in user. The blog contains two scenarios: 1)Component Version Import and 2)Snapshot Deployment using either a pipeline or freestyle Jenkins project.

## History

### Version 2.28

* Added : Update Component version in existing Snapshot feature.
* Field added: updateSnapshotComp - Update Component version in Snapshot (true/false). Select to update Component version in existing snapshot. When this option is selected any component versions specified in the 'Snapshot/Component Versions' field will be added to the existing snapshot instead of being used directly for the deployment.


### Version 2.27

* Fixed : 401 unauthorised error while pushing artifacts to IBM DevOps Deploy server.
* Added Global Fields for Skip Application Properties Import and Always Create New Client.
* Added fields for Extensions of files to Convert field and Charset to push artifacts to component version step.

### Version 2.26

* Fixed : Removed httpcore dependencies as it is no more used

### Version 2.25

* Fixed : Removed checkbox to push failed build as it was causing Trigger version Import step to work improperly

### Version 2.24

* Fixed : Fixed : Updated plugin url.

### Version 2.23

* Fixed : Added checkbox to push failed build.

### Version 2.22

* RFE : Add UCD Application property in Jenkins Environment Variable

### Version 2.21

* Fixed : UI Issue compatible for save and apply button.

### Version 2.20

* RFE 147414 : Add ucd application process log url for more details.

### Version 2.19

* Fixed : Addition of latest version to specified component only instead of all components.

### Version 2.18

* Fixed APAR PH28324 – Fail the Jenkins job if nothing is found to push to UCD( avoid false positive).

### Version 2.17

* Block “Run as Alternative User” : Help text added for “Alternative Username” and “Alternative Password”.

### Version 2.16

* Fixed APAR PH25862 – Making deploy version “not required” field to support following, which needs no version:
* 1. Operational component process.
* 2. Application generic process.

### Version 2.15

* Fixed APAR PH23739 – Fixed: Plugin Shows success in Jenkins job console on Cancelling process from UCD.

### Version 2.14

* Fixing CVE:CVE-2019-4233.

### Version 2.13

* Modified process to continue if user is unable to set environment variable.

### Version 2.12

* Set component version as environment variable when pushing a new version.

### Version 2.11

* Added option to skip waiting for a successful deployment from UCD.

### Version 2.10

* Added functionality to preemptively create environment snapshot to use during deployment.

### Version 2.9

* Fixed 401 http error when setting version properties by using latest uDeployRestClient.

### Version 2.8

* Fixed all Null pointer and bad casting exceptions upon saving job configurations.
* Removed administrative checkbox from global and job configuration of user credentials.
* Maintenance mode is removed in UCD 6.2.4, so weve removed it in the Jenkins plugin too.

### Version 2.7

* Fixed APAR PI91900 Unfilled application process properties unable to be checked with a snapshot.

### Version 2.6

* Fixed APAR PI85407 Importing component versions no longer fails when runtime properties arent provided.

### Version 2.5

* RFE 104275 Support for Description and Application Request Properties on deployments. Going forward, all Application Process must have all required application request properties specified.

### Version 2.4

* Fixed APAR PI80038 Snapshot names no longer require a leading equals sign. Specify a single snapshot using the following syntax: `SNAPSHOT=UCD_SNAPSHOT_NAME`

### Version 2.3

* Fixed APAR PI77548 Resolving component process properties.

### Version 2.2

* Fixed unserializable class error during artifact publish on slave node.
* Fixed APAR PI75045 Jenkins plugin requires administrative privileges
* Allows per job credentials as opposed to global credentials only

### Version 2.1

* Fixed APAR PI69063 and PI70948 Jenkins deployment succeeds with UCD in maintenance mode.
* Added functionality to allow deployment to wait for process completion.

### Version 2.0

* Initial release
