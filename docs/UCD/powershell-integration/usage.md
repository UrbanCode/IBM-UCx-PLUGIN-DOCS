
# PowerShell - Usage

Download the plug-in and extract the .zip file. A tutorial is available in the form of an example process in the `imports/process/PowerShell+Example.json` file. To see the tutorial content, import the example process.

# Run PowerShell Script Step's has the hidden property Successful Exit Status 
The error status to set when the script completes successfully. The value must be between -128 and 127. This sets the exitCode property, which is used in the post-processing script. If you use -128 for an error status, change the value from the default. Using 0 may cause false negative statuses

