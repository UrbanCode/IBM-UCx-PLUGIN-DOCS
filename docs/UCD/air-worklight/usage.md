
# IBM MobileFirst Platform (formerly Worklight) - Usage

The IBM MobileFirst Platform plug-in for IBM DevOps Deploy is part of a complete process for building and deploying mobile applications.


## Important properties in plug-in steps




Important information is in some of the process step properties.

Step properties are described briefly in the properties table for each step. This section provides more information about the details and implications of selected important properties.


**Application Center Ant JAR File Path**
The path to the Application Center Deploy Tool Ant JAR file, `applicationcenterdeploytool.jar`. It is used to interact with the Application Center.
The version of the Ant JAR file you use must match the version on the target server. An Ant JAR file is included in this plug-in for deploying artifacts to the Worklight Version 6.0.0 Server. The default path to use this file is ```${PLUGIN_HOME}``/lib/applicationcenterdeploytool.jar`.


**Disable SSL Security Checking**
*Security Risk*. This option allows you to publish on secure Application Center hosts without verification of the SSL certificate.
Disabling the security checking can be helpful when testing localhost with temporary self-signed certificates. It should never be done on production or public systems.


**JSON4J JAR file path**
The path to the JSON4J JAR file, `json4j.jar`.
The version of the JSON4J JAR file you use must match the version on the target server. An Ant JAR file is included in this plug-in for deploying artifacts to the Worklight Version 6.0.0 Server. The default path to this file is ```${PLUGIN-HOME}``/lib/json4j.jar`.


**Label**
This property is in the Upload Application to Application Center step.
Normally, the label is taken from the application descriptor that is stored in the file to be uploaded. If the application descriptor does not contain a label, the fallback label is used.


**Secure**
*Security Risk*. Determines whether to communicate with the Worklight server in a secure way. The default is No.
Set this value in accordance with your security policies. Transmitting without security is a security risk, especially outside a firewall.


**Worklight Ant JAR File path**
The path to the Worklight Ant Deployer JAR file. The file to use differs by Worklight server version.
* Versions 6.2 and 6.1: Use `worklight-ant-deployer.jar`.
* Version 6.0.0: Use `worklight-ant.jar`.

The version of the Ant JAR file you use must match the version on the target server. An Ant JAR file is included in this plug-in for deploying artifacts to the Worklight Version 6.0.0 Server. The default path to this file is ```${PLUGIN_HOME}``/lib/worklight-ant.jar`.



## Rolling back mobile applications




There are a number of ways to roll back a mobile application that is deployed to IBM Worklight Server. One option is to remove the native application from the Application Center and then redeploy the application. Alternatively, you can manually roll back deployments. With version 4.0 of the plug-in you can also remove adapters, remove Worklight applications from the Worklight server, or change Worklight application access rules.

You can choose an automated or manual method to roll back a mobile application deployment.

## Automated rollback

To automate rolling back a mobile application deployment, create processes that use the following general steps:

1. At the component level, create a process that removes the native application from the Worklight Application Center, and overwrite any deployed artifacts by redeploying the application:
1. To remove the native application from the Worklight Application Center, add the Remove Application from Application Center step.**Tip:**When you configure the step, specifying the Operating System and Version removes a specific native application, such as the version related to a failed deployment.
2. Any artifacts that were successfully deployed to the Worklight Console are not removed. To overwrite the deployed artifacts, add process steps to redeploy the mobile application as described in the topic Deploying mobile applicationsAlternatively, you can first remove or modify the artifacts on the Worklight Console by using these steps:
* Remove Adapter from Worklight Server
* Remove Worklight Application from Worklight Server
* Change Worklight Application Access Rule on Worklight Server
2. At the application process level, create a process that includes the desired **Rollback Component** step and configure the step to call the component process that you created in the preceding steps. **The Rollback Component** step replaces the component version with an earlier version.

## Manual rollback

To manually roll back a mobile application deployment:

