const seq = require('../db_connect'),
      { STRING, INT } = require('../../configs/db_type')

const Course = seq.define('course', {
  cid: {
  	comment: 'Course ID',
  	type: INT,
  	allowNull: false,
  	unique: true
  },
  href: {
  	comment: 'Course detail page link',
  	type: STRING,
  	allowNull: false
  },
  posterUrl: {
  	comment: 'Course image url',
  	type: STRING,
  	allowNull: false
  },
  courseName: {
  	comment: 'Course name',
  	type: STRING,
  	allowNull: false
  },
  price: {
  	comment: 'Course price',
  	type: STRING,
  	allowNull: false
  },
  description: {
  	comment: 'Course description',
  	type: STRING,
  	allowNull: true
  },
  studentCount: { 
    comment: 'The count of the students who joined the course',
    type: INT,
    allowNull: false
  },
  field: {
  	comment: 'The course concerned the tab',
  	type: INT,
    defaultValue: 0,
  	allowNull: false
  },
  posterKey: {
  	comment: 'Qiniu course image name',
  	type: STRING,
  	allowNull: false
  },
  status: {
  	comment: 'Course status',
  	type: INT,
  	defaultValue: 1,
  	allowNull: false
  }
});

module.exports = Course;















