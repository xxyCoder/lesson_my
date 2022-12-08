var hp = document.querySelector('.hp');
var info = document.querySelector('.info');

hp.addEventListener('mouseover',function() {
    info.style.display = 'block';
})
info.addEventListener('mouseover',function() {
    info.style.display = 'block';
})
info.addEventListener('mouseout',function() {
    info.style.display = 'none';
})