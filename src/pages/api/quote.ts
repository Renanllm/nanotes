import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = "https://zenquotes.io/api"


type ZenQuoteAPIResponse = {
    q: string
    a: string
    h: string
}

export type QuoteAPIResponse = {
    message: string
    author: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<QuoteAPIResponse>
) {
    const response = await axios.get<ZenQuoteAPIResponse[]>(`${BASE_URL}/today`)
    if (response.status !== 200 || response.data.length === 0) {
        return res.status(400).json({ message: "there is no quote of the day for you", author: "" })
    }
    res.status(200).json({ message: response.data[0].q, author: response.data[0].a })
}