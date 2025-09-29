
# CyberArk

This is a partner provided plugin.

CyberArk Application Identity Manager, part of the CyberArk Privileged Account Security Solution, enables organizations to protect critical business systems by eliminating hard-coded credentials from application scripts, configuration files and software code, and removing SSH keys from servers where they are used by applications and scripts. Application Identity Manager offers agent and agentless deployment options to best meet the security and availability requirements of various business applications. The product is built on the CyberArk Shared Technology Platform, delivering scalability, high availability and centralized management and reporting.

If you encounter issues with the plug-in or want to send feedback, take one of the following steps:

* Ask CyberArk plug-in specific questions on the [GitHub Issues](https://github.com/cyberark/urbancode-conjur-aim/issues) page.
* [Source project](https://github.com/cyberark/urbancode-conjur-aim)
* For general plug-in issues, submit questions to the [dW Answers page](https://community.ibm.com/community/user/wasdevops/urbancode-discussion). Use the following tags: DevOps | ucdev | plugins

# Available Steps

Get Password from CCP (Web Service) Retrieve a password from CyberArk AIM Central Credential Provider via an HTTP request. The Central Credential Provider is installed remote to the agent on a central IIS server. This step will set the CyberArk/username, CyberArk/address, and CyberArk/password properties at either the component process request level or the generic process request level.

Get Password from CP (CLI Utility) Retrieve a password from CyberArk AIM Credential Provider via the clipasswordsdk command line utillity on the agent machine. This step will set the CyberArk/username, CyberArk/address, and CyberArk/password properties at either the component process request level or the generic process request level.

Authenticate Conjur Authenticate Conjur using API Key to get a short-lived access token.

Get Variable from Conjur Get a variable from Conjur.
