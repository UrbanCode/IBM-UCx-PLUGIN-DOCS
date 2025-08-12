
HP Quality Center - Troubleshooting
===================================

# Troubleshooting

* [Troubleshooting](#trouble)
* [Known problems](#known_problems)



**Troubleshooting**
-------------------


Review the console and log of the process that is failing for details about the problem.



**Known problems**
------------------


A number of issues that users have encountered with this plug-in are caused by this issue: the HP Quality Center client files are not downloaded on the same system as the UrbanCode Deploy agent. Ensure that you are logged into the HP Quality Center server that uses a supported Internet Explorer version from the system that contains the UrbanCode Deploy agent. Supported browser versions are Internet Exploxer 7 and Internet Explorer 8. Launch Internet Explorer as Administrator to avoid Windows user account control issues.


You might encounter the following error when running plug-in steps:

`Microsoft VBScript runtime error: ActiveX component can't create object: 'TDApiOle80.TDConnection'`
To resolve the problem, locate the `OTAClient.dll` file, which is typically located in the `%LOCALAPPDATA%\HP\ALM-Client\*HPQC\_server\_hostname*` directory. Then run the following command to register the `OTAClient.dll` file.

%systemroot%\SysWoW64\regsvr32\*directory*/OTAClient.dll

Occasionally, the Microsoft Windows Script Host stops working on the system that the Urban CodeDeploy agent is installed on, which causes unexpected behavior with the plug-in. If this happens, close the Windows Script Host dialog box on that system, and try again.


|Back to ...||Latest Version|HP Quality Center ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[8.752924](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/HPQualityCenter/HPQualityCenter-8.752924.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