1. Delete the native application from the Worklight Application Center.
2. In the Worklight Console, delete the adapters and applications. For details, see the topics in the section [Administering adapters and apps in Worklight Console](http://www-01.ibm.com/support/knowledgecenter/api/content/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/t_working_with_the_ibm_worklight1.html) in the Worklight Information Center.
3. Redeploy the previous version of the mobile application from DevOps Deploy.

## Deploying mobile applications




You can use the process steps in the IBM Worklight plug-in to deploy mobile applications to IBM Worklight Server.

## Before you begin

* If it is not already installed, install the IBM Worklight plug-in.
* Install the plug-in that corresponds to the application server that is running your Worklight Server for deploying the WAR file to the Worklight Server. For example:
+ [Apache Tomcat](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Tomcat/)
+ [Application Deployment for IBM](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/)WebSphere
+ [IBM WebSphere Application Server Liberty](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereLiberty/)Profile
* Verify that your process steps use the path to the JAR files that correspond to your IBM Worklight Server version. For example, if you are using IBM Worklight plug-in Version 2.0 or later and a version of IBM Worklight Server later than 6.0.0, you must update your process steps.**Note:** Worklight plug-in version 4.0 and later verifies that the provided JAR file matches the target Worklight server. If the versions do not match, a deployment can fail. This does not apply to steps for the application center.**Tip:** The following JAR files are available for use with IBM Worklight plug-in Version 2.0 or later:

`worklight-ant.jar`
Used to deploy artifacts to the IBM Worklight Server Version 6.0.0.
`worklight-ant-deployer.jar`
Used to deploy artifacts to the IBM Worklight Server Version 6.1.0 or later.
`applicationcenterdeploytool.jar`
Used to interact with an Application Center installed on an IBM Worklight Version 6.0.0 Server or later.
`json4j.jar`
Used with the IBM Worklight Server Version 6.0.0 or later

## About this task

In the process editor, you can modify component processes to include steps to deploy the following mobile application artifacts to your Worklight Server:

* Native applications (Android `.apk` or iOS `.ipa`)
* Worklight Adapters (`.adapter`)
* Worklight Applications (`.wlapp`)
* Worklight project (`.war`)

The following sequence is a suggested order for deploying the mobile application artifacts:

1. Deploy the `.war` file to the application server by using a process step from the corresponding plug-in for the type of application server that is running the Worklight Server. For example, for WebSphere Application Server use the **Install or Update Application** step.
2. The following artifacts can be deployed in parallel or in either order:
* Deploy the Worklight Adapter (`.adapter`) file to the Worklight Server Console by using the Deploy Adapter to Worklight Server step.
* Deploy the Worklight Application (`.wlapp`) file to the Worklight Server Console by using the Deploy Worklight Application to Worklight Server step.
3. Deploy the Android application package (`.apk`) or iOS application (`.ipa`) file to the Application Center by using the Upload Application to Application Center step.

## Example

The following simple example process deploys a mobile application to the Worklight Server Console and Application Center.

1. The **Download Artifacts** step retrieves the binary files.
2. The **Install or Update Application** step deploys the .war file to WebSphere Application Server (the application server that is used in this example).**Note:** The **Install or Update Application** step in this example is provided by the **Application Deployment for WebSphere** plug-in (not the Worklight plug-in).
3. In parallel, the `.adapter` and `.wlapp` files are deployed to the Worklight Server Console by the Deploy Adapter to Worklight Server step and the Deploy Worklight Application to Worklight Server step.
4. The `.apk` (Android) or `.ipa` (iOS) file is deployed to the Application Center by the Upload Native Application to the Application Center step.

## Configuring the Worklight server





You must configure the IBM Worklight Server before you can run the process steps to deploy mobile application artifacts.

###
About this task

For each Worklight project, you must configure the Worklight Server. The one time Worklight Server setup and configuration options for the Worklight project WAR file are described in the [Worklight Knowledge Center](http://www-01.ibm.com/support/knowledgecenter/SSZH4A/welcome).


You can use any of the following methods to configure the Worklight Server:

* Use Ant tasks to configure the server:
+ Use the command line to run the Ant script.
+ Use the Ant process step within DevOps Deploy to run the Ant script with the Worklight Ant tasks. To use the Ant process step, you must download and install the Ant plug-in for DevOps Deploy.

* Use the Server Configuration Tool to configure the server.
* Manually configure the server.


**Tips:**

* Sample scripts are available for configuring the server and are in Worklight installation directory/Worklight/WorklightServer/ configuration-samples. The sample script combines the two steps in the following procedure by creating a database and deploying the project WAR file.
* For information about configuring a secure Worklight Console on Worklight 6.0 and 6.1 servers for IBM WebSphere Application Server Liberty Profile and, including the required values, see [Testing the Worklight Console login screen.](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/admin/r_protecting_ibm_worklight_console.html)

###
Procedure

To configure the Worklight Server for a Worklight project:To configure the Worklight Server for a Worklight project:

1. [Create and configure a database for your server:](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/deploy/c_config_dbs.html)

| Option | Documentation |
| --- | --- |
| Use Ant tasks to create and configure the databases | [Creating and configuring the databases with Ant tasks](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/r_ant_tasks_configure_dbs.html) |
| Use the Server Configuration Tool to create and configure the databases | [Deploying, updating, and undeploying a Worklight Server by using the Server Configuration Tool](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/deploy/c_using_server_config_tool.html) |
| Manually create and configure the databases | [Creating and configuring the databases manually](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/admin/c_manually_configuring_databases.html) |
2. [Deploy the project WAR file to the application server:](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/deploy/c_deploy_custom_war_file_to_app_server.html)

| Option | Documentation |
| --- | --- |
| Use Ant tasks to install the Worklight project | [Deploy a project WAR file and configuring the application server with Ant tasks](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/r_ant_tasks_configure_appserver.html) |
| Use the Server Configuration Tool to install the Worklight project | [Deploying, updating, and undeploying a Worklight Server by using the Server Configuration Tool](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/deploy/c_using_server_config_tool.html) |
| Manually install the Worklight project | [Deploy a project WAR file and configuring the application server manually](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/admin/c_manually_configuring_app_server.html) |


**Important:**  If you are configuring multiple projects on a single server, then see the Worklight topic [Configuring multiple IBM Worklight projects](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/c_ant_tasks_configuring_multiple_wl_projects.html). If you run multiple projects on a single server, install the .war files from multiple Worklight projects in the same application server, and then have them operate in parallel and independently.


**Note:**  The Worklight project WAR file deployment that is described in this step is a one time configuration. When you deploy your mobile application, update the WAR file on the application server by using the plug-in process steps.


## Adding mobile artifacts to DevOps Deploy




You can use the build scripts to add your build artifacts to IBM DevOps Deploy for deployment to the IBM Worklight Server.

###
Procedure


You can use any of the following methods to add your build artifacts to DevOps Deploy:


***Copy the files into a user-defined file system***
Copy the build artifacts to a location on the DevOps Deploy servers file system for a versioned file.
***Push the files to the DevOps Deploy server***
Use the Command-line client (CLI) to push the build artifacts to the DevOps Deploy server. The CLI is a command-line interface that provides access to the DevOps Deploy server.

You can use the CLI to push the build artifacts to the DevOps Deploy server in the following scenarios:

* When the Jazz Build Engine and the DevOps Deploy server are not installed on the same build computer.
* To support running the DevOps Deploy server on different operating systems.


**Tip:** You can use the following commands to deploy binary files to the DevOps Deploy server:


**createVersion**
Create the component version.
**addVersionFiles**
Upload the component files.

***Copy the files into a source-code management system***
Copy the build artifacts into a source-code management system, such as:
* Git
* IBM Rational Asset Manager
* Subversion



**Tip:** Assign a version to the mobile application that is deployed to the Application Center. This version must match the version that is assigned in DevOps Deploy. For example, if the mobile application has a commercial version of 1.0 on the Application Center and the internal version from the latest build is 16, assign version 1.0.16 to the application in DevOps Deploy. Keeping the version numbers synchronized helps you to recover if you encounter a problem. For example, if the latest version of the mobile application was not deployed successfully to the Application Center.


**Related information:**

[Creating components from a versioned file system](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=system-creating-components-from-versioned-file)

[Creating components from source-code management systems](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=components-creating-from-source-code-management-systems)

[Command-line client (CLI) reference](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=function-command-line-client-cli-reference)

[createVersion](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=commands-createversion)

[addVersionFiles](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=commands-addversionfiles)


## Building mobile applications





To set up a continuous integration and delivery cycle for your mobile applications, you must build the mobile application artifacts before you deploy them to the IBM Worklight Server. The IBM Rational solution for Collaborative Lifecycle Management (CLM), IBM Worklight Studio, and IBM DevOps Deploy integrate to help automate the build and deployment of mobile applications.

CLM contains the Rational Team Concert product that is delivered as an application together with a Jazz Team Server. Rational Team Concert and the Build System Toolkit work together to build your mobile applications. When Rational Team Concert is installed on the Jazz Team Server, it manages the workspaces, projects, source files, and builds of your mobile applications. The Build System Toolkit runs the actual build tasks.

The following topics are covered in sections below:

* [Build computer resources](#build_computer_resources)
* [Build scripts](#build_scripts)
* [Jazz Team Build](#jazz_team_build)

**Related information:**

[Building with Jazz Team Build](http://www-01.ibm.com/support/knowledgecenter/SSYMRC_4.0.5/com.ibm.team.build.doc/topics/t_build_overview.html?lang=en)


## Build computer resources

Before you run a mobile application build script on a build computer, you must ensure that the required resources exist on the build computer.

## Workspace resources

The following workspace resources must exist on the build computer:

* The mobile application project source code that you want to build
* The Ant build scripts that direct the build

Using a Rational Team Concert repository workspace to manage your Worklight project source code and build scripts offers the following advantages:


*Source control advantages*
Changes to source code and build scripts can be requested, developed, reviewed, approved, delivered, and tracked based on the requirements of your development project. Build scripts are living files, just like the source code.
*Build automation advantages*
The Jazz Build Engine automatically loads the workspace to build onto the build computer early in the processing of a build request. You can create and use a dedicated build workspace for each build definition. Do not point a build definition directly to a stream or to a workspace that is meant for another purpose. For example, do not point a build definition directory to the personal workspace of a user or a team integration workspace.**Note:** The Jazz Build Engine is a component of the Build System Toolkit; it refers to the process that runs on a build computer and runs Ant scripts.

## Static resources

The build administrator must manually install the static resources on each build computer.

**Tip:** Install these resources into the same relative locations on each build computer. You can specify the relative locations within either of the following types of build dependency resources:

* **Build property files:**  Specify the relative locations of the static resources within the build property files. If you install static resources into different locations on different build computers, a location that is specified within a build property file that works on one build computer might fail on another build computer.
* **Build definitions within Rational Team Concert:**  Specify the relative locations of the static resources within the build definitions in Rational Team Concert. If you install static resources into different locations on different build computers, a build definition that works on one build computer might fail on another build computer.

The following static resources must exist on the build computer:


**Oracle JDK**
Use this JDK for running the Ant scripts and Android SDK tools that are run by the build scripts. Ensure that you install a JDK, not a JRE, because some Ant tasks require Java tools that are available only in the JDK.
**Apache Ant**
Use Apache Ant to run the Ant scripts.
**JAR library files**
The following JAR library files provide and enable the Worklight Ant tasks that are used in the build scripts:
* **`worklight-ant.jar:`**  Use the `worklight-ant.jar` file if you are building applications on IBM Worklight Server Version 6.0.0. This file is contained in the WorklightServer folder of the IBM Worklight Server installation.
* **`worklight-ant-builder.jar:`**  Use the `worklight-ant-builder.jar` file if you are building applications on the IBM Worklight Server Version 6.1.0 or 6.2.0. This file is contained in the WorklightServer folder of the IBM Worklight Server installation.

Important: Ensure that the version of the JAR library file that you use (worklight-ant.jar or worklight-ant-builder.jar) matches the version on the target server.

**Tip:** An alternative approach to preinstalling the JAR library files on each build computer is to include them in your build workspace. This approach allows your build definitions and engines to build with different versions of Worklight. This approach also supports the generation of reproducible builds.

The disadvantage of this approach is that the JAR library files can be large. The large file size might affect the performance of builds and build computers.

If you share a build system and build computers across multiple teams, use this alternative approach to manage the JAR library files.


***Optional:*  Dojo Toolkit**
Install the Dojo Toolkit on each build computer in the following situations:
* The mobile applications under development use Dojo.
* The mobile application projects either include the Dojo Toolkit (in the workspace project) or access it over a Content Delivery Network.


## SDKs

Install one of the following SDKs on each build computer:


Apple Xcode SDK
Install on OS X build computers that run builds to produce iOS IPA applications. For more information about installing the Apple Xcode SDK, see [Getting Started with IBM Worklight Module 02.1 Setting Up Your iOS Development Environment.](http://public.dhe.ibm.com/software/mobile-solutions/worklight/docs/v610/01_02_Setting_up_your_iOS_development_environment.pdf)
Android SDK
Install on build computers that run builds to produce Android APK applications. For more information, see the [IBM MobileFirst Platform](https://developer.ibm.com/mobilefirstplatform/) site.

**Related Information:**

[Best practices: Setting up Jazz team build](http://pic.dhe.ibm.com/infocenter/clmhelp/v4r0/index.jsp?topic=/com.ibm.team.build.doc/topics/cbestpractices.html)


## Build scripts

You can create Ant build scripts for Worklight projects that contain applications and adapters. By using these build scripts, you can automate your mobile application builds.

## Build script tasks

You can create build scripts that use the following types of Ant tasks:


*Built-in tasks from Apache Ant*
Includes tasks such as:
* `<echo>`
* `<report>`
* `<mkdir>`
* `<exec>`
* `<replaceregexp>`


*Tasks from IBM Worklight*
These tasks perform the following actions:
* Build Worklight applications and adapters, such as `<app-builder>` and `<adapter-builder>`. IBM Worklight provides a set of Ant tasks that help you to build adapters and Worklight applications for your IBM Worklight Server.
* Build IBM Worklight web archive projects. IBM Worklight provides the `<war-builder>` Ant task for building the Worklight project WAR file.


*Tasks from the Rational Team Concert Build System Toolkit*
These tasks provide information to the build results. Tasks include:
* `<startBuildActivity>`
* `<linkPublisher>`
* `<artifactPublisher>`


## Sample build script task flow

You can create build scripts for Worklight projects that contain different numbers of applications or adapters. The following sample task flow describes the overall design of a build script for a Worklight project that has a single Worklight application and a single adapter.

1. Use Ant `<property>` elements to set the properties.
2. Use a hybrid target to build Worklight applications, adapters, and Worklight web archive projects. The hybrid target contains the following actions:
1. URLs that point to the Worklight Server Console and the Application Center are published to either the Ant build log or the Rational Team Concert build results.
2. The Worklight `<app-builder>` Ant task builds the Worklight application.
3. The resulting `.wlapp` file is stored in the build output.
4. The Worklight `<adapter-builder>` Ant task builds the adapter.
5. The resulting `.adapter` file is stored in the build output.
6. The Worklight `<war-builder>` Ant task builds the Worklight web archive project.
7. The resulting WAR file is stored in the build output.
8. Optional. If you use Rational Team Concert, you can publish the `.wlapp`, `.adapter`, and WAR files to the Rational Team Concert build results.
3. When you build an Android application, include the following actions to build the native Android APK file:
1. Run the **`android`** command-line tool from the Android SDK to generate the Android `build.xml` file.
2. Run the generated Android build.xml file to build the APK file.
3. Optional. Publish the Android APK file to the location where you store your build output. For example, if you use Rational Team Concert, publish the APK file to the Rational Team Concert build results.
4. When you build an iOS application, include the following actions to build the native iOS IPA file:
1. Run the **`xcodebuild`** command-line tool from the Xcode SDK to build the iOS application.
2. Run the `**xcrun**` command-line tools from the Xcode SDK to package the iOS application into an IPA file.
3. Optional. Publish the iOS IPA file to the location where you store your build output. For example, if you use Rational Team Concert, publish the IPA file to the Rational Team Concert build results.
5. Add your Worklight application, adapter, Worklight web archive project (WAR file), and native application (Android APK file or iOS IPA file) to DevOps Deploy as a new version.**Tip:** You can have multiple Worklight applications and adapters. If you have more than one Worklight application or adapter, repeat calls to tasks to build the mobile artifacts, add new property values, and then add the new artifacts to DevOps Deploy.

**Related information:**

[Ant tasks for building and deploying](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/r_ant_tasks_for_building.html)

[Building a project WAR file with Ant](http://www-01.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/r_ant_tasks_deploy_projects.html)

[Jazz build Ant task reference](http://www-01.ibm.com/support/knowledgecenter/SSYMRC_4.0.5/com.ibm.team.build.doc/topics/r_ant-tasks.html)


## Jazz Team Build

The Jazz Team Build system defines resources that are used to describe and manage builds.

This section describes the following Jazz Team Build facilities:

* [Logical resources for builds](#jazz_logical_resources)
* [Build system toolikit](#jazz_build_system_toolkit)
* [Build definitions](#jazz_build_definitions)


## Logical resources for builds

The Jazz Team Build system in Rational Team Concert defines the following types of logical resources that are used to describe and manage builds:


Build definition
A build definition describes:
* The workspace to process
* The Ant scripts and targets to run against the workspace
* The schedule for the build
* The properties to simplify the configuration of the build
* The build engines that can handle build requests for the build definition


Build engine
A build engine represents a Build System Toolkit Jazz Build Engine running on a designated build computer. A Jazz Build Engine running on a Worklight plug-in 7 build computer correlates itself to a build engine in Rational Team Concert by specifying the unique identifier of the build engine.
Build request
A build request represents a scheduled or explicitly issued request to run a build according to a specified build definition. Build definitions are submitted to a build queue. A Jazz Build Engine receives and processes the build request if its corresponding build engine in Rational Team Concert is listed as a supporting build engine for the build definition.
Build result
A build result represents the output of a build.

## Build system toolkit

Each build computer contains an installation of the Rational Team Concert Build System Toolkit.

The Build System Toolkit consists of the following major components:


**Jazz Build Engine**
The Jazz Build Engine is a command-line tool that polls for and processes build requests from Rational Team Concert. When the Jazz Build Engine is started, it must identify a corresponding build engine in Rational Team Concert. The Jazz Build Engine can then accept any build request whose build definition is supported by the build engine. The Jazz Build Engine runs the Ant script and targets that are specified in the build definition. Each build is represented in Rational Team Concert by a build result.
**Build toolkit**
The build toolkit is a collection of Ant tasks. Ant scripts can use these tasks to send information (such as build progress, results, links, artifacts) to Rational Team Concert to include in the build result.
**Build agent**
The build agent is a lightweight process that handles agent-based builds that support z/OS or IBM i build scenarios. For the Worklight plug-in, use the Jazz Build Engine instead.**Note:** The Jazz Build Engine is a component of the Build System Toolkit; it refers to the process that runs on a build computer and runs Ant scripts.

**Related information:**

[Building with Jazz Team Build](http://www-01.ibm.com/support/knowledgecenter/SSYMRC_4.0.5/com.ibm.team.build.doc/topics/t_build_overview.html)


## Build definitions

In Rational Team Concert, a build definition describes the key components of a build.

The build definition describes the following components:

* The workspace to process.
* The Ant scripts and targets to run against the workspace.
* The schedule for the build.
* The properties that simplify the configuration of the build.
* The build engines that can manage build requests for the build definition.

The following sections describe the considerations that apply when you build IBM Worklight mobile applications.


*Supporting build engines*
When you specify a build engine to run build requests for the build definition, ensure that any required SDKs (such as the Android SDK or the Apple Xcode SDK) are installed and configured on the build engine.
*Properties*
You can use properties to customize the build for a specific build definition. For example, you can set properties for the path to the build output or the native SDK.
*Ant build file and targets*
In the **Build file** field, use the following value to specify the location of the Ant build script that is loaded with the workspace located in the following path:*loadDir*/```${buildLabel}```/*project*/ *folder*/*script*Items in the path are defined as follows:
* *project*  is the name of the project that contains the build scripts.
* *folder*  is the name of the folder within the project that contains the build scripts.
* *script*  isthe name of the build script XML file.

**Tip:**  If you choose a different relative location for your build script in the workspace, you must change the value of the *loadDir* property.

In the **Build targets** field, specify any specific targets that you want to run in your build script. By default, build scripts run the `**all**` target.


*Ant configuration*
Ant configuration includes the following tasks:
* Select the option to include the Jazz build toolkit tasks on the Ant library path.
* In the Ant home field, specify the location on the build computer where Apache Ant is installed.
* In the Ant arguments field, specify the `**-lib**` argument that includes the `worklight-ant-builder.jar` required library on the Ant library path. If you are building applications on the IBM Worklight Server Version 6.0.0 you can use the `worklight-ant.jar` file instead of the `worklight-ant-builder.jar` file.**Important:**  Ensure that the version of the JAR library file that you use (`worklight-ant.jar` or `worklight-ant-builder.jar`) matches the version on the target server.Use the following format for the `**-lib**` argument:
`-lib` *path*\*JAR file name*

The parameters are defined as follows:

+ *path* is the path to the directory on the build computer that contains the JAR file. The path might be a location on the build computer where the JAR Worklight plug-in 9 libraries were preinstalled. The path might also point to a location within the loaded workspace if you chose to include the JAR libraries in the build workspace.
+ *JAR file name* is the name of the JAR file that is included in the library.
* In the Java home field, specify the location on the build computer where the Oracle JDK is installed.


**Related information:**

[Building with Jazz Team Build](http://www-01.ibm.com/support/knowledgecenter/SSYMRC_4.0.5/com.ibm.team.build.doc/topics/t_build_overview.html)

[Getting Started with IBM WorklightUsing Rational Team Concert to build your applications](http://public.dhe.ibm.com/software/mobile-solutions/worklight/docs/v610/11_01_Using_Rational_Team_Concert_to_build_your_applications.pdf)


## Building and deploying mobile applications





You can set up your development environment so that you can build your mobile applications and, by using the IBM MobileFirst Platform plug-in for IBM DevOps Deploy, deploy the build results to the IBM Worklight Server.

###
Before you begin


Ensure that the following software is installed and running:

* IBM DevOps Deploy
* IBM Worklight Server with the Application Center and Console running
* IBM Worklight Studio

Extra software might be required, such as:

* Source control management (SCM) system
* Build engine
* Application server
* Database

###
About this task

Before you can build and deploy mobile applications to the Worklight Server, you must complete the following configuration steps:

1. Configure the build system.
2. Configure DevOps Deploy, including the following steps:
* Create components.
* Create component processes or application processes that include steps from the IBM MobileFirst Platform plug-in to deploy the mobile application.
3. Configure Worklight Server Console, including the following steps:
* Create and configure a database.
* Configure the Worklight project Web Archive (WAR) file.

###
Procedure


After you set up the build, DevOps Deploy and Worklight Server console, you can build and deploy mobile applications by using the following high-level steps:

1. Check in (commit) changes from IBM Worklight Studio into a source control management (SCM) system.
2. Build the application and add a new version to DevOps Deploy.

**Tip:** Assign a version to the mobile application that is deployed to the Application Center. This version must match the version that is assigned in DevOps Deploy. For example, if the mobile application has a commercial version of 1.0 on the Application Center and the internal version from the latest build is 16, assign version 1.0.16 to the application in DevOps Deploy. Keeping the version numbers synchronized helps you to recover if you encounter a problem. For example, if the latest version of the mobile application was not deployed successfully to the Application Center.
3. Request deployment in DevOps Deploy.
4. View the mobile artifacts in the Worklight Console, install, and test the application from the Application Center.

###
Results


The mobile application artifacts are deployed to the Worklight Server and can be installed on the target device.

###
What to do next


Optionally, create extra component and application processes in DevOps Deploy to roll back deployments (for example, to recover from an error condition or an incomplete deployment.) See [Rolling back mobile applications](#rolling-back-mobile-applications).

