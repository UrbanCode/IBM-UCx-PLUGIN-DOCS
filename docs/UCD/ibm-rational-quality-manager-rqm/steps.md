
# IBM Rational Quality Manager (RQM) - Steps

## Process steps in the Rational Quality Manager plug-in

* [Execute Test Case](#execute_test_case)
* [Execute Test Suite](#execute_test_suite)


## Execute Test Case

Execute a test case.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Adapter ID | String | The numeric ID or name of the adapter to use to run the test script in the test case. | No |
| Execution Arguments | String | List of optional, blank space-separated arguments. The arguments can be as follows: 1. -exitOnComplete=true or false. if true, command will not exit until execution is completed or canceled. If false (default), command will exit immediately after triggering execution. 2. -printResultUrl=true or false : If true the URL for the associated execution result will be logged. Note: For automated test case execution, this option also requires -exitOnComplete=true to be specified. 3. -variables=var1Name:var1Value,var2Name:,va3Name:var3Value : Specify Execution variable and optional values to be passed to execution. Note: Variable name and value are separated by colon :, if value is provided. | No |
| Password | Password | The password to use when connecting to Rational Quality Manager. | Yes |
| Project Area Name | String | The project area to use in Rational Quality Manager. | Yes |
| RQM User | String | The user name to use when connecting to Rational Quality Manager. | Yes |
| RQMExecutionTool.jar | String | Specify the folder or full path to the RQMExecutionTool.jar. RQM testing requires the RQMExecutionTool.jar that matches the installed RQM version. | Yes |
| Repository URL | String | The repository URL of the Rational Quality Manager server. For example, https://hostname:9443/qm. | Yes |
| Test Case Execution Record ID | String | The numeric ID of the test case execution record to run. | Yes |
| Test Script ID | String | The numeric ID of the test script to run in the test case. | No |

## Execute Test Suite

Execute a test suite.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Adapter IDs | String | The numeric IDs or names of the adapters, separated by commas, to use to run the test scripts in the test suite. | No |
| Execution Arguments | String | List of optional, blank space-separated arguments. The arguments can be as follows: 1. -exitOnComplete=true or false. if true, command will not exit until execution is completed or canceled. If false (default), command will exit immediately after triggering execution. 2. -printResultUrl=true or false : If true the URL for the associated execution result will be logged. Note: For automated test case execution, this option also requires -exitOnComplete=true to be specified. 3. -variables=var1Name:var1Value,var2Name:,va3Name:var3Value : Specify Execution variable and optional values to be passed to execution. Note: Variable name and value are separated by colon :, if value is provided. | No |
| Password | Password | The password to use when connecting to Rational Quality Manager. | Yes |
| Project Area Name | String | The project area to use in Rational Quality Manager. | Yes |
| RQM User | String | The user name to use when connecting to Rational Quality Manager. | Yes |
| RQMExecutionTool.jar | String | Specify the folder or full path to the RQMExecutionTool.jar. RQM testing requires the RQMExecutionTool.jar that matches the installed RQM version. | Yes |
| Repository URL | String | The repository URL of the Rational Quality Manager server. For example, https://hostname:9443/qm. | Yes |
| Test Script IDs | String | The numeric IDs of the test scripts, separated by commas, that are steps in the test suite. | No |
| Test Suite Execution Record ID | String | The numeric ID of the test suite execution record to run. | Yes |


