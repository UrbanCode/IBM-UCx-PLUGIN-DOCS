
# IBM AppScan Enterprise - Process Steps


* [Configure Job Options](#configure_job_options)
* [Create Scan](#create_scan)
* [Delete Folder Item](#delete_folder_item)
* [List Templates](#list_templates)
* [Retrieve PDF Report](#retrieve_pdf_report)
* [Retrieve Report](#retrieve_report)
* [Run Scan](#run_scan)
* [Wait for Scan](#wait_for_scan)


## Configure Job Options

Configure scan job options.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL. For example, https://localhost/ | Yes |
| HTTP Authentication | Enumeration: Default / Enable ``true`` / Disable ``false`` / ``${p?:component/appscan.httpAuth}`` | Check this field to enable Basic/NTLM authentication. | No |
| HTTP Password | Password |  | No |
| HTTP User | String |  | No |
| Login .config File | String | Please provide a .config login file for the scan. | No |
| Login Method | Enumeration: None / Automatic / Manual File | Select the login method. | No |
| Password | Password | Password to log into ASE. | Yes |
| Recorded Traffic .htd File | String |  | No |
| Scan Type Method	| Enumeration: Full Scan / Explore Only / Test Only	| Select the Scan Type. Default value is Full Scan. If record traffic file is provided, default value is Test Only. For Full Scan ID: 1, For Explore Only ID: 2, For Test Only ID: 3.	| No |
| Scan FIID | String | FIID of the scan to configure. This is found in the scans URL. | Yes |
| Scan Limit | String |  | No |
| Scan Site Password | Password | Password to use when logging into the site. Input here will overwrite the password if there is already one set in the scan. | No |
| Scan Site User | String | User to log into the site as. Input here will overwrite the username if there is already one set in the scan. | No |
| Site URL | String | URL of site to scan. If there is already at least one starting URL associated with the scan, input here will add to the list of URLs. | No |
| User | String | Username to log into ASE. | Yes |

## Create Scan

Create an AppScan security scan.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL. For example, https://localhost/ | Yes |
| Application ID | String | The application ID. Used to associate the job with an application. | No |
| Automated Scan Name | Enumeration: No / Yes | Please select Yes for automated scan name. |
| Folder ID | String | ID of the specific folder in which to create the scan and report pack. If this is left blank, the scan and report pack will be created in the root folder. | No |
| Password | Password | Password to log into ASE. | Yes |
| Scan Description | String | The description to give to the newly created scan. | Yes |
| Scan Name | String | The name to give to the newly created scan. | Yes |
| Template Name | String | Name of the template to use to create the scan and report pack. Must be a valid template that you have access to in the Templates directory or any of its subfolders. | Yes |
| Test Policy ID | String | The Test Policy ID. Used to associate the job with an application. | No |
| User | String | Username to log into ASE. | Yes |

## Delete Folder Item

Delete a folder item, such as a Scan or Report, from the AppScan Scans view.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL, For example, https://localhost/ | Yes |
| Folder Item FIID | String | Specify a Folder Item FIID to delete. Example: Scan or Folder FIID. | Yes |
| Password | Password | Password to log into ASE. | Yes |
| User | String | Username to log into ASE. | Yes |

## List Templates

Retrieve and print a list of available job templates.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL. For example, https://localhost/ | Yes |
| Password | Password | Password to log into ASE. | Yes |
| User | String | Username to log into ASE. | Yes |

## Retrieve PDF Report

Retrieve report from AppScan Enterprise. Reports are saved as a PDF file named AppScanReportOutput-[date]-[time].zip


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise Port | String | AppScan Enterprise Port number. | Yes |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL, For example, https://localhost/ | Yes |
| Application ID | String | ID of the application report to retrieve. | Yes |
| File Path | String | Path of file to write report info to. For example, C:/reports/ | Yes |
| Password | Password | Password to log into ASE. | Yes |
| Scan Name | String | The name of the scan within the application. The format is {scanName}`` ({scanFIID}``). For example, Test Scan (171). | No |
| User | String | Username to log into ASE. | Yes |

## Retrieve Report

For Plugin v24 and above: Reports are saved as a json files named [reportFIID]-Summary.json.

Upto Plugin v23:Retrieve report pack summary and specific report information from AppScan Enterprise. Reports are saved as a xml files named [reportFIID]-Summary.xml and [reportFIID]-[reportName].xml



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL. For example, https://localhost/ | Yes |
| Password | Password | Password to log into ASE. | Yes |
| Report Destination | String | Folder path to save the report file. Default location is the working directory. Example: C:/reports/. The full file path will be saved as an output property. | No |
| Report FIID | String | FIID of the report pack to retrieve. This is found in the reports URL. | Yes |
| Report Name | String | The name of the report within the report pack to retrieve the issue counts. If empty, then no report counts will be retrieved. | No |
| User | String | Username to log into ASE. | Yes |

## Run Scan

Run an AppScan security scan.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL. For example, https://localhost/ | Yes |
| Password | Password | Password to log into ASE. | Yes |
| Reports FIID | String | FIID of the report pack associated with the scan.If not given, step may finish before waiting for report pack to complete. This is found in the reports URL. | No |
| Retries | String | The number of times to retry running the scan, in case of failure. | No |
| Scan FIID | String | FIID of the scan to run. This is found in the scans URL. | Yes |
| Timeout | String | Timeout, in minutes, at which the step will fail if the scan is not yet complete. Minimum is 5 minutes. | No |
| User | String | Username to log into ASE. | Yes |

## Wait for Scan

Wait for an AppScan Scan to complete.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppScan Enterprise URL | String | AppScan Enterprise Control Center URL, For example, https://localhost/ | Yes |
| Password | Password | Password to log into ASE. | Yes |
| Scan FIID | String | FIID of the scan to wait for. This is found in the scan URL. | Yes |
| Timeout | String | Timeout, in minutes, at which the step will fail if the scan is not yet complete. By Default It will wait for 5 minutes. Large Value like 200000 recommended when the expected time is not known. | No |
| User | String | Username to log into ASE. | Yes |


