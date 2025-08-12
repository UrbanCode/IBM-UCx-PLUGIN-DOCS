
# IBM Bluemix Auto-Scaling - Overview

This plug-in includes functionality to add and modify policies for IBM Bluemix Auto-Scaling. The plug-in communicates with IBM Bluemix by using the REST API.

To add the IBM Bluemix Auto-Scaling plug-in steps to processes, click **IBM BlueMix > Auto Scaling** in the step palette of the process editor.

## Prerequisites

The [IBM Containers plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/cloud-foundry-ibm-containers/) must be installed. The IBM Containers plug-in is required to log in to and log out from the IBM Bluemix console.

You must also download and install the IBM API Connect developer toolkit. For more information about installing the toolkit, see [Installing the toolkit](https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.toolkit.doc/tapim_cli_install.html) in the IBM API Connect help.

## Compatibility

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is compatible with agents running on operating systems that are supported by both IBM DevOps Deploy and the IBM Containers command-line interface. This plug-in does not support agents running on z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 1

Version 1 is the initial release of the plug-in. It includes a step to attach Auto-Scaling policies.

