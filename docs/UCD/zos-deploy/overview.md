# z/OS Utility

## Overview

The z/OS Utility plug-in includes steps for retrieving and deploying IBM z/OS artifacts.

This plug-in requires agents that run on the z/OS platform. The Submit Job and Wait For Job steps require the job server component that is included with IBM DevOps Deploy, Rational Team Concert, or Rational Developer for System z.

The plug-in includes steps that are related to deploying z/OS artifacts, such as the following steps:

* Copy Artifacts
* FTP Artifacts
* Deploy Datasets and USS Files
* Rollback Datasets and USS Files
* Cleanup Backup Files

The plug-in also includes steps that are related to running z/OS commands, submitting and tracking jobs, and working with data sets, such as the following steps:

* Submit Job
* Wait For Job
* Run TSO or ISPF Command
* Run MVS Command
* Allocate Data Set
* Copy Data Set
* Replace Tokens MVS

To learn how to import components from data sets in IBM z/OS, see [Deploying to the z/OS platform](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=integrating-deploying-components-zos-platform).

The plug-in also includes the Generate Artifact Information step, which scans version artifacts and generates text based on a template. The output text can be used as an input property for subsequent steps. Use the Generate Artifact Information to process data sets or members in a component version. You can also use the Generate Artifact Information step to select a set of artifacts to process, by applying filters on data set names, member names, deployment types, and custom properties.

The plug-in also includes steps that are related to managing redundant incremental versions, such as the following steps:

* Remove All Versions
* Remove Redundant Versions

### Compatibility

* IBM DevOps Deploy version 7.0.0 or later
* IBM DevOps Deploy agents on z/OS
* IBM z/OS version 2.4 or later with System REXX
* Starting with version 49 this plug-in requires Java 8 or above

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins). You must install and configure the z/OS deployment tools before you use the plug-in. To learn how to install and configure the z/OS deployment tools, see [Deploying to the z/OS platform](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=integrating-deploying-components-zos-platform). You must configure the job server component before you run the following steps: Submit Job and Wait For Job.

### History

#### Version 97

* Renamed `Deploy Data Sets` step to `Deploy Datasets and USS Files`
* Renamed `Rollback Data Sets` to `Rollback Datasets and USS Files`
* Skip backup option for a full type version

#### Version 96

* Backup and Rollback use `cp` command instead of `XMIT/RECEIVE` for `v2` format
* Fixed issue with setting output properties
* Set `socket timeout` to `15 minutes` to fix read timeout

#### Version 95

* Z Inventory update now supported based on Server version instead of Agent version
* Minor improvements in ISPF Gateway
* Removed input to pass library path in Submit Job and Wait For Job steps
* Removed duplicate logs during backup stage in Deploy Data set step
* Fixed Rollback issue when there are no resources in container
* Added deployType attribute to resource and container tag to Rollback Manifest file
* `Submit job`/`Wait for job` steps now throws exception when Job is not found instead of failing with timeout error

#### Version 94

* Added debug logging capability

#### Version 93

* Removed input to pass binder shared library path from Deploy datasets step
* Added option to pass retain days in Remove All Versions and Remove Redundant Versions steps
* Dependent groovy libraries are now shipped with plugin to avoid incompatibility issues as groovy versions differ by agent version.
* Performance improvements.
* Fixed UnsatisfiedLinkError error while running MVS Command with Java 17
* Enhancements in error handling when deploying v1 versions
* Fixed IncompatibleClassChangeError

#### Version 92

* Minor improvements in Runtime delta deployment
* Binder Path input is optional in Deploy Data sets step

#### Version 91

* Added support for single source to multiple targets mapping

