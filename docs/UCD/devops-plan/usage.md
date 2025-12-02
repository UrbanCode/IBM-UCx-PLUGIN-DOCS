# DevOps Plan Plugin - Usage

The DevOps Plan Plugin allows you to automate the creation and management of plan items (such as work items, sprints, and releases) in DevOps Plan directly from Devops Deploy process steps.

## Step Palette

To access this plugin in the palette, click **Issue Tracking** > **DevOps Plan Plugin**.

## Prerequisites

- Ensure you have a valid API Token for your DevOps Plan server.
- Obtain the Teamspace ID and Application Name from your DevOps Plan instance.

## Configuration

When adding a DevOps Plan step to your process, configure the following properties:

| Name                     | Required | Description                                                                            |
|--------------------------|----------|----------------------------------------------------------------------------------------|
| Plan Base Url            | Yes      | The base URL for your DevOps Plan server (e.g., `https://<plan-server-url>`).          |
| API Token                | Yes      | API Token for authenticating with the DevOps Plan server.                              |
| Teamspace Id             | Yes      | The Teamspace ID from your DevOps Plan instance.                                       |
| Application Name         | Yes      | The name of the application in DevOps Plan.                                            |
| Record Type Name         | Yes      | The type of record to create (e.g., `WorkItem`, `Sprint`, `Release`).                  |
| Title / Name / Label     | Yes      | The unique name, title, or label for the new record.                                   |
| Start Date               | No       | (Required for Sprint/Release) Start date in `YYYY-MM-DD` format.                       |
| End Date                 | No       | (Required for Sprint/Release) End date in `YYYY-MM-DD` format.                         |
| Additional Fields (JSON) | No       | Additional fields as a JSON object (e.g., `{"WIType": "Defect", "Severity": "High"}`). |

## Example: Creating a Work Item

1. Add the **Create Plan Item** step to your process.
2. Fill in the required fields, such as **Plan Base Url**, **API Token**, **Teamspace Id**, **Application Name**, **Record Type Name** (e.g., `WorkItem`), and **Title / Name / Label**.
3. Optionally, provide additional fields in JSON format to set custom attributes.

## Additional Fields (JSON) Examples

You can use the **Additional Fields (JSON)** property to specify extra or custom attributes for your plan items.
When specifying additional fields for
**Create**  operations, provide a flat JSON object with initial field names and values and for 
**Update** operations, provide a flat JSON object with updated field names and values.

**Create Example:**
```json
{
  "CustomField1": "Value1",
  "CustomField2": "Value2",
  "Priority": "High"
}
```
**Update Example:**
```json
{
  "CustomField1": "Value1",
  "CustomField2": "UpdatedValue",
  "Priority": "High"
}
  ```

## Troubleshooting

- Ensure all required fields are filled.
- Check API Token validity and permissions.
- Review plugin logs for error messages.

## More Information

For detailed step configuration, see the [Steps Reference](./steps.md).
