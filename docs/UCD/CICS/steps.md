# CICS TS - Process Steps


- [CICS TS - Steps](#cics-ts---steps)
  - [Process steps in the CICS TS plug-in](#process-steps-in-the-cics-ts-plug-in)
    - [Check available status of resources](#check-available-status-of-resources)
    - [Check enable status of resources](#check-enable-status-of-resources)
    - [Check open status of resources](#check-open-status-of-resources)
    - [Check status of an application](#check-status-of-an-application)
    - [Close resources](#close-resources)
    - [Deploy application](#deploy-application)
    - [Deploy bundle](#deploy-bundle)
    - [Disable application](#disable-application)
    - [Disable resources](#disable-resources)
    - [Discard resources](#discard-resources)
    - [Enable application](#enable-application)
    - [Enable resources](#enable-resources)
    - [Install BAS resource descriptions](#install-bas-resource-descriptions)
    - [Install BAS resource groups](#install-bas-resource-groups)
    - [Install BAS resources](#install-bas-resources)
    - [Install CSD groups or lists](#install-csd-groups-or-lists)
    - [Install CSD resources](#install-csd-resources)
    - [Make application available](#make-application-available)
    - [Make application unavailable](#make-application-unavailable)
    - [Make resources available](#make-resources-available)
    - [Make resources unavailable](#make-resources-unavailable)
    - [New copy resources](#new-copy-resources)
    - [Open resources](#open-resources)
    - [Phase in resources](#phase-in-resources)
    - [Scan pipelines](#scan-pipelines)
    - [Undeploy application](#undeploy-application)
    - [Undeploy bundles](#undeploy-bundles)
    - [Output properties](#output-properties)
    - [Overview of output properties](#overview-of-output-properties)
    - [The cics.response.errors output property](#the-cicsresponseerrors-output-property)
    - [How to view output properties](#how-to-view-output-properties)
    - [Use cics.response.errors in a post-processing script](#use-cicsresponseerrors-in-a-post-processing-script)
    - [Defining and deleting resource definitions](#defining-and-deleting-resource-definitions)
    - [Default input properties](#default-input-properties)

## Check available status of resources

Check if installed resources are available or unavailable. Requires CICS TS V5.2 or later.

| Name               | Type                               | Description                                                | Required |
|--------------------|------------------------------------|--------------------------------------------------------------------------------------------------------|----------|
| Expected Status    | Enumeration:AVAILABLE, UNAVAILABLE | The expecteds tatus.  | Yes      |
| Resource Name List | String                             | A comma-separated list of resource names.  | Yes      |
| Resource Type      | Enumeration:BUNDLE                 | The type of resource to check.             | Yes      |
| Timeout (s)        | String                             | The number of seconds to make retry attempts before a timeout occurs. The valid range is 0-1800, where 0 means no retry attempts are made. The default is 15 seconds | No       |

## Check enable status of resources

Check if installed resources are enabled or disabled.

| Name               | Type                                                                                                                                                                 | Description                                                                                                                                                          | Required |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Expected Status    | Enumeration:DISABLED, ENABLED                                                                                                                                        | The expected status.                                                                                                                                                 | Yes      |
| Resource Name List | String                                                                                                                                                               | A comma-separated list of resource names.                                                                                                                            | Yes      |
| Resource Type      | Enumeration:ATOMSERV, BUNDLE, CMDT, DB2ENTRY, EPADAPT, EPADSET, EVNTBIND, EXTRATDQ, INTRATDQ, JVMSERV, LIBRARY, LOCFILE, LOCTRAN, PIPELINE, PROCTYP, PROGRAM, URIMAP | The type of resource to check.                                                                                                                                       | Yes      |
| Timeout (s)        | String                                                                                                                                                               | The number of seconds to make retry attempts before a timeout occurs. The valid range is 0-1800, where 0 means no retry attempts are made. The default is 15 seconds | No       |

## Check open status of resources

Check if installed resources are open or closed.

| Name               | Type                                        | Description                                                                                                                                                          | Required |
|--------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Expected Status    | Enumeration:CLOSED, OPEN                    | The expected status.                                                                                                                                                 | Yes      |
| Resource Name List | String                                      | A comma-separated list of resource names.                                                                                                                            | Yes      |
| Resource Type      | Enumeration:CMDT, EXTRATDQ, LOCFILE, TCPIPS | The type of resource to check.                                                                                                                                       | Yes      |
| Timeout (s)        | String                                      | The number of seconds to make retry attempts before a timeout occurs. The valid range is 0-1800, where 0 means no retry attempts are made. The default is 15 seconds | No       |

## Check status of an application

Check if an installed cloud enabled CICS application is available, unavailable, enabled, or disabled. Requires CICS TS V5.1 or later.

| Name                   | Type                                                  | Description                                                                                                                           | Required |
|------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String                                                | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                          | Yes      |
| Application Version    | String                                                | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``.   | Yes      |
| Expected Status        | Enumeration:AVAILABLE, DISABLED, ENABLED, UNAVAILABLE | The expected status.                                                                                                                  | Yes      |
| Timeout (s)            | String                                                | The number of seconds to make retry attempts before a timeout occurs. The valid range is 0-1800. Leave this field blank to not retry. | No       |

## Close resources

Close installed resources.

| Name               | Type                                        | Description                               | Required |
|--------------------|---------------------------------------------|-------------------------------------------|----------|
| Resource Name List | String                                      | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:CMDT, EXTRATDQ, LOCFILE, TCPIPS | The type of resource to close.            | Yes      |

## Deploy application

Deploy a cloud enabled CICS application. Requires CICS TS V5.1 or V5.2 with APAR PI56706, or V5.3 or later.

| Name                          | Type                                     | Description                                                                                                                                                                    | Required |
|-------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Binding Directory | String                                   | The location of the CICS application binding project on zFS. The default value is ``${p:cics.platform.home}``/bindings/``${p:cics.application.binding.directory}``.            | Yes      |
| Application Definition        | String                                   | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                                                                   | Yes      |
| Application Directory         | String                                   | The location of the CICS application project on zFS. The default value is ``${p:cics.platform.home}``/applications/``${p:component.name}``\_``${p:cics.application.version}``. | Yes      |
| Description                   | String                                   | A description of the application definition. The default value is ``${p:component.name}``.                                                                                     | No       |
| State                         | Enumeration:AVAILABLE, DISABLED, ENABLED | The target state of the application.                                                                                                                                           | Yes      |
| Timeout (s)                   | String                                   | The number of seconds to make retry attempts before a timeout occurs. The valid range is 1-1800. The default value is 300.                                                     | No       |

## Deploy bundle

Deploy a CICS bundle. Requires CICS TS V5.1 or V5.2 with APAR PI56706, or V5.3 or later.

| Name                | Type                                     | Description                                                                                                                                                                                                  | Required |
|---------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Bundle Directory    | String                                   | The location of the CICS bundle on zFS.                                                                                                                                                                      | Yes      |
| Bundle Name         | String                                   | The name of the CICS bundle.                                                                                                                                                                                 | Yes      |
| Description         | String                                   | A description of the resource definition.                                                                                                                                                                    | No       |
| Group Name          | String                                   | The name of the resource definition group.                                                                                                                                                                   | No       |
| Resource Definition | Enumeration:BAS, CSD, NONE               | The location in which to create the resource definition. You can also choose not to define the resource.                                                                                                     | Yes      |
| State               | Enumeration:AVAILABLE, DISABLED, ENABLED | The target state of the bundle.                                                                                                                                                                              | Yes      |
| Timeout (s)         | String                                   | The number of seconds to wait for the bundle to deploy before a timeout occurs. Further processing of the bundle by CICS might occur after the timeout. The valid range is 1-1800. The default value is 300. | No       |

## Disable application

Disable an installed cloud enabled CICS application. Requires CICS TS V5.1 or later.

| Name                   | Type   | Description                                                                                                                         | Required |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                        | Yes      |
| Application Version    | String | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``. | Yes      |

## Disable resources

Disable installed resources.

| Name               | Type                                                                                                                                                                 | Description                               | Required |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|----------|
| Resource Name List | String                                                                                                                                                               | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:ATOMSERV, BUNDLE, CMDT, DB2ENTRY, EPADAPT, EPADSET, EVNTBIND, EXTRATDQ, INTRATDQ, JVMSERV, LIBRARY, LOCFILE, LOCTRAN, PIPELINE, PROCTYP, PROGRAM, URIMAP | The type of resource to disable.          | Yes      |

## Discard resources

Discard installed resources.

| Name               | Type                                                                                                                                                                                                                                                                                | Description                               | Required |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|----------|
| Resource Name List | String                                                                                                                                                                                                                                                                              | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:ATOMSERV, BUNDLE, CMDT, CONNECT, DB2CONN, DB2ENTRY, DB2TRN, DOCTEMP, EXTRATDQ, INDTDQ, INTRATDQ, IPCONN, JRNLMODL, JRNLNAME, JVMSERV, LIBRARY, LOCFILE, LOCTRAN, MQCON, PIPELINE, PROCTYP, PROGRAM, REMFILE, REMTDQ, TCPIPS, TERMNL, TRANCLAS, TSMODEL, URIMAP, WEBSERV | The type of resource to discard.          | Yes      |

## Enable application

Enable an installed cloud enabled CICS application. Requires CICS TS V5.1 or later.

| Name                   | Type   | Description                                                                                                                         | Required |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                        | Yes      |
| Application Version    | String | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``. | Yes      |

## Enable resources

Enable installed resources.

| Name               | Type                                                                                                                                                                 | Description                               | Required |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|----------|
| Resource Name List | String                                                                                                                                                               | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:ATOMSERV, BUNDLE, CMDT, DB2ENTRY, EPADAPT, EPADSET, EVNTBIND, EXTRATDQ, INTRATDQ, JVMSERV, LIBRARY, LOCFILE, LOCTRAN, PIPELINE, PROCTYP, PROGRAM, URIMAP | The type of resource to enable.           | Yes      |

## Install BAS resource descriptions

Install resource descriptions from the CICSPlex SM data repository using BAS.

| Name                      | Type   | Description                                           | Required |
|---------------------------|--------|-------------------------------------------------------|----------|
| Resource Description List | String | A comma-separated list of resource description names. | Yes      |

## Install BAS resource groups

Install resource groups from the CICSPlex SM data repository using BAS.

| Name                | Type   | Description                                     | Required |
|---------------------|--------|-------------------------------------------------|----------|
| Resource Group List | String | A comma-separated list of resource group names. | Yes      |

## Install BAS resources

Install resource definitions from the CICSPlex SM data repository using BAS.

| Name               | Type                                                                                                                                                                                                                                                                                                               | Description                                                     | Required |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|----------|
| Resource Name List | String                                                                                                                                                                                                                                                                                                             | A comma-separated list of resource names.                       | Yes      |
| Resource Type      | Enumeration:ATOMDEF, BUNDDEF, DB2CDEF, DB2EDEF, DB2TDEF, DOCDEF, EJCODEF, EJDJDEF, ENQMDEF, FILEDEF, IPCONDEF, JRNMDEF, JVMSVDEF, LIBDEF, LSRDEF, MAPDEF, MQCONDEF, PARTDEF, PIPEDEF, PROCDEF, PROFDEF, PROGDEF, PRTNDEF, RQMDEF, TCPDEF, TDQDEF, TERMDEF, TRANDEF, TRNCLDEF, TSMDEF, TYPTMDEF, URIMPDEF, WEBSVDEF | The type of resource to install.                                | Yes      |
| Version            | String                                                                                                                                                                                                                                                                                                             | The version of the resource to install. The default value is 1. | Yes      |

## Install CSD groups or lists

Install resources contained in groups or lists from the CSD.

| Name               | Type                          | Description                                          | Required |
|--------------------|-------------------------------|------------------------------------------------------|----------|
| Group or List      | Enumeration:CSDGROUP, CSDLIST | Specify whether to install from a CSD group or list. | Yes      |
| Group or List Name | String                        | A comma-separated list of CSD groups or lists.       | Yes      |

## Install CSD resources

Install resources from the CSD.

| Name               | Type                                                                                                                                                                                                                                                                                                               | Description                                                     | Required |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|----------|
| Group Name         | String                                                                                                                                                                                                                                                                                                             | The name of the group that the resource or resources belong to. | Yes      |
| Resource Name List | String                                                                                                                                                                                                                                                                                                             | A comma-separated list of resource names.                       | Yes      |
| Resource Type      | Enumeration:ATOMDEF, BUNDDEF, DB2CDEF, DB2EDEF, DB2TDEF, DOCDEF, EJCODEF, EJDJDEF, ENQMDEF, FILEDEF, IPCONDEF, JRNMDEF, JVMSVDEF, LIBDEF, LSRDEF, MAPDEF, MQCONDEF, PARTDEF, PIPEDEF, PROCDEF, PROFDEF, PROGDEF, PRTNDEF, RQMDEF, TCPDEF, TDQDEF, TERMDEF, TRANDEF, TRNCLDEF, TSMDEF, TYPTMDEF, URIMPDEF, WEBSVDEF | The type of resource to install.                                | Yes      |

## Make application available

Make an installed cloud enabled CICS application available. Requires CICS TS V5.2 or later.

| Name                   | Type   | Description                                                                                                                         | Required |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                        | Yes      |
| Application Version    | String | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``. | Yes      |

## Make application unavailable

Make an installed cloud enabled CICS application unavailable. Requires CICS TS V5.2 or later.

| Name                   | Type   | Description                                                                                                                         | Required |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String | The name of the CICS application definition. The default value is ``${p:cics.application.definition.name}``.                        | Yes      |
| Application Version    | String | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``. | Yes      |

## Make resources available

Make installed bundle resources available. Requires CICS TS V5.2 or later.

| Name               | Type               | Description                               | Required |
|--------------------|--------------------|-------------------------------------------|----------|
| Resource Name List | String             | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:BUNDLE | The type of resource to make available.   | Yes      |

## Make resources unavailable

Make installed bundle resources unavailable. Requires CICS TS V5.2 or later.

| Name               | Type               | Description                               | Required |
|--------------------|--------------------|-------------------------------------------|----------|
| Resource Name List | String             | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:BUNDLE | The type of resource to make unavailable. | Yes      |

## New copy resources

New copy installed program or doc template resources.

| Name               | Type                         | Description                                                                                              | Required |
|--------------------|------------------------------|----------------------------------------------------------------------------------------------------------|----------|
| Max Retry Times    | String                       | The maximum number of times to retry a new copy of the resource. A retry occurs when the new copy fails. | No       |
| Resource Name List | String                       | A comma-separated list of resource names.                                                                | Yes      |
| Resource Type      | Enumeration:DOCTEMP, PROGRAM | The type of resource to new copy.                                                                        | Yes      |
| Retry Interval (s) | String                       | The number of seconds to wait before retrying a new copy of the resource.                                | No       |

## Open resources

Open installed resources.

| Name               | Type                                        | Description                               | Required |
|--------------------|---------------------------------------------|-------------------------------------------|----------|
| Resource Name List | String                                      | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:CMDT, EXTRATDQ, LOCFILE, TCPIPS | The type of resource to open.             | Yes      |

## Phase in resources

Phase in installed program or bundle resources. Phase in for a bundle resource type requires CICS TS V5.3 or later.

| Name               | Type                        | Description                               | Required |
|--------------------|-----------------------------|-------------------------------------------|----------|
| Resource Name List | String                      | A comma-separated list of resource names. | Yes      |
| Resource Type      | Enumeration:BUNDLE, PROGRAM | The type of resource to phase in.         | Yes      |

## Scan pipelines

Scan installed pipeline resources.

| Name          | Type   | Description                          | Required |
|---------------|--------|--------------------------------------|----------|
| Pipeline List | String | A comma-separated list of pipelines. | Yes      |

## Undeploy application

Undeploy a cloud enabled CICS application. Requires CICS TS V5.1 or V5.2 with APAR PI56706, or V5.3 or later.

| Name                   | Type                                         | Description                                                                                                                         | Required |
|------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| Application Definition | String                                       | The name of the CICS application definition. The default value is {p:cics.application.definition.name}``.                           | Yes      |
| Application Version    | String                                       | The application version in major.minor.micro format (for example, 1.2.345). The default value is ``${p:cics.application.version}``. | Yes      |
| State                  | Enumeration:DISABLED, DISCARDED, UNAVAILABLE | The target state of the application.                                                                                                | Yes      |
| Timeout (s)            | String                                       | The number of seconds to make retry attempts before a timeout occurs. The valid range is 1-1800. The default value is 300.          | No       |

## Undeploy bundles

Undeploy CICS bundles. Requires CICS TS V5.1 or V5.2 with APAR PI56706, or V5.3 or later.

| Name                | Type                                         | Description                                                                                                                                                                                                   | Required |
|---------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Bundle Name List    | String                                       | A comma-separated list of bundle names.                                                                                                                                                                       | Yes      |
| Group Name          | String                                       | When the target state is Discarded, enter the name of the resource definition group in which the bundle is defined.                                                                                           | No       |
| Resource Definition | Enumeration:BAS, CSD, NOT                    | When target state is Discarded, choose the location of the resource definition to delete. You can also choose to NOT delete the resource definition. The default action is to delete the resource in CSD.     | Yes      |
| State               | Enumeration:DISABLED, DISCARDED, UNAVAILABLE | The target state of the bundle.                                                                                                                                                                               | Yes      |
| Timeout (s)         | String                                       | The number of seconds to wait for each bundle to undeploy before a timeout occurs. Further processing of a bundle by CICS might occur after the timeout. The valid range is 1-1800. The default value is 300. | No       |

## Output properties

* [Overview of output properties](#overview-of-output-properties)
* [The cics.response.errors property](#the-cicsresponseerrors-output-property)
* [How to view output properties](#how-to-view-output-properties)
* [Use cics.response.errors in a post-processing script](#use-cicsresponseerrors-in-a-post-processing-script)

## Overview of output properties

A step in DevOps Deploy is able to return output properties. These can be used in the step post-processing script and to pass information between steps. For an example workflow using output properties, see [Properties](http://www.ibm.com/support/knowledgecenter/SS4GSP_7.2.0/com.ibm.udeploy.doc/topics/ud_properties_overview.html "Properties") in the DevOps Deploy documentation.

## The cics.response.errors output property

If the CICS TS plug-in step fails (because CICS returns an error, for example) the step returns the cics.response.errors output property.

This property value consists ofa JSON document of error codes, one set for each resource in the resource list.The following elements are returned to the JSON document:

| Element name | Description                                                                      |
|--------------|----------------------------------------------------------------------------------|
| action       | The action performed by the step.                                                |
| resourceName | The name of the CICS resource.                                                   |
| resourceType | The type of CICS resource.                                                       |
| responseName | The plain text translation of the response code.                                 |
| reasonName   | The plain text translation of the reason code.                                   |
| attribute    | The name of the attribute that is in error.                                      |
| errorCode    | The CICSPlex SM error code associated with the resource.                         |
| resp1Name    | The plain text equivalent of the resp value.                                     |
| resp2        | The CICS RESP2 code or the CICSPlex SM API EYUDA reason code as a numeric value. |

## How to view output properties

You can view a steps output properties in the **Log** tab of the **Process Request** window.Next to the desired step name, click on the **Input/Output** **properties** icon. In the popup that follows, click **View Output Properties**.

![Image showing the location output properties in the Process Request window](media/hover_properties.png?resize=318%2C112)

Image showing the location output properties in the Process Request window
The following is a sample of the cics.response.errors output when NEWCOPY fails with a NODATA error:

```

[{"action":"NEWCOPY","attribute":"","errorCode":"","reasonName":"","resourceName":"NOTEXIST","resourceType":"PROGRAM","resp1Name":"","resp2":"","responseName":"NODATA"}``]

```

## Use cics.response.errors in a post-processing script

You can configure a post-processing script to run after a step finishes. Post-processing scripts can be used to ensure that the expected results occurred, and to pass properties between steps. For more information on using and storing reusable post-processing scripts, see the [Post-processing scripts](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=processes-component#intro_component_processes) section of the Urban Code Deploy documentation.

The following is a usage example of a post-processing script for the *New copy resources* step in the CICS TS plug-in:

The **New copy resources** step instructs CICS to reload the resource the next time it is requested. The step fails in CICS with a NODATA response if the resource was not already installed, however in most cases, this failure can be ignored as CICS will automatically load the resource when it is next used.

The following script analyses the cics.response.errors output property and providing the only errors are NODATA, will change the step to be successful:

```js
var exit = properties.get('exitCode');
commandOut.println("Running the post-processing script.");
if (exit == 0) {
  commandOut.println("The main step passed.");
  properties.put('Status', 'Success');
}
``
else {
  commandOut.println("The main step failed. Analysing its errors...");
  var responseErrors = JSON.parse(properties.get("cics.response.errors"));
  if (responseErrors) {
    if (responseErrors.length > 0) {
      for (var i = 0; i < responseErrors.length; i++) {
        commandOut.println("Analysing result with response name '" + responseErrors[i].responseName + "'.");
        if (responseErrors[i].responseName != "NODATA") {
          commandOut.println("Breaking early.");
          break;
        }
        ``
      }
      ``
      if (responseErrors.length > 0 && i == responseErrors.length) {
        commandOut.println("All errors were NODATA. The step will succeed.");
        properties.put("Status", "Success");
      }
      ``
      else {
        commandOut.println("Not all errors were NODATA. The step will be failed.");
        properties.put("Status", "Failure");
      }
      ``
    }
    ``
    else {
      commandOut.println("No error records found. The step will be failed.");
      properties.put("Status", "Failure");
    }
    ``
  }
  ``
  else {
    commandOut.println("No CICS response errors found!")
  }
  ``
}
``
```

## Defining and deleting resource definitions

Using the [z/OS Utility plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/ "z/OS Utility plug-in") **Submit Job** step you can perform the following actions in CICS:

* Run DFHCSDUP to define or delete resource definitions in the CSD.
* Run EYU9XDBT to define or delete resource definitions in the CPSM data repository.

In the following example, DFHCSDUP is run with replace tokens @CICSHLQ@,@CSD@, and @CSDUPDATE@.

![Image showing the Submit Job step configured to define some CICS resources](media/define-delete-screen2.png?resize=587%2C447)

Image showing the Submit Job step configured to define some CICS resources
**Replace tokens** allow you to customize values in your JCL templates, in order to use the same JCL in different deployment scenarios.

For example, a token such as *@CSD@* can be linked to a matching DevOps Deploy property, *cics.jcl.csd*. This property is then assigned a value, such as *CICSTS53.CICS.DFHCSD*, which can be set at the environment level, or wherever is most suitable.

For more details on the **Submit Job** and **Wait For Job** steps, see the Steps page for the [z/OS Utility plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/).

## Default input properties

The following properties are present on all CICS TS plug-in steps. You can view them on any step configuration page by selecting the **Show Hidden Properties** check box.

These properties are typically environment or component-specific. To reduce manual configuration, you can define properties at an application, environment, or resource level.

For an example of how to set up a CICS installation as an DevOps Deploy resource, see the *Setting up resources for simple management of properties* on the Usage page. More information on usage of properties, see the [Properties](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_7.2.0/com.ibm.udeploy.doc/topics/ud_properties_overview.html) topic in the DevOps Deploy documentation.

| Name                | Default value             | Description                                                                                                                                                                                                                                                                                                                          |
|---------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Host                | ``${p:cics.host}``        | The host name of the CICS region to connect to.                                                                                                                                                                                                                                                                                      |
| Port                | ``${p:cics.cmciport}``    | The CMCI port to connect to.                                                                                                                                                                                                                                                                                                         |
| CICSplex            | ``${p?:cics.cicsplex}``   | The name of the the CICSplex (defined set of CICS Systems) to connect to.                                                                                                                                                                                                                                                            |
| Scope               | ``${p?:cics.scope}``      | The name of the Scope to connect to. The scope can be a CICSplex, a CICS system, a CICS system group, or any set of CICS resources that are defined as a logical scope.                                                                                                                                                              |
| Username            | ``${p?:cics.username}``   | The username for connecting to CICS.                                                                                                                                                                                                                                                                                                 |
| Password            | ``${p?:cics.password}``   | The password for connecting to CICS.                                                                                                                                                                                                                                                                                                 |
| Enable SSL          | ``${p?:cics.ssl}``        | Whether to enable SSL connection to CICS. When set to true, this enables SSL connection to CICS. By default, SSL is disabled.                                                                                                                                                                                                        |
| Keystore Location   | ``${p?:cics.kslocation}`` | The location of the keystore that is used to provide credentials for client-certificate authentication, if SSL is enabled.                                                                                                                                                                                                           |
| Keystore Type       | ``${p?:cics.kstype}``     | The type of the keystore that provides credentials for client-certificate authentication, if SSL is enabled. If unspecified, the agents default Java keystore type is used. For keys contained in RACF keyrings, use JCERACFKS when the keys are stored in software, or JCECCARACFKS when the keys are stored in hardware with ICSF. |
| Keystore Password   | ``${p?:cics.kspassword}`` | The password of the keystore that provides credentials for client-certificate authentication, if SSL is enabled. For keys contained in RACF keyrings, leave this value empty.                                                                                                                                                        |
| Truststore Location | ``${p?:cics.tslocation}`` | The location of the truststore that verifies credentials, if SSL is enabled.                                                                                                                                                                                                                                                         |
| Truststore Type     | ``${p?:cics.tstype}``     | The type of the truststore that verifies credentials, if SSL is enabled. If unspecified, uses the agents default Java keystore type. For certificates contained in RACF keyrings, use JCERACFKS when the certificates are stored in software, or JCECCARACFKS when the certificates are stored in hardware with ICSF.                |
| Truststore Password | ``${p?:cics.tspassword}`` | The password of the truststore that verifies credentials, if SSL is enabled. For certificates contained in RACF keyrings, leave this value empty.                                                                                                                                                                                    |

-For files in zFS, use a hierarchical file path such as

```sh
/u/myuser/keystore.jks

```

or

```sh
file:///u/myuser/keystore.jks

```

-For keys contained in RACF keyrings that are stored in software, use a URL in the format

```sh
safkeyring:///<keyring name>

```

-For keys contained in RACF keyrings that are stored in hardware with ICSF, use

```sh
safkeyringhw:///<keyring name>

```

-For files in zFS, use a hierarchical file path such as

```sh
/u/myuser/truststore.jks

```

or

```sh
file:///u/myuser/truststore.jks

```

-For certificates contained in RACF keyrings that are stored in software, use a URL in the format

```sh
safkeyring:///<keyring name>

```

-For certificates contained in RACF keyrings that are stored in hardware with ICSF, use

```sh
safkeyringhw:///<keyring name>

```
