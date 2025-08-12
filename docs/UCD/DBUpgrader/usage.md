
# IBM DevOps DBUpgrader - Usage


The DBUpgrader plug-in helps you manage database changes that include schema changes and rollbacks. Change management is done using a proprietary, formatted XML file in conjunction with a database version table.

* The XML file is used to associate changes with versions
* The Database Version table tracks the changes that have been applied

Follow the below documentation to learn about the DBUpgrader plug-in.

* [Before you begin](#before)
* [Upgrading a database](#step1)
* [Returning a database to a previous version](#step2)
* [Working with multiple releases](#multrel)
* [Tutorials](#education)


## **Before you begin**

You must create a database version table on every target database either manually before you run the DBUpgrader plug-in steps for the first time or as part of the first change.

The XML file contains the SQL code that is required to produce a different database version.

For details about the version table and XML file, see [Database Version table and XML file](#release-table-database-xml-file).


## **Upgrading a database**

You can make database changes in an incremental manner by using an XML file. The plug-in steps read the XML file and apply the defined changes.

The upgrade process is as follows:

1. Find the XML file, and read the release value that is defined in the root element.
2. Use the `Current Version SQL` query to find the current version of the provided release.
3. Compare the current version against the latest version as defined in the SQL.If the latest version is newer than the current version, then continue to the next step.
4. Apply the change directly after the current versions change.
5. After the change in step 4 is complete, go into the database and update the releases current version.
6. Repeat steps 35 until all changes are applied.


## **Returning a database to a previous version**

The DB Rollback step reverts the database to a specified version. This step has the same parameters as the Upgrade DB step. However, the version to return the database is specified.

The rollback process follows:

1. Read the **release** field that is defined in the root element from the XML file.
2. Use the `Current Version SQL` query to find the current version of the provided **release** value.
3. Compare the current version against the target version. If the current version is newer than the target version, then continue to the next step.
4. Locate the  element in the current version (if the element exists), and apply the changes that the element defines.
5. After the change is complete, go into the database and update the release version value to be the previous version value.
6. Repeat steps 3-5 until the target version is reached.

If an error occurs while you are applying a change, the <rollback> element is not used and the process fails. The state of the database after failure might vary depending on the type of database that you are using. It is possible for the database to be left in a half-applied state. Proceed by either restoring the database to a backed-up version; or by applying the rest of the version manually.


## **Working with multiple releases**

The DBUpgrader steps support tracking database changes over multiple releases. Each release will have its own row in the Database Version table, and its own upgrade XML file. Using multiple release XML files can help you keep your database changes organized and easy to maintain.For example, Product x has two code streams one for version 1 and another for version 2. Version 2 is currently in development along with an update with fixes for version 1. Version 2 includes changes to the database, such as new tables and columns. Two XML files are being maintained:

* A file called upgrade\_1.0.xml, which contains Version 1 database features
* A file called upgrade\_2.0.xml, which contains the Version 1 database features and the new feature for Version 2.

When DB Upgrader runs on Product x Version 1, it uses only the `upgrade_1.0.xml` file. Only the updates to the Version 1 code stream are applied.

When DB Upgrader runs on Product Version 2, it uses both XML files. Because each release refers to a different row in the Database Version table, they are both applied separately. Both Version 1 updates and Version 2 features are included.


## **Tutorials**

The Deploying a simple web application tutorial in the DevOps Deploy documentation uses the DBUpgrader plug-in [Lesson 2: Creating component processes](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=tutorials-deploying-simple-web-application). Go to the section that is labeled Creating a component process for the database component within the lesson.


## Database Version table and XML file




## **Database Version table**

The Database Version table must have at least two columns.

* One column to hold the release name which is constant
* Another column to hold the version. The version is an integer value, which changes during a projects life.

`RELEASE\_NAME: The name of the release, for example, 3.0. VERSION: The version of the current database, according to the corresponding release. Specify that the type of this column supports integers.`

Table name, column names, and types are relatively flexible, because you provide SQL statements to interact with this table.

## **XML file**

The XML file is typically created by a developer or database administrator who is responsible for maintaining the database-writing upgrades for the product.The XML filecontains the SQL information that is required to achieve a version. The XML file content evolves as the corresponding product evolves.New XML files are required when you create a new release path.

The location of the XML file is specified in **SQL File path** and **SQL File include** parameters as part of the step input fields.

The user provides the XML file name and the names of the Database Version table and its internal columns. Names are limited by the naming restrictions of the file system and database.

The XML file contains statements that use elements in the following table. The following lines are a snippet of code from an XML file. The snippet shows the first set of statements that are defining the table.  `<change-set release="3.0"> <change number="1"> <description> Create Version Table. </description> <sql separator=";"> CREATE TABLE DB_VERSION ( RELEASE_NAMEVARCHAR(255) BINARY NOT NULL, VER NUMERIC DEFAULT 0 NOT NULL ); </sql> </change>`

The following table lists the elements and attributes that are used in the XML file to define the table and its content.


| Element | Description | Attributes | Attribute description |
| --- | --- | --- | --- |
| <change-set> | The root element. | release | Provide the name of the release that this upgrade XML file corresponds to. This name is the same name as the one given in the Database Version table. |
| <library> | A child of the <change-set> element that defines dependencies that also use DB Upgrader. With this element and the <changeref> element, you can define which version to use for a dependency database. | name | Required. The element is a unique name to refer to the library by. |
|  |  | release | Corresponds to the librarys release attribute in the <change-set> element. |
|  |  | base-dir | The root directory that holds the librarys DB Upgrader files. |
|  |  | file | The root directory that holds the librarys DB Upgrader files. |
|  |  | base-dir | The root directory that holds the librarys DB Upgrader files. |
|  |  | file | The path to the librarys upgrade XML file. |
|  |  | version table | The name of the libarys Database Version table. |
|  |  | release-column | The name of the column that holds the name of the change-set release, for example, RELEASE\_NAME. |
|  |  | version-column | The name of the column that holds the current version, for example, VERSION. |
| <change> | A child of the <change-set> element that defines each separate version. | number | Provide the database version number that this change defines. Make sure that each subsequent <change> element increases this value by 1. When this change is applied, the Database Version table is updated so that the corresponding release is marked as having this version. |
| <description> | A child of the <change> element. Information that describes the purpose of this change. The information is printed out when the change is applied. |  |  |
| <sql> | A child of the <change> element or <rollback> element. The element contains the SQL statements that are required to apply the change. | separator | Optional. The default value is two semicolons (;;). This element defines how to separate each SQL statement. For example, if the separator is ;;, then each SQL statement must end with ;;.

Within the <SQL> tags are the SQL statements that are required to apply the change to the database. Each SQL statement must be separated by the separator that is defined in the separator attribute.The SQL statements can be defined in a separate file, which is identified by using the file attribute.
|
|  |  | file | Optional. The path to a file that contains the SQL statement to run for this change. |
| <groovy> | A child of the <change> or <rollback> element. This element calls a groovy script to complete changes. The groovy script contains special objects that enable it to communicate with the database.  | file | Name of the groovy file to run. |
| <changeref> | A child of the <change> element. Indicates when the DBUpgrader is to run a dependency library upgrade. | library | Required. The name attribute of the corresponding <library> element. |
|  |  | change | Required. The number attribute of the<change> element from the  element. |
| <rollback> | A child of the <change> element. This statement is used to contain the SQL statements that are used to return the database to a previous version. For example, if the change defines an <sql> element that contains a CREATE TABLE FOO statement, then the rollback element might contain an <sql> element with a DROP TABLE FOO statement. |  |  |


**Notes:**

* Changes can hold multiple elements. For example, a single <change> element might hold an <sql> element, a <groovy> element, and another <sql> element. These elements contain the SQL statements that are required to conduct a single version upgrade.
* The number attribute on the <change> element is used to control the processing order of the <change> elements. Changes are executed in a sequential order, as determined by the number attribute. For example, the number attribute runs change 1, then changes 2, 3, 4, and so on.

Each SQL statement inside a <change> element is run in the order it is provided, as any other SQL script.

|Back to ...||Latest Version|IBM DevOps DBUpgrader ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[5.1151802](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DBUpgrader/ucd-DBUpgrader-5.1151802.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
