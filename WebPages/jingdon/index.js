var sl = document.querySelector('.shortcut_li');
var ddp = document.querySelector('.drop_down_layer');
var sa = document.querySelector('.shortcut_a1');
sl.addEventListener('mouseover',function() {
    ddp.style.display = 'block';
    sa.style.backgroundColor = '#fff';
})
sl.addEventListener('mouseout',function() {
    ddp.style.display = 'none';
    sa.style.backgroundColor = '#e3e4e5';
})

var sus = document.querySelector('.shorcut_ul2__show');
var ts = document.querySelector('.the_show');
sus.addEventListener('mouseover',function() {
    ts.style.display = 'block';
})
sus.addEventListener('mouseout',function() {
    ts.style.display = 'none';
})