# CICS TS - Troubleshooting


For more questions and answers, see the [DevOps forum](https://community.ibm.com/community/user/integration/communities/community-home?communitykey=9adfe6b6-2e23-4895-8b27-38b93b5e152c&tab=groupdetails "DevOps forum").

## Troubleshooting sections

- [CICS TS - Troubleshooting](#cics-ts---troubleshooting)
    - [Troubleshooting sections](#troubleshooting-sections)
    - [FAQ](#faq)
    - [Using the step logs](#using-the-step-logs)
    - [Resources which operate asynchronously](#resources-which-operate-asynchronously)
    - [Checking the status of a resource that was installed in the previous step](#checking-the-status-of-a-resource-that-was-installed-in-the-previous-step)
    - [Collecting data for plug-in problems](#collecting-data-for-plug-in-problems)
    - [Resolving Unsupported CICS release message](#resolving-unsupported-cics-release-message)
    - [Error loading plugin](#error-loading-plugin)

## FAQ

**If a step fails, is there a rollback mechanism provided?**

The CICS TS plug-in does not provide a specific rollback mechanism for a failed process or step. When a step fails, the context of the failure is important. First, check the step logs for more details on how the step failed. Then you can either manually rollback the relevant steps, or preferably, you can build and run a process that will take your environment back to the state it was in prior to the process having run.

## Using the step logs

Most failures can be detected by inspecting the step output logs in IBM DevOps Deploy. If an error occurs within the UCD set up, the step output log typically contains an error message similar to authentication failed, which often indicates an incorrect username and password.

If the problem is more CICS specific, the step output log will contain a message such as the following:


```
2015/03/10 10:28:35.703 GMT **BUZCP0030E** PROGRAM "DFHSJJI" was not found.

```

**BUZCP** is the prefix for all CICS TSplug-in messages. **0030** is the message number. **E|W|I** is the message level: error, warning, or informational.

An *Error* level message indicates the step failed with an error. A *Warning* level message indicates the step continued, but some properties may not be set correctly. An *Information* level message indicates progression of the step.

Where available, the log contains CICS RESP and RESP2 codes for more detailed troubleshooting:


```
2015/03/10 16:42:13.219 GMT BUZCP0006I Connected to "your.cicsplex.com:29000".
2015/03/10 16:42:13.638 GMT BUZCP0037I Perform DISCARD Operation.
2015/03/10 16:42:13.733 GMT BUZCP0026E DISCARD PROGRAM "DFHSJJI" failed.
2015/03/10 16:42:13.736 GMT BUZCP0031E EXEC CICS command **(DISCARD PROGRAM) RESP(NOTAUTH) RESP2(100)**.
2015/03/10 16:42:13.750 GMT BUZCP0029I Summary: 0 DISCARD request(s) succeeded, 1 DISCARD request(s) failed.

```

In this example, the Discard resources step fails for program DFHSJJI. The output of message BUZCP0031E lists the attempted EXEC CICS command, **DISCARD PROGRAM**, followed by the RESP and RESP 2 codes **NOTAUTH** and **100** respectively. You can find information on the command and response codes in the [DISCARD PROGRAM](https://www.ibm.com/docs/en/cics-ts/6.x?topic=commands-discard-program) topic of the CICS TS online production documentation.

Details for *any* EXEC CICS command and respective RESP and RESP2 codes are available in the [System Programming reference](https://www.ibm.com/docs/en/cics-ts/6.x?topic=system-programming-reference) section of the CICS TS online product documentation, sorted by command name.

**Note:** If the target scope of a step is more than one region, the step will fail when *one or more regions* fail to complete a request. Use the step log to determine the scope, then use the CICS logs to determine the specific regions in which the failures occurred, and confirm the cause.

## Resources which operate asynchronously

When a CICS TS plug-in step completes, it is generally true that the action also completes in CICS TS, as the operation is synchronous. However, there are a number of CICS resources where steps run asynchronously.

For an asynchronous operation, the step log shows *only* whether the plug-in successfully connects to CICS TS and makes the request, not if the operation completes successfully. You should check the status of the resource in CICS TS to confirm the success of an asynchronous operation.

Here is a list of steps, with respective resources that complete asynchronously:

**Disable resources** Bundle, File, DB2 Entry, Data Table.

**Enable resources** Bundle, JVM Server.

**Install BAS resource groups / Install CSD groups or lists / Install BAS resource descriptions** Bundle, Web Service, Pipeline, JVM Server.

**Install BAS resources**/**Install CSD resources** Bundle, Web Service, Pipeline, JVM Server.

**Close resources** Data Table, File, TCP/IP Service.

## Checking the status of a resource that was installed in the previous step

After a resource is installed in CICS, it might take a few seconds for the existence of the resource to be returned by CICSPlex SM. To help ensure that the steps which check the status of a resource return an accurate status, the default timeout value is 15 seconds. If you decrease this timeout value, the step might not return the correct status of the resource, and you might receive the following error:

`BUZCP0046E Resource "MYRESO01" does not exist in the target scope`

## Collecting data for plug-in problems

If you need to open a service request(SR)or problem management record (PMR), please collect the process logs associated with the failure and the logs for the UCD agent.

## Resolving Unsupported CICS release message

If you have recently updated CICS, you might receive the following error when you use the plug-in:

`BUZCP0043E Exception detailed message: Unsupported CICS release.`

To resolve this issue, upgrade to the latest version of the CICS TS plug-in.

## Error loading plugin

If you receive the following error:

`Error loading plugin: Value for property definition named 'resourceType' is not valid`

Add the parameter: com.urbancode.air.property.prop\_def.PropDef.disableAllowedValuesCheck=true


|          Back to ...          |                                |                                                      Latest Version                                                       |       CICS TS       ||||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [45.20240620-1707](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/CICS/cics-45.20240620-1707.zip) | [Readme](README.md) |[Overview](overview.md)|[Usage](usage.md)|[Component Templates](component_templates.md)|[Steps](steps.md)|[Downloads](downloads.md)|
