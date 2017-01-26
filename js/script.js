 $(document).ready(function () {
     //Add smooth scrolling to links
     $("a").on("click", function(event) {
         if(this.hash !== "") {
             event.preventDefault();

             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             $("html, body").animate({
                 scrollTop: $(hash).offset().top
             }, 800, function() {
                 window.location.hash = hash;
             });
         }
     })
 });