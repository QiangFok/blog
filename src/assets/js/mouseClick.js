onload = function () {
  var click_cnt = 0;
  var content = ['契而不舍', '人定胜天', '有志竟成', '更进一步', '学而不倦', '自强不息', '闻鸡起舞', '悬梁刺股', '磨杵作针', '前车之鉴', '大器晚成', '奋发图强', '精益求精', '笨鸟先飞', '发愤忘食', '水滴石穿', '学如不及', '山不转水转', '咸鱼翻身', '持之以恒', '勤能补拙', '投笔从戎'];
  var $html = document.getElementsByTagName("html")[0];
  var $body = document.getElementsByTagName("body")[0];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  $html.onclick = function (e) {
    var $elem = document.createElement("span");
    $elem.style.color = randomHexColor();
    $elem.style.zIndex = 9999;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    $elem.style.userSelect = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    if (click_cnt > content.length - 1) {
      click_cnt = 0
    }
    $elem.innerText = '👍 ' + content[click_cnt] + ' ❤';
    // 按序展示
    ++click_cnt;
    // 随机展示
    // click_cnt = getRandomInt(content.length);
    $elem.style.fontSize = Math.random() * 15 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function () {
      anim = setInterval(function () {
        if (++increase == 150) {
          clearInterval(anim);
          $body.removeChild($elem);
        }
        $elem.style.top = y - 20 - increase + "px";
        $elem.style.opacity = (150 - increase) / 120;
      }, 8);
    }, 70);
    $body.appendChild($elem);
  };
};

function randomHexColor() { //随机生成十六进制颜色
  let hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
  while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
    hex = '0' + hex;
  }
  return '#' + hex; //返回‘#'开头16进制颜色
}
