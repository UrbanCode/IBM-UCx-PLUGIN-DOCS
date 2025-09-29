
# Venafi

The Venafi Trust Protection Platform provides continuous monitoring and control over keys and certificates across different devices. The Venafi plug-in for IBM DevOps Deploy contains various steps to control Venafi certificates.

The Venafi plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community. 

## Downloads

* [Source project](https://github.com/UrbanCode/Venafi-UCD)

If you encounter issues with the plug-in, or want to send feedback:

* See the [Venafi plug-in documentation](https://github.com/UrbanCode/Venafi-UCD/blob/master/Doc/UrbanCodeVenafiPlugin.pdf).
* Ask Venafi plug-in specific questions on the [GitHub Issues](https://github.com/UrbanCode/Venafi-UCD/issues) page.
* For general plug-in issues, submit questions to the [dW Answers page](https://community.ibm.com/community/user/wasdevops/urbancode-discussion). Use the following tags: DevOps | ucdev | plugins

### Available Steps

* Authentication test: Test the communication with the Venafi server.
* Generate certificate CSR: Create a certificate signing request that may then be submitted to Venafi.
* Get Certificate Status: Get information about a certificate from Venafi.
* Get Venafi Policy: Retrieve the details of the Venafi policy associated with a specific policy folder.
* Renew Certificate: Renew a certificate.
* Request Certifcate: Request a certificate from TPP.
* Request Certificate Wait: Request a certificate from TPP and poll for to get the status for issuance.
* Retrieve Certificate: Retrieve a certificate from TPP. Certificate already exists.
* Revoke Certificate: Revoke a certificate.
* Submit Custom Fields to Venafi: Supplement a previously submitted certificate request with custom field values.
* Submit CSR to Venafi: Submit the previously created CSR to Venafi for processing.
* Validate Remaining Days: Validate the remaining days of a certificate before expiry. If the certificate is valid for less than the indicated number of days then the step will fail.
