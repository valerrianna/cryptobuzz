const { User } = require('../models');

const userData = [
    {
        username: "Valerie_Nguyen",
        twitter: "ValerieN",
        email: "ValerieN@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Randolph_Richard",
        twitter: "RandolphRichard",
        email: "RandolphRichard@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Skyler_Alexander",
        twitter: "SkylerA",
        email: "SkylerA@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Marie_Kaze",
        twitter: "Mkaze",
        email: "mkaze@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Kevin_Muita",
        twitter: "KevinMuita",
        email: "KevinMuita@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Gabi_Beaudin",
        twitter: "GabiBeaudin",
        email: "GabiBeaudin@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;