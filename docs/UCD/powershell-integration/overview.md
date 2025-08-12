
# PowerShell - Overview

The PowerShell plug-in provides a step for running user-defined PowerShell scripts.

To add the PowerShell plug-in steps to processes, click **Scripting > PowerShell** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for PowerShell works with PowerShell Version 4.0 and later.

This plug-in requires version 6.1.1 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 9

* Fixed APAR PH12966 Process fails when script doesn\t explicitly call \exit\.

### Version 8

* Fixed APAR PH01425 Exit command failing the plugin step.

### Version 7

* Updated copyright.

### Version 6

* Fixed APAR PI93408 Set-StepOutputProperties being overwritten by Groovy output properties.

### Version 5

* Fixed successful exit status to allow plugin step to succeed in post-processing.

### Version 4.770502

Version 4 of the plug-in includes the following features:

* Options and PowerShell Home properties are no longer hidden.
* Improved help descriptions.
* Added generic process example.

### Version 3.756775

The initial non-beta release of the plug-in. If you are a beta tester, reinstall the plug-in.

* Removed default verbose output for script. Use PowerShell preference variables in your script to control output.
* Removed the tutorial.
* Removed the argument fields.
* Added Options field to set PowerShell command arguments at script start.
* Set-StepOutputProperty command is now used as the de facto way to set an output property.

### Version 2.741854

The following features are included in second beta release of the plug-in:

* Default logging for scripts
* Improved help descriptions
* Tutorial uncommented and improved

