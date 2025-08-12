
# Shell - Usage

With the Shell plug-in steps, you can run a Shell script as part of the deployment process. The plug-in step contains the scripts.

The steps in this plug-in wait until the command is complete. For best results, run commands that complete or run the commands in the background. If a command runs indefinitely, the step and the process that contains the step wait indefinitely.

The commands for each step share stdout and stdin streams. If you use a command or script that runs other commands, each of those commands uses the same stdout and stdin stream as the first command or script. The step waits for all commands to finish.

Each step runs in its own shell. For example, if you set a system variable in one step, future steps do not have access to the variable because they are running in a new instance of the shell.

If one shell script calls another shell script, starting a child process, this child process inherits the file descriptors of the parent process, such as input and output streams.If the parent shell script exits but the child process does not, the step continues, waiting for output from the child process. To make sure that the step can end normally, redirect the output and error streams for the child process. For example, if the child process is `child.sh`, you can redirect the output and error streams with the following code:


```
child.sh < /dev/null > tempout 2>&1
cat tempout
```

## **Step palette**

To access this plug-in in the palette, click **Scripting** > **Shell**.


|Back to ...||Latest Version|Shell ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[21.1167618](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Shell/ucd-Shell-21.1167618.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
