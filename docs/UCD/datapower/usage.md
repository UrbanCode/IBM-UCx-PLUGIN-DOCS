
# IBM DataPower Configuration Manager - Usage


* [Automated DataPower Deployment and Management Using DevOps Deploy at HM Health Solutions](https://event.on24.com/eventRegistration/EventLobbyServlet?target=reg20.jsp&referrer=&eventid=1457384&sessionid=1&key=B964DE08F3C2EEC28B45B7633953679E&regTag=&sourcepage=register): Webinar on how HighMark Health Solutions uses IBM DevOps and DataPower in production. Requires short sign-up to watch.
* [Creating Versions without a Build or CI Tool](https://www.urbancode.com/resource/creating-versions-without-a-build-or-ci-tool/): Import IBM DataPower artifacts with our suggested approach.
* [Import (Basic) Walkthrough](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/25/datapower-plug-in-import-basic-walkthrough): Complete beginner walkthrough for IBM DevOps and the DataPower plug-in.
* [DataPower Plugin GitHub Wiki](https://github.com/ibm-datapower/datapower-configuration-manager/wiki): Complete documentation on the plugin and DCM command line interface.
* [Definition File Walkthrough](https://www.urbancode.com/2017/08/04/datapower-plugin-definition-file-walkthrough/): Advanced walkthrough of the DataPower plug-in focusing on comprehension of the Definitions file.
* [Docker DataPower Environment](https://developer.ibm.com/datapower/docker/): Simple Docker DataPower environment to get started quickly. In addition to the directions given in the documentation, follow the two steps below to enable the plug-in to communicate with the DataPower service.
+ Add the `-p 5550:5550` argument to the `docker run` command (Step 4).
+ Enable the XML connection via the DataPower cli. After running the Docker container for the first time, immediately after Step 6 run:
- `xml-mgmt 0 5550;`
- `write mem;`
* [Domain Deployment Architecture and Implementation using IBM DataPower and DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/26/domain-deployment-architecture-and-implementation?CommunityKey=9adfe6b6-2e23-4895-8b27-38b93b5e152c): Best practices around domain deployment implementation and architectural organization using IBM DataPower and DevOps Deploy.
* [IBM Datapower GatewaysDevops with DevOps Deploy](https://www.slideshare.net/JaredPutman1/ibm-datapower-gateways-devops-with-urbancode-deploy): Slideshow describing the capabilities of IBM DevOps Deploy and IBM DataPower Gateways.

|Back to ...||Latest Version|IBM DataPower Configuration Manager ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[v27](https://github.com/ibm-datapower/datapower-configuration-manager/releases/download/Datapower27/datapower-v27.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
