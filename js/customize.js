//自行加入的JS請寫在這裡
$(function () {
  $('.singleSlider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'ease',
  });
  $('.adSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
    ],
  });
  //相關連結
  $('.related_links').slick({
    infinite: true,
    speed: 2000,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //新到圖書
  $('.newbooks').slick({
    infinite: true,
    speed: 2000,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //推薦書總覽
  $('.recommendbooks').slick({
    infinite: true,
    speed: 2000,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //推薦書總覽
  $('.recommendbooks2').slick({
    infinite: true,
    speed: 2000,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //書本更多分享
  $('.moreshareblock').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  //熱門排行書本更多分享
  $('.moreshareblock2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  //
  //匯出
  $('.bookexport').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //閱讀推薦
  $('.read_recommend').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //評論block
  $('.bookcomment').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //社群分享
  $('.communitywebsite').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //分類推薦
  $('.sortrecommend').slick({
    infinite: false,
    speed: 2000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //為您選書tab
  $('.bookselection_tab').slick({
    infinite: false,
    speed: 2000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //熱門排行
  $('.hotrankings').slick({
    infinite: false,
    speed: 2000,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //閱讀存摺
  $('.read_passbook_tab').slick({
    infinite: false,
    speed: 2000,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //tabs
  $('.tabs').tabs({
    tiGap: 10,
    selected: function (tab, item, content) {
      $('.themebook.slick-initialized').slick('unslick');
      var current = $(content).find('.themebook');
      if (!current.is('.slick-slider')) {
        current.slick({
          infinite: true,
          speed: 2000,
          autoplay: false,
          slidesToShow: 6,
          slidesToScroll: 6,
          dots: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
              },
            },
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }
    },
  });
  //
  //共讀書箱tab
  $('.readingbox_tab').slick({
    infinite: false,
    speed: 2000,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(function () {
  //選擇語言
  $('.language a').click(function () {
    $('.language ul').slideToggle(500);
    return false;
  });
  $('.language')
    .find('ul li:last>a')
    .focusout(function () {
      $('.language').find('ul').slideUp();
    });
});
// login登入
$(function () {
  $('.loginbtn').click(function () {
    $('.login_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.loginblock .close').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
});
// login登入確認
$(function () {
  $('.okbtn').click(function () {
    $('.login_lightbox').fadeOut();
    $('.choose_librarycard_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.loginblock .close').click(function () {
    $('.choose_librarycard_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.choose_librarycard_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
});
// qrcode
$(function () {
  $('.qrcode_mpbtn').click(function () {
    $('.qrcode_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.loginblock .close').click(function () {
    $('.qrcode_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.qrcode_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
});
// 查詢欄位
$(function () {
  $('.searchfield_btn').click(function () {
    $('.search_field_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.loginblock .close').click(function () {
    $('.search_field_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.search_field_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
});
//相關連結燈箱
// $(function() {
//     $('.ralated_all').click(function() {
//         $('.related_lightbox').fadeIn();
//         $('body').addClass('fix');
//     })
//     $('.relatedbox .close').click(function() {
//         $('.related_lightbox').fadeOut();
//         $('body').removeClass('fix');
//     })
//     $('.overlay').click(function() {
//         $('.related_lightbox').fadeOut();
//         $('body').removeClass('fix');
//     })
// })
//首頁相關連結燈箱
$(function () {
  $('.ralated_all').click(function () {
    $('.related_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.relatedboxmp .close').click(function () {
    $('.related_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.related_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
});
//分類燈箱
$(function () {
  $('.sortlist_more').click(function () {
    $('#sortstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#sortstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#sortstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //匯出
  $('.exportbth').click(function () {
    $('#exportstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#exportstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#exportstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //轉寄他人
  $('.forwardbtn').click(function () {
    $('#forwardstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#forwardstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#forwardstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //引用他人
  $('.referencebtn').click(function () {
    $('#referencestyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#referencestyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#referencestyle').fadeOut();
    $('body').removeClass('fix');
  });
  //永久連結
  $('.permanentbtn').click(function () {
    $('#permanentstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#permanentstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#permanentstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //跨館調閱
  $('#exchangebookbtn').click(function () {
    $('#exchangebookstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#exchangebookstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#exchangebookstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //申請跨館通閱
  $('#exchangebookbtn2').click(function () {
    $('#exchangebookstyle2').fadeIn();
    // $('#exchangebookstyle').fadeOut();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#exchangebookstyle2').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#exchangebookstyle2').fadeOut();
    $('body').removeClass('fix');
  });
  //書目預約
  $('#bookreservationbtn').click(function () {
    $('#bookreservationstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#bookreservationstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#bookreservationstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //檢視閱讀權限
  $('#read_permissionbtn').click(function () {
    $('#read_permissionstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#read_permissionstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#read_permissionstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //我要評分
  $('#scorebtn').click(function () {
    $('#scorestyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#scorestyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#scorestyle').fadeOut();
    $('body').removeClass('fix');
  });
  //我要推薦
  $('.recommend').click(function () {
    $('#recommendstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#recommendstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#recommendstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //清單下載
  $('.listdownloadbtn').click(function () {
    $('#listdownloadstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#listdownloadstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#listdownloadstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //檢索歷史詳細資訊
  $('.diversifiedbtn').click(function () {
    $('#diversifiedstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#diversifiedstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#diversifiedstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //標籤刪除
  $('.addtagdelbtn').click(function () {
    $('#addtagstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#addtagstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#addtagstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //我的書房排序按鈕
  $('.map_location_btn').click(function () {
    $('#map_location_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#map_location_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#map_location_style').fadeOut();
    $('body').removeClass('fix');
  });
  // 異常畫面
  // login登入確認
  $('.explain_btn').click(function () {
    $('#explain_linghtbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#explain_linghtbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#explain_linghtbox').fadeOut();
    $('body').removeClass('fix');
  });
  // 獎勵兌換條碼
  $('#reward_barcodebtn').click(function () {
    $('#reward_barcodestyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#reward_barcodestyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#reward_barcodestyle').fadeOut();
    $('body').removeClass('fix');
  });
  // 推薦書單
  $('.recommendbook_btn').click(function () {
    $('.recommendbook_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.loginblock .close').click(function () {
    $('.recommendbook_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('.recommendbook_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  // 選擇超商門市
  $('.order_btn').click(function () {
    $('#order_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#order_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#order_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  // 選擇銀行
  $('.bank_btn').click(function () {
    $('#bank_codestyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxbank_style_block .close').click(function () {
    $('#bank_codestyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#bank_codestyle').fadeOut();
    $('body').removeClass('fix');
  });
  // AIGPT更多資訊燈箱
  $('.AI_block .moreinformation').click(function () {
    $('#AIGPT_morestyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxbank_style_block .close').click(function () {
    $('#AIGPT_morestyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#AIGPT_morestyle').fadeOut();
    $('body').removeClass('fix');
  });
  // AIGPT探索相似書燈箱
  $('.similarbooks_btn').click(function () {
    $('#AIGPT_morestyle').fadeOut();
    $('#AIGPT_similarbooks').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxbank_style_block .close').click(function () {
    $('#AIGPT_similarbooks').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#AIGPT_similarbooks').fadeOut();
    $('body').removeClass('fix');
  });
  // SDG閱讀紀錄
  $('.sdg_readingbtn').click(function () {
    $('#sdg_readingstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#sdg_readingstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#sdg_readingstyle').fadeOut();
    $('body').removeClass('fix');
  });
  // 上傳付款證明
  $('.Proof_btn').click(function () {
    $('#prove_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#prove_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#prove_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  // SR
  $('.SR_btn').click(function () {
    $('#SR_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#SR_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#SR_style').fadeOut();
    $('body').removeClass('fix');
  });
  // 設備預約
  $('.equipment_reserve_btn').click(function () {
    $('#equipment_reserve_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#equipment_reserve_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#equipment_reserve_style').fadeOut();
    $('body').removeClass('fix');
  });
  // 我的書房編輯標籤
  $('.addtag_lightboxbtn').click(function () {
    $('#addtag_lightboxstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block>.close').click(function () {
    $('#addtag_lightboxstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#addtag_lightboxstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //書房頁籤
  $('.studybook_tabsbtn').click(function () {
    $('#studybook_tabsstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('#studybook_tabsstyle .close').click(function () {
    $('#studybook_tabsstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#studybook_tabsstyle').fadeOut();
    $('body').removeClass('fix');
  });
  //書房合作服務
  $('.service_list h2 .prompt_btn').click(function () {
    $('#servicelist_style').fadeIn();
    $('body').addClass('fix');
  });
  $('#servicelist_style .close').click(function () {
    $('#servicelist_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#servicelist_style').fadeOut();
    $('body').removeClass('fix');
  });
  // 行動項目
  $('#actionitemsl_btn').click(function () {
    $('#actionitemslstyle').fadeIn();
    $('body').addClass('fix');
    $('.sortrecommend').slick('refresh');
  });
  $('#actionitemslstyle .close').click(function () {
    $('#actionitemslstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#actionitemslstyle').fadeOut();
    $('body').removeClass('fix');
  });

  //項目選擇
  $('.itemselectbtn').click(function () {
    $('#itemselect_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#itemselect_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#itemselect_style').fadeOut();
    $('body').removeClass('fix');
  });

  //討論室時間預約
  $('.discussionroom_btn').click(function () {
    $('#discussionroom_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#discussionroom_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#discussionroom_style').fadeOut();
    $('body').removeClass('fix');
  });
  //討論室時間預約天
  $('.appointmentday_btn').click(function () {
    $('#discussionroom_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#discussionroom_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#discussionroom_style').fadeOut();
    $('body').removeClass('fix');
  });
  //討論室時間預約天_檢視預約
  $('.viewreserve_btn').click(function () {
    $('#discussionroom_style2').fadeIn();
    $('#discussionroom_style').fadeOut();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#discussionroom_style2').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#discussionroom_style2').fadeOut();
    $('body').removeClass('fix');
  });
  // 專屬書單燈箱
  $('.exclusivebook_btn').click(function () {
    $('#exclusivebookstyle').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#exclusivebookstyle').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#exclusivebookstyle').fadeOut();
    $('body').removeClass('fix');
  });
  // 待看清單燈箱
  $('.toseelist_btn').click(function () {
    $('#toseelist_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#toseelist_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#toseelist_style').fadeOut();
    $('body').removeClass('fix');
  });
  //加入日曆
  $('.addcalendar_btn').click(function () {
    $('#addcalendar_style').fadeIn();
    $('#itemselect_style').fadeOut();
    $('#discussionroom_style').fadeOut();
    $('#discussionroom_style2').fadeOut();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#addcalendar_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#addcalendar_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.lightboxstyle_block .closebtn').click(function () {
    $('#addcalendar_style').fadeOut();
    $('body').removeClass('fix');
  });

  //
  //書箱預約
  $('.bookboxreservation').click(function () {
    $('#sharedreadingbox_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#sharedreadingbox_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#sharedreadingbox_style').fadeOut();
    $('body').removeClass('fix');
  });
  //書箱預約 詳細資訊
  $('.sharedreadingbox_block .moreinformation').click(function () {
    $('#sharedreadingbox_style2').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#sharedreadingbox_style2').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#sharedreadingbox_style2').fadeOut();
    $('body').removeClass('fix');
  });

  // 專屬閱讀描述
  $('.describe_btn').click(function () {
    $('#describe_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#describe_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#describe_style').fadeOut();
    $('body').removeClass('fix');
  });

  // 同意書
  $('.Consent_btn').click(function () {
    $('#Consent_style').fadeIn();
    $('body').addClass('fix');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#Consent_style').fadeOut();
    $('body').removeClass('fix');
  });
  $('.overlay').click(function () {
    $('#Consent_style').fadeOut();
    $('body').removeClass('fix');
  });
});

// AI情境式找書
$('.AI_situational_btn').click(function () {
  $('.AI_situationalstyle').fadeIn();
  $('body').addClass('fix');
});
$('.AI_situationalstyle .close').click(function () {
  $('.AI_situationalstyle').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_situationalstyle').fadeOut();
  $('body').removeClass('fix');
});
//
$('.lightboxAI_situational .describe_block textarea').click(function () {
  $('.describe_block button.btn').addClass('btn-submit');
});

$('.describe_block button.voice').click(function () {
  $(this).stop().toggleClass('active');
});

// AI情境式找書＿查詢記錄
$('.lightboxAI_situational .query_records_btn a').click(function () {
  $('.AI_situationalstyle_records').fadeIn();
  $('.AI_situationalstyle').fadeOut();
  $('body').addClass('fix');
});
$('.AI_situationalstyle_records .close').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('body').removeClass('fix');
});
//
$('.AI_situationalstyle_records .backbtn').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('.AI_situationalstyle').fadeIn();
  $('body').addClass('fix');
});

// AI延伸情境
$('.query_context_block .contextbtn_group .extend').click(function () {
  $('.AI_extendstyle').fadeIn();
  $('body').addClass('fix');
});
$('.AI_extendstyle .close').click(function () {
  $('.AI_extendstyle').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_extendstyle').fadeOut();
  $('body').removeClass('fix');
});
// AI編輯情境
$(' .query_context_block .contextbtn_group .edit').click(function () {
  $('.AI_editstyle').fadeIn();
  $('body').addClass('fix');
});
$('.AI_editstyle .close').click(function () {
  $('.AI_editstyle').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_editstyle').fadeOut();
  $('body').removeClass('fix');
});

// AI編輯情境＿查詢記錄
$('.AI_editstyle .lightboxAI_situational .query_records_btn a').click(function () {
  $('.AI_situationalstyle_records').fadeIn();
  $('.AI_editstyle').fadeOut();
  $('body').addClass('fix');
});
$('.AI_situationalstyle_records .close').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('body').removeClass('fix');
});
//
$('.AI_situationalstyle_records .backbtn').click(function () {
  $('.AI_situationalstyle_records').fadeOut();
  $('.AI_editstyle').fadeIn();
  $('body').addClass('fix');
});

// 繼續查別情境展開

// AI情境式找書
$('.continue_search_group .expand_block .expandbtn').click(function () {
  $('.AI_situationalstyle').fadeIn();
  $('body').addClass('fix');
});
$('.AI_situationalstyle .close').click(function () {
  $('.AI_situationalstyle').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('.AI_situationalstyle').fadeOut();
  $('body').removeClass('fix');
});

//獎勵清單我要兌換
$('.reward_lightboxbtn').click(function () {
  $('#reward_lightbox').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#reward_lightbox').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#reward_lightbox').fadeOut();
  $('body').removeClass('fix');
});

//獎勵清單累積點數
$('.mypoints2 .points_btn').click(function () {
  $('#points_style').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#points_style').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#points_style').fadeOut();
  $('body').removeClass('fix');
});
//即將到期點數
$('.mypoints2 .upcomingpoints_btn').click(function () {
  $('#upcomingpoints_style').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#upcomingpoints_style').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#upcomingpoints_style').fadeOut();
  $('body').removeClass('fix');
});

//點數確認視窗
$('.reward_list2 .pointsconfirm_btn').click(function () {
  $('#pointsconfirm_style').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#pointsconfirm_style').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#pointsconfirm_style').fadeOut();
  $('body').removeClass('fix');
});
//點數期限
$('.reward_list2 .points_theterm_btn').click(function () {
  $('#points_theterm_style').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#points_theterm_style').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#points_theterm_style').fadeOut();
  $('body').removeClass('fix');
});
// 提醒視窗
$('.reminder_window_btn').click(function () {
  $('#reminder_window_style').fadeIn();
  $('body').addClass('fix');
});
$('.lightboxstyle_block .close').click(function () {
  $('#reminder_window_style').fadeOut();
  $('body').removeClass('fix');
});
$('.overlay').click(function () {
  $('#reminder_window_style').fadeOut();
  $('body').removeClass('fix');
});
//詳目頁 匯出點選
$(function () {
  $('.export_block .close').click(function () {
    $('#referencestyle2').slideUp();
    $('#forwardstyle2').slideUp();
    $('#permanentstyle2').slideUp();
    $('#exportstyle2').slideUp();
    $('#communitystyle').slideUp();
  });
  //引文
  $('.referencebtn2').click(function () {
    $('.export_block').stop().slideUp();
    $('#referencestyle2').stop().slideDown();
  });
  //轉寄他人
  $('.forwardbtn2').click(function () {
    $('.export_block').stop().slideUp();
    $('#forwardstyle2').stop().slideDown();
  });
  //永久連結
  $('.permanentbtn2').click(function () {
    $('.export_block').stop().slideUp();
    $('#permanentstyle2').stop().slideDown();
  });
  //匯出格式
  $('.exportbth2').click(function () {
    $('.export_block').stop().slideUp();
    $('#exportstyle2').stop().slideDown();
  });
  //社群分享
  $('.communitybtn').click(function () {
    $('.export_block').stop().slideUp();
    $('#communitystyle').stop().slideDown();
  });
});
//會員登入後資料
$(function () {
  $('.header .member_data').css('display', 'none');
  $('.header .member_pic').click(function () {
    $('.member_data').slideToggle();
  });
  $('.member_record .member_data')
    .find('ul li:last-child>a')
    .focusout(function () {
      $('.member_record').find('.member_data').hide();
    });
});
//個人書房選單右上角
$(function () {
  $('.member_data ul ul').css('display', 'none');
  $('.member_data>ul>li').click(function () {
    $(this).find('ul').stop().slideToggle();
    $(this).siblings().children('ul').stop().slideUp();
  });
});
//個人書房選單
$(function () {
  $('.mystudymenu ul ul').css('display', 'none');
  $('.mystudymenu>ul>li').click(function () {
    $(this).find('ul').stop().slideToggle();
    $(this).siblings().children('ul').stop().slideUp();
    $(this).children('a').toggleClass('turnicon');
    $(this).siblings().children('a').removeClass('turnicon');
  });
});
//個人書房選單清單查詢
$(function () {
  $('.mystudysearchbtn').click(function () {
    $('.mystudysearch').stop().slideToggle();
  });
});
$(function () {
  $('.data_quantity2 .searchicon').click(function () {
    $('.mystudysearch').stop().slideToggle();
  });
});
// 出版年度
$(function () {
  $('#slider-range').slider({
    range: true,
    min: 1900,
    max: 2017,
    values: [1900, 2017],
    slide: function (event, ui) {
      $('#amount').val(+ui.values[0] + ' - ' + ui.values[1]);
    },
  });
  $('#amount').val($('#slider-range').slider('values', 0) + ' - ' + $('#slider-range').slider('values', 1));
});
// 分類list
$(function () {
  $('.sortlist_block .sortlist').hide();
  $('.sortlist_block h2').click(function () {
    $(this).next('.sortlist').slideToggle();
    $(this).parents().siblings().children('.sortlist').stop().slideUp();
    $(this).children('a').toggleClass('turnicon');
    $(this).parents().siblings().children('h2').children('a').removeClass('turnicon');
  });
});
// 書籍分享icon
$(function () {
  $('.moreshareblock').hide();
  $('.bookshare ul li a.linkmore').click(function () {
    $(this).parents('.bookshare').children('.moreshareblock').slideToggle();
    $(this).parents('.booklist').siblings().find('.moreshareblock').slideUp();
  });
});
// 熱門排行書籍分享icon
$(function () {
  $('.booklist_hot .moreshareblock').hide();
  $('.booklist_hot .bookshare ul li a.linkmore').click(function () {
    $(this).parents('.bookshare').children('.moreshareblock2').fadeToggle();
    $(this).parents('.booklist').siblings().find('.moreshareblock2').fadeUp();
  });
});
//詳目頁快速連結
$(function () {
  $('.group00').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('body').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group01').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node01').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group02').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node02').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group03').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node03').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group04').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node04').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group05').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node05').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group06').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node06').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group07').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node07').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group08').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node08').offset().top - 70 }, 1200, 'easeOutExpo');
  });
  $('.group09').click(function () {
    $('body,html')
      .stop(true, true)
      .animate({ scrollTop: $('#node09').offset().top - 70 }, 1200, 'easeOutExpo');
  });
});
//左欄 資料fixed
$(function () {
  $(window).on('scroll resize', function () {
    var mainleftblock = $('.mainleftblock');
    let mainleftcontent = $('.mainleftcontent');
    if (mainleftblock.length > 0 && mainleftcontent.length > 0) {
      let myWidth = mainleftblock.width();
      if ($(window).scrollTop() > mainleftblock.offset().top - 70) {
        mainleftcontent.addClass('fixed');
        mainleftcontent.css('width', myWidth);
      } else {
        mainleftcontent.removeClass('fixed');
        mainleftcontent.removeAttr('style');
      }
    }
    if ($(window).scrollTop() + document.documentElement.clientHeight > $('.fatfooter').offset().top) {
      mainleftcontent.height($('.fatfooter').offset().top - $(window).scrollTop() - 140);
    } else {
      mainleftcontent.height(document.documentElement.clientHeight - 140);
    }
  });
});
// reserve_block
// $(function() {
//     $(window).on("scroll resize", function() {
//         var reserveblock = $(".reserve_block");
//         if (reserveblock.length > 0) {
//             if ($(window).scrollTop() > reserveblock.offset().top - 70) {
//                 reserveblock.addClass('fixed');
//             } else {
//                 reserveblock.removeClass('fixed');
//             }
//         }
//     })
// })
//列表頁連結詳目頁
$(function () {
  $('#linkdetailpage').click(function () {
    var wHeight = $(window).height();
    $('#detail_lightbox').stop().fadeIn();
    $('body').addClass('fix');
    $('.maincolumn_cp').css('overflow-y', 'scroll');
    $('.maincolumn_cp').css('height', wHeight);
  });
  $('.detailpage_lightbox .close2').click(function () {
    $('.detailpage_lightbox').fadeOut();
    $('body').removeClass('fix');
    $('.maincolumn_cp').removeAttr('style');
  });
  $('.detailpage_lightbox>.close3').click(function () {
    $('.detailpage_lightbox').fadeOut();
    $('body').removeClass('fix');
    $('.maincolumn_cp').removeAttr('style');
  });
});
//評論更多內容
$(function () {
  $('#commentcontent').click(function () {
    var wHeight = $(window).height();
    $('#commentcontent_lightbox').stop().fadeIn();
    $('body').addClass('fix');
    $('.bookcomment2').css('overflow-y', 'scroll');
    $('.bookcomment2').css('height', wHeight);
  });
  $('.commentcontent_lightbox .close2').click(function () {
    $('.commentcontent_lightbox').fadeOut();
    $('body').removeClass('fix');
    $('.bookcomment2').removeAttr('style');
  });
  $('.commentcontent_lightbox>.close3').click(function () {
    $('.commentcontent_lightbox').fadeOut();
    $('body').removeClass('fix');
    $('.bookcomment2').removeAttr('style');
  });
});
//分頁
$(function () {
  $('.number01').click(function () {
    $('.number01').hide();
    $('.page').addClass('page02');
  });
  $('#closebtn').click(function () {
    $('.number01').show();
    $('.page').removeClass('page02');
  });
});
$(function () {
  if ($('.page').is(':visible')) {
    $(window).scroll(function () {
      var pageLeft = $('.page').offset().left;
      var scrollTop = $(window).scrollTop();
      var viewportHeight = $(window).height();
      if (scrollTop + viewportHeight > $('#showPage').offset().top + 50) {
        $('.page').removeClass('fixed');
      } else {
        $('.page').addClass('fixed');
      }
    });
  }
});
// 繼續查別的情境
$(function () {
  var $continue_search_group = $('.continue_search_group'); // 需要固定的區塊
  var offsetTop = $continue_search_group.offset().top; // 區塊原始的位置
  var marginBottom = 350; // 與底部的距離閾值
  $(window).on('scroll resize', function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var bottomSpace = documentHeight - (scrollTop + windowHeight); // 計算距離底部的空間

    if (bottomSpace < marginBottom) {
      $continue_search_group.removeClass('fixed');
    } else {
      $continue_search_group.addClass('fixed');
    }
  });
});
// 自訂卡片
$(function () {
  $('.customcard').click(function () {
    $('.cardstyle').stop().slideDown();
    $(this).hide();
    $('.complete_custom').show();
  });
  $('.complete_custom').click(function () {
    $('.cardstyle').stop().slideUp();
    $(this).hide();
    $('.customcard').show();
  });
});
//星星
$(function () {
  $('.form_content .score_star').mousemove(function (e) {
    $('.form_content .score_color img').width(Math.ceil((e.clientX - $('.form_content .score_star img').offset().left) / 36) * 36);
  });
});
//熱門關鍵字限字數
$(function () {
  var keywordHot_len = 14; // 超過100個字以"..."取代
  $('.keywordHot')
    .find('li>a')
    .each(function (i) {
      if ($(this).text().length > keywordHot_len) {
        $(this).attr('title', $(this).text());
        var text =
          $(this)
            .text()
            .substring(0, keywordHot_len - 1) + '...';
        $(this).text(text);
      }
    });
});
//圖文列表評論行數
$(function () {
  $('#rowsmore').click(function () {
    $('.commentblock').addClass('cancelrows');
  });
});
//排序
$(function () {
  $('.option_list').hide();
  $('.option_01 .name').click(function () {
    $(this).siblings('.option_list').stop().slideToggle();
    $(this).parent().siblings().find('.option_list').stop().slideUp();
  });
  $('.optionblock')
    .find('.option_01 .option_list li:last-child>a')
    .focusout(function () {
      $('.optionblock').find('.option_list').hide();
    });
});
//隱私權同意
$(function () {
  $('.privacy_consent').addClass('goin');
  $('.privacy_consent .btnstyle').click(function () {
    $('.privacy_consent').stop().removeClass('goin');
  });
});
//登入後訊息通知框
$(function () {
  $('.member_message').addClass('goin');
  $('.member_message .close').click(function () {
    $('.member_message').stop().removeClass('goin');
  });
});
//詳目頁館藏地
$(function () {
  $('.collectionplace>.title').click(function () {
    $('.collectionlibrary').slideToggle();
    $(this).parents('.bookplace2').siblings().find('.collectionlibrary').hide();
  });
});
//詳目頁出版年
$(function () {
  $('.publishing_year_block>.title').click(function () {
    $('.yearblock').slideToggle();
  });
});
//詳目頁 提示說明icon
$(function () {
  $('.prompt_block').hide();
  $('.bookplace_list .prompt').click(function () {
    $('.prompt_block').fadeToggle();
    $(this).toggleClass('arrow');
    $(this).parent('th').siblings('th').children('.prompt_block').hide();
    $(this).parent('th').siblings('th').children('.prompt').removeClass('arrow');
    $(this).parent('th').siblings('th').children('.prompt_block2').hide();
    $(this).parent('th').siblings('th').children('.prompt2').removeClass('arrow');
  });
  $('.bookplace_list .prompt').focusout(function () {
    $('.prompt_block').hide();
    $(this).removeClass('arrow');
  });
  $('.prompt_block_in3').hide();
  $('.bookplace_list .prompt_in3').click(function () {
    $('.prompt_block_in3').fadeToggle();
    $(this).toggleClass('arrow');
    $(this).parent('th').siblings('th').children('.prompt_block_in3').hide();
    $(this).parent('th').siblings('th').children('.prompt_in3').removeClass('arrow');
  });
  $('.prompt_block2').hide();
  $('.bookplace_list .prompt2').click(function () {
    $('.prompt_block2').fadeToggle();
    $(this).toggleClass('arrow');
    $(this).parent('th').siblings('th').children('.prompt_block').hide();
    $(this).parent('th').siblings('th').children('.prompt').removeClass('arrow');
  });
  $('.bookplace_list .prompt2').focusout(function () {
    $('.prompt_block2').hide();
    $(this).removeClass('arrow');
  });
  $('.prompt_block3').hide();
  $('.prompt3').click(function () {
    $('.prompt_block3').fadeToggle();
    // $(this).toggleClass('arrow');
  });
  $('.choosebtn .prompt3').focusout(function () {
    $('.prompt_block3').hide();
  });
  $('.promptblock').hide();
  $('.analysis_prompt .prompt_btn').click(function () {
    $('.promptblock').fadeToggle();
    $(this).toggleClass('arrow');
  });
  $('.analysis_prompt .prompt_btn').focusout(function () {
    $('.promptblock').hide();
  });
  $('.bookplace_list .shelf_btn').click(function () {
    $('.shelf_block').fadeToggle();
    $(this).toggleClass('arrow');
    $(this).parents('td').siblings().find('.shelf_block').hide();
  });
});
//詳目頁 表格收合
$(function () {
  $('.bookplace_list td.tdswitch .switch_btn>a').click(function () {
    $(this).toggleClass('arrowopen');
    $('.bookplace_list table td').toggleClass('tdopen');
    $(this).parents('tr').siblings().find('td').removeClass('tdopen');
  });
});
//卷期
$(function () {
  $('.volumesearch input').click(function () {
    $('.volumesearch .volume').toggleClass('open');
  });
});
//書籍簡介
$(function () {
  $('.bookdata2 .introduction').click(function () {
    $('.bookdata2 .listdata_content').toggleClass('open');
  });
});
//個人書房選單燈箱
$(function () {
  $('#mystudymenulightbox').click(function () {
    $('.mystudymenu_lightbox').fadeIn();
    $('body').addClass('fix');
  });
  $('.mystudybox .close').click(function () {
    $('.mystudymenu_lightbox').fadeOut();
    $('body').removeClass('fix');
  });
  $('.member_data2 ul ul').css('display', 'none');
  $('.member_data2>ul>li').click(function () {
    $(this).find('ul').stop().slideToggle();
    $(this).siblings().children('ul').stop().slideUp();
    $('.member_data2>ul>li>a').stop().toggleClass('turnicon');
    $(this).siblings().children('a').removeClass('turnicon');
  });
});
//無收藏紀錄
$(function () {
  $('.heart>img').hover(function () {
    $('.heart .comment').fadeToggle();
  });
});
//首頁搜尋紀錄
$(function () {
  $('.form_search>input[type="text"]').click(function () {
    $('.recent_searches').stop().slideDown();
  });
  $('.form_search>input[type="text"]').focus(function () {
    $('.recent_searches').stop().slideDown();
  });
  //
  $('.form_search')
    .find('.recent_searches .record_list li:last-child a:last-child')
    .focusout(function () {
      $('.form_search').find('.recent_searches').hide();
    });
});
//登入tab
$(function () {
  $('.qrcode_tab').click(function () {
    $('.account_content').stop().hide();
    $('.qrcode_content').stop().show();
    $('.qrcode_tab>a').addClass('active');
    $('.account_tab>a').removeClass('active');
  });
  $('.account_tab').click(function () {
    $('.account_content').stop().show();
    $('.qrcode_content').stop().hide();
    $('.account_tab>a').addClass('active');
    $('.qrcode_tab>a').removeClass('active');
  });
});
// 仿select
$(function () {
  $('.selectblock .select').click(function () {
    $('.selectdownblock').stop().slideToggle();
    $(this).parents('.searchblockdata').parents('.col').siblings().find('.selectdownblock').hide();
  });
});
//增加標籤
$(function () {
  $('.addtagbtn').click(function () {
    $('.addtag_block').css('display', 'inline-block');
    $(this).hide();
    $(this).parents().siblings('ul').find('.addtag_block').css('display', 'none');
  });
  $('.addinput').click(function () {
    $('.addoption').slideDown();
  });
  $('.addbtn').click(function () {
    $('.addtag_block').hide();
    $('.addtagbtn').show();
    $('.addoption').hide();
  });
  $('.closebtn').click(function () {
    $('.addtag_block').hide();
    $('.addtagbtn').show();
    $('.addoption').hide();
  });

  $('.lightboxstyle .editlabel').click(function () {
    $('.lightboxstyle .addoption').slideDown();
  });
});

// 顯示資料多寡
$(function () {
  $('.displaymore').click(function () {
    $('.booklist_type ul').addClass('morelist');
    $(this).hide();
    $('.displayonly').show();
  });
  $('.displayonly').click(function () {
    $('.booklist_type ul').removeClass('morelist');
    $(this).hide();
    $('.displaymore').show();
  });
});
//line通知時間
$(function () {
  // $(".linewrap .menber-list li").click(function(){
  //     $(".linewrap .menber-list li").removeClass('active');
  //     $(this).addClass('active');
  // })
  $('.linecontent .alert-list li').click(function () {
    $('.alert-list li').removeClass('active');
    $(this).addClass('active');
  });
});
// 我的書房 借閱紀錄 排序按鈕
$(function () {
  $('.data_quantity2 .sorticon').click(function () {
    $('.optionblock').stop().slideToggle();
  });
});
// 首頁最新消息箭頭
$(function () {
  $('.newsblcok .openclosebtn').click(function () {
    if (!$('.newsblcok').hasClass('openblock')) {
      $('.newsblcok').stop().addClass('openblock');
      $(this).stop().addClass('open');
      $(this).children('a').html('收合');
    } else {
      $('.newsblcok').stop().removeClass('openblock');
      $(this).stop().removeClass('open');
      $(this).children('a').html('展開');
    }
  });
});
//閱讀指數－年
$(function () {
  $('.linecontent .year-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
// 為您選書
$(function () {
  $('.bookselection_group')
    .children('.rightblock')
    .find('.close')
    .click(function () {
      $('.bookselection_group').children('.rightblock').hide();
      $('.bookselection_group').children('.leftblock').addClass('expand ');
    });
  var _switchOnOff = $('.switchOnOff');
  $('.recommendedform').find('.being_switched').addClass('off');
  _switchOnOff.click(function () {
    $(this).toggleClass('on');
    $(this).parents('.form_grp').siblings('.being_switched').toggleClass('off');
  });
});
//按鈕隱藏說明
$(function () {
  $('.disabled_hidebtn').hover(function () {
    $('.hide_description').fadeToggle();
  });
});
//左欄 資料fixed
$(function () {
  $(window).on('scroll resize', function () {
    var mainleftblock = $('.mainleftblock');
    let mainleftcontent = $('.mainleftcontent');
    if (mainleftblock.length > 0 && mainleftcontent.length > 0) {
      let myWidth = mainleftblock.width();
      if ($(window).scrollTop() > mainleftblock.offset().top - 70) {
        mainleftcontent.addClass('fixed');
        mainleftcontent.css('width', myWidth);
      } else {
        mainleftcontent.removeClass('fixed');
        mainleftcontent.removeAttr('style');
      }
    }
    if ($(window).scrollTop() + document.documentElement.clientHeight > $('.fatfooter').offset().top) {
      mainleftcontent.height($('.fatfooter').offset().top - $(window).scrollTop() - 140);
    } else {
      mainleftcontent.height(document.documentElement.clientHeight - 140);
    }
  });
});
// 為您選書
$(function () {
  $(window).on('scroll resize', function () {
    let ww = $(window).outerWidth();
    let isMobile = ww > 764;
    var bookselectionrightblock = $('.bookselection_block .bookselection_group .rightblock');
    let bookselectionrightcontent = $('.bookselection_block .bookselection_group .rightblock .analysis_group');
    if (bookselectionrightblock.length > 0 && bookselectionrightcontent.length > 0) {
      let myWidth = bookselectionrightblock.width();
      if ($(window).scrollTop() > bookselectionrightblock.offset().top - 90) {
        bookselectionrightcontent.addClass('fixed');
        bookselectionrightcontent.css('width', myWidth);
      } else {
        bookselectionrightcontent.removeClass('fixed');
        bookselectionrightcontent.removeAttr('style');
      }
    }
    if (isMobile) {
      if ($(window).scrollTop() + document.documentElement.clientHeight > $('.fatfooter').offset().top) {
        bookselectionrightcontent.height($('.fatfooter').offset().top - $(window).scrollTop() - 100);
      } else {
        bookselectionrightcontent.height(document.documentElement.clientHeight - 100);
      }
    }
  });
});
$(function () {
  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).removeClass('btn_icon_hide').addClass('btn_icon_show').html('打開');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).removeClass('btn_icon_show').addClass('btn_icon_hide').html('關閉');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
});
// close內加html
$('.close').append("<a href='#'>關閉</a>");
$('.close_black').append("<a href='#'>關閉</a>");
//詳目頁table包table
$(function () {
  $('.bookplace_list .open_innertable').click(function () {
    $(this).parent('td').addClass('active');
    $(this).parent().parent('tr').siblings('tr').children('.innertable').slideUp(0);
    $(this).parent().parent('tr').next('tr').children('.innertable').slideDown(0);
    // $(this).parent().parent('tr').next('tr').children('.innertable').css('display','block');
    $(this).addClass('active');
    $(this).parent().parent('tr').siblings('tr').find('.open_innertable').removeClass('active');
    $(this).parent().parent('tr').siblings('tr').children('td').removeClass('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        }
        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      'xml'
    );
  });
});
// 書房關鍵字
$(function () {
  $('.bookdata ul li.keyword')
    .children('a')
    .click(function () {
      if ($(this).hasClass('graybg')) {
        $(this).removeClass('graybg');
        $(this).addClass('greenbg');
      } else {
        $(this).removeClass('greenbg');
        $(this).addClass('graybg');
      }
    });
});
// 顯示更多
$(function () {
  $('.morebg').click(function () {
    $(this).toggleClass('open');
  });
});

$(function () {
  //device設備檢視收合
  var winResizeTimer;
  $(window).resize(function () {
    clearTimeout(winResizeTimer);
    winResizeTimer = setTimeout(function () {
      // 判斷高度
      var _devicecontent = $('.devicefiltering_block .filter_group .filtercontent');
      _devicecontent.each(function () {
        if ($(this).height() > 32) {
          $(this).addClass('contentclose');
          $(this).siblings('.filterbtn').addClass('hasbtn');
        } else {
          $(this).removeClass('contentclose');
          $(this).siblings('.filterbtn').removeClass('hasbtn');
        }
      });
      //判斷有無contentclose 改變箭頭
      var _filterbtn = $('.devicefiltering_block .filter_group .filterbtn');
      _filterbtn.click(function () {
        if ($(this).siblings('.filtercontent').hasClass('contentclose')) {
          $(this).find('a').text('收合');
          $(this).find('a').addClass('open');
          $(this).siblings('.filtercontent').removeClass('contentclose');
        } else {
          $(this).find('a').text('展開');
          $(this).find('a').removeClass('open');
          $(this).siblings('.filtercontent').addClass('contentclose');
        }
      });
    }, 200);
  });
  $(window).resize();
});

//
$(function () {
  $('.filtersearch')
    .on('mouseover', function () {
      $(this).addClass('clicksearch');
    })
    .on('mouseout', function () {
      $(this).removeClass('clicksearch');
    });
});

// 週期預約設定
var _switchOnOff2 = $('.switchOnOff2');

_switchOnOff2.click(function () {
  $(this).toggleClass('on');
  $('.appointment_cycle_block').fadeToggle();
});

// AIGPT
$(function () {
  $('.featureslist .del a').click(function () {
    $(this).parent().siblings('.hovercontent').addClass('open');
  });
  $('.featureslist .hovercontent .reserve a').click(function () {
    $(this).parents('.hovercontent').removeClass('open');
  });
});

$(function () {
  $('.describe button').click(function () {
    if ($('.describe p').hasClass('singleline')) {
      $('p').removeClass('singleline');
      $(this).text('收合');
    } else {
      $('p').addClass('singleline');
      $(this).text('展開');
    }
  });
});

$(function () {
  $('.recommendbook_list')
    .find('.tobeseen')
    .click(function () {
      $('.add_tobeseen a').addClass('dynamic');
      setTimeout(function () {
        $('.add_tobeseen a').removeClass('dynamic');
      }, 2500);
    });
});
//冷起始讀者
$(function () {
  var _needsselect = $('.reading_needs_block .needs_group ').children('.needs_select').find('input');

  _needsselect.click(function () {
    let _button = $(this);
    if (_button.parents('.needs_select').next('.needs_content').is(':hidden')) {
      _button.parents('.needs_select').next('.needs_content').slideDown();
      _button.parents('.needs_group').siblings('.needs_group').find('.needs_content').slideUp();
    } else {
      _button.parents('.needs_select').next('.needs_content').slideUp();
    }
  });
});
// 最新消息說明按鈕
$(function () {
  $('.file_download ul li a.directions_icon').click(function () {
    $(this).next('.valuedata').show();
    $(this).parent().siblings('li').find('.valuedata').hide();
  });
});
// 單一問題頁面
$(function () {
  $('.related_linksblock ul li a.directions_icon').click(function () {
    $(this).next('.valuedata').show();
    $(this).parent().siblings('li').find('.valuedata').hide();
  });
});
// tabSet頁籤
// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 亂數英文字
function randomLetter(max) {
  let text = '';
  let letter = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}
function tabFunction(obj) {
  'use strict';
  // const tabSet = document.querySelector(obj.target) || null;
  const tabSet = document.querySelectorAll(obj.target) || null;
  const autoClose = obj.autoClose;
  const openSwitch = obj.openSwitch;
  const openFirst = obj.openFirst;
  const modeSwitch = obj.modeSwitch;
  const widthCheck = obj.width;

  if (tabSet) {
    tabSet.forEach((tab) => {
      let id = [];
      let mode = '';
      let modeBBtn;
      const modeABtn = tab.querySelectorAll('.tabItems button');
      const modeAContent = tab.querySelectorAll('.tabContent');
      const modeBContent = tab.querySelectorAll('.content');
      const count = modeABtn.length;
      let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
      const lastTab = modeABtn[modeABtn.length - 1];

      for (let i = 0; i < modeABtn.length; i++) {
        id.push(`tab_${randomLetter(3)}${randomFloor(0, 999)}`);
      }

      // 內容增加標題給模式B使用
      modeABtn.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.classList.add('modeBBtn');
        btn.innerText = item.innerText;
        modeAContent.forEach((content, i) => (i === index ? content.prepend(btn) : null));
      });

      modeBBtn = tab.querySelectorAll('.modeBBtn');

      // 判斷寬度
      const init = () => {
        if (window.innerWidth <= widthCheck && modeSwitch) {
          // 模式B
          mode = 'B';
          if (modeSwitch) {
            modeABtn.forEach((content) => content.classList.remove('active'));
            modeAContent.forEach((content) => content.classList.remove('active'));
            // 移除模式A無障礙設置
            modeABtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeAContent[index].removeAttribute('aria-labelledby');
              modeAContent[index].removeAttribute('role');
              modeAContent[index].removeAttribute('aria-label');
            });
            // 增加模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.setAttribute('aria-controls', id[index]);
              modeBContent[index].setAttribute('aria-labelledby', id[index]);
              modeBContent[index].setAttribute('id', id[index]);
              // item.setAttribute('role', 'tab');
              // modeBContent[index].setAttribute('role', 'tabpanel');
              modeBContent[index].setAttribute('aria-label', item.innerText);
            });

            tab.classList.add('modeB');

            if (nowIndex !== null) {
              modeBBtn[nowIndex].classList.add('active');
              modeBBtn[nowIndex].setAttribute('aria-selected', 'true');
              modeBContent[nowIndex].classList.add('active');
            }
          }
          // 模式B
        } else if (window.innerWidth > widthCheck || !modeSwitch) {
          // 模式A
          mode = 'A';

          if (modeSwitch) {
            modeBContent.forEach((item) => item.style.removeProperty('display'));
            modeBBtn.forEach((content) => content.classList.remove('active'));
            modeBContent.forEach((content) => content.classList.remove('active'));

            // 移除模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeBContent[index].removeAttribute('aria-labelledby');
              modeBContent[index].removeAttribute('role');
              modeBContent[index].removeAttribute('aria-label');
              modeBContent[index].removeAttribute('id');
            });
          }
          // 增加模式A無障礙設置
          modeABtn.forEach((item, index) => {
            item.setAttribute('aria-controls', id[index]);
            item.setAttribute('role', 'tab');
            item.setAttribute('aria-selected', 'false');
            modeAContent[index].setAttribute('aria-labelledby', id[index]);
            modeAContent[index].setAttribute('role', 'tabpanel');
            modeAContent[index].setAttribute('aria-label', item.innerText);
          });

          tab.classList.remove('modeB');

          nowIndex === null ? (nowIndex = 0) : nowIndex;
          modeABtn[nowIndex].classList.add('active');
          modeAContent[nowIndex].classList.add('active');
          modeABtn[nowIndex].setAttribute('aria-selected', 'true');
          // 模式A
        }
      };
      init();

      // 預先展開模式
      function openCheck() {
        // 預先展開模式
        if (!openFirst && mode === 'B' && nowIndex !== null) {
          const siblings = Array.prototype.filter.call(modeBContent[nowIndex].parentElement.parentElement.children, (child) => {
            return child !== modeBContent[nowIndex].parentElement;
          });
          siblings.forEach((item) => $(item).find('.content').slideUp('fast'));
        } else if (mode === 'B' && nowIndex === null) {
          modeBContent.forEach((item) => $(item).slideUp('fast'));
        } else {
          modeBContent.forEach((item) => $(item).slideDown('fast'));
        }
      }
      openCheck();

      // 模式A共用
      function modeAFn(item, index) {
        modeABtn.forEach((content) => content.classList.remove('active'));
        modeAContent.forEach((content) => content.classList.remove('active'));
        modeAContent[index].classList.add('active');
        item.classList.add('active');
        modeABtn.forEach((content) => content.setAttribute('aria-selected', 'false'));
        item.setAttribute('aria-selected', 'true');
        nowIndex = index;
      }

      modeAContent.forEach((item, index) => {
        const itemAllTarget = modeAContent[index].querySelectorAll('a,button,input,textarea,select');
        const firstItem = itemAllTarget[1];
        const lastItem = itemAllTarget[itemAllTarget.length - 1];
        const prevItemAllTarget = modeAContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
        const siblings = Array.prototype.filter.call(modeBBtn[index].parentElement.parentElement.children, (child) => {
          return child !== modeBBtn[index].parentElement;
        });

        // 模式A
        if (modeSwitch || mode === 'A') {
          // 模式A點擊
          if (openSwitch) {
            modeABtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              modeAFn(e.target, index);
            });

            // 模式A鍵盤
            modeABtn[index].addEventListener('keydown', (e) => {
              if (e.which === 9 && !e.shiftKey) {
                modeAFn(e.target, index);
                if (itemAllTarget.length > 1 && e.target !== lastTab) {
                  e.preventDefault();
                  firstItem.focus();
                } else if (itemAllTarget.length === 1 && e.target !== lastTab) {
                  e.preventDefault();
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length > 1 && e.target === lastTab) {
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length === 1 && e.target === lastTab) {
                  setTimeout(() => {
                    lastTab.focus();
                    lastTab.blur();
                  }, 10);
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                modeAFn(modeABtn[index], index);
                lastItem?.focus();
                if (itemAllTarget.length === 1) {
                  modeABtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 模式B
        if (modeSwitch || mode === 'B') {
          // 模式B點擊
          if (openSwitch) {
            modeBBtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              siblings.forEach((content) => content.querySelector('.modeBBtn').classList.remove('active'));
              e.target.classList.toggle('active');
              $(modeBContent[index]).slideToggle('fast');
              nowIndex = index;

              if (autoClose) {
                siblings.forEach((con) => {
                  $(con.querySelector('.content')).slideUp('fast');
                  con.classList.remove('active');
                  con.querySelector('.modeBBtn').setAttribute('aria-selected', 'false');
                });
              }
            });

            // 模式B鍵盤
            modeBBtn[index].addEventListener('keydown', (e) => {
              e.target.classList.add('active');
              let firstTabStyle = window.getComputedStyle(modeBContent[index]);
              nowIndex = index;

              if (autoClose & !openFirst) {
                siblings.forEach((content) => {
                  $(content.querySelector('.content')).slideUp('fast');
                  content.querySelector('.modeBBtn').classList.remove('active');
                  content.querySelector('.modeBBtn').setAttribute('aria-expanded', 'false');
                });
              }

              if (e.which === 9 && !e.shiftKey) {
                $(modeBContent[index]).slideDown('fast');
                if (index === 0) {
                  e.target.classList.add('active');
                }

                if (itemAllTarget.length > 1) {
                  e.preventDefault();
                  firstItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index]?.focus();
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                $(modeBContent[index]).slideDown('fast');
                if (itemAllTarget.length > 1) {
                  lastItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 內容鍵盤遊走
        itemAllTarget.forEach((n, i) => {
          if (i > 0) {
            n.addEventListener('keydown', (e) => {
              if (mode === 'A') {
                if ((e.which === 9 && !e.shiftKey && e.target === lastItem && modeABtn[index] !== lastTab) || (e.which === 9 && e.shiftKey && e.target === firstItem)) {
                  modeABtn[index]?.focus();
                }
              } else if (mode === 'B') {
                if (e.which === 9 && e.shiftKey) {
                  if (e.target === firstItem) {
                    modeBBtn[index]?.focus();
                  } else if (itemAllTarget.length === 1) {
                    modeBBtn[index - 1]?.focus();
                  }
                }
              }
            });
          }
        });
      });

      window.addEventListener('resize', init);
    });
  }
}
// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});

// 選單底滑塊
// document.addEventListener('DOMContentLoaded', () => {
//   const inputs = document.querySelectorAll('.segmented-control input');
//   const slider = document.querySelector('.segmented-control .slider');
//   const segmentedControl = document.querySelector('.segmented-control');

//   // 計算並設置滑塊的高度和位置（垂直和水平）
//   const setSliderPosition = (index, totalOptions) => {
//     const isMobile = window.innerWidth <= 767; // 判斷是否為手機版
//     const sizePercentage = 100 / totalOptions; // 每個選項的寬度或高度的百分比

//     if (isMobile) {
//       // 手機版滑塊位置（上下）
//       const topPercentage = (index * 100) / totalOptions; // 計算垂直方向的位置
//       slider.style.top = `${topPercentage}%`; // 更新滑塊的top位置
//       slider.style.height = `${sizePercentage}%`; // 設置滑塊的高度
//     } else {
//       // 桌面版滑塊位置（水平方向）
//       const leftPercentage = (index * 100) / totalOptions; // 計算水平方向的位置
//       slider.style.left = `${leftPercentage}%`; // 更新滑塊的left位置
//       slider.style.width = `${sizePercentage}%`; // 設置滑塊的寬度
//     }
//   };

//   // 計算並設置選項數量的 CSS 變量
//   const setOptionCountVariable = () => {
//     const totalOptions = inputs.length;
//     segmentedControl.style.setProperty('--options-count', totalOptions); // 更新選項數量
//   };

//   // 為每個選項添加變更事件監聽器
//   inputs.forEach((input, index) => {
//     input.addEventListener('change', () => {
//       const totalOptions = inputs.length;
//       setSliderPosition(index, totalOptions); // 更新滑塊位置
//     });
//   });

//   // 頁面加載時，初始化滑塊位置和高度
//   const checkedInput = document.querySelector('.segmented-control input:checked');
//   const initialIndex = Array.from(inputs).indexOf(checkedInput); // 查找當前選中的選項索引
//   const totalOptions = inputs.length;
//   setSliderPosition(initialIndex, totalOptions); // 初始滑塊位置設置
//   setOptionCountVariable(); // 設置選項數量變量

//   // 監聽窗口大小變化事件，更新滑塊位置
//   window.addEventListener('resize', () => {
//     const totalOptions = inputs.length;
//     const checkedInput = document.querySelector('.segmented-control input:checked');
//     const initialIndex = Array.from(inputs).indexOf(checkedInput);
//     setSliderPosition(initialIndex, totalOptions);
//     setOptionCountVariable(); // 更新選項數量變量
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const segmentedControl = document.querySelector('.segmented-control');

  const updateSegmentedControl = () => {
    const segments = document.querySelectorAll('.segment');
    const count = segments.length;
    // segmentedControl.style.setProperty('--options-count', count);

    // 获取滑块元素
    const slider = document.querySelector('.slider');

    // 每个segment的宽度
    const segmentWidth = 18; // 假设每个segment宽度为18%

    // 计算总宽度
    const totalWidth = segmentWidth * count;

    // 计算居中时的初始位置
    const initialLeft = (100 - totalWidth) / 2;

    // 初始化滑块位置
    const setSliderPosition = (index) => {
      const leftPosition = initialLeft + index * segmentWidth;
      slider.style.left = `${leftPosition}%`; // 更新slider的位置
      console.log(slider.style.left); // 检查日志

      segments.forEach((seg) => seg.classList.remove('active'));
      segments[index].classList.add('active');
    };

    // 监听点击事件
    segments.forEach((segment, index) => {
      segment.addEventListener('click', () => {
        setSliderPosition(index); // 点击时更新滑块位置
      });
    });

    // 默认选中第一个
    setSliderPosition(0);
  };

  // 更新选项并设置滑块位置
  updateSegmentedControl();
});

// 詳目頁
$(function () {
  var _limitrowsbtn = $('.bookdata .listdata  ul li .more a');
  _limitrowsbtn.click(function () {
    if (_limitrowsbtn.parents('.limitrows').hasClass('cancel')) {
      _limitrowsbtn.text('顯示更多');
      _limitrowsbtn.parents('.limitrows').removeClass('cancel');
    } else {
      _limitrowsbtn.text('收合資料');
      _limitrowsbtn.parents('.limitrows').addClass('cancel');
    }
  });
});
// 閱讀存摺_獎勵查詢
$(function () {
  var _collapse_btn = $('.read_passbook_content .btn_grp .collapse_btn');
  _collapse_btn.click(function () {
    if (_collapse_btn.parents('.read_passbook_content').hasClass('formclose')) {
      _collapse_btn.text('收合');
      _collapse_btn.parents('.read_passbook_content').removeClass('formclose');
    } else {
      _collapse_btn.text('展開');
      _collapse_btn.parents('.read_passbook_content').addClass('formclose');
    }
  });
});
