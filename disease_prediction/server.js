const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const flatted = require('flatted');
const { sendMail } = require("./nodemailer");
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("hello run")
    // delete req.circularReference;
    console.log("res->"+flatted.stringify(req));
})
app.post('/sendingdata',async (req, res) => {
    console.log("hello sending")
    console.log("res->"+JSON.stringify(req.body));
    let email=req.body.email;
    let percentage=req.body.percentage;
    console.log("email->"+email);
    await sendMail("forgetpassword",{email,percentage});
});

app.post('/run', (req, res) => {
    // Replace 'pythonScript.py' with the path to your Python script
    console.log("hello run")
    console.log("hello sending")
    console.log("res->"+JSON.stringify(req.body));
    console.log("res->"+req.body.fileName);
   
    const input=JSON.stringify(req.body.fileName);
    const pythonScriptPath = 'abc.py';
  
    exec(`python ${pythonScriptPath} ${input}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            res.status(500).json({ error: error.message });
        } else {
            // console.log(`Output: ${stdout}`);
            const inputString = stdout;
console.log(inputString);   
// Regular expression to match the percentage value
const regex = /Chance of Tumor: (\d+)%/;

// Use the regex to extract the percentage
const match = inputString.match(regex);
let tumorPercentage = 0;
if (match) {
   tumorPercentage = match[1];
  
  console.log(`Chance of Tumor: ${tumorPercentage}%`);
} else {
  console.log("Percentage not found in the input string");
}
            res.json({ output: tumorPercentage });
        }
    });
});

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
