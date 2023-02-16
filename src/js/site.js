var myModal = new bootstrap.Modal(document.getElementById("semblanzasModal"), {});
var myIframe = document.getElementById("semblanzasModalIframe");
function semblanzas(f) {
    myIframe.src = f;
    myModal.show();  
    //$('#semblanzasModal').modal({ show: true });  
}