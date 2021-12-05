const axios = require("axios");
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/:query", (req, res) => {
    console.log(req.session);
        // Make a request for a user with a given ID
        axios({
          method: "get",
          // url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH&convert=CAD",
          url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100",
          
          responseType: "json",
          headers: {
            "X-CMC_PRO_API_KEY": "9256192e-5bec-495f-ac90-d237f0a1f879",
          },
        })
          .then(function (response) {
            console.log(response.data.data)
            // const { BTC, ETH } = response.data.data;
            // const array = [BTC, ETH];
            // handle success
            // console.log(quotes);
            const array=response.data.data;
            const quotes=[]
            array.forEach(quote=>{
              console.log(quote)
              if (quote.name.toLowerCase() == req.params.query.toLowerCase()) {
                quotes.push({
                    name:quote.name,
                    symbol:quote.symbol,
                    price:quote.quote.USD.price.toFixed(2),
                    market:quote.quote.USD.market_cap.toFixed(2),
                    updateh:quote.quote.USD.percent_change_1h.toFixed(2),
                    updatehh:quote.quote.USD.percent_change_24h.toFixed(2),
                    updated:quote.quote.USD.percent_change_7d.toFixed(2),
                    updatedd:quote.quote.USD.percent_change_30d.toFixed(2),
                    updateddd:quote.quote.USD.percent_change_60d.toFixed(2),
                    updatedddd:quote.quote.USD.percent_change_90d.toFixed(2)
                })
            }
            })
            console.log(quotes)
            res.render("search", {
              loggedIn: req.session.loggedIn,
              quotes
            });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });

  });

module.exports=router;
  