const express = require("express");
//Creating app1 for the first server
const app1 = express();
const port1 = 3000;

//Creating app2 for the second server
const app2 = express();
const port2 = 5000;

// -------------------------------------------------------
//Server 1 Routers
app1.get("/", (req, res) => {
  res.send(`app1 routing on localhost:${port1}`);
});

app1.get("/test", (req, res) => {
    res.send(`app1 router test on localhost:${port1}`);
  });

//initiating port1
app1.listen(port1, () => {
    console.log(`Example app listening
  at http://localhost:${port1}`);
  });

// -------------------------------------------------------
//Server 2 Routers
app2.get("/", (req, res) => {
    res.send(`app2 routing on localhost:${port2}`);
  });
  
  app2.get("/test", (req, res) => {
      res.send(`app2 router test on localhost:${port2}`);
    });
  
  //initiating port2
  app2.listen(port2, () => {
      console.log(`Example app listening
    at http://localhost:${port2}`);
    });


