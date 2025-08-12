
# App Connect Enterprise - Overview


IBM App Connect Enterprise (ACE) combines the technologies of IBM Integration Bus with IBM App Connect Professional and cloud native technologies, creating a platform that supports the full breadth of integration needs across a modern digital enterprise.


The ACE plug-in allows you to automate an integration bus environment.


## Compatibility

* DevOps Deploy 6.0.1 and later
* IBM ACE version 12

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

## History

### Version 13

*  Log4j and Jettison dependency updated .

### Version 12.0

*  Adderessed authentication issue for StartIntegrationServer steps.

### Version 11.0

* ACE plug-in, be able to deploy multiple bars in one Deploy step.

### Version 10.0

* Add Use SSL checkbox to Deploy, DoesIntegrationServerExist, CreateIntegrationServer and RestartIntegrationServers steps.

### Version 9.0

* Support multiple server name for deploy step and implement auth for deploy steps

### Version 8.0

* Implemented Restart IntegrationServer Server steps

### Version 7.0

* Implemented auth for StartIntegrationServer and StopIntegrationServer

### Version 6.0

* Implemented auth for Create Integration Server Steps and Does integration server exist

### Version 5.0

* Support for IBM ACE Version 12 added

### Version 4.0

* Fixes RFE APPC-I-638: Policy Create and Update Functionality

### Version 3.0

* Fixes APAR: PH17165 – ACE Plugin deploy step should expose the integration node name

### Version 2.0

* Added steps for Does integration server exist process, Start integration server process, Stop integration server process, and Delete integration server process

### Version 1.0

* Initial release
