
# SQL-JDBC - Usage

The SQL-JDBC plug-in is a database-independent plug-in. Use the **Execute SQL Scripts** or **Execute SQL Scripts with PassTicket Authenitcation** step to connect to a database and run SQL scripts by using a JDBC driver. You can specify that the SQL scripts run in a specific order or in any order.


## **Step palette**

To access this plug-in in the palette, click **Database** > **SQL JDBC**.

## **Use Passticket Authentication with DB2 for zOS**

When used with DB2 for zOS, Execute SQL Script step supports two authentication methods, password and passticket.

### **Authenticating with a Password or Password Script**

To use Password, use the Execute SQL Scripts step. Fill in the User and either the Password or Password Script field.

### **Authenticating with a PassTicket**

To use Passticket, use the Execute SQL Scripts with PassTicket Authentication step. Fill in the fields: User, PassTicket Application ID, IRRRacf.jar File and IRRRacf Native Library Path.

Passticket authentication eliminates the need to store password and send passwords across the network. Make the following system configurations to allow PassTickets:

### **RACF Setup for PassTicket Generation and Authentication**

1. Activate the RACF PTKTDATA class if its not already active. Sample RACF commands: ``SETROPTS GENERIC(PTKTDATA) SETROPTS CLASSACT(PTKTDATA) RACLIST(PTKTDATA)``
2. Define a PTKTDATA profile for a DB2 system. PassTickets are generated and evaluated using a secret key. A PTKTDATA profile defines the secret key and the application ID that it applies to. The application ID for a DB2 system can be found in the LINKNAME column in the SYSIBM.LOCATIONS table. See the Sending RACF PassTickets topic in DB2 for zOS Knowledge Center to learn more. The key is a 64-bit number (16 hex characters). Replace the key16 placeholder with a user-supplied 16 character hex string (characters 0-9 and A-F) in the following sample RACF commands. Sample RACF commands for DB2 system DB2A: `RDEFINE PTKTDATA FEKAPPL UACC(NONE) SSIGNON(KEYMASKED(key16)) APPLDATA('NO REPLAY PROTECTIONDO NOT CHANGE') DATA('DevOps DEPLOY')`
The following example shows the command with the key16 value replaced:

`RDEFINE PTKTDATA FEKAPPL UACC(NONE) - DATA('DevOps DEPLOY') - APPLDATA('NO REPLAY PROTECTION - DO NOT CHANGE') - SSIGNON(KEYMASKED(0123456789ABCDEF))`

**Notes:**

1. If the PTKTDATA class is already defined, verify that it is defined as a generic class before creating the profiles listed previously. The support for generic characters in the PTKTDATA class is new since z/OS release 1.7, with the introduction of a Java interface to PassTickets.
2. If the system has a cryptographic product installed and available, you can encrypt the secured signon application key for added protection. Use the KEYENCRYPTED keyword instead of KEYMASKED. Refer to Security Server RACF Security Administrators Guide, (SA22-7683), for more information.
3. If the system already has Rational Developer for System z or Rational Team Concert server components installed, the PTKTDATA profile may have been defined already.
3. Define a PTKTDATA profile to control the ability to generate a PassTicket. Define the IRRPTAUTH profile in the PTKTDATA class to controls what userids a PassTicket may be generated for.

| Operation           | Profile name                          | Required access |
|---------------------|---------------------------------------|-----------------|
| Generate PassTicket | `IRRPTAUTH.application.target-userid` | Update          |

Sample RACF commands: `RDEFINE PTKTDATA IRRPTAUTH.FEKAPPL.USER1 UACC(NONE)`
4. Permit DevOps Deploy Agent to generate a PassTicket. In order for the DevOps Deploy Agent to generate a PassTicket, the userid of the agent must be permitted UPDATE access in the PTKTDATA profile that we created in the previous step. Sample RACF commands: `PERMIT IRRPTAUTH.FEKAPPL.USER1 CLASS(PTKTDATA) ID(AGNTUSR) ACCESS(UPDATE)`
Refresh the PTKTDATA class for the new profiles and permissions to take effect. `SETROPTS RACLIST (PTKTDATA) REFRESH`

**RACF Setup Examples**

Example 1. Agent is started by user AGNTUSR. In a deploy process, a Job needs to be submitted on behalf of user USER1.

`RDEFINE PTKTDATA IRRPTAUTH.FEKAPPL.USER1 UACC(NONE) PERMIT IRRPTAUTH.FEKAPPL.USER1 CLASS(PTKTDATA) ID(AGNTUSR) ACCESS(UPDATE) SETROPTS RACLIST (PTKTDATA) REFRESH`

Example 2. Agent is started by user AGNTUSR. Allow this agent to submit jobs on behalf of any user.

`RDEFINE PTKTDATA IRRPTAUTH.FEKAPPL.* UACC(NONE) PERMIT IRRPTAUTH.FEKAPPL.* CLASS(PTKTDATA) ID(AGNTUSR) ACCESS(UPDATE) SETROPTS RACLIST (PTKTDATA) REFRESH`

Example 3. Agent is started by user AGNTUSR. Allow this agent to submit job on behalf of user AGNTUSR:

`RDEFINE PTKTDATA IRRPTAUTH.FEKAPPL.AGNTUSR UACC(NONE) PERMIT IRRPTAUTH.FEKAPPL.AGNTUSR CLASS(PTKTDATA) ID(AGNTUSR) ACCESS(UPDATE) SETROPTS RACLIST (PTKTDATA) REFRESH`


|          Back to ...          |                                |                                                    Latest Version                                                     |      SQL-JDBC       |||||
|:-----------------------------:|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [13.1154072](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQLJDBC/ucd-SQL-JDBC-13.1154072.zip) | [Readme](README.md) |[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Steps](steps.md)|[Downloads](downloads.md)|
