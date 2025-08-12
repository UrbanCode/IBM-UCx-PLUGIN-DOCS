
# Apache Ant - Process steps


* [Ant](#ant)


## Ant

Run an Ant script.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ANT OPTS | String | One or more Ant-specific arguments, which are used in the ANT\_OPTS environment variable. For example, -Xmx1024m or -XX:MaxPermSize=512m. Enter each argument on a separate line. | No |
| ANT\_HOME | String | The installation directory of Apache Ant. The default value is the ANT\_HOME environment variable for the agent. | Yes |
| Ant Properties | String | One or more Ant-specific arguments, such as using -v for verbose output. Enter each argument on a separate line. | No |
| Ant Script File | String | The name of the Ant script file. | Yes |
| JAVA\_HOME | String | The path to the Java installation to run Ant scripts. The default is the JAVA\_HOME environment variable for the agent. | Yes |
| JVM Properties | String | One or more JVM-specific arguments, such as -Xmx=512m for maximum memory. Enter each argument on a separate line. | No |
| Properties | String | These properties are passed to the Ant command processor and are available by name in the Ant script. Enter each argument on a separate line in the following format: *name*=*value*. | No |
| Script Content | String | Defines the content of the Ant script. The content is written to the Ant script file and then the file is run. | No |
| Targets | String | One or more names of the targets to run in the Ant script file. Do not specify a target if you are using the default target. | No |


