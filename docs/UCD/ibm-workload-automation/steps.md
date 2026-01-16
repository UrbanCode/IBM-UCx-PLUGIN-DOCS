# IBM Workload Automation - Process Steps

## Import Job Stream Definition (Distributed)

Deploy job streams on distributed engines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workload Automation Path | textBox | Workload Automation installation path. | Yes |
| Directory Offset | textBox | The directory related to the current working directory containing the files to operate on. | No |
| Workload Automation Prefix | textBox | The prefix to be used in environment properties for Workload Automation mapping. | No |
| Environment Properties | textBox | A list of environment properties, separated by commas. For example, specify ${p:environment/allProperties} to add all environment properties as name-value pairs to the list of properties to update. | No |
| Replace Existing Definition | checkBox | The objects that were initially created at the first deploy are updated, if they are still present in the database, created if they are no longer present, and deleted if they are no longer present in this version of the objects. | No |
| Custom Encoding | textBox | Specify a character encoding to use when accessing the properties file. This field takes precedence over Use System Encoding. | No |
| Use System Encoding | checkBox | Select to use the local character encoding of the agent when accessing the properties file. | No |

## Generate JCL to import Job Stream Definition (zOS)

Generate the JCL to deploy job streams on zOS engines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | The directory related to the current working directory containing the files to operate on. | No |
| Job Card | textBox | Additional parameters for Job Card | No |
| JCL Samples Library | textBox | Name of the library containing the JCL samples | Yes |
| Subsystem Name | textBox | The name of the subsystem | Yes |
| Workload Automation Prefix | textBox | The prefix to be used in the environment properties for Workload Automation translate. | No |
| Environment Properties | textBox | A list of environment properties, separated by commas. For example, specify ${p:environment/allProperties} to add all environment properties as name-value pairs to the list of object names to translate. | No |
| Custom Encoding | textBox | Specify a character encoding to use when accessing the file with the definition. This field takes precedence over Use System Encoding. | No |
| Use System Encoding | checkBox | Select to use the local character encoding of the agent when accessing the file with the definition. | No |

