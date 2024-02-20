
CodeStation - Overview
======================

# Overview


### Overview




The CodeStation plug-in provides steps to download artifacts from and upload artifacts to CodeStation.

### Compatibility

This plug-in requires IBM UrbanCode Build version 6.1 or later.

The steps in this plug-in run on all supported platforms.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode Build](http://www-01.ibm.com/support/knowledgecenter/#!/SS8NMD_6.1.1/com.ibm.ucbuild.doc/topics/plugin_ch.html "Installing plug-ins in UrbanCode Build").

### History

#### Version 25

CodeStation failures are resolved.

#### Version 24

Add option to set agent’s codestation cache dir.

#### Version 23

Fix infinite loop during artifact upload if the includes pattern resolves to empty.

#### Version 22

Update codestation client jar dependency to be able to properly use the charset value sent by UCB, where applicable.

#### Version 21

Fix parsing value for the Additional Hashes field of the artifact upload steps.

#### Version 20

Change the tag to Repositories/Artifact/CodeStation.

#### Version 19

Add optional http request timeout property to Upload All Artifacts step.

#### Version 18

Add new timeout property to Upload Artifacts step to allow configuring the http request timeout when uploading artifacts.

#### Version 17

Add missing jar required by newer version of codestation client.

#### Version 16

Fix issue in Download Dependencies step when there is dependency conflict.

#### Version 15

Add infrastructure support property file encryption.

#### Version 14

This version of the plug-in includes translated steps and properties.

#### Version 13

This version of the plug-in uses a newer version of the CodeStation client, which handles excludes correctly and can handle uploads of a large number of files.


|Back to ...||Latest Version|CodeStation |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[25.1165172](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/CodeStation/codestation-25.1165172.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
