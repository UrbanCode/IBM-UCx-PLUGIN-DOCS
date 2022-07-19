
z/OS External Artifact Repository - Steps
=========================================

### Process steps in the External Artifact Repository plug-in

* [Download Artifacts](#download-artifacts)


### Download Artifacts

Download a z/OS package from an external artifact repository. The repository can be either a Nexus or Artifactory repository.


| Name                | Type    | Description                                                                                     | Required |
|---------------------|---------|-------------------------------------------------------------------------------------------------|----------|
| Repository URL      | String  | The URL of the repository.                                                                      | Yes      |
| User Name           | String  | The user name used to authenticate with the repository.                                         | Yes      |
| Repository Password | String  | The password used to authenticate with the repository.                                          | Yes      |
| Artifactory api key | Boolean | Check this box to use API key authentication with artifact repository. Doesn’t work with Nexus. | No       |
| Artifactory api key | String  | The api key used to authenticate with the artifactory repository.                               | No       |

Hidden input properties:

* Select Proxy checkbox to enable proxy connection to artifactory using passed Proxy Host and Port. Proxy does not work for Nexus.
* Review with your security admins before allowing insecure connection. On default it is disabled.

|          Back to ...          |                                |                                                               Latest Version                                                                | z/OS External Artifact Repository ||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [8.1101664](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/ExtArtRepo-8.1101664.zip) |        [Readme](README.md)        |[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
