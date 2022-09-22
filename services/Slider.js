const SliderModel = require('../db/models/slider');

class SliderService{
  async getSliderData(){
    return await SliderModel.findAll({
      where: { status: 1 },
      attributes: {
        excludeL: ['cid', 'imgUrl']
      }
    });
  }
}

module.exports = new SliderService();