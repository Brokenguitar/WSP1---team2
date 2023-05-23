function searchSchedule() {
  var input = document.getElementById('searchInput').value; 
  var scheduleItems = document.querySelectorAll('.date div'); 

  scheduleItems.forEach(function(item) {
    var scheduleName = item.textContent;
    if (scheduleName.includes(input)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}