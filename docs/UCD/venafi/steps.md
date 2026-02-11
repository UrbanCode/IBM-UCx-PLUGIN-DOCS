# Process Steps

## Authentication test

Test the communication with the Venafi server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Get Venafi Policy

Get a specific Venafi Trust Protection Platform policy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| TPP policy DN | textBox | The path for certificate within TPP | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Request Certificate

Request a certificate from TPP

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| TPP policy DN | textBox | The path for certificate within TPP | Yes |
| CA DN | textBox | The DN for the CA within TPP | Yes |
| Certificate name | textBox | The DN for the certificate | Yes |
| Subject alt names | textAreaBox | Subject alternative names in the format : Type 1 : Value 1; Type 2 : Value 2;  See documentation for information on types. | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Request Certificate Wait

Request a certificate from TPP and poll for to get the status for issuance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| TPP policy DN | textBox | The path for certificate within TPP | Yes |
| CA DN | textBox | The DN for the CA within TPP | Yes |
| Certificate name | textBox | The name for the certificate | Yes |
| Format | selectBox | Format for the certificate | Yes |
| Include chain | checkBox | Include the certificate chain. Not applicable to DER. | No |
| Include private key | checkBox | Include the private key. Only applies to PKCS #12 or JKS. | No |
| Friendly name | textBox | A frieldly name to associate with the certificate. | Yes |
| Key store PW | secureBox | Password to protect the JKS keystore. | Yes |
| Private key PW | secureBox | The password to protect the private key. Only applies to PKCS #12 or JKS format when the private key has been requested. | Yes |
| Subject alt names | textAreaBox | Subject alternative names in the format : Type 1 : Value 1; Type 2 : Value 2;  See documentation for information on types. | Yes |
| Filename | textBox | The name of the file to hold the certificate. Extension will be added and the filename will be provided as an output property. | Yes |
| Poll timout | textBox | The time to wait for the certificate to be approved and ready within TPP | Yes |
| Poll interval | textBox | The interval between checking the certificate status within TPP | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Generate Certificate CSR

Generate a certificate CSR to be sent to Venafi using a subsequent step

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Policy details | textBox | JSON object containing the policy details taken from the 'policy' output property of the step called 'Get Venafi Policy' | Yes |
| Certificate Name | textBox | The DN for the certificate | Yes |
| Email | textBox | The email address to associated with the certificate | Yes |
| Web URL | textBox | The website URL to assiciate with the certificate | Yes |
| Private key file | textBox | The filename to hold the private key | Yes |
| Public key file | textBox | The filename to hold the public key | Yes |

## Submit CSR to Venafi

Submit a CSR to the Venafi server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| TPP policy DN | textBox | The path for certificate within TPP | Yes |
| Cert. Authority | textBox | The certificate authority used to generate the certificate | Yes |
| Cert. Name | textBox | The name for the certificate | Yes |
| CSR Text | textBox | The generated CSR in text format. Used to pass the output of the Generate CSR step into the submit step : ${p:Generate Certificate CSR/csr}. | Yes |
| CSR File | textBox | The name of a file that holds the CSR data. Used when generating the CSR from a keystore. | Yes |
| Subject Alt Names | textAreaBox | Subject alternative names in the format : Type 1 : Value 1; Type 2 : Value 2;  See documentation for information on types. | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Submit Custom Fields to Venafi

Submit the custom fields required for a certificate to the Venafi server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Cert. DN | textBox | The DN for the certificate | Yes |
| Custom Fields | textAreaBox | Custom fields in the format : Field Name 1 : Field value 1; Field name 2 : Field value 2; | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Retrieve Certificate

Retrieve a certificate from TPP. Certificate already exists.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Certificate DN | textBox | The DN for the certificate within TPP | Yes |
| Format | selectBox | Format for the certificate | Yes |
| Include chain | checkBox | Include the certificate chain. Not applicable to DER. | No |
| Include private key | checkBox | Include the private key. Only applies to PKCS #12 or JKS. | No |
| Friendly name | textBox | A name to associate with the certicate. Optional for Base64 certificates and MANDATORY for JKS. | Yes |
| Keystore password | secureBox | Password for the JKS keystore. MANDATORY whe JKS format is selected. | Yes |
| Private key PW | secureBox | The password to protect the private key. Only applies to PKCS #12 or JKS format when the private key has been requested. | Yes |
| Filename | textBox | The name of the file to hold the certificate. Extension will be added and the filename will be provided as an output property. | Yes |
| Poll timout | textBox | The time to wait for the certificate to be approved and ready within TPP | Yes |
| Poll interval | textBox | The interval between checking the certificate status within TPP | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Get Certificate Status

Get information about a certificate from Venafi.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Certificate DN | textBox | The DN for the certificate within TPP | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Validate Remaining Days

Validate the remaining days of a certificate before expiry. If the certificate is valid for less than the indicated number of days then the step will fail.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Certificate DN | textBox | The DN for the certificate within TPP | Yes |
| Days required | textBox | The number of days for which the certificate should be valid to pass. | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Revoke Certificate

Revoke a certificate.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Certificate DN | textBox | The DN for the certificate within TPP | Yes |
| Reason | selectBox | The reason for the revoke request. | Yes |
| Comment | textAreaBox | Details why the certificate is being revoked. | Yes |
| disabled | checkBox | Disable the certificate object, in addition to revoking the certificate. | No |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

## Renew Certificate

Renew a certificate.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TPP API URL | textBox | The URL for the Venafi TPP server in the format https://server-name | Yes |
| Certificate DN | textBox | The DN for the certificate within TPP | Yes |
| tpp Username | textBox | The username for the tpp connection | Yes |
| tpp User password | secureBox | The password for the tpp user | Yes |

