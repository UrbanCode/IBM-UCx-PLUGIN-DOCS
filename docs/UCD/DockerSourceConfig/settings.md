
# Docker Registry - Settings

## Process steps in the Docker plug-in

* [Import Version](#import_version)


## Import Version

Creates a new component version for a tag

This step has no input properties.


## Roles in the Docker plug-in

* [DockerTagImport](#dockertagimport_role)


## DockerTagImport


| Name | Type | Description |
| --- | --- | --- |
| AWS Command Line File | String | Complete path of the AWS command line runtime file. Default: aws |
| AWS Region | String | Region to use when importing images from Amazon ECR. |
| Allow Insecure Registry Connection | Boolean | Select this option to allow insecure connections to the Docker registry |
| Bluemix Home | String | For use with IBM Clouds container registry. Specify the directory containing your Bluemix config.json file (for example, /root/.bluemix) |
| IBM Cloud API Endpoint | String | For example, https://api.ng.bluemix.net. |
| IBM Cloud Organization | String | For use with IBM Clouds container registry. The organization to log into. If left blank, the api will not be reset. |
| IBM Cloud Space | String | For use with IBM Clouds container registry. The space to log into. If left blank, the space will not be reset. |
| Image Name | String | The [namespace/]repository of the image in the Docker registry. For Amazon, namespace not needed. |
| Naming Convention | Enumeration: | The naming convention for component versions. Docker tags can be changed. If component versions need to be immutable, select a naming convention that includes the ID. |
| Registry | String | If image is host:5000/namespace/repository:tag use host:5000. Leave blank for Docker Hub. If Artifactory, supply the servers hostname or reverse proxy. |
| Registry API Key | Password | API key to be used when logging in to the registry. May be a string or location of a key file. Use in place of a username and password. |
| Registry Password | Password | The password used to login to the Docker registry. Default value is ``${p?:dockerPassword}``. For Amazon ECR, use secret key |
| Registry Type | Enumeration: | Specify which API to connect with the Docker Registry. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password |
| Registry Username | String | The username used to login to the Docker registry. For Amazon ECR, use access key |
| Regular Expression for Tag Selection | String | Provide regular expression to select tags to create component versions for. |


