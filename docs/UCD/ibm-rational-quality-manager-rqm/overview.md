
# IBM Rational Quality Manager (RQM) - Overview


The Rational Quality Manager plug-in includes steps that run tests and test suites in Rational Quality Manager.

To add the Rational Quality Manager plug-in steps to processes, click **Quality > RQM** in the step palette of the process editor.

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.


## Installation

No special steps are required for installing this plug-in. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

The [Rational Quality Manager Command Line Execution tool](https://jazz.net/wiki/bin/view/Main/RQMExecutionTool) and [Rational Quality Manager URL Utility](https://jazz.net/wiki/bin/view/Main/RQMURLUtility) are required to run the RQM plugin. Please view the troubleshooting tab for detailed download and configuration instructions.

## History

### Version 11


Version 11 includes the following updates:

* User must now specify the location of a location RQMUrlUtility.jar that matches their version of RQM. This allows support for all RQM versions.
* Updated method for validated RQM jars.

### Version 10


Version 10 includes the following updates:

* New conciseExecutionResults output properties detailing each tests title and result status.

### Version 9


Version 9 includes the following updates:

* The Result URL output property will be set if found.
* New output properties will display the ID and result of each Execution and Test Suite Result.
* If -exitOnComplete=true or -printResultUrl=true is not provided as an additional argument, it will be set automatically.

### Version 8


Version 8 includes the following update:

* Support property file encryption.

### Version 7


Version 7 includes the following update:

* Steps now output Project Name, Test Suite Execution Record ID, and Test Case Execution Record ID.

### Version 6


Version 6 includes the requirements of specifying a local RQMExecutionTool.jar that matches the RQM version in use. This allows support for all RQM versions.


### Version 5


Version 5 includes an update to the RQMExecutionTool.jar file to provide support new test suite result statuses.


### Version 4


Version 4 includes support for specifying adapters by name, and fixes APAR PI54019Error using Rational Quality Manager version 3 in IBM DevOps Deploy 6.2.


### Version 3


This release of the plug-in includes a fix for a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later, and a fix for an issue where steps succeed even when the test execution record fails.

