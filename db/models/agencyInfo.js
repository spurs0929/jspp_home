const seq = require('../db_connect'),
      { STRING, INT } = require('../../configs/db_type');

const AgencyInfo = seq.define('agency_info', {
  logoUrl: {
    comment: 'Logo Image Url',
    type: STRING,
    allowNull: false
  },
  name: {
    comment: 'Agency name',
    type: STRING,
    allowNull: false
  },
  feedBackRate: {
    comment: 'FeedBack rate',
    type: INT,
    allowNull: false
  },
  StudentCount: {
    comment: 'Student total count',
    type: INT,
    allowNull: false
  },
  description: {
    comment: 'Agency slogan',
    type: STRING,
    allowNull: false
  },
  qqLink: {
    comment: 'QQ inform link',
    type: STRING,
    allowNull: false
  },
  logoKey: {
    comment: 'Qiniu logo image name',
    type: STRING,
    allowNull: false
  }
});

module.exports = AgencyInfo;