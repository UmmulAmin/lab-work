document.addEventListener('DOMContentLoaded', function() {
    var list = document.getElementById('list');
    var addBtn = document.getElementById('add');
    var removeBtn = document.getElementById('remove');
    var itemInput = document.getElementById('item');
    var isYellow = false;
  
    addBtn.addEventListener('click', function() {
      var itemText = itemInput.value.trim();

      if (itemText !== '') {
        var itemWords = itemText.split(' ');
        var itemLi = document.createElement('li');
        
        itemLi.textContent = itemText;
        itemLi.style.backgroundColor = isYellow ? 'yellow' : 'white';
        isYellow = !isYellow;
  
        list.appendChild(itemLi);
        itemInput.value = '';
      }
    });
  
    removeBtn.addEventListener('click', function() {
      var itemText = itemInput.value.trim().toLowerCase();
      if (itemText !== '') {
        var items = list.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
          var currentItem = items[i];
          if (currentItem.textContent.toLowerCase() === itemText) {
            currentItem.parentNode.removeChild(currentItem);
            break;
          }
        }
        itemInput.value = '';
      }
    });
  });
  