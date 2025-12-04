# DevOps Plan – Usage Guide

The DevOps Plan Plugin allows you to automate the creation and management of plan items (such as Work Items, Sprints, Releases) in DevOps Plan directly from DevOps Deploy process steps.

## Step Palette:
Issue Tracking → DevOps Plan Plugin

## Prerequisites:
- Ensure you have a valid API Token for your DevOps Plan server.
- Obtain the Teamspace ID and Application Name from your DevOps Plan instance.
- Ensure you have permissions to create/update/delete records in DevOps Plan.

## Configuration Properties:

| Name                       | Required | Description                                                                |
|----------------------------|----------|----------------------------------------------------------------------------|
| Plan Base Url              | Yes      | Base URL for your DevOps Plan server (e.g., https://<plan-server-url>)     |
| API Token                  | Yes      | API Token for authentication                                               |
| Trust All SSL Certificates | Yes      | If checked,trust all SSL certificates.                                     |
| Teamspace Id               | Yes      | Teamspace ID from your DevOps Plan instance                                |
| Application Name           | Yes      | Name of the application in DevOps Plan                                     |
| Record Type Name           | Yes      | Type of record to create/update (WorkItem, Sprint, Release, Project, etc.) |
| Additional Fields (JSON)   | No       | Additional fields as a JSON object for custom or Mandatory attributes      |

### Example: Creating a Work Item
1. Add the Create Plan Item step to your process.
2. Fill in required fields: Plan Base Url, API Token, Teamspace Id, Application Name, Record Type Name (e.g., WorkItem).
3. Provide additional fields in JSON format to set mandatory Fields or custom attributes.

## Additional Fields (JSON)

The **Additional Fields (JSON)** property allows users to provide **mandatory record-specific fields** and **optional custom fields**.

---

### Part 1 – Mandatory Fields

These fields must be provided to successfully create the record.

**Sprint (`Sprint`)**

```json
{
  "Name": "Name or Title of the Record",
  "StartDate" : "YYYY-MM-DD.",
  "EndDate" : "YYYY-MM-DD."
}
```

**Work Item (`WorkItem`)**

```json
{
  "Title": "Title of the Record",  
  "Project": "Name of the Project" ,
  "WIType" : "Defect"
}
```

**Project (`Project`)**

```json
{
  "Name ": "Name or Title of the Record"
}
```

**Release (`Release`)**

```json
{
  "Name ": "Name or Title of the Record"
}
```

### Part 2 – Optional / Additional Fields

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


## Troubleshooting:
- Ensure all required fields are filled.
- Check API Token validity and permissions.
- Review plugin logs for error messages.

## More Information:
For detailed step configuration, see the [Steps Reference](./steps.md).
