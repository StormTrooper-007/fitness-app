import express from "express";


const app = express();

app.get("/", (req, res) => {
      res.send("hello world");
})

const port = process.env.PORT || 3003


app.listen(port, () => console.log("app is runing on port 3003"))