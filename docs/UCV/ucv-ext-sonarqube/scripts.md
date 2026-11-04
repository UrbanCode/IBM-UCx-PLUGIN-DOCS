
# SonarQube - Scripts

## Add Integration Script

The curl command for adding integrations can be converted to a script. An example script shown below.

```

#!/bin/bash

# Creates a SonarQube integration within Velocity

# USAGE:
# Save this text as a .sh file (e.g., add_sonarqube_integration.sh), make it executable with `chmod +x`, and run:
# ./add_sonarqube_integration.sh <velocityHost> <integrationName> <sonarQubeUrl> <sonarQubeAuthToken>

# SCRIPT PARAMETERS
velocityHost="${1:?Required argument was null: velocityHost}"
integrationName="${2:?Required argument was null: integrationName}"
sonarQubeUrl="${3:?Required argument was null: sonarQubeUrl}"
sonarQubeAuthToken="${4:?Required argument was null: sonarQubeAuthToken}"

# EXECUTION
# NOTE: The "--insecure" option skips SSL validation but preserves SSL encryption.
curl --insecure --request POST \
  --url "https://${velocityHost}/reporting-consumer/integration" \
  --header 'content-type: application/json' \
  --data "{
    \"type\": \"sonarqubePlugin\",
    \"tenant_id\": \"5ade13625558f2c6688d15ce\",
    \"name\": \"${integrationName}\",
    \"properties\": {
      \"url\": \"${sonarQubeUrl}\",
      \"authToken\": \"${sonarQubeAuthToken}\"
    }
  }"

```

