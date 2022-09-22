const seq = require('../db_connect'),
      { STRING, BIGINT } = require('../../configs/db_type');

const CourseTab = seq.define('course_tab', {
  cid: {
  	comment: 'Course category ID',
  	type: BIGINT,
  	allowNull: false,
  	unique: true
  },
  title: {
  	comment: 'Course tab item title text',
  	type: STRING,
  	allowNull: false
  }
});

module.exports = CourseTab;