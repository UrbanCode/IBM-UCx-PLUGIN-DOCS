# Process Steps

## Import Version

Creates a new component version for a tag

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image Name | textBox | The [namespace/]repository of the image in the Docker registry.  For Amazon, namespace not needed. | Yes |
| Regular Expression for Tag Selection | textBox | Provide regular expression to select tags to create component versions for. | Yes |
| Registry | textBox | If image is host:5000/namespace/repository:tag use host:5000. Leave blank for Docker Hub. If Artifactory, supply the server's hostname or reverse proxy. | Yes |
| Registry Type | selectBox | Specify which API to connect with the Docker Registry. When using IBM Containers, provide IBM Cloud Credentials.                      For Amazon ECR, use AWS access key as username and secret key as password | Yes |
| IBM Cloud API Endpoint | textBox | For example, `https://api.ng.bluemix.net.` | Yes |
| IBM Cloud Space | textBox | For use with IBM Cloud's container registry. The space to log into.               If left blank, the space will not be reset. | Yes |
| IBM Cloud Organization | textBox | For use with IBM Cloud's container registry. The organization to log into.               If left blank, the api will not be reset. | Yes |
| Harbor Project | textBox | The prject name of the Harbor. | Yes |
| Harbor Repository | textBox | The repository name of the Harbor. | Yes |
| Bluemix Home | textBox | For use with IBM Cloud's container registry. Specify the directory containing your Bluemix config.json file (for example, /root/.bluemix) | Yes |
| Registry Username | textBox | The username used to login to the Docker registry.  For Amazon ECR, use access key | Yes |
| Registry Password | secureBox | The password used to login to the Docker registry. Default value is ${p?:dockerPassword}.  For Amazon ECR, use secret key | Yes |
| Registry API Key | secureBox | API key to be used when logging in to the registry. May be a string or location of a key file. Use in place of a username and password. | Yes |
| Allow Insecure Registry Connection | checkBox | Select this option to allow insecure connections to the Docker registry | Yes |
| Import Version Links | checkBox | Select this option to enable the import of version attributes with URLs as Version Links. | Yes |
| Naming Convention | selectBox | The naming convention for component versions. Docker tags can be changed. If component versions need to be immutable, select a naming convention that includes the ID. | No |
| AWS Region | textBox | Region to use when importing images from Amazon ECR. | Yes |
| AWS Command Line File | textBox | Complete path of the AWS command line runtime file. Default: 'aws' | Yes |
| Import Custom Properties From JFrog Artifactory | checkBox | Select this option to allow importing custom properties from JFrog Artifactory. | Yes |
| Specific versions | textBox | If set, only Comma seperated tag names specified will be imported. | No |
| Version Description | textBox | An optional description to add to the versions that are                                  imported into UrbanCode Deploy. | No |

