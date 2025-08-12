
# Oracle SQLPlus - Overview

The Oracle SQL\*Plus plug-in includes steps that run SQL scripts during deployment.

## Compatibility

The DevOps Deploy automation plug-in for Oracle SQL\*Plus works with Oracle 11 and later.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

**Important:** If you use the SYS account to run SQL scripts, add the suffix as sysdba to the Connection ID field.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 24

* Handling missing file issue.

### Version 23

* Updated log4j and jettison dependencies.

### Version 22

* Fixed APAR PH42585 - Improved handling of connection passwords containing special characters. The @ character in a password may not be compatible with all versions of the sqlplus client.

### Version 21

* Fixed APAR PH38827 - Wildcard issue and modified description in UI.

### Version 20

* Fixed APAR PH19241Avoid memory leaks by streaming file contents instead of storing them in memory.

### Version 19

* Fixed APAR PH18690Null file references. Added option to skip SQL error checking.

### Version 18

* Added support for @@ for SQL\*Plus UCD plugin.

### Version 17

* RFE 47981Added a password script field that can be used to retrieve the password for database authentication.

### Version 16

* Fixed APAR PH03192Plugin now reports PLS compilation errors.

### Version 15

* Adding support for args when specifying SQL scripts.

### Version 14

* Fixed exceptions to bubble up instead of printing a potentially unrelated error message.

### Version 13

- Fixed falsely reported compilation errors.

### Version 12

- Fixed error when separating SQL files by commas.

- Fixed bug, reintroduced in version 10, when using wildcards in Run SQLPlus script step.

### Version 11

- Added error handling; step will now fail when ORA- messages are received.

### Version 10

- Added error handling; step will now fail when SP2- errors or compilation errors are received.

### Version 9

- Support property file encryption.

### Version 8

- Authentication through Oracle Wallet support.

- Added functionality for additional environment variables.

### Version 7

- Fixed bug with using wildcards in Run SQLPlus script step.

### Version 6

- Add step for running SQL control files.

### Version 5

- Add support for wildcards when specifying SQL scripts.

|Back to ...||Latest Version|Oracle SQLPlus ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1163812](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQLPlus/ucd-SQLPlus-24.1163812.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
