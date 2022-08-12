
z/OS Utility
============

The z/OS Utility plug-in includes steps for retrieving and deploying IBM z/OS artifacts. It is installed and upgraded as part of the IBM UrbanCode Deploy server. This plugin will work with all the supported versions of UCD server/agents. There are some new features that are only supported if the agent is upgraded to those versions. If you attempt to use the feature that is not enabled for a version, process might fail with the message to upgrade the agent.

This plug-in requires agents that run on the z/OS platform.

The plug-in includes steps that are related to deploying data sets and HFS files, such as the following steps:

* Copy Artifacts
* FTP Artifacts
* Deploy Data Sets
* Rollback Data Sets
* Cleanup Backup Files

To learn how to import components from data sets in IBM z/OS, see [Deploying to the z/OS platform](https://www.ibm.com/docs/en/urbancode-deploy/7.2.1?topic=integrating-deploying-components-zos-platform).

The plug-in also includes steps that are related to running z/OS commands, submitting and tracking jobs, and working with data sets, such as the following steps:

* Submit Job
* Wait For Job
* Run TSO or ISPF Command
* Run MVS Command
* Allocate Data Set
* Copy Data Set
* Replace Tokens MVS

The Submit Job and Wait For Job steps require the job server component that is included with IBM UrbanCode Deploy, Rational Team Concert, or Rational Developer for System z.

The plug-in also includes the Generate Artifact Information step, which scans version artifacts and generates text based on a template. The output text can be used as an input property to subsequent steps. Use the Generate Artifact Information step to batch-process data sets or members in a component version. You can also use the Generate Artifact Information step to select a subset of artifacts to process by applying filters on data set names, member names, deployment types, and custom properties.

For more information and examples, see the [Usage page in the plug-in documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/overview.html).


|          Back to ...          |                                |                                                        Latest Version                                                         ||||||
|:-----------------------------:|:------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:| :---: | :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [74.1139650](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-deploy/ucd-zos-deploy-74.1139650.zip) |[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Steps](steps.md)|[Usage](usage.md)|[Downloads](downloads.md)|
