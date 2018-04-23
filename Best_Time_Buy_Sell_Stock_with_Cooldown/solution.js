function maxProfit(prices) {
  let buy = -prices[0];
  let sell = 0;
  let cool = 0;
  let prevBuy = 0;
  let prevSell = 0;
  for (let p of prices) {
    prevBuy = buy;
    buy = Math.max(prevBuy, prevSell - p);
    prevSell = sell;
    sell = Math.max(prevSell, prevBuy + p);
  }
  return Math.max(buy, sell);
}
