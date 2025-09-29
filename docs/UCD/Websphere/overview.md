
# WebSphere Application Server - Deployment - Overview

## Overview

The WebSphere Application Server Deployment plug-in includes steps that manage IBM WebSphere Application Server, including application-related tasks and tasks that are related to installing and maintaining application servers.

This plug-in requires WebSphere Application Server. Most of the steps include the **Command Path** parameter, which specifies the folder that contains the `wsadmin` command-line tool. Therefore, you must run the steps on an environment that includes an installation of WebSphere Application Server.

Aside from providing steps for processes, this plug-in can import information about a WebSphere Application Server cell as a resource in IBM DevOps Deploy. See [Importing resources from WebSphere Application Server](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.1/com.ibm.udeploy.doc/topics/resources_import_was.html) in IBM Knowledge Center.

The plug-in includes steps that are related to installing, configuring, and uninstalling applications, such as [Install Application](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/steps.html#install_application).

The plug-in also includes steps that are related to configuring and maintaining WebSphere Application Server, such as the following steps:

* Execute wsadmin Script
* Restart Application
* Restart Server

Other steps check the status of a server or an application:

* Check Application is Installed
* Check Application is not running
* Check Application is running on server or cluster
* Check Status

**Note:** The Check Application is Installed step always succeeds. If the application specified in the step is not installed, the step adds an output property named installed set to false. If the application is installed, this property is set to true.

You can also use this plug-in to import information about a WebSphere Application Server cell as a resource. Then, you can add the cell to an environment. See [Creating an environment from a WebSphere Application Server cell](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=resources-importing-from-websphere-application-server).

**Note:** Steps in this plug-in that are identified as OBSOLETE were replaced by steps available in the WebSphere Application Server – Configure plug-in. There are no current plans to enhance or remove these steps in this plug-in.

### Step palette

To add the WebSphere Application Server Deploy plug-in steps to processes, click **Application Server** > **Java** > **WebSphere** > **Deployment** in the step palette of the process editor.

### Compatibility

This plug-in requires version 6.1.1.2 of IBM DevOps Deploy.

This plug-in supports WebSphere Application Server version 7 or later. It also supports WebSphere Virtual Environment version 7 or later. This plug-in also supports WebSphere Application Server capabilities that were incorporated from WebSphere Virtual Enterprise, such as application editioning and dynamic clustering.

**Note:** The Start Server step works only with WebSphere Application Server Network Deployment. The Start Server step does not work on WebSphere Application Server Base.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

### Limitations

* The Start Server step works only with WebSphere Application Server Network Deployment. The Start Server step does not work on WebSphere Application Server Base.
* This plug-in uses the wsadmin tool to manage connections to a WebSphere Application Server profile. Specific user rights are required to run the wsadmin tool. To learn more about user rights and the wsadmin tool, see the [WebSphere Application Server Network Deployment documentation](http://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/txml_script.html).

### History

#### Version 133

* Added Default Bindings to the update step and removed property note.

#### Version 132

* URBANCODE-I-710 Extend Role Mappings for "Map Users and Groups to Roles" Step.

#### Version 131

* Fixed the issue for securedata jar for compatibility with Java 8.

#### Version 130

* Updated plugin rectify shared-library creation error. 


#### Version 129

* Fixed defect to make the plugin compatibel with UCD v7.1.2.2 and above. Refer link: https://www.ibm.com/support/pages/node/6963029.


#### Version 128

* Updated log4j and jettison dependencies.


#### Version 127

* Added resource role of the max-heap-size property.

#### Version 126

* Correct default-value for operating system on Create Unmanaged Node step to be linux.

#### Version 125

* Fixes APAR PH24841 – WAS – DEPLOY : “START APPLICATION” STEP FAILS WHEN APP NAME IS ENTERED WITH SURROUNDED WHITE SPACES.

#### Version 124

* Fixes APAR PH24878 – WAS disable/enable auto-sync node name property error.

#### Version 123

* Fixes APAR PH16948 Allow selection of jython level for the Execute wsadmin Script step.

#### Version 120

* Updates fix for APAR PH06134 to address additional issues with spaces in application name.

#### Version 119

* Fixes APAR PH06134 WAS Deploy does not always handle spaces correctly.

#### Version 118

* Adds ability to set the max heap size for the wsadmin command in the WebSphere Topology Discovery step.

#### Version 117

* Fixes APAR PH00570 Execute Wsadmin Script plugin step not producing proper output.

#### Version 116

* Fixes APAR PI99446 Execute Wsadmin Script plugin step fails on z/OS when using the Script Body parameter.

#### Version 115

* Fixes issue where Wait for Server or Cluster to Stop step considers a server stopped when the server is in a stopping state.

#### Version 114

* Change dependency on DevOps Deploy Versioned File Storage plug-in to version 30.

#### Version 113

* Fixes APAR PI91329 Terminate server/cluster step fails when node agent is stopped.

#### Version 112

* Fixes issue where Start Application and Stop Application plugin steps did not work for application names that contained spaces.

#### Version 111

* RFE 112023 Added support for Enable Auto Start of an Application plugin step.

#### Version 110

* RFE 98521 Add step to return the list of nodes running on a cluster, given a cluster name.
* RFE 108953 Add Disable Autostart for Application step to the Websphere Application Server Deployment Plugin.
* Add step to support WebSphere PropertiesBasedConfiguration through extractConfigProperties task.

#### Version 109

* RFE 105793 Add support for Intelligent management features on the target WAS cell with following additional steps:

* Intelligent Management Enable
* Intelligent Management Disable
* Intelligent Management List Trace Rules
* Intelligent Management Add Remote Cell
* Intelligent Management Delete Remote Cell
* Intelligent Management List Remote Cells
* Intelligent Management Modify
* Intelligent Management Modify Remote Cell
* Intelligent Management Refresh Local Cell
* Intelligent Management Refresh Remote Cell
* Intelligent Management Add Conditional Trace Rule
* Intelligent Management Set Default Trace Rule
* Intelligent Management Remove Conditional Trace Rule
* Intelligent Management Generate Plugin

* Fixes APAR PI87795 WebSphere Configuration Discovery may fail to retrieve passwords if multiple profiles are defined as part of theWebSphere installation.
* Fixes APAR PI87070 Websphere Topology Discovery removes default impersonation set on WebSphereCell resource

#### Version 108

* Provided task completion message for deleteServer
* Fixes APAR PI87625 time out issue with stopping and starting server
* Fixes auto discovery failures caused by trailing whitespaces in wsadmin.path or websphere.profilePath

#### Version 107

* Only invoke AdminTask.cancelValidation() if application edition information is available.

#### Version 106

Version 106 includes this fix:

* Added debug statement to assist diagnosis of topology discovery failures.

#### Version 105

Version 105 includes this fix:

* A fix for APAR PI83021 Find application edition in validation mode if one is not specified on the Cancel Validation Mode plugin step.

#### Version 104

Version 104 includes this fix:

* A fix for APAR PI80980 Check Status plugin step fails when same server name exists on multiple nodes.

#### Version 103.895669

Version 103 includes this fix:

* A fix for APAR PI77499 Error occurs when adding multiple shared libraries to an application.

#### Version 102.884132

Version 102 includes the following step, features, and fixes:

* New plugin steps for Properties File Based Configuration support.
* Fixes for APAR PI75224 Add Target To Module step fails if the modURI name contains spaces.
* Fixes for APAR PI76072 Full SyncNode does not execute an epoch refresh.

#### Version 101.874481

Version 101 includes the following features and fixes:

* Added support for encrypted input/output properties files.
* A fix for APAR PI74876 Performance problem with DevOps Deploy WebSphere Application Server Deploy plug-in when syncnodes is running.
* Added a new plug-in step: Delete Server.

#### Version 100.86358

Version 100 includes the following features and fixes:

* Fixed problem where new EJB was mapped to DMGR instead of cluster on application update.
* Added new steps Update Context Root for Web Modules and Update Virtual Host for Web Modules.

#### Version 99.851974

Version 99 includes the following features and fixes:

* Topology discovery step can now be called directly by a process. It also still supports being called by a wrapper step.
* Topology discovery will now set an output property named createdResources. This output property is only set when calling this step directly.
* Auto discover will now set an output property named createdResources.
* Add new step named Set Application Defaults.

#### Version 98.824844

Version 98 includes the following features and fixes:

* Support for uninstalling applications from the cell scope.
* A fix for an issue where an extra double quotation mark was added to the command for checking application status at cell scope.

#### Version 97.812548

Version 97 includes the following features and fixes:

* A fix for APAR PI63546, Importing a plug-in can fail with null pointer exception due to missing required plug-in dependency.
* A fix for APAR PI67024, PluginCfg.xml file is improperly generated when run at a cell scope level.
* Support for checking application status at the cell scope.
* The Modify Application ClassLoaders step now includes a property to specify the policy to use to load the WAR modules of the application.

#### Version 96.805833

The following features were added in version 96:

* Support for installing, updating, starting, and stopping applications at the cell scope.
* Updates to plug-in steps to support traditional WebSphere Application Server version 9 environments.
