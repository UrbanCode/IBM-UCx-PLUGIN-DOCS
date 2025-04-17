# z/OS Utility

The z/OS Utility plug-in includes steps for retrieving and deploying IBM z/OS artifacts. It is installed and upgraded as part of the IBM DevOps Deploy server. This plugin will work with all the supported versions of UCD server/agents. There are some new features that are only supported if the agent is upgraded to those versions. If you attempt to use the feature that is not enabled for a version, process might fail with the message to upgrade the agent.

This plug-in requires agents that run on the z/OS platform and works with z/OS component versions in DevOps Deploy.
To learn how to create z/OS component versions in DevOps Deploy with data sets and HFS files on IBM z/OS, see [Creating z/OS component versions](https://www.ibm.com/docs/en/urbancode-deploy/7.3.1?topic=platform-creating-zos-component-versions).

The plug-in includes steps that are related to deploying and rolling back data sets and HFS files, such as the following steps:

* Deploy Data Sets
* Rollback Data Sets
* Cleanup Backup Files
* Remove All Versions
* Remove Redundant Versions
* Generate Artifact Information

The plug-in also includes steps that are related to running z/OS commands, submitting and tracking jobs, and working with data sets, such as the following steps:

* Submit Job
* Wait For Job
* Run TSO or ISPF Command
* Run MVS Command
* Allocate Data Set
* Copy Data Set
* Replace Tokens MVS
* Delete Datasets

The Submit Job and Wait For Job steps require the job server component (JMON server) that is included with IBM DevOps Deploy, Rational Team Concert, or Rational Developer for System z.
The Generate Artifact Information step scans version artifacts and generates text based on a template. The output text can be used as an input property to subsequent steps. Use the Generate Artifact Information step to batch-process data sets or members in a component version. You can also use the Generate Artifact Information step to select a subset of artifacts to process by applying filters on data set names, member names, deployment types, and custom properties.

For more information and examples, see the [Usage page in the plug-in documentation](usage.md).

|          Back to ...          |                                |                                                        Latest Version                                                         |                         |                                       |                   |                   |                           |
|:-----------------------------:|:------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|:-------------------------------------:|:-----------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [97.1175894](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-deploy/ucd-zos-deploy-97.1175894.zip) | [Overview](overview.md) | [Troubleshooting](troubleshooting.md) | [Steps](steps.md) | [Usage](usage.md) | [Downloads](downloads.md) |
