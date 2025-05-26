
# Apache HTTP Server - Usage


You can use the Apache HTTP Server plug-in to start and stop the Apache HTTP server that is running on either a UNIX or Windows operating system.

In an UNIX environment, the **apachectl** script is used to start and stop the Apache HTTP server. The Apache HTTP Server plug-in steps uses this script.The Start and Stop steps issue an **apachectl -k** command when they process the steps.


In a Windows environment, the Apache HTTP server is installed as a service automatically during the installation. The plug-in steps calls the Apache Service Monitor to process starting and stopping the server.


## **Step palette**

To access this plug-in in the palette, click **Application Server** > **Apache**.


|Back to ...||Latest Version|Apache HTTP Server ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[4.1154066](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Apache/ucd-Apache-4.1154066.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
