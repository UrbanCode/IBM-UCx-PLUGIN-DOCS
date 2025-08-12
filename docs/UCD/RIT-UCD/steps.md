
# IBM Rational Integration Tester (RIT) - Process Steps

* [Run RIT Test](#run_rit_test)

## Run RIT Test

Use this step to run a test using IBM Rational Integration Tester.

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Disable Results Publishers | Boolean | When enabled, results publishers that can be configured in the project are disabled. | No | noResultsPublishers |
| Environment | String | The name of the environment. | Yes | environment |
| IBM Rational Integration Tester Installation Directory | String | The fully qualified path to IBM Rational Integration Tester installation directory. | Yes | installDir |
| Input Property File | String | The path to the input properties file. | No | inputPropertyFile |
| Project | String | The IBM Rational Integration Tester project name (.ghp), relative to the project directory | Yes | ritProject |
| Project Directory | String | The fully-qualified path of the IBM Rational Integration Tester project directory. | Yes | projectDir |
| Results Publishers | String | A list of results publishers. Separate each list item with a comma. | No | resultsPublishers |
| Results server logging | Enumeration | Specifies how the Results Server URL for executed items is written to the console. Valid values are absolute, ignore, and relative. | No | resultsServerLogging |
| Test Resources | String | A list of IBM Rational Integration Tester test resources. Specify each full path for each test resource.Separate each list item with a semi-colon. | Yes | testResources |
