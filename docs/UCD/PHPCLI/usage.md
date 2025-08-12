
# IBM DevOps PHP CLI Tool - Usage


## Run an application process




To simply request an application process, just use the run entry point followed by the path of the file including the information of the application process you want to run. Heres an example of how a JSON file for application process request should look like:

{ application: , applicationProcess: , description: , environment: , onlyChanged: , post-deploy-message: , snapshot: }``

Once you have your JSON file ready, you can request the application process by running

php uCommand.php run application\_process.json

This entry point will print in the console the ID and link of the process request:

php uCommand.php run application\_process.json

### # DevOps PHP CLI # # Urban Code Deploy PHP CLI Tool # # by SalesConnectDublin # ##################################

[INFO] Default output to: /home/csitadmin/Documents/uCommand/backups

[ID] 6916dd6f-d061-4c07-9071-2db64bcaaa29 [LINK] https://myUrbanCodeServer:8443/#applicationProcess/6916dd6f-d061-4c07-9071-2db64bcaaa29


## Promote a snapshot




The promotion of a snapshot is the process of copying a snapshot from an origin DevOps Deploy server to a destination DevOps Deploy server, including all component versions and artifacts, specified in the snapshot to be promoted.

***Prerequisites*** In order to successfully promote a snapshot, on the destination DevOps Deploy server all the followings are needed:

* All components listed in the snapshot
* The target application for the snapshot should have the same name of the origins one
* All components listed in the snapshot are associated to the application
* A snapshot with the same name of the one we want to promote has not already been created

If any of the cases listed above fails, the promotion of the snapshot wont be able to continue.

***Setup configuration for promotion*** A valid ucd configuration is needed. Please check Required configuration for setting up DevOps PHP CLI basic configuration.

Edit your servers.config.php file

vi $uCommand/config/servers.config.php

and fill in the information for the origin and destination server

$config = array();

// Orign server login information $config[origin\_weburl] = ; $config[origin\_username] = ; $config[origin\_password] = ; // DEPRECATED $config[origin\_authtoken] = ;

// Destination server login information $config[destination\_weburl] = ; $config[destination\_username] = ; $config[destination\_password] = ; // DEPRECATED $config[destination\_authtoken] = ;

// Application name $config[application] = SalesConnect;

// Certificate setup $config[insecure] = true; // Set true for connection without certificate $config[origin\_certificate] = ; // Path to certificate for origin server (only if insecure is set to false) $config[destination\_certificate] = ; // Path to certificate for destination server (only if insecure is set to false)

For origin and destination server login information, please check Required configuration and the information related to login with tokens (recommended) and login with password.

***Run the promotion***

cd $uCommand

php uCommand.php promoteSnapshot [snapshot name]

***Walkthrough of the promotion process*** Promotion starts retrieving the snapshot from origin server

DevOps PHP CLI will then verify that all prerequisites are in place (list of prerequisites)]

Artifacts are exported from origin server

A new snapshot configuration is set up

Component versions are created. If correctly created, component version will be marked with tag [SUCCESS]; if the component version already exists on destination server, it will be marked with the tag [SKIPPING]. In case of failure, component version will be marked with tag [FAILURE].

If a component version has artifacts, they are uploaded on the destination DevOps Deploy server during this process.

User will then be notified of the success or failure. In case of success, a link to the just created snapshot will be displayed in the console.


## Promote DevOps Deploy configuration




The promotion of DevOps Deploy configuration is the process of upgrading DevOps Deploy configuration in a destination server using the configuration taken from another DevOps Deploy server. This includes upgrade of processes, components and applications.

**Promote from DevOps Deploy server** When promoting the configuration directly from an origin server, DevOps PHP CLI is automatically downloading the configuration from the origin server, so to pick up the latest changes. Then it will proceeed to the upgrade process against the destination server.

Edit your servers.config.php file

vi $uCommand/config/servers.config.php

and fill in the information for the origin and destination server. Then run the promotion command:

php uCommand.php *promoteConfig*

**Promote from a source configuration directory** When promoting the configuration from a source directoy, DevOps PHP CLI is using the configuration saved in the directory to perform an upgrade against the destination server.

Edit your servers.config.php file

vi $uCommand/config/servers.config.php

and fill in the information for the origin and destination server. Then run the promotion command:

php uCommand.php promoteConfig [full\_path\_for\_source\_directory]

**Promote without importing environments** Since the upgrade of application is importing the environments from the orgin server, promoteConfig accepts the argument clean that automatically removes all the new environments imported by the upgrade.

Server to server promotion

php uCommand.php promoteConfig clean

Directory to server promotion

php uCommand.php promoteConfig [full\_path\_for\_source\_directory] clean


## Perform a restore




php uCommand.php restore path\_for\_backup\_folder

**Restore without importing environments**

Since the restore of application is importing the environments from the orgin server, restore accepts the argument clean that automatically removes all the new imported environments.

php uCommand.php restore path\_for\_backup\_folder clean

**Quick tip:**Double check that the configuration file has the correct information of the destination server.

**Warning:**Please mind that the restore process is returning a false-positive when checking the success of the restore process. Please ignore this message and check for errors in the process output to determine if the restore was successful.


## Perform a backup




After setting up the required configuration as described in required configuration, you can either define a directory where to export all the backup files or leave it blank and fall back to the default output directory.

{uCommand\_path}``/config/ucd.config.php

*$config[output] =* *;*

Then run the backup:

php uCommand.php **backup**


|Back to ...||Latest Version|IBM DevOps PHP CLI Tool |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.714879](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PHPCLI/SubversionSourceConfig-6.714879.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Setup](setup.md)|[Downloads](downloads.md)|
