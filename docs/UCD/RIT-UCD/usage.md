
# IBM Rational Integration Tester (RIT) - Usage

Use the Rational Integration Tester plug-in to continuously initiate integration tests from IBM DevOps Deploy.

## Before you begin

1. Install the DevOps Deploy server. For more information, see the installing topics in the [DevOps Deploy documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).
2. Install the Rational Integration Tester plug-in on the DevOps Deploy server. For details, see  [Installing plug-ins](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).
3. Install the DevOps Deploy agent and connect it to the DevOps Deploy server. For additional information,see the [DevOps Deploy documentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).
4. Install Rational Integration Tester on the DevOps Deploy agent computer and apply a valid license. For additional information, see [Installing IBM Rational Integration Tester](http://www-01.ibm.com/support/knowledgecenter/SSBLQQ_8.7.0/com.ibm.rational.rtw.install.doc/topics/t_install_rit.html).

## About the task

As a tester, you might have a large number of integration tests to run against the latest builds of a software system. Instead of manually running the tests against every new build, you can install the latest build on an IBM DevOps Deploy Agent computer and let it automatically start the tests for you.

After deploying the Rational Integration Tester plug-in on the DevOps Deploy server, create the following elements:

* Component and its processes
* Applications and its processes
* Environments
* Resources

For information about how to create and configure DevOps Deploy elements, see [DevOps Deploydocumentation](http://www.ibm.com/support/knowledgecenter/SS4GSP/ucd_welcome.html).

## Example: Running integration tests

After deployment, the Rational Integration Tester plug-in is available at **Rational Test Workbench** > **Rational Integration Tester** > **Run Integration Test** on the DevOps Deploy server. The plug-in for Rational Integration Tester includes a single step: Run Integration Tests. The component process runs tests that are part of a Rational Integration Tester project previously stored on an DevOps Deploy agent.

To create a workflow, complete the following tasks:

1. Click the component process for which the **Run RIT Test** step is to be added. The Tools view displays the available plug-in steps.
2. From Rational Integration Tester, drag the **Run RIT Test** step into the design space.
3. Specify the properties for the step. For property details, see the **Steps** page in this document.
4. After configuring the properties, save the step.

## Step palette

To access this plugin in the palette, click **IBM Rational Test Workbench** > **IBM Rational Integration Tester**.


|Back to ...||Latest Version|IBM Rational Integration Tester (RIT) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[5.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RIT-UCD/RIT-UCD-5.0.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
