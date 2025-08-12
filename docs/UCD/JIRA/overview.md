
# JIRA for IBM DevOps Deploy - Overview

The JIRA plug-in includes steps to automate working with JIRA issues as a process step.

This plug-in includes these steps.

* [Add Comments](#add_comments)
* [Check Status](#check_status)
* [Create Issue](#create_issue)
* [Edit Issue](#edit_issue)
* [Transition Issue](#transition_issue)
* [Does issues exist](#does_issues_exist)

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in runs on all operating systems that DevOps Deploy supports.

For JIRA version older than v5.0, please use plugin v5 which uses the SOAP API.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 19

* RFE - URBANCODE-I-635.

### Version 18

* RFE - URBANCODE-I-586.

### Version 17

* Log4j and Jettison dependency updated.

### Version 16

* RFE 146322 – Modified “project” field in “Does issues exists” to handle multiple project keys.

### Version 15

* RFE 144997 – Add “project” field to step “Does issues exists”.

### Version 14

* RFE 143944 – Add support for “Does issues exists for an issue type and mark failure if they exist otherwise success”.

### Version 13

* RFE 119842Add support for setting additional standard and custom field values on issue create/transition.
* Rename the Update Issue step to Transition Issue.
* Add a new Edit Issue step, for editing fields on an existing issue.
* When creating an issue, only set the Due Date field if the specified project and issue type allow it.

### Version 12

Fix issue with setting proxy port.

### Version 11

Add the ability to trust all certificates.

### Version 10

Fixes APAR PI84297: Fix response text encoding.

### Version 9

* Fixes APAR PI79900Support added for Http Web Proxies.
* Added ability to create issues with Parent IDs and attach labels.
* The Create Issues step now uses a text box, instead of a select box, to define Properties. All steps will need to be updated with the appropriate priority label.

### Version 8

Support property file encryption.

### Version 7

Updated step and property descriptions.

### Version 6

Fixes Story 107389Change WSDL/SOAP to RESTful services. The REST API requires JIRA v5.0+. For JIRA version older than v5.0, please use plugin v5.

### Version 5

Fixes APAR PI37115Steps failing with Assertion Error

### Version 4

Fixes APAR PI35342compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 3

The JIRA integration provides component process steps to create, comment and resolve issues found in JIRA and publish a list of issues that were addressed in the deployment.


|Back to ...||Latest Version|JIRA for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[19.1167047](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/JIRA/ucd-JIRA-19.1167047.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
