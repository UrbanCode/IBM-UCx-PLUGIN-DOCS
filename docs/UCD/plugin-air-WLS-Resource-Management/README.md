
# Oracle WebLogic Server Resource Management

This plug-in provides steps to support automated deployment of various WebLogic server resources, such as connection factories, quotas, templates, queues, JDBC data sources, file stores, and subdeployments.

Each step is self-contained. That is, connection credentials that are required to connect to the WebLogic server is contained in each step. All Step properties include location information for the following required files:

* A JMX JAR file which contains connection information file for accessing the WebLogic server
* JMX properties files that define the objects.

**Platform Support:**

* This plug-in is supported for use with WebLogic Server version 10.3 or later.
* This plug-in requires IBM DevOps Deploy version 6.0.1 or later.


## Available Steps

Refer to the [documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/plugin-air-WLS-Resource-Management/steps.html "Installing plug-ins in DevOps Deploy") for a list of available steps.



|Back to ...||Latest Version||||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1056547](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-WLS-Resource-Management/plugin-air-WLS-Resource-Management-6.1056547.zip)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
