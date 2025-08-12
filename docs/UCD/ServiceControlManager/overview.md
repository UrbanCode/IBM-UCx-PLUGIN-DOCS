
# Microsoft Windows Services - Overview


The Microsoft Windows Services plug-in includes steps to manage Windows Services. Use this plug-in to start, stop, create, and get status on services that are running on a computer that is running the Microsoft Windows operating system.

To add the Microsoft Windows Services plug-in steps to processes, click **System Utility > Windows > ServiceControlManager** in the step palette of the process editor.

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in supports agents running on Microsoft Windows.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 12

* Log4j and Jettison dependency updated.

### Version 11

* Add compatibility with Groovy 3.

### Version 10

* Fixed APAR PH08938 - Updated collectAll to collectNested for compliancy with Groovy 2.4.15.

### Version 9

* Support property file encryption.

### Version 8

* Add timeout to stop service step and have it check service status before attempting to stop the service so it doesn't fail on already stopped services.
