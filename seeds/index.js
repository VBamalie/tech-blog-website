const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedPosts = require('./galleryData');
const seedComments = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
