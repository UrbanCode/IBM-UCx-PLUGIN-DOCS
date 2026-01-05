
# BitBucket Cloud - Overview

The BitBucket Cloud plug-in provides for integration with a BitBucket Cloud.


## Compatibility

This plug-in requires DevOps Velocity version 2.5.0 and later.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode
DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-bitbucket-cloud/tags).

## History

### Version 1.0.37

* **Bug Fix**: Fixed an issue where Bitbucket Pull Requests continued to appear as open in the Value Stream even after being closed or merged. Pull Request statuses are now correctly updated and reflected in the Value Stream.

* **Update**: The App Password field has been replaced with API Token authentication. Customers must generate and use an API Token with the appropriate scopes for successful authentication.

**Note**:
* The Atlassian account email address should be entered in the Username field instead of the account username.
* For lower versions of BitBucket cloud (below 1.0.37) API token should be provided in place of App Password as App Password deprecated.
* Base API Url should be https://api.bitbucket.org/2.0


### Version 1.0.36

* Updated the API endpoint to https://api.bitbucket.org/2.0
* Improved code coverage reporting so both unit tests and functional tests are now included.
* Updated dependencies and re-enabled previously skipped functional tests to ensure better stability and validation.

### Version 1.0.29

* **Initial Sync Date Field Added**: Under the hidden properties section of add integration page for the plugin an Initial Sync Date field is added. This field is optional and can be used only for the first sync.

### Version 1.0.26

* **Removed Manual User Access Key**: From current version onwards this plug-in will only support Auto Generated User Access Key feature of DevOps Velocity.
* **Added Category**: SCM is the category of BitBucket Cloud plug-in.

### Version 1.0.22

* Reduced vulnerability.

### Version 1.0.16

* Removed repoSlug and projectName field.
* Added multiple repositories support in repoName.
* Added otherBranches field.
    
### Version 1.0.15

* UAK Related Changes.

### Version 1.0.8

* Auto-generated UAK update.

### Version 1.0.7

* Initial Release.
