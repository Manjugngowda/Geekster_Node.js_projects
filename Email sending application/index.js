import express, { request, response } from "express";
import "dotenv/config" ;
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const port=process.env.PORT;



const app=express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// it will show UI
// app.get("/get",(request, response)=>{
//     return response.sendFile(import.meta.dirname+"\\index.html");
// })

app.post("/submit",(request,response)=>{
    const {name,email,message}=request.body;
    // console.log(name,email);
    // console.log(process.env.GMAIL_PASS);
    

    const transporter=nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "gnmanjunath1612@gmail.com",
            pass: "scmwqrwjihlcpwkh",
        }
    })

    const mailOptions={
        from : "gnmanjunath1612@gmail.com",
        to :email,
        subject : `Message from ${name}`,
        html : `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
      body { font-family: Arial, sans-serif; }
      .email-container { background-color: #fff; max-width: 600px; margin: 0 auto; padding: 20px; }
      h1 { color: #333; font-size: 24px; }
      p { color: #555; font-size: 16px; }
      .footer { margin-top: 20px; text-align: center; color: #777; font-size: 12px; }
      .button { display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; }
      .button:hover { background-color: #0056b3; }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Welcome to Our Service!</h1>
      <p><a href="https://example.com/confirm" class="button">Confirm Your Email</a></p>
      <p>If you have any questions, feel free to contact us at any time.</p>
    </div>
  </body>
  </html>`
    }
    transporter.sendMail(mailOptions, (err)=>{
        if(err){
            console.log(err);
            response.status(500).send("Email not sent");
        }
        else{
            response.send("Email Sent Successfully");
        }
    })
    

    return response.send("Email Sent Successfully")
    
})

app.listen(port, ()=>{console.log("Server started at port " + port)})