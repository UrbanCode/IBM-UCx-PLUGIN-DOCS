
# BitBucket Server - Overview

The BitBucket Server plug-in provides for integration with a BitBucket server.


## Compatibility

This plug-in requires DevOps Velocity version 2.5.0 and later.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode
DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-bitbucket-server/tags).

## History

### Version 1.1.26

* Added Regular Expression for Additional Branches field: some examples are :
* *: it could be used to get all the repositories. 
* **/*: it could be used for string followed by / followed by string
* PLUGINS*: it could be used for anything after PLUGINS
* /var/log/** will match all files in /var/log and all files in all child directories, recursively.
* /var/log/**/*.log will match all files whose names end in .log in /var/log and all files in all child directories, recursively.
* /home/*/.bashrc will match all .bashrc files in all user's home directories.
* /home/*/.ssh/**/*.key will match all files ending in .key in all user's .ssh directories in all user's home directories.

### Version 1.1.24

* **Initial Sync Date Field Added:** Under the hidden properties section of add integration page for the plugin an Initial Sync Date field is added. This field is optional and can be used only for the first sync.
* **Fix Resync Functionality:** The previous version of plugin had some bug in resync functionality.
* **Infinite Loop Bug Fix:** The previous version of the plugin had some bug that was making plugin events run in an infinite loop.
* **API Rate Limiting Implemented:** Plugin has been enhanced to better handle API rate limiting.
* **Additional Logs Added:** Additional debug, trace and warn logs are added to the plugin.
* **Error Handling:** No default branch is defined - error is shown in warning logs if there is no default branch for a repository.
* **Performance Improvement:** Plugin functionality is improved, previous version of the plugin was making more rest API calls to the BitBucket Server.

### Version 1.1.23

* **Removed Manual User Access Key:** From current version onwards, this plug-in will only support "Auto Generated User Access Key" feature of DevOps Velocity.
* **Added Category:** SCM is the category of BitBucket server plug-in.
    
### Version 1.1.22

* Rate limiting and resync implementation.

### Version 1.1.16

* Reducing vulnerabilities.

### Version 1.1.12

* Enhancement done to the UI fileds.

### Version 1.1.5

* Multiple Repository Support and User AccessKey Changes.


### Version 1.0.42

* Added support to pull commits from additional branches.

### Version 1.0.23

* Minor enhancements.

### Version 1.0.19

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.14

* Switch
build target on Jenkinsfile.
* Fix problem when history is empty.

### Version 0.0.13

* Update to api-client 1.0.11.


### Version 0.0

* Initial release

|Back to ...||Latest Version|BitBucket Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.26](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bitbucket-server/ucv-ext-bitbucket-server%3A1.1.26.tar.7z.001)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
