# z/OS Rexx Executor - Usage

---

The z/OS Rexx Executor plug-in will execute statements provided in a dataset or inline in the plugin step.
 
Select **Source type** as **DATASET** from the drop-down and 
enter the dataset in the **Source Value**. 
Fully qualified dataset needs to be enclosed in single quotes.
When the quotes are omitted then, the TSO prefix of the id running the 
plugin step is prefixed to the Source Dataset.
  
(or)

Select **Source type** as **INLINE** from the drop-down and 
then in the **Source Value** enter REXX statements beginning with a **/\* REXX \*/** statement.

Arguments can be passed to the REXX program with/without quotes. 
However, if there are more than one argument then arguments must be separated by a space.

The **SYSPROC** field allows user to pass datasets containing REXX programs 
that will be used by the REXX program run by the plugin step. 
Multiple **SYSPROC** datasets can be passed by separating datasets by a comma(,).

### Setting output property

This plugin allows user to set output properties from the REXX program and 
later to be used in successive steps of a process. 
A user REXX program can simply invoke a call to **SETPROP** with two arguments.

The first argument is output property name and 
the second argument is the property value.

> CALL SETPROP propertyName propertyValue

For example, below REXX snippet will set an output property **currentDate** with value of **date** variable

***
    /* REXX */
    date = DATE('S')  /* Returns date in YYYYMMDD format E.g., 20120327 */
    CALL SETPROP "currentDate" date   

### Setting multi-line output property

To set a multi-line output property, the lines of the property value must be separated 
by a delimiter returned by inbuilt program **GETDLMTR** 

***
    /* REXX */
    delimiter = GETDLMTR() /* Return delimiter to separate lines */
    lines = "This is first line" || delimiter || "This is second line"  
    CALL SETPROP "outputLines" lines
    
Will set property **outputLines** to below value

***
    This is first line
    This is second line

### Referring properties from successive steps

If the rexx step name is **Run-Rexx-Program** and output property name is **currentDate**
then the output properties can be referred by the successive steps as below

> ${p:Run-Rexx-Program/currentDate}

**Note**

From plugin version 2, an output property __RexxReturnCode__ will store the return/exit code from REXX program.


|          Back to ...          |                                |                                                         Latest Version                                                          | z/OS Rexx Executor  |                         |                   |                           |
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|:-------------------:|:-----------------------:|:-----------------:|:-------------------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [2.1176018](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-rexx/ucd-plugins-zos-rexx-2.1176018.zip) | [Readme](README.md) | [Overview](overview.md) | [Steps](steps.md) | [Downloads](downloads.md) |
