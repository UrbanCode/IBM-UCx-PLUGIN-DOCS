# z/OS External Artifact Repository - Overview



The External Artifact Repository plug-in automates the downloading of IBM z/OS artifacts from a [Nexus](https://www.sonatype.com/product-nexus-repository) or [JFrog Artifactory](https://jfrog.com/artifactory/) repository.


This plug-in includes one step:

* Download z/OS Package


## Step palette

To access this plug-in in the palette, click **Repositories** > **Artifact** > **zOS ExternalArtifactsDownload**.

## Compatibility

This plug-in requires 7.0.4 or later of DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps").

## History

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


|          Back to ...          |                                |                                                                   Latest Version                                                                   | z/OS External Artifact Repository ||||
|:-----------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [12.1176020](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/ucd-ExtArtRepo-12.1176020.zip)  |        [Readme](README.md)        |[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
