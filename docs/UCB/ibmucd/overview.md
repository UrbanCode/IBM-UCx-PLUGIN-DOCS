
IBM UrbanCode Deploy for IBM UrbanCode Build - Overview
=======================================================

# Overview


### Overview




This plug-in includes steps to create component versions and upload files to component versions in IBM UrbanCode Deploy.


### Step palette

To access this plug-in in the palette, click **Deploy** > **Tools** **UrbanCode Deploy**.

### Compatibility

The steps in this plug-in run on all supported platforms.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode Build](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode Build").

### History

#### Version 56

This release includes few fixes.

#### Version 55

This release includes few fixes.

#### Version 54

This release includes few fixes.

#### Version 53

This release includes few fixes.

#### Version 52

Added an option to fail an Upload Artifact step if either the directories do not exist or there are no artifacts in the directories.

#### Version 51

Fixed the Approval reject scenario while “waiting for deployments” that need approval in UCD.

#### Version 50

Address the edge case of waiting for deployments that need approval in UCD.

#### Version 49

Fix timeout issue in “Deploy Component Version” when waiting for deployment result.

#### Version 48

Fix a bug when parsing the list of properties in “Deploy Component Version” and “Deploy with Snapshot” steps.

#### Version 47

Address a number of issues in “Create Component Version”, “Add Component Version Status”, and “Create Auth Token” steps.

#### Version 46

Add new step for invoking Buztool.

#### Version 45

Add new steps for creating and deleting user authentication tokens in the UrbanCode Deploy server.

#### Version 44

Updated deploy step to wait for process completion with timeout and added box to skip waiting.

#### Version 43

Fixed missing AuthenticationCredentials import in Upload All Artifact Sets.

#### Version 42

Added Create Environment Snapshot and Deploy With Snapshot steps.

#### Version 41

Use VersionCLIResource when creating version properties.

#### Version 40

Add the ability to specify description and snapshot in Deploy Component Version step.

#### Version 39

Add the ability to specify properties in Deploy Component Version step.

#### Version 38

Avoid terminating the step execution thread while error stream is being copied to output stream.

#### Version 37

Fix incompatibility issue with Groovy 2.4.10.

#### Version 36

Make syncing of statuses between UrbanCode Build/UrbanCode Deploy fail-safe for UCB servers older than 6.1.2.2

#### Version 35

Support property file encryption.

#### Version 34

Support encrypted input and output properties.

#### Version 33

Add retry logic when uploading artifacts to IBM Urbancode Deploy server fails with a network exception.

#### Version 32

Fix for getVersionStatus to handle versions with non-url-safe characters properly

#### Version 31

This release includes an Update the Create Component Version step to set the property that indicates to the IBM UrbanCode Build server that artifacts are stored on an IBM UrbanCode Deploy server. This feature requires IBM UrbanCode Build 6.1.2 or later and IBM UrbanCode Deploy 6.2.0.2 or later. This release also includes a fix for an issue where not providing version properties caused an error.

#### Version 30

This release adds the ability to store artifacts on the IBM UrbanCode Deploy server. This feature requires IBM UrbanCode Build 6.1.2 or later and IBM UrbanCode Deploy 6.2.0.2 or later.

#### Version 29

This release includes translated steps and properties.


|Back to ...||Latest Version|IBM UrbanCode Deploy for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[56.1175564](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ibmucd/DevOps-deploy-56.1175564.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
