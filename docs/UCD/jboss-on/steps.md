# Process Steps

## Execute JavaScript

Execute a JavaScript file on the JBoss ON server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| JON Username | textBox | Username to log into the JBoss ON server. | No |
| JON Password | secureBox | Password to log into the JBoss ON server. | No |
| CLI Path | textBox | Path to the JBoss ON CLI executable file. | Yes |
| Hostname | textBox | Hostname of the JBoss ON server. | No |
| Port Number | textBox | Port number JBoss ON server is listening for http requests on. | No |
| Script Files | textAreaBox | A new line separated list of file patterns for script files. **/* includes all files and files in subdirectories. | Yes |

## Configure Resources

Configure properties on JBoss ON resources.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| JON Username | textBox | Username to log into the JBoss ON server. | No |
| JON Password | secureBox | Password to log into the JBoss ON server. | No |
| CLI Path | textBox | Path to the JBoss ON CLI executable file. | Yes |
| Hostname | textBox | Hostname of the JBoss ON server. | No |
| Port Number | textBox | Port number JBoss ON server is listening for http requests on. | No |
| Resource Type | textBox | Type of the resource. Defined in your JBoss ON UI in your Inventory under the Type column. | No |
| Agent Name | textBox | Name of the agent. Defined in your JBoss ON UI in an individual resource's Inventory tab under Agents. | No |
| Resource ID | textBox | If you know the specific resource id assigned to your resource by the JBoss ON server. | No |
| Resource Properties | textAreaBox | A new line separated list of property changes you are making. The property is associated with the value you are changing it to by the equals operator. (Example of one line: PropertyName=PropertyValue) | Yes |

## Check Status

Check the status of a JBoss ON service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Service | selectBox | Service to check the status of. (Server, Agent, or Storage) | No |
| Startup Path | textBox | Path to the JBoss ON executable startup file. (labeled rhqctl) | Yes |

