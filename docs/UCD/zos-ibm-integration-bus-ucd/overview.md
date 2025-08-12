
# IBM Integration Bus (IIB) plugin Deploy step for zOS - Overview

IBM Integration Bus, from the WebSphere product family, enables business information to flow between disparate applications across multiple hardware and software platforms. The plug-in includes only deploy step from original [IBM Integration plugin](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP/) optimized to improve CPU time.

For information on usage, including a sample of how to install IBM Integration Bus using IBM DevOps Deploy, see How to automate IBM Integration Bus installation and deployments using IBM DevOps Deploy and Chef.

This plugin supports only version 10 of IBM Integration Bus (IIB).


## Step palette

To access this plug-in in the palette, click **Middleware > Enterprise Service Bus > zOS WebSphere Message Broker**.

## plug-in steps

**zOS Deploy**

## Compatibility

* This plug-in can be used only with IBM Integration Bus versions 10
* This plug-in requires version 7.0.0 or later of IBM DevOps Deploy.
* The IBM DevOps Deploy agent must run on an IBM Java Runtime Environment (JRE) or Java Development Kit (JDK). Other JREs and JDKs are not supported. This is a requirement of the IBM Integration API.
* This plug-in runs on only z/OS operating system and DevOps Deploy agent running on a z/OS.

## History

### Version 1.0

* Release Notes: (Released December 8, 2021) Initial Release
* Removed Jettison Library with vulnerability
