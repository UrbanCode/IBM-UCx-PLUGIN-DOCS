# CICS TS - Usage


* [Setting up resources for simple management of properties](#setting-up-resources-for-simple-management-of-properties)
* [Deploying new load modules and performing a NEWCOPY on the related programs](#deploying-new-load-modules-and-performing-a-newcopy-on-the-related-programs)

## Setting up resources for simple management of properties

Before you begin, ensure the following:

* Ensure your UCD agent is installed. For more information on installing UCD agents, see [Installing agents from the command line](http://www.ibm.com/support/knowledgecenter/SS4GSP_7.2.0/com.ibm.udeploy.install.doc/topics/agentInstall.html?).
* Ensure that the CICS region or CICSplex you want to connect to is available through the CICS Management Client Interface (CMCI).

### About this task

You can use Resources in DevOps Deploy to reduce the manual configuration needed in each of your deployment processes. Resources contain properties that you can use within the steps of your processes. The properties defined within a given resource are inherited by their descendants.

The following diagram represents a suggested CICS resource tree, which shows a sysplex with two agents running on different logical partitions. One of these logical partitions contains two CICSplexes managed by a single WUI Server. One of the CICSplexes contains a number of CICS regions and system groups.The *Core Banking System* component is assigned to the *AOR* system group, and the  *Catalog Back-End* component is assigned to the *TORs* system group. Properties that are defined for a higher-level resource (for example, a sysplex) are inherited by the contained components and resources (for example, several CICSplexes).

![](media/ucd_resources_1.png?resize=640%2C480)Diagram showing a possible CICS resource tree.
When you add a new CICS step to a process, the step contains a number of default values that refer to properties. You can view all available default input properties for the CICS TS plugin on the **Steps** page under the *Default input properties* topic.

For CICS steps, it may be useful to set up a resource tree as previously described, defining properties at the following resource levels:


| Property            | Resource with tag                 |
|---------------------|-----------------------------------|
| ```cics.host```     | Agent                             |
| ```cics.cmciport``` | WUI                               |
| ```cics.cicsplex``` | CICSplex                          |
| ```cics.scope```    | CICSplex, System Group, or Region |
| ```cics.username``` | Sysplex                           |
| ```cics.password``` | Sysplex                           |

For more general information on property inheritance, see [Referring to properties](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=deployment-properties).

## Deploying new load modules and performing a NEWCOPY on the related programs

Before you begin, ensure the following:

* Ensure your UCD agent is running. (You can check this by clicking on the **Resources** tab, then clicking on the **Agents** tab. The status of the agent should be Online.)
* Ensure that the CICS region or CICSplex you want to connect to is available through the CICS Management Client Interface (CMCI).

### Process

1. The Copy Artifacts step loads the artifacts that make up the z/OS component version. Use the FTP Artifacts step if build and deployment are on two different z/OS systems.
2. __Deploy Data Sets__ step deploys the component version to z/OS by copying datasets and members to their required location.
3. The **New Copy Resources** step then performs a NEWCOPY of a specified program or list of programs.

![Diagram showing a process with Copy Artifacts,Deploy Data Sets, and New copy resources steps.](media/ucd_cicsts_doc_scenario_process22.png?resize=241%2C364)

Diagram showing a process with Copy Artifacts,Deploy Data Sets, and New copy resources steps

## Deploying and undeploying CICS applications

* [Component and component version for a CICS application](#component-and-component-version-for-a-cics-application)
* [Component process to deploy a CICS application](#component-process-to-deploy-a-cics-application)
* [Component process to undeploy a CICS application](#component-process-to-undeploy-a-cics-application)
* [Required properties](#required-properties)

### Component and component version for a CICS application

Components represent deployable items and the processes, properties, and other configuration that operate on them. For additional information, see [Components](https://www.ibm.com/support/knowledgecenter/SS4GSP_7.2.0/com.ibm.udeploy.doc/topics/comp_ch.html) in the product documentation.

Create a Component to store your CICS application ready for deployment. The component name should match the CICS application name. For example: `com.ibm.cics.minibank.application`

A version of the *Component* is created by your build script. The script typically extracts the Eclipse projects that consist of the source of the CICS application (including the binding, application, and bundles) from your source code management (SCM) system. The script then calls the [CICS TS build toolkit](https://www.ibm.com/docs/en/cics-ts/6.x?topic=applications-cics-application-build-automation-cics-build-toolkit) to build the application. The build output directories and files are stored in UCD as a new *Component Version*.

### Component process to deploy a CICS application

A CICS application is deployed using **Deploy application** step.

Define your component process to take the following actions:

1. Download the artifacts to a temporary location.
2. Call the CICS build toolkit to resolve variables in the application.
3. Copy the resolved application to the CICS platform home directory.
4. Use Deploy application step to define, install, and make the application available in CICS.

![Image showing the default values for the Deploy application step](media/deploy_app.png?resize=541%2C294)

Image showing the default values for Deploy application step
## Component process to undeploy a CICS application

You can undeploy a CICS application by using the **Undeploy application** step.

Optionally, you can use the component process to remove the application and application binding directories. You should not remove the CICS bundle directories, as it is likely they are shared by several applications, or several versions of the same application.

![default values for the Deploy application step](media/undeploy_app.png?resize=573%2C509)

Image showing the default values for theUndeploy application step
### Required properties

The following properties are required by **Deploy application** and **Undeploy application** steps:


| Property                           | [Recommended property context](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.0/com.ibm.udeploy.doc/topics/ud_properties_context.html) | Example value                                                                                                     |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| component.name                     | Component                                                                                                                                     | com.ibm.cics.minibank                                                                                             |
| cics.application.definition.name   | Component                                                                                                                                     | minibank                                                                                                          |
| cics.application.binding.directory | Component                                                                                                                                     | ``${p:component.name}``.``${p:cics.platform.definition.name}``.binding\_``${p:cics.application.binding.version}`` |
| cics.application.version           | Component version                                                                                                                             | 1.0.0                                                                                                             |
| cics.application.binding.version   | Component version                                                                                                                             | 1.0.0                                                                                                             |
| cics.platform.definition.name      | Environment                                                                                                                                   | prod                                                                                                              |
| cics.platform.home                 | Environment                                                                                                                                   | /var/cics/CICSPLX1/prod                                                                                           |

## Connecting securely with SSL

* [Overview](#overview)
* [Configuring a keystore and truststore](#configuring-a-keystore-and-truststore)
* [Configuring SSL in CICS](#configuring-ssl-in-cics)
* [Configuring SSL in the CICS TS plug-in](#configuring-ssl-in-the-cics-ts-plug-in)

### Overview

You can use SSL to provide additional security when connecting between the DevOps Deploy agent on z/OS and CICS. Connecting with SSL is available using client certificates or HTTP basic authentication. Connecting with client certificates stored on z/OS in a security manager such as RACF or zFS has the benefit of avoiding the storage and maintenance of user IDs and passwords on the DevOps Deploy server.

* For SSL with HTTP basic authentication, skip to [Configuring SSL in CICS](#configuring-ssl-in-cics).
* For SSL with certificates, start with [Configuring a keystore and truststore.](#configuring-a-keystore-and-truststore)

### Configuring a keystore and truststore

Firstly, in your security manager, configure a key ring and certificate for the CICS regions user ID.

1. If no CA certificate exists, define a self-signed CA certificate.
2. Define your userids certificate, signed with a CA certificate.
3. Define your userids key ring.
4. Add both the CA and userids certificates to the userids key ring.

Secondly, using the same steps, configure a key ring and certificate for the agents userid. Alternatively, you can use JKS or PKCS12 format keystores for the agent. For example usage, see [Configuring SSL in the CICS TS plug-in](#configuring-ssl-in-the-cics-ts-plug-in).

Finally, in order to complete the handshake, connect the CA certificate of the CICS region to the agent users key ring, and the CA certificate of the agent user to the CICS region’s key ring. This can be done using the RACDCERT CONNECT command, with USAGE(CERTAUTH).

For details on using RACF commands, see [RACF command syntax](https://www.ibm.com/docs/en/zos/3.1.0?topic=reference-racf-command-syntax "RACF command syntax") in the z/OS product documentation.

### Configuring SSL in CICS

1. If you are using a CICSplex, you must enable CPSM security. To do this, update your CMAS CICSplex EYUPARM file with SEC(YES).
2. Configure your CMCI TCPIPSERVICE resource with SSL support.
* Update your WUI SIT parameters with SEC=YES, adding KEYRING=*my-keyring* if you are using SSL with certificates.
* For SSL with server and client certificates, update your WUI initialization parameters with the following example configuration:

```

CMCIAUTH(CERTIFICATE)
CMCISSL(CLIENTAUTH)

```
* For SSL with HTTP basic authentication, update your WUI initialization parameters with the following example configuration:

```

CMCIAUTH(BASIC)
CMCISSL(SSL)

```

For details of available configurations, see [Configuring CICS to use SSL](https://www.ibm.com/docs/en/cics-ts/6.x?topic=layers-configuring-cics-use-ssl) in the CICS product documentation.

### Configuring SSL in the CICS TS plug-in

Each CICS step has default,hidden properties. In order to use SSL, update the relevant properties with the following values.


| Property            | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SSL                 | Set to **true**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Keystore Location   | The location of the keystore that is used to provide credentials for client-certificate authentication. For files in zFS, use a hierarchical file path such as `/u/myuser/keystore.jks` or `file:///u/myuser/keystore.jks`.                                                                                                                                                                                                                                                                                                  |
| Keystore Type       | The type of the keystore that provides credentials for client-certificate authentication. If unspecified, the agents default Java keystore type is used. For keys contained in a key ring managed by a security manager, use JCERACFKS when the keys are stored in software, or JCECCARACFKS when the keys are stored in hardware with ICSF.                                                                                                                                                                                 |
| Keystore Password   | The password of the keystore that provides credentials for client-certificate authentication. For keys contained in a key ring managed by a security manager, leave this value empty.                                                                                                                                                                                                                                                                                                                                        |
| Truststore Location | The location of the truststore that verifies credentials. For files in zFS, use a hierarchical file path such as ```/u/myuser/truststore.jks``` or ```file:///u/myuser/truststore.jks```                                                                                                                                                                                                                                                                                                                                     |
| Truststore Type     | The type of the truststore that verifies credentials. If unspecified, uses the agents default Java keystore type. For certificates contained in a key ring managed by a security manager, use JCERACFKS when the certificates are stored in software, or JCECCARACFKS when the certificates are stored in hardware with ICSF. For more information, see the [Hardware Cryptography IBMJCECCA Overview](http://www.ibm.com/systems/z/os/zos/tools/java/products/sdk71jcecca.html "Hardware Cryptography IBMJCECCA Overview"). |
| Truststore Password | The password of the truststore that verifies credentials. For certificates contained in a key ring managed by a security manager, leave this value empty.                                                                                                                                                                                                                                                                                                                                                                    |


* For keys contained in a key ring managed by a security manager that are stored in software, use a URL in the format:

```
safkeyring:///<keyring name>
```

For java 11 and above:
```
safkeyringjce:///<keyring name>
```

.
* For keys contained in a key ring managed by a security manager that are stored in hardware with ICSF, use

```
safkeyringhw:///<keyring name>
```

|          Back to ...          |                                |                                                      Latest Version                                                       |       CICS TS       ||||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [45.20240620-1707](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/CICS/cics-45.20240620-1707.zip) | [Readme](README.md) |[Overview](overview.md)|[Component Templates](component_templates.md)|[Steps](steps.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
