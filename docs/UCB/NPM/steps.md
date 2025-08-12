
NPM for IBM UrbanCode Build - Steps
===================================

# Steps


### Steps




### Process steps in the NPM plug-in

* [NPM Config](#npm_config)
* [NPM Init](#npm_init)
* [NPM Install](#npm_install)
* [NPM Publish](#npm_publish)
* [NPM Uninstall](#npm_uninstall)
* [NPM Update](#npm_update)


### NPM Config

Manage NPM configuration files


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | Add arguments for the config command. If there are multiple lines of arguments, each line will result in a separate npm config subcommand argument execution. | No |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |
| Sub-command | Enumeration:
* set
* get
* list
* delete
| Select a config sub-command | Yes |

### NPM Init

Create a package.json with default values.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |

### NPM Install

Install a package, and any package that it depends on.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | Add arguments for the install command in one or multiple lines. | No |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |

### NPM Publish

Publish a package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access | Enumeration:
* public
* restricted
| The package access level after publishing. This is either public or restricted. | No |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |
| Package | String | Package location e.g. a folder containing a package.json file or a url or file path to a gzipped tar archive containing a single folder with a package.json file inside. NPM will publish . if no package is supplied. | No |
| Tag | String | Registers the published package with the given tag. | No |

### NPM Uninstall

Uninstall a package, completely removing everything NPM installed on its behalf.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | Add arguments for the uninstall command in one or multiple lines. | No |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |

### NPM Update

Update a package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | Add arguments for the update command in one or multiple lines. If no package names are specified, all packages in the specified location (global or local) will be updated. | No |
| NPM Executable | String | The location of the NPM executable. If left empty, the NPM executable should be in the path environment variable. | No |



|Back to ...||Latest Version|NPM for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[1.1098517](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/NPM/NPM-1.1098517.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
