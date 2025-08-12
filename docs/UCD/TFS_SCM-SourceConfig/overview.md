
# Microsoft TFS_SCM (Team Foundation Server) - Overview

The Microsoft TFS\_SCM (Team Foundation Server) source configuration plug-in automates importing version artifacts from a Team Foundation Server.


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Team Foundation ServerSCM**.

## Compatibility

The IBM DevOps Deploy source configuration plug-in for Microsoft Team Foundation ServerSCM works with Team Foundation Server, Team Explorer Everywhere, and Visual Studio Online. This plug-in supports Team Foundation Server 2010, 2012, 2013, 2015 and 2017.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in supports agents that are running on Microsoft Windows.

## Installation

Microsoft .NET Framework 3.5 must be installed on the agent computer where the plug-in is installed.

No special steps are required for installing the plug-in. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

## Version 19

* Updating commons-io library to 2.17.0 for CVE-2024-47554

## Version 18

* Updating Jettison library to 1.5.4 for CVE-2023-1436

## Version 17

* Updating log4j dependencies

## Version 16

* Updating jettison library for CVE-2022-45693 and CVE-2022-45685

## Version 15

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

## Version 14

* Update udclient and uDeployRestClient

## Version 13

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

## Version 12

* Allow specifying custom java opts

## Version 11

* Fixing CVE:CVE-2019-4233

## Version 10

* Updates property descriptions.

## Version 9

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

## Version 8

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

## Version 7

* RFE 108136 - Workspace and Workspace Local Folder are now optional fields. This allows for a clean directory on each import.
* If these properties are left empty, a new temporary workspace will be created with its mapped folder in the agent's working directory.
* The temporary workspace and folder are removed after completion.

## Version 6

* Added short output logging.
* Updated plugin.xml descriptions and ordering.
* The tf Path property can be empty if supplied on the PATH environment variable.

## Version 5

* Support property file encryption.

## Version 4

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

## Version 3

* Expands compatibility to VSO, TEE, and TFS 2015.

## Version 2

* Fixes running a process after creating a version.
* Also fixes APAR PI34268 - the path to the executable was incorrect unless the user appended tf.exe to the end of the path.

## Version 1

* Initial release of the TFS source configuration plugin.
