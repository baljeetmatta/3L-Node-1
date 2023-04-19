const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        // res.write("<b>Hello</b>");
        fs.readFile("./home.html", "utf-8", (err, data) => {
            res.write(data);
            res.end();
        })
    }
   else if (req.url == "/style.css") {
        // res.write("<b>Hello</b>");
        fs.readFile("./style.css", "utf-8", (err, data) => {
            res.write(data);
            res.end();
        })
    }
   else if (req.url == "/contact") {
        res.write("Contact us");
        res.end();
    }
else 
res.end();




    console.log("Connected request received");
});
server.listen(3000);
// server.on("connection",(socket)=>{
//     console.log("Connected request received");
// })