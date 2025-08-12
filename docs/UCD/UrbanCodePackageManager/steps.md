
# IBM DevOps Package Manager - Process Steps

* [Create Package](#create_package)
* [Install Package](#install_package)
* [Rollback Package](#rollback_package)
* [Uninstall Package](#uninstall_package)
* [Verify Install](#verify_install)


## Create Package

Create package from files.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Content Directory | String | The directory containing the content of the package. | Yes |
| Output Directory | String | The directory to output the created package file to. | Yes |
| PACKAGER\_HOME | String | Location of the DevOps Package Manager. | No |
| Package Dependencies | String | A list of Package IDs that this Package will depend on. Enter each dependency on a separate line. Package ID is in the form NAME#VERSION | No |
| Package Name | String | The name of the package. | Yes |
| Package Type | String | The type of the package. | Yes |
| Package Version | String | The version of the package. | Yes |

## Install Package

Install package on target.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Force Install | Boolean | Attempt to install package even if it already installed. NOTE: THIS WILL ERASE ANY EXISTING INVENTORY / ROLLBACK DATA FOR THIS PACKAGE. | No |
| Install Properties | String | Properties given to the package manager during installation. Enter each property on a separate line. Entries will most likely be in the form: -Dkey=value | No |
| Inventory | String | Inventory name to use on the agent. | No |
| PACKAGER\_HOME | String | Location of the DevOps Package Manager. | No |
| Package Path | String | The path to the package file relative to the working directory. | Yes |
| Skip dependency checking | Boolean | Skips the dependency checking during install/uninstall. This is not suggested to use. | No |
| User impersonation name | String | User account name on the agent to impersonate. | No |
| User impersonation password | Password | Password for the impersonated account on the agent. Only needed on Windows. | No |

## Rollback Package

Rollback package on target.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Inventory | String | Inventory name to use on the agent. | No |
| PACKAGER\_HOME | String | Location of the DevOps Package Manager. | No |
| Package Name | String | The name of the package to be rolled back one version, or a Package ID to roll back to the specified version. | Yes |
| Rollback Properties | String | Properties given to the package manager during rollback. Enter each property on a separate line. Entries will most likely be in the form: -Dkey=value | No |
| Skip dependency checking | Boolean | Skips the dependency checking during install/uninstall. This is not suggested to use. | No |
| User impersonation name | String | User account name on the agent to impersonate. | No |
| User impersonation password | Password | Password for the impersonated account on the agent. Only needed on Windows. | No |

## Uninstall Package

Uninstall package on target.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Inventory | String | Inventory name to use on the agent. | No |
| PACKAGER\_HOME | String | Location of the DevOps Package Manager. | No |
| Package Name | String | The name of the package to be uninstalled. | Yes |
| Skip dependency checking | Boolean | Skips the dependency checking during install/uninstall. This is not suggested to use. | No |
| Uninstall Properties | String | Properties given to the package manager during uninstallation. Enter each property on a separate line. Entries will most likely be in the form: -Dkey=value | No |
| User impersonation name | String | User account name on the agent to impersonate. | No |
| User impersonation password | Password | Password for the impersonated account on the agent. Only needed on Windows. | No |

## Verify Install

Verify installed files.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Inventory | String | Inventory name to use on the agent. | No |
| PACKAGER\_HOME | String | Location of the DevOps Package Manager. | No |
| Package Name | String | The name of the installed package to be verified. | Yes |
| Skip dependency checking | Boolean | Skips the dependency checking during install/uninstall. This is not suggested to use. | No |
| User impersonation name | String | User account name on the agent to impersonate. | No |
| User impersonation password | Password | Password for the impersonated account on the agent. Only needed on Windows. | No |
| Verification Properties | String | Properties given to the package manager during verify. Enter each property on a separate line. Entries will most likely be in the form: -Dkey=value | No |



|Back to ...||Latest Version|IBM DevOps Package Manager |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[3.455115](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/UrbanCodePackageManager/Urbancode_Package_Manager-3.455115.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
