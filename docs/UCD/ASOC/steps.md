
# Process Steps

## Configure Job Options

Configure scan job options.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL. For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Scan FIID | textBox | FIID of the scan to configure. This is found in the scan's URL. | Yes |
| Site URL | textBox | URL of site to scan. If there is already at least one starting URL associated with the scan, input here will add to the list of URL's. | No |
| Set Automatic Login | selectBox | Set to true to automatically login with the given Scan Site User and Scan Site Password. | No |
| Scan Site User | textBox | User to log into the site as. Input here will overwrite the username if there is already one set in the scan. | No |
| Scan Site Password | secureBox | Password to use when logging into the site. Input here will overwrite the password if there is already one set in the scan. | No |
| HTTP Authentication | selectBox | Check this field to enable Basic/NTLM authentication. | No |
| HTTP User | textBox |  | No |
| HTTP Password | secureBox |  | No |
| Scan Limit | textBox |  | No |
| Recorded Traffic .htd File | textBox |  | No |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |

## Create Scan

Create an AppScan security scan.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL. For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Template Name | textBox | Name of the template to use to create the scan and report pack. Must be a valid template that you have access to in the Templates directory or any of its subfolders. | Yes |
| Folder ID | textBox | ID of the specific folder in which to create the scan and report pack. If this is left blank, the scan and report pack will be created in the root folder. | Yes |
| Application ID | textBox | The application ID. Used to associate the job with an application. | Yes |
| Scan Name | textBox | The name to give to the newly created scan. | Yes |
| Scan Description | textBox | The description to give to the newly created scan. | Yes |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |
| Webhook Payload | textAreaBox | Specify payload for the AppScan webhook. | No |

## List Templates

Retrieve and print a list of available job templates.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL. For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |

## Run Scan

Run an AppScan security scan.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL. For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Scan FIID | textBox | FIID of the scan to run. This is found in the scan's URL. | Yes |
| Reports FIID | textBox | FIID of the report pack associated with the scan.                               If not given, step may finish before waiting for report pack to complete.                               This is found in the report's URL. | No |
| Timeout | textBox | Timeout, in minutes, at which the step will fail if the scan is not yet complete.                               Minimum is 5 minutes. | No |
| Retries | textBox | The number of times to retry running the scan, in case of failure. | No |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |
| Wait for Scan Completion | checkBox | Select to have the process wait for the scan to complete.                               If unselected, the process will complete once the scan has started running. | No |
| Stop Scan on Failure | checkBox | Select to stop the scan on any failure or timeout exception. | No |

## Retrieve Report

Retrieve report pack summary and specific report information from AppScan Enterprise. Reports are saved as a xml files named [reportFIID]-Summary.xml and [reportFIID]-[reportName].xml

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL. For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Report FIID | textBox | FIID of the report pack to retrieve. This is found in the report's URL. | Yes |
| Report Name | textBox | The name of the report within the report pack to retrieve the issue counts.                               If empty, then no report counts will be retrieved. | No |
| Report Destination | textBox | Folder path to save the report file. Default location is the working directory.                                      Example: 'C:/reports/'. The full file path will be saved as an output property. | No |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |
| Send Report to Output Logs | checkBox | Select to also send the report text to the output logs. | No |

## Retrieve PDF Report

Retrieve report from AppScan Enterprise. Reports are saved as a PDF file named AppScanReportOutput-[date]-[time].zip

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL, For example, `https://localhost/` | Yes |
| AppScan Enterprise Port | textBox | AppScan Enterprise Port number. | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Application ID | textBox | ID of the application report to retrieve. | Yes |
| Scan Name | textBox | The name of the scan within the application. The format is {scanName} ({scanFIID}). For example, 'Test Scan (171)'. | Yes |
| File Path | textBox | Path of file to write report info to. For example, C:/reports/ | Yes |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |

## Wait for Scan

Wait for an AppScan Scan to complete.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL, For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Scan FIID | textBox | FIID of the scan to wait for. This is found in the scan URL. | Yes |
| Timeout | textBox | Timeout, in minutes, at which the step will fail if the scan is not yet complete.                               Leave empty to wait indefinitely. | No |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |

## Delete Folder Item

Delete a folder item, such as a Scan or Report, from the AppScan Scans view.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AppScan Enterprise URL | textBox | AppScan Enterprise Control Center URL, For example, `https://localhost/` | Yes |
| User | textBox | Username to log into ASE. | Yes |
| Password | secureBox | Password to log into ASE. | Yes |
| Folder Item FIID | textBox | Specify a Folder Item FIID to delete. Example: Scan or Folder FIID. | Yes |
| Disable Certificate Validation | checkBox | Check to disable certificate validation. | No |

