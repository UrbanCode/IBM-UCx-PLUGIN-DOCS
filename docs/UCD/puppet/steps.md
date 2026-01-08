# Puppet - Process Steps

## Apply

Apply one or more manifest through puppet.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Puppet Executable | textBox | Full path to puppet executable or just 'puppet' if on path. | Yes |
| Includes | textAreaBox | New line seperated list of include patterns for manifests to be applied. The manifests must exist in the UrbanCode Agent's working directory. | Yes |
| Excludes | textAreaBox | New line seperated list of exclude patterns. | No |
| Additional Arguments | textAreaBox | List of additional arguments to include. Include each argument on a separate line. | No |

## Update From Puppet Master

Run puppet agent to get updates from master.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Puppet Executable | textBox | Full path to puppet executable or just 'puppet' if on path. | Yes |
| Run One Time | selectBox | Specify to run the configuration one time. | Yes |
| Verbose | selectBox | Specify verbose output for the command. | Yes |
| Daemonize | selectBox | Send the process into the background or not. | Yes |
| Additional Arguments | textAreaBox | List of additional arguments to include. Include each argument on a separate line. | No |

