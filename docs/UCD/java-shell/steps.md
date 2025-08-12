
# z/OS Shell - Steps

> **Deprecation Notice**: The z/OS Shell plugin is deprecated. It is recommended to use the [Shell plugin](../Shell/README.md) instead.

## Process steps in the Java Shell plug-in

* [Shell](#shell)


## Shell


This step runs a shell or batch script.


| Name                       | Type    | Description                                                                                                                                                                                                                                                                                                                                                                       | Required |
|----------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Daemon                     | Boolean | Check this option to run the command in the background while permitting the step to complete immediately. The output will not be captured if running as a daemon.                                                                                                                                                                                                                 | No       |
| Working Directory Location | String  | The path of the working directory to be used. Specify the path in relationship to the current working directory.                                                                                                                                                                                                                                                                  | Yes      |
| Interpreter                | String  | The name of the executable code used to evaluate the command. The default values for this property are .bat file interpreter for Windows and .com file interpreter for VMS. For other systems, the default is the shell specified by ‘air/shell’ agent variable if present. Linux and Unixsystems can override the value is by having the command line starts with a #! sequence. | No       |
| Output File                | String  | The path of the file to which the command output is directed. If a file path is not specified, the output is discarded. This property is valid only when running as a deamon.                                                                                                                                                                                                     | No       |
| Shell Script               | String  | The script code to run.                                                                                                                                                                                                                                                                                                                                                           | Yes      |


