 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('li').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
            
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
    
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav li').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.navbar-nav ul li').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
 }