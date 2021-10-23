$(document).ready(function () {
  Array.prototype.forEach.call(document.getElementsByTagName('button'), function(item) {
    item.addEventListener('mousedown', createRipple);
  });
  Array.prototype.forEach.call(document.getElementsByTagName('textarea'), function(item) {
    item.addEventListener('keyup', autoGrow);
  });
  if (navHide) navigationHide();
  else navigationShow();
  Array.prototype.forEach.call(document.getElementsByClassName('brand_cover'), function(item) {
    item.addEventListener('mousedown', nav_createRipple);
  });
  Array.prototype.forEach.call(document.getElementsByClassName('time_box'), function(item) {
    item.addEventListener('mousedown', nosc_createRipple);
  });
  Array.prototype.forEach.call($(".nav a"), function(item) {
    item.addEventListener('mousedown', nosc_createRipple);
  });
  setInterval(function () {
    if (document.getElementById('main')) document.getElementById('main').style.top = '20px';
  }, 100);
  setInterval(function () {
    if ($('body')[0] && $('#task_score_public')[0]) $('body')[0].style.backgroundColor = $('#task_score_public').css('background-color');
  }, 1000);
});

function offset(el, sc) {
    var rect = el.getBoundingClientRect(), scrollLeft = 0, scrollTop = 0;
    if (sc) {
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function nav_createRipple(e) {
  document.getElementById('navigation').appendChild(actualRipple(e, document.getElementById('navigation'), false));
}

function createRipple(e) {
  this.appendChild(actualRipple(e, this, true));
}

function nosc_createRipple(e) {
  this.appendChild(actualRipple(e, this, false));
}

function actualRipple(e, th, sc) {
  var circle = document.createElement('div');

  var radius = Math.max(th.clientWidth, th.clientHeight);
  circle.style.width = circle.style.height = radius + 'px';
  var off = offset(th, sc);
  circle.style.left = e.clientX - off.left - radius / 2 + 'px';
  circle.style.top = e.clientY - off.top - radius / 2 + 'px';
  circle.style.opacity = 0;

  circle.classList.add('ripple');
  return circle;
}

function autoGrow(e) {
  if (this.scrollHeight > this.clientHeight) this.style.height = this.scrollHeight + "px";
}

function includes(arr, entity) {
  for (var i = 0; i < arr.length; i++) if (arr[i] == entity) return true;
  return false;
}

var navHide = true;

function navigationSwap() {
  if (navHide) navigationShow(), navHide = false;
  else navigationHide(), navHide = true;
}

function navigationHide() {
  $(".navbar-inner>.container").css("left", "-320px");
  if ($(".time_countdown")[1]) {
    $(".time_countdown")[0].style.marginRight = "100px";
    $(".time_countdown")[1].style.marginRight = "0";
    $(".time_countdown")[1].style.fontSize = "18px";
  }
  if ($("#navbar-info")[0]) {
    $("#navbar-info")[0].style.marginLeft = "-100%";
  }
  $(".closeForm").css("display", "none");
  $(".openForm").css("display", "block");
}

function navigationShow() {
  $(".navbar-inner>.container").css("left", "0");
  if ($(".time_countdown")[1]) {
    $(".time_countdown")[0].style.marginRight = "50px";
    $(".time_countdown")[1].style.marginRight = "50px";
    $(".time_countdown")[1].style.fontSize = "24px";
  }
  if ($("#navbar-info")[0]) {
    $("#navbar-info")[0].style.marginLeft = "0";
  }
  $(".closeForm").css("display", "block");
  $(".openForm").css("display", "none");
}