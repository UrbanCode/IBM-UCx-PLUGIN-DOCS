
IBM Rational Test Workbench Web UI Tester - Usage
=================================================

# Usage


### Usage




Use the Rational Test Workbench Web UI Tester plugin to continuously initiate the test and compound test run from IBM UrbanCode Deploy.From version 9.0, Rational Test Workbench Web UI Tester is the new name for Rational Test Workbench Eclipse Client. **Before you begin**

* Install IBM Rational Test Workbench Web UI Tester version 8.7 or later and UrbanCode Deploy agent on the computer where the tests will be run.
* Install UrbanCode Deploy server and deploy the plugin on the server. For information about installing UrbanCode Deploy, see its [documentation](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.install.doc/topics/install_ch.html).
* Install UrbanCode Deploy Agent and connect it to UrbanCode Deploy server. See the [documentation](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.install.doc/topics/agent_install_ov.html).
* Ensure that Rational Test Workbench Web UI Tester is not running.
* To initiate the mobile test runs, ensure that all the devices are set to the passive mode and the playback-ready apk files are installed.

**About the task** As a tester, you might have a large number of regression tests to run on the latest build of the product. Instead of manually running the tests on every new build, you can install the latest build on the UrbanCode Deploy Agent computer and let UrbanCode Deploy launch the tests for you.

After deploying the Rational Test WorkbenchWeb UI Tester plugin on the server, create the component and its processes, applications and its processes, the environments, and the resources. For information about how to create these different pieces, see UrbanCode Deploy [documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).

**Procedure to create a workflow**

1. To create a workflow for the newly created component process, click the component process. The Tools view displays the available plugin steps.
2. From Rational Test Workbench > Eclipse Client, drag the **Run RTWec Test** step to the design space.
3. Specify the properties for the step. For information about the properties, see the [Steps](https://www.urbancode.com/plugindoc/steps-rtwec) page.
4. After you configure the step properties, save the step by clicking Save.

A typical process for the Rational Test Workbench Web UI Testerplugin will look like the following snapshot:

[![rtw-ucd](rtw-ucd.png)](rtw-ucd.png)

A process with multiple tests will look like the following snapshot:

[![rtw-ucd-multitests](rtw-ucd-multitests.png)](rtw-ucd-multitests.png)

If you have installed multiple products on one target machine, either in the same or different package groups, you can use a single process that includes steps from different products. You must install the plugins of all of the products that you want to use. The process will look like the following snapshot:

[![rtw-ucd-multiprodtest](rtw-ucd-multiprodtest.png)](rtw-ucd-multiprodtest.png)


|Back to ...||Latest Version|IBM Rational Test Workbench Web UI Tester ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[10.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RFT-WebUI-UCD/RFT-WebUI-UCD-10.1.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
