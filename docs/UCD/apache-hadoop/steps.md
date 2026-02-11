# Process Steps

## Create Directory

Creates Directory in DFS

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Path to Hadoop | textBox | Path to Hadoop Directory | Yes |
| DFS Input Directory | textBox | Name of Input Directory on DFS | Yes |

## Copy Inputs

Copy inputs into DFS

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Path to Hadoop | textBox | Path to Hadoop Directory | Yes |
| Path to Input File | textBox | Name of Local Input File(s) | Yes |
| DFS Input Directory | textBox | Name of Input Directory on DFS | Yes |

## Run Jar

Runs Jar file on Hadoop

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Jar Parameters | textBox | Parameters required for executing the jar file. E.g. : programName inputDir OutputDir | Yes |
| Parameters | textBox | Path to Hadoop Directory | Yes |
| Name of Jar | textBox | The name of the jar file which has been uploaded as a component version for this component. | Yes |

