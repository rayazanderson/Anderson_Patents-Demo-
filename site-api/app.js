const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sgMail = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: I'm awesome");
});

app.post("/api/email", (req, res, next) => {
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "rayazand@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };

  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(3030, "0.0.0.0");
