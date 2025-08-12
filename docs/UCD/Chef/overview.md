
# Chef - Overview


Chef is a tool for automating deployment tasks. The Chef plug-in includes a step that installs Chef and a step that uses Chef to install a Chef node on a system.

In the context of Chef automation, a *node* represents a computer system. A Chef node file includes a list of Chef recipes and roles. These recipes and roles point to automated tasks to run on the node.

To use this plug-in, first run the Install Chef step. Then, run the Install Chef Node step to configure the target system according to a Chef node file. You can run this step multiple times on the same target system to apply multiple Chef node files.

## Compatibility

Version 1 of this plug-in requires version 6.0.0 of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by both the IBM DevOps Deploy agent (except for z/OS).

This plug-in is supported to run against Chef v11.6.0-1 or higher.


## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

