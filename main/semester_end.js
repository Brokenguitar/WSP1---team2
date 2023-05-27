function semesterEnd() {
  let now = new Date();
  let end = new Date('June 21, ' + now.getFullYear());
  let diff = end - now;
  
  let ms = Math.floor(diff % 1000);
  diff /= 1000;
  
  let sec = Math.floor(diff % 60);
  diff /= 60;
  
  let min = Math.floor(diff % 60);
  diff /= 60;

  let hr = Math.floor(diff % 24);
  diff /= 24;

  let day = Math.floor(diff);
  
  let string = '종강까지 ' + day + '일 ' + hr + '시간 ' + min + '분 ' + sec + '초 ' + ' 남았습니다.';

  document.getElementById('remaining').innerHTML = string;
  setTimeout(semesterEnd, 1000);
}


window.onload = function() {
  semesterEnd();
};