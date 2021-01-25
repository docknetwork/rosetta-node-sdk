const Controller = require('./Controller');

const eventsBlocks = async (request, response) => {
  await Controller.handleRequest(request, response);
};

module.exports = {
  eventsBlocks,
};
