
SQL-JDBC - Overview
===================

The SQL-JDBC plug-in automates SQL script runs by using a JDBC driver in a deploy process.

This plug-in includes two steps:

* Execute SQL Scripts
* Execute SQL Scripts with PassTicket Authentication

### Compatibility

This plug-in requires IBM UrbanCode Deploy version 6.0.1 or later. As of version 9,Prepared Statements and Stored Procedure Calls are not supported.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode Deploy](https://www.urbancode.com/resource/installing-plug-ins-in-urbancode-products/ "Installing plug-ins in UrbanCode Deploy").

### History

#### Version 11.986478

Fixes APAR PI96061: Add step properties allowing the user to specify SQL script encoding.

#### Version 10.953267

Added ability to keep formatting.

#### Version 9.917358

Plug-in now supports callable statements.

#### Version 9.879670

Added two new properties to both plug-in steps:

* Show Warnings: Send warnings to the standard output logs.
* Treat Warnings as Errors: If selected, SQL Warnings will be treated as errors.

#### Version 8

Support property file encryption.

#### Version 7

This release includes a fix for a class resolution error.

#### Version 6

This release includes a new step to run SQL scripts using PassTicket authentication.


|          Back to ...          |                                |                                                    Latest Version                                                     |      SQL-JDBC       |||||
|:-----------------------------:|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [12.1100867](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQL-JDBC/SQL-JDBC-12.1100867.zip) | [Readme](README.md) |[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
