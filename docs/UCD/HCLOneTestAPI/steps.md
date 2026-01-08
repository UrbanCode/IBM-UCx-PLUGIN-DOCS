# HCL OneTest API - Process Steps

## Run HCL OneTest API Test

Run test using HCL OneTest API

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HCL OneTest API Installation Directory | textBox | Fully qualified path to HCL OneTest API installation directory. | Yes |
| Environment | textBox | Environment name. | Yes |
| Project Directory | textBox | Fully qualified path to HCL OneTest API project directory. | Yes |
| Project | textBox | HCL OneTest API project name (.ghp), relative to project directory | Yes |
| Test Resources | textBox | Semi-colon separated list of HCL OneTest API test resources, If more than one resource in your project has the same name, you will need to add the path to the resource. | Yes |
| Disable Results Publishers | checkBox | Disable any results publishers that can be configured in the project. | Yes |
| Results Publishers | textBox | Comma-separated list of results publishers. | Yes |
| Results server logging | selectBox | Specifies how the Results Server URL for executed items is written to the console. | Yes |
| Input Property File | textBox | Path to the input properties file. | Yes |

