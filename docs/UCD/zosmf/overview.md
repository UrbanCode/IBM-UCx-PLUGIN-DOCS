
# z/OS Management Facility - Overview

The z/OS Management Facility (zOSMF) plug-in provides functions to discover software instances provisioned by[z/OSMFCloud Provisioning](https://www.ibm.com/systems/z/os/zos/features/zosmf/)or[z/OS Provisioning Toolkit](https://developer.ibm.com/mainframe/products/zospt/). A collection of resources are created inthe resource tree torepresent thesoftware instances such as CICS regions, WebSphere Liberty profile, MQ queues, and DB2 databases.

Discovering resources takes less time than manually creating resources to match the sub systems. For additional information about discovering resources, see the following topics:

* [Discovering Mainframe Software Services Instances](#discovering-mainframe-software-services-instances)
* [Provisioning and Discovering Mainframe Software Services Instances](#provisioning-discovering-mainframe-software-services-instances)

This plug-in includes the following steps:

* [Create Workflow](#create_workflow)
* [Start Workflow](#start_workflow)
* [Run Published Software Service Template](#run_published_software_service_template)
* [Software Services Instance Discovery](#software_services_instance_discovery)
* [zOSMF Cloud Provisioning Discovery](#zosmf_cloud_provisioning_discovery)

The following roles are added by this plug-in.

* [zOSMFService](#zosmfservice_role)
* [zOSMFSoftwareInstance](#zosmfsoftwareinstance_role)


### Step palette

To access this plug-in in the palette, click **Utilities** > **zOS Utility** > **zOSMF**.

### Compatibility

The steps in this plug-in run on the following platforms.

* This plug-in is supported to run on z/OS 2.2 or later.
* This plug-in requires UrbanCode Deploy 6.2.0 or later.Specific resource icons for z/OS software instances are used in UrbanCode Deploy 6.2.6 and later

### Prerequisites

* Only software instances provisioned using z/OSMF Cloud Provisioning orz/OS Provisioning Toolkit can be discovered.
* z/OSMF must be started and permission must be setup to allow access to the REST API
* The user ID used to run discovery must have proper permission to access the software instance.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

### History

#### Version 14.1153260 includes the following updates:

* Fixes Groovy compilation issue on Groovy-3.0.x.

#### Version 6.934842 includes the following updates:

* Added zOSMF discovery feature. The plug-in is now able to discover software instances provisioned by zOSMF Cloud Provisioning or zOS Provisioning Toolkit. A set of resources representing the software instances are automatically created as the result of the discovery.
* Added a new step to Run Published Software Service Template.

#### Version 5.868918 includes the following updates:

* Enhanced Start Workflow step to store job logs to output properties.

#### Version 4.839888 includes the following updates:

* Fixed a problem in Start Workflow step that Perform Subsequent parameter does not work.
* Fixed a problem in Start Workflow step that partially completed workflow gives a step failure.
* Enhanced Start Workflow step to display job logs.

|Back to ...||Latest Version|z/OS Management Facility ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1153260](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zosmf/ucd-zosmf-14.1153260.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
