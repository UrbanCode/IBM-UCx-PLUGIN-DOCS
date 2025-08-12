
# Cloud Foundry

The Cloud Foundry plug-in uses the CloudFoundry command line utility to interact with applications in a target Cloud Foundry system.

## Available Steps

Bind ServiceBinds a Cloud Foundry service instance onto a Cloud Foundry application.

CF Auto-ConfigureDiscover and configure all organizations and spaces for each organization into a resource tree in DevOps Deploy.

CF DiscoveryThis step will discover if Cloud Foundry is on an agent by checking common installation paths. If it is, it will assign the role to the resource and set the command path property.

Create DomainCreates a domain in an organization.

Create RouteCreates a URL route in a space.

Create ServiceCreates a new Cloud Foundry service.

Create SubdomainCreates a new subdomain in an org.

Create or Update User-Provided ServiceCreate or update a user-provided service instance.

Delete AppDeletes an application.

Delete DomainDeletes a domain.

Delete RouteDeletes a route.

Delete ServiceDeletes a CF_SERVICE.

Delete SubdomainDeletes a subdomain.

Execute CF ScriptExecutes a Cloud Foundry script file.

Execute CF Bash File Executes a bash file.

Map RouteAdds a URL route to an application.

Run ApplicationPushes an application with or without a manifest file.

Restart AppRestarts an application.

Start AppStarts an application.

Stop AppStops an application.

Unbind ServiceUnbinds a Cloud Foundry service from a Cloud Foundry application.

Unmap RouteRemoves a URL route from an application.

There is also an DevOps Deploy Community supported plugin for cloud foundry: [DevOps Deploy Community Cloud Foundry Plugin](https://github.com/IBM-UrbanCode/Cloud-Foundry-UCD)

Please see the [Troubleshooting Documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/cloud-foundry/troubleshooting.html) for information about migrating properties from the community plugin.
