const seq = require('../db_connect'),
      { STRING, INT } = require('../../configs/db_type');

const Collection = seq.define('collection',{
  cid: {
  	comment: 'Collection ID',
  	type: INT,
  	allowNull: false,
  	unique: true
  },
  title: {
  	comment: 'Collection title',
  	type: STRING,
  	allowNull: false
  },
  info: {
  	comment: 'Collection information',
  	type: STRING,
  	allowNull: false
  },
  qqQunLink: {
  	comment: 'The link to open QQ communication',
  	type: STRING,
  	allowNull: false
  },
  posterUrl: {
  	comment: 'Poster Image URL',
  	type: STRING,
  	allowNull: false
  },
  courseIdList: {
  	comment: 'The collection for containing course IDs',
    type: STRING,
    allowNull: false
  },
  posterKey: {
  	comment: 'Qiniu poster image name',
  	type: STRING,
  	allowNull: false
  },
  status: {
    comment: 'Collection status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Collection;