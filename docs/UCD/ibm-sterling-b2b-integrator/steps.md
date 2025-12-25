# IBM Sterling B2B Integrator - Process Steps

* [Start B2Bi](#start_b2bi)
* [Stop B2Bi](#stop_b2bi)
* [Get Service Status](#get_service_status)
* [Restart Windows Server](#restart_windows_server)
* [Import MAPs](#import_maps)
* [Install or Uninstall Third-Party Jars](#install_or_uninstall_third-party_jars)
* [Import Batch File](#import_batch_file)
* [Assemble Import Batch File](#assemble_import_batch_file)
* [Add Workflow](#add_workflow)
* [Apply Configurations](#apply_configurations)
## Start B2Bi

Starts all B2B services, including all ASI services plus all adapter container(s) and the webDAV server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | Yes |

## Stop B2Bi

Stops all B2BI services, including all ASI services plus all adapter container(s) and the webDAV server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | Yes |

## Get Service Status

Get the Status of service (up or done), by browse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Testing URL | textBox | The hostname to check if the service is up | No |

## Restart Windows Server

Restart widnows server. Quit after the command submitted immediately. This method is also available in fully supported Windows System Tools plug-in.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

## Import MAPs

Get the Status of service (up or done), by browse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | No |
| MAPs Directory | textBox | Full path to the MAPs directory. | No |

## Install or Uninstall Third-Party Jars

install/uninstall third-party Jars

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | No |
| Jars Folder | textBox | Full path to a folder containing jars to install or uninstall. For Example: C:/tmp/apach*.jar | No |
| Vendor Name | textBox | The name of vendor of the installed Jars. For example: 'weblogic' | Yes |
| Vendor Version | textBox | The version of the vendor's product. For example: '12.1.2' | Yes |
| Target JVM options | selectBox | Select if you want to make this new JAR available to the Application Server and Agent when running this step. | Yes |
| Uninstall | checkBox | Select to uninstall the chosen Jars. Ignore if installing. | Yes |
| Do Not Deploy | checkBox | Select to not deploy the Jars. Ignore if deploying. | Yes |

## Import Batch File

Get the Status of service (up or done), by browse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | No |
| Import Batch File | textBox | Batch File to be import | No |
| Report File Name | textBox | File name to send the import report to. | No |

## Assemble Import Batch File

Assemble a import batch for the batch file import. It will add one line for one xml file in XML folder, and append it to a importBatchFile, which will be created if not existing.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Batch File | textBox | Full path to the Batch File to be create. | Yes |
| XML Folder | textBox | Path to the imported XML Folder. | Yes |
| Resource Tag | textBox | The resource tag to give the imported files. | Yes |
| Number Of Threads | textBox | Assign the process a number of threads to use. | Yes |
| Password | secureBox | If process is secured, enter the required password. Default value is 'password' | Yes |

## Add Workflow

Add workflow using addWorkflow.cmd

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | No |
| Options | textBox | Enter any number of the options to modify the new workflow. | No |
| Import XML File | textBox | Full path to the XML File being added to the Workflow. | No |

## Apply Configurations

Apply configuration files using setupfiles.cmd

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Sterling Home | textBox | Full path to the Sterling home directory. | No |

