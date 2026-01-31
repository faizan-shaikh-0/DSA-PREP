var maxProfit = function(prices) {
        let profit=0;
        let buy=0, sell=1;

       while (sell < prices.length) {
        if (prices[sell] < prices[buy]) {
           
            buy = sell;
        } else {
            
            profit = Math.max(profit, prices[sell] - prices[buy]);
        }
        sell++;
    }

        return profit;
};

const result= maxProfit([7,1,5,3,6,4])


console.log(result,"result")