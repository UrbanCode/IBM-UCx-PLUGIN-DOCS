
# IBM DataPower Configuration Manager - Overview

The IBM DataPower configuration manager plug-in includes steps to work with WebSphere DataPower appliances.

To add the IBM DataPower configuration manager plug-in steps to processes, click **Infrastructure > WebSphere DataPower** in the step palette of the process editor.

## Compatibility

This plug-in works with all WebSphere DataPower appliances that are currently supported by IBM, with the exception of the XC10, and all supported versions of DataPower firmware.

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in supports agents running on the versions of Linux and Microsoft Windows that are supported by IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy"). A Java SDK that contains tools.jar is required to run all DataPower plug-in steps.

## How-To

View the [GitHub projects wiki page](https://github.com/ibm-datapower/datapower-configuration-manager/wiki) for full directions and complete tutorials on using the Datapower plugin.

## History

### Version 27

* DataPower plugin is now bundled with Ant v1.9.15 due to CVEs.
* Removed vulnerability: CVE-2022-34169
* Removed vulnerability: sonatype-2018-0330
* Removed vulnerability: CVE-2020-1945
* Removed vulnerability: CVE-2021-36373
* Removed vulnerability: CVE-2022-34169

### Version 26

*Added "upload directory" step a a duplicate step to "upload files" to avoid confusion for a users.

### Version 25

* Fixed groovy3 compatibility issue
* Property "Deployment policy object variable name" made optional as some usres face issue due to this.

### Version 24

* Fixed PR [#109](https://github.com/ibm-datapower/datapower-configuration-manager/issues/109)
  * Steps fail with null pointer exception!

### Version 23

* Fixes APAR PH26875 – Removing spaces around the plugin property values.
* RFE 143590 – The “Download Files” step now supports downloading files from multiple directories.
* RFE 142311 – Modified “Upload Directory” to support file Include and Exclude options.
* RFE 142314 – Added new Export Objects steps that enables the export of one or more objects.

### Version 22

* RFE 142129 – Added Deployment-Policy-variables field to the Import (Deployment Policy Object) step.

### Version 21

* Parameterized reset-domain for ant CLI and UCD Plugin.

### Version 20

* RFE 115259Added the Flush Document Cache and Flush Stylesheet Cache steps and their associated flush-document-cache and flush-stylesheet-cache targets.

### Version 19

* PR #87New key-create target to generate a private key, a public key, and a self-signed certificate.
* PR #87Updated the default spelling of the ref.files property in password-alias-create and password-alias-update targets.
* Fixes APAR PI92154Missing default format property value in export-object and export-objects targets.

### Version 18

* Fixes APAR PI92154Missing default format property value in export-object and export-objects targets.

### Version 17

* Improve Invoke any deploy.ant.xml target steps Additional Properties decription. Property names and values are now trimmed.

### Version 16

* Issue #81Added format argument to the export-object and export-objects DCM targets to define export type. Possible values: XML or ZIP. Default is ZIP.
* Issue #82Added missing port property in the importConfig and importConfigDPO macrodefs used by import-from-def and import-dpo DCM tasks.
* PR #85Set SSLClientProfile for Load Balancer Groups and update health check comments to include TCPConnectionType check.

### Version 15

* Fixes APAR PI85141Failure in Export Object step due to missing all.files default argument.
* The Export Object step contains a new Include All Files? property and all required properties are now properly marked.
* Fixes APAR PI84786Escape all special characters (except double quotes) in Password field for Windows OS.

### Version 14

* Updated packaged Ant to v1.9.9.

### Version 13

Fixes APAR PI79894New functionality added to the Import (Basic), Import (Definition), and Import (Deployment Policy Object) steps:

* The hidden Import Error Regex variable can be utilized to ignore SOMA error responses.

### Version 12

New functionality added to all steps:

* The hidden Java Max Memory Size variable has new -Xmx4096m, ``${p?:environment/memorySize}``, and ``${p?:resource/memorySize}`` options.

### Version 11

New functionality added to all steps:

* The ANT\_OPTS variable is applied to all commands.
* Specify the hidden Java Max Memory Size variable to increase the Ant commands JVM size.

### Version 10

Download Files step added.

### Version 9

Export Object step added. Added support for the back tick (`) character.

### Version 8

Initial release of the standard version of the plug-in.
