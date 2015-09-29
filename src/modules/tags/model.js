const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'tags',
  hasTimestamps: true,
  posts: function () {
    return this.belongsToMany(require('../posts/model'), 'posts_tags');
  }
};

const classProps = {
  typeName: 'tags',
  filters: {
    tag_id: function (qb, value) {
      return qb.whereIn('post_id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'posts'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
