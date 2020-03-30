const Commander = (() => {
  const o = {
    toBuy: x => {
      console.log(`Buying ${x}`)
    },
    toSell: x => {
      console.log(`Selling ${x}`)
    }
  }

  return {
    run: (command, args) => {
      if (!o[command]) {
        console.log('Command does not exist')
        return
      }
      o[command](args)
    }
  }
})()

Commander.run('toBuy', 'Mazda')
Commander.run('toSell', 'Apple')
Commander.run('toy', 'selling')