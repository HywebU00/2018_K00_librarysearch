//自行加入的JS請寫在這裡
$(function() {
    $('.singleSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    //相關連結
    $('.related_links').slick({
        infinite: true,
        speed: 2000,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //新到圖書
    $('.newbooks').slick({
        infinite: true,
        speed: 2000,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //推薦書總覽
    $('.recommendbooks').slick({
        infinite: true,
        speed: 2000,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //推薦書總覽
    $('.recommendbooks2').slick({
        infinite: true,
        speed: 2000,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
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
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
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
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
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
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 470,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
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
        responsive: [{
            breakpoint: 1550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 831,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 671,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
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
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
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
        responsive: [{
            breakpoint: 1550,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //分類推薦
    $('.sortrecommend').slick({
        infinite: false,
        speed: 2000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //為您選書tab
    $('.bookselection_tab').slick({
        infinite: false,
        speed: 2000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //熱門排行
    $('.hotrankings').slick({
        infinite: false,
        speed: 2000,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //閱讀存摺
    $('.read_passbook_tab').slick({
        infinite: false,
        speed: 2000,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //tabs
    $(".tabs").tabs({
        tiGap: 10,
        selected: function(tab, item, content) {
            $(".themebook.slick-initialized").slick("unslick");
            var current = $(content).find(".themebook");
            if (!current.is(".slick-slider")) {
                current.slick({
                    infinite: true,
                    speed: 2000,
                    autoplay: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    dots: true,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        }, {
                            breakpoint: 620,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                dots: false,
                            }
                        }, {
                            breakpoint: 430,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            }
        }
    });
});
$(function() {
    //選擇語言
    $(".language a").click(function() {
        $(".language ul").slideToggle(500);
        return false;
    });
})
// login登入
$(function() {
    $('.loginbtn').click(function() {
        $('.login_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.loginblock .close').click(function() {
        $('.login_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.login_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
// login登入確認
$(function() {
    $('.okbtn').click(function() {
        $('.login_lightbox').fadeOut();
        $('.choose_librarycard_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.loginblock .close').click(function() {
        $('.choose_librarycard_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.choose_librarycard_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
// qrcode
$(function() {
    $('.qrcode_mpbtn').click(function() {
        $('.qrcode_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.loginblock .close').click(function() {
        $('.qrcode_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.qrcode_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
// 查詢欄位
$(function() {
    $('.searchfield_btn').click(function() {
        $('.search_field_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.loginblock .close').click(function() {
        $('.search_field_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.search_field_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
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
$(function() {
    $('.ralated_all').click(function() {
        $('.related_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.relatedboxmp .close').click(function() {
        $('.related_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.related_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
//分類燈箱
$(function() {
    $('.sortlist_more').click(function() {
        $('#sortstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#sortstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#sortstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //匯出
    $('.exportbth').click(function() {
        $('#exportstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#exportstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#exportstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //轉寄他人
    $('.forwardbtn').click(function() {
        $('#forwardstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#forwardstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#forwardstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //引用他人
    $('.referencebtn').click(function() {
        $('#referencestyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#referencestyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#referencestyle').fadeOut();
        $('body').removeClass('fix');
    })
    //永久連結
    $('.permanentbtn').click(function() {
        $('#permanentstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#permanentstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#permanentstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //跨館調閱
    $('#exchangebookbtn').click(function() {
        $('#exchangebookstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#exchangebookstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#exchangebookstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //申請跨館通閱
    $('#exchangebookbtn2').click(function() {
        $('#exchangebookstyle2').fadeIn();
        // $('#exchangebookstyle').fadeOut();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#exchangebookstyle2').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#exchangebookstyle2').fadeOut();
        $('body').removeClass('fix');
    })
    //書目預約
    $('#bookreservationbtn').click(function() {
        $('#bookreservationstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#bookreservationstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#bookreservationstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //檢視閱讀權限
    $('#read_permissionbtn').click(function() {
        $('#read_permissionstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#read_permissionstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#read_permissionstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //我要評分
    $('#scorebtn').click(function() {
        $('#scorestyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#scorestyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#scorestyle').fadeOut();
        $('body').removeClass('fix');
    })
    //我要推薦
    $('.recommend').click(function() {
        $('#recommendstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#recommendstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#recommendstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //清單下載
    $('.listdownloadbtn').click(function() {
        $('#listdownloadstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#listdownloadstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#listdownloadstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //檢索歷史詳細資訊
    $('.diversifiedbtn').click(function() {
        $('#diversifiedstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#diversifiedstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#diversifiedstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //標籤刪除
    $('.addtagdelbtn').click(function() {
        $('#addtagstyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#addtagstyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#addtagstyle').fadeOut();
        $('body').removeClass('fix');
    })
    //我的書房排序按鈕
    $('.map_location_btn').click(function() {
        $('#map_location_style').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#map_location_style').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#map_location_style').fadeOut();
        $('body').removeClass('fix');
    })
    // 異常畫面
    // login登入確認
    $('.explain_btn').click(function() {
        $('#explain_linghtbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#explain_linghtbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#explain_linghtbox').fadeOut();
        $('body').removeClass('fix');
    })
    // 獎勵兌換條碼
    $('#reward_barcodebtn').click(function() {
        $('#reward_barcodestyle').fadeIn();
        $('body').addClass('fix');
    })
    $('.lightboxstyle_block .close').click(function() {
        $('#reward_barcodestyle').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('#reward_barcodestyle').fadeOut();
        $('body').removeClass('fix');
    })
    // 推薦書單
    $('.recommendbook_btn').click(function() {
        $('.recommendbook_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.loginblock .close').click(function() {
        $('.recommendbook_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.overlay').click(function() {
        $('.recommendbook_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
})
//詳目頁 匯出點選
$(function() {
    $('.export_block .close').click(function() {
        $('#referencestyle2').slideUp();
        $('#forwardstyle2').slideUp();
        $('#permanentstyle2').slideUp();
        $('#exportstyle2').slideUp();
        $('#communitystyle').slideUp();
    })
    //引文
    $('.referencebtn2').click(function() {
        $('.export_block').stop().slideUp();
        $('#referencestyle2').stop().slideDown();
    });
    //轉寄他人
    $('.forwardbtn2').click(function() {
        $('.export_block').stop().slideUp();
        $('#forwardstyle2').stop().slideDown();
    });
    //永久連結
    $('.permanentbtn2').click(function() {
        $('.export_block').stop().slideUp();
        $('#permanentstyle2').stop().slideDown();
    });
    //匯出格式
    $('.exportbth2').click(function() {
        $('.export_block').stop().slideUp();
        $('#exportstyle2').stop().slideDown();
    });
    //社群分享
    $('.communitybtn').click(function() {
        $('.export_block').stop().slideUp();
        $('#communitystyle').stop().slideDown();
    });
})
//會員登入後資料
$(function() {
    $('.header .member_data').css('display', 'none');
    $('.header .member_pic').click(function() {
        $('.member_data').slideToggle();
    })
})
//個人書房選單右上角
$(function() {
    $('.member_data ul ul').css('display', 'none');
    $('.member_data>ul>li').click(function() {
        $(this).find('ul').stop().slideToggle();
        $(this).siblings().children('ul').stop().slideUp();
    })
})
//個人書房選單
$(function() {
    $('.mystudymenu ul ul').css('display', 'none');
    $('.mystudymenu>ul>li').click(function() {
        $(this).find('ul').stop().slideToggle();
        $(this).siblings().children('ul').stop().slideUp();
        $(this).children('a').toggleClass('turnicon');
        $(this).siblings().children('a').removeClass('turnicon');
    })
})
//個人書房選單清單查詢
$(function() {
    $('.mystudysearchbtn').click(function() {
        $('.mystudysearch').stop().slideToggle();
    })
})
// 出版年度
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 1900,
        max: 2017,
        values: [1900, 2017],
        slide: function(event, ui) {
            $("#amount").val(+ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));
})
// 分類list
$(function() {
    $('.sortlist_block .sortlist').hide();
    $('.sortlist_block h2').click(function() {
        $(this).next('.sortlist').slideToggle();
        $(this).parents().siblings().children('.sortlist').stop().slideUp();
        $(this).children('a').toggleClass('turnicon');
        $(this).parents().siblings().children('h2').children('a').removeClass('turnicon');
    })
})
// 書籍分享icon
$(function() {
    $('.moreshareblock').hide();
    $('.bookshare ul li a.linkmore').click(function() {
        $(this).parents('.bookshare').children('.moreshareblock').slideToggle();
        $(this).parents('.booklist').siblings().find('.moreshareblock').slideUp();
    })
})
// 熱門排行書籍分享icon
$(function() {
    $('.booklist_hot .moreshareblock').hide();
    $('.booklist_hot .bookshare ul li a.linkmore').click(function() {
        $(this).parents('.bookshare').children('.moreshareblock2').fadeToggle();
        $(this).parents('.booklist').siblings().find('.moreshareblock2').fadeUp();
    })
})
//詳目頁快速連結
$(function() {
    $('.group00').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('body').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node01').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node02').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group03').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node03').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group04').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node04').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group05').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node05').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group06').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node06').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group07').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node07').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group08').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node08').offset().top - 70 }, 1200, 'easeOutExpo');
    });
    $('.group09').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#node09').offset().top - 70 }, 1200, 'easeOutExpo');
    });
})
//左欄 資料fixed
$(function() {
    $(window).on("scroll resize", function() {
        var mainleftblock = $(".mainleftblock");
        let mainleftcontent = $(".mainleftcontent");
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
        if ($(window).scrollTop() + document.documentElement.clientHeight > $(".fatfooter").offset().top) {
            mainleftcontent.height($(".fatfooter").offset().top - $(window).scrollTop() - 140);
        } else {
            mainleftcontent.height(document.documentElement.clientHeight - 140);
        }
    })
})
//列表頁連結詳目頁
$(function() {
    $('#linkdetailpage').click(function() {
        var wHeight = $(window).height();
        $('#detail_lightbox').stop().fadeIn();
        $('body').addClass('fix');
        $('.maincolumn_cp').css('overflow-y', 'scroll');
        $('.maincolumn_cp').css('height', wHeight);
    })
    $('.detailpage_lightbox .close2').click(function() {
        $('.detailpage_lightbox').fadeOut();
        $('body').removeClass('fix');
        $('.maincolumn_cp').removeAttr('style');
    })
    $('.detailpage_lightbox>.close3').click(function() {
        $('.detailpage_lightbox').fadeOut();
        $('body').removeClass('fix');
        $('.maincolumn_cp').removeAttr('style');
    })
})
//評論更多內容
$(function() {
    $('#commentcontent').click(function() {
        var wHeight = $(window).height();
        $('#commentcontent_lightbox').stop().fadeIn();
        $('body').addClass('fix');
        $('.bookcomment2').css('overflow-y', 'scroll');
        $('.bookcomment2').css('height', wHeight);
    })
    $('.commentcontent_lightbox .close2').click(function() {
        $('.commentcontent_lightbox').fadeOut();
        $('body').removeClass('fix');
        $('.bookcomment2').removeAttr('style');
    })
    $('.commentcontent_lightbox>.close3').click(function() {
        $('.commentcontent_lightbox').fadeOut();
        $('body').removeClass('fix');
        $('.bookcomment2').removeAttr('style');
    })
})
//分頁
$(function() {
    $('.number01').click(function() {
        $('.number01').hide();
        $('.page').addClass('page02');
    })
    $('#closebtn').click(function() {
        $('.number01').show();
        $('.page').removeClass('page02');
    })
})
$(function() {
    if ($(".page").is(":visible")) {
        $(window).scroll(function() {
            var pageLeft = $(".page").offset().left;
            var scrollTop = $(window).scrollTop();
            var viewportHeight = $(window).height();
            if ((scrollTop + viewportHeight) > ($("#showPage").offset().top + 50)) {
                $(".page").removeClass("fixed");
            } else {
                $(".page").addClass("fixed");
            }
        })
    }
})
// 自訂卡片
$(function() {
    $('.customcard').click(function() {
        $('.cardstyle').stop().slideDown();
        $(this).hide();
        $('.complete_custom').show();
    })
    $('.complete_custom').click(function() {
        $('.cardstyle').stop().slideUp();
        $(this).hide();
        $('.customcard').show();
    })
})
//星星
$(function() {
    $(".form_content .score_star").mousemove(function(e) { $(".form_content .score_color img").width(Math.ceil((e.clientX - $(".form_content .score_star img").offset().left) / 36) * 36) })
})
//熱門關鍵字限字數
$(function() {
    var keywordHot_len = 14; // 超過100個字以"..."取代
    $(".keywordHot").find('li>a').each(function(i) {
        if ($(this).text().length > keywordHot_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, keywordHot_len - 1) + "...";
            $(this).text(text);
        }
    });
})
//圖文列表評論行數
$(function() {
    $('#rowsmore').click(function() {
        $('.commentblock').addClass('cancelrows')
    })
})
//排序
$(function() {
    $('.option_list').hide();
    $('.option_01 .name').click(function() {
        $(this).siblings('.option_list').stop().slideToggle();
        $(this).parent().siblings().find('.option_list').stop().slideUp();
    })
})
//隱私權同意
$(function() {
    $('.privacy_consent').addClass('goin');
    $('.privacy_consent .btnstyle').click(function() {
        $('.privacy_consent').stop().removeClass('goin');
    })
})
//登入後訊息通知框
$(function() {
    $('.member_message').addClass('goin');
    $('.member_message .close').click(function() {
        $('.member_message').stop().removeClass('goin');
    })
})
//詳目頁館藏地
$(function() {
    $('.collectionplace>.title').click(function() {
        $('.collectionlibrary').slideToggle();
        $(this).parents('.bookplace2').siblings().find('.collectionlibrary').hide();
    })
})
//詳目頁出版年
$(function() {
    $('.publishing_year_block>.title').click(function() {
        $('.yearblock').slideToggle();
    })
})
//詳目頁 提示說明icon
$(function() {
    $('.prompt_block').hide();
    $('.bookplace_list .prompt').click(function() {
        $('.prompt_block').fadeToggle();
        $(this).toggleClass('arrow');
        $(this).parent('th').siblings('th').children('.prompt_block').hide();
        $(this).parent('th').siblings('th').children('.prompt').removeClass('arrow');
        $(this).parent('th').siblings('th').children('.prompt_block2').hide();
        $(this).parent('th').siblings('th').children('.prompt2').removeClass('arrow');
    })
    $('.prompt_block2').hide();
    $('.bookplace_list .prompt2').click(function() {
        $('.prompt_block2').fadeToggle();
        $(this).toggleClass('arrow');
        $(this).parent('th').siblings('th').children('.prompt_block').hide();
        $(this).parent('th').siblings('th').children('.prompt').removeClass('arrow');
    })
    $('.prompt_block3').hide();
    $('.prompt3').click(function() {
        $('.prompt_block3').fadeToggle();
        $(this).toggleClass('arrow');
    })
    $('.promptblock').hide();
    $('.analysis_prompt .prompt_btn').click(function() {
        $('.promptblock').fadeToggle();
        $(this).toggleClass('arrow');
    })
})
//詳目頁 表格收合
$(function() {
    $('.bookplace_list td.tdswitch .switch_btn>a').click(function() {
        $(this).toggleClass('arrowopen');
        $('.bookplace_list table td').toggleClass('tdopen');
        $(this).parents('tr').siblings().find('td').removeClass('tdopen');
    })
})
//卷期
$(function() {
    $('.volumesearch input').click(function() {
        $('.volumesearch .volume').toggleClass('open');
    })
})
//書籍簡介
$(function() {
    $('.bookdata2 .introduction').click(function() {
        $('.bookdata2 .listdata_content').toggleClass('open');
    })
})
//個人書房選單燈箱
$(function() {
    $('#mystudymenulightbox').click(function() {
        $('.mystudymenu_lightbox').fadeIn();
        $('body').addClass('fix');
    })
    $('.mystudybox .close').click(function() {
        $('.mystudymenu_lightbox').fadeOut();
        $('body').removeClass('fix');
    })
    $('.member_data2 ul ul').css('display', 'none');
    $('.member_data2>ul>li').click(function() {
        $(this).find('ul').stop().slideToggle();
        $(this).siblings().children('ul').stop().slideUp();
        $('.member_data2>ul>li>a').stop().toggleClass('turnicon');
        $(this).siblings().children('a').removeClass('turnicon')
    })
})
//無收藏紀錄
$(function() {
    $('.heart>img').hover(function() {
        $('.heart .comment').fadeToggle();
    })
})
//首頁搜尋紀錄
$(function() {
    $('.form_search>input[type="text"]').click(function() {
        $('.recent_searches').stop().slideDown();
    })
    $(document).on('touchend click', function(e) {
        var target = e.target;
        if (!$(target).is('.form_search>input[type="text"]')) {
            $('.recent_searches').hide();
        }
    });
})
//登入tab
$(function() {
    $('.qrcode_tab').click(function() {
        $('.account_content').stop().hide();
        $('.qrcode_content').stop().show();
        $('.qrcode_tab>a').addClass('active');
        $('.account_tab>a').removeClass('active');
    })
    $('.account_tab').click(function() {
        $('.account_content').stop().show();
        $('.qrcode_content').stop().hide()
        $('.account_tab>a').addClass('active');
        $('.qrcode_tab>a').removeClass('active');
    })
})
// 仿select
$(function() {
    $('.selectblock .select').click(function() {
        $('.selectdownblock').stop().slideToggle();
        $(this).parents('.searchblockdata').parents('.col').siblings().find('.selectdownblock').hide();
    })
})
//增加標籤
$(function() {
    $('.addtagbtn').click(function() {
        $('.addtag_block').css('display', 'inline-block');
        $(this).hide();
    })
    $('.addinput').click(function() {
        $('.addoption').slideDown();
    })
    $('.addbtn').click(function() {
        $('.addtag_block').hide();
        $('.addtagbtn').show();
        $('.addoption').hide();
    })
    $('.closebtn').click(function() {
        $('.addtag_block').hide();
        $('.addtagbtn').show();
        $('.addoption').hide();
    })
})
// 顯示資料多寡
$(function() {
    $('.displaymore').click(function() {
        $('.booklist_type ul').addClass('morelist')
        $(this).hide();
        $('.displayonly').show()
    })
    $('.displayonly').click(function() {
        $('.booklist_type ul').removeClass('morelist')
        $(this).hide();
        $('.displaymore').show()
    })
})
//line通知時間
$(function() {
    // $(".linewrap .menber-list li").click(function(){
    //     $(".linewrap .menber-list li").removeClass('active');
    //     $(this).addClass('active');
    // })
    $(".linecontent .alert-list li").click(function() {
        $(".alert-list li").removeClass('active');
        $(this).addClass('active');
    })
})
// 我的書房 借閱紀錄 排序按鈕
$(function() {
    $('.data_quantity2 .sorticon').click(function() {
        $('.optionblock').stop().slideToggle();
    })
})
// 首頁最新消息箭頭
$(function() {
    $('.newsblcok .openclosebtn').click(function() {
        $('.newsblcok').stop().toggleClass('openblock');
        $(this).stop().toggleClass('open');
    })
})
//閱讀指數－年
$(function() {
    $('.linecontent .year-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        }, {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });
})
// 為您選書 
$(function() {
    $('.bookselection_group').children('.rightblock').find('.close').click(function() {
        $('.bookselection_group').children('.rightblock').hide();
        $('.bookselection_group').children('.leftblock').addClass('expand ')
    })
    var _switchOnOff = $(".switchOnOff");
    $('.recommendedform').find('.being_switched').addClass('off');
    _switchOnOff.click(function() {
        $(this).toggleClass("on");
        $(this).parents('.form_grp').siblings('.being_switched').toggleClass('off');
    });
})
//按鈕隱藏說明
$(function() {
    $('.disabled_hidebtn').hover(function() {
        $('.hide_description').fadeToggle();
    })
})
//左欄 資料fixed
$(function() {
    $(window).on("scroll resize", function() {
        var mainleftblock = $(".mainleftblock");
        let mainleftcontent = $(".mainleftcontent");
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
        if ($(window).scrollTop() + document.documentElement.clientHeight > $(".fatfooter").offset().top) {
            mainleftcontent.height($(".fatfooter").offset().top - $(window).scrollTop() - 140);
        } else {
            mainleftcontent.height(document.documentElement.clientHeight - 140);
        }
    })
})
// 為您選書
$(function() {
    $(window).on("scroll resize", function() {
        let ww = $(window).outerWidth();
        let isMobile = ww > 764
        var bookselectionrightblock = $(".bookselection_block .bookselection_group .rightblock");
        let bookselectionrightcontent = $(".bookselection_block .bookselection_group .rightblock .analysis_group");
        if (bookselectionrightblock.length > 0 && bookselectionrightcontent.length > 0) {
            let myWidth = bookselectionrightblock.width();
            if ($(window).scrollTop() > bookselectionrightblock.offset().top - 90) {
                bookselectionrightcontent.addClass("fixed");
                bookselectionrightcontent.css("width", myWidth);
            } else {
                bookselectionrightcontent.removeClass("fixed");
                bookselectionrightcontent.removeAttr("style");
            }
        }
        if (isMobile) {
            if ($(window).scrollTop() + document.documentElement.clientHeight > $(".fatfooter").offset().top) {
                bookselectionrightcontent.height($(".fatfooter").offset().top - $(window).scrollTop() - 100);
            } else {
                bookselectionrightcontent.height(document.documentElement.clientHeight - 100);
            }
        }
    });
});
$(function(){
    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
})