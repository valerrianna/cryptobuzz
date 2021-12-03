const axios = require("axios");
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
      {
        model: User,
        attributes: ["username", "twitter"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      // const requestOptions = {
      //   method: "GET",
      //   // uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      //   uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH",
      //   qs: {
      //     start: "1",
      //     limit: "5",
      //     convert: "CAD",
      //   },
      //   headers: {
      //     "X-CMC_PRO_API_KEY": "9256192e-5bec-495f-ac90-d237f0a1f879",
      //   },
      //   json: true,
      //   gzip: true,
      // };

      // Make a request for a user with a given ID
      axios({
        method: "get",
        // url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH&convert=CAD",
        url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5",
        
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
          const quotes=array.map(quote=>{
            console.log(quote)
            return{
              name:quote.name,
              symbol:quote.symbol,
              price:quote.quote.USD.price.toFixed(2)
            }
          })
          console.log(quotes)
          res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIn,
            quotes
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // .then(function () {
      //   // always executed
      // });

      // rp(requestOptions)
      //   .then((response) => {
      //     console.log("API call response:", response);
      //   })
      //   .catch((err) => {
      //     console.log("API call error:", err.message);
      //   });

      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
      {
        model: User,
        attributes: ["username", "twitter"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "There was no Post under this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
