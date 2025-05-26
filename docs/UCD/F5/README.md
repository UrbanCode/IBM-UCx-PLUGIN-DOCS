
# F5 BIG-IP

This plug-in provides steps to interact with F5’s BIG-IP family of products. The plug-in communicates with the BIG-IP systems by using the iControl API.

**Platform Support:**

* This plug-in is supported to run on all operating systems that are supported by both the IBM DevOps Deploy agent (except for z/OS) and the iControl Java client.
* This plug-in packages v11.1 of the iControl Java client and is supported to run against all versions of F5 BIG-IP products of v11+.
* For newer versions of F5, use the hidden **iControl Jar Location** property to point to the iControl Java client installed with your F5 server.
* Note: F5 users who have not upgraded to v11+, use F5 plugin version 10. In F5 versions 11.0+, the iControl API changed how to identify Nodes. Nodes are now referenced by their names, instead of IP Addresses.


## Available Steps

Node, Pool, and Pool Member Management **Create Pool**: Create a pool. **Delete Pool**: Delete a pool. **Create Node**: Create a node. **Delete Node**: Delete a node. **Enable Node**: Enable a specified node for all pools and ports. **Disable Node**: Disable a specified node for all pools and ports. **Confirm Enabled Node**: This step succeeds if the node is online and enabled. The step fails if the node is offline or disabled. **Confirm Disabled Node**: This step succeeds if the node is offline and disabled. The step fails if the node is online or enabled. **Add Pool Member**: Add a node to a pool. **Remove Pool Member**: Remove a node from a pool. **Enable Pool Member**: Enable a node in a specified pool. **Disable Pool Member**: Disable a node in a specified pool.


iRule and Data Group Management **Create iRule**: Create the specified iRule. **Delete iRule**: Delete an iRule. **Get iRule Statistics**: Retrieve statistics for an iRule. **Create Address Data Group**: Create or modify an address data group. A data group is also known as a class. **Create External Data Group**: Create an external data group from a file in the data group file list. A data group is also known as a class. **Create String Data Group**: Create or modify a string data group. A data group is also known as a class. **Create Value Data Group**: Create or modify a value data group. A data group is also known as a class. A value is also known as an integer. **Modify External Data Group**: Modify the file format and mode of an external data group. A data group is also known as a class. **Delete Data Group**: Delete a data group. A data group is also known as a class.



|Back to ...||Latest Version|||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1107123](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/F5/F5-24.1107123.zip)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Steps](steps.md)|[Downloads](downloads.md)|
