const logger = require('./winston');

const posts = [];

class SimpleController {
  async create(request, response) {
    posts.push({
      text: request.body.text,
    });

    logger.info('created new post');

    return response.status(201).send();
  }

  async index(request, response) {
    logger.info('listing all posts');
    return response.status(200).send(posts);
  }
}

module.exports = new SimpleController();
