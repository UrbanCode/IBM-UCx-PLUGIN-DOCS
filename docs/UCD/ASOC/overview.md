
# Overview

## This is a Enterprise plugin of the AppScan on Cloud

DevOps Deploy can interpret the results produced by the ASoC plugin and adjust the build outcome accordingly. If a build is successfully deployed to a lower environment but fails the Dynamic ASoC scan due to high-severity issues, DevOps Deploy automatically rolls back to the previously deployed version and flags the build with a problem status. When ASoC detects lower-severity issues, DevOps Deploy applies a “deployment warning” while keeping the build installed on the target systems. If no significant issues are found, DevOps Deploy marks the version as having successfully passed all AppScan checks. Essentially, DevOps Deploy establishes environment gates that can block deployments to production or other higher environments if AppScan approval is not met.

### Compatibility

This plug-in requires version 7.2.0 or later of DevOps Deploy.

This plug-in works with the latest version of AppScan on Cloud.


## History

### Version 15

* Updated api from v2 to v4.
* Created enterprise version of the plugin
* Added Software Composition Analysis (SCA) ASoC Scan Capability

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
* Changed authentication to API tokens as opposed to IDs.
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

