
# Apache Tomcat - Overview

The Apache Tomcat plug-in includes steps to deploy web applications to the Apache Tomcat server and remove applications from the server. The plug-in also includes steps to start and stop the Apache Tomcat server.

Apache Tomcat is an open source web server and servlet container that the Apache Software Foundation (ASF) developed. Apache Tomcat implements the Java Servlet and the JavaServer Pages (JSP) specifications from Oracle Corporation, and provides a Java HTTP web server environment for Java code to run.

The following process steps are available in this plug-in.

* Deploy Application
* Start Application
* Start Tomcat
* Stop Application
* Stop Tomcat
* Undeploy Application

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in works with versions of Apache Tomcat 6.0 or later.

This plug-in runs on all operating systems that DevOps Deploy supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 8

* Updated log4j dependency .

### Version 6.718095

* A step to check the status of a deployed application against an expected status.
* An output property on Check Application Status step to display the status of the specified application.

### Version 5.641593

* Version 5 includes a fix for APAR PI35342, a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 4.455075

* Version 4 adds an option to specify the CATALINA\_BASE property for the Start Tomcat and Stop Tomcat steps.


|Back to ...||Latest Version|Apache Tomcat ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1150600](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Tomcat/ucd-Tomcat-8.1150600.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
