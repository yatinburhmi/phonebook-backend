import express, { Request, Response } from "express";
const router = express.Router();

router.route("/").get((req: Request, res: Response) => {
  res.send(`<h2> Hello from ${req.baseUrl}</h2>`);
});

export{
    router
}