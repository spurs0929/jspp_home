const CollectionModel = require('../db/models/collection'),
      { getCollectionCourseData } = require('./Course');

class CollectionService{
  async getCollectionData(){
    const result = await CollectionModel.findAll({
      raw: true,
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'createAt', 'updateAt']
      }
    });

    return result.map(async (item) => {
      item.courseIdList = item.courseIdList.split(',').map(item => parseInt(item));
      item.courseDataList = await getCollectionCourseData(item.courseIdList);
      return item;    
    });
  }
}      

module.exports = new CollectionService();