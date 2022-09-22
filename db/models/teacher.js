const seq = require('../db_connect'),
      { STRING, INT, TEXT } = require('../../configs/db_type');

const Teacher = seq.define('teacher', {
  tid: {
  	comment: 'Teacher ID',
  	type: INT,
  	allowNull: false,
  	unique: true
  },
  href: {
  	comment: 'The link to teacher detail page',
  	type: STRING,
  	allowNull: false
  },
  teacherName: {
  	comment: 'Teacher name',
  	type: STRING,
  	allowNull: false
  },
  teacherImg: {
  	comment: 'Teacher image url',
  	type: STRING,
  	allowNull: false
  },
  courseCount: {
  	comment: 'Course count of the teacher',
  	type: INT,
  	allowNull: false
  },
  studentCount: {
  	comment: 'Student count of the teacher',
  	type: INT,
  	allowNull: false
  },
  intro: {
  	comment: 'Teacher introduction',
  	type: TEXT,
  	allowNull: false
  },
  teacherImgKey: {
  	comment: 'Qiniu teacher image name',
  	type: STRING,
  	allowNull: false
  },
  isStar: {
    comment: 'Is the teacher a star teacher?',
    type: INT,
    defaultValue: 0,
    allowNull: false
  },
  status: {
    comment: 'Teacher status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Teacher;
