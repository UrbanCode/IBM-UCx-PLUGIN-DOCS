
# File Utils - Overview

The steps in this plug-in manipulate files on the target system.

To add the File Utils plug-in steps to processes, click **Utilities > FileUtils** in the step palette of the process editor.

## Compatibility

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, including z/OS with UNIX System Services.

This plug-in requires version 6.1 of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 100

Updated condition to ignore the replacement token properties file.

### Version 99

Port "Create File", "Monitor File Contents", "Read Property File", and "Create Directories" steps to Java.

### Version 98

Port "Replace Tokens" step to Java.

### Version 97

Updated securedata library, so that it will not fail to initialize if AES256 is unsupported.

### Version 96

Support AES 256-bit keys for input/output property encryption if also supported by the agent.

### Version 95
Updated ini4j library for CVE-2022-41404.

### Version 94

APAR PH52898 - Running the replace tokens step is taking longer to complete with each run.

### Version 93

Restore classpath for steps still implemented in groovy to fix "NoSuchMethodError" errors.

### Version 92

Port "Copy Directory" step to Java to reduce CPU consumption. Handle very large directories in the "Replace Tokens" step without running out of memory.

### Version 91

Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 90

Jettison dependency updated.

### Version 87

Untar step is defaulted to UTF-8 encoding.

### Version 86

Fixed infinite loop in replace tokens step when using groovy 3.

### Version 85

Fixed UI field and properly checked DTD speciication

### Version 84

Fixes APAR PH43524 – Replace token step alters file permissions

### Version 83

Add compatibility with Groovy 3.

### Version 82

Fixes several security issues.

### Version 81

Fixes APAR PH35488 – Replace token step not accepting comma seperated list of files in includes section

### Version 80

Fixes APAR PH23651 – Apply case-sensitive flag to basedir attribute of Create zip File step.

### Version 79

Fixes APAR PH23651 – Apply case-sensitive flag to basedir attribute of Create zip File step.

### Version 78

RFE 252736 – Add a step to search for files and folders in a custom or default working directory.

### Version 77

RFE 138972 – Fileutils Plugin : More Granular logging for the Replace tokens step,

### Version 76

Fixes APAR PH27418 – Fileutils (v:73) : “UNTAR STEP” – Throwing ant dependency error in RHEL SERVER.

### Version 75

Fixes several security issues.

### Version 74

Fixes APAR PH09196 LinkageError in File Utils Update XML File with XPath

### Version 73

* Fixes APAR PH04366 Update XML File with XPath fails when using wildcards in includes/excludes patterns.
* Fixes APAR PH06797 Update XML File with XPath silently fails for files nested in subdirectories.

### Version 72

Add Fail on Error checkbox to FileUtils plugins Copy Directory step.

### Version 71

Reverts bad release 70.1011208

### Version 70

Fixes APAR PH04366 Bug introduced in includes for file patterns.

### Version 69

Add a step to retrieve info from an XML file via XPath.

### Version 68

Fixes APAR PH03129 The Synchronize Directories step will now include empty subdirectories.

### Version 67

RFE 83876 Removes the malformed xmls before processing the xmls set.

### Version 66

Fixes a bug with the Unzip step listing the files being unzipped.

### Version 65

RFE 96126 Unzip step will now list the files to be unzipped, in the output log.

### Version 64

* Unzip step will now fail if a zip file was not found.

### Version 63

* Fixes APAR PI90762: COPY DIRECTORY STEP CAN DELETE DESTINATION FILES IF PERMISSIONS RESTRICTED.

### Version 62

* Fixes APAR PI81322: UNZIP PLUGIN FAILS IF IT CANT CHANGE FILE MODIFICATION DATE (the step will no longer fail)

### Version 61

Fixes APAR PI59955: REPLACE TOKENS STEP NOT HANDLING BLANK LINES

### Version 60

Fixes APAR PI82293: where wildcard filenames failed our check to determine if the specified file was valid

### Version 59

Fix potential NPE in Create File step when no encoding is specified

### Version 58

Fix broken upgrades that cause the plugin to fail to upgrade past version 45.

### Version 57.910073

Version 57 of the plug-in includes an update for RFE 85606. Added option to preserve the last modified time of files and folders in the Copy Directory step.

### Version 56.898690

Version 56 of the plug-in includes fixes:

* Add option to pretty print XML in the File Utils Update XML with XPath step.
* Add option to flatten files on copy step.
* Fixes issue in the Untar Tarball step returning a property variable error.
* Support property file encryption.

### Version 55

Add option to flatten files in the Copy Directory step.

### Version 54

Add option to pretty print XML in the File Utils Update XML with XPath step.

### Version 53

Support property file encryption.

### Version 52.851792

Version 52 of the plug-in includes a fix for APAR PI68137 by updating the search method of XML attributes in Read Properties From XML step.

### Version 51.845335

Version 51 of the plug-in includes fixes:

* Empty values in Properties List cause blank values to be generated.
* Added explanation for unexpected results due to temporary property file.

### Version 49.796720

Version 49 of the plug-in includes a fix for APAR PI63656, by adding the force flag to Copy Directory step to overwrite read-only files.

### Version 48.793720

Version 48 of the plug-in includes a fix for APAR PI63669, by adding the ability to specify a file encoding to the Replace Tokens step.

### Version 47.789932

Version 47 of the plug-in includes a fix for APAR PI62114 Set custom file encoding for Unzip File step.


|Back to ...||Latest Version|File Utils |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)| [100.1176430](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileUtils/ucd-FileUtils-100.1176430.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
