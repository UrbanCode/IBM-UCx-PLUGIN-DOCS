
# SonarQube - Scripts


## Add Integration Script


The curl command for adding integrations can be converted to a script. An example scriptis shown below.

```

`#!/bin/bash

# Creates a SonarQube integration within Velocity

# USAGE
#
save this text as a .sh file and run with bash shell
# Arguments: velocityHost velocityAccessKey integrationName
sonarQubeUrl sonarQubeAuthToken

# SCRIPT PARAMETERS` velocityHost=``${1:?Required argument was null:
velocityHost}`` velocityAccessKey=``${2:?Required argument was null: velocityAccessKey}``
integrationName=``${3:?Required argument was null: integrationName}`` sonarQubeUrl=``${4:?Required argument was null:
sonarQubeUrl}`` sonarQubeAuthToken=``${5:?Required argument was null: sonarQubeAuthToken}`` `# Execution
# NOTE: The
"—insecure" option skips SSL validation but preserves SSL encryption.` curl --insecure --request POST \ --url
https://$velocityHost/reporting-consumer/integration \ --header 'content-type: application/json' \ --data "{ \"type\":
\"sonarqubePlugin\", \"tenant_id\": \"5ade13625558f2c6688d15ce\", \"name\": \"$integrationName\", \"properties\": {
\"url\": \"$sonarQubeUrl\", \"authToken\": \"$sonarQubeAuthToken\", \"velocityAccessKey\": \"$velocityUserAccessKey\"
}`` }``"
```


|Back to ...||Latest Version|SonarQube |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.50](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-sonarqube/ucv-ext-sonarqube-1.0.50.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Certificate](certificate.md)|[Downloads](downloads.md)|
