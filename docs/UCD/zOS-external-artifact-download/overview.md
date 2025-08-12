# z/OS External Artifact Repository - Overview

The zOS External Artifact Utility plug-in includes steps to integrate with external repositories like Nexus or JFrog for zOS.

This plug-in includes the following steps:

* Download Artifacts for zOS External Repo
* Create a Merged Version for JFrog Artifactory
* Create a Merged Version for Nexus

## Step palette

To access this plug-in in the palette, click **Utilities** > **zOS External Artifacts Utility**

## Compatibility

This plug-in requires 7.0.4 or later of DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps").

## History

### Version 13

* Fixed download issue occurring on server versions 7.2.X
* Added steps to create a merged version for JFrog and Nexus
* Renamed plugin from **zOS Utility to download external artifacts** to **zOS External Artifacts Utility**
* The plugin has been moved from tag **Repositories/Artifact/zOS ExternalArtifactsDownload** to **Utilities/zOS External Artifacts Utility**
* Replace pax command with untar for zOS artifacts download
* Added support for creating a merged version for package format v2

### Version 12

* Added support for Token for Artifactory as API Key is deprecated.
Read [api-key-deprecation-and-the-new-reference-tokens](https://jfrog.com/help/r/platform-api-key-deprecation-and-the-new-reference-tokens/jfrog-s-legacy-of-api-keys) for more details.

### Version 11

* Validate checksum for zOS component versions created on server version 8.1.0 or higher

### Version 10

* Added support to handle AT_TLS configuration for external repository servers
* Fixed Jettison Vulnerability
* Enhancement to Download artifacts without credentials

### Version 9

* Minor Improvements and upgraded log4j

### Version 8

* Added support to run with insecure connection

### Version 7

* Added support to run this from non zOS agent
* Minor improvements for new package format

### Version 6

* Added support to run this from non zOS agent

### Version 5

* Enhancement to extract files for package format v2

### Version 4

* Implemented the proxy changes for artifactory server

### Version 3

* Implemented the api key changes for artifactory server

### Version 2

* PH20336 – Fixed the default value for extRepoURL and changed the plugin to fail when it is not able to download artifacts

### Version 1

* Initial release.

Plugin is used to download artifacts from external repository like NEXUS/ARTIFACTORY then we can use Deploy Data Sets step for zOS deployment.

