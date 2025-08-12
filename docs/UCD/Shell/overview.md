
# Shell - Overview

The Shell plug-in includes steps that run commands on the target system. You can run a command with or without arguments.

To add the Shell plug-in steps to processes, click **Scripting > Shell** in the step palette of the process editor.

* [Shell](steps#shell)
* [Shell (with xargs)](steps#shell_(with_xargs))

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 21

Updated securedata library, so that it will not fail to initialize if AES256 is unsupported.

### Version 20

Improve command line length accounting in "Shell (with xargs)" step on Windows.

### Version 19

Allows overriding of temporary directory used for running scripts. 

### Version 17

Port plug-in to Java.

### Version 16

Updated Jettison library to 1.5.4 for CVE-2023-1436.

### Version 15

Updated Jettison library for CVE-2022-45693 and CVE-2022-45685.

### Version 14

Fixes APAR PH27500 - Shell step will now use AGENT_HOME/var/temp as the temporary directory.

### Version 13

Updated Jettison library for CVE-2022-40150 CVE-2022-40149.

### Version 12

Updated log4j 2.17.

### Version 11

Removed log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307.

### Version 10

Added compatibility with Groovy 3.

### Version 9

Support property file encryption.

### Version 8

Added support for encrypted property files.

### Version 7.800043

Version 7 of the plug-in includes a fix for APAR PI40728. The Shell (with xargs) step now correctly displays the arguments in the logs.

### Version 6.785165

Version 6 includes a fix for APAR PI35342. The plug-in is now compatible with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 5.562693

Version 5 includes a fix for a defect where the Shell plug-in was not upgraded when users upgraded to IBM DevOps Deploy 6.1.0.2.

