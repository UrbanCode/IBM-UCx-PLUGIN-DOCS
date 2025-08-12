
Subversion for IBM UrbanCode Build - Overview
=============================================

# Overview


### Overview




The Subversion plug-in automates gathering code from a Subversion repository to include in the build process.Steps are also included to create Subversion branches.

This plug-in includes the following steps:

* [Svn Changelog](#svn_changelog)
* [Svn Checkout](#svn_checkout)
* [Svn Cleanup](#svn_cleanup)
* [Svn Quiet Period](#svn_quiet_period)
* [Svn Tag](#svn_tag)


### Step palette

To access this plug-in in the palette, click **SCM** > **Subversion**.

### Compatibility

The steps in this plug-in run on all supported platforms.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode")

### History

#### Version 7.752914 released on March 9, 2016

Version 7.752914 includes the following features and fixes:

* Added RPX dependency.
* Added translation.

#### Version 6.673610

Version 6.673610 includes the following features and fixes:

* Fixed an issue when a tag is copied from a branch, change logs in that branch are not listed as changes for its path does not match the tag path

#### Version 5.638529

Version 5.638529 includes the following features and fixes:

* Fixed a.n issue where communication with the UrbanCode Build server would fail if it was running with an IBM JDK/JRE.
