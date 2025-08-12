
# IBM Integration Bus (formerly WebSphere Message Broker) - CMP - Overview


The IBM Integration Bus plug-in provides steps for working with IBM Integration Bus (IIB), formerly known as WebSphere Message Broker. IBM Integration Bus connects business information among disparate applications on multiple hardware and software platforms.

The plug-in uses the IBM Integration API, formerly known as the Configuration Manager Proxy (CMP) API, to communicate with IBM Integration Bus. To learn more about the API, see [IBM Integration API](https://www.ibm.com/support/knowledgecenter/SSMKHH_10.0.0/com.ibm.etools.mft.doc/be43410_.htm).

For plug-in details and examples, read the [IIB Integration With DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/27/iib-integration-with-urbancode-deploy) blog article.

This plug-in contains the following steps.

* [Create Execution Group](/#create_execution_group)
* [Create Integration Node](#create_integration_node)
* [Create Or Update Configurable Service](#create_or_update_configurable_service)
* [Delete Applications](#delete_applications)
* [Delete BAR File Contents](#delete_bar_file_contents)
* [Delete Configurable Service](#delete_configurable_service)
* [Delete Execution Group](#delete_execution_group)
* [Delete Integration Node](#delete_integration_node)
* [Deploy](#deploy)
* [Does Execution Group Exist](#does_execution_group_exist)
* [Override Bar Properties](#override_bar_properties)
* [Restart Execution Groups](#restart_execution_groups)
* [Set Execution Group Properties](#set_execution_group_properties)
* [Set Integration Node Properties](#set_integration_node_properties)
* [Set Message Flows Properties](#set_message_flows_properties)
* [Start Integration Node](#start_integration_node)
* [Start Message Flows](#start_message_flows)
* [Stop Integration Node](#stop_integration_node)
* [Stop Message Flows](#stop_message_flows)

## Step palette

To access this plug-in in the palette, click **Middleware** > **Enterprise Service Bus** > **WebSphere Message Broker**.

## Compatibility

This plug-in can be used with IBM Integration Bus versions 10. Starting with plug-in version 40, WebSphere Message Broker is not long supported. If you require the plug-in to integrate with WebSphere Message Broker, download a version of the plug-in lower than version 40.

This plug-in requires version 7.0.0 or later of IBM DevOps Deploy.

The IBM DevOps Deploy agent must run on an IBM Java Runtime Environment (JRE) or Java Development Kit (JDK). Other JREs and JDKs are not supported. This is a requirement of the IBM Integration API.

This plug-in runs on only z/OS operating system and DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 47

* Fixes out of memory issue when running on Groovy-3.0
* Override Bar Properties step will warn instead of fail on invalid line in property file.

### Version 46

* Fixes APAR PH04645Fixed receiving broker responses when broker refuses request.

### Version 45

* Fixes APAR PH04149Add remote broker connection JARs and consider CLASSPATH environment variable.

### Version 44

* Fixed APAR PH03202Mqsiprofile path property not working in Windows.

### Version 43

* Fixes APAR PH03013 Missing startTime property when create execution group fails.

### Version 42

* RFE 112896 Added step to delete an execution group from the broker.
* RFE 104689 Added a parameter to the deploy step to specify a full/incremental deployment.

### Version 41

* Fixes APAR PI98083 Modified Delete Applications step to pass in the correct argument.

### Version 40

* RFE 88341 Added a step to delete a list of applications by name.

### Version 39

* Fixes APAR PI90752 Sourcing an environment properties file now uses the default JVM character encoding.

### Version 38

* RFE 113408 Added the Does Execution Group Exist step to enable better logic for execution group creation and deployment.

### Version 37

* RFE 106783 Added the Delete Libraries field to the Delete Flows Using RegEx step to allow omitting libraries.
* Changed Delete Flows Using RegEx step name to Delete BAR File Contents.

### Version 36

* Renamed Set Broker Properties step to Set Integration Node Properties.
* Added the Environment Variables field to allow environment property values to all non-Integration Node step.

### Version 35

* RFE 100083 Added functionality to set environment variables from a file in the Deploy step.
* Altered the Environment Variables field to allow environment property values to contain commas in the Deploy step.
* Commas can no longer be used as delimiters for Environment Variables in the Deploy step.

### Version 34

* Fixes APAR PI82566 Create Execution Group will successfully create an execution group if it does not exist.

### Version 33

* Change default property values to be consistent across all steps.

### Version 32

* Provide proper error output when execution group doesnt exist.
* Fixes APAR PI80814 The Deploy and Delete Flow using RegEx steps use the timeout instead of DEPLOYRESULT\_WAIT\_INDEFINITELY.

### Version 31

* Fixes APAR PI81623 Deployments failing in IIB 9 and lower.

### Version 30

* Fixes APAR PI81397 Plug-in failing to import libraries.

### Version 29

* Fixes APAR PI79634 Additional plugin decryption updates.

### Version 28

* Encrypt plugin properties.
* Added missing property to setMsgFlowProperty step.

### Version 27

* Fixed APAR PI70440 Restart Execution Group step waits until the server has fully stopped before attempting to start.

### Version 26

* Add or update the hidden timeout property to many steps.
* Error catching for the Restart Execution Groups step.

### Version 25

* Fixed spacing error in IIBHelper.
* Added MQSI Profile and Shell properties to Override Bar Properties step.
* Removed manditory quotations to command lines calls.
* Error handling to createConfigurableService.
* Updated import path in Create, Delete, Start, and Stop Broker steps.

### Version 24

* Fixed APAR PI75953 Set execution group proxy before stopping all message flows.
* Changed Update Configurable Service to configure if missing properties should be deleted.

### Version 23

* Fixed APAR PI73557 Set Broker Properties is using a deprecated method which no longer works.
* Fixed APAR IT18861 Groovy classpath updated to include quotations.

### Version 22

* Added output property to specify completion code after deployment, added timestamps, and restructured plugin.

### Version 21

* Fixed APAR 158492 Updated Deploy step to wait for deployments to return success before continuing.
* Fixed APAR 158710 Removed deprecated method from Create Execution Group.
* Fixed APAR 158738 Changed to only establish a local broker connection if remote connection parameters arent specified.

### Version 20

* Support property file encryption.

### Version 19

* Altered Create Execution Group step so that it will wait until execution group has finished generating before finishing.

### Version 18

* Fixed NullPointerException in Create Or Update Configurable Service step.

### Version 17

* Added a property to set environment variables to the Deploy step.

### Version 16

* Altered Create Execution Group and Deploy steps to allow multiple execution groups.
* Add step for restarting execution groups.

### Version 15

* Fixes APAR PI54665Additional Error Handling for timeout in UCD after deploy finished.
* Added functionality to specify mqsiprofile script to set user environment per step.
* Change names of plugin steps to remove WMB.

### Version 14

* Fixes APAR PI55441, where remote connections could not be established in the Create Execution Group step.
* Fixes APAR PI52693 to handle null pointer exceptions thrown when using the Override Bar Properties step.

### Version 13

* Fix for a null pointer exception that could occur when using the WMB Override Bar Properties step.

### Version 12

* Fix for an issue with incremental deployments.
