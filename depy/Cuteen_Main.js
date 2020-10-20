
function PostUrlNewTab() {
  var domain = document.domain;
  $(`.wysiwyg a:not(a[href^="#"])`).each(function (i, item) {
    if ((!$(item).attr("target") || (!$(item).attr("target") == "" && !$(item).attr("target") == "_self"))) {
      if (item.host != domain) {
        $(item).attr("target", "_blank");
      }
    }
  })
}
function BackTOP() {
  $("#btn").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $("#btn").fadeIn(200);
      } else {
        $("#btn").fadeOut(200);
      }
    });
    $("#btn").click(function () {
      $('body,html').animate({
        scrollTop: 0
      },
        500);
      return false;
    });
  });
  $(function () {
    $("#say").click(function () {
      $('body,html').animate({
        scrollTop: $('html, body').get(0).scrollHeight
      },
        500);
      return false;
    });
  })
}

function CodeLine() {
  if (typeof Prism !== 'undefined') {
    var pres = document.getElementsByTagName('pre');
    for (var i = 0; i < pres.length; i++) {
      if (pres[i].getElementsByTagName('code').length > 0)
        pres[i].className = 'line-numbers';
    }
    Prism.highlightAll(true, null);
  }
}


function OwOEmoji() {
  if ($(".OwO").length > 0) {
    var OwO_demo = new OwO({
      logo: 'OωO表情',
      container: document.getElementsByClassName('OwO')[0],
      target: document.getElementsByClassName('OwO-textarea')[0],
      api: '/usr/themes/Cuteen/assets/owo/OwO_01.json',
      position: 'down',
      width: '100%',
      maxHeight: '250px'
    });
  }
}

function ImgLazyLoad() {
  $('img.lazyload').on('load', function () {
    this.style.opacity = 1;
  });
  $('img.lazyload').lazyload({
    threshold: 200
  });
}

function CuteenTabs() {
  $('.Cuteen_TABS').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  $('.Cuteen_TABS').on('click', 'li > a', function (event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      $('.Cuteen_TABS .is-open').removeClass('is-open').hide();
      $(this).next().toggleClass('is-open').toggle();
      $('.Cuteen_TABS').find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
}

function CuteenAcc() {
  if (!$(".Cuteen_Accordion").children().children().hasClass("Cuteen_Accordion_text")) {
    $(".Cuteen_Accordion").each(function () {
      //$(this).find("li").first().addClass("default open");
    });
  }
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var links = this.el.find('.link');
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }
    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this), $next = $this.next();
      $next.slideToggle(150, function () {
        $this.parent().toggleClass('open');
      });
      if (!e.data.multiple) {
        $el.find('.Cuteen_Accordion_Submenu').not($next).slideUp().parent().removeClass('open');
      };
    }
    var Cuteen_Accordion = new Accordion($('.Cuteen_Accordion'), false);
  });
}

function SiderMenu() {
  $('#simple-menu').sidr({
    timing: 'ease-in-out',
    side: 'right',
    displace: false,
    onOpen: function () {
      $("#RightDownBtn").addClass("toc1");
      $("body").addClass("tocopen");

    },
    onClose: function () {
      $("#RightDownBtn").removeClass("toc1");
      $("body").removeClass("tocopen");
    }
  });
  $('#mobile-menu').sidr({
    name: 'Nav_mobile',
    timing: 'ease-in-out',
    side: 'left',
    displace: false,
    onOpen: function () {
      $("body").addClass("tocopen");
    },
    onClose: function () {
      $("body").removeClass("tocopen");
    }
  });
}


function MainToc() {
  if ($("#simple-menu").length > 0) {
    var headerEl = 'h2,h3,h4,h5',
      content = '.wysiwyg';
    tocbot.init({
      tocSelector: '#MENU',
      contentSelector: content,
      headingSelector: headerEl,
      headingsOffset: -300
    });
  }
}

function isScrollTop() {
  return $(document).scrollTop() <= 60
}
$(function () {
  //初始化顶栏透明
  isScrollTop() ? addTopNav() : removeTopNav();
  //滚动顶栏透明
  $(window).scroll(function () {
    isScrollTop() ? addTopNav() : removeTopNav();
  });
  /**
   * 添加导航样式
   */

  function addTopNav() {
    $('#NAV').addClass('navbar-dark').removeClass('navbar-light');


  }

  /**
   * 移除导航样式
   */
  function removeTopNav() {
    $('#NAV').removeClass('navbar-dark').addClass('navbar-light');
  }
});

