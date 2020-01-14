const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
  async store (request, response) {
    const {github_username, techs, latitude, longitude } = (request.body);
  
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
    const {name = login, avatar_url, bio }=(apiResponse.data);
    
    const techsArray = techs.split(',').map(tech => tech.trim());
  
    const location = {
      type: "Point",
      coordinates:[longitude, latitude],
    }
  
    const dev = await Dev.create({
      name,
      avatar_url,
      github_username,
       bio,
       techs:techsArray,
       location
    });
  
    return response.json(dev);
  }
};