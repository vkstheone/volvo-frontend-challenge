import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/api/cars.json'



async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data);
}


export default handler;