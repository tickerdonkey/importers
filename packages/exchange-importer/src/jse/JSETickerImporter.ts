import axios, { AxiosInstance } from 'axios'
import csv from 'csvtojson'

import { Ticker } from '../common/Ticker'
import { ImportFilter } from '../common/ImportFilter'

export class JSETickerImporter {
  private readonly client: AxiosInstance
  public constructor() {
    this.client = axios.create({
      baseURL: 'https://www.jamstockex.com/market-data/download-data/price-history/generate-csv',
      headers: {
        'User-Agent': 'TickerDonkey',
      },
    })
  }

  public async import(filter: ImportFilter): Promise<Ticker[]> {
    try {
      const response = await this.client.get(`/${filter.instrument}/${filter.startDate}/${filter.endDate}`)

      const rawJsonData = await csv().fromString(response.data)

      const tickers = rawJsonData.map(this.decodeTicker)
      return tickers
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  private decodeTicker(tickerJson: any): Ticker {
    return {
      symbol: tickerJson.Symbol,
      date: tickerJson.Date,
      closingPrice: +Number(tickerJson['Close Price']).toFixed(2),
      volume: Math.round(tickerJson['Volume (non block)']),
    }
  }
}
