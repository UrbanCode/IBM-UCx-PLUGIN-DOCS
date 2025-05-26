
# Aspera - Overview


The Aspera plug-in uses the Aspera ascp (Aspera secure copy) client to upload and download files to and from an Aspera server. The Aspera ascp client uses the FASP transfer protocol, which can outperform TCP-based file transfer protocols such as FTP and HTTP. For more information about FASP transfer technology, see the [Aspera website](https://www.ibm.com/products/aspera).

## Compatibility

The IBM DevOps Deploy automation plug-in for Aspera requires access to an Aspera server, version 2.7 or higher.

The Aspera ascp client is required for the download and upload steps. The Aspera ascp client can be downloaded from the [Aspera website](https://www.ibm.com/products/aspera/downloads). (The ascp client is installed when you install the browser plug-in.)

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for plug-in installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

The Aspera ascp client is required for the download and upload steps. The Aspera ascp client can be downloaded from the [Aspera website](https://www.ibm.com/products/aspera/downloads). (The ascp client is installed when you install the browser plug-in.)

## History

### Version 2

Version 2 of the plug-in adds support for defining files to upload and download by using a text file.

### Version 1

Version 1 of the plug-in includes steps for uploading and downloading files from an Aspera server.


|Back to ...||Latest Version|Aspera |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[3.1100729](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/aspera/aspera-3.1100729.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
