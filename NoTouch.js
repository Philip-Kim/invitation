window.oncontextmenu = function(event) {
  event.preventDefault(); // 기본 태그 기능 막기
  event.stopPropagation(); // 이벤트 전달 막기
  return false;
};