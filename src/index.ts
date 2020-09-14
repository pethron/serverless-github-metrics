import {Scraper} from "./scrape/scrape";
import {write} from "./writer";


export const handler = async (event: any = {}): Promise<any> => {
    const scraper = new Scraper(process.env.OWNER, process.env.REPO, process.env.AUTH);
    const metrics = await scraper.scrape();
    return write(process.env.TABLE, metrics);
}
