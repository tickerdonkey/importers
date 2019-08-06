import { ImportFilter } from '../common/ImportFilter'
import { JSETickerImporter } from './JSETickerImporter'

export class JSEImporter {
  private readonly tickerImporter: JSETickerImporter

  constructor() {
    this.tickerImporter = new JSETickerImporter()
  }

  public async importTickers(filter: ImportFilter) {
    return this.tickerImporter.import(filter)
  }
}
