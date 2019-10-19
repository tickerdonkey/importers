import { JSEImporter } from './index'

describe('index', () => {
  it('should have exported member', async () => {
    const importer = new JSEImporter()

    const tickers = await importer.importTickers({
      instrument: 'all-stocks',
      startDate: '2010-01-01',
      endDate: '2019-08-13',
    })

    console.log(tickers.length)
  })
})

// var getDateArray = function(start, end) {

//   var
//     arr = new Array(),
//     dt = new Date(start);

//   while (dt <= end) {
//     arr.push(new Date(dt));
//     dt.setDate(dt.getDate() + 1);
//   }

//   return arr;

// }
