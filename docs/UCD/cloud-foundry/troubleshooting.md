
# Cloud Foundry

## Troubleshooting

### Upgrading From Cloud Foundry Community Plugin

Three default values from the community plugin have been changed in the IBM official plugin to reference different resource properties.

The resource properties which are no longer referenced are CF_API, CF_ORG, and CF_SPACE

The replacement resource properties are cf.api, cf.org, and cf.space

This will cause plugin steps to fail if it cannot find the newly referenced properties.

In order to get around this potential issue, create a top-level resource property for each new property and set the value to reference the old properties:

* Create a top-level resource property cf.api and set its value to ``${p:resource/CF_API}``
* Create a top-level resource property cf.org and set its value to ``${p:resource/CF_ORG}``
* Create a top-level resource property cf.space and set its value to ``${p:resource/CF_SPACE}``
