
# Chef - Process steps
============

* [Install Chef](#install_chef)
* [Install Chef Node](#install_chef_node)


## Install Chef

Installs Chef Solo (11.6.0-1)

This step has no input properties.

## Install Chef Node

Executes a chef node.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Chef Installation Directory | String | Path to your Chef installation or if no value is provided we will attempt to use the chef-solo.(bat|sh) that is on the System path. On Windows this would usually be C:\opscode\chef and on linux /opt/chef but you can provide a path to any location where you have installed Chef. On Windows you can provide a path in Unix format and we will append the System drive letter to the path automatically, this is useful in cases where you might not know what the drive letter should be. i.e. /opscode/chef will be translated into C:\opscode\chef If the Install Chef step was used to install Chef in an earlier step in the process, you can reference the output property chefInstallDir from that step in this field. i.e. ``${p:%Install Chef%/chefInstallDir}`` where %Install Chef% is the name you set for the Install Chef step. | No |
| Node Name | String | Name of the node to execute. | Yes |


