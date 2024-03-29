$(function () {
  /*-----------------------------------*/
  ///////////// fix iOS bug /////////////
  /*-----------------------------------*/
  document.documentElement.addEventListener(
    'gesturestart',
    function (event) {
      event.preventDefault();
    },
    false
  );
  /*-----------------------------------*/
  ///////////////// 變數 ////////////////
  /*-----------------------------------*/
  var _window = $(window),
    ww = _window.outerWidth(),
    wh = _window.height(),
    _body = $('body'),
    wwNormal = 1200,
    wwMedium = 992,
    wwSmall = 768,
    wwxs = 576;
  /*-----------------------------------*/
  //////////// nojs 先移除////////////////
  /*-----------------------------------*/
  $('html').removeClass('no-js');
  /*-----------------------------------*/
  //////////// line版////////////////
  /*-----------------------------------*/
  if (location.href.indexOf('line') > -1) {
    $('.wrapper').addClass('line');
  }
  /*-----------------------------------*/
  //////////// nav如果有兩個選單///////////
  /*-----------------------------------*/
  var _navLength = $('.navigation ul').length;
  $(window).bind('load', function (event) {
    if (_navLength > 1) {
      $('.navigation ul:nth-child(1)').addClass('left_nav');
    }
  });
  /*-----------------------------------*/
  /////// header選單 tab及 fix設定////////
  /*-----------------------------------*/
  var _menu = $('.header .menu');
  var _mystudymenu = $('.maincolumn .mystudymenu');
  _menu.find('li').has('ul').addClass('hasChild');
  _mystudymenu.find('li').has('ul').addClass('hasChild');
  var liHasChild = _menu.find('li.hasChild');
  var subMenuWidth = liHasChild.first().children('ul').outerWidth();
  /*-----------------------------------*/
  ////////////// 行動版選單切換////////////
  /*-----------------------------------*/
  // $('body').prepend('<aside class="sidebar"><div class="m_area"><button type="button" class="sidebarClose">關閉</button></div><div class="menu_overlay"></div></aside>');
  // $('header .container').prepend('<button type="button" class="sidebarCtrl">側欄選單</button><button type="button" class="searchCtrl">查詢</button>');
  // $('header .container').prepend('<button type="button" class="sidebarCtrl">側欄選單</button>');
  var menu_status = false;
  var _sidebar = $('.sidebar'),
    _search = $('.search'),
    _nav = $('.navigation'),
    _sidebarClose = $('.sidebarClose'),
    _sidebarCtrl = $('.sidebarCtrl'),
    _overlay = $('.menu_overlay');
  _language = $('.language');
  // _login=$('.login');
  _menu = $('.menu');
  _mArea = $('.m_area');
  // _sidebarCtrl.append('<span></span><span></span><span></span>');
  var search_mode = false;
  // 打開選單 function
  function showSidebar() {
    _sidebar.show();
    _mArea.show();
    _mArea.animate(
      {
        'margin-left': 0,
      },
      500,
      'easeOutQuint'
    );
    $('body').addClass('noscroll');
    _overlay.fadeIn();
    $('.m_search').hide();
    search_mode = false;
    _overlay.off('touchmove');
  }
  // 縮合選單 function
  function hideSidebar() {
    _mArea.animate({ 'margin-left': _mArea.width() * -1 + 'px' }, 500, 'easeOutQuint', function () {
      _sidebar.fadeOut(200);
      _mArea.hide();
    });
    $('body').removeClass('noscroll');
    _overlay.fadeOut();
    liHasChild.children('ul').hide();
  }
  // 打開選單動作
  _sidebarCtrl.click(function (e) {
    showSidebar();
    e.preventDefault();
  });
  // 關閉動作
  _overlay
    .add(_sidebarClose)
    .off()
    .click(function () {
      hideSidebar();
    });
  _overlay.off('mouseenter');
  // 無障礙tab設定
  liHasChild.keyup(function () {
    $(this).children('ul').fadeIn();
    $(this)
      .siblings()
      .focus(function () {
        $(this).hide();
      });
  });
  _menu.find('li').keyup(function () {
    $(this).siblings().children('ul').hide();
  });
  _menu.find('li:last>a').focusout(function () {
    _menu.find('li ul').hide();
  });

  function mobileMenu() {
    // switch PC/MOBILE
    ww = _window.outerWidth();
    if (ww < wwSmall) {
      /*-----------------------------------*/
      /////////////// 手機版設定 /////////////
      /*-----------------------------------*/
      menu_status = false;
      _sidebar.hide();
      _overlay.hide();
      // _nav.prependTo(_mArea);
      // _language.prependTo(_mArea);
      // _menu.prependTo(_mArea);
      // _search.prependTo(_body);
      // _search.addClass('m_search');
      _mArea.css({
        'margin-left': _mArea.width() * -1 + 'px',
      });
      liHasChild.on({
        mouseenter: function () {
          $(this).children('ul').stop(true, true).slideDown('600', 'easeOutQuint');
        },
        mouseleave: function () {
          $(this).parent().siblings('ul').hide();
          $(this).children('ul').stop(true, true).slideUp('600', 'easeOutQuint');
        },
      });
      // 副選單點出
      liHasChild.off().on('mouseenter,mouseleave');
      liHasChild.on('touchstart', function () {
        $(this).off('mouseenter,mouseleave');
      });
      liHasChild.off().on('click', function (e) {
        $(this).siblings('li').children('ul').stop(true, true).slideUp('600', 'easeOutQuint');
        $(this).children('ul').stop(true, true).slideToggle('600', 'easeOutQuint');
        // $(this).prop('disabled', true);
        e.preventDefault();
      });
      // 行動版查詢
      var _searchCtrl = $('.searchCtrl');
      $('.m_search').hide();
      _searchCtrl.off().on('click', function (e) {
        if (!search_mode) {
          $('.m_search').stop(true, false).slideDown('400', 'easeOutQuint');
          search_mode = true;
        } else {
          $('.m_search').hide();
          search_mode = false;
        }
      });
      // 如果點在外面
      $('.main')
        .off()
        .on('click touchend', function (e) {
          $('.m_search').hide();
          search_mode = false;
        });
      //縮限查詢範圍
      $(window).on('load scroll resize', function (e) {
        $('.mainleftcontent').removeClass('fixed');
      });
      $('.mainleftcontent').removeClass('fixed');
      $('.mainleftblock').css('position', 'fixed');
      $('.mainleftblock').css('left', '-100%');
      $('.limit_range').click(function () {
        $('.mainleftblock').css('display', 'block');
        $('.mainleftblock').css('left', '0');
        $('body').addClass('fix');
      });
      $('.mainleftblock .close').click(function () {
        $('.mainleftblock').css('left', '-100%');
        $('body').removeClass('fix');
      });
      //進階查詢
      // $('.advanced_search').css('position', 'fixed');
      // $('.advanced_search').css('display', 'none');
      // $('.advancedbtn').click(function() {
      //     $('.advanced_search').css('display', 'block');
      //     $('.advanced_search').css('left', '0');
      //     $('body').addClass('fix');
      // })
      // $('.advanced_search .close').click(function() {
      //     $('.advanced_search').css('left', '-100%');
      //     $('body').removeClass('fix');
      // })
      //詳目頁table包table
      $('.bookplace_list .open_innertable').click(function () {
        $(this).parent().parent('tr').next('tr').children('.innertable').css('display', 'block');
      });
    } else {
      /*-----------------------------------*/
      /////////////// PC版設定 /////////////
      /*-----------------------------------*/
      hideSidebar();
      $('body').removeClass('noscroll');
      // _nav.prependTo('.header .container ');
      // _language.appendTo('.header .navigation');
      // _login.appendTo('.header .navigation');
      // _search.appendTo('.header .container');
      // _menu.appendTo('.header .container');
      _search.removeClass('m_search');
      _search.show();
      // 副選單滑出
      liHasChild.on({
        mouseenter: function () {
          $(this).children('ul').stop(true, false).fadeIn();
        },
        mouseleave: function () {
          $(this).parent().siblings('ul').hide();
          $(this).children('ul').stop(true, false).fadeOut();
        },
      });
      // 如果點在外面
      $(document).on('touchend click', function (e) {
        var target = e.target;
        if (!$(target).is('.menu li a')) {
          $('.menu').find('li ul').hide();
        }
      });
      // 點外面關閉
      $(document).on('touchend click', function (e) {
        var container = $(
          '.language >a, .language ul li a, .form_search, .prompt3, .prompt_btn, .member_pic, .optionblock .option_01 .name, .bookplace_list, .prompt, .prompt2, .open_innertable, .shelf_btn, .addtag .addinput, .lightboxstyle .editlabeldata .editlabel, .file_download ul li a.directions_icon, .related_linksblock ul li a.directions_icon'
        );
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $('.language ul, .recent_searches, .prompt_block3, .promptblock, .member_data, .optionblock .option_01 .option_list, .prompt_block, .prompt_block2, .shelf_block').slideUp();
          $('.bookplace_list .innertable').slideUp(0);
          $('.prompt, .prompt2, .shelf_btn').removeClass('arrow');
          $('.bookplace_list td').removeClass('active');
          $('.open_innertable').removeClass('active');
          $('.addtag .addoption ').slideUp(0);
          $('.lightboxstyle .editlabeldata .addoption ').slideUp(0);
          $('.file_download ul li .valuedata').fadeOut(0);
          $('.related_linksblock ul li .valuedata').fadeOut(0);
        }
      });
      //縮限查詢範圍
      $('.mainleftblock').css('position', 'relative');
      $('.mainleftblock').css('left', '0');
      $('.mainleftblock').show();
      //進階查詢資料
      $('.advancedbtn').click(function () {
        $('.form_advanced').stop().slideDown(700);
        $('.search_blockin .onlysearch').hide();
        $('.search_blockin .onlysearchin').show();
      });
      $('.simplebtn').click(function () {
        $('.form_advanced').stop().slideUp(700);
        $('.search_blockin .onlysearch').show();
        $('.search_blockin .onlysearchin').hide();
      });
      $('.bookplace_list .open_innertable').click(function () {
        $(this).parent().parent('tr').next('tr').children('.innertable').css('display', 'table-cell');
      });
    }
  }
  //設定resize 計時器
  var resizeTimer;
  _window.bind('load resize', function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      mobileMenu();
    }, 100);
  });
  mobileMenu();
  // 固定版頭
  // var hh = $('.header').outerHeight(true),
  //     menuH = _menu.outerHeight(),
  //     navH = $('.navbar').height();
  // $(window).bind("load scroll resize", function(e) {
  //     ww = _window.outerWidth();
  //     if (ww >= wwSmall && $(this).scrollTop() > 0) {
  //         $('.header').addClass('fixed');
  //         $('.header').css('margin-top', 0);
  //         $('.main').css('margin-top', hh);
  //     } else {
  //         $('.header').removeClass('fixed');
  //         $('.header').css('margin-top', 0);
  //         $('.main').css('margin-top', 0);
  //     }
  // });
  /*-----------------------------------*/
  //////////// notice訊息區塊 ////////////
  /*-----------------------------------*/
  $('[class*="notice"] a.close').click(function (e) {
    $(this).parent('[class*="notice"]').hide();
  });
  /*-----------------------------------*/
  //////////// Accordion設定 ////////////
  /*-----------------------------------*/
  $('.accordion').each(function () {
    $(this).find('.accordion-content').hide();
    var _accordionItem = $(this).children('ul').children('li').children('a');
    _accordionItem.each(function () {
      $(this).click(function (e) {
        $(this).parent('li').siblings().children('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideToggle();
        e.preventDefault();
      });
    });
  });
  /*-----------------------------------*/
  /////////////fatfooter開關/////////////
  /*-----------------------------------*/
  $('.btn-fatfooter').click(function (e) {
    $(this)
      .parent('.container')
      .find('nav>ul>li>ul')
      .stop(true, true)
      .slideToggle(function () {
        if ($(this).is(':visible')) {
          $('.btn-fatfooter').html('收合');
          $('.btn-fatfooter').attr('name', '收合選單');
        } else {
          $('.btn-fatfooter').html('展開');
          $('.btn-fatfooter').attr('name', '展開選單');
        }
      });
    $(this).stop(true, true).toggleClass('close');
  });
  /*-----------------------------------*/
  ////////img objectfix cover////////////
  /*-----------------------------------*/
  $(window).bind('resize load', function (e) {
    $('.imgOuter').each(function (index, el) {
      var _imgContainer = $(this),
        cWidth = _imgContainer.width(),
        cHeight = _imgContainer.height(),
        ratioC = cWidth / cHeight,
        _img = _imgContainer.find('img');
      var iWidth = $(this).find('img').width(),
        iHeight = $(this).find('img').height(),
        ratioImg = iWidth / iHeight,
        scaleRatio;
      if (ratioC > ratioImg) {
        scaleRatio = cWidth / iWidth;
        _img
          .width(cWidth)
          .height(iHeight * scaleRatio)
          .css('top', -0.5 * (iHeight * scaleRatio - cHeight));
      } else {
        scaleRatio = cHeight / iHeight;
        _img
          .height(cHeight)
          .width(iWidth * scaleRatio)
          .css('left', -0.5 * (iWidth * scaleRatio - cWidth));
      }
      $(this).find('img').removeClass('img-responsive');
    });
  });
  /*-----------------------------------*/
  //////////////相簿縮圖+燈箱//////////////
  /*-----------------------------------*/
  //縮圖，same as thumbnail模組
  $(window).bind('resize load', function (e) {
    $('.imgOuter').each(function (index, el) {
      var _imgContainer = $(this),
        cWidth = _imgContainer.width(),
        cHeight = _imgContainer.height(),
        ratioC = cWidth / cHeight,
        _img = _imgContainer.find('img');
      var iWidth = $(this).find('img').width(),
        iHeight = $(this).find('img').height(),
        ratioImg = iWidth / iHeight,
        scaleRatio;
      if (ratioC > ratioImg) {
        scaleRatio = cWidth / iWidth;
        _img
          .width(cWidth)
          .height(iHeight * scaleRatio)
          .css('top', -0.5 * (iHeight * scaleRatio - cHeight));
      } else {
        scaleRatio = cHeight / iHeight;
        _img
          .height(cHeight)
          .width(iWidth * scaleRatio)
          .css('left', -0.5 * (iWidth * scaleRatio - cWidth));
      }
      $(this).find('img').removeClass('img-responsive');
    });
  });
  //相簿JQ設定
  var lightbox_Status = false;
  $('.gallery').append('<div class="lightbox"><a href="#" class="light_close">關閉</a><a href="#" class="light_prev">上一張</a><a href="#" class="light_next">下一張</a><img src="" alt=""><div class="galler_overlay"></div></div>');
  $('.gallery .lightbox').hide(); // lightbox先隱藏
  $('.light_close').click(function (event) {
    $('.gallery .lightbox').hide(); // 如果點到close，lightbox隱藏
    $('body').removeClass('noscroll');
    $('.gallery .lightbox .caption').html('');
    lightbox_Status = false;
  });
  $('.gallery .lightbox .galler_overlay').click(function (event) {
    $('.gallery .lightbox').hide(); // 如果點到overlay，lightbox隱藏
    $('body').removeClass('noscroll');
    $('.gallery .lightbox .caption').html('');
    lightbox_Status = false;
  });
  var PIC_SRC = $('.gallery .lightbox img').attr('src');
  // var THUMB_PIC = $(this).attr('src');
  var PIC_INDEX = 0;
  $('.gallery a').click(function (e) {
    e.preventDefault();
    lightbox_Status = true;
  });
  $('.gallery .thumbnail img').each(function (index) {
    $(this).click(function (e) {
      var THUMB_H3 = $(this).attr('alt');
      $('body').addClass('noscroll');
      $('.gallery .lightbox').append('<div class="caption">' + THUMB_H3 + '<div>');
      THUMB_PIC = $(this).attr('src');
      $('.gallery .lightbox img').attr('src', THUMB_PIC);
      $('.gallery .lightbox').fadeIn();
      $('.gallery .lightbox .galler_overlay').fadeIn();
      PIC_INDEX = index;
      e.preventDefault();
    });
  });
  //計算當頁縮圖數量
  var PIC_NUM = $('.gallery .thumbnail').length;
  // 下一張 function
  function NEXT_MOV() {
    //pic_index+1 如果小於 圖片數量
    if (PIC_INDEX + 1 < PIC_NUM) {
      //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
      PIC_INDEX++; //pic_index ++
      //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
    } else {
      PIC_INDEX = 0; //如果等於或大於圖片數量 pic_index =0 ，跳到第一張
    }
    THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
    THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
    $('.gallery .lightbox .caption').html(THUMB_H3);
    $('.gallery .lightbox img').hide();
    $('.gallery .lightbox img').fadeIn();
    $('.gallery .lightbox img').attr('src', THUMB_PIC);
    //放入燈箱 img src
  }
  $('.gallery .light_next').click(function (e) {
    NEXT_MOV();
    e.preventDefault();
  });
  // 上一張 function
  function PREV_MOV() {
    if (PIC_INDEX + 1 > 1) {
      //pic_index+1  如果大於 1
      //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
      PIC_INDEX--; //pic_index --
      //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
    } else {
      PIC_INDEX = PIC_NUM - 1; //如果等於或小於圖片數量 pic_index =圖片數量-1 ，跳到最後一張
    }
    //取縮圖 img src
    THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
    THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
    $('.gallery .lightbox .caption').html(THUMB_H3);
    $('.gallery .lightbox img').hide();
    $('.gallery .lightbox img').fadeIn();
    $('.gallery .lightbox img').attr('src', THUMB_PIC);
    //放入燈箱 img src
  }
  $('.gallery .light_prev').click(function (e) {
    PREV_MOV();
    e.preventDefault();
  });
  //左右按鍵移動
  if ((lightbox_Status = true)) {
    $('body').keydown(function (e) {
      if (e.keyCode == 37) {
        PREV_MOV();
      } else if (e.keyCode == 39) {
        NEXT_MOV();
      } else if (e.keyCode == 27) {
        $('.gallery .lightbox').hide();
      }
    });
  }
  /*-----------------------------------*/
  ////////////////多組Tab////////////////
  /*-----------------------------------*/
  $('html').removeClass('no-js');
  var resizeTimer1;
  _window.resize(function () {
    clearTimeout(resizeTimer1);
    resizeTimer1 = setTimeout(function () {
      ww = _window.outerWidth();
    }, 200);
  });
  $.fn.tabs = function (options) {
    var defaults = {
      tiGap: 10,
      selected: function () {},
    };

    function resize() {
      var _tab = $(this),
        _tabItem = _tab.find('.tabItem'),
        _tabItemA = _tabItem.children('a'),
        _tabContent = _tab.find('.tabContent'),
        tabwidth = _tab.width(),
        tabItemHeight = _tabItem.outerHeight(),
        tabContentHeight = _tab.find('.active').next().innerHeight(),
        tiGap = defaults.tiGap,
        tabItemLength = _tabItem.length,
        tabItemWidth;
      _tab.find('.active').next('.tabContent').show();
      if (ww > wwSmall) {
        _tabContent.css('top', tabItemHeight);
        _tab.height(tabContentHeight + tabItemHeight);
        tabItemWidth = (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
        _tabItem.width(tabItemWidth).css('margin-left', tiGap);
        _tabItem.first().css('margin-left', 0);
        _tabItem
          .last()
          .css({ position: 'absolute', top: 0, right: 0 })
          .width(tabItemWidth + 1);
      } else {
        _tab.css('height', 'auto');
        _tabItem.width(tabwidth);
        _tabItem.css('margin-left', 0).last().css('position', 'relative');
      }
    }
    return this.each(function () {
      var option = $.extend(defaults, options);
      var _tab = $(this),
        _tabItem = _tab.find('.tabItem'),
        _tabItemA = _tabItem.children('a'),
        _tabContent = _tab.find('.tabContent'),
        tabwidth = _tab.width(),
        tabItemHeight = _tabItem.outerHeight(),
        tabContentHeight = _tab.find('.active').next().innerHeight(),
        tiGap = defaults.tiGap,
        tabItemLength = _tabItem.length,
        tabItemWidth;
      _tab.find('.active').next('.tabContent').show();
      if (ww > wwSmall) {
        _tabContent.css('top', tabItemHeight);
        _tab.height(tabContentHeight + tabItemHeight);
        tabItemWidth = (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
        _tabItem.width(tabItemWidth).css('margin-left', tiGap);
        _tabItem.first().css('margin-left', 0);
        _tabItem
          .last()
          .css({ position: 'absolute', top: 0, right: 0 })
          .width(tabItemWidth + 1);
      } else {
        _tab.css('height', 'auto');
        _tabItem.width(tabwidth);
        _tabItem.css('margin-left', 0).last().css('position', 'relative');
      }
      resize = $.proxy(resize, _tab);
      $(window).resize(resize);
      tabs = $.proxy(tabs, { tab: _tab, selected: option.selected });
      _tabItemA.focus(tabs);
      _tabItemA.click(tabs);
      _tabItemA.eq(0).click();

      function tabs(e) {
        var _tab = this.tab;
        var _tabItemNow = $(e.target).parent(),
          tvp = _tab.offset().top,
          tabItemHeight = _tabItemNow.outerHeight();
        (tabIndex = _tabItemNow.index() / 2), (scollDistance = tvp + tabItemHeight * tabIndex - hh);
        var _tabItem = _tab.find('.tabItem');
        _tabItem.removeClass('active');
        _tabItemNow.addClass('active');
        if (ww <= wwSmall) {
          _tabItem.not('.active').next().slideUp();
          _tabItemNow.next().slideDown();
          this.selected.call(null, _tab, _tabItemNow, _tabItemNow.next());
          $('html,body').stop(true, false).animate({ scrollTop: scollDistance });
        } else {
          _tabItem.not('.active').next().hide();
          _tabItemNow.next().show();
          this.selected.call(null, _tab, _tabItemNow, _tabItemNow.next());
          tabContentHeight = _tabItemNow.next().innerHeight();
          _tab.height(tabContentHeight + tabItemHeight);
        }
        e.preventDefault();
      }
    });
  };
  /*-----------------------------------*/
  ///////////////置頂go to top////////////
  /*-----------------------------------*/
  $(window).bind('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  /*-----------------------------------*/
  /////click event to scroll to top//////
  /*-----------------------------------*/
  $('.scrollToTop')
    .off()
    .click(function (e) {
      $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
      // $('a.goCenter').focus(); //加入這行
      e.preventDefault();
    });
  $('.scrollToTop').keydown(function (e) {
    $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
    _body.find('a.goCenter').focus();
    e.preventDefault();
  });
  /*--------------------------------------------------------*/
  /////設定img 在IE9+ SAFARI FIREFOX CHROME 可以object-fit/////
  /*--------------------------------------------------------*/
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);
  if (ie) {
    $('.img-container').each(function () {
      var imgUrl = $(this).children('a').children('img').attr('src');
      var $container = $(this);
      $(this).has('.cover').find('a').addClass('ie-object-cover');
      $(this)
        .has('.cover')
        .find('a')
        .css('backgroundImage', 'url(' + imgUrl + ')');
      $(this).has('.fill').find('a').addClass('ie-object-fill');
      $(this)
        .has('.fill')
        .find('a')
        .css('backgroundImage', 'url(' + imgUrl + ')');
      $(this).has('.contain').find('a').addClass('ie-object-contain');
      $(this)
        .has('.contain')
        .find('a')
        .css('backgroundImage', 'url(' + imgUrl + ')');
    });
  }
  /*-----------------------------*/
  /////form表單 placeholder隱藏/////
  /*-----------------------------*/
  $('input,textarea').focus(function () {
    $(this).removeAttr('placeholder');
  });
  /*------------------------------------*/
  /////form表單 單個檔案上傳+多個檔案上傳/////
  /*------------------------------------*/
  $(document).on('change', '.check_file', function () {
    var names = [];
    var length = $(this).get(0).files.length;
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      names.push($(this).get(0).files[i].name);
    }
    // $('input[name=file]').val(names);
    if (length > 2) {
      var fileName = names.join(', ');
      $(this)
        .closest('.upload_grp')
        .find('.upload_file')
        .attr('value', length + ' files selected');
    } else {
      $(this).closest('.upload_grp').find('.upload_file').attr('value', names);
    }
  });
  /*-----------------------------------*/
  /////////// 無障礙快捷鍵盤組合  //////////
  /*-----------------------------------*/
  $(document).on('keydown', function (e) {
    // alt+S 查詢
    if (e.altKey && e.keyCode == 83) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('.search').find('input[type="text"]').focus();
    }
    // alt+U header
    if (e.altKey && e.keyCode == 85) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('header').find('.accesskey').focus();
    }
    // alt+C 主要內容區
    if (e.altKey && e.keyCode == 67) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top - 70 }, 800, 'easeOutExpo');
      $('.main').find('.accesskey').focus();
    }
    // alt+Z fatfooter
    if (e.altKey && e.keyCode == 90) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.fatfooter').find('.accesskey').offset().top }, 800, 'easeOutExpo');
      $('.fatfooter').find('.accesskey').focus();
    }
  });
  //無障礙切換slick箭頭語系
  if ($('html')[0].hasAttribute('lang')) {
    var weblang = $('html').attr('lang');
    if (weblang.substring(0, 2) == 'zh') {
      $('.slick-prev').attr('title', '上一筆');
      $('.slick-next').attr('title', '下一筆');
    } else if (weblang.substring(0, 2) !== 'zh') {
      $('.slick-prev').attr('title', 'previous');
      $('.slick-next').attr('title', 'next');
    }
  }
  // 無障礙錨點切換語系，更改accesskey的title名稱
  var weblang = $('html').attr('lang');
  if (weblang.substring(0, 2) == 'zh') {
    $('header').find('.accesskey').attr('title', '上方功能區塊');
    $('.main').find('.accesskey').attr('title', '中央內容區塊');
    $('footer').find('.accesskey').attr('title', '下方功能區塊');
    $('.search').find('.accesskey').attr('title', '關鍵字搜尋：文章關鍵字搜尋');
  } else if (weblang.substring(0, 2) !== 'zh') {
    $('header').find('.accesskey').attr('title', 'header');
    $('.main').find('.accesskey').attr('title', 'content');
    $('footer').find('.accesskey').attr('title', 'footer');
    $('.search').find('.accesskey').attr('title', 'search');
  }
  /*------------------------------------*/
  /////gotoCenter on focus跳到 content/////
  /*------------------------------------*/
  $('a.goCenter').keydown(function (e) {
    if (e.which == 13) {
      $('#aC').focus();
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top - 70 }, 800, 'easeOutExpo');
    }
  });
  /*------------------------------------*/
  /////////////字型大小 font-size//////////
  /*------------------------------------*/
  $('.font_size')
    .find('.small')
    .click(function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('body').removeClass('large_size').addClass('small_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'small', 356);
    });
  $('.font_size')
    .find('.medium')
    .click(function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('body').removeClass('large_size small_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'medium', 356);
    });
  $('.font_size')
    .find('.large')
    .click(function (e) {
      $(this).parent('li').siblings('li').find('a').removeClass('active');
      $('body').removeClass('small_size').addClass('large_size');
      $(this).blur().addClass('active');
      e.preventDefault();
      createCookie('FontSize', 'large', 356);
    });

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = '; expires=' + date.toGMTString();
    } else expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  window.onload = function (e) {
    var cookie = readCookie('FontSize');
    //alert('cookie='+cookie);
    if (cookie == 'small') {
      //$('.font_size').find('.small').click();
      $('.font_size').find('.small').parent('li').siblings('li').find('a').removeClass('active');
      $('body').removeClass('large_size medium_size').addClass('small_size');
      $('.font_size').find('.small').addClass('active');
      e.preventDefault();
    } else {
      if (cookie == 'large') {
        //$('.font_size').find('.large').click();
        $('.font_size').find('.large').parent('li').siblings('li').find('a').removeClass('active');
        $('body').removeClass('small_size medium_size').addClass('large_size');
        $('.font_size').find('.large').addClass('active');
        e.preventDefault();
      } else {
        //這裡是預設宣告
        //$('.font_size').find('.medium').click();
        $('.font_size').find('.medium').parent('li').siblings('li').find('a').removeClass('active');
        $('body').removeClass('large_size small_size');
        $('.font_size').find('.medium').addClass('active');
        e.preventDefault();
      }
    }
  };
});
