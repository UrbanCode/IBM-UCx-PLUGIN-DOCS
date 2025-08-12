
# HCL-ASOC UCD PLugin for UCD

## This is a open-source Plugin. Link: https://github.com/UrbanCode/HCL-ASoC-UCD

HCL Launch can process the output of the ASoC plugin and treat the build accordingly. If your build was deployed successfully to a lower level environment but failed the Dynamic ASoC scan with high severity issues, HCL Launch will automatically rollback to the last deployed version and mark the build with a status indicating there are problems. If ASoC identifies lesser severity issues in your build, HCL Launch with slap a “deployment warning” onto it but leave it installe don the target machines. And if ASoC spots no major issues, HCL Launch will give that version an app status that signifies it’s passed all AppScan scans. In other words, HCL Launch creates environment gates that can prevent deployments to Prod or other high-level environments if it doesn’t pass AppScan approval.


## History

### Version 14

* Fixed a json parser related issue.
* Base appscan url property added for all steps


### Version 13


* Plugin renamed to HCL AppScan on Cloud.
* Preemptively renew login token after one hour when waiting for Scan completion. ASoC default token timeout is two hours.
* Added new 'Scan Name' property to the Start Dynamic Analyzer ASoC Scan step.


### Version 12

Updated to the new ASoC domain 'cloud.appscan.com'.

### Version 11

Set high, medium, low, informational issue count output properties on dynamic scan.

### Version 10

* Complete rewrite of former plugin to fix broken scan steps.
* Added Application ID property to scan steps.
* Changed authentication to API tokens as opposed to IBM IDs.
* Added support for scan templates for DAST/MAST scans.
* Added steps for creating, deleting, starting, and stopping presences.
* Added support for running scans on private applications using presences.
* Added third credential for DAST/MAST scans.
* Added support for Staging and Production DAST scans.


### Version 9

Remove old deprecated "projectLocation" and "workspaceScheme" fields from "Start iOS Scan" step ("ipaFileLocation" already replaced them)

### Version 8

Add "testPolicy" to "Start Dynamic Analyzer ASoC Scan" step. Migrate the "Start iOS Analyzer ASoC Scan" from working with IPAX generator, to working with "ipa" file

### Version 7

Add step "Start iOS Analyzer ASoC Scan"

### Version 6

Rename the step "Start Mobile Analyzer Scan" into "Start Android Mobile Analyzer ASoC Scan"

### Version 5

Rename plugin from "Application Security Testing (Smartcloud Exchange)" to "IBM Application Security on Cloud" and add  support for running a DAST(Domain Verification not supported) and SAST scans

### Version 4

Upgrade to http-builder-0.7.2-uc.jar, and change our portal domain from appscan.bluemix.net to appscan.ibmcloud.com

### Version 3

Changing our portal domain from appscan.ibmcloud.com to appscan.bluemix.net (and adding hidden experimental feature 'PSS')

### Version 2

Migrate internal logic to work with cloud V2 APIs

### Version 1

Initial release of the plug-in.


|Back to ...||Latest Version|HCL-ASOC UCD PLugin for UCD|||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1152459](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ASOC/ucd-HCL-ASoC-UCD-14.1152459.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
