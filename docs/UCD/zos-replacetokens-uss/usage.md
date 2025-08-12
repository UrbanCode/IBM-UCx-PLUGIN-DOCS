
# z/OS USS Utility - Usage

> **Deprecation Notice**: The z/OS USS Utility plugin is deprecated. It is recommended to use `Replace Tokens` step from `File Utils` plugin instead.

The z/OS USS plug-in contains the following step:

* Replace Tokens USS

You can use the Replace Tokens step to replace values in USS files:

* Explicit replacement – Use the **Explicit Tokens** property to specify a list of token-value pairs.
* Replacement by using a property list – Use existing property names as tokens by specifying properties in the **Property List** property.
* Replacement by using a property file – Use the **Property File Name** property to specify a file name.

When specifying a property file, the property file is modified when the step runs. Delimiters and prefixes are added to tokens that match tokens in the target files. To ensure repeatable behaviour, download the property file to the agent computer each time before running the **Replace Tokens USS** step.

To replace tokens in multiple files, specify the file names in the **Include Files** property.

## **Step palette**

To access this plug-in in the palette, click **Utilities > zOS USS Utility**.

Click the **Steps** tab for details about each of the step properties.

