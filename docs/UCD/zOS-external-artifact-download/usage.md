# z/OS External Artifact Repository - Usage



Use this plug-in to automate downloading of z/OS artifacts from a Nexus Artifactory or JFrog repository to z/OS. The artifacts can then be deployed using the [Deploy Data Sets](../zos-deploy/steps.md#deploy-data-sets) step of the [zOS Utility](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/) plug-in.
To create the z/OS component version, use the **buztool.sh** command from job control language (JCL) or from the z/OS UNIX System Services command line. You must specify the **-ar** parameter on the command. This parameter provides details about the artifactory needed to upload artifacts. The link from the external artifact repository is stored as a component version property, named **extRepoURL**. The property is used to download the artifacts.
For additional information, see [Creating z/OS component versions](https://www.ibm.com/support/knowledgecenter/en/SS4GSP_7.0.4/com.ibm.udeploy.doc/topics/zos_runtools.html) in the product documentation.

|          Back to ...          |                                |                                                                   Latest Version                                                                   | z/OS External Artifact Repository ||||
|:-----------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [12.1176020](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/ucd-ExtArtRepo-12.1176020.zip)  |        [Readme](README.md)        |[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
