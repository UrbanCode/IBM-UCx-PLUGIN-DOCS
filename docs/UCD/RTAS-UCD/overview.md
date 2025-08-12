
# IBM Rational Test Automation Server (RTAS) - Overview

The IBM Rational Test Automation Server plug-in provides the capability for test automation when you use Rational Test Workbench. It allows you to integrate testing of complex application environments much earlier in the development lifecycle.

## Compatibility

This plug-in is compatible with Rational Test Workbench v9.2 or higher.

The plug-in is compatible with IBM DevOps Deploy and Rational Test Control Panel Ant client agents.

This plug-in is not compatible with agents on z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

**Note:** You can install this plug-in without migrating or upgrading the last version of the plug-in. The previous plug-in version was called GreenHat.

## Known limitations

The [Start scenario](#start_scenario) and [Stop scenario](#stop_scenario) steps do not work within a transient environment.

## History
### Version 3
- Adherence to Execution API changes.
- The plug-in step execution status reflects the test execution status.
- Added new parameters for execution, such as datasets, variables, labels, secrets collection, and so on.

### Version 2
Updates to allow only secure API calls.
### Version 1
Initial release of the IBM Rational Test Automation Server plug-in.
