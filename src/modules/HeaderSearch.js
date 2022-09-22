import { trimSpace } from '../utils/tools';

export default ($) => {
  const $headerSearch = $('.J_headerSearch'),
        $searchInput = $headerSearch.children('input'),
        $searchBtn = $headerSearch.children('button');

  // 初始化
  const init = () => {
    bindEvent();
  }      

  // 綁定事件處理函數
  function bindEvent(){
    $searchBtn.on('click', onSearchAction);
  }

  // 輸入關鍵字搜尋
  function onSearchAction(){
    const val = trimSpace($searchInput.val());

    if(val.length === 0){
      return; 
    }

    window.open('/list/' + val);
    $searchInput.val('');
  }

  return {
    init
  }
} 