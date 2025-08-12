
# Microsoft Windows System Tools - Troubleshooting

Windows Server 2012 OS restarts using Reboot step, but fails.

This is a known issue with Windows Server 2012. When the reboot occurs, the agent does not shutdown in a recoverable state. In Version 20 of the Windows System Tools, a new property was added called Agent Service Name. This requires the root user to login to the Windows Server 2012 machine, find the DevOps Agent service, copy the Service name, and place it in this property. The default agent name is ibm-urbancode\_deploy-agent. This will enable the agent to shutdown correctly and allow recovery on reboot.


|Back to ...||Latest Version|Microsoft Windows System Tools |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1127383](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WindowsSystemTools/ucd-WindowsSystemTools-24.1127383.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
