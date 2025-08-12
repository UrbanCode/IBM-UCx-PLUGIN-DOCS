# z/OS Rexx Executor - Steps

---

## Process steps in the z/OS Rexx Executor plug-in

### Execute a REXX program

Use this step to execute rexx program

| Name             | Type                          | Description                                                                                                                                                                                               | Required |
|------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Source Type      | Enumeration: INLINE / DATASET | Source of REXX program                                                                                                                                                                                    | Yes      |
| Source Value     | String                        | Text or PDS member or Sequential Dataset that has REXX program. If the single quotation marks are omitted, the user's data set prefix from the TSO profile is prefixed to the front of the data set name. | Yes      |
| Arguments        | String                        | Specify the arguments(without quotes) to the REXX program                                                                                                                                                 | No       |
| SYSPROC Datasets | String                        | Specify fully qualified SYSPROC datasets that the INPUT REXX program may use                                                                                                                              | No       |

|          Back to ...          |                                |                                                         Latest Version                                                          | z/OS Rexx Executor  |                         |                   |                           |
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|:-------------------:|:-----------------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [2.1176018](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-rexx/ucd-plugins-zos-rexx-2.1176018.zip) | [Readme](README.md) | [Overview](overview.md) | [Usage](usage.md) | [Downloads](downloads.md) |
