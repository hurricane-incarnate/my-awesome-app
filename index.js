const express = require('express');
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My App</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
            <meta name="apple-mobile-web-app-title" content="My App">
            <link rel="manifest" href="/manifest.json">
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: black; color: white; }
                .container { text-align: center; margin-top: 100px; }
                h1 { font-size: 3em; margin-bottom: 20px; }
                p { font-size: 1.2em; margin-bottom: 30px; }
                .button { background: #4CAF50; color: white; padding: 15px 32px; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 8px; }
                .install-button { background: #FF6B6B; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🤘 LETS ROCK THE FUCK OUT!</h1>
                <p>SERANA finna take over the world.</p>
                <p>YOU! I CHOOSE YOU!</p>
                <a href="/about" class="button">LETS FUCKING GO</a>
            </div>
            <script>
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js');
                }
            </script>
        </body>
        </html>
    `);
});

// About page
app.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About - My App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: black; color: white; }
                .container { text-align: center; margin-top: 100px; }
                h1 { font-size: 2.5em; margin-bottom: 20px; }
                p { font-size: 1.1em; margin-bottom: 20px; }
                .button { background: #2196F3; color: white; padding: 15px 32px; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 8px; }
            </style>
        </head>
        <body>
            <div class="container">
                <a href="/" class="button">← Back Home</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 App is running at http://localhost:${port}`);
    console.log(`📱 Open your web browser and visit: http://localhost:${port}`);
    console.log(`📱 To access from your phone, visit: http://10.0.0.80:${port}`);
    console.log(`📱 Make sure your phone is connected to the same WiFi network!`);
});