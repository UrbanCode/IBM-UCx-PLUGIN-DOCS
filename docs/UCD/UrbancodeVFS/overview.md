
IBM UrbanCode Deploy Versioned File Storage - Overview
======================================================

# Overview


### Overview



The steps in this plug-in work with versioned components. For example, the [Download Artifacts](steps#download_artifacts) step retrieves the latest version of a component. Most component deployment processes use this step to download the component artifacts to the agent system.

**Note**: For AIX systems, file permissions defined at the operating system level are not supported by the UrbanCode Deploy Versioned File Storage plug-in. The plug-in uses the permissions set by a process or script. The **chmod** command can be used to reset a permission to the value defined at the operating system level.

To add the IBM UrbanCode Deploy Versioned File Storage plug-in steps to processes, click **Repositories > Artifact > IBM UrbanCode Deploy** in the step palette of the process editor.

### Compatibility

This plug-in requires version 6.1 or later of IBM UrbanCode Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM UrbanCode Deploy agent.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode products").

### History

#### Version 38

Added new step to compare two zOS version artifacts with new package format.

#### Version 37

Fix a quoting issue in the Unix Java wrapper script that prevented correct execution when the agent is installed in path containing a space.

#### Version 36

Use JAVA\_OPTS environment variable to set options for the Java executable.

#### Version 35

Minor improvements in Download Artifacts for z/OS step for new package format.

#### Version 34

Port plugin from Groovy to Java.

#### Version 33.1063633

Enhanced Download Artifacts to support incremental versions in sync mode.

#### Version 32.1057040

Enhanced Download Artifacts for zOS step to extract files for new package format.

#### Version 31.1001746

Version 31 includes a fix for APAR PI92703. Add retry to artifact downloads after an IOException. The step will now fail after 5 attempts to download the artifact set.

#### Version 30.972885

Version 30 renames the plugin.

#### Version 29.941549

Version 29 includes a fix for APAR PI85953. Fix infinite loop in Download Artifacts if the user did not have permissions to the working directory.

#### Version 28.858562

Version 28 includes support for property file encryption.

#### Version 27.816399

Version 27 includes an enhancement to the Download Artifacts for zOS step to support HFS files.

#### Version 26.785274

Version 26 includes a fix for APAR PI54866. Logging no longer shows message for deleting a directory if that directory does not get deleted.

#### Version 23.673430

This release includes functions in the Download Artifacts step for minimal compatibility with configurations created in versions of the product earlier than 6.1.

#### Version 21.623414

This release includes a fix for an issue where the initial character in a file name that is specified in the Download Artifacts step is dropped.


|Back to ...||Latest Version|IBM UrbanCode Deploy Versioned File Storage |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[43.1139365](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/UrbancodeVFS/ucd-UrbancodeVFS-43.1139365.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
