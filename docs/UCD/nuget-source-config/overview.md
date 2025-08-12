
# NuGet - Overview

The NuGet source configuration plug-in automates importing of artifacts from a NuGet repository. Artifacts are in the format of a NuGet package with the .nupkg extension. Packages contain compiled code (DLLs) and files related to that code. Artifacts can be imported for a specific package version.

This plug-in includes one step:

* + [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **NuGet**.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in uses the NuGet REST API version 2. For information about the API, see [NuGet API](https://docs.microsoft.com/en-us/nuget/api/overview).

This plug-in supports these servers:

* + - NuGet servers v2.X
- Nexus Repository Manager servers v2.14 through v3.3.1-01

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 17

Log4j and Jettison dependency updated .

### Version 16

* + - RFE: 148202 Pagination support for V2 APIs added.

### Version 15

* + - A version’s importing field will be correctly set and marked as finished importing when creating versions that are not copied to codestation.

### Version 14

* + - Fix for CVE-2019-4233: Man in the middle vulnerability

### Version 13

* + - RFE: 130125 Added optional description import property.

### Version 12

* + - RFE: 123879- Added support for nuget api version v2 and v3.

### Version 11

* + - RFE: 123879 Added support to opt/opt-out for pre-release versions.

### Version 10

* + - APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 9

* + - Fixes APAR PI98736 Resolves cannot trim on null error when using automatic import.

### Version 8

* + - Fixes APAR PI94738 Update version list filter to include ID to pkg matches.

### Version 7

* + - Fixes APAR PI92176 Unable to parse Date from Artifactory repository.

### Version 6

* + - Fixes APAR PI89772 Unable to reach NuGet repositories hosted in Artifactory and Nexus.
- Added Proxy support.
- Updated to Apache Commmons Lang3 library.
- Import all artifacts on automatic and default import.
- Import a specific version with defined version name when run manually.
- Changed Extensions of Files to Convert property to a checkbox called Convert File Charset because only the .nupkg extension should be imported.

### Version 5

Updated to ensure all response texts are zOS compatible.

### Version 4

* + - Fixes APAR PI81655. Support for Nexus v2.14 to v3.3.1-01
- If version download fails, an empty component version will no longer be created.
- Use working directory for downloads instead of the Temp directory.
- Automatic deployments can now occur on automatic import.
- Artifacts now have the following naming scheme: [Package].[Version].nupkg

### Version 3

Support file property encryption.

### Version 2

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 1

Initial release of the plug-in.

