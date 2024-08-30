namespace PowerShellAssistant
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            runScriptButton = new Button();
            outputTextBox = new TextBox();
            outputLabel = new Label();
            openAllJobSearchApps = new Button();
            SuspendLayout();
            // 
            // runScriptButton
            // 
            runScriptButton.Location = new Point(12, 12);
            runScriptButton.Name = "runScriptButton";
            runScriptButton.Size = new Size(106, 23);
            runScriptButton.TabIndex = 0;
            runScriptButton.Text = "Open Emails";
            runScriptButton.UseVisualStyleBackColor = true;
            runScriptButton.Click += runScriptButton_Click_1;
            // 
            // outputTextBox
            // 
            outputTextBox.Location = new Point(66, 418);
            outputTextBox.Name = "outputTextBox";
            outputTextBox.Size = new Size(396, 23);
            outputTextBox.TabIndex = 1;
            // 
            // outputLabel
            // 
            outputLabel.AutoSize = true;
            outputLabel.Location = new Point(12, 426);
            outputLabel.Name = "outputLabel";
            outputLabel.Size = new Size(48, 15);
            outputLabel.TabIndex = 2;
            outputLabel.Text = "Output:";
            outputLabel.Click += label1_Click;
            // 
            // openAllJobSearchApps
            // 
            openAllJobSearchApps.Location = new Point(16, 51);
            openAllJobSearchApps.Name = "openAllJobSearchApps";
            openAllJobSearchApps.Size = new Size(165, 23);
            openAllJobSearchApps.TabIndex = 3;
            openAllJobSearchApps.Text = "Open All Job Search Apps";
            openAllJobSearchApps.UseVisualStyleBackColor = true;
            openAllJobSearchApps.Click += OpenAllJobSearchAppsClick;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(470, 450);
            Controls.Add(openAllJobSearchApps);
            Controls.Add(outputLabel);
            Controls.Add(outputTextBox);
            Controls.Add(runScriptButton);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button runScriptButton;
        private TextBox outputTextBox;
        private Label outputLabel;
        private Button openAllJobSearchApps;
    }
}
