
# Maven - Overview


The Maven plug-in automates importing of artifacts from a Maven repository. To use the plug-in, create a component defining the repository connection information and artifacts to be imported.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Maven**.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, see [Installing plug-ins in DevOps Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 30

* Add support to allow pass certificates with client.

### Version 29

* Add maven repo origin link to version when importing.

### Version 28

* Updating Jettison library to 1.5.4 for CVE-2023-1436.

### Version 27

* Jettison dependency updated .

### Version 20

* RFE 139313: Added option(“Translate Snapshot”) to flag in/out SNAPSHOT translation.

### Version 19

* A version’s importing field will be correctly set and marked as finished importing when creating versions that aren’t copied to codestation.

### Version 18

* Fixing CVE:CVE-2019-4233.

### Version 17

* Added optional snapshot version suffix field when importing snapshot versions.

### Version 16

* RFE 129953: Added optional description field when importing versions.

### Version 15

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 14

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 13

* Fixes APAR PI98904Add version property baseVersion for resolving Maven snapshot versions with Maven Resolve.

### Version 12

* Fixes APAR PI93645. Import now includes existing versions in the latest version count.

### Version 11

* Fixes APAR PI83227. Import will succeed if a single import file extension is found.

### Version 10

* RFE 105396. Support for multiple file extensions.

### Version 9

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

### Version 8

* Fixed APAR PI74785 plugin using wrong error logging methods.

### Version 7

* Fixed APAR PI72858 where version import incorrectly handles the max copy count.

### Version 6

* Support property file encryption.<./li>
* Fixed APAR PI73414 where version import reports success on failure

### Version 5

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 4

* Plugin step connections will now timeout after 5 minutes of no HTTP activiy.
* Fixes APAR PI53843 where the plugin could hang in EXECUTING state during version imports

### Version 3

* Adding properties to configure Maven to use a Proxy.
* Fixed APAR PI31992 where Maven would attempt to redownload archived versions.

### Version 2

* Fixes running a process after creating a version.

### Version 1

* Initial release of Maven source configuration plugin
