
# z/OS Management Facility - Overview

The z/OS Management Facility (zOSMF) plug-in provides functions to discover software instances provisioned by[z/OSMFCloud Provisioning](https://www.ibm.com/systems/z/os/zos/features/zosmf/)or[z/OS Provisioning Toolkit](https://developer.ibm.com/mainframe/products/zospt/). A collection of resources are created inthe resource tree torepresent thesoftware instances such as CICS regions, WebSphere Liberty profile, MQ queues, and DB2 databases.

## Discovering resources

Discovering resources takes less time than manually creating resources to match the sub systems. For additional information about discovering resources, see the following topics:

* [Discovering Mainframe Software Services Instances](usage.md#discovering-mainframe-software-services-instances)
* [Provisioning and Discovering Mainframe Software Services Instances](usage.md#provisioning-discovering-mainframe-software-services-instances)

## Steps and Roles

This plug-in includes the following steps:

* [Create Workflow](steps.md#create-workflow)
* [Start Workflow](steps.md#start-workflow)
* [Run Published Software Service Template](steps.md#run-published-software-service-template)
* [Software Services Instance Discovery](steps.md#software-services-instance-discovery)
* [zOSMF Cloud Provisioning Discovery](steps.md#zosmf-cloud-provisioning-discovery)

The following roles are added by this plug-in.

* [zOSMFService](steps.md#zosmfservice-role)
* [zOSMFSoftwareInstance](steps.md#zosmfsoftwareinstance-role)

### Step palette

To access this plug-in in the palette, click **Utilities** > **zOS Utility** > **zOSMF**.

### Compatibility

The steps in this plug-in run on the following platforms.

* This plug-in is supported to run on z/OS 2.2 or later.
* This plug-in requires DevOps Deploy 6.2.0 or later.Specific resource icons for z/OS software instances are used in DevOps Deploy 6.2.6 and later

### Prerequisites

* Only software instances provisioned using z/OSMF Cloud Provisioning orz/OS Provisioning Toolkit can be discovered.
* z/OSMF must be started and permission must be setup to allow access to the REST API
* The user ID used to run discovery must have proper permission to access the software instance.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

### History

#### Version 15.1153789 includes the following updates

* Fixes Groovy compilation issue on Groovy-3.0.x.

#### Version 6.934842 includes the following updates

* Added zOSMF discovery feature. The plug-in is now able to discover software instances provisioned by zOSMF Cloud Provisioning or zOS Provisioning Toolkit. A set of resources representing the software instances are automatically created as the result of the discovery.
* Added a new step to Run Published Software Service Template.

#### Version 5.868918 includes the following updates

* Enhanced Start Workflow step to store job logs to output properties.

#### Version 4.839888 includes the following updates

* Fixed a problem in Start Workflow step that Perform Subsequent parameter does not work.
* Fixed a problem in Start Workflow step that partially completed workflow gives a step failure.
* Enhanced Start Workflow step to display job logs.

|          Back to ...          | |         Latest Version         |                                                             z/OS Management Facility                                                              ||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :----: |:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [15.1174435](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zosmf/ucd-zosmf-15.1174435) | [Readme](README.md) | [Usage](usage.md) | [Steps](steps.md) | [Downloads](downloads.md)|
