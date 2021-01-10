$(document).ready(function(){
	$('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $("#mylinks").toggleClass('show');
	});
});

document.addEventListener( 'DOMContentLoaded', function () {
    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ], {
            type: 'loop',
            fixedWidth: '100%',
            autoHeight: true,
            lazyLoad: 'nearby',
            grid: {
                rows: 2,
                cols: 2,
                gap : {
                    row: '1.5rem',
                    col: '1.5rem',
                },
            }
        } ).mount(window.splide.Extensions);
    }
});