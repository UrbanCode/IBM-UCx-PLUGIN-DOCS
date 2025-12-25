# Microsoft Software Installer (MSI) - Process Steps

* [Install MSI](#install_msi)
* [Uninstall MSI](#uninstall_msi)
* [Execute msiexec](#execute_msiexec)
## Install MSI

Install MSI

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| MSI File | textBox | The msi package to be installed. | Yes |
| Logging Level | selectBox | Specify the installation's level of logging. | No |
| Save Log File | checkBox | Select to save the log file following the completion of the step. File path will be saved as output property. | No |
| Install Options | textAreaBox | Install options to use during install. This should be a newline seperated list. If options are specified, they will override all previously specified arguments. | No |

## Uninstall MSI

Uninstall MSI

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| MSI File | textBox | The msi package to be uninstalled. | Yes |
| Logging Level | selectBox | Specify the installation's level of logging. | No |
| Save Log File | checkBox | Select to save the log file following the completion of the step. File path will be saved as output property. | No |
| Uninstall Options | textAreaBox | Options to use during uninstall. This should be a newline seperated list. If options are specified, they will override all previously specified arguments. | No |

## Execute msiexec

Execute MSIexec

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Logging Level | selectBox | Specify the installation's level of logging. | No |
| Save Log File | checkBox | Select to save the log file following the completion of the step. File path will be saved as output property. | No |
| Flags | textBox | The flags to be passed to msiexec. e.g. /i for install or /fa for repair. | Yes |
| Update Options | textAreaBox | Options to use during execute. This should be a newline seperated list. If options are specified, they will override all previously specified arguments. | No |

