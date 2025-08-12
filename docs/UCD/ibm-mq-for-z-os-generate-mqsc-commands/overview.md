
# IBM MQ for z/OS - Generate MQSC Commands - Overview

This plug-in includes a step that processes MQ queue and/or channel resources, represented in REST form, to generate the equivalent MQSC commands. The generated MQSC commands can subsequently be used in a Submit Job step to run the IBM MQ for z/OS CSQUTIL job to define the MQ resources to a target MQ for z/OS queue manager environment.

To add the IBM MQ for z/OSGenerate MQSC Commands plug-in step to a process, click **Messaging > MQ for zOS / Generate MQSC Commands** in the step palette of the process editor and drag the step to add it to the process.

## Full Documentation

Please view [IBM MQ for zOSGenerate MQSC Commands](https://github.com/IBM-UrbanCode/IBM-MQ-zOS-UCD/blob/master/doc/white_paper/IBM%20MQ%20for%20zOS%20Generate%20MQSC%20Commands.pdf) for comprehensive instructions on how to use the IBM MQ for z/OS plugin.

## Compatibility

This plug-in is supported to run with IBM z/OS V2.1 (and above) and IBM MQ for z/OS V7.1 (and above). However, as the end of service (EOS) date for IBM MQ for z/OS V7.1 is 6th Nov, 2017, it is recommended that IBM MQ for z/OS V8 (and above) be used. As the plugin generates MQSC commands from the REST form resource representations, it is important to ensure that the generated MQSC is supported by the version of IBM MQ for z/OS in use. The list of supported MQSC attributes for queue and/or channel resources can be found in the IBM MQ for z/OS Knowledge Center specific to the version of IBM MQ for z/OS in use. Attempts to use unsupported MQSC attributes will result in a failure of the MQSC command on the target MQ for z/OS queue manager environment.

This plug-in requires version 6.2.2 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

Please view [IBM MQ for zOSGenerate MQSC Commands - History](https://github.com/UrbanCode/IBM-MQ-zOS-UCD#history)
