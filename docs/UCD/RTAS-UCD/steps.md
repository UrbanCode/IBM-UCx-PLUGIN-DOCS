
# IBM Rational Test Automation Server (RTAS) - Process Steps

Process steps in the IBM Rational Test Automation Server plug-in:

* [Start a job on IBM Rational Test Automation Server](#start_job)


## Start a job on IBM Rational Test Automation Server

Use this step to start a job on the Rational Test Automation Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Rational Test Automation Server URL | String | The URL of the Rational Test Automation Server. | Yes |
| Offline Token | Password | The offline user access token for accessing the Rational Test Automation Server. | Yes |
| Team Space Name | String | The name of the team space that contains the project. | Yes |
| Project Name | String | The name of the project that contains the test assets as the job to run. | Yes |
| Branch Name | String | The name of the branch in the repository that contains the test resources as the job to run. The default branch name is master. | No |
| Repository Link | String | The URL of the Git repository that contains the test resources. | No |
| File Path | String | The path to the test assets in the repository of your project in Rational Test Automation Server. | Yes |
| Datasets | String | The datasets to be used to override the datasets in the test assets. You can use a semicolon (;) delimited list of datasets for listing multiple datasets. For example, `dataset1:dataset2;dataset3:dataset4` | No |
| Variables | String | The variable name and its value. For example, `name1=value1;name2=value2` | No |
| Labels | String | The labels to associate the test run that help you to identify them on the Results page. You can use a comma (,) delimited list of labels. | No |
| Secrets Collection Name | String | The name of the secrets collection that contains the secrets to be used in certain API Suites or tests. | No |
| Environment | String | The environment defined in the API Suite or test to use in the test run. | No |
| Custom Trust Store Path | String | The path to the custom trust store that includes the file name. This trust store must include the certificate of the CA that issued the SSL certificate of your IBM Rational Test Automation Server instance or the SSL certificate of your IBM Rational Test Automation Server instance. Enter the path when the SSL certificate of your IBM Rational Test Automation Server instance is signed by an internal CA or when you are unable to establish secure connection to your IBM Rational Test Automation Server instance. In other cases, you can leave it empty. | No |
| Custom Trust Store Password | Password | The password of the custom trust store. This field can be left blank if the default password of the custom trust store has not been modified. | No |
| HTTP Proxy Host | String | The hostname of the HTTP proxy to use to connect to IBM Rational Test Automation Server. For example, proxy.domain.com | No |
| HTTP Proxy Port | String | The port number of the HTTP proxy to use to connect to IBM Rational Test Automation Server. | No |
| HTTP Proxy User name | String | The username to authenticate with HTTP proxy. | No |
| HTTP Proxy Password | Password | The password to authenticate with HTTP proxy. | No |

