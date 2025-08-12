
# Nexus Repository Manager V3 - Overview

The Nexus Repository Manager V3 plug-in provides steps to integration DevOps Deploy with Nexus Repository Manager V3.

This plug-in includes the following step:

* Import Version

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later. Please note that this plugin was written against the Nexus Repository Manager V3 REST API, and will not work with V2. For Nexus Repository Manager V2 support, please see the [Nexus Source Config Plugin](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/nexus-source-config/).

This plug-in runs on all operating systems that DevOps Deploy supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## Note for version 5
For Raw Repos this version of plugin will create different version for different kind of applications.


Fro Ex. If we have 2 applications, a java one and a python one in in a "Raw" format repo in Nexus, as shown below:
com
└─── 🌟 example
     ├─── 🚀 my-java-app1.0
     │    └─── 📦 my-java-app-1.0.jar
     └─── 🐍 my-python-app1.0
          └─── 📝 sample1.py



This version of Plugin will create 2 different versions named as "my-java-app1.0" and "my-python-app1.0" with their respective artefacts. 

The previous version of the plugin doesn't support this feature and creates version with name of the 1st level folder(here "com") which is fixed in this.


## History

### Version 5

* RFE-URBANCODE-I-598: Updated plugin to support multiple application files import from a Raw   repository in Nexus.
* Updated deprecated library HttpClientBuilder to HttpClientBuilder2.
* Updating Jettison library to 1.5.4 for CVE-2023-1436.

### Version 4

* Updated dependencies for log4j and jettison.

### Version 3

* A version's importing field will be correctly set and marked as finished importing when creating versions that aren't copied to codestation.


### Version 2

* Fixing CVE:CVE-2019-4233.

### Version 1

Initial release of this plug-in.

