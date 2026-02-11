# Process Steps

## Create Workflow

Use this step to create a workflow.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workflow Name | textBox | A unique name for the workflow up to 100 characters. The name cannot contain the following symbols: less-than (<), greater-than (>), or ampersand (&). Each workflow name must be unique. | Yes |
| Generate Unique Name | checkBox | Indicates whether to append a timestamp to the workflow name. Adding a timestamp ensures the workflow name is unique name. The default is true. | No |
| Workflow Definition File | textBox | Location of the workflow definition file, which is the primary XML file for the workflow definition. If the workflow definition file resides in a data set member, specify the fully qualified data set name including the member name. Ensure that the data set is cataloged.  If the workflow definition file resides in a z/OS UNIX file, specify the fully qualified path name of the file beginning with the forward slash (/) and including the file name. For example: /usr/lpp/zosmf/V2R1/samples/workflow_sample_automation.xml. | Yes |
| System | textBox | The nickname of the system on which the workflow is to be performed. The nickname is a unique name for the system to differentiate it from existing systems that have the same system and sysplex name. The nickname is 1-40 characters long. Valid characters are alphanumeric characters (A-Z, a-z, and 0-9), hyphens (-), and special characters ($ _ # @). Nicknames are case sensitive, for example SYSTEM1 and System1 are unique values. | Yes |
| Owner | textBox | The user ID of the workflow owner. This user can perform the workflow steps or delegate the steps to other users. Specify a valid user ID that is defined to your z/OS security management product installation, such as RACF. A valid user ID consists of one to eight alphanumeric characters (A-Z, a-z, 0-9, #, $, and @). | Yes |
| Assign To Owner | checkBox | Indicates whether the workflow steps are assigned to the workflow owner when the workflow is created. If this property is set to true steps are assigned to the user ID that is specified on the property owner. If this property is set to false, the workflow steps are left unassigned when the workflow is created. The default is true. | No |
| Job Statement | textAreaBox | JOBSTATEMENT | No |
| Comments | textAreaBox | Specifies any information that you want to associate with the creation of this workflow. The comment can contain up to 500 characters. This information is recorded in the workflow history. | No |
| Variable Input File | textBox | The name of an optional properties file that contains values for one or more of the variables that are defined in the workflow definition file. If the workflow variable input file resides in a data set member, specify the fully qualified data set name including the member name. Ensure that the specified data set is cataloged. If the workflow variable input file resides in a z/OS UNIX file, specify the fully qualified path name of the file beginning with the forward slash (/) and including the file name. See the zOSMF documetation, for the format of the variable input file. | No |
| Variables | textAreaBox | A list of one or more variables for this workflow. The variables specified on this property has precedence over the variables that are specified in the workflow variable input file. Specify the variables in the format key:value. If there are multiple variables, place them in individual lines. | No |
| Resolve Global Conflict By Using | textBox | On creation of the workflow, z/OSMF determines whether any of the variables that are supplied in this request (through the variable input file or variables array) would conflict with existing global variables in the Workflows task. In such cases, this property specifies which version of the variable is used, as follows: When set to input, the global variable conflicts are overridden by the variables in specified input file. The global variable value is updated with the input variable value. Use caution with this setting; your selection will affect any other workflows that refer to the same global variable. When set to global, or omitted, the variable value supplied with the request (through the variable input file or variables array) is ignored and the current global value is used. The default is global. | No |
| Print REST call in log | checkBox | Indicates if REST call requests and responses are printed to the log file. The default is REST calls are not put into the log file. | No |
| zOSMF URL | textBox | The URL to access the zOSMF REST API. For example: `https://myhost:443/.` | Yes |
| Allow Untrusted SSL Certs | checkBox | Indicates whether HTTPS calls to sites with untrusted certifications will not fail or fail. The default value is will not fail. | No |
| User Name | textBox |  | No |
| Password | secureBox |  | No |
| Use Client certificate | checkBox | Indicates whether to use z/OSMF client certifacte instead of user-id and password. | No |
| Location of the keystore (pkcs12) file in the target LPAR USS | textBox |  | No |
| Password for keystore | secureBox |  | No |

## Start Workflow

Use this step to start a workflow.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workflow Key | textBox | The workflow key of the workflow to be started. | Yes |
| Step Name | textBox | The name of the step at which automation is to begin. If this property is omitted, automation processing begins with the first step in the workflow. | No |
| Perform Subsequent | checkBox | If the workflow contains any subsequent automated steps, this property indicates whether z/OSMF is to perform the steps. If you set this property to true z/OSMF attempts to perform the automated steps. If you set this property to false, z/OSMF attempts to perform the specified step only. The default is true. | No |
| Resolve Conflict By Using | textBox | Indicates how variable conflicts are to be handled when the Workflows task reads in the output file from a step that runs a REXX exec or UNIX shell script. The following values are valid for this parameter: outputFileValue, existingValue, and leaveConflict. Specify the outputFileValue value to allow the output file values to override the existing values. This setting applies to instance variables only. Global variables are not overridden by variables in the output file. The existingValue value indicate that existing variables values instead of the output file values. The leaveConflict value indicates that the automation is stopped and the user must resolve the conflict manually. The default value is outputFileValue. | No |
| Notification URL | textAreaBox | A notification URL (up to 2000 characters). Depending on the requirements of your application, you might want to receive a notification when the automated step or steps reach an end state (either completion or failure). Suppose, for example, that your application includes a servlet that is to be given control on completion of the automated steps. If so, you can optionally specify a notification URL to be posted when automation ends. See the zOSMF online document for more details. | No |
| Wait For Workflow | checkBox | Indicates whether to wait for the workflow to complete. The amount of time to wait is specifiedin the Timeout property. If not on, the value on the Timeout property is ignored. | No |
| Timeout | textBox | The timeout value in seconds for a wait. The default is 120 seconds.. | No |
| Print REST log | checkBox | Indicates to send REST call requests and responses to the log. The default is no. | No |
| Print Job Log | checkBox | Indicates to print the Job log file. All jobs submitted during the workflow execution time are fetched including jobs which are not submitted by the workflow. To avoid showing jobs not submitted by the workflow, you may configure z/OSMF workflow to use a unique job name and then use the Job Filter to exclude other jobs. | No |
| Write Job Log to Output | checkBox | Indicates if the job log file is stored based on the zosmf.workflowJoblog step output property. The default is no. | No |
| Job Prefix | textBox | The value to add as a prefix to the job name. The defaults is and askrick(*). Folded to uppercase. The value cannot exceed eight characters. | No |
| Job Owner | textBox | The user ID of the job owner whose jobs are being queried. The default is the z/OS user ID. Folded to uppercase. The value cannot exceed eight characters. | No |
| Output DDName Filter | textAreaBox | One or more output ddname filters. Separate multiple filters with new lines. Wildcard * and ? are supported. | No |
| Max Lines | textBox | The maximum number of records to be displayed for each output data set. Specify 0 to display the full content. The default is 1000. | No |
| zOSMF URL | textBox | The URL to access the zOSMF REST API. For example: `https://myhost:443/.` | Yes |
| Allow Untrusted SSL Certs | checkBox | If checked, HTTPS calls to sites with untrusted certifications will not fail. | No |
| User Name | textBox |  | No |
| Password | secureBox |  | No |
| Use Client certificate | checkBox | Indicates whether to use z/OSMF client certifacte instead of user-id and password. | No |
| Location of the keystore (pkcs12) file in the target LPAR USS | textBox |  | No |
| Password for keystore | secureBox |  | No |

## Run Published Software Service Template

Use this step to define the input properties for the Run Published Software Service template.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Template Name | textBox | The name of the software services template to run. | Yes |
| Domain Name  | textBox | The domain name for the specified template. This property is required if the user has consumer authorization to more than one domain with the template name. | Yes |
| Tenant Name | textBox | The name of the tenant for the specified template. This property is required if the user has consumer authorization to more than one tenant in the same domain that contains the template name. | Yes |
| User Data ID | textBox | The ID for the user data specified with user-data. Passed into the software services registry. | Yes |
| User Data | textBox | User data that is passed into the software services registry. Can be specified only if user-data-id is provided. | Yes |
| Account Info | textBox | The account information to use in the JCL JOB statement. The default is the account information that is associated with the resource pool for the tenant. | Yes |
| Systems Nicknames | textBox | Each string is the nickname of the system upon which to provision the software service defined by the template. The field is required if the resource pool associated with the tenant used for this operation is not set up to automatically select a system. Only one nickname is allowed. If the field is provided it is validated. | Yes |
| Input Variables | textAreaBox | A list of variable each separated by a new line. Specify each variable in the following format: name=value. | Yes |
| Wait For Provision | checkBox | Indicates to wait for the provision to complete. The default is to wait for the provision to complete. If this property is not enabled, the value on the Timeout property is ignored. | No |
| Timeout | textBox | The number of seconds to wait. The default value is 120. | No |
| Print REST log | checkBox | Indicates if REST call requests and responses are printed to the log file. The default is no. | No |
| Print Job Log | checkBox | Indicates if the job log file is printed. All jobs submitted during the workflow execution time are fetched including jobs which are not submitted by the workflow. To avoid showing jobs not submitted by the workflow, you may configure z/OSMF workflow to use a unique job name and then use the Job Filter to exclude other jobs. | No |
| Write Job Log to Output | checkBox | If checked, Job log is stored to step output property zosmf.workflowJoblog | No |
| Job Prefix | textBox | The prefix to add to the job name prefix. The default value is an askrick(*). Folded to uppercase; cannot exceed eight characters. | No |
| Job Owner | textBox | The job owner user ID whose jobs are being queried; the default is the z/OS user ID. Folded to uppercase. The value cannot exceed eight characters. | No |
| Output DDName Filter | textAreaBox | A list of one or more output ddname filters. Separate multiple filters with new lines. Wildcard * and ? are supported. | No |
| Max Lines | textBox | The maximum number of records to display for each output data set. Specify 0 to display the full content. The default value is 1000. | No |
| zOSMF URL | textBox | The URL to access zOSMF REST API. e.g. `https://myhost:443/` | Yes |
| Allow Untrusted SSL Certs | checkBox | If checked, HTTPS calls to sites with untrusted certifications will not fail. | No |
| User Name | textBox |  | No |
| Password | secureBox |  | No |
| Use Client certificate | checkBox | Indicates whether to use z/OSMF client certifacte instead of user-id and password. | No |
| Location of the keystore (pkcs12) file in the target LPAR USS | textBox |  | No |
| Password for keystore | secureBox |  | No |

## Software Services Instance Discovery

Use this step to discover all the software instances. Also use to create resources for each software instance under a root resource, apply the correct role, and set the properties.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Query Parameters | textAreaBox | A list of one or more query variables. Check the z/OSMF List the software services instances REST API for a list of valid query parameters | No |
| zOSMF URL | textBox | The URL to access the zOSMF REST API. | No |
| zOSMF User | textBox | The zOSMF user to use. | No |
| zOSMF Password | secureBox | The zOSMF password to use. | No |
| Resource | textBox | The Resource to configure. | No |
| Use Client certificate | textBox | Indicates whether to use z/OSMF client certifacte instead of user-id and password. valid values are true or false | No |
| Location of the keystore (pkcs12) file in the target LPAR USS | textBox |  | No |
| Password for keystore | secureBox |  | No |

## zOSMF Cloud Provisioning Discovery

Use this step to discover if the zOSMF service is available by checking the URL specified in zosmf.url agent property. If it is available, the zOSMFService role is assigned to the resource and the properties are set.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The Resource to configure. | No |
| zOSMFURL | textBox |  | No |
| sysUser | textBox |  | No |

