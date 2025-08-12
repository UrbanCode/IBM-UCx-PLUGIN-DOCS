
Selenium for IBM UrbanCode Build - Steps
========================================

# Steps


### Steps




### Process steps in the Selenium plug-in

* [Run Test Suite](#run_test_suite)


### Run Test Suite

Run a Selenium test suite


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Port Number | String | The port for running the test. The default port is 4444. | No |
| Selenium Jar Location | String | The fully-qualified path to the Selenium JAR file. For example: `C:\Program Files\Selenium\selenium-server.jar`. | Yes |
| Starting URL | String | The starting URL on which to execute the tests. For example: `http://www.google.com`. | Yes |
| Test Failure Threshold | String | Thepercentage of test failures needed to fail the job step. Specify a value from 0 to 100. | No |
| Test Results | String | The fully-qualified path of the test results file. For example: `C:\Documents\testResults.html`. | Yes |
| Test Suite | String | The fully-qualified path to the HTML suite file. For example: `C:\Documents\testSuite.html`. | Yes |
| Web Browser | String | The web browser to run the tests. For example: `*firefox`. For list of supported browsers, see the Selenium website. | Yes |



|Back to ...||Latest Version|Selenium for IBM UrbanCode Build ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[6.752852](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Selenium/Selenium-6.752852.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
