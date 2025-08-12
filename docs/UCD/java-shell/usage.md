
# z/OS Shell - Usage

> **Deprecation Notice**: The z/OS Shell plugin is deprecated. It is recommended to use the [Shell plugin](../Shell/README.md) instead.

Use z/OS Shell plug-in to run a Shell script as part of the deployment process. The plug-in step contains the scripts.

The plug-in step waits until the command is complete. For best results, run commands that complete or run the commands in the background. If a command runs indefinitely, the step and the process that contains the step wait indefinitely.

The commands for the step share stdout and stdin streams. If you use a command or script that runs other commands, each of those commands uses the same stdout and stdin stream as the first command or script. The step waits for all commands to finish.

Each step runs in its own shell. For example, if you set a system variable in one step, future steps do not have access to the variable because they are running in a new instance of the shell.

If one shell script calls another shell script, starting a child process, this child process inherits the file descriptors of the parent process, such as input and output streams.If the parent shell script exits but the child process does not, the step continues, waiting for output from the child process. To make sure that the step can end normally, redirect the output and error streams for the child process. For example, if the child process is `child.sh`, you can redirect the output and error streams with the following code:


```

child.sh < /dev/null > tempout 2>&1
cat tempout

```




|          Back to ...          |                                |                                                       Latest Version                                                        |     z/OS Shell      ||||
|:-----------------------------:|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [2.1133862](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/java-shell/ucd-java-shell-2.1133862.zip) | [Readme](README.md) |[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
