// 添加头像部分悬停出现其他元素
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
// 动态添加小圆点
var ul = document.querySelector('.circle');
var ol = document.querySelector('.pic');
var idx = 0,cnt = ol.children.length;
for(let i = 0;i < ol.children.length;++ i) {
    let li = document.createElement('li');
    li.setAttribute('index',i);
    ul.appendChild(li);
    li.addEventListener('click',function() {
        for(let i = 0;i < ul.children.length;++ i) {
            ul.children[i].className = '';
        }
        this.className = 'current';
        idx = this.getAttribute('index');
        ol.style.left = -idx * 720 + 'px';
    })
}
ul.children[0].className = "current";
// 添加点击事件
var back = document.querySelector('.back');
var front = document.querySelector('.front');
back.addEventListener('click',function() {
    for(let i = 0;i < ul.children.length;++ i) {
        ul.children[i].className = '';
    }
    ++ idx;
    idx = (idx + cnt) % cnt;
    ol.style.left = -idx * 720 + 'px';
    ul.children[idx].className = 'current';
})
front.addEventListener('click',function() {
    for(let i = 0;i < ul.children.length;++ i) {
        ul.children[i].className = '';
    }
    -- idx;
    idx = (idx + cnt) % cnt;
    ol.style.left = -idx * 720 + 'px';
    ul.children[idx].className = 'current';
})
// 自动播放
var timer = setInterval(function() {
    back.click();
},2000);