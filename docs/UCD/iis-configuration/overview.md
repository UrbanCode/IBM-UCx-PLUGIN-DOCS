
# Microsoft IIS - Configure - Overview

The IISConfigure plug-in includes steps to discover IIS configurations, and to apply configurations and applications to IIS instances. To learn more about the IISConfigure plug-in, watch the [tutorial video](https://www.youtube.com/embed/XaJbWQQMRR0).

To add the IISConfigure plug-in steps to processes, click **IISConfiguration > Discovery** in the step palette of the process editor.

## Prerequisites

* IIS and Microsoft Web Deploy must be installed on the agent computer.
* The [File Utils plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/FileUtils/) (version 49 or later) must be installed.
* The [IBM DevOps Deploy Versioned File Storage plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/UrbancodeVFS/) (version 25 or later) must be installed.
* The [Groovy plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Groovy/) (version 7 or later) must be installed.
* The [IBM DevOps Deploy Versions plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/uDeploy-Version/) (version 62 or later) must be installed.

## Compatibility

This version of the IISConfigure plug-in was tested with Microsoft IIS versions 8.0 and 8.5 on Windows Server 2012 and Windows Server 2012 R2.

This plug-in requires version 6.2.0.2 or later of IBM DevOps Deploy.

This plug-in supports agents that are running on Microsoft Windows.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Versions

#### Version 11

* Change dependency on DevOps Deploy Versioned File Storage plug-in to version 30 and DevOps Deploy Versions to version 66.

#### Version 9

* A topology discovery can be run without editing and saving the properties of the webServer group after an auto-discovery.

#### Version 8

* Error and debugging information prints correctly to the output log in DevOps Deploy.
* IISApp resource roles can be added to other IISApp resource roles.

Other Versions:

#### Version 7

* Fixed an issue where agents installed on non-Windows platforms would produce an error when placed in the resource tree

#### Version 6

* Fixed issue where apps were not getting discovered correctly during a topology discovery
* Fixed issue where optional arguments were incorrectly placed onto msdeploy commands

#### Version 5

* Fixed issue where optional arguments for msdeploy commands were not working correctly.

#### Beta 4

* The plug-in now includes a live comparison feature. You can compare your component versions against a live IIS configuration to find differences between the two.
* The IIS Configuration Discover and Configure step is now called IIS Configuration Discovery, to better represent its purpose.
* The Configure using IIS Configuration Discover and Configure action is now called Configure using IIS Configuration Topology Discovery, to better represent its purpose
* Topology discoveries can be run from only the webServer resource role rather than the webServer, site, app, and app pool roles. This change better represents the purpose of a topology discovery.
* Multiple properties were renamed. Descriptions for properties were enhanced for clarity.
* The plug-in now requires IBM DevOps Deploy version 6.2.0.2 or later. Other required plug-in versions also changed. These changes are required to support the live comparison features.
* Example processes, application, and components were altered to accommodate changes in property names.
* The Tokenize Configuration File step now prints the values to be replaced by tokens.
* Resource roles are now restricted to their correct parent roles when you drag them to the resource tree.

#### Beta 3

* Fixed issue where the plug-in did not load on IBM DevOps Deploy 6.2.2.

#### Beta 2

* Fixed issue where plug-in might not automatically import example processes, component templates, and applications.
* Added plug-in dependencies for various plug-in steps that are used in example processes, component templates, and applications.
* Fixed issue where topology discovery resource role attributes did not parse colons (:) properly.

|Back to ...||Latest Version|Microsoft IIS - Configure |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1127381](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/iis-configuration/ucd-IIS-Configuration-13.1127381.zip)|[Readme](README.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
