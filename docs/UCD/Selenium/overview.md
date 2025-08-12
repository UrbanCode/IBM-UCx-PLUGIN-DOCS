
# Selenium - Overview


The Selenium plug-in automates running Selenium commands as a step within the deployment process. Selenium is a standalone Java program, with which you can run HTML test suites. It supports all browsers.

This plug-in includes one step.

* [Run Test Suite](#run_test_suite)

## Compatibility


This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in runs on all operating systems that DevOps Deploy supports.

This plug-in requires access to either the Selenium RC (1.0), Selenium Webdriver (2.X) Standalone Server JAR file, or Selenium Html Runner (3.X) JAR file. The `selenium-server-standalone-2.XX.X.jar` and `selenium-html-runner-3.XX.X.jar` files can be found on [Seleniums Download page](http://www.seleniumhq.org/download/) under **previous releases**. Note: Version 3 of the `selenium-server-standalone` JAR will require additional environment set up. For simplicity, we recommend the latest `selenium-html-runner` JAR.


## Installation


No special steps are required for installation. This plug-in is included with the installation of IBM Urban Code Deploy.If you need to install the plug-in again, see [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").


## History

### Version 9

Log4j and Jettison dependency updated .

### Version 8

* Enhance usability and improve logging of the Selenium automation plug-in.
* The Test Results file path and result, totalTime, numTestTotal, numTestPasses, numTestFailures, numCommandPasses, numCommandFailures, and numCommandErrors test suite results are recorded as output properties.
* Fix APAR PI82820Selenium plugin fails with IndexOutOfBoundsException
* Support for Selenium v2 and v3 has been added. If running Selenium v2, specify the selenium-server-standalone-2.XX.X.jar. If running Selenium v3, specify the selenium-html-runner-3.XX.X.jar.
* The Test Results file is now an optional property. A file or folder, depending on version of Selenium, named testResults will be created as necessary.

### Version 7

Support property file encryption.

### Version 6

Added RPX dependency and English translations

### Version 5

Improved error logging.

### Version 4

Fixes APAR PI35342compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 3

Installing this plugin will give you access to the Run Test Suite step. This step will be available for use in processes.


|Back to ...||Latest Version|Selenium ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.1154067](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Selenium/ucd-Selenium-9.1154067.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
