
# JBoss Application Server - Overview


The JBoss Application Server plug-in includes steps that manage JBoss Application Server, including application-related tasks and configuration tasks.

This plug-in requires JBoss Application Server.

The plug-in includes steps that are related to installing, configuring, and uninstalling applications, such as the following steps:

* Deploy Application
* Deploy JDBC Driver
* Add Data Source

The plug-in also includes steps that are related to configuring and maintaining JBoss Application Server and checking the status of applications, such as the following steps:

* Run Script
* Check Deployment Status
* Restart Server Group

## Compatibility

This plug-in requires version 6.0.1 of IBM DevOps Deploy.

This plug-in supports JBoss Application Server version 6.1 or later.

The steps in this plug-in do not run on IBM z/OS agents. This plug-in runs on all other operating systems that are supported by both IBM DevOps Deploy and by the JBoss Application Server jboss-cli tool.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 25

* Log4j and Jettison dependency updated .

### Version 24

* Fixed log4j vulnerability issue .

### Version 22

* Fixed APAR PH20233 No such property: helper for class: enable.

### Version 19

Version 19 adds: RFE 106319 Added controller port configuration argument to the Stop Server step.

### Version 18

Version 18 adds: Fixed APAR PI88903 Additional Arguments have updated to descriptions that describe their modification of the generated JBoss script, not JBoss CLI. Renamed Administrative Port to Management Port to better reflect JBoss documentation. Fixed APAR PI88920 Admin Host field on Check Deployment Status and Create Server step not being used properly.

### Version 17

Version 17 adds: Fixed Start JBoss step to work properly when a server configuration file is specified in Windows. Fixed Start JBoss step to print command line output and errors.

### Version 16

Version 16 adds: APAR PI85106: Start JBoss step now runs as a background process so that it doesnt timeout. Adds hidden Shell property to the Start JBoss step.

### Version 15

Version 15 adds support for property file encryption.

### Version 14

Version 14 adds: APAR PI71167: Restart Server step will correctly use the Administrative Port property. Restart Server step can restart a Domain Hostname. All steps print their script contents to the standard output log.

### Version 13

Version 13 adds new Additional Arguments property to all steps.

### Version 12

Version 12 fixes management port value in deploy application step.

### Version 11

Version 11 adds ability to pass hostname and administrative port to all steps.

### Version 10.694887

Version 10.694887 includes a Restart Server step and a fix for a defect related to the runtime name in the Deploy Application step.

### Version 9.596950

Version 9.596950 includes additional output for the Deploy Application and Deploy JDBC Driver steps.

### Version 9.554208

Version 9.554208 supports IBM DevOps Deploy version 6.0.1 and later. This release includes support for username/password authentication.

