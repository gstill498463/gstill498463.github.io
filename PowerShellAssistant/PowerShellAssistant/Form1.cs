using System;
using System.Management.Automation;
using System.Management.Automation.Runspaces;
using System.Windows.Forms;
using Microsoft.PowerShell;

namespace PowerShellAssistant
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void runScriptButton_Click(object sender, EventArgs e)
        {
            string script = "";
            string output = RunPowerShellScript(script);
            outputLabel.Text = output;
        }

        private string RunPowerShellScript(string script)
        {  
            // Create an InitialSessionState instance to specify the use of modules only
            InitialSessionState initialState = InitialSessionState.CreateDefault();
            initialState.ThrowOnRunspaceOpenError = true; // Enable strict error handling

            using (Runspace runspace = RunspaceFactory.CreateRunspace(initialState))
            {
                runspace.Open();
                using (PowerShell powerShell = PowerShell.Create())
                {
                    powerShell.Runspace = runspace;
                    powerShell.AddScript(script);

                    var results = powerShell.Invoke();
                    var output = "";

                    foreach (var result in results)
                    {
                        output += result.ToString() + Environment.NewLine;
                    }

                    // Check for errors
                    if (powerShell.Streams.Error.Count > 0)
                    {
                        foreach (var error in powerShell.Streams.Error)
                        {
                            output += $"Error: {error.Exception.Message}" + Environment.NewLine;
                        }
                    }

                    return output;
                }
            }
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void runScriptButton_Click_1(object sender, EventArgs e)
        {
            string script = "$urls = @(\r\n    \"https://mail.google.com/mail/u/0/#inbox\",\r\n    \"https://mail.google.com/mail/u/1/#inbox\"\r\n    )\r\n\r\n$chromePath = \"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"\r\n\r\n$allUrls = $urls -join \" \"\r\nStart-Process $chromePath \"--new-window $allUrls\"";
            string output = RunPowerShellScript(script);
            outputLabel.Text = output;
        }

        private void OpenAllJobSearchAppsClick(object sender, EventArgs e)
        {
            string script = "\r\n\r\n# Define the list of URLs to open\r\n$urls = @(\r\n    \"https://mail.google.com/mail/u/0/#inbox\",\r\n    \"https://mail.google.com/mail/u/1/#inbox\",\r\n    \"https://www.linkedin.com/feed/\",\r\n    \"https://www.upwork.com/nx/find-work/best-matches\",\r\n    \"https://frances.oregon.gov/_/\",\r\n    \"https://gabe-still.com/\",\r\n    \"https://usa.experian.com/login/index\",\r\n    \"https://www.indeed.com/?from=gnav-career-guide--career-guide-webapp\",\r\n    \"https://calendar.google.com/calendar/u/0/r/month/2024/8/1?pli=1\",\r\n    \"https://app.dataannotation.tech/workers/starter_assessment_complete\"\r\n)\r\n\r\n# Define the path to the Chrome executable\r\n$chromePath = \"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"\r\n\r\n# Open a new Chrome window with all the specified URLs\r\n$allUrls = $urls -join \" \"\r\nStart-Process $chromePath \"--new-window $allUrls\"\r\n";
            string output = RunPowerShellScript(script);
            outputLabel.Text = output;
        }
    }
}
