button = document.getElementById('button')
div = document.getElementById('container')



button.addEventListener("click", function() {
    result = document.getElementById('input').value
    todo = document.createElement('p');
    delbut = document.createElement('button');
    delbut.textContent = 'X'
    todo.textContent = result 
    todo.style.cssText = 'padding-left:200px;width:300px;display:inline-block;'
    div.append(todo);
    div.append(delbut);
    delbut.addEventListener('click', function() {
        todo.remove();
        delbut.remove()
    })
});


