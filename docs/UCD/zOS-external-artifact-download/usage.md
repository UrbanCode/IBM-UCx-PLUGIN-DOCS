# z/OS External Artifact Repository - Usage

## Download Artifacts for zOS External Repo

Use this plug-in to automate downloading of z/OS artifacts from a Nexus Artifactory or JFrog repository to z/OS. The artifacts can then be deployed using the [Deploy Data Sets](../zos-deploy/steps.md#deploy-datasets-and-uss-files) step of the [zOS Utility](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/) plug-in.
To create the z/OS component version, use the **buztool.sh** command from job control language (JCL) or from the z/OS UNIX System Services command line. You must specify the **-ar** parameter on the command. This parameter provides details about the artifactory needed to upload artifacts. The link from the external artifact repository is stored as a component version property, named **extRepoURL**. The property is used to download the artifacts.
For additional information, see [Creating z/OS component versions](https://www.ibm.com/support/knowledgecenter/en/SS4GSP_7.0.4/com.ibm.udeploy.doc/topics/zos_runtools.html) in the product documentation.

## Creating a Merged Version For JFrog/Nexus

To create a merged version for external repository [JFrog](steps.md#create-a-merged-version-for-jfrog-artifactory) or [Nexus](steps.md#create-a-merged-version-for-nexus), component name and the versions to be merged are required along with the external repository details.
The versions are merged based on the creation date. In the case of an artifact overlapping between two versions, the artifact from the latest version will be considered.
For e.g., If versions **rel-1** and **rel-2** are to be merged, and they have a common program **BUILD.COBOL(ACCINFO)** in their package. The merged version will have changes from the latest version **rel-2**.
