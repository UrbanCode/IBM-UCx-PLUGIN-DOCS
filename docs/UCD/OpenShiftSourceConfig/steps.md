# Process Steps

## Import Version

Creates a new component version for a tag

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Image Stream | textBox | The [folder/]repository of the image in the OpenShift's Docker registry. | Yes |
| OpenShift Server | textBox | If connecting to the OpenShift Server from a remote agent, specify the full server URI. | Yes |
| Registry Username | textBox | The username used to login to the OpenShift Server. | Yes |
| Registry Password | secureBox | The password used to login to the OpenShift Server. Default value is ${p:openshiftPassword} | Yes |
| Allow Insecure Registry Connection | checkBox | Select this option to allow insecure connections to OpenShift. | Yes |
| Naming Convention | selectBox | The naming convention for component versions. Docker tags can be changed. If component versions need to be immutable, select a naming convention that includes the ID. | No |

