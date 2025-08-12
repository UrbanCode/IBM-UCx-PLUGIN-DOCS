
# IBM IMS - Overview
This plug-in simplifies IMS operations in support of application deployment by issuing IMS commands.The plug-in integrates into the IBM DevOps Deploy design process, allowing you to automate application deployment for continuous delivery in an agile environment.

For detailed usage information, including IMS Application Deployment example, see [Usage](#usage "Usage").

This plug-in requires agents that run on the z/OS platform. For more information, see:

* [Installing servers and agents](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=installing)
* [Installing the z/OS deployment tools](https://www.ibm.com/docs/en/SS4GSP_7.2.3/install/topics/zos_installing_ov.html#zos_installing_ov)
* [Deploying to the z/OS Platform](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=integrating-deploying-components-zos-platform)
The plug-in includes the Execute IMS Command step that can be used to submit IMS operator commands to members of an IMSplex. This step can be added to your application deployment process by issuing the UPDATE PGM command.

## Compatibility

This plug-in requires version 6.1 of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## Related information

IMS information resources:

+ [IMS command: UPDATE PGM](http://www-01.ibm.com/support/knowledgecenter/SSEPH2_13.1.0/com.ibm.ims13.doc.cr/imscmds/ims_updatepgm.htm)
+ [IMS Command Language Overview](http://www-01.ibm.com/support/knowledgecenter/SSEPH2_13.1.0/com.ibm.ims13.doc.cr/imscmdsintro/ims_overview.htm)

