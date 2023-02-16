var myModal = new bootstrap.Modal(document.getElementById("semblanzasModal"), {});
var myIframe = document.getElementById("semblanzasModalIframe");
function semblanzas(f) {
    myIframe.src = f;
    myModal.show();
    //$('#semblanzasModal').modal({ show: true });  
}
$(document).ready(function ($) {
    setTimeout(function () {
        $('a').off('touchstart touchend');
    }, 750);
});
$('a').on('touchend click', function (e) {
    href = $(this).attr('href');
    notComments = href.indexOf('#comments') === -1;
    if (href !== '#' && notComments) {
        var theId = href.split('#').pop();
        var $el = $('#' + theId);
        if ($el.length > 0) {
            e.preventDefault();
            if (dragging) {
                return;
            }
            animateOffset($el, 850, 'easeInOutExpo');
        }
    }
});