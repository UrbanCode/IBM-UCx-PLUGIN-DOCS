
# IBM DevOps Deploy Versioned File Storage - Overview


The steps in this plug-in work with versioned components. For example, the [Download Artifacts](steps.md#download-artifacts) step retrieves the latest version of a component. Most component deployment processes use this step to download the component artifacts to the agent system.

**Note**: For AIX systems, file permissions defined at the operating system level are not supported by the DevOps Deploy Versioned File Storage plug-in. The plug-in uses the permissions set by a process or script. The **chmod** command can be used to reset a permission to the value defined at the operating system level.

To add the IBM DevOps Deploy Versioned File Storage plug-in steps to processes, click **Repositories > Artifact > IBM DevOps Deploy** in the step palette of the process editor.

## Compatibility

This plug-in requires version 6.1 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 48

Validate checksum for zOS component versions created on server version 8.1.0 or higher  

### Version 47

Display more information when downloading artifacts from a Relay and Updated securedata library, so that it will not fail to initialize if AES256 is unsupported.

### Version 46

Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 45

Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 44

Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 43

APAR PH48521 - Fixed a defect where a local IO error is reported incorrectly as an HTTP network error, such as: "MalformedChunkCodingException: CRLF expected at end of chunk" or "TruncatedChunkException: Truncated chunk".

### Version 42

Update output logging configuration

### Version 41

Update log4j 2.17 and uDeployRestClient libraries

### Version 40

Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 39

APAR PH42597 - Fixed a defect where in rare cases artifact downloads fail with the message "Premature end of chunk coded message body: closing chunk expected".
To fully fix the issue, agent relays must also be patched or upgraded.

### Version 38

Added new step to compare two zOS version artifacts with new package format.

### Version 37

Fix a quoting issue in the Unix Java wrapper script that prevented correct execution when the agent is installed in path containing a space.

### Version 36

Use JAVA\_OPTS environment variable to set options for the Java executable.

### Version 35

Minor improvements in Download Artifacts for z/OS step for new package format.

### Version 34

Port plugin from Groovy to Java.

### Version 33.1063633

Enhanced Download Artifacts to support incremental versions in sync mode.

### Version 32.1057040

Enhanced Download Artifacts for zOS step to extract files for new package format.

### Version 31.1001746

Version 31 includes a fix for APAR PI92703. Add retry to artifact downloads after an IOException. The step will now fail after 5 attempts to download the artifact set.

### Version 30.972885

Version 30 renames the plugin.

### Version 29.941549

Version 29 includes a fix for APAR PI85953. Fix infinite loop in Download Artifacts if the user did not have permissions to the working directory.

### Version 28.858562

Version 28 includes support for property file encryption.

### Version 27.816399

Version 27 includes an enhancement to the Download Artifacts for zOS step to support HFS files.

### Version 26.785274

Version 26 includes a fix for APAR PI54866. Logging no longer shows message for deleting a directory if that directory does not get deleted.

### Version 23.673430

This release includes functions in the Download Artifacts step for minimal compatibility with configurations created in versions of the product earlier than 6.1.

### Version 21.623414

This release includes a fix for an issue where the initial character in a file name that is specified in the Download Artifacts step is dropped.


|          Back to ...          |                                |                                                          Latest Version                                                           | IBM DevOps Deploy Versioned File Storage |||
|:-----------------------------:|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------:| :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [48.1172096](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/UrbancodeVFS/ucd-UrbancodeVFS-48.1172096.zip) |             [Readme](README.md)             |[Steps](steps.md)|[Downloads](downloads.md)|
