window.onload = function() {
    
    // Variables
    var nav = document.querySelector('.navigation');
    var story = document.querySelector('.story');
    var navTop = nav.offsetTop;
        
     // Functions
    function navFixed(e) {
        if(window.scrollY >= navTop) {
            nav.classList.add('is-fixed');
            story.classList.add('is-fixed-story');
        } else {
            nav.classList.remove('is-fixed');
            story.classList.remove('is-fixed-story');
        }
    }
    
    // Event Listener
    window.addEventListener('scroll', navFixed);
    
}