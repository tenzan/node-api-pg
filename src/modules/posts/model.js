const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'posts',
  hasTimestamps: true,
  tags: function () {
    return this.belongsToMany(require('../tags/model'), 'posts_tags');
  }
};

const classProps = {
  typeName: 'posts',
  filters: {
    tag_id: function (qb, value) {
      return qb.whereIn('tag_id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'tags'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
