
# Salesforce

The Salesforce plug-in for IBM DevOps Deploy uses Salesforce CLI (SF CLI) instead of the Ant Migration Tool to deploy and retrieve metadata changes and Apex classes. This migration was required because Salesforce is retiring the legacy Ant-based deployment approach, and compatibility issues with the Winter ’27 release necessitated moving to the Salesforce CLI to ensure continued support for Salesforce deployments.

## Available Steps

- Bulk Retrieve:  Retrieve a large number of components of a single metadata type into a set of local files.
- Deploy:  Deploy components, code, or recent validations into your organization.
- Deploy Recent Validation: Deploy recently validated components.
- Describe Metadata: Retrieves all metadata which describes your organization.
- List Metadata: Retrieves property information about metadata components given a metadata type.
- Retrieve: Retrieve unpackaged, managed or unmanaged packages.
