
# IBM Installation Manager - Process Steps


* [Execute Response File](#execute_response_file)
* [Install or Upgrade IBM Installation Manager](#install_or_upgrade_ibm_installation_manager)
* [Uninstall IBM Installation Manager](#uninstall_ibm_installation_manager)


## Execute Response File

Run a response file with IBM Installation Manager.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Data Location | String | The path to the Installation Manager application data. | No |
| IMCL Path | String | Full path to the imcl executable. | Yes |
| Master Password File | String | Specify the master password file, a text file that contains a passphrase to secure the storage file. Set appropriate operating system permissions on this file. | No |
| Response File Location | String |  | Yes |
| Response File Variables | String | This field applies only to IBM Installation Manager 1.8 and later. Use one comma to separate variables and two commas if a value contains a comma: var1=val1,,val2,,val3,var2=val4,var3=val5 | No |
| Secure Storage File | String | Specify a secure storage file that contains passwords for repositories that require authentication. | No |

## Install or Upgrade IBM Installation Manager

Install or upgrade IBM Installation Manager.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Data Location | String | The path to the Installation Manager application data. | No |
| Directory where the Installation Kit was unzipped | String | Specify the directory that contains the extracted installation kit. | Yes |
| Installation Directory | String | Specify the path where IBM Installation Manager will be installed. | No |
| Installation Log | String | Specify the name of the installation log file. | No |
| Mode | Enumeration:
* administrator
* nonadministrator
| Administrator/root or nonadministrator are supported. Group is not supported. | Yes |

## Uninstall IBM Installation Manager

Uninstall IBM Installation Manager


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Data Location | String | The path to the Installation Manager application data. | Yes |
| Mode | Enumeration:
* administrator
* nonadministrator
| Administrator/root or nonadministrator are supported. Group is not supported. | Yes |



|Back to ...||Latest Version|IBM Installation Manager ||
| :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[0]()|[Readme](README.md)|[Overview](overview.md)|
