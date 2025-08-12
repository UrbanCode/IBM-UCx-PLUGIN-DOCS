
# GitHub-Release - Overview

The Github Release plug-in automates importing artifacts from a GitHub repository. You can import ZIP and TAR archive files into your DevOps Deploy server. The plug-in creates a component version of release in the DevOps Deploy server for the specified release being imported. You can specify a specific version to import or use the default to import the latest version.

When creating the component, youll supply information described on the Import Version step. After the component is created use the Components page in the user interface to import a version of the artifacts.

This plug-in includes one step which has no input properties:

* [Import Version](Steps/#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **GitHub Release**.


## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps").

## History

### Version 5

* Log4j and Jettison dependency updated .

### Version 4

* Fixed the defect that prevented to download release assets to UCD.

### Version 3

* PH24721 – GIT-RELEASE UCD PLUG-IN does not use BASE64-ENCODE forUSERNAME/ PASSWORD / AUTHENTICATION HEADER.

### Version 2

* Fixing CVE:CVE-2019-4233.

### Version 1

* Initial release of GitHub Release source configuration plugin.

|Back to ...||Latest Version|GitHub-Release |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[5.1154619](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sourceconfig-github-release/ucd-GitHubReleaseSourceConfig-5.1154619.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
