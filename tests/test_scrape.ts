import { Scraper } from '../src/scrape/scrape';
import { Metrics } from "../src/scrape/dto";
import { expect } from 'chai';
import 'mocha';

import * as dotenv from 'dotenv';
import {write} from "../src/writer";
import {DynamoDB} from "aws-sdk";
dotenv.config()


describe('Test Scraper',
    () => {
        it('should return true', async () => {
            const s = new Scraper(process.env.OWNER, process.env.REPO, process.env.AUTH)
            const metrics = await s.scrape()
            console.log(metrics)
        });
    });
