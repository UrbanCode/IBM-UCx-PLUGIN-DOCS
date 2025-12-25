# IBM DevOps Test Hub (Test Hub) - Process Steps

* [Run IBM DevOps Test Hub test](#run_ibm_devops_test_hub_test)
## Run IBM DevOps Test Hub test

Start a job on IBM DevOps Test Hub.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM DevOps Test Hub URL | textBox | The URL of your IBM DevOps Test Hub. | Yes |
| Offline Token | secureBox | IBM DevOps Test Hub Offline Token | Yes |
| Team Space Name | textBox | Team Space name of the project. | Yes |
| Project Name | textBox | Project Name of the job to run. | Yes |
| Branch Name | textBox | Branch Name of the job to run. Defaults to master. | No |
| Repository Link | textBox | Repository Link for the job to run. | Yes |
| File Path | textBox | Path to the IBM DevOps Test Hub test file. | Yes |
| Datasets | textBox | Optional semicolon (;) delimited list of datasets:replacement for the job to run, For example. (dataset1:dataset2;dataset3:dataset4) | No |
| Variables | textBox | Runtime job variables, for example name1=value1;name2=value2 | No |
| Labels | textBox | Comma (,) delimited list of labels for the job to run. | No |
| Secrets Collection Name | textBox | Secrets collection name for the job to run. | No |
| Environment | textBox | Environment for the job to run, only applicable for Api Test. | No |
| Custom Trust Store Path | textBox | Path to the custom trust store including the file name. This trust store must include the certificate of the CA that issued the SSL certificate of your IBM DevOps Test Hub instance or the SSL certificate of your IBM DevOps Test Hub instance. This field cannot be left blank when the SSL certificate of your IBM DevOps Test Hub instance is signed by an internal CA or when you're unable to establish secure connection to your IBM DevOps Test Hub instance. Otherwise it can be left blank. | No |
| Custom Trust Store Password | secureBox | Password of the custom trust store. This field can be left blank if the default password of the custom trust store hasn't been modified. | No |
| HTTP Proxy Host | textBox | Provide the hostname of the HTTP proxy to use to connect to IBM DevOps Test Hub. Eg proxy.domain.com | No |
| HTTP Proxy Port | textBox | Provide the port number of the HTTP proxy to use to connect to IBM DevOps Test Hub. | No |
| HTTP Proxy User name | textBox | Provide the user name to authenticate with HTTP proxy. | No |
| HTTP Proxy Password | secureBox | Provide the password to authenticate with HTTP proxy. | No |

