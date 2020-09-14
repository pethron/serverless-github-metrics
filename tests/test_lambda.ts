import {handler} from "../src";
import * as dotenv from 'dotenv';
dotenv.config()

describe('Test Lambda',
    () => {
        it('Lambda', async () => {
            await handler({})
        })
    });
