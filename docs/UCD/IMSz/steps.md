
# IBM IMS - Process Steps

## Execute IMS Command

Allows execution of IMS Type 1 and Type 2 Commands.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IMS Command | textAreaBox | IMS command followed by parameters. For example: STA PGM MYPROG | No |
| IMS PLEX | textBox | IMS PLEX name. | No |
| IMS ID | textBox | IMS ID. | No |
| IMS RESLIB | textBox | IMS RESLIB name. | No |
| Wait For Command | checkBox | Wait for command to complete. If Wait for Command is unchecked, the input for Timeout, Show Output, Max Lines and Max Return Code are ignored. | No |
| Timeout | textBox | Timeout for wait in seconds. | No |
| Show Output | textBox | Specify the output dataset to be displayed in log. Use a comma to separate multiple datasets. ALL for all datasets. | No |
| Max Lines | textBox | Max number of lines to be displayed in log. | No |
| Max Return Code | textBox | Fail the step if return code is greater then the max return code. | Yes |
| Job Class | textBox | Job class (Characters between A - Z or numbers between 0 - 9). | Yes |
| Host Name | textBox |  | Yes |
| User Name | textBox |  | Yes |
| Password | textBox |  | Yes |
| Job Monitor Port | textBox | JES job monitor port (1-65535). Default is 6715. | Yes |


