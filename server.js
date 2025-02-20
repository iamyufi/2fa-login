// server.js
// express modul
const express = require('express');
// nodemailer module
const nodemailer = require('nodemailer');
// path module, til pathing og filhåndtering
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Hardcoded bruger til demostration af OTP
const validUser = {
    email: 'megalarsfarts@gmail.com',
    password: 'password123'
};

// Mulighed for et array af bruger, stadig hardcorded med mindre brug for at en data
// ved hjælp med værktøj som mongoose
// const users = [
//    {
//        email: 'user1@example.com',
//        password: 'password123',
//        currentOTP: null
//    },
//    {
//        email: 'user2@example.com',
//        password: 'password456',
//        currentOTP: null
//    }
// ];

// Email indstillinger til auth af google konto
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'megalarsfarts@gmail.com',    // Gmail
        pass: 'fonv fesa xwik uuey'        // Gmail konto app cus kode
    }
});

// Funktionen generateOTP() genererer en tilfældig 6-cifret engangskode (OTP) 
// som en streng.
// math.floor flat number uden decimal, math.random for random nr.
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Håndterer GET-anmodning til roden ('/') ved at sende 'index.html'-filen fra mappen 
//'public' som svar.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Håndterer POST-anmodning til '/login' og udtrækker 'email' og 'password' fra 
// anmodningens (html) body formular.
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Tjekker om den indtastede e-mail og adgangskode matcher den gyldige brugers 
    // oplysninger.  
// Hvis de matcher, genereres en engangskode (OTP) ved hjælp af generateOTP()-funktionen.
    if (email === validUser.email && password === validUser.password) {
        const otp = generateOTP();
        
        // Definerer mailindstillingerne for at sende OTP'en til brugeren, inklusive 
        // afsender, modtager, emne og beskedtekst.
        const mailOptions = {
            from: 'megalarsfarts@gmail.com',
            to: email,
            subject: 'Login OTP',
            text: `Your OTP for login is: ${otp}`
        };
       
       // Forsøger at sende e-mailen med OTP ved hjælp af transporter.sendMail().  
        try {
            await transporter.sendMail(mailOptions);
// Hvis e-mailen sendes succesfuldt, gemmes OTP'en i validUser.currentOTP, 
// og der sendes et JSON-svar til klienten.
            validUser.currentOTP = otp;
            res.json({ message: 'OTP sent to your email' });
            // Håndterer fejl, der opstår under afsendelsen af e-mailen.  
            // Logger fejlen i konsollen og sender et JSON-svar med statuskode 
            // 500 til klienten, hvis afsendelsen mislykkes.
        } catch (error) {
            console.error('Email error:', error);
            res.status(500).json({ error: 'Failed to send OTP' });
        }
        // Hvis e-mail eller adgangskode ikke matcher den gyldige brugers oplysninger,  
// sendes et JSON-svar med statuskode 401, der angiver ugyldige loginoplysninger.
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Håndterer POST-anmodning til '/verify' og udtrækker 'email' og 
// 'otp' fra anmodningens body for at verificere OTP'en.
app.post('/verify', (req, res) => {
    const { email, otp } = req.body;
    // Tjekker om den indtastede e-mail og OTP matcher den gyldige brugers oplysninger.
    if (email === validUser.email && otp === validUser.currentOTP) {
// Hvis de er korrekte, nulstilles OTP'en, og der sendes et JSON-svar med 
// besked om, at login er vellykket. 
        validUser.currentOTP = null;
        res.json({ message: 'Login successful!' });
    } else {
    // Hvis OTP'en er forkert, sendes et JSON-svar med 
    // statuskode 401 og en fejlmeddelelse.
        res.status(401).json({ error: 'Invalid OTP' });
    }
});
// Starter serveren på port 3000 og logger en besked i konsollen for at 
// bekræfte, at serveren kører.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});