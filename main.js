fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbinancecoin%2Cmatic-network%2Cdogecoin%2Cbitcoin&vs_currencies=usd%2Ceur&include_last_updated_at=true')
        .then(res => res.json())
        .then(json => {

    const container = document.querySelector('.container');
    const coins = Object.getOwnPropertyNames(json);

    for (let coin of coins) {

        const coinInfo = json[`${coin}`];
        const dollar = coinInfo.usd;
        const euro = coinInfo.eur;
        

        container.innerHTML += `
    
        <div class="coin falling">
            <div class="coin-logo">
                <img src="./images/${coin}.png">
            </div>
            <div class="coin-name">
                <h3>${coin}</h3>
            </div>
            <div class="coin-price">
            <span class="dollar">$${dollar}</span>
        <span class="euro">€${euro}</span>
        </div>
        </div>
        
        `;
    }
});

