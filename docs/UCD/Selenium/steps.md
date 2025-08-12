
# Selenium - Process Steps

* [Run Test Suite](#run_test_suite)


## Run Test Suite

Run a Selenium test suite


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Selenium Jar Location | String | The fully-qualified path to the selenium-server-standalone (v2) or selenium-html-runner (v3) JAR file. For example: C:\Program Files\Selenium\selenium-server-standalone-2.53.1.jar. | Yes |
| Starting URL | String | The starting URL on which to execute the tests. For example: http://www.google.com. | Yes |
| Test Failure Threshold | String | The maximum percentage of failed tests that, if surpassed, will result in the steps failure. Specify a value from 0 to 100. A value of 0 will have the step fail on any failure. A value of 100 will ignore test results and will always succeed if there are no runtime errors. Default value is 100. | No |
| Test Results | String | The fully-qualified path of the test results file or folder. If using a selenium-server-standalone-2.X.X.jar, specify a file. If using a selenium-html-runner-3.X.X.jar, specify a folder. For example: C:\Documents\testResults[.html]. If left empty, a file/folder named `testResults` will be generated in the working directory. | No |
| Test Suite | String | The fully-qualified path to the HTML suite file. For example: C:\Documents\testSuite.html. | Yes |
| Web Browser | String | The web browser to run the tests. For example: \*firefox. | Yes |