> Read [Deploying To Multiple Target Datasets on z/OS](https://community.ibm.com/community/user/wasdevops/blogs/bharath-kumar3/2024/11/06/deploying-to-multiple-target-dataset-on-zos) for more details

* Improvements in ISPF gateway error handling
* User can set MAX-RC for copy dataset step
* Improvements in HFS Deployment
* Fixed PH62152 - RcException while allocating temporary datasets

#### Version 90

* Inventory Delta-deploy is now timezone agnostic
* Minor code improvements 
* PH60517 - Inventory Delta deploy discards the number of HLQ set in component configuration during artifact comparison
* Fixed bug with Rollback when two or more source PDS mapped to same target during deployment
* Rollback Program ported from Groovy to Java
* Dataset Mapping that have DUMMY as target containers are not checked for R/W access

#### Version 89

* Added new input to TSO/ISPF step to pass temporary DSN prefix
* Removed ibmjzos jar from the plugin as it is shipped with IBM Java for z/OS
* Fixed PH59773 - Deploy data sets step does not skip backup when the latest version is deployed again

#### Version 88

* Fixed PH57595 - ROLLBACK DATASET STEP DELETES PDS AFTER DELETING ALL THE NEWLY CREATED MEMBERS DURING DEPLOYMENT
* Minor improvements
* Huge improvements in Rollback Manifest XML file generated during deploy data sets step with backup enabled
* Fixed APAR PH57385 - Error deploying version.Status code - 400
* Exit Restore Backup step with a warning when there is no datasets backup

#### Version 87

* Added new plugin step - Restore Backup Datasets
* Use Legacy ISPF Gateway to run programs by default
* Fixed NoSuchMethodError during HFS deployment
* Improvements in Submit Job and Wait For Job steps.
  **Note:** As part of the improvement, the order of authentication method is changed to below
  1. Use Agent/Impersonation Id
  2. Use PassTicket
  3. Use Password

#### Version 86

* Removed support for Submit Job and Wait For Job steps to run outside the mainframe systems
* Fixed APAR PH57188 - SUBMIT JOB INCORRECT FORMATTING WHEN JCL LINE EXCEEDS 72 CHARACTERS

#### Version 85

* Minor improvements in New Package Format Deployment and Deleting Datasets
* Added input to pass Ispf Gateway Path for Deploy Data sets step

#### Version 84

* Fixes output buffering issue when TSO/ISPF command prints too much output.
* Added deployment action filter and new loop type to exclude Deleted missing PDS members
* Fixed a typo with deploy type in generate artifact info step
* Added check for Target Dataset Filter to allow only dataset or member loop types

#### Version 83

* Added new input to enable or disable PDS member replace during deployment
* Fixed issue with cleanup
* Fixed Null Pointer Exception in Generate Artifact information step

#### Version 82

* Fixes CVE-2023-1436 and APAR PH53341 

#### Version 81

* Fixed APAR PH53341 related to parsing error when deploying zOS versions

#### Version 80

* Fixed issue with agent version check and minor improvements

#### Version 79

* Updates deployed artifacts to ZInventory when run on agent versions above 730 

#### Version 78

* Fixes vulnerability CVE-2022-45693 and CVE-2022-45685
* Fixed JMON issue -
  BUZ300E Internal error: Unknown client protocol level.
  FEJ300E Internal error: Unknown client protocol level.

#### Version 77

* Minor improvements
* Fixed issue with deleted containers for generating artifact information

#### Version 76

* Support for deleting members from PDS which is in contention
* Fixes vulnerability CVE-2021-37533

#### Version 75

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

#### Version 74

* Added new step to clean-up backup files 

#### Version 73

* Fixed issue with replacing token for each job and minor improvements

#### Version 72

* Added support for deleting multiple datasets using Delete dataset step
* Fixed security issue CVE-2021-29425

#### Version 71

* TSO ISPF command and FTP Artifacts step migrated to Java
* PH46505 Fixed issue with filtering containers mapped to same Target PDS in Generate Artifact step

#### Version 70

* Wait For Job and MVS Command steps are migrated to Java
* Fixed issue with Java 11 to run shell script

#### Version 69

* Added new step to delete dataset/PDS members

#### Version 68

* Update udclient and uDeployRestClient
* Fixed issue with GDG version creation in Allocate Steps

#### Version 67

* Minor improvements.

#### Version 66

* Remove All Versions and Remove Redundant Versions steps are migrated to run on Java for performance improvements.
* Added checkbox for Dry run in Remove All Versions step.

#### Version 65

* Copy Artifacts and Copy Data Set steps are migrated to run on Java for performance improvements.

#### Version 64

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

#### Version 63

* Minor enhancements in Submit Job and Wait For Job steps
* Fixed handling of temporary datasets in case of failure in new package format
* Minor Improvments in new package format
* Fixed ZFileException while cleaning up unclosed temporary dataset
* Fixed IGD17036I in new package deployments

#### Version 62

* Added check box to delete dataset if already exist for Allocate steps

#### Version 61

* Allocate data set steps are rewritten in Java for better performance

#### Version 60

* Enhancements and bug fixes for HFS deployment and rollback – APAR PH42431

#### Version 59.1126010

* Fixed HFS untar issue for Ant version upgrade

#### Version 59.1125740

* Fixed APAR-PH41930 Parsing return codes from ISPF gateway has been enhanced

#### Version 59.1125359

* Fixed Page End statement in submit job step to display after output

#### Version 59.1125062

* Fixed APAR PH41991 added support for JOBRC parameter in submit job step

#### Version 59.1125008

* Changed Prevent Risky Rollback input in Rollback step from check-box to Drop-Down

#### Version 58.1122539

* Added support to run Wait For Job step using Agent Id or Impersonation Id

#### Version 57.1121803

* Reformatted checkaccess error message

#### Version 57.1121798

* Fixed PH39119 – Rollback step failing with version not deployed error after a failed deployment

#### Version 57.1121666

* Added support for submitting job using Agent Id or Impersonation Id

#### Version 56.1102074

* Fixed newline character parsing in Generate artifact template input

#### Version 56.1100633

* Fixed PH35042 – Fixed Array index Out Of Bound failure

#### Version 56.1098848

* Fixed PH34874 – Fixed the issue of ISPF command executions reported as success when it is a failure

#### Version 56

* Deploy datasets – now accepts DUMMY in pdsmapping target.
+ Input in pds mapping field can be of the format src.dataset,DUMMY

#### Version 55

* Added hidden input to pass Binder API Path for RUNTIME delta deployment to add to LIBPATH. (APAR PH31349)
* Added check box to print debug logs for Deploy and Rollback steps
* Added check box to print each job output in a new page in submit job plugin step (Needs Java 8)

#### Version 54

* Ported following steps to run from a non-zOS agent as well
+ Submit job
+ Wait for job
* Moved FTP plugin step into a new plugin ( https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-ftp/ )
* Added permission checks for ISPF work directory and file
* Fixed incompatible code with Java 7 (Earlier versions of this plugin required Java 8. Based on a request, we ported the plugins to run with Java 7 & 8 as well.
* Enhancement on runtime delta deployment
* Fixed exception for HFS deployment and Rollback with new Ant version (That was introduced in UCD 7.1.0.1)
* Minor bug fixes in HFS deployment / Rollback operations

#### Version 53

* Enhancement for Partial Deployment based on Container Filter
* Fixed exception for HFS Deployment with previous HFS version (PH27636)

#### Version 52

* PH24188 – Fixed deployment freeze for large component version
* Support for copyTypes with package format v2
* Enhancement to ignore unresolved properties in generate artifacts information step

#### **Note:** From version 51, groovy string methods are not interpreted in Template input since the code is rewritten in Java.

#### Version 51

* Rewriting Generate Version Artifact Information groovy program in Java.
* Fixed null pointer exception error when deployType filter is applied to resource with no deployType
* Fixed null pointer exception error when regular expression is used in deployType
* PH23624 – Fixed NoClassDef error for submit job step using passcode authentication

#### Version 50

* Rewriting Replace Tokens MVS plugin from Groovy to Java for performance improvement

#### Version 49

* Submit Job groovy plugin rewritten in Java
* Added functionality to delete all contents in the target HFS folder and then deploy the artifacts from UCD version
* Added functionality to determine the toolkit version and call appropriate methods and fixed an issue with rollback for deleted HFS files
* Required Java 8 or above from this plugin version

#### Version 48

* PH11769- Fix for replace tokens with EAV VTOC volumes & improved performance for new package format

#### Version 46

* Added functionality for the new package format deploy

#### Version 45

* Fixing CVE:CVE-2019-4233

#### Version 44

* Allowing mutiple source and multiple target directories to deploy instead of one HFS Target directory. NOTE: DevOps Deploy server 7.0.3 and the same level of the agent are required for using this HFS feature.

#### Version 41

* Updated Deploy Data Sets step to support runtime delta deploy. NOTE: DevOps Deploy server 7.0.2 and the same level of the agent is required for using this runtime delta deploy feature.

#### Version 39.1001623

* PH03567 To fix the issue of environment properties getting trimmed in Replace Tokens MVS step
* PH03684 To fix the issue when a REXX/ISPF process that gives out more than 2000+ lines are run from UCD, the response never comes back to the server

#### Version 39.992980

* PH01955 Fixed the issue with deploy datasets failing when we use \* with an add and delete of same PDS
* PH01081 Fixed the issue with class not found for JES logger

#### Version 27.864857

Added support for encrypted input and output properties. Updated Replace Tokens MVS step to preserve ISPF statistics. Fixed bugs.

#### Version 26.813109

Updated Generate Artifact Information step to support order by.

#### Version 24.800369

Version 24 includes the following updates:

* A fix for a problem that is related to replacing tokens in VB data sets.
* The Rollback Data Sets step was updated to prevent risky rollbacks.

#### Version 22.787240

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self-signed certificates.

#### Version 17.692574

This release includes the following updates:

* A fix for an issue where the deployment data set and rollback data set unnecessarily requires data set ALTER privilege.
* The Generate Artifact Information step now supports sequential data sets and data set deletion.
* The Generate Artifact Information step now includes an option to mark the step as failed when no result is generated.
* A count output property now stores the number of artifacts generated.
* The Replace Tokens MVS step now allows updates to a data set that is opened by other readers. The step uses DISP=SHR to open the data set for output.
* The Submit Job step now supports a default job statement.
* Updated help for steps.
* A fix for an issue where the Submit Job step did not use PassTicket authentication.


|          Back to ...          |                                |                                                        Latest Version                                                         |    z/OS Utility     |                                       |                   |                   |                           |
|:-----------------------------:|:------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|:-------------------:|:-------------------------------------:|:-----------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [97.1175894](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-deploy/ucd-zos-deploy-97.1175894.zip) | [Readme](README.md) | [Troubleshooting](troubleshooting.md) | [Steps](steps.md) | [Usage](usage.md) | [Downloads](downloads.md) |
