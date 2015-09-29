const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'posts',
  hasTimestamps: true,
  tags: function () {
    return this.morphMany(require('../tags/model'), 'posts_tags');
  }
};

const classProps = {
  typeName: 'posts',
  filters: {
    tag_id: function (qb, value) {
      return qb.whereIn('tag_id', value);
    },
    title: function (qb, value) {
      return qb.whereIn('title', value);
    }
  },
  relations: [
    'tags'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
