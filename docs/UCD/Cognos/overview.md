
# IBM Cognos - Overview


Cognos software includes business intelligence and performance management solutions. The Cognos plug-in for IBM DevOps Deploy includes steps to import and export content to and from the Cognos content store.

To add the Cognos plug-in steps to processes, click **Reporting > Cognos** in the step palette of the process editor.

### Compatibility

The current version of this plug-in is based on the Cognos 10.2 SDK.

This plug-in requires version 6.1 or later of IBM DevOps Deploy.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

### History

#### Version 12

Fixed issues with method getStepProperties of AirPluginTool.

#### Version 11

Fixed APAR PH13993 Cognos 10.2.1 SDK missing jar files.

#### Version 10

Fixing CVE:CVE-2019-4233

#### Version 9

Fixed APAR PH03138 Broken classpath in Windows.

#### Version 8

Added encryption key for input properties.

#### Version 7.973863

* RFE 116955 Added functionality to specify a target directory for importing into the content store.
* Added a checkbox to overwrite deployment specifications.

#### Version 6.959162

Version 6 changes the password field to a secure encrypted property.

#### Version 5.940839

Version 5 includes RFE 111369: Deployments will now automatically create non-existing deployment specifications. Added a Parent Directory property to specify the parent directory of the deployment specification.

#### Version 4.869051

Added support for property file encryption.

#### Version 3.786796

Version 3 includes a fix for APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

#### Version 2.749972

This release includes a fix for APAR PI55878, Import/Export not pulling existing specification for deployments.

#### Version 1.716381

Initial release.


|Back to ...||Latest Version|IBM Cognos |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[12.1175694](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Cognos/ucd-Cognos-12.1175694.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
