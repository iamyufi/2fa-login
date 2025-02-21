🔐 Two-Factor Authentication Login System
📚 About the Project
This project demonstrates a login system with two-factor authentication (2FA), where an additional one-time password (OTP) is sent via email. The server verifies that the correct user uses the provided one-time code.

⚠️ Note:
This code is public and available for everyone's use.
It is not a secure method for handling sensitive user data but serves as an example of how to implement email-based 2FA using OTP codes.

🎯 Project Context
This project was developed for a Professional Bachelor's Degree in Web Development.
It is part of a submission covering:

🖇 JavaScript Frameworks
🔒 Data Security
📝 Project Requirements
Each student was assigned one of the tasks below through electronic random selection. All tasks involve server-side and client-side programming.

💡 Guidelines:
Use relevant technologies (libraries, frameworks, engines, etc.) introduced during the course.
Additional technologies can be used if appropriate.
Avoid unnecessary packages—only use what makes sense for the solution.
Plain JavaScript is perfectly acceptable.

🛠 Task Description:
Secure Login System with Role Management:
✅ Passwords must be securely hashed.
🔑 Role-based access control (RBAC) where only users with the correct role can access specific pages. For example, only admins can access system configuration.
👥 Implement at least three distinct user roles:
Admin: Full access, including system configuration.
Editor: Can write/edit content.
Viewer: Read-only access.

🚀 Technologies Used:
🌐 Node.js
📬 Nodemailer (for sending OTP via email)
🔑 bcrypt (for password hashing) (Not implementet as of yet, but a surefire recommendation)
📦 Express.js (server-side framework)
⚡ JavaScript (ES6+)

💡 Getting Started

🔧 Installation
To get this project up and running on your local machine, follow these steps:

Clone the Repository

Navigate to the folder where you want the project to be saved.
Open your terminal and run the following command to clone the repository:
git clone https://github.com/your-username/your-repo-name.git

After cloning, navigate into the project folder:
cd your-repo-name
Install Dependencies

The project uses Node.js and npm (Node Package Manager). Ensure you have them installed:
Check Node.js: node -v
Check npm: npm -v
If you don’t have them, download and install Node.js.

To install all necessary dependencies, run:
npm install
This will install all required packages as listed in the package.json file.
Set Up Environment Variables

To start the server, run:
npm start
The server will typically run on http://localhost:3000 (unless otherwise specified).
Test the Application

Open your browser and go to http://localhost:3000.
Try registering a user, logging in, and testing the two-factor authentication flow by checking your email for the OTP code.

✉️ Setting Up Gmail for Email OTP
If you're using Gmail to send OTP codes, you need to create an App Password because Gmail blocks less secure apps by default. Follow these steps:

🔒 Step 1: Enable 2-Step Verification on Your Google Account
Go to your Google Account Security Settings.
Under "Signing in to Google", find "2-Step Verification" and click "Get Started".
Follow the prompts to enable 2-Step Verification for your account.

🔑 Step 2: Generate an App Password
After enabling 2-Step Verification, return to the Security Settings.
Under "Signing in to Google", click "App passwords".
You might need to sign in again.
Under "Select app", choose "Mail".
Under "Select device", choose "Other (Custom name)" and type a name like 2FA-Login-App.
Click "Generate".
Google will display a 16-character password. Copy this password (without spaces).

✅ Features
🔐 Two-Factor Authentication: OTP sent via email.
🔒 Secure Password Storage: Passwords hashed with bcrypt.
👮 Role-Based Access Control: Admin, Editor, and Viewer roles.
💡 Clean and Simple UI for login and role management.
⚠️ Disclaimer
This project is for educational purposes only.
It is not production-ready and should not be used for handling real user data without additional security enhancements.

🤝 Contributing
Contributions, issues, and feature requests are welcome!

📄 License
This project is open-source.
