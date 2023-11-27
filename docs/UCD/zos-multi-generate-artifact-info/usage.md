# z/OS Multi Generate Artifact Information - Usage

Use the Generate Multiple Artifact Information plug-in to generate one or more multiple properties from z/OS artifacts. The plug-in extracts data based on filters.

## Example

This examples demonstrates using the plug-in to extract data based on filters to generate multiple templates in JSON format. The example is based on the version and containers shown below.

![](media/zos_example_containers.jpg?resize=640%2C189)

The sample JSON contains two templates assigned to properties Prop-DBRM and Prop-CICS.

```
{
    "Prop-DBRM" : " BIND (${member}) LIBRARY(${dataset}) \n" ,
    "Prop-CICS" : " CEMT SET PROGRAM(${member}) NEWC \n"
}

```

* Prop-DBRM contains each members bind statements for DB2 Binding process
* Prop-CICS contains RDO commands to set the latest copy of program in CICS

There is a CICS program under the COBOL container with name the CARP001 as shown below.

![](media/zos_example_cics.jpg?resize=602%2C436)

To filter COBOL and DBRM containers, the JSON template in Container filter JSON can be defined as:

```
{
    "Prop-CICS" : "/.*COBOL/",
    "Prop-DBRM" : "/.*DBRM/"
}
```

To filter member/resource name under the above container, the JSON template in Resource filter JSON can be defined as:

```
{
    "Prop-CICS": "CARP001"
}
```


After the plug-in step completes, the following output is received. Please note that in addition to Prop-CICS and Prop-DBRM, we generate an additional count (Prop-CICS-count and Prop-DBRM-count) that can be used with a “switch” step in the component process to decide whether to do a bind or not.

![](media/zos_example_output_cics.jpg?resize=602%2C35)

![](media/zos_example_output_dbrm.jpg?resize=602%2C68)

Similarly, you can deploy and custom property filters to create a template with only selected elements.

Watch video in link below on how to migrate from regular generate artifact information step to multi artifact information step – 

[Multi Generate Artifact Information Plugin](https://community.ibm.com/community/user/wasdevops/viewdocument/ucd-zos-11-multi-generate-arti?CommunityKey=9adfe6b6-2e23-4895-8b27-38b93b5e152c&tab=librarydocuments)


|          Back to ...          |                                |                                                                                 Latest Version                                                                                  | z/OS Multi Generate Artifact Information |                         |                   |                           |
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------:|:-----------------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [8.1164047](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-multi-generate-artifact-info/ucd-plugins-zos-multi-generate-artifact-info-8.1164047.zip) |           [Readme](README.md)            | [Overview](overview.md) | [Steps](steps.md) | [Downloads](downloads.md) |
