### Custom Field Mapping Documentation

## Overview

The Custom Field Mapping feature of Jira Plugin allows you to map Jira fields and their values to corresponding Velocity fields. This enables seamless data synchronization between Jira and Velocity, including support for field mapping, value mapping, and complex conditional mappings.

## Configuration Structure

Custom field mappings are defined as an array of JSON objects. Each object can specify:
* **type**: The Jira issue type to which the mapping applies
* **fieldMapping**: Maps Jira field labels to Velocity field names
* **valueMapping**: Transforms values to standardized values in Velocity

## Field Mapping 

Field mapping connects Jira field labels to Velocity field identifiers, allowing data to flow from Jira into the appropriate Velocity fields.

# Basic Syntax

```
[
  {
    "type": "*",
    "fieldMapping": {
      "<velocity-field>": "<jira-field-label>"
    }
  }
]

```
# Example 1: Mapping a Custom Grooming Complete Field

```
[
  {
    "type": "*",
    "fieldMapping": {
      "extended.groomingCompleted": "Grooming Complete"
    }
  }
]

```

# Explanation:
* **type**: ***** applies this mapping to all Jira issue types (Story, Bug, Task, etc.)
* **"extended.groomingCompleted"** is the target field in Velocity
* **"Grooming Complete"** is the label of the custom field in Jira
* Whatever value exists in the "Grooming Complete" field in Jira will be copied to the **extended.groomingCompleted** field in Velocity

# Example 2: Mapping Story Points

```
[
  {
    "type": "*",
    "fieldMapping": {
      "storyPoints": "Story Points"
    }
  }
]

```
# Explanation:

* Maps the Jira "Story Points" field to Velocity's **storyPoints** field
* All story point values from Jira will be synced to Velocity

# Example 3: Multiple Field Mappings

```
[
  {
    "type": "*",
    "fieldMapping": {
      "storyPoints": "Story Points",
      "extended.groomingCompleted": "Grooming Complete",
      "extended.teamName": "Team",
      "epic": "Epic Link"
    }
  }
]

```

# Explanation:

* Multiple Jira fields can be mapped simultaneously within a single configuration object
* Each mapping follows the same pattern: Velocity field name paired with Jira field label

## Value Mapping

Value mapping normalizes or transforms field values during synchronization. This is useful for standardizing inconsistent values or mapping non-standard values to standard ones.

# Basic Syntax
```
json
[
  {
    "type": "*",
    "valueMapping": {
      "<velocity-field>": {
        "<standard-value>": ["<jira-value-1>", "<jira-value-2>"]
      }
    }
  }
]
```

# Example 1: Normalizing Story Points

```
[
  {
    "type": "*",
    "fieldMapping": {
      "storyPoints": "Story Points"
    },
    "valueMapping": {
      "storyPoints": {
        "3": [4],
        "5": [6, 7],
        "8": [9, 10]
      }
    }
  }
]

```

# Explanation:
* When a Jira issue has a story point value of **4**, it will be stored as **3** in Velocity
* When a Jira issue has story points of **6** or **7**, it will be normalized to **5** in Velocity
* Values of **9** or **10** will be mapped to **8**
* This is useful for teams using non-standard Fibonacci sequences

# Example 2: Standardizing Priority Values

```
[
  {
    "type": "*",
    "valueMapping": {
      "priority": {
        "MEDIUM": ["Moderate", "Medium", "mid-level"],
        "HIGH": ["High", "Urgent", "Immediate"],
        "LOW": ["Low", "Minor", "Trivial"]
      }
    }
  }
]

```

# Explanation:
* If a Jira issue has priority set to "Moderate", "Medium", or "mid-level", Velocity will store it as **MEDIUM**
* Any of "High", "Urgent", or "Immediate" will be normalized to **HIGH**
* "Low", "Minor", or "Trivial" values become **LOW**
* This ensures consistent priority values in velocity

## Advanced Value Mapping

Advanced value mapping supports complex conditional logic using:
* **Objects {}**: Act as AND operators (all conditions must match)
* **Arrays []**: Act as OR operators (any condition can match)
* **Regex patterns**: Match text patterns using **/<pattern>/** syntax

# Example 1: Conditional Mapping with Description Pattern

```
[
  {
    "type": "*",
    "valueMapping": {
      "priority": {
        "HIGHEST": [
          {
            "description": "/customer issue/"
          },
          "Highest"
        ]
      }
    }
  }
]

```

# Explanation:

* Priority will be set to **HIGHEST** if:
The description contains "customer issue" (case-sensitive regex match), OR
The Jira priority field is exactly "Highest"
* The regex pattern /customer issue/ will match any description containing that phrase

# Example 2: Multi-Field Conditional Mapping

```
[
  {
    "type": "*",
    "valueMapping": {
      "extended.riskLevel": {
        "HIGH": [
          {
            "priority": ["High", "Medium"],
            "Grooming Complete": ["", "No"]
          },
          {
            "description": "/blocker/"
          }
        ],
        "LOW": [
          {
            "priority": "Low",
            "Grooming Complete": "Yes"
          }
        ]
      }
    }
  }
]

```
# Explanation:

# For HIGH risk level:

* Condition 1 (Object with AND logic):
Priority must be "High" OR "Medium", AND
"Grooming Complete" must be empty ("") OR "No"

* OR Condition 2:
Description contains the word "blocker"

* If either condition is true, risk level is set to HIGH

# For LOW risk level:

* Priority must be "Low" AND
* "Grooming Complete" must be "Yes"
* Both conditions must be true simultaneously

## Type-Specific Mappings
You can create different mappings for specific Jira issue types instead of using "*" for all types.
# Example: Different Mappings by Issue Type

```
[
  {
    "type": "Story",
    "fieldMapping": {
      "storyPoints": "Story Points",
      "extended.acceptanceCriteria": "Acceptance Criteria"
    },
    "valueMapping": {
      "priority": {
        "HIGH": ["Must Have", "Critical"]
      }
    }
  },
  {
    "type": "Bug",
    "fieldMapping": {
      "extended.severity": "Severity",
      "extended.rootCause": "Root Cause"
    },
    "valueMapping": {
      "extended.severity": {
        "CRITICAL": ["Blocker", "Critical"],
        "MAJOR": ["Major", "High"],
        "MINOR": ["Minor", "Low"]
      }
    }
  }
]

```
# Explanation:
* Story-specific mappings only apply to Story issues
* Bug-specific mappings only apply to Bug issues

## Allowed Velocity Fields (For Field Mapping)

You can only map to the following Velocity fields:

**name, description, status, type, priority, severity, impact, resolution, resolved, labels, sprints, epic, changeType, businessValue, normalizedType**

* ❗ **Note**: Field mapping to **sensitive fields** like **id** or **_id** is **not allowed**. These fields are system-reserved and cannot be overridden.

# ⚠️ Handling Syntax Errors

Please ensure that your JSON configurations for **fieldMapping** and **valueMapping** are **well-formed** and **valid JSON**.
* Any syntax errors or invalid formatting in the JSON will cause the plugin to fail loading the mappings.
* For troubleshooting, **always check the plugin logs**. The logs will contain detailed error messages indicating the syntax issue.
