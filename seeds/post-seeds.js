const { Post } = require('../models');

const postData = [
    {
        title: "Bitcoin and Ethereum Keep Sliding",
        post_content: "Bitcoin and Ethereum saw big falls this week after setting new all-time highs last week. This week’s drops follow President Joe Biden signing the $1.2 trillion infrastructure bill into law, which included provisions that impact crypto investments. The latest price swings also follow a Biden administration report proposing new legislation to regulate stablecoins, and a Federal Deposit Insurance Corporation official saying the agency is looking to give crypto guidance to banks. Last month, the first Bitcoin ETF officially hit the market as well, marking crypto’s debut on the New York Stock Exchange.",
        user_id: 3
    },
    {
        title: "Crypto.com",
        post_content: "The Staples Center in Los Angeles — home of pro sports teams including the NBA’s Lakers and Clippers — will rebrand as the Crypto.com Arena starting Christmas Day, the Los Angeles Times reported Tuesday. Crypto.com will pay $700 million for the naming rights, the LA Times reported",
        user_id: 1
    },
    {
        title: "Mastercard and crypto ",
        post_content: "Mastercard announced it will partner with Bakkt to offer a “broad set of cryptocurrency solutions and services” for merchants, banks, and financial technology firms in the U.S. “Consumers, in turn, will experience expanded access to the digital asset ecosystem,” according to a press release. ",
        user_id: 2

    },
    {
        title: "Coinbase!",
        post_content: "Coinbase announced recently it is partnering with Facebook to pilot a new digital wallet, named Novi. The wallet will enable individuals to send and receive money abroad “instantly, securely, and with no fees,” according to a Coinbase blog post. The popular cryptocurrency exchange has also partnered with the NBA for a sponsorship deal, marking another major partnership for the platform. It also announced it will be creating Coinbase NFT, a “peer-to-peer marketplace for minting, purchasing, showcasing, and discovering NFTs.” The announcement comes after an SEC scuffle over another Coinbase product, Coinbase Earn, last month. ",
        user_id: 5
    },
    {
        title: "Shiba Inu (CRYPTO:SHIB)",
        post_content: "It has skyrocketed in popularity over the past few months and has probably minted a few millionaires, and possibly even billionaires. That's because the cryptocurrency, inspired by a Japanese dog breed, has gained 53,216,940% over the past 15 months. If you invested $100 in August 2020, you'd be sitting on more than $5 million today. But this isn't a plug to buy in today. In fact, Shiba Inu isn't likely to post those kinds of gains again, because the coin's rapid ascent is less about its intrinsic worth and more about investor hype. And as newer types of cryptocurrencies that do have more real value drop on the markets, Shiba Inu's valuation has started to deflate, losing 20% over the past week. That's a drop in the bucket for anyone who already benefited from the cryptocurrency's gains, but it might signal the beginning of a decline, or at least volatility that makes it a riskier bet than it's already been. And it should signal to investors that it might be time to look for other cryptocurrencies to invest in. Before Shiba Inu tanks, investors should invest their funds in more promising cryptocurrencies. I'd suggest Ethereum (CRYPTO:ETH) and Solana (CRYPTO:SOL). ",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;