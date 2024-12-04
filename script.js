
let max_profit = function(prices) {
  let profit = -1

  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
      if ((prices[j] - prices[i]) > profit)
        profit = prices[j] - prices[i]
    }
  }
  return profit
}


prices = [1, 10, 22, 5, 4]
console.log(max_profit(prices))

