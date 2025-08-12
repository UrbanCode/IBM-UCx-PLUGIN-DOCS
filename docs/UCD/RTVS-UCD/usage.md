
# IBM Rational Test Virtualization Server (RTVS) - Usage

Use the Service Virtualization plug-in to automate the virtualization of services from IBM DevOps Deploy.

**Before you begin**

1. Install the DevOps Deploy server. For assistance, see [DevOps Deploy documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).
2. Install the Service Virtualization plug-in on the DevOps Deploy server. For assistance, see  [Installing plug-ins](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).
3. Install the DevOps Deploy agent and connect it to the DevOps Deploy server. For assistance, see [DevOps Deploy documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).
4. Install Rational Test Virtualization Server on the DevOps Deploy agent computer and apply a valid license. For assistance, see [Installing Rational Test Virtualization Server](http://www-01.ibm.com/support/knowledgecenter/SSBLQQ_8.7.0/com.ibm.rational.rtvs.ref.doc/topics/c_inst_rtvs_overview.html).

**About the task**


As a tester, you might have a large number of services to be virtualized against the latest builds of a software system. Instead of manually virtualizing services against every new build, you can install the latest build on an IBM DevOps Deploy Agent computer and use it to automatically virtualize the services for you. After deploying the Service Virtualization plug-in on the DevOps Deploy server, create a component and its processes, applications and its processes, environments, and resources. For information about how to create and configure these pieces, see [DevOps Deploydocumentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).

**Examples**

+ [Example: Virtualizing services in a component process](#component_process)
+ [Example: Virtualizing services with Rational Test Workbench](#RTW)

## Example: Virtualizing services in a component process

This component process creates and updates an environment in IBM Rational Test Control Panel. You can use a similar process as part of an [overall scenario that includes virtualized services](#RTW). This process assumes that the application binary files are in the component. It also assumes that the environment contains an installation of Rational Integration Tester. The process runs the following steps in order:

1. The [Create Transient Environment](../stepssv#create_transient_environment) step uses a base environment stored in Rational Test Control Panel to create a transient environment.
2. The [Update Transient Environment](../stepssv#update_transient_environment) step updates the host name tag in the transient environment to correspond to the host where the environment is deployed, which could be in the cloud.
3. The [Start Stub](../stepssv#start_stub) step initiates the virtualized service.
4. The [Stop Stub](../stepssv#stop_stub) step shuts down the virtualized service.
5. The [Delete Transient Environment](../stepssv#delete_transient_environment) step deletes the transient environment.

## Example: Virtualizing services with Rational Test Workbench

The following example describes a scenario that includes a component process that uses virtualized services. In this example, an application in IBM DevOps Deploy comprises two components. One component is the user interface for a web application running on an application server. The second component is a virtual representation of a web service.

### Before you begin

You must install IBM Rational Test Workbench, including IBM Rational Test Control Panel and IBM Rational Integration Tester. To learn more about Rational Test Workbench, see the [Rational Test Workbench Knowledge Center](http://www.ibm.com/support/knowledgecenter/SSBLQQ/welcome).

### About this task

To virtualize the web service, you can use the Green Hat plug-in to create a transient environment that mimics the behavior of the actual web service. The user interface component is deployed as any other component to a node where the IBM DevOps Deploy agent is installed, either on a specific host or on the cloud. When the application server is configured on the user interface component, the proxy is installed so that HTTP calls are routed to the IBM Rational Test Control Panel server, which then returns the data from the stub.

### Procedure

1. Use IBM Rational Test Control Panel to record and publish the virtual services that you want to emulate. These virtual services are also known as stubs. When you create the stubs, add environment tags to replace the recorded data with dynamic data, such as the host name. To learn more about stubs, see [Stubs](http://www.ibm.com/support/knowledgecenter/SSBLQQ_8.7.0/com.ibm.rational.rtvs.ref.doc/topics/c_virtualization_overview.html) in the Rational Integration Tester documentation.
2. In IBM DevOps Deploy, create an application with two components, one for the user interface component and one for the virtualized service. To learn more about creating applications, see [DevOps Deploy documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).
3. Create a component process to install the user interface component. The following steps show an example set of process steps for an application running on Tomcat.
1. Use the Install Tomcat step in the Tomcat plug-in to install the application server.
2. Use the Download Artifacts step from a source control plug-in such as the DevOps Versioned File Storage plug-in to download the user interface application.
3. Use the Unzip step in the File Utils plug-in to extract the user interface application.
4. Use the Modify Tomcat Artifacts step in the Tomcat plug-in to update the WSDL host name that the user interface application uses for calls to web services.
5. Use the Update Config File step in the Tomcat plug-in to add the proxy information for IBM Rational Test Control Panel to the tomcat6 configuration file. For Tomcat, you change the JAVA\_OPTS properties for http.proxyHost and http.proxyPort to point to the host name and port number of the IBM Rational Test Control Panel proxy.
6. Use the Start Tomcat step in the Tomcat plug-in to start the application server.
1. [Create Transient Environment](../stepssv#create_transient_environment) Use a base environment that you have created in IBM Rational Test Control Panel to create a transient environment. The transient environment is used to start the stub with dynamic property values.
2. [Update Transient Environment](../stepssv#update_transient_environment) Update the environment with properties specific to the deployment environment.
3. [Start Stub](../stepssv#start_stub) Start the virtualized service in the transient environment.
4. [Stop Stub](../stepssv#stop_stub) Shut down the virtualized service.
5. [Delete Transient Environment](../stepssv#delete_transient_environment) Delete the transient environment.

### Results

When you run the application process, the user interface component is deployed and then the virtual services component is deployed.


|Back to ...||Latest Version|IBM Rational Test Virtualization Server (RTVS) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[4.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RTVS-UCD/RTVS-UCD-4.0.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
