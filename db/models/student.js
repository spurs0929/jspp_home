const seq = require('../db_connect'),
      { STRING, INT, TEXT } = require('../../configs/db_type');

const Student = seq.define('student', {
  sid: {
  	comment: 'Student ID',
  	type: INT,
  	allowNull: false,
  	unique: true,
  },
  studentImg: {
  	comment: 'Student image url',
  	type: STRING,
  	allowNull: false
  },
  studentName: {
  	comment: 'Student name',
  	type: STRING,
  	allowNull: false
  },
  intro: {
  	comment: 'Student introduction',
  	type: TEXT,
  	allowNull: false
  },
  courseName: {
  	comment: 'The course name which student concerned',
  	type: STRING,
  	allowNull: false
  },
  courseLink: {
  	comment: 'This link of the course which the student concerned',
  	type: STRING,
  	allowNull: false
  },
  studentImgKey: {
  	comment: 'Qiniu student image name',
  	type: STRING,
  	allowNull: false
  },
  status: {
  	comment: 'Student status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Student;