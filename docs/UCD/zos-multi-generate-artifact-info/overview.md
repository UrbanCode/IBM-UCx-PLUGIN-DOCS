# z/OS Multi Generate Artifact Information - Overview



The z/OS Multi Generate Artifact Information plug-in scans version artifacts and generates text based on a template. You can use the generated output text as input to subsequent steps. The plug-in processes data sets and members in a component version.

This plug-in is an extension of the z/OS Utility plug-in for generating artifact information. The z/OS Multiple Generate Artifact Information plug-in have additional features given below.

* Ability to set multiple templates to multiple properties
* Ability to generate multiple properties using one step

This plug-in contains one step:

* Generate Multiple Artifact Information

Use the Generate Multiple Artifact Information step to select a set of artifacts to process by applying filters on data set names, member names, deployment types, and custom properties for each output property.

## Compatibility

This plug-in requires DevOps Deploy version 6.1.1 or later and an DevOps Deploy agent on z/OS.

This plug-in works with IBM z/OS version 1.9 or later.

## Step palette

To access this plug-in in the palette, click **Utilities** > **zOS Multi Generate Artifact Information**.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, follow the [installation instructions](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 9

* Minor code improvements
* Added support for single source to multiple target datasets mapping deployments

### Version 8

* Added support for Directory/File and Generic artifacts
* Added check for Target Dataset Filter to allow only dataset or member loop types
* Removed Jettison Library with vulnerability
* Removed unused libraries from plugin to reduce overall plugin size
* Fixed stream error and minor improvements

### Version 7

* Added new loop type to delete PDS member excluding missing PDS members
* Fixed issue when backup is disabled during deployment
* Minor improvements

### Version 6

* Minor improvements in plugin name and description
* PH46505 Fixed issue with filtering containers mapped to same Target PDS in Generate Artifact step
* Fixed issue with deleted containers for generating artifact information

### Version 5

* Delete and Update/Create Deploy-Action types on same container/PDS is made possible
* Added input to filter based on artifact created or updated

### Version 4

* Added support to optionally ignore unresolved properties

### Version 3

* Added support to run in non zOS environment as well

### Version 1

* Initial release


|          Back to ...          |                                |                                                                                 Latest Version                                                                                  | z/OS Multi Generate Artifact Information |                   |                   |                           |
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------:|:-----------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [9.1176022](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-multi-generate-artifact-info/ucd-plugins-zos-multi-generate-artifact-info-9.1176022.zip) |           [Readme](README.md)            | [Steps](steps.md) | [Usage](usage.md) | [Downloads](downloads.md) |
