# z/OS File Source Config - Process Steps

## Import Version

Description

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Package Format | selectBox | Specify the package format to be used. | No |
| Default Shiplist File | textBox | Specify the path to a default shiplist file on the host. | No |
| Default Shiplist | textAreaBox | Input the content of a shiplist. When both shiplist content and shiplist file are specified, the shiplist content is used. | No |
| Buztool Properties File | textBox | The location of buztool properties file. | No |
| Version Name Prefix | textBox | Specify a version name prefix | Yes |
| Version Name | textBox | Specify the version name. If left blank, a version name is generated based on the prefix and current time stamp. | No |
| Shiplist File | textBox | Specify the path to a shiplist file on the host. If left blank the default shiplist file is used. | No |
| Shiplist | textAreaBox | Input the content of a shiplist. If left blank the default shiplist content is used. When both shiplist content and shiplist file are specified, the shiplist content is used. | No |
| Since Time Stamp | textBox | Specify a time stamp to include artifacts modified arfter this timestamp. Specify 'LASTVERSION' to use the time stamp of the last version. If left blank, all artifact in shiplist will be included. | No |

