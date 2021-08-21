require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

router.get("/",  (req, res) => {
     res.json(
            [
                {
                    id: "1",
                    title: "First Block",
                    images: [
                        "https://i.imgur.com/18MiNLe.jpg",
                        "https://i.imgur.com/2I9Iefs.jpg",
                        "https://i.imgur.com/P0OsCKp.jpg",
                        "https://i.imgur.com/xBhSuVF.jpg",
                    ]
                },
                {
                    id: "2",
                    title: "Second Block",
                    images: [
                        "https://i.imgur.com/z8rS0RR.jpg",
                        "https://i.imgur.com/Hx9Hx9c.jpg",
                        "https://i.imgur.com/xRZzBAR.jpg",
                        "https://i.imgur.com/KYkaZN4.jpg",
                    ]
                },
                {
                    id: "3",
                    title: "Third Block",
                    images: [
                        "https://i.imgur.com/p58fg1d.jpg",
                        "https://i.imgur.com/wTwWbta.jpg",
                        "https://i.imgur.com/eREob7f.jpg",
                        "https://i.imgur.com/gxeup6z.jpg",
                    ]
                },
                {
                    id: "4",
                    title: "Fourth Block",
                    images: [
                        "https://i.imgur.com/amdFrUz.jpeg",
                        "https://i.imgur.com/JB3ps7L.jpg",
                        "https://i.imgur.com/asnkuuS.jpg",
                        "https://i.imgur.com/G2w2Go6.jpg",
                    ]
                }
            ]
        );
});

app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});