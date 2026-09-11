const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Serves the central front-end interface disguised as a student portal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shrakny</title>
            <link href="https://googleapis.com" rel="stylesheet">
            <style>
                @import url('https://cdnfonts.com');
                body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; font-family: 'Courier Prime', monospace; background-color: #050515; position: relative; }
                
                .video-bg-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; overflow: hidden; }
                .video-bg-wrapper video { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75) contrast(1.1); }

                .giant-marquee-lane { position: absolute; top: 32%; width: 100%; overflow: hidden; white-space: nowrap; z-index: 5; pointer-events: none; }
                .giant-mo-text {
                    font-family: 'Perfect DOS VGA 437', monospace; font-size: 80px; font-weight: bold; color: #ff3300; display: inline-block; animation: skyFlyThrough 8s linear infinite; letter-spacing: 6px;
                    text-shadow: 0px 3px 0px #ffaa00, -1px 4px 0px #111122, -2px 6px 0px #111122, -3px 8px 0px #111122, -4px 10px 0px #111122, -5px 12px 0px #111122, -6px 14px 0px #111122, -7px 16px 0px #111122, -8px 18px 0px #111122, -12px 24px 10px rgba(0, 0, 0, 0.7);
                }
                @keyframes skyFlyThrough { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
                
                .container { position: absolute; top: 70%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 530px; z-index: 10; }
                .portal-card { background: #c0c0c0; padding: 4px; border: 3px solid; border-color: #fff #808080 #808080 #fff; box-shadow: 5px 5px 30px rgba(0,0,0,0.8); }
                .window-title-bar { background: linear-gradient(90deg, #000080, #1084d0); color: white; padding: 6px 10px; font-weight: bold; font-size: 13px; display: flex; justify-content: space-between; align-items: center; font-family: sans-serif; }
                
                .window-content { padding: 22px; background: #000000; border: 2px solid; border-color: #808080 #fff #fff #808080; }
                h2 { margin-top: 0; font-size: 16px; font-weight: bold; text-transform: uppercase; color: #ffffff; }
                p { color: #ffffff; font-size: 11px; font-weight: bold; margin-bottom: 15px; }
                
                input[type="text"] { 
                    width: 100%; padding: 12px; border: 3px solid; border-color: #808080 #fff #fff #808080;
                    font-size: 14px; box-sizing: border-box; background-color: #000000; color: #ffffff;
                    font-family: 'Perfect DOS VGA 437', monospace; font-weight: bold;
                }
                button { width: 100%; padding: 12px; background-color: #c0c0c0; color: #000; border: 3px solid; border-color: #fff #808080 #808080 #fff; cursor: pointer; font-size: 14px; font-weight: bold; font-family: 'Courier Prime', monospace; margin-top: 15px; }
                button:active { border-color: #808080 #fff #fff #808080; }
            </style>
        </head>
        <body>
            <div class="video-bg-wrapper">
                <video autoplay loop muted playsinline>
                    <source src="https://motionbgs.com/media/5648/retro-pixel-warrior.960x540.mp4">
                </video>
            </div>

            <div class="giant-marquee-lane">
                <div class="giant-mo-text">BY MA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BY MA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BY MA</div>
            </div>

            <div class="container">
                <div class="portal-card">
                    <div class="window-title-bar">
                        <span>📚 Education Gateway Core Interface</span>
                        <span style="background:#c0c0c0; color:black; padding:1px 5px; font-size:10px; border:1px solid #808080;">X</span>
                    </div>
                    <div class="window-content">
                        <h2>Network Directory Hub</h2>
                        <p>Run secure system requests. Enter your target network domain keywords below to compile the sandbox stream container:</p>
                        <input type="text" id="targetUrl" placeholder="Type any website and it should be unblocked...">
                        <button onclick="launchProxy()">[ INITIALIZE RUN SCHEME ]</button>
                    </div>
                </div>
            </div>
            <script>
                function launchProxy() {
                    let input = document.getElementById('targetUrl').value.trim();
                    if (!input) return;
                    
                    if (!input.includes('.')) {
                        input = '://google.com' + encodeURIComponent(input);
                    }
                    if (!input.startsWith('http://') && !input.startsWith('https://')) {
                        input = 'https://' + input;
                    }
                    
                    let scramble = btoa(input);
                    window.location.href = '/gateway/' + scramble;
                }
            </script>
        </body>
        </html>
    `);
});

// THE ENCRYPTED ROUTE PIPELINE
app.get('/gateway/:token', async (req, res) => {
    let token = req.params.token;
    let targetUrl = "";
    
    try {
        targetUrl = Buffer.from(token, 'base64').toString('utf-8');
        
        // NEW ADVANCED EMBED SYSTEM: Instead of loading raw source data that can break out,
        // we lock the target site inside a local window frame using an absolute proxy gateway.
        // The sandbox parameter explicitly omits "allow-top-navigation", meaning the games
        // CANNOT change your browser address bar link!
        res.send(`
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:99999; font-family:sans-serif;">
                <div style="background:#c0c0c0; padding:5px; font-size:12px; font-weight:bold; border-bottom:2px solid #808080; display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#000;">🔒 Secured Sandboxed Stream Frame</span>
                    <a href="/" style="color:black; text-decoration:none; background:#d9d9d9; padding:2px 8px; border:1px solid #808080; font-size:11px; font-weight:bold;">[ EXIT PORTAL ]</a>
                </div>
                <iframe src="https://corsproxy.io{encodeURIComponent(targetUrl)}" 
                        style="width:100%; height:calc(100% - 25px); border:none; background:#fff;" 
                        sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-pointer-lock">
                </iframe>
            </div>
        `);
    } catch (error) {
        res.status(500).send('Critical Gateway Error: Bridge pipe dropped.');
    }
});

app.listen(PORT, () => console.log('Bypass Lock Engine Fully Active.'));
