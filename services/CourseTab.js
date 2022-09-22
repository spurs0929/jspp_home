const CourseTabModel = require('../db/models/coursetab');

class CourseTabService{
  async getCourseCategory(){
    return await CourseTabModel.findAll({
      attributes: {
        exclude: ['cid', 'createdAt', 'updatedAt']
      }
    });
  }
}

module.exports = new CourseTabService();