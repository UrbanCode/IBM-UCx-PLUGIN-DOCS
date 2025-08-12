
# Artifactory Source Config - Overview


The Artifactory source configuration plug-in includes steps to complete the following tasks:

* Import Generic, Ivy, or Gradle packages from an Artifactory repository as a component version

## Compatibility

This plug-in requires Artifactory versions 2.0 or later. The Artifactory Pro edition is also supported. Some functions of the plug-in steps require Artifactory Pro version, such as recursive download.

This plug-in requires version IBM DevOps Deploy 6.0.1 or later.

This runs on all operating systems that are supported by the IBM DevOps Deploy agent.

## Upgrade note

When **upgrading to version 18 or later from an earlier version, the **Include Files** field has replaced the **File Extension** field. This will need to be updated by customers previously using the ‘File Extension’ field. If the field was previously blank, no action is necessary**

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 33 *April 29, 2024*

* Add support to configure a custom keystore to present a certificate to the artifactory server.

### Version 32 *June 29, 2023*

* Plugin upload issue resolved.

### Version 31 *June 20, 2023*

* RFE URBANCODE-I-564 implemented .

### Version 31 *June 20, 2023*

* RFE URBANCODE-I-564 implemented .

### Version 30 *Jan 30, 2023*

* Updated log4j dependency .

### Version 29 *Dec 12, 2019*

* RFE 131466 Add support for SHA-256 hash verification instead of SHA-1 and updated logging for verification.

### Version 28 *June 21, 2019*

* RFE 130123 Added optional description import property.
* Fixed broken upgrade path to version 25.
* Fixed APAR PH13703 Close responses to avoid connection pool timeouts.

### Version 27

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 26 *September 14, 2018*

* Fixes APAR PH02640, fixed issue where spaces in file path resulted in duplicate encoding error.
* Added back the extension field for legacy steps that use it.

### Version 25 *August 7, 2018*

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.
* Renamed importCount property to copyCount to support upgrades from older versions.

### Version 24 *June 15, 2018*

* Fix bug with recursive download folder layout.
* Updated and improved logging.

### Version 23 *May 30, 2018*

* RFE 113013, 119714 Added ability to check hashes on artifacts via the Artifactory API.
* RFE 120214 Added ability to login via API Key.
* Added ability to import a specific number of latest versions.

### Version 22 *April 17, 2018*

* Fix issue with upgrading from specific versions causing null pointer exception.

### Version 21 *March 15, 2018*

* RFE 102681 Added ability to allow insecure connections to Artifactory.
* Removed brackets from component version property values.

### Version 20 *March 7, 2018*

* APAR PI94831 Set artifactory version properties as list rather than only first value.
* Add back GroupID and ArtifactID for upgrade scenarios.
* Improve error handling during issues creating versions.

### Version 19 *January 5, 2018*

* Import version now sorts the imported versions by their creation date in Artifactory.

### Version 18 *December 13, 2017*

* Fixes APAR PI90693 Removed Latest Build Count functionality.
* RFE 113139 Adds Include Files and Exclude Files options to replace File Extension.

### Version 17 *October 25, 2017*

* Added ability to connect via HTTP proxy.

### Version 16 *October 9, 2017*

* Fixes APAR PI88475 Plugin now works when spaces exist in repo path.
* Changes failure setting version properties to warning with solution.

### Version 15 *August 31, 2017*

* Fixes APAR PI86374 Eliminates the cascading of old versions effect by including already imported versions in import count.
* Removed support for NuGet repository type. Please use the NuGet Source Config plug-in.
* Reformatted input parameters to better suit generic repositories. Maven Group IDs and Artifact IDs are now included as one Path

### Version 14 *August 21, 2017*

* Fixes APAR PI86118 Fixes issue when importing multiple versions when component has archived/inactive versions.

### Version 13 *June 25, 2017*

* Fixes APAR PI83660 Plugin now uses agent working directory rather than java tmp directory.

### Version 12 *May 26, 2017*

* Fixes APAR PI79876 Import Latest Build Count now ignores already existing versions.

### Version 11 *March 13, 2017*

* Plugin now downloads files and folders in version subfolders.
* A few logging and bug fixes.

### Version 10 *February 16, 2017*

* Fixes APAR PI76587. Not selecting Copy into Codestation now sets versions properties.

### Version 9 *December 15, 2016*

* Fixes APAR PI73859. Now Run Process After a Version is Created works even when no properties exist for artifact.
* Plug-in now properly sets output properties after version imports.

### Version 8 *November 18, 2016*

* Includes the ability unzip archived file types before uploading to a component version.

### Version 7 *November 8, 2016*

* Added functionality to set Artifactory properties as UCD component version properties.
* Added ability to set Artifactory properties as UCD version statues.
* Added ability to set Artifactory properties as links on UCD versions.
* Added ability to retrieve multiple file extension types.

### Version 6 *October 17, 2016*

* Fixes Defect: The Copy to CodeStation checkbox is ignored and files are copied to codestation regardless of preference. The Copy to Codestation checkbox is now functional.

### Version 5 *May 18, 2016*

* Fixes APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

### Version 4 *March 30, 2016*

* Version 4 of this plug-in includes the ability to import versions where the package name and version number are separated by a hyphen (-) in the version title as opposed to a period (.).

### Version 3 *February 1, 2016*

* Includes a fix for APAR PI56091.

### Version 2 *February 26, 2015*

* Fixes APAR PI35342 compatibility defect with IBM Urbancode Deploy version 6.1.0.4 and later.

### Version 1 *May 22, 2014*

* Initial release of the Artifactory Source Config plug-in.

