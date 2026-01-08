# Amazon Web Services (AWS) Lambda - Process Steps

## Create Function

Create a new AWS Lambda function. (create-function)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Function Name | textBox | The name you want to assign to the function you are uploading. | Yes |
| Runtime | textBox | The runtime environment for the Lambda function you are uploading. | Yes |
| Role | textBox | The Amazon Resource Name (ARN) of the IAM role that Lambda assumes when it executes your function to access any other Amazon Web Services (AWS) resources | Yes |
| Handler | textBox | The function within your code that Lambda calls to begin execution. | Yes |
| Zip File | textBox | The path to the zip file of the code you are uploading. This is required unless the `code` argument is specified. | Yes |
| Other Properties | textAreaBox | Other arguments for the aws lambda command. Seperate each name and value with an equals (=) and delimit each pair by new line (\n). Example: name=value | No |
| Profile | textBox |  | No |
| AWS Access Key ID | textBox |  | No |
| AWS Secret Access Key | textBox |  | No |

## Delete Function

Delete the specified AWS Lambda function code and configuration. (delete-function)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Function Name | textBox | The name of the AWS Lambda function you wish to delete. | Yes |
| Other Properties | textAreaBox | Other arguments for the aws lambda command. Seperate each name and value with an equals (=) and delimit each pair by new line (\n). Example: name=value | No |
| Profile | textBox |  | No |
| AWS Access Key ID | textBox |  | No |
| AWS Secret Access Key | textBox |  | No |

## Invoke

Invoke a specific AWS Lambda function. (invoke)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Function Name | textBox | The name of the function you wish to invoke. | Yes |
| Outfile | textBox | Specify a filename where the content will be saved. It will be saved in the local directory. | No |
| Other Properties | textAreaBox | Other arguments for the aws lambda command. Seperate each name and value with an equals (=) and delimit each pair by new line (\n). Example: name=value | No |
| Profile | textBox |  | No |
| AWS Access Key ID | textBox |  | No |
| AWS Secret Access Key | textBox |  | No |

