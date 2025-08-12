
# Groovy - Overview

The Groovy plug-in automates running a Groovy script as a process step. This plug-in is installed as part of IBM DevOps Deploy.

This plug-in includes one step.

* [Run Groovy Script](#run_groovy_script)

## Compatibility

This plug-in requires DevOps Deploy version 6.0 or later.

This plug-in runs on all operating systems that DevOps Deploy supports.

## Installation

No special steps are required for installation. This plug-in is included with the installation of IBM DevOps Deploy. If you must install the plug-in again, see [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

## History

### Version 16

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 15

* Updated Jettison library for CVE-2022-45693 and CVE-2022-45685.
 
### Version 14

* Updated Jettison library for CVE-2022-40150 and CVE-2022-40149.

### Version 13

* Added default value to the classpath property.
 
### Version 12

* Fixed RFE 116752 – Allow Plugin to use additional classpath options.

### Version 11

* Added the current working directory to the classpath of the child process to support executing script files.

### Version 10

* Added Shutdown Hook to ensure Output Properties are set on script exit.
* If Shutdown Hooks exist in your Groovy scripts, there may be conflicts or inconsistencies in Shutdown Hook order and behavior.

### Version 9.863951

Support property file encryption.

### Version 8

Added support for encrypted property files.

### Version 7.785238

Version 7 includes translated content.

### Version 6.671137

This release includes a fix for a defect that is related to running Groovy on Microsoft Windows.

