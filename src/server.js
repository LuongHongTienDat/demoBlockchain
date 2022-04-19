const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const QRCode = require('qrcode')
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Successfully running !");
  });

app.post("/qr", async (req, res) => {
    let qr = await QRCode.toDataURL(req.body.datum);
    res.json({qr});
});



app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})
