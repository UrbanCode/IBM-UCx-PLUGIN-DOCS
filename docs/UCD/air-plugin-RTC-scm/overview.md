
IBM Rational Team Concert - SCM - Overview
==========================================

# Overview


## Overview



The IBM Rational Team Concert SCM source plug-in supports creating components from the Rational Team Concert source-code management system.

## Compatibility

* IBM DevOps Deploy version 6.0.1 or later
* Rational Team Concert version 4.0.3 or later

This plug-in supports all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy"). The Rational Team Concert scm tool must be installed and available on the IBM DevOps Deploy agent that is used to import from Rational Team Concert.

To learn more about using and installing the Rational Team Concert scm tool, see [Source control command line reference](http://www-01.ibm.com/support/knowledgecenter/SSCP65_4.0.3/com.ibm.team.scm.doc/topics/c_scm_cli.html "Rational Team Concert help") in the Rational Team Concert help.

To learn more about importing components by using agents, see [Creating components](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=components-creating "Creating components").

To learn more about the Rational Team Concert `scm` tool, see [Getting started with the Jazz SCM command line in Rational Team Concert](https://jazz.net/library/article/620 "Jazz.net article").

To learn more about using Rational Team Concert source control with IBM DevOps Deploy, see [Achieving continuous deployment with DevOps Deploy by integrating with Rational Team Concert](https://jazz.net/library/article/1480 "Jazz.net article 2").

## History

### Version 7.1044519

Version 7 includes a fix for APAR PI87707. The user who requested a manual version import is now being tracked.

### Version 6.860157

Version 6 includes a change to support property file encryption.

### Version 5.796848

Version 5 includes a fix for APAR PI62305. The plug-in now includes the version ID in the returned properties.

### Version 4.786648

Version 4 includes a fix for APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

### Version 3.753645

Version 3 can import snapshots or live streams from the Rational Team Concert server. The Import Versions Automatically function is improved.