$(document).mouseup(function (e) {
  var container = $("#Nav_mobile");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $("#Nav_mobile").removeClass("close")
  }
});
$(document).ready(function () {
  $('.Nav_mobile_content_submenu').hide();
  $('.Nav_mobile_content_more a').click(function () {
    $('.Nav_mobile_content_more .Nav_mobile_content_submenu').slideToggle('fast');
  });
  $('.Nav_mobile_content_submenu a').prepend('<span class="Nav_mobile_content_submenu_arrow">&#10140;</span>');
});


function switchNightMode() {
  $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")), setTimeout(function() {
  var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
   (DarkMode == '0') ? ($("html").addClass("DarkMode"),document.cookie = "DarkMode=1;path=/",console.log('夜间模式开启'),$('#modeicon').attr("xlink:href", "#icon-sun")):($("html").removeClass("DarkMode"),document.cookie = "DarkMode=0;path=/",console.log('夜间模式关闭'),$('#modeicon').attr("xlink:href", "#icon-_moon"))
,setTimeout(function() {
    $(".Cuteen_DarkSky").fadeOut(1e3, function() {
      $(this).remove()
    })
  }, 2e3)
}),50}
function checkNightMode() {
  if ($("html").hasClass("n-f")) {
    $("html").removeClass("day");
    $("html").addClass("DarkMode");
    $('#modeicon').attr("xlink:href", "#icon-sun")
    return;
  }
  if ($("html").hasClass("d-f")) {
    $("html").removeClass("DarkMode");
    $("html").addClass("day");
    $('#modeicon').attr("xlink:href", "#icon-_moon")

    return;
  }
  if (document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
    if (new Date().getHours() !=123 ) {
      $("html").addClass("DarkMode");
      document.cookie = "DarkMode=1;path=/";
      console.log('夜间模式开启');
      $('#modeicon').attr("xlink:href", "#icon-sun")
    } else {
      $("html").removeClass("DarkMode");
      document.cookie = "DarkMode=0;path=/";
      console.log('夜间模式关闭');
      $('#modeicon').attr("xlink:href", "#icon-_moon")
    }
  } else {
    var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if (DarkMode == '0') {
      $("html").removeClass("DarkMode");
      $('#modeicon').attr("xlink:href", "#icon-_moon")
    } else if (DarkMode == '1') {
      $("html").addClass("DarkMode");
      $('#modeicon').attr("xlink:href", "#icon-sun")
    }
  }
}
function startSearch(usePjax = false) {
  var c = $("#search input").val();
  if (!c || c == "") {
    $("#search input").attr("placeholder", "你还没有输入任何信息");
    return;
  }
  var t = Cuteen_Config.SiteUrl + c;
  if (usePjax) {
    $.pjax({
      url: t,
      container: '#PjaxContent',
      fragment: '#PjaxContent',
      timeout: 8000,
    })
    $('#searchbox').iziModal('close')
  } else {
    window.open(t, "_self");
  }
}
/* ((function() {
  var callbacks = [],
      timeLimit = 50,
      open = false;
  setInterval(loop, 1);
  return {
      addListener: function(fn) {
          callbacks.push(fn);
      },
      cancleListenr: function(fn) {
          callbacks = callbacks.filter(function(v) {
              return v !== fn;
          });
      }
  }

  function loop() {
      var startTime = new Date();
      debugger;
      if (new Date() - startTime > timeLimit) {
          if (!open) {
              callbacks.forEach(function(fn) {
                  fn.call(null);
              });
          }
          open = true;
          window.stop();
          alert('大佬别扒了！');
          document.body.innerHTML = "";
      } else {
          open = false;
      }
  }
})()).addListener(function() {
  window.location.reload();
}); */



PostUrlNewTab();
BackTOP();
CodeLine();
OwOEmoji();
ImgLazyLoad();
CuteenTabs();
CuteenAcc();
SiderMenu();
MainToc();
checkNightMode();

