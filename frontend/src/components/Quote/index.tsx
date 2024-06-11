import axios from "axios"
import { useEffect, useState } from "react"
import { QuoteAPIResponse } from "@/pages/api/quote"
import { Skeleton } from "../ui/skeleton"

type QuoteInfo = {
    message: string
    author: string
}

export function Quote() {
    const [quote, setQuote] = useState({} as QuoteInfo)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getQuoteOfTheDay()
    }, [])

    async function getQuoteOfTheDay() {
        const response = await axios.get<QuoteAPIResponse>("/api/quote")
        setQuote(response.data)
        setIsLoading(false)
    }

    return (
        <div className="w-full flex justify-center flex-col items-center">
            {isLoading ? (
                <>
                    <Skeleton className="w-full h-[20px] rounded-full" />
                    <Skeleton className="w-[100px] h-[10px] rounded-full mt-3" />
                </>
            ) : (
                <>
                    <p className="text-lg font-bold">
                        {quote.message}
                    </p>
                    <span className="text-sm">
                        {quote.author}
                    </span>
                </>
            )}
        </div>
    )
}