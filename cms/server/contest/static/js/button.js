$(document).ready(function () {
  Array.prototype.forEach.call(document.getElementsByTagName('button'), function(item) {
    item.addEventListener('mousedown', createRipple);
  });
  Array.prototype.forEach.call($('.dropdown-toggle'), function(item) {
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
    var curr = new Date().getTime();
    while (ripples.length > 0 && ripples[0].time + 1000 < curr) {
      ripples[0].remove();
      ripples.shift();
    }
  }, 100);
});

var ripples = [];

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
  circle.time = new Date().getTime();
  ripples.push(circle);
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
  $(".navbar-inner>.container").addClass("nav_hidden");
  $(".navbar-inner>.container").removeClass("nav_shown");
  $(".brand_cover").addClass("brand_hidden");
  if ($(".time_countdown")[0]) {
    $(".time_countdown")[0].style.marginRight = "0";
    $(".time_countdown")[0].style.fontSize = "18px";
  }
  if ($("#navbar-info")[0]) {
    $("#navbar-info")[0].style.opacity = "0";
  }
  $(".closeForm").css("display", "none");
  $(".openForm").css("display", "block");
}

function navigationShow() {
  $(".navbar-inner>.container").removeClass("nav_hidden");
  $(".navbar-inner>.container").addClass("nav_shown");
  $(".brand_cover").removeClass("brand_hidden");
  if ($(".time_countdown")[0]) {
    $(".time_countdown")[0].style.marginRight = "50px";
    $(".time_countdown")[0].style.fontSize = "24px";
  }
  if ($("#navbar-info")[0]) {
    $("#navbar-info")[0].style.opacity = "1";
  }
  $(".closeForm").css("display", "block");
  $(".openForm").css("display", "none");
}