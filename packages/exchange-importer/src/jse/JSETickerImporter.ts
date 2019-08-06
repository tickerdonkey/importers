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
      const response = await this.client.get(`/all-stocks/${filter.startDate}/${filter.endDate}`)

      const rawJsonData = await csv().fromString(response.data)

      const tickers = this.toTicker(rawJsonData)
      return tickers
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  private toTicker(rawTickers: any[]): Ticker[] {
    const tickers = rawTickers.map(this.decodeTicker)
    return tickers
  }

  private decodeTicker(tickerJson: any): Ticker {
    return {
      symbol: tickerJson.Symbol,
      date: tickerJson.Date,
      closingPrice: tickerJson['Close Price'],
      volume: tickerJson['Volume (non block)'],
    }
  }
}
