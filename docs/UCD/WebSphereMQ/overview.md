
# IBM-MQ

## Overview

The WebSphere MQ plug-in enables you to interact directly with the messaging system.

### Compatibility

This plug-in requires version 6.0 of IBM DevOps Deploy.

The DevOps Deploy plug-in for WebSphere MQ works with WebSphere MQ versions 7.5 and newer.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

Currently, zOS is not supported.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

### History

#### Version 13

* Updated jettison and log4j dependencies.

#### Version 12

Version 12 includes the following steps:

* Define Server Connection Channel
* Define Authinfo for AUTHTYPE – IDPWOS
* Define Remote Queue
* Define Service

#### Version 11

Version 11 includes the following update:

* The Principals and Groups properties in the Set Permissions for Object, Topic, and Queue steps are no longer required.

#### Version 10

Version 10 includes the following update:

* Add support for remote queue manager administration.

#### Version 9

Version 9 includes the following update:

* Support property file encryption.

#### Version 8

Version 8 includes the following update:

* Single quotes will be escaped as necessary. Previously escaped single quotes will be untouched.
* GroovyRuntimeException: Stream Closed error is resolved.

#### Version 7

Version 7 includes multiple updates:

* Define Queue: Added many new properties.
* Define Queue Alias: Added many new properties.
* Define Topic Subscription: Added WSCHEMA, SELECTOR, and DESTQMGR properties.
* Alter Queue: Added FORCE flag.

#### Version 6

Version 6 includes multiple updates:

* Define Client Channel creates a Client-Connection Channel, instead of a Server-Connection Channel
* Renamed Define Client Channel step to Define Client-Connection Channel
* Added the following steps:
* Alter Queues
* Alter Client-Connection Channel
* Alter Server-Connection Channel
* Alter Receiver Channel
* Alter Sender Channel
* Alter Topic
* Define Namelist
* Delete Namelist
