import axios, { AxiosInstance } from 'axios'

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

  public async import(): Promise<any> {
    try {
      const response = await this.client.get('/all-stocks/2019-08-05/2019-08-05')
      console.log(response)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
