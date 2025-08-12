
# F5 BIG-IP - Troubleshooting


**Tip:** For more questions and answers, see the [DevOps forum on IBM developerWorks](https://community.ibm.com/community/user/wasdevops/urbancode-discussion "DevOps forum").

## Truststore file does not exist

When running plug-in steps on the Windows operating system, the step can fail and generate a stack trace similar to the following text:

java.net.SocketException: java.security.NoSuchAlgorithmException: Error constructing implementation (algorithm: Default, provider: IBMJSSE2, class: com.ibm.jsse2.ec) ... java.lang.Exception: Truststore file does not exist: C:\Windows\system32\config\systemprofile\.keystore

This can occur because F5 BIG-IP hardcodes the location of the .keystore file to the home directory of the local system. If you run the agent as a Windows Service, the Truststore file does not exist message can be displayed when you run a plug-in step. To work around this behavior, create a .keystore file in the home directory of the local system (the agent computer).

1. On the agent computer, open a command prompt.
2. Navigate to the following directory: C:\Windows\System32\config\systemprofile
3. Run the following command: keytool -genkey -keystore .keystore
4. Complete the steps in the keystore generation wizard.
5. Confirm that a .keystore file exists in the following directory: C:\Windows\System32\config\systemprofile

You can now run the F5 BIG-IP step to completion.

