const prices = [3, 2, 6, 1, 4, 7];
let buy = 0;
let sell = buy + 1;
let profit = 0;
let maxProfit = 0;

while (sell < prices.length) {
  if (prices[sell] < prices[buy]) {
    buy = sell;
  } else {
    profit = prices[sell] - prices[buy];
    maxProfit = Math.max(maxProfit, profit);
  }
  console.log("Buy value is", prices[buy]);
  console.log("Sell value is", prices[sell]);
  sell++;
}

console.log("Max profit is", maxProfit);
