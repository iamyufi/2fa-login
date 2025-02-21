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
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:
npm install

Configure environment variables:
Create a .env file in the root directory and add:
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
JWT_SECRET=your_jwt_secret

🚀 Run the Application:
npm start

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
