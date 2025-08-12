
# Docker Registry - Overview


The Docker Registry source configuration plug-in automates importing of version artifacts from a Docker registry or the IBM Container Service. The plug-in detects Docker registry image tags and creates an associated component versions for the tag.

This plug-in includes one step:

* [Import Version](#import_version)

## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Docker Import Tag**.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

To use this plug-in with the IBM Containers service, you must install the Cloud Foundry cf command-line tool, and then log in from the command line using the cf login command. Download the cf command-line tool from the [CLI and dev tools page](https://console.ng.bluemix.net/docs/cli/index.html#downloads) on the IBM Bluemix website. To learn more about the cf command-line tool, see [Cloud Foundry (cf) commands](https://console.ng.bluemix.net/docs/cli/reference/cfcommands/index.html).

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 44

* Return the correct image digest value for image registries that return image manifest information using schemaVersion 2.  Also now correctly returns the image digest for fat manifests (index images).

### Version 43

* Add support for image registries that return image manifest info using schemaVersion 2.

### Version 42

* Log4j and Jettison dependency updated.

### Version 40

* Fix RFE URBANCODE-I-365 – Import JFrog custom properties.

### Version 38

* Fixes RFE 144413 – Added support to pull specified tags.
* Fixes RFE 125113 – Added optional ‘description’ field when importing versions.

### Version 37

* Fixes RFE 141571 – Added support for Docker trusted registry.

### Version 36

* APAR PH23367 – UNABLE TO USE PLUGIN WITH ARTIFACTORY : Resolved HttpClientUtils ambiguous api call dependency.

### Version 34

* Fixes APAR PH11785 Added pagination for Docker Registry type tags.

### Version 33

* Fixes APAR PH07152 Docker Registry source plugin incorrectly reports it cannot access the specified registry in some cases.

### Version 32

* Fixes APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 31

* Fixes APAR PH00397 Docker Source Config plug-in fails if Artifactory reverse proxy does not return repositories.
* Fixes APAR PI87707 a regression where the user who requested a manual version import was not being tracked.

### Version 30

* Fixes APAR PI94794 Unable to retrieve Docker image tags from IBM Cloud if using a proxy.

### Version 23

* Provides clearer messages when a version import fails.

### Version 22

* Fixes issue where images tags were not being imported if the Regular Expression for Tag Selection setting is left blank.

### Version 21

* Remove dependency on docker config.json file for IBM Cloud container registries.

### Version 20

* Updated to work with the latest IBM Cloud container registries.
* Implements RFE 108578 to support regular expressions for importing docker images.
* Updates Amazon ECR related tool tips.

### Version 19

Updated to ensure all response texts are zOS compatible.

### Version 18

* Fixes issue where version imports fail if the registry doesnt support /v2 as the base URI entity.

### Version 17

Added Amazon Web Services ECR support.

### Version 16

Fixes APARs PI77450 and PI76826 Added support for Artifactory Docker registries.

### Version 15

Removed unused Registry Email Address property. Updated error output to better address errors at the time they occur.

### Version 14

Support property file encryption.

### Version 13

General quality of life improvements.

### Version 12

Version 12 includes the following updates:

* Removed OpenShift implementation. Please use the OpenShift Source plugin.

### Version 11

Version 11 includes the following updates:

* Updated OpenShift implementation to only use the CLI.

### Version 10

Version 10 includes the following updates:

* Resources are now correctly released after use.
* Imports containing null Label values will continue smoothly.
* Improved error output when image is not found.

### Version 9

Version 9 includes the following features:

* Updated ICS:
+ Bearer Token for authentication is correctly parsed
+ Space UID is properly specified
+ OS dynamic file sperators added
+ CF\_HOME is now specifiable
+ CF\_HOME defaults to user\_home/.cf
* Set VersionID output property to enable Run Process After Version Import functionality.

### Version 8

Version 8 includes the following features:

* You can now import OpenShift labels as version properties.
* You can now use the CF\_HOME environment variable and the cf login tool when you import from the IBM Containers service.

### Version 5

Version 5 includes a fix for APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

### Version 4

Version 4 supports the IBM Containers service.


|Back to ...||Latest Version|Docker Registry ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[44.1167750](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DockerSourceConfig/ucd-DockerSourceConfig-44.1167750.zip)|[Readme](README.md)|[Usage](usage.md)|[Settings](settings.md)|[Downloads](downloads.md)|
