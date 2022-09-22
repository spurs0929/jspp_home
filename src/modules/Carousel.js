import $ from 'jquery';

import { CAROUSEL } from '../config/config';
import { getTarget, getEventType } from '../utils/tools';

export default class Carousel {
  constructor(){
    this.$carousel = $('.J_carousel');
    this.$sliders = this.$carousel.find('.slider-item');
    this.$indicators = this.$carousel.find('.indicator-item');
  
    this.curIdx = 0;
  }

  // 初始化
  init(){
    CAROUSEL.autoplay && this.autoplay();
    this.bindEvent();
  }

  // 設置輪播圖是否自動播放
  autoplay(){
    Carousel.timer = setInterval(() => {
      this.setIndex('next');
    }, CAROUSEL.duration);
  }

  // 綁定事件處理函數
  bindEvent(){
    this.$carousel.on('mouseenter', $proxy(this.mouseInOut, this));
    this.$carousel.on('mouseleave', $proxy(this.mouseInOut, this));
    this.$carousel.on('click', $proxy(this.onCarouselClick, this));
  }

  // 滑鼠(進入/離開)輪播圖
  mouseInOut(ev){
    const tar = getTarget(ev),
          eventType = getEventType(ev);

    switch(eventType){
      case 'mouseenter': 
        clearInterval(Carousel.timer);
        break;
      case 'mouseleave':
        CAROUSEL.autoplay && this.autoplay();
        break;
      default:
        break;    
    }      
  }

  // 點擊輪播圖
  onCarouselClick(ev){
    const tar = getTarget(ev),
          className = tar.className;
    
    switch(className){
      case 'indicator-item':
        this.curIdx = $(tar).index();
        this.sliderAction(this.curIdx);
        break;
      case 'iconfont icon-arrow-right':
        this.setIndex('next');
        break;
      case 'iconfont icon-arrow-left':
        this.setIndex('prev');
        break;
      default: 
        break;      
    }       
  }

  // 輪播圖往(前/後)播放
  setIndex(direction){
    switch(direction){
      case 'next':
        this.curIdx = this.curIdx === this.$sliders.length - 1 
                    ? 0
                    : this.curIdx + 1;
      case 'prev':
        this.curIdx = this.curIdx === 0
                    ? this.$sliders.length -1
                    : this.curIdx - 1 
      default:
        break;                           
    }
  }

  sliderAction(index){
    this.$sliders.eq(index).fadeIn(300)
                 .siblings().fadeOut(300);

    this.$indicators.eq(index).addClass('current')
                    .siblings().removeClass('current');             
  }
}