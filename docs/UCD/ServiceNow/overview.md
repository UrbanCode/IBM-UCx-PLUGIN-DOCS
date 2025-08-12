
# ServiceNow - Overview

## Details

ServiceNow supports application delivery by integrating service management processes, social collaboration for IT departments, software-as-a-service delivery, and web functionality.

The ServiceNow plug-in includes steps that check approvals and set the status of change requests.

To add the ServiceNow plug-in steps to processes, click **ITSM Process > ServiceNow** in the step palette of the process editor.

[Follow this link](https://www.youtube.com/watch?v=7Vp1bnnkOps) to learn how to generate the Client-ID and Client-Secret for authenticating the plugin using Oauth 2.0

### Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in works with the Eureka release of ServiceNow and later.

### Interface

This plug-in integrates with ServiceNow by using version 1 of the ServiceNow REST API. The plug-in requires that the user account has access to the REST API and to the relevant tables.

### Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

### History

#### Version 40

RFE - URBANCODE-I-648 Added checkbox for Check Extension Window to compare with end date.

#### Version 39

RFE - URBANCODE-I-557 Implement OR on the key(any key).

#### Version 37

RFE URBANCODE-I-557 .

#### Version 36

Implemented OR condition for check fileds in the Check Records steps.

#### Version 35

Implement Condition on Record Number .

#### Version 34

RFE URBANCODE-I-537 .

#### Version 33

Check Deployment Window Steps issue resolved with correct mapping of the date.

#### Version 32

Status mapping updated .

#### Version 31

Updated log4j dependency.

#### Version 30

RFE - RFE URBANCODE-I-434: The state details in the logs improved for Check-Change-Request-State step

#### Version 29

RFE - Add Oauth 2.0 authentication mechanism to ths plugin.

#### Version 28

RFE 122276: Add property to each step to allow invalid SSL certs.

#### Version 27

RFE 116821Added the ability to specify custom date fields in the Check Deployment Window step.

#### Version 26

Added URL output property to create, check, and update records steps.

#### Version 25

Fixes APAR PI90696Added apache commons lang3 dependency for proxy issue.

#### Version 24

Updated Check Deployment Window to compare times in UTC before converting to local system time.

#### Version 23

* Fix APAR PI87057Set Task Status to accept Task Number instead of SysId.
* Updated Check Change Requests Child Tasks States to accept multiple states.

#### Version 22

Fix generic CRUD steps to work correctly for all tables, other than change\_request. Minor naming and documentation updates.

#### Version 21

Version 21 of the plug-in now supports the following features:

* RFE 105985: Steps now use Record Number instead of sys\_id.
* Step names now more consistent with Service Now field values.
* New step for checking if time falls within deployment window.
* Plug-in no longer supports Service Now Dublin release.

#### Version 20

Fixes APAR PI83136. Improved plug-in error logging.

#### Version 19

Update check specific methods to accept release names: Geneva, Helsinki, and Istanbul.

#### Version 18

Added Check Change Request Fields step.

#### Version 17

Fixed bug when checking for fields and value equality in Check Records step.

#### Version 16

Improved error logging and various bug fixes.

#### Version 15

Support property file encryption.

#### Version 14

Deprecated steps are no longer deprecated.

#### Version 13

This version supports full record create, read, update and delete (CRUD) operations as well as query operations. Steps and properties were renamed for clarity and consistency. The following steps were added:

* Check Records
* Query Records
* Update Records

The following steps are deprecated:

* Check Approval Status
* Check Change Request Status
* Check Change Requests Child Tasks Statuses
* Delete Multiple Table Records
* Set Change Request Status
* Update Tasks Statuses

#### Version 11

This version uses manual API checking. This version also enforces tighter passing constraints to protect against false positives in some scenarios.

#### Version 10

This version includes a fix for a defect related to the ServiceNow REST API in the Eureka and Fuji releases. This version of the plug-in automatically checks the ServiceNow API version.
