
# SQL-JDBC - Overview

The SQL-JDBC plug-in automates SQL script runs by using a JDBC driver in a deploy process.

This plug-in includes two steps:

* Execute SQL Scripts
* Execute SQL Scripts with PassTicket Authentication

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later. As of version 9,Prepared Statements and Stored Procedure Calls are not supported.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 13

Log4j and Jettison dependency updated.

### Version 11.986478

Fixes APAR PI96061: Add step properties allowing the user to specify SQL script encoding.

### Version 10.953267

Added ability to keep formatting.

### Version 9.917358

Plug-in now supports callable statements.

### Version 9.879670

Added two new properties to both plug-in steps:

* Show Warnings: Send warnings to the standard output logs.
* Treat Warnings as Errors: If selected, SQL Warnings will be treated as errors.

### Version 8

Support property file encryption.

### Version 7

This release includes a fix for a class resolution error.

### Version 6

This release includes a new step to run SQL scripts using PassTicket authentication.

