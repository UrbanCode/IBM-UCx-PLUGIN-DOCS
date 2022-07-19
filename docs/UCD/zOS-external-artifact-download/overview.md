
z/OS External Artifact Repository - Overview
============================================

# Overview


### Overview




The External Artifact Repository plug-in automates the downloading of IBM z/OS artifacts from a [Nexus](https://www.sonatype.com/product-nexus-repository) or [JFrog Artifactory](https://jfrog.com/artifactory/) repository.


This plug-in includes one step:

* Download z/OS Package


### Step palette

To access this plug-in in the palette, click **Repositories** > **Artifact** > **zOS ExternalArtifactsDownload**.

### Compatibility

This plug-in requires 7.0.4 or later of UrbanCode Deploy.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode](http://www.urbancode.com/resource/installing-plug-ins-in-urbancode-products/ "Installing plug-ins in UrbanCode").

### History

#### Version 4 released on April 16, 2020

Implemented the proxy changes for artifactory server

#### Version 3 released

Implemented the api key changes for artifactory server

#### Version 2 released

PH20336 – Fixed the default value for extRepoURL and changed the plugin to fail when it is not able to download artifacts

#### Version 1 released on October 16, 2019

Initial release. Plugin is used to download artifacts from external repository like NEXUS/ARTIFACTORY and then we can use Deploy Data Sets step to do zOS deployment.




|          Back to ...          |                                |                                                               Latest Version                                                                | z/OS External Artifact Repository ||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [8.1101664](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/ExtArtRepo-8.1101664.zip) |        [Readme](README.md)        |[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
