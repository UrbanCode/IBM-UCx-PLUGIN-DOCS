
# IBM API Connect - Troubleshooting

**Tip:** For more questions and answers, see the [DevOps forum on IBM developerWorks](https://community.ibm.com/community/user/wasdevops/urbancode-discussion "DevOps forum").

## Login Step: ERROR {error:invalid\_client,error\_description:Unauthorized grant type: password}``


IBM API Connect is beginning to introduce federated identity, and therefore, requires a workaround until it has been fully implemented. This incomplete authentication strategy creates issues after you have configured the catalog and app variable or attempt to push a Loopback app. The workaround is simple. Run the following command on the command line and login into Bluemix via the browser pop-up: apic edit After logging in, the required access token will be set locally. At this point the Login step can be ignored or removed and plug-in steps may be called normally. If you use the Logout step, the access token will need to be regenerated via the above command. This resolution should only be necessary if you modify the app and catalog configuration settings or the Publish an Application step is used.


## Publish an Application Step: ERROR Make sure you have logged in. ERROR

Refer to the resolution above.


## ERROR API loans:1.0.0 with property gateway set to micro-gateway incompatible with Catalog Sandbox gateway datapower-gateway .


The command apic create --type api --title Loans, which is used in the tutorial, creates a simplified API definition that sets the gateway to micro-gateway. Unfortunately, this may not be the same gateway used in your catalog. The easiest way to resolve this issue, is to manually open the load.yaml file and change micro-gateway to the Catalogs gateway. The error message will tell you what gateway to change it to. In this example, the loan.yamls gateway need to be changed from micro-gateway to datapower-gateway. Refer to your error message for the correct gateway setting.


## Other Errors


The apic toolkit is frequently being upgraded and improved. Ensure that your version of the apic toolkit is supported by this plug-in. Supported versions and installation instructions can be found on the plug-ins Overview documentation page.


|Back to ...||Latest Version|IBM API Connect ||||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1171240](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/apiconnect/ucd-apiconnect-8.1171240.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Tutorials](tutorials.md)|[Steps](steps.md)|[Downloads](downloads.md)|
