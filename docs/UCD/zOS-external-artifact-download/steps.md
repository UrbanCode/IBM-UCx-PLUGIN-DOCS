# z/OS External Artifact Repository - Process Steps

* [Download Artifacts for zOS External Repo](#download-artifacts-for-zos-external-repo)
* [Create a Merged Version for JFrog Artifactory](#create-a-merged-version-for-jfrog-artifactory)
* [Create a Merged Version for Nexus](#create-a-merged-version-for-nexus)

## Download Artifacts for zOS External Repo

Download a z/OS package from an external artifact repository. The repository can be either a Nexus or Artifactory repository.

| Name                      | Type   | Description                                                             | Required |
|---------------------------|--------|-------------------------------------------------------------------------|----------|
| Repository URL            | String | The URL of the repository.                                              | Yes      |
| User Name                 | String | The user name used to authenticate with the repository.                 | No       |
| Repository Password       | String | The password used to authenticate with the repository.                  | No       |
| Artifactory Api-Key/Token | String | The Api-Key/Token used to authenticate with the artifactory repository. | No       |


## Create a Merged Version For JFrog Artifactory

Create a merged version for JFrog artifactory from a set of existing versions in external repository

| Name                              | Type   | Description                                                                | Required |
|-----------------------------------|--------|----------------------------------------------------------------------------|----------|
| Merged Version Name               | String | Merged Version Name                                                        | Yes      |
| Component Name                    | String | Component Name                                                             | Yes      |
| Versions To Merge                 | String | List of version names to be merged. Separate version names with a newline. | Yes      |
| Repository URL                    | String | The URL of the external artifact repository.                               | Yes      |
| Repository                        | String | Repository name                                                            | Yes      |
| Repository User Name              | String | Username to be used for authentication.                                    | Yes      |
| Repository Password/API Key/Token | String | Password or API-Key or Token to be used for authentication.                | Yes      |

## Create a Merged Version For Nexus

Create a merged version for Nexus from a set of existing versions in external repository

| Name                 | Type   | Description                                                                | Required |
|----------------------|--------|----------------------------------------------------------------------------|----------|
| Merged Version Name  | String | Merged Version Name                                                        | Yes      |
| Component Name       | String | Component Name                                                             | Yes      |
| Versions To Merge    | String | List of version names to be merged. Separate version names with a newline. | Yes      |
| Repository URL       | String | The URL of the external artifact repository.                               | Yes      |
| Repository           | String | Repository name                                                            | Yes      |
| Raw Directory        | String | Raw Directory                                                              | Yes      |
| Repository User Name | String | Username to be used for authentication.                                    | Yes      |
| Repository Password  | String | Password to be used for authentication.                                    | Yes      |

### Hidden input properties:

> * Select Proxy checkbox to enable proxy connection to artifactory using passed Proxy Host and Port. Proxy does not work for Nexus.
> * Review with your security admins before allowing insecure connection. On default, it is disabled.
> * When USE_ATTLS property is set to TRUE, plugin will not handle encryption and will rely on server AT_TLS to encrypt the network communication with external repository. Default is FALSE.

|          Back to ...          |                                |                                                                       Latest Version                                                                        | z/OS External Artifact Repository |                         |                   |                           |
|:-----------------------------:|:------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:|:-----------------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [13.1178924](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/devops-deploy-ExtArtRepo-13.1178924.zip) |        [Readme](README.md)        | [Overview](overview.md) | [Usage](usage.md) | [Downloads](downloads.md) |
