
# IBM WebSphere Portal - Overview

The WebSphere Portal plug-in includes steps to complete the following tasks on WebSphere Portal cells: deploy artifacts (such as themes, skins, and PAA files), run ConfigEngine commands, and run XML Access scripts.

The plug-in provides steps that you can use to automate deployment of artifacts and automate running commands.

* Deploy Theme
* Install PAA (Portable Application Archives)
* Deploy Portal WAR (web application archive)
* Execute ConfigEngine command
* Invoke XMLAccess script

The following steps provide an overview of the process you follow.

1. Create resources. If you use topology discovery, one resource with the PortalServer resource role is created. Manually populate resources by creating components under the PortalServer resource to represent deployable artifacts (themes, PAA files, WAR files, ConfigEngine commands, XMLAccess scripts).
2. Define properties for the resources.
3. Define components, applications, and environments to automate deployment.
4. Deploy.

## Compatibility

The plug-in works with WebSphere Portal versions 6.1, 6.1.5, 7.0, 8.0, 8.5 and 9.0. Both ND and stand-alone topologies are supported.

## Installation

This plug-in requires the [WebSphere Application ServerDeployment plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/93-2/).

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 8.1063734

Version 8 includes fixes for:

* Fixes APAR PH27880 – BLANK CONTEXT ROOT NOT WORKING

### Version 7.906819

Version 7 includes fixes for:

* Deploy Portal WAR step now allows users to retrieve the application OID using WAS credentials (as opposed to Portal credentials)

### Version 5.868850

Version 5 includes fixes for:

* Fixes APAR PI73113The Connection Port property in the Deploy Theme and Deploy Portal WAR steps is required if the Dmgr and Portal Servers are on separate servers.
* Changed the WebSphere Portal server configuration port property to Virtual Portal port to reduce confusion.

### Version 4

Version 4 includes a fix for:

* Support property file encryption.

### Version 3.822919

Version 3 includes a fix for APAR PI68508: Allow user to specify portal context root for following plug-in steps: Deploy Portal WAR, Deploy Theme, Invoke XMLAccess scripts.

### Version 2.706482

Version 2 includes the following features and fixes:

* The Install PAA step includes an additional arguments field.
* A defect that is related to the plug-in not finding the WebSphere Application Server command path was fixed.

### Version 1.457768

Initial release of the plug-in.


|Back to ...||Latest Version|IBM WebSphere Portal |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1100783](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSpherePortal/WebSpherePortal-8.1100783.zip)|[Readme](README.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
