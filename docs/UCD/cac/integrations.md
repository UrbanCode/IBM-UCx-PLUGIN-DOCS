# Integrations

## Steps to Integrate CAC(using paac-0.1.0.1171817-beta) with DevOps Deploy using Jenkins

### Problem Statement:
Need to update an existing process stored in GitHub in JSON/YAML format to DevOps Deploy. The process can be of any type: **Generic**, **Component**, or **Application**.

### Illustration of an Integration Architecture
![Image 0](media/Step0.png)

### Prerequisites:
- A up and running Jenkins instance.
- The CAC CLI should be present on the machine where the Jenkins server is installed.
- Permissions to update the process being worked on.

### Configurations Needed in Jenkins:

1. **Create a New Freestyle Project**  
   In Jenkins, create a new Freestyle project. Name it something like "Import-process-from-git".

2. **Configure the Source Code Management Section**  
   Add the Git credentials where the processes are stored.  
   ![Image 1](media/Step2.png)

3. **Configure the Build Triggers Section**  
   Check the "Poll SCM" checkbox.  
   In the "Schedule" text box, provide `* * * * *` to poll for changes every minute from the Git repo.  
   ![Image 2](media/Step3.png)

4. **Configure the Build Steps Section**  
   Add an "Execute Shell" option.  
   In the "Execute Shell" command box, change the current working directory to the directory where the CAC CLI is present.  
   Then execute the command (refer to the **List of All Commands** section) according to the type of process you're working with.  
   ![Image 3](media/Step4.png)

5. **Make Changes to Your JSON File**  
   Use any IDE to make changes to the JSON file and push the changes to GIT.

6. **Jenkins Polling and Job Trigger**  
   Once changes are merged to the main or master branch (depending on your setup in step 2), Jenkins will poll the repository and trigger a job.  
   This will result in updating the process in DevOps Deploy.

---
