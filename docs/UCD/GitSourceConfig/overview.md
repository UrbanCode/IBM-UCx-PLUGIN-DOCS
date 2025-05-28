
# Git - Overview

The Git plug-in automates importing artifacts from a Git repository.

This plug-in includes one step which has no input properties:

* [Import Version](./settings.md#import-version)

The plug-in adds the following roles to resources:

* [GitComponentProperties](./settings.md#gitcomponentproperties)
* [GitImportProperties](./settings.md#gitimportproperties)

## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Git**.

## Compatibility

This plug-in requires DevOps Deploy version 6.0 or later.

This plug-in supports all versions of the Git client.

This plug-in runs on all operating systems that DevOps Deploy supports, except the IBM z/OS operating system.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, see [Installing plug-ins in DevOps Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 28

* APAR-(PH58492): Handled NPE error for few properties

### Version 27

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 26

* URBANCODE-I-404: Added sparse clone feature to clone a particular directory/file

### Version 25

* Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 24

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 23

* Update log4j 2.17, udclient, and uDeployRestClient libraries

### Version 22

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 21

* Allow specifying custom java opts

### Version 20

* Better error messages when the version name already exists.

### Version 19

* A version's importing field will be correctly set and marked as finished importing when creating versions that aren't copied to codestation.

### Version 18

* Fixes APAR PH14132: security update

### Version 17

* Added escape for special characters in username and password.

### Version 16

* Fixing CVE:CVE-2019-4233

### Version 15

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 14

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 13

* Fixes APAR PI94103. Added an option to disable SSL certificate verification.

### Version 12

* Fixes APAR PI89187. Branch is now specified when making inital git clone command.
* Branch property is now optional. Default value is master.
* Improved error output when unable to identify Commit IDs or Tags.
* If specified revision is not found, a hollow component version will no longer be created.

### Version 11

* RFE 110682. On default automatic imports where Watch for Tags is not specified, the plug-in will make a shallow copy of depth 1 to save time and space.
* If a Version/Tag value or the Watch for Tags check box is specified, a full clone will be made.

### Version 10

* RFE 86753. Added support for Git submodules.

### Version 9

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

### Version 8

* Plug-in now encodes username to fix authentication issues.

### Version 7

* This release is being provided to include updated translations.

### Version 6

* Fixes APAR PI63702. Adds functionality to separate Includes Excludes parameters with new lines or commas.

### Version 5

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 4

* Adds functionality to supply authentication credentials to a repository.

### Version 3

* PI36827 - Use the agent's /var/temp rather than java.io.tmpdir for temporary files

### Version 2

* Fixes running a process after creating a version

### Version 1

* Initial release of the Git source configuration plugin.

|Back to ...||Latest Version|Git |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[28.1176784](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/GitSourceConfig/ucd-GitSourceConfig-28.1176784.zip)|[Readme](README.md)|[Troubleshooting](troubleshooting.md)|[Settings](settings.md)|[Usage](usage.md)|[Downloads](downloads.md)|
