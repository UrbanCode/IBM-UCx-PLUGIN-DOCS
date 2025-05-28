
# Artifactory - Overview

The Artifactory plug-in automates the following tasks:

* Import artifacts from an Artifactory repository corresponding to Maven, Gradle or Ivy builds
* Import NuGet packages from a remote NuGet repository through an Artifactory repository
* Attach properties to a file or folder
* Retrieve the latest build artifact within a SNAPSHOT
* Retrieve an archive file that contains all the artifacts for a specific build

This plug-in includes one or more steps, click **Steps** for step details and properties.

## Step palette

To access this plug-in in the palette, click **Repositories > Artifact > Artifactory**.

## Compatibility

This plug-in works with Jfrog Artifactory versions 2.0+ and Artifactory Pro edition.

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

This plug-in runs on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 26

* Fixed known issue DT436088 Artifactory Plugin fails with groovy.lang.MissingPropertyException.

### Version 25

* RFE - URBANCODE-I-626 .

### Version 24

* Log4j and Jettison dependency updated .

### Version 20.993061*August 23, 2018*

* Rebuilt version 19.

### Version 19.985405*July 3, 2018*

* Update apiKey default values to the proper capitalization.

### Version 18.975755*March 28, 2018*

* RFE 110211Add includes/excludes properties to download steps.
* Update default values to work with both repoPath and groupId/artifactId source config values.

### Version 17.969357*February 5, 2018*

* Fixes APAR PI93362The download URL path in the Download NuGet Package step is now constructed correctly.

### Version 16.942809*October 31, 2017*

* Fixes APAR 167244Updated to the correct dependency for commons-lang3.jar.
* Fixed missing props variable in Promote Build, Set Item Properties, and Retrieve Build Archive.

### Version 15.940425*October 24, 2017*

* Fixes APAR PI87217Updated Download Latest Build for SNAPSHOT step to work with classifiers.
* Fixes APAR PI88901Automation plugin default values are now consistent with Source Config plugin updates.
* GroupId and ArtifactId replaced with repoPath field.
* RFE 106827Added ability to connect via HTTP Proxy.
* Update to only send warning when credentials not provided.

### Version 14.930031*August 21, 2017*

* Updated to ensure all response texts are zOS compatible.

### Version 13.920771*June 14, 2017*

* Fixes APAR PI82717.Fixes Null Pointer Exception on downloading latest build for snapshot.
* Fixes APAR PI82995.Download latest version for snapshot no longer downloads artifact as hidden.

### Version 12.919476*May 30, 2017*

* Fixes APAR PI82033.Plug-in now fails without credentials.

### Version 11.917234*April 17, 2017*

* Implements closeable HTTP responses and updated logging.
*

### Version 10.898513*March 13, 2017*

* Fixes APAR PI77731. Plug-in Now downloads files and folders beneath root directory.
* Fixes APAR PI77820. Fixes issue where occasionally downloading files with no extension would throw an error.
* Eliminated the need for non-Maven downloads to conform to groupId/artifactId/version formatting.

### Version 9.895134*March 1, 2017*

* Fixes APAR PI76601 where several plug-in steps returned success on failure.

### Version 8.885250*February 13, 2017*

* Gives the user the option to trust all certificates when running steps against Artifactory.

### Version 7.868927*December 28, 2016*

* Support property file encryption.
* Fixes APAR PI74061Issue with downloading latest build for snapshot.

### Version 6.841796*October 31, 2016*

* Retrieve Build Artifacts Archive step to retrieve an archive file that contains all the artifacts for a specific build.
* More default values are specified for steps.

### Version 5.812003*August 11, 2016*

* API key authentication for all steps.
* A fix for a URI encoding issue.
* The Promote Build Step can now set properties on promotion.
* The source and target repositories are now mandatory fields for the Promote Build Step.
* More default values are specified for steps.

### Version 4.801324*June 27, 2016*

* This release includes the Download Latest Build for SNAPSHOT step, which addresses RFE 87062.

### Version 3.796048*June 13, 2016*

* This release includes the Set Item Properties step. The Set Item Properties step attaches properties to files and folders.

### Version 2.776497*April 18, 2016*

* Promote Build Step AddedChange the status of a build, optionally moving or copying the build to a target repository.

|Back to ...||Latest Version|Artifactory ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1176841](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Artifactory/ucd-Artifactory-26.1176841.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|