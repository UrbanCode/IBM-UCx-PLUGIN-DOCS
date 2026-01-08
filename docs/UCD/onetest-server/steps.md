# HCL OneTest Server - Process Steps

## Run HCL OneTest Server test

Start a job on HCL OneTest Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| HCL OneTest Server URL | textBox | The URL of your HCL OneTest Server. | Yes |
| Offline Token | secureBox | HCL OneTest Server Offline Token | Yes |
| Team Space Name | textBox | Team Space name of the project. | Yes |
| Project Name | textBox | Project Name of the job to run. | Yes |
| Branch Name | textBox | Branch Name of the job to run. Defaults to master. | No |
| Repository Link | textBox | Repository Link for the job to run. | Yes |
| File Path | textBox | Path to the HCL OneTest Server test file. | Yes |
| Datasets | textBox | Optional semicolon (;) delimited list of datasets:replacement for the job to run, For example. (dataset1:dataset2;dataset3:dataset4) | No |
| Variables | textBox | Runtime job variables, for example name1=value1;name2=value2 | No |
| Labels | textBox | Comma (,) delimited list of labels for the job to run. | No |
| Secrets Collection Name | textBox | Secrets collection name for the job to run. | No |
| Environment | textBox | Environment for the job to run, only applicable for Api Test. | No |
| Custom Trust Store Path | textBox | Path to the custom trust store including the file name. This trust store must include the certificate of the CA that issued the SSL certificate of your HCL OneTest Server instance or the SSL certificate of your HCL OneTest Server instance. This field cannot be left blank when the SSL certificate of your HCL OneTest Server instance is signed by an internal CA or when you're unable to establish secure connection to your HCL OneTest Server instance. Otherwise it can be left blank. | No |
| Custom Trust Store Password | secureBox | Password of the custom trust store. This field can be left blank if the default password of the custom trust store hasn't been modified. | No |
| HTTP Proxy Host | textBox | Provide the hostname of the HTTP proxy to use to connect to HCL OneTest Server. Eg proxy.domain.com | No |
| HTTP Proxy Port | textBox | Provide the port number of the HTTP proxy to use to connect to HCL OneTest Server. | No |
| HTTP Proxy User name | textBox | Provide the user name to authenticate with HTTP proxy. | No |
| HTTP Proxy Password | secureBox | Provide the password to authenticate with HTTP proxy. | No |

