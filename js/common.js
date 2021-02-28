function formatDate(date,format="YYYY-MM-DD HH:mm:ss"){
    return moment(date).format(format)
}
function startNProgress() {
NProgress.set(0.4); // 默认设置40% NProgress.set(0) 等价与 NProgress.start()
let interval = setInterval(function () {
    NProgress.inc(); // 以小量递增
}, 200)

$(window).on('load', () => {
    clearInterval(interval)
    NProgress.done()
})
}
// 开启网页加载的进度条
startNProgress();

// 动态获取所有的分类
async function loadCate(){
let data= await axios.get('/classify');
let liHtml=``;
// console.log(data);

data.forEach(({
name,
cat_id
})=>{
liHtml += `<li><a href='/examine.html?cat_id=${cat_id}'>${name}</a></li>`
})
$('#wrapCase').html(liHtml)
}
loadCate();