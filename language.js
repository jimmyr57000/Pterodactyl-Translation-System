export default {
    translation: {
      Login: {
        Title: "Login to continue",
        Username_or_Email: "Username or Email",
        Password: "Password",
        Login_Button: "Login",
        Forgot_Password: "Forgot password?",
        Username_or_Email_Desc: "A username or email must be provided.",
        Account_Password_Desc: "Please enter your account password.",
        Account_Incorrect: "No account matching those credentials could be found.",
        Many_Attempts: "There were too many login attempts. Please try again later.",
        Recaptcha_Error: "Failed to validate reCAPTCHA data.",
        Request_Failed: "Request failed with status code 404",
        CSRF_Token: "CSRF token mismatch."
      },
      Reset_Password: {
        Password_Reset: "Request Password Reset",
        Email: "Email",
        New_Password_Required: "A new password is required.",
        Password_Characters_Min: "Your new password should be at least 8 characters in length.",
        Password_Not_Match: "Your new password does not match.",
        Account_Email: "Enter your account email address to receive instructions on resetting your password.",
        Valid_Email: "A valid email address must be provided to continue.",
        Send_Email: "Send Email",
        Return_to_Login: "Return to login",
        Reset_Password: "Reset Password",
        New_Password: "New Password",
        New_Password_Desc: "Passwords must be at least 8 characters in length.",
        Confirm_New_Password: "Confirm New Password",
        Send_Email_Link: "We have e-mailed your password reset link!"
      },
      Two_Factor_Auth: {
        Device_Checkpoint: "Device Checkpoint",
        Recovery_Code: "Recovery Code",
        Authentication_Code: "Authentication Code",
        Enter_Two_Factor_Desc_1: "Enter the two-factor token generated by your device.",
        Enter_Two_Factor_Desc_2: "Enter one of the recovery codes generated when you setup 2-Factor authentication on this account in order to continue.",
        Lost_Device: "I've Lost My Device",
        Have_Device: "I Have My Device",
        Continue: "Continue"
      },
      Account_Overview: {
        Two_Factor_Activate_Desc_1: "You must provide an authentication code to continue.",
        Two_Factor_Activate_Desc_2: "Two-factor authentication is currently enabled on your account.",
        Two_Factor_Activate_Desc_3: "Authenticator code must be 6 digits.",
        Two_Factor_Active_Title: "Two-factor authentication enabled",
        Two_Factor_Active_Desc_1: "Two-factor authentication has been enabled on your account. Should you lose access to your authenticator device, you'll need to use one of the codes displayed below in order to access your account.",
        Two_Factor_Active_Desc_2: "These codes will not be displayed again. ",
        Two_Factor_Active_Desc_3: "Please take note of them now by storing them in a secure repository such as a password manager.",
        Two_Factor_Active_Button: "Close",
        Two_Factor_Disabled_Desc: "You do not currently have two-factor authentication enabled on your account. Click the button below to begin configuring it.",
        Two_Factor_Disable_Desc_1: "You must provide your current password in order to continue.",
        Two_Factor_Disable_Desc_2: "In order to disable two-factor authentication you will need to provide your account password.",
        Two_Factor_Disable_Title: "Current Password",
        Two_Factor_Disable_Button: "Disable Two-Factor",
        Two_Factor_Setup_Desc_1: "Enter the code from your authenticator device after scanning the QR image.",
        Two_Factor_Setup_Desc_2: "Alternatively, enter the following token into your authenticator application:",
        Two_Factor_Setup_Button: "Setup",
        Two_Factor_Incorrect_Password: "The password provided was not valid.",
        Button_Disable: "Disable",
        Button_Enable: "Enable",
        Create_Api_Desc_Title: "Description",
        Create_Api_Desc: "A description of this API key.",
        Create_Api_Ips_Title: "Allowed IPs",
        Create_Api_Ips_Desc: "Leave blank to allow any IP address to use this API key, otherwise provide each IP address on a new line.",
        Create_Api_Button: "Create",
        Update_Email_Desc_1: "You must provide your current account password.",
        Update_Email_Required: "Email is a required field",
        Update_Email_Success_Title: "Success",
        Update_Email_Success: "Your primary email has been updated.",
        Update_Email_Error_Title: "Error",
        Update_Email_Button: "Update Email",
        Update_Password_Title: "New Password",
        Update_Password_Desc_1: "You must provide your current password.",
        Update_Password_Desc_2: "Password confirmation does not match the password you entered.",
        Update_Password_Desc_3: "Your new password should be at least 8 characters in length and unique to this website.",
        Update_Password_Required: "Password is a required field",
        Update_Password_Button: "Update Password",
        Update_Password_Error: "The password provided was invalid for this account.",
        Update_Password_Min: "The password must be at least 8 characters",
        Confirm_Password: "Confirm Password",
        Account_Page_Title: "Account Overview",
        Account_Two_Factor_Required_Title: "2-Factor Required",
        Account_Two_Factor_Required_Desc: "Your account must have two-factor authentication enabled in order to continue.",
        Account_Update_Email_Title: "Update Email Address",
        Account_Setup_Two_Factor_Title: "Configure Two Factor",
        Api_Page_Title: "Account API",
        Api_Create_Title: "Create API Key",
        Api_List_Title: "API Keys",
        Api_List_Loading: "Loading...",
        Api_List_Empty: "No API keys exist for this account.",
        Api_List_Used_1: "Last used: ",
        Api_List_Used_2: "Never",
        Api_Delete_Title: "Confirm key deletion",
        Api_Delete_Button: "Yes, delete key",
        Api_Delete_Desc: "Are you sure you wish to delete this API key? All requests using it will immediately be invalidated and will fail.",
        Api_Setup_Title: "Your API Key",
        Api_Setup_Desc: "The API key you have requested is shown below. Please store this in a safe location, it will not be shown again.",
        Api_Min_Characters: "Description must be at least 4 characters",
        Api_Setup_Button: "Close",
        Api_Ip_Incorrect_1: "IP address 1 must be a valid IP address.",
        Api_Ip_Incorrect_2: "IP address 2 must be a valid IP address.",
        Api_Ip_Incorrect_3: "IP address 3 must be a valid IP address."
      },
      Search: {
        Search_Title: "Search term",
        Search_Desc_1: "Please enter at least three characters to begin searching.",
        Search_Desc_2: "Enter a server name, uuid, or allocation to begin searching."
      },
      Dashboard: {
        Dash_Page_Title: "Dashboard",
        Dash_Show_Server_1: "Showing others' servers",
        Dash_Show_Server_2: "Showing your servers",
        Dash_Show_Server_3: "There are no other servers to display.",
        Dash_Show_Server_4: "There are no servers associated with your account."
      },
      Server_Row: {
        Server_Unlimited: "Unlimited",
        Server_Suspended: "Suspended",
        Server_Connect_Error: "Connection Error",
        Server_Transferring: "Transferring",
        Server_Installing: "Installing",
        Server_Restoring_Backup: "Restoring Backup",
        Server_Unavailable: "Unavailable",
        Server_Of: "of"
      },
      Elements: {
        Elements_Cancel_Button: "Cancel",
        Elements_Copy_Text: "Copied to clipboard.",
        Elements_Error: "An error was encountered by the application while rendering this view. Try refreshing the page."
      },
      Server: {
        Server_Page_Title: "Console",
        Server_Transfer_Console: "Transfer has failed.",
        Server_Archived_Console: "Server has been archived successfully, attempting connection to target node..",
        Server_Send_Command: "Type a command...",
        Server_State_Console: "Server marked as ",
        Server_State_Starting: "starting",
        Server_State_Offline: "offline",
        Server_State_Stopping: "stopping",
        Server_State_Running: "running",
        Server_State_Connect: "Connecting...",
        Server_State_Install: "This server is currently running its installation process and most actions are unavailable.",
        Server_State_Transfer: "This server is currently being transferred to another node and all actions are unavailable.",
        Server_Button_Start: "Start",
        Server_Button_Restart: "Restart",
        Server_Button_Kill: "Kill",
        Server_Button_Stop: "Stop",
        Server_Memory_Graph_Title: "Memory usage",
        Server_Cpu_Graph_Title: "CPU usage",
        Server_Graph_Desc: "Server is offline.",
        Server_Websocket_Error: "There was an error validating the credentials provided for the websocket. Please refresh the page.",
        Server_Connect_Server: "We're having some trouble connecting to your server, please wait..."
      },
      Server_Backup: {
        Backup_Page_Title: "Backups",
        Backup_Empty_1: "Looks like we've run out of backups to show you, try going back a page.",
        Backup_Empty_2: "It looks like there are no backups currently stored for this server.",
        Backup_Forbidden: "Backups cannot be created for this server because the backup limit is set to 0.",
        Backup_Information: "backups have been created for this server.",
        Backup_Create_Title_1: "Create server backup",
        Backup_Create_Title_2: "Backup name",
        Backup_Create_Title_3: "Ignored Files & Directories",
        Backup_Create_Title_4: "Locked",
        Backup_Create_Desc_1: "If provided, the name that should be used to reference this backup.",
        Backup_Create_Desc_2: "Enter the files or folders to ignore while generating this backup. Leave blank to use the contents of the .pteroignore file in the root of the server directory if present. Wildcard matching of files and folders is supported in addition to negating a rule by prefixing the path with an exclamation point.",
        Backup_Create_Desc_3: "Prevents this backup from being deleted until explicitly unlocked.",
        Backup_Create_Start_Button: "Start backup",
        Backup_Create_Button: "Create backup",
        Backup_Created_Title: "Unlock this backup?",
        Backup_Created_Desc_1: "Are you sure you want to unlock this backup? It will no longer be protected from automated or accidental deletions.",
        Backup_Created_Button: "Yes, unlock",
        Backup_Restore_Title: "Restore this backup?",
        Backup_Restore_Desc_1: "This server will be stopped in order to restore the backup. Once the backup has started you will not be able to control the server power state, access the file manager, or create additional backups until it has completed.",
        Backup_Restore_Desc_2: "Are you sure you want to continue?",
        Backup_Restore_Desc_3: "Remove all files and folders before restoring this backup.",
        Backup_Restore_Button: "Restore backup",
        Backup_Delete_Title: "Delete this backup?",
        Backup_Delete_Desc_1: "Are you sure you wish to delete this backup? This is a permanent operation and the backup cannot be recovered once deleted.",
        Backup_Delete_Button: "Yes, delete backup",
        Backup_SubMenu_Download: "Download",
        Backup_SubMenu_Restore: "Restore",
        Backup_SubMenu_Unlock: "Unlock",
        Backup_SubMenu_Lock: "Lock",
        Backup_SubMenu_Delete: "Delete"
      },
      Server_Databases: {
        Database_Page_Title: "Databases",
        Database_Show_Empty: "It looks like you have no databases.",
        Database_Show_Forbidden: "Databases cannot be created for this server.",
        Database_Limit_Desc: "databases have been allocated to this server.",
        Database_Create_Title_1: "Create new database",
        Database_Create_Title_2: "Database Name",
        Database_Create_Title_3: "Connections From",
        Database_Create_Desc_1: "A descriptive name for your database instance.",
        Database_Create_Desc_2: "Where connections should be allowed from. Use % for wildcards.",
        Database_Create_Button_1: "Create Database",
        Database_Create_Button_2: "New Database",
        Database_Create_Error_1: "An unexpected error was encountered while processing this request, please try again.",
        Database_Create_Error_2: "A database name must be provided.",
        Database_Create_Error_3: "Database name must be at least 3 characters.",
        Database_Create_Error_4: "Database name must not exceed 48 characters.",
        Database_Create_Error_5: "Database name should only contain alphanumeric characters, underscores, dashes, and/or periods.",
        Database_Create_Error_6: "A connection value must be provided.",
        Database_Create_Error_7: "A valid connection address must be provided.",
        Database_Delete_Title_1: "Confirm database deletion",
        Database_Delete_Title_2: "Confirm Database Name",
        Database_Delete_Title_3: "Database connection details",
        Database_Delete_Title_4: "Endpoint",
        Database_Delete_Title_5: "Connections from",
        Database_Delete_Title_6: "Username",
        Database_Delete_Title_7: "Password",
        Database_Delete_Title_8: "JDBC Connection String",
        Database_Rotate_Button: "Rotate Password",
        Database_Delete_Desc_1: `Deleting a database is a permanent action, it cannot be undone. This will permanetly delete the "{{database}}" database and remove all associated data.`,
        Database_Create_Desc_2: "Enter the database name to confirm deletion.",
        Database_Delete_Button: "Delete Database",
        Database_Delete_Error_1: "The database name must be provided.",
        Database_Delete_Error_2: "No database host was found that meets the requirements for this server."
      },
      Server_Files: {
        Files_Page_Title: "File Manager",
        Files_Create_Button: "New File",
        Files_Directory_Empty: "This directory seems to be empty.",
        Files_Show_Files_Max: "This directory is too large to display in the browser, limiting the output to the first 250 files.",
        Files_Chmod_Title: "File Mode",
        Files_Chmod_Button: "Update",
        Files_Delete_File_Or_Directory_Title: "Delete this",
        Files_Delete_File_Or_Directory_Button: "Yes, Delete",
        Files_Delete_File_Or_Directory_Desc: "Deleting files is a permanent operation, you cannot undo this action.",
        Files_Delete_File: "File",
        Files_Delete_Directory: "Directory",
        Files_Delete_Title: "Delete these files?",
        Files_Delete_Desc_1: "Are you sure you want to delete {{selected}} file(s)?",
        Files_Delete_Desc_2: "Deleting the file(s) listed below is a permanent operation, you cannot undo this action.",
        Files_Delete_Desc_3: "other(s)",
        Files_Delete_Button: "Yes, Delete Files",
        Files_SubMenu_Rename: "Rename",
        Files_SubMenu_Move: "Move",
        Files_SubMenu_Permissions: "Permissions",
        Files_SubMenu_Copy: "Copy",
        Files_SubMenu_Archive: "Archive",
        Files_SubMenu_Unarchive: "Unarchive",
        Files_SubMenu_Download: "Download",
        Files_SubMenu_Delete: "Delete",
        Files_Edit_Ptero_Ignore_1: "You're editing a",
        Files_Edit_Ptero_Ignore_2: "file. Any files or directories listed in here will be excluded from backups. Wildcards are supported by using an asterisk",
        Files_Edit_Ptero_Ignore_3: "You can negate a prior rule by prepending an exclamation point",
        Files_Edit_Save_Button: "Save Content",
        Files_Create_Title: "File Name",
        Files_Create_Desc: "Enter the name that this file should be saved as.",
        Files_Create_Error: "FileName is a required field",
        Files_Create_Button: "Create File",
        Files_Date_Format: "MMM do, yyyy h:mma",
        Files_Message_Archiving: "Archiving files...",
        Files_Message_Deleting: "Deleting files...",
        Files_Create_Directory_Title: "Directory Name",
        Files_Create_Directory_Desc_1: "A valid directory name must be provided.",
        Files_Create_Directory_Desc_2: "This directory will be created as",
        Files_Create_Directory_Button: "Create Directory",
        Files_Move_Desc_1: "Enter the new name and directory of this file or folder, relative to the current directory.",
        Files_Move_Desc_2: "New location:",
        Files_Drag_Desc: "Drag and drop files to upload.",
        Files_Drag_Button: "Upload",
        Files_Error_1: "A name for the file is required.",
        Files_Error_2: "An error occurred on the remote host: Cannot move or rename file, destination already exists.."
      },
      Server_Users: {
        User_Page_Title: "Users",
        User_Sub_Users_Empty: "It looks like you don't have any subusers.",
        User_Create_Title_1: "Create new subuser",
        User_Create_Title_2: "User Email",
        User_Create_Sub_User_Desc_1: "Enter the email address of the user you wish to invite as a subuser for this server.",
        User_Create_Sub_User_Desc_2: "Email addresses must not exceed 191 characters.",
        User_Create_Sub_User_Desc_3: "A valid email address must be provided.",
        User_Modify_Or_View_Email_Title: "permissions for {{subuser}}",
        User_Modify_Title: "Modify",
        User_View_Title: "View",
        User_Modify_Button: "Save",
        User_Create_Button_1: "Invite User",
        User_Create_Button_2: "New User",
        User_Create_Sub_User_Desc: "Only permissions which your account is currently assigned may be selected when creating or modifying other users.",
        User_Delete_Title: "Delete this subuser?",
        User_Delete_Desc_1: "Are you sure you wish to remove this subuser? They will have all access to this server revoked immediately.",
        User_Delete_Button: "Yes, remove subuser",
        User_Show_2FA: "2FA Enabled",
        User_Show_Permissions: "Permissions",
        User_Create_Sub_Title_1: "Control",
        User_Create_Sub_Title_2: "User",
        User_Create_Sub_Title_3: "File",
        User_Create_Sub_Title_4: "Backup",
        User_Create_Sub_Title_5: "Allocation",
        User_Create_Sub_Title_6: "Startup",
        User_Create_Sub_Title_7: "Database",
        User_Create_Sub_Title_8: "Schedule",
        User_Create_Sub_Title_9: "Settings",
        User_Create_Desc_1: "Permissions that control a users ability to control the power state of a server, or send commands.",
        User_Create_Desc_2: "Permissions that allow a user to manage other subusers on a server. They will never be able to edit their own account, or assign permissions they do not have themselves.",
        User_Create_Desc_3: "Permissions that control a user's ability to modify the filesystem for this server.",
        User_Create_Desc_4: "Permissions that control a user's ability to generate and manage server backups.",
        User_Create_Desc_5: "Permissions that control a user's ability to modify the port allocations for this server.",
        User_Create_Desc_6: "Permissions that control a user's ability to view this server's startup parameters.",
        User_Create_Desc_7: "Permissions that control a user's access to the database management for this server.",
        User_Create_Desc_8: "Permissions that control a user's access to the schedule management for this server.",
        User_Create_Desc_9: "Permissions that control a user's access to the settings for this server.",
        User_Create_Option_Desc_1: "Console",
        User_Create_Option_Desc_2: "Start",
        User_Create_Option_Desc_3: "Stop",
        User_Create_Option_Desc_4: "Restart",
        User_Create_Option_Desc_5: "Create",
        User_Create_Option_Desc_6: "Read",
        User_Create_Option_Desc_7: "Update",
        User_Create_Option_Desc_8: "Delete",
        User_Create_Option_Desc_9: "Read-content",
        User_Create_Option_Desc_10: "Archive",
        User_Create_Option_Desc_11: "SFTP",
        User_Create_Option_Desc_12: "Download",
        User_Create_Option_Desc_13: "Restore",
        User_Create_Option_Desc_14: "Docker-image",
        User_Create_Option_Desc_15: "View_password",
        User_Create_Option_Desc_16: "Rename",
        User_Create_Option_Desc_17: "Reinstall",
        User_Create_Option_Description_1: "Allows a user to send commands to the server instance via the console.",
        User_Create_Option_Description_2: "Allows a user to start the server if it is stopped.",
        User_Create_Option_Description_3: "Allows a user to stop a server if it is running.",
        User_Create_Option_Description_4: "Allows a user to perform a server restart. This allows them to start the server if it is offline, but not put the server in a completely stopped state.",
        User_Create_Option_Description_5: "Allows a user to create new subusers for the server.",
        User_Create_Option_Description_6: "Allows the user to view subusers and their permissions for the server.",
        User_Create_Option_Description_7: "Allows a user to modify other subusers.",
        User_Create_Option_Description_8: "Allows a user to delete a subuser from the server.",
        User_Create_Option_Description_9: "Allows a user to create additional files and folders via the Panel or direct upload.",
        User_Create_Option_Description_10: "Allows a user to view the contents of a directory, but not view the contents of or download files.",
        User_Create_Option_Description_11: "Allows a user to view the contents of a given file. This will also allow the user to download files.",
        User_Create_Option_Description_12: "Allows a user to update the contents of an existing file or directory.",
        User_Create_Option_Description_13: "Allows a user to delete files or directories.",
        User_Create_Option_Description_14: "Allows a user to archive the contents of a directory as well as decompress existing archives on the system.",
        User_Create_Option_Description_15: "Allows a user to connect to SFTP and manage server files using the other assigned file permissions.",
        User_Create_Option_Description_16: "Allows a user to create new backups for this server.",
        User_Create_Option_Description_17: "Allows a user to view all backups that exist for this server.",
        User_Create_Option_Description_18: "Allows a user to remove backups from the system.",
        User_Create_Option_Description_19: "Allows a user to download a backup for the server. Danger: this allows a user to access all files for the server in the backup.",
        User_Create_Option_Description_20: "Allows a user to restore a backup for the server. Danger: this allows the user to delete all of the server files in the process.",
        User_Create_Option_Description_21: "Allows a user to view all allocations currently assigned to this server. Users with any level of access to this server can always view the primary allocation.",
        User_Create_Option_Description_22: "Allows a user to assign additional allocations to the server.",
        User_Create_Option_Description_23: "Allows a user to change the primary server allocation and attach notes to each allocation.",
        User_Create_Option_Description_24: "Allows a user to delete an allocation from the server.",
        User_Create_Option_Description_25: "Allows a user to view the startup variables for a server.",
        User_Create_Option_Description_26: "Allows a user to modify the startup variables for the server.",
        User_Create_Option_Description_27: "Allows a user to modify the Docker image used when running the server.",
        User_Create_Option_Description_28: "Allows a user to create a new database for this server.",
        User_Create_Option_Description_29: "Allows a user to view the database associated with this server.",
        User_Create_Option_Description_30: "Allows a user to rotate the password on a database instance. If the user does not have the view_password permission they will not see the updated password.",
        User_Create_Option_Description_31: "Allows a user to remove a database instance from this server.",
        User_Create_Option_Description_32: "Allows a user to view the password associated with a database instance for this server.",
        User_Create_Option_Description_33: "Allows a user to create new schedules for this server.",
        User_Create_Option_Description_34: "Allows a user to view schedules and the tasks associated with them for this server.",
        User_Create_Option_Description_35: "Allows a user to update schedules and schedule tasks for this server.",
        User_Create_Option_Description_36: "Allows a user to delete schedules for this server.",
        User_Create_Option_Description_37: "Allows a user to rename this server.",
        User_Create_Option_Description_38: "Allows a user to trigger a reinstall of this server."
      },
      Server_Network: {
        Network_Page_Title: "Network",
        Network_Alocations_Desc_1: "You are currently using {{data}} of {{limit}} allowed allocations for this server.",
        Network_Create_Alocation_Button: "Create Allocation",
        Network_Hostname: "Hostname",
        Network_IP_Address: "IP Address",
        Network_Port: "Port",
        Network_Notes: "Notes",
        Network_Primary: "Primary",
        Network_Primary_Button: "Make Primary",
        Network_Delete_Title: "Remove this allocation?",
        Network_Delete_Button: "Delete",
        Network_Delete_Desc_1: "This allocation will be immediately removed from your server. Are you sure you want to continue?",
        Network_Error_1: "Server auto-allocation is not enabled for this instance.",
      },
      Server_Schedules: {
        Task_Page_Title: "Schedules",
        Task_Empty_Message: "There are no schedules configured for this server.",
        Task_Create_Button: "Create schedule",
        Task_Edit_Button: "Save changes",
        Task_Delete_Title: "Delete schedule?",
        Task_Delete_Button_1: "Yes, delete schedule",
        Task_Delete_Desc: "Are you sure you want to delete this schedule? All tasks will be removed and any running processes will be terminated.",
        Task_Delete_Button_2: "Delete",
        Task_Create_Title: "Create new schedule",
        Task_Edit_Title: "Edit schedule",
        Task_Create_Or_Edit_Title_1: "Schedule name",
        Task_Create_Or_Edit_Title_2: "Only When Server Is Online",
        Task_Create_Or_Edit_Title_3: "Schedule Enabled",
        Task_Create_Or_Edit_Desc_1: "A human readable identifer for this schedule.",
        Task_Create_Or_Edit_Desc_2: "The schedule system supports the use of Cronjob syntax when defining when tasks should begin running. Use the fields above to specify when these tasks should begin running.",
        Task_Create_Or_Edit_Desc_3: "Only execute this schedule when the server is in a running state.",
        Task_Create_Or_Edit_Desc_4: "This schedule will be executed automatically if enabled.",
        Task_Create_Or_Edit_Minute: "Minute",
        Task_Create_Or_Edit_Hour: "Hour",
        Task_Create_Or_Edit_Day_Of_Month: "Day of month",
        Task_Create_Or_Edit_Month: "Month",
        Task_Create_Or_Edit_Day_Of_Week: "Day of week",
        Task_New_Task_Button: "New Task",
        Task_Run_Task_Button: "Run Now",
        Task_Cron_Row_Minute: "Minute",
        Task_Cron_Row_Hour: "Hour",
        Task_Cron_Row_Day_Month: "Day (Month)",
        Task_Cron_Row_Month: "Month",
        Task_Cron_Row_Day_Week: "Day (Week)",
        Task_Task_Page_Title: "Tasks",
        Task_Task_Processing: "Processing",
        Task_Task_Last_Run: "Last run at:",
        Task_Task_Next_Run: "Next run at:",
        Task_Task_Never: "Never",
        Task_Task_Date_Format: "MMM do 'at' h:mma",
        Task_Task_NA: "n/a",
        Task_Task_Edit_Button: "Edit",
        Task_Task_Active: "Active",
        Task_Task_Inactive: "Inactive",
        Task_Task_Delete_Title: "Confirm task deletion",
        Task_Task_Delete_Button: "Delete Task",
        Task_Task_Delete_Desc: "Are you sure you want to delete this task? This action cannot be undone.",
        Task_Task_Files_And_Folders_Message: "Ignoring files & folders:",
        Task_Task_Continue_Message: "Continues on Failure",
        Task_Task_Time_Message: "{{time}}s later",
        Task_Task_Edit_Title: "Edit Task",
        Task_Task_Create_Title: "Create Task",
        Task_Task_Create_Or_Edit_Command: "Send command",
        Task_Task_Create_Or_Edit_Power: "Send power action",
        Task_Task_Create_Or_Edit_Backup: "Create backup",
        Task_Task_Create_Or_Edit_Title_1: "Time offset (in seconds)",
        Task_Task_Create_Or_Edit_Title_2: "Payload",
        Task_Task_Create_Or_Edit_Title_3: "Ignored Files",
        Task_Task_Create_Or_Edit_Title_4: "Continue on Failure",
        Task_Task_Create_Or_Edit_Title_5: "Action",
        Task_Task_Create_Or_Edit_Desc_1: "The amount of time to wait after the previous task executes before running this one. If this is the first task on a schedule this will not be applied.",
        Task_Task_Create_Or_Edit_Desc_2: "Optional. Include the files and folders to be excluded in this backup. By default, the contents of your .pteroignore file will be used. If you have reached your backup limit, the oldest backup will be rotated.",
        Task_Task_Create_Or_Edit_Desc_3: "Future tasks will be run when this task fails.",
        Task_Task_Create_Or_Edit_Option_1: "Start the server",
        Task_Task_Create_Or_Edit_Option_2: "Restart the server",
        Task_Task_Create_Or_Edit_Option_3: "Stop the server",
        Task_Task_Create_Or_Edit_Option_4: "Terminate the server",
        Task_Task_Create_Or_Edit_Error_1: "A task payload must be provided.",
        Task_Task_Create_Or_Edit_Error_2: "The time offset must be a valid number between 0 and 900.",
        Task_Task_Create_Or_Edit_Error_3: "A time offset value must be provided.",
        Task_Task_Create_Or_Edit_Error_4: "The time offset must be at least 0 seconds.",
        Task_Task_Create_Or_Edit_Error_5: "The time offset must be less than 900 seconds.",
        Task_Task_Create_Or_Edit_Error_6: "A backup task cannot be created when the server's backup limit is set to 0."
      },
      Server_Settings: {
        Settings_Page_Title: "Settings",
        Settings_SFTP_Title_1: "SFTP Details",
        Settings_SFTP_Title_2: "Server Address",
        Settings_SFTP_Title_3: "Username",
        Settings_SFTP_Desc_1: "Your SFTP password is the same as the password you use to access this panel.",
        Settings_SFTP_Button: "Launch SFTP",
        Settings_Debug_Title_1: "Debug Information",
        Settings_Debug_Title_2: "Node",
        Settings_Debug_Title_3: "Server ID",
        Settings_Reinstall_Title_1: "Reinstall Server",
        Settings_Reinstall_Title_2: "Confirm server reinstallation",
        Settings_Reinstall_Button: "Yes, reinstall server",
        Settings_Reinstall_Desc_1: "Your server will be stopped and some files may be deleted or modified during this process, are you sure you wish to continue?",
        Settings_Reinstall_Desc_2: "Reinstalling your server will stop it, and then re-run the installation script that initially set it up.",
        Settings_Reinstall_Desc_3: "Some files may be deleted or modified during this process, please back up your data before continuing.",
        Settings_Reinstall_Success: "Your server has begun the reinstallation process.",
        Settings_Reinstall_Error: "Could not establish a connection to the machine running this server. Please try again.",
        Settings_Rename_Server_Title_1: "Change Server Name",
        Settings_Rename_Server_Title_2: "Server Name",
        Settings_Rename_Server_Button: "Save",
        Settings_Rename_Required: "Name is a required field"
      },
      Server_Startup: {
        Startup_Page_Title: "Startup Settings",
        Startup_Command_Title_1: "Startup Command",
        Startup_Docker_Title: "Docker Image",
        Startup_Docker_Desc: "This is an advanced feature allowing you to select a Docker image to use when running this server instance.",
        Startup_Docker_Error: "This server's Docker image has been manually set by an administrator and cannot be changed through this UI.",
        Startup_Variables_Title: "Variables",
        Startup_Variables_Read: "Read Only",
        Startup_Server_Error_Title: "Oops!",
      },
      Server_Features: {
        Features_Invalid_Java_Title_1: "Invalid Java version, update Docker image?",
        Features_Invalid_Java_Desc_1: "This server is unable to start due to the required Java version not being met.",
        Features_Invalid_Java_Desc_2: `By pressing "Update Docker Image" below you are acknowledging that the Docker image this server uses will be changed to an image below that has the Java version you are requesting.`,
        Features_Invalid_Java_Desc_3: "Please select a Java version from the list below.",
        Features_Invalid_Java_Button_1: "Update Docker Image",
        Features_Invalid_Java_Button_2: "Cancel",
        Features_Accept_Eula_Title: "Accept Minecraft® EULA",
        Features_Accept_Eula_Desc_1: `By pressing "I Accept" below you are indicating your agreement to the`,
        Features_Accept_Eula_Desc_2: "Minecraft® EULA",
        Features_Accept_Eula_Button_1: "I Accept",
        Features_Accept_Eula_Button_2: "Cancel",
      },
      Server_States: {
        Server_Installing_Title: "Running Installer",
        Server_Installing_Desc: "Your server should be ready soon, please try again in a few minutes.",
        Server_Suspended_Title: "Server Suspended",
        Server_Suspended_Desc: "This server is suspended and cannot be accessed.",
        Server_Transferring_Title: "Transferring",
        Server_Transferring_Desc: "Your server is being transfered to a new node, please check back later.",
        Server_Restoring_Title: "Restoring from Backup",
        Server_Restoring_Desc: "Your server is currently being restored from a backup, please check back in a few minutes."
      },
      Page_Titles: {
        Title_Console: "Console",
        Title_File_Manager: "File Manager",
        Title_Databases: "Databases",
        Title_Schedules: "Schedules",
        Title_Users: "Users",
        Title_Backups: "Backups",
        Title_Network: "Network",
        Title_Startup: "Startup",
        Title_Settings: "Settings",
        Title_API_Credentials: "API Credentials"
      },
      Errors: {
        Error_Key_Undefined: "Internal Error: The key for this message has not been set, contact the author: Ferks#7575",
        Error_Server_Title: "Something went wrong",
        Error_Server_Desc: "The requested resource was not found.",
        Error_Permission_Title: "Access Denied",
        Error_Permission_Desc: "You do not have permission to access this page.",
        Error_Variables_1: "The value field is required.",
        Error_Variables_2: "The value must be 1 digits.",
        Error_Variables_3: "This value is not valid.",
        Error_Variables_4: "The value must be at least 1.",
        Error_Variables_5: "This value is greater than the limit.",
        Error_Variables_6: "The value format is invalid.",
        Error_Variables_7: "The value may only contain letters, numbers, and dashes."
      },
    }
}
