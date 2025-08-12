
# Nexus Repository Manager V3 - Usage

* [NRM V3 Rest API Versions](#nrm-v3-rest-api-versions)
* [Plugin Demonstration Video](#plugin-demonstration-video)

## NRM V3 Rest API Versions




The Nexus Repository Manager (NRM) V3 plugin utilizes the [Search API](https://help.sonatype.com/repomanager3/rest-and-integration-api/search-api) of NRM V3.

The plugin supports any NRM server of version 3 or greater. However, depending on your server version you may either be accessing the Siesta REST API, the BETA REST API, or the fully supported V1 REST API.

There are a couple of things to note about the various REST APIs of NRM V3:
* Siesta REST API
+ This API was deprecated with NRM v3.8.x.
* BETA REST API
+ This replaced the Siesta API with NRM v3.8.x.
+ This API was also deprecated with the release of NRM v3.13.x.
* V1 REST API
+ This is the current, fully supported REST API beginning with NRM v3.13.x.
The plugin will first try to connect to the V1 REST API. If the connection fails, it will then try the BETA REST API, and lastly try the Siesta REST API. If the connection cannot be made to the V1 API, a warning will be displayed stating that the server is outdated and its recommended to upgrade to version 3.13 or greater. If none of the REST API connections succeed, the plugin will fail and you should ensure that your Nexus server is at least version 3.



## Plugin Demonstration Video




## Full Demonstration of the Nexus Repository Manager V3 Plugin


