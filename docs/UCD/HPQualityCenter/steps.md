
# MicroFocus ALM (formerly HP Quality Center) - Process Steps

- [MicroFocus ALM (formerly HP Quality Center) - Steps](#microfocus-alm-formerly-hp-quality-center---steps)
- [Steps](#steps)
    - [Steps](#steps-1)
    - [Process steps in the HP Quality Center Plugin plug-in](#process-steps-in-the-hp-quality-center-plugin-plug-in)
    - [Add Comments](#add-comments)
    - [Check Status](#check-status)
    - [Create Issue](#create-issue)
    - [Query Defects](#query-defects)
    - [Run Test Set](#run-test-set)
    - [Update Issues](#update-issues)


## Add Comments

Add comments to a defect in HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Comments | String | Any info you wish to be added to the Quality Center comment in addition to the commit comment. Separate multiple comments with a new line. | No |
| Defect Ids | String | A comma separated list of defect ids for defects to update in HP Quality Center. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Fail Mode | Enumeration: | What should be done when a defect to be commented on is not found in Quality Center. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after attempting to comment on all defects. Warn: log a warning when a defect is not found. | Yes |
|           |              | * fast | |
|           |              | * slow | |
|           |              | * warn | |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Username | String | The username to authenticate with Quality Center. | Yes |

## Check Status

Ensure the status of issues are in the expected state.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Defect Ids | String | A comma separated list of defect ids for defects to update in HP Quality Center. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Expected Status | String | The status the issues are expected to have. | Yes |
| Fail Mode | Enumeration: | What should be done when a defect is not in the expected state. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after publishing the report of found defects. Warn: log a warning when a defect is not found. | Yes |
|           |              | * fast  | |
|           |              | * slow | |
|           |              | * warn | |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Username | String | The username to authenticate with Quality Center. | Yes |

## Create Issue

Create a new defect in HP Quality Center.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Fields | String | Additional defect fields to be added. Enter one per line, as name=value pairs. This uses Javas java.util.Properties format. | No |
| Assignee | String | The assignee for the new defect. | Yes |
| Detected By | String | Who detected the defect. | Yes |
| Detected In Version | String | The version in which the defect was detected. | Yes |
| Detected On Date | String | The date the defect was detected. Format is MM-DD-YYYY. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Priority | String | The priority of the new defect. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Project Key | String | The Project Key in Quality Center. | No |
| Reproducible | String | Whether or not the defect is reproducible (Y/N). | Yes |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Severity | String | The severity of the new defect. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | Yes |
| Status | String | The status of the new defect. Default values are ( Closed, Fixed, New, Open, Rejected, Reopen ) | No |
| Subject | String | The Subject of the defect. | Yes |
| Summary | String | A summary for the new defect. Default max length is 255. | Yes |
| Username | String | The username to authenticate with Quality Center. | Yes |

## Query Defects

Query and return

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Match Criteria | String | The criteria names you want to filter by, newline separated. Ex: Created in Application = XXXXX | No |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Return Fields | String | The fields you want to be presented in the return records, newline separated. | No |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Username | String | The username to authenticate with Quality Center. | Yes |

## Run Test Set

Run a Test Set using HP Quality Center. This step is only functional on a Windows system capable of executing Visual Basic scripts. If a test doesnt have a Planned Host in the HP ALM Test Lab, you must provide a Remote Host or check the Run Locally option to run the tests on your local HP ALM server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Folder | String | The folder in Quality Center the test set resides in. This usually starts with Root. | Yes |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Recursive Search | Boolean | Check to search through all subfolders and run all test-sets in each directory. Only applicable when not running a specific test set. | No |
| Remote Host | String | The host to run the tests on if not running locally. Leave blank to use the configuration within HP Quality Center. | No |
| Run Locally | Boolean | Check to run the test set only on the local instance of HP Quality Center that the agent has access to. | No |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Skip Output | Boolean | Check to skip over any output from Quality Center. No test results will be returned to uDeploy. | No |
| Test Set | String | The test set to run. If not specified, all test-sets in the folder will be run. | No |
| Timeout | String | Test run timeout, in minutes. | Yes |
| Username | String | The username to authenticate with Quality Center. | Yes |

## Update Issues

Update one or more defects in HP Quality Center.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Fields | String | Any other additional defect fields to update. These should be one per line, as name=value pairs. Adheres specifically to the java.util.Properties format. | No |
| Assignee | String | The new assignee for the defect or blank to not change. | No |
| Comment | String | Optionally add a comment with this update. | No |
| Defect Ids | String | Comma separated list of defect ids to update. | Yes |
| Domain | String | The Domain in Quality Center the defect is in. | Yes |
| Fail Mode | Enumeration: | What should be done when a defect to be updated is not found in Quality Center. Fail-fast: fail the step immediately if a defect is not found. Fail: fail the step after attempting to update all defects. Warn: log a warning when a defect is not found. | Yes |
|           |              | * fast | |
|           |              | * slow | |
|           |              | * warn | |
| Password | Password | The password to authenticate with Quality Center. | No |
| Password Script | String | If a property or script should be used to set the password, leave password blank and put the property or script here. | No |
| Priority | String | The new priority of the defect or blank to not change. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Project | String | The Project in Quality Center the defect is in. | Yes |
| Server URL | String | The base URL of the Quality Center instance. It usually ends with /qcbin. | Yes |
| Severity | String | The new severity of the defect or blank to not change. Default values are ( 1-Low, 2-Medium, 3-High, 4-Very High, 5-Urgent ) | No |
| Status | String | The new status of the defect or blank to not change. Default values are ( Closed, Fixed, New, Open, Rejected, Reopen ) | No |
| Summary | String | A new summary for the defect or blank to not change. Default max length is 255. | No |
| Username | String | The username to authenticate with Quality Center. | Yes |

