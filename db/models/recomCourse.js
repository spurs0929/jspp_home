const seq = require('../db_connect'),
      { STRING, INT, DECIMAL } = require('../../configs/db_type');

const RecomCourse = seq.define('recom_course', {
  cid: {
    comment: 'Course ID',
    type: INT,
    allowNull: false,
    unique: true
  },
  href: {
    comment: 'Course detail page link',
    type: STRING,
    allowNull: false,
  },
  mainTitle: {
    comment: 'Page category title',
    type: STRING,
    allowNull: false,
  },
  title: {
    comment: 'Course name',
    type: STRING,
    allowNull: false,
  },
  posterUrl: {
    comment: 'Course poster image',
  	type: STRING,
  	allowNull: false,
  },
  description: {
    comment: 'Course description',
  	type: STRING,
  	allowNull: false,
  },
  teacherImg: {
    comment: 'Teacher Image',
  	type: STRING,
  	allowNull: false,
  },
  teacherName: {
    comment: 'Teacher name',
  	type: STRING,
  	allowNull: false
  },
  studentCount: {
    comment: 'Count of students who purchased this course',
  	type: INT,
  	allowNull: false
  },
  price: {
    comment: 'Course price',
  	type: DECIMAL,
  	allowNull: false
  },
  posterKey: {
    comment: 'qiniu course image name',
		type: STRING,
		allowNull: false
  },
  teacherImgKey: {
    comment: 'count of students who purchased this course',
  	type: STRING,
  	allowNull: false
  },
  status: {
    comment: 'course status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = RecomCourse;