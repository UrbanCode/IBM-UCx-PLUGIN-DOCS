
# File Utils - Usage

* [Overview](#overview)
* [Using the Replace Tokens step](#using-the-replace-tokens-step)


## Overview



The steps in this plug-in provide platform-independent ways of working with files. You can incorporate these steps into processes to manipulate files and folders.

For examples, see the tutorials [Create a simple helloWorld deployment](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.0/com.ibm.udeploy.tutorial.doc/topics/quickstart_abstract.html) and [Deploying a simple web application](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.0/com.ibm.udeploy.tutorial.doc/topics/webapp_abstract.html) in the product help. The component processes in these tutorials use steps from the File Utils plug-in.

## Copy Directory step

When you use the [Copy Directory](steps.md#copy-directory) step, the permissions of the original directory are not copied. Instead, the default umask values are used. To copy directories and preserve the original permissions, use the cp command in a Shell step. The Shell step is available in the [Shell](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Shell/) plug-in.

## Replace Tokens step

To learn more about using the [Replace Tokens](steps.md#replace-tokens) step, see [Using the Replace Tokens step](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/FileUtils/usage.html#token-replace-step).

## Update XML with XPath step

To learn more about using the [Update XML with XPath](steps.md#update-xml-file-with-xpath) step to modify XML files, see [Using the Update XML with XPath step](https://www.urbancode.com/docs/using-update-xml-xpath-step/).

## Create .zip File and Unzip steps

When you use the [Create .zip File](steps.md#create-zip-file) and [Unzip](steps.md#unzip) steps to compress and decompress files, the permissions of the files are not retained.


## Using the Replace Tokens step



You can use the Replace Tokens step to replace values in files in three basic ways:

* Explicit replacement
* Replacement by using a property list
* Replacement by using a property file

To replace tokens in multiple files, specify the file names in the **Include Files** field. You must separate the file names with commas or space characters, not newline characters only.

## Explicit replacement

In the **Explicit Tokens** field specify a list, separated by newline characters, of token-value pairs. Use the following format: token->value. For example, IP\_address->192.0.2.1.

The **Explicit Tokens** field is affected by the **Start Token Delimiter**, **End Token Delimiter**, and **Property Prefix** fields. For example, to replace the @myToken@ token with myValue, specify myToken->myValue in the **Explicit Tokens** field, specify @ in the **Start Token Delimiter** field, and specify @ in the **End Token Delimiter** field.

## Replacement by using a property list

To use existing property names as tokens, specify a property list in the **Property List** field. For example, to use all component environment properties as tokens, specify ``${p:environment/allProperties}``. To use all component properties as tokens, specify ``${p:component/allProperties}``.

The property list is affected by the **Start Token Delimiter**, **End Token Delimiter**, and **Property Prefix** fields.

## Replacement by using a property file

To use a property file to specify token-value pairs, specify the file name in the **Property File Name** field. In the file, specify a list of token-value pairs, separated by newline characters. Use the following format: token=value. For example, IP\_address=192.0.2.1.

The property file is affected by the **Start Token Delimiter**, **End Token Delimiter**, and **Property Prefix** fields.

**Note:** When you run the Replace Tokens step and specify a property file, the property file is modified when the step runs. The delimiters and prefixes are added to tokens that match tokens in the target files. To ensure repeatable behavior, download the property file to the agent computer each time before you run the Replace Tokens step.

