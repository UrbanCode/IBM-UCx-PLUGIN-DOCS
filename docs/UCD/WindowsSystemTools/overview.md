
# Microsoft Windows System Tools - Overview

Use the Windows System Tools plug-in to automate various Windows system tasks as part of the deployment process.

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

This plug-in runs on all Windows versions that the IBM DevOps Deploy agent supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 24

Add compatibility with Groovy 3.

### Version 23

Adding missing classpath to the Check File Contents step.

### Version 22

Lowered the mandatory wait period for Windows 2012 machines using the Reboot step from 1 minute to 30 seconds. Support property file encryption.

### Version 21

This update adds the following functionality to the Create Windows Scheduled Task step:

* /U, /P, /RU, and /RP parameters have been added as hidden properties.
* An Additional Arguments parameter has been added as a hidden property.

### Version 20

This update adds support for safely shutting down an agent before reboot. Implemented specifically for Windows 2012 machines.

### Version 19

Fixed PI38873WINDOWS SYSTEM TOOLS DOES NOT LOG OFF SESSIONS IN DISCONNECTED STATE

### Version 18

Fixed PI32983WINDOWS SYSTEM TOOLS PLUGIN HAS A SPELLING ERROR (REG\_MUTLI\_SZ INSTEAD OF REG\_MULTI\_SZ) IN PLUGIN.XML

