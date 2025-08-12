
# IBM WebSphere Liberty

## Overview

The IBM WebSphere Application Server Liberty profile is a lightweight configuration of IBM WebSphere Application Server. It provides rapid deployment of applications for use in the development process.

This plug-in includes steps that are related to working with servers in the profile, such as the following steps:

* [Create Server](steps#create_server)
* [Delete Server](steps#delete_server)
* [Start Server](steps#start_server)
* [Stop Server](steps#stop_server)

The plug-in also includes steps that install, update, and uninstall applications:

* [Install or Update Application with Drop-ins](steps#install_or_update_application_via_dropins)
* [Install or Update Application with Server XML](steps#install_or_update_application_via_server_xml)
* [Start Application](steps#start_application)
* [Stop Application](steps#stop_application)
* [Uninstall Application from Drop-ins](steps#uninstall_application_from_dropins)
* [Uninstall Application with Server XML](steps#uninstall_application_via_server_xml)
* [Wait for Application to be STARTED](steps#wait_for_application_to_be_started)

The following plug-in steps are related to working with Liberty collectives:

* [Create Collective](steps#create_collective)
* [Join Collective](steps#join_collective)
* [Register Host](steps#register_host)
* [Unregister Host](steps#unregister_host)
* [Update Host](steps#update_host)
* [Upload File To Collective Host](steps#upload_file_to_collective_host)

The following plug-in steps are related to working with the Liberty server configuration:

* [Generate Component-Resource Properties](steps#generate_component-resource_properties)
* [Replace Variable Values with Component-Resource Properties](steps#replace_variable_values_with_component-resource_properties)

### Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in was tested with WebSphere Liberty profile versions 8.5.5.916.0.0.2.

### Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps products").

To use the [Wait for Application to be STARTED](steps#wait_for_application_to_be_started) step, you must complete the following steps to configure the REST connector for the WebSphere Application Server Liberty profile:

* In the `server.xml` file on the server, enable the REST connector, SSL certificates, and an administrator role for a user or group. You must use an administrator account to run the [Wait for Application to be STARTED](steps#wait_for_application_to_be_started) step. For more information, see the documentation for your version of the WebSphere Application Server Liberty Profile. For example, for version 8.5, see the following topic: [Configuring secure JMX connection to the Liberty profile](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.wlp.nd.doc/ae/twlp_admin_restconnector.html?cp=SSAW57_8.5.5%2F1-3-11-0-3-3-9-1&lang=en)
* Update the server to listen on all endpoints. For example, the default `server.xml` file contains a line that is similar to the following example: `<httpEndpoint host="localhost" httpPort="9080" httpsPort="9443" id="defaultHttpEndpoint"/>` In this code, set the host attribute to the wildcard character (\*), as shown in the following example: `<httpEndpoint host="*" httpPort="9080" httpsPort="9443" id="defaultHttpEndpoint"/>`

### Video

Watch and learn: [Create a WebSphere Liberty collective and deploy applications using DevOps Deploy](https://www.youtube.com/watch?v=VaYQE5d96hY&feature=youtu.be). See the related example: [Creating a collective and installing a simple application](usage#example-creating-a-collective-and-installing-a-simple-application).

### History

#### Version 23

* Upadte log4j and jettison dependencies.

#### Version 22

* Minor Fix – to pick JAVA_HOME set as per agent on linux machine

#### Version 19

* Fixes APAR PI97742Create Collective step incorrectly encodes userPassword with linefeed added at the end.

#### Version 18

* Fixes APAR PI94186Install Server Archive step expecting bin directory and unzip not preserving file permissions.

#### Version 17

* Updated plugin documentation to describe output properties created by Start Server and Stop Server steps.
* Fixes problem where output properties were not being set correctly when starting/stopping servers via the collective controller.
* RFE 100414Added the context sensitive help for plugin step named Install or Update Application with Server XML.
* Fixes APAR PI88752Stream the Liberty process output to the output files for the associated plugin steps.

#### Version 16

This release includes the following fix:

* Implements RFE 104618 to merge multiple plugin-cfg.xml(s) from multiple servers and propagates it to target web servers.

#### Version 15

This release includes the following fix:

* Fixes APAR PI82000 Start Server Plugin step incorrectly reports failure on non-English platforms

#### Version 14

This release includes the following fix:

* Fixes APAR PI81234 Timeout occurs on Start Application step in WAS Liberty Plugin

#### Version 13

This release includes the following fix:

* Added support to handle the case where the specified Liberty installation directory only contains the directory named wlp, not bin, lib, etc.
* Added support for starting/stopping all servers in wlp.user.dir.

#### Version 12.891854

This release includes the following fix:

* A fixes for APAR PI77192Error in IBM WebSphere Liberty Plugin step JoinCollective

#### Version 10.848664

This release includes the following features and fixes:

* A step to generate Component-Resource properties from Liberty variable tags in the configuration files.
* A step to replace the values of Liberty variables in the configuration files with the values of Component-Resource properties.
* A fix for problems on Windows platforms related to spaces in paths.

#### Version 9.828195

This release includes the following features and fixes:

* Support for specifying multiple servers for the Start Server, Stop Server, Create Server, Delete Server, and Join Collective steps.
* Support for specifying wlp.user.dir in plug-in steps.
* A fix for a character set issue when you write server configuration files on z/OS.

#### Version 8.802646

This release includes the following features and fixes:

* The plug-in now includes Register Host, Unregister Host, Update Host, and Upload File To Collective Host steps.
* Support for joining a server to a collective by using the collective controller.
* Support for starting and stopping a server in a collective by using the collective controller.

#### Version 7.778014

This release includes the following features and fixes:

* A new Join Collective step.
* A fix for attribute names that are used in the `quickStartSecurity` node.
* A new **optionalArgs** field for the Create Collective step.
* A fix for APAR PI60739Start Server step does not complete if started on Windows.

|Back to ...||Latest Version|IBM WebSphere Liberty |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[23.1174431](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereLiberty/ucd-WebSphereLiberty-23.1174431.zip)|[Readme](README.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
