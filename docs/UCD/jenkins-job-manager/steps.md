# Jenkins Job Manager - Process Steps

* [Start Job](#start_job)
* [Enable Job](#enable_job)
* [Disable Job](#disable_job)
* [Delete Job](#delete_job)
## Start Job

Start Jenkins Job

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | textBox |  | No |
| Job Name | textBox | Name of job to be started. | Yes |
| Jenkins Url | textBox | Jenkins Url for processing | Yes |
| User Name | textBox | The name of the User for Jenkins | Yes |
| User Password | secureBox | The Password of the User for Jenkins | Yes |
| Check for SCM changes | checkBox | Check for SCM changes before starting the build, and if there's no change, exit without doing a build | No |
| Wait until Start | checkBox | Wait until the start of the job build. | No |
| Wait until completion | checkBox | Wait until the completion of the job build. | No |
| Print Job output | checkBox | Prints out the console output of the job. | No |

## Enable Job

Enable Jenkins Job

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | textBox |  | No |
| Job Name | textBox | Name of job to be started. | Yes |
| Jenkins Url | textBox | Jenkins Url for processing | Yes |
| User Name | textBox | The name of the User for Jenkins | Yes |
| User Password | secureBox | The Password of the User for Jenkins | Yes |

## Disable Job

Disable Jenkins Job

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | textBox |  | No |
| Job Name | textBox | Name of job to be started. | Yes |
| Jenkins Url | textBox | Jenkins Url for processing | Yes |
| User Name | textBox | The name of the User for Jenkins | Yes |
| User Password | secureBox | The Password of the User for Jenkins | Yes |

## Delete Job

Delete Jenkins Job

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | textBox |  | No |
| Job Name | textBox | Name of job to be started. | Yes |
| Jenkins Url | textBox | Jenkins Url for processing | Yes |
| User Name | textBox | The name of the User for Jenkins | Yes |
| User Password | secureBox | The Password of the User for Jenkins | Yes |

