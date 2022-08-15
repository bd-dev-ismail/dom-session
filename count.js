let count = 0;
document.getElementById('plus-btn').addEventListener('click', function(){
    count++;
    document.getElementById('count').innerText = count;
});
document.getElementById('minus-btn').addEventListener('click', function(){
    count--;
    document.getElementById('count').innerText = count;
});