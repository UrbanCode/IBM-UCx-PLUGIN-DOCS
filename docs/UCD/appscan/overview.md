
# IBM AppScan Enterprise - Overview

The IBM AppScan Enterprise plug-in includes steps that run security scans and retrieve reports.

To add the IBM AppScan Enterprise plug-in steps to processes, click **Security > AppScan Enterprise** in the step palette of the process editor.

## Compatibility

Supports IBM Security AppScan Enterprise version 9.0.3 and greater. The webhook beta functionality was added in IBM Security AppScan Enterprise version 9.0.3.9

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 27

* Fixed bug that doesn't allow the download report as PDF after appscan upgrade.

### Version 26

* Modified timeout Logic for Retrieve PDF report.

### Version 25

* Added property ScanType for the Configure Job Options step.
* Modified timeout Logic for Retrieve report and Wait for scan step.

### Version 24

* Modified code to generate the report summary file as a json instead of xml as Appscan's Rest API to that gives proper xml response is deprecated.

### Version 23

* Fixed plugin code for retriving report summary file in xml format.

### Version 22

* Added Test policy Id as a input property to Create scan step.fixed defect to update correct testpolicyId while creating a scan.

### Version 14

* Added beta feature of AppScans Webhook configuration.
* Added Delete Folder Item step to enable the deletion of a Scan or Report.

### Version 13

**Retrieve PDF Report changes:**

* Added the pdfReportFilePath and detailsLink (reportURL) output properties to the Retrieve PDF Report step.

**Retrieve Report changes:**

* Specify report using the Report Name property. The issue counts are identified using the report name.
* Step now waits for Retrieve Report to enter READY state.
* Added the criticalSevIssuesCount, lowSevIssuesCount, detailsLink (reportsURL), reportSpecificURL, and scanStatus output properties to the Retrieve Report step.
* isReadyForDeployment output variable has been removed. Because each count is set to an output variable, implement a short script to set a personalized isReadyForDeployment logic.
* Output file now has a .xml extension to match the contents of the file.
* By default, the output file will be sent to the working directory.
* Hidden checkbox to print the output files contents to the output logs.
* Summary file is now created containing all general information of the report back. (Saved as FIID-Summary.xml)

**Run Step changes:**

* If Wait for Completion and FIID are specified and the timeout is exceed, the step will not look for the report.
* If retrieving the report in the Run Scan step, a default value of 0 issues is given for the Issues Allowed.
* ScanStatus output property has been changed to scanStatus.

**Wait For Scan or Report Pack changes:**

* Because the Retrieve Report step will wait for READY state, this step has been renamed to Wait for Scan.
* ScanStatus output property has been changed to scanStatus.

### Version 12

* New Wait for Scan or Report Pack step.

### Version 11

* The Wait for Scan Completion hidden property has been added to the Run Scan step. If selected, the step will wait for the scans completion status.
* The Stop Scan on Failure hidden property has been added to the Run Scan Step. If selected, the step will stop the scan if the scan fails or exceeds timeout.
* New output property ScanStatus will be specified on success or failure of the Run Scan Step.

### Version 10

Version 10 includes the following features:

* Fixes APAR PI84034If Run Scan exceeds timeout, the plugin will properly stop the scan.
* Updated logic to vary sleep time based on the amount of timeout left remaining. Maximum sleep interval is 2 minutes.
* Updated timeout to have a minimum of 5 minutes.

### Version 9

Version 9 includes the following features:

* Fixes APAR PI83388Set Automatic Login, HTTP Authentication, and Disable Certificate Validation properties now follow their specified configuration.
* Set Automatic Login and HTTP Authentication properties have been updated to a drop down selection allowing to enable, disable, or leave as default.

### Version 8

Fixes error when trying to create scan with a hyphen or period in the name.

### Version 7

Version 7 includes the following features:

* Added output properties reportFilePath, highSevIssues, mediumSevIssues, and isReadyForDeployment to Retrieve Reports step.
* Added required port input property to Retrieve PDF Report step.

### Version 6

Version 6 includes the following features:

* Fixed bug in Retrieve PDF Reports step. Step now allows retrieval of either an entire applications report, or the report of a single scan associated with an application.

### Version 5

Version 5 includes the following features:

* The Run Scan, Retrieve Reports, and Retrieve PDF Report steps were added.
* An error when setting Basic Authentication was fixed.
* Now supports property file encryption.

### Version 4

Version 4 includes the following features:

* Added option to Configure Job Options step which allows for a .htd recorded traffic file to be uploaded.
* Added option to rerun scan in case of failure.
* Added step to download PDF file(s) of an applications report.

### Version 3

Version 3 includes the following features:

* Added option to Configure Job Options step which allows for the login sequence type to be set.
* Fixed error when setting Basic Authentication for scan.

### Version 2

Version 2 includes the following features:

* The Create Scan, Configure Job Options, and List Available Templates steps were added.
* The base URL is now checked to ensure correct syntax.
* The Run Scan step output was edited.
* The Retrieve Reports step now saves reports as text files.

### Version 1

Initial release of the plug-in.


|Back to ...||Latest Version|IBM AppScan Enterprise |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[27.1174441](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/appscan/ucd-appscan-27.1174441.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
