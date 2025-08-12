
# Web Utilities - Overview

Use the Web Utilities plug-in to send HTTP requests to web servers in IBM DevOps Deploy processes.

This plug-in includes the following steps:

* [Send HTTP Call](steps.md#send-http-call)
* [Upload to FTP Server](steps.md#upload-to-ftp-server)
* [Delete from FTP Server](steps.md#delete-from-ftp-server)

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

This plug-in is runs on all operating systems that the IBM DevOps Deploy agent supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 18

* Log4j dependency updated

### Version 17

* Minor bug fix for the timeout property

### Version 16

* Configure timeout for HTTP calls.

### Version 15

* New Delete from FTP Server step.

### Version 14

* Added Local Passive and Local Active data connection mode options to the Upload to FTP Server step.

### Version 13

* Fixes issueSend Http Call step appears to ignore setting contentType JSON resulting in responseStatus 415unsupported media type.

### Version 12

* Fixes APAR PH01058Send HTTP Call step corrupts downloaded binary files.

### Version 11

* Fixes APAR PI96481Support specifying accept type as a parameter for Send HTTP Call.
* Improved Logging.

### Version 10

* Support application/zip content type.

### Version 9

* Fixes APAR PI81182Error in token authentication of the Send HTTP Call step.

### Version 8

* Fixes APAR PI74319Error in Send HTTP Call when Http entity is null.

### Version 7

* Support property file encryption.
* Fixed bug: Casting exception when given output file.
* Fixed bug: Setting output properties.

### Version 6

* Fixed defect: untrustedSSL does not work in Web Utility plug-in
* Fixed defect: Web Utility throws null point exception
* Fixed defect: Web Utility plug-in doesnt encode JSON correct in zOS
* Fixed defect: Web Utility throws null point exception
* Fixed bug: Username and Password fields does not work in edge case
* Fixes APAR PI68335: HTTP authorization header visible in deployment log
* Fixed bug: Web Utilities plugin uses SSLv3 for Send HTTP Call

### Version 5

This release adds the ability to upload a file to an FTP server.

### Version 3

This release includes a fix for APAR PI35342, a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 2

This release includes the ability to specify a content type and fixes a defect related to HEAD requests.

### Version 1

Initial release of the plug-in.

