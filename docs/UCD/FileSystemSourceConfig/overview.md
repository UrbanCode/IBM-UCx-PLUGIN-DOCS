
# File System - Overview

The File System plug-in imports artifacts from a local filesystem. The imported artifacts are stored in a single folder. If you want to store artifacts into versioned folders, you must manually create the version folders.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **File System**.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, see [Installing plug-ins in DevOps Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 13

Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 12

Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 11

Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 10

Update log4j 2.17, udclient, and uDeployRestClient libraries

### Version 9

Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 8

Allow specifying custom java opts

### Version 7

Fixing CVE:CVE-2019-4233

### Version 6

APAR PI89045: add support for setting isFinished flag when importing versions.

### Version 5

Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 4

Fixes APAR PI67556. Added missing "Preserve Execution Permissions" option

### Verion 3

* Support property file encryption.

### Verion 2

* Fixes added for running a process after creating a version.

### Verion 1

* Initial Release of File System source configuration plug-in.
