const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS succeccfully SEEDED -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS successfully SEEDED -----\n');

  await seedComments();
    console.log('\n----- COMMENTS successfully SEEDED -----\n');

  process.exit(0);
};

seedAll();
