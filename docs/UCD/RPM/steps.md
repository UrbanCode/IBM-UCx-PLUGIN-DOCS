
# RPM - Process Steps

* [Install RPM](#install_rpm)
* [Uninstall RPM](#uninstall_rpm)
* [Update RPM](#update_rpm)


## Install RPM

Install an RPM package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Install Options | String | One or more options to be used when installing the package. Put each option on a separate line. See the [RPM Guide](http://rpm5.org/docs/rpm-guide.html) for a list of options. | No |
| RPM packages | String | A list of one or more packages to be installed. Put each package name on a separate line. | Yes |

## Uninstall RPM

Remove a package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Erase Options | String | One or more options to use when removing the package. Put each option on a separate line.See the [RPM Guide](http://rpm5.org/docs/rpm-guide.html) for a list of options. | No |
| Package name | String | A list of one or more packages to be uninstalled. Put each package name on a separate line. | Yes |

## Update RPM

Update a package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| RPM packages | String | A list of one or more RPM package names to be installed. Put each package name on a separate line. | Yes |
| Update Options | String | One or more options to use when updating the package. Put each option on a separate line.See the [RPM Guide](http://rpm5.org/docs/rpm-guide.html) for a list of options. | No |



|Back to ...||Latest Version|RPM ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[4.1100816](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RPM/RPM-4.1100816.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
