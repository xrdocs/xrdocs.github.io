var rssfeedTop = $('.container__marketing').offset().top;       // get initial position of the element
var mql = window.matchMedia("(max-width: 1024px)");
$('.floating__feed').css('height', '100vh').css('height', '-=150px');
var floatingFeedHeight = $('.floating__feed').height()
$('.rssfeed').css({ height: floatingFeedHeight });
var iframe_src = "https://feed.mikle.com/widget/v2/40064/"
var el = document.getElementsByClassName('fw-iframe')[0];

var handleMediaChange = function (mediaQueryList) {
    if (mediaQueryList.matches) {
        // The browser window is smaller than 1024px wide
            $('.rssfeed').css({                      
                overflow: 'hidden',
                position: 'relative',
                 top: 'auto',
                right: '0',
                width: '100%'
            });

          el.src = iframe_src;
    } else {
        var currentScroll = $(window).scrollTop();
        var floatingFeedHeight = $('.floating__feed').height()
        if (currentScroll >= rssfeedTop) { 
            $('.rssfeed').css({                      // if current scroll position 
                overflow: 'hidden',
                position: 'fixed',
                top: '30px',
                right: '0',
                width: '22%',
                'margin-right': '1em',
                height: floatingFeedHeight
            });
        } else {                                   // apply position: static
            $('.rssfeed').css({                      // if you scroll above it
                overflow: 'hidden',
                position: 'relative',
                top: 'auto',
                right: '0',
                width: '100%'
            });
        }
        el.src = iframe_src;
    }
}


$(window).resize(function(){
    $('.floating__feed').css('height', '100vh').css('height', '-=150px');
    var floatingFeedHeight = $('.floating__feed').height()
    $('.rssfeed').css({ height: floatingFeedHeight });

});


mql.addListener(handleMediaChange);
handleMediaChange(mql);


function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    mobilecheck = isMobileWidth()

    if (mobilecheck != true) {                      // css will take care in case mobilecheck is false
        var floatingFeedHeight = $('.floating__feed').height() 
        if (currentScroll >= rssfeedTop) {           // apply position: fixed if you
            $('.rssfeed').css({                      // scroll to that element or below it
                overflow: 'hidden',
                position: 'fixed',
                top: '30px',
                right: '0',
                width: '22%',
                'margin-right': '1em',
                height: floatingFeedHeight
            });
        } else {                                   // apply position: static
            $('.rssfeed').css({                      // if you scroll above it
                overflow: 'hidden',
                position: 'relative',
                top: 'auto',
                right: '0',
                width: '100%'
            });
        }
    }
});
