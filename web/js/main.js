window.onscroll = function(ev) {
    if (window.scrollY >= document.getElementsByClassName("banner")[0].offsetHeight) {
        $( ".main-nav" ).addClass('scrolled');
    }
    
    if (window.scrollY==0) {
    	$( ".main-nav" ).removeClass('scrolled');
    }

};
