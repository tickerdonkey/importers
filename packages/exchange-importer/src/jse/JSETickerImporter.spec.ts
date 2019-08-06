import { JSETickerImporter } from './JSETickerImporter'

describe('ticker', () => {
  it('should do stuff', async () => {
    const sut = new JSETickerImporter()
    const tickers = await sut.import({
      startDate: '2019-08-05',
      endDate: '2019-08-05',
    })

    expect(tickers.length).toBeGreaterThan(1)
  })
})
