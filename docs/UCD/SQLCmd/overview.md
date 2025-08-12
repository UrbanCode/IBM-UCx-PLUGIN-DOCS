
# Microsoft SQL Server SQLCmd - Overview

The Microsoft SQL Server SQLCmd plug-in automates the execution of the Microsoft  utility as a process step.

The  utility is included with the Microsoft SQL Server. It is a command-line application that provides access to the management features of the Microsoft SQL Server.

This plug-in includes one step:

* [Run SQLCmd scripts](#run_sqlcmd_script)

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later. This plugin supports Microsoft SQL Server 2012, 2014, and 2016+.

This plug-in runs on the Windows operating systems that DevOps Deploy supports.

**Note:**The SQL-JDBC plug-in can be used to deploy to Microsoft SQL from a Linux agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 10

Log4j and Jettison dependency updated.

### Version 8

Updated SQLCmd Executable Path description for clarity.

### Version 7

Added an Additional Arguments field to support SQLCmd 2014 and 2016+.

### Version 6

Support property file encryption.

### Version 5

Fixes APAR PI35342compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

