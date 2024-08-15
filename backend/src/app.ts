import express, {Express, Request, Response} from "express";
import dotenv from "dotenv"
import * as puppeteer from "puppeteer";
import cors from "cors";

dotenv.config()

const app : Express = express();
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/gfg", async (req : Request, res : Response) => {
    const url = "https://www.geeksforgeeks.org/user/nitrocodes/";
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    await page.waitForSelector('div > .problemNavbar_head__cKSRi');
    let element = await page.$('div > .problemNavbar_head__cKSRi')
    let values = await page.evaluate((el : any) => el.textContent, element)
                    .then((value : any) => value.split(')').slice(0, -1))
                    .then((value : any) => value.map((el : any) => el.split(" (")))
    return res.status(200).json(values);
})

app.get("/cc", async (req : Request, res : Response) => {
    const url = "https://www.codechef.com/users/shyam_5";
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    await page.waitForSelector('tspan');
    const texts = await page.evaluate(() => {
      const tspans = Array.from(document.querySelectorAll('tspan'));
      return tspans.map(tspan => tspan.textContent);
    });
    return res.status(200).json(texts.at(3));
})

app.get("/", (req : Request, res : Response) => {
    return res.json({"message" : "hello world"});
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})

