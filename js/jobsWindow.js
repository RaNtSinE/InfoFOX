for ( var i = 0; i < document.getElementsByClassName("more").length; i++ ) {
    document.getElementsByClassName("more")
        [i].addEventListener("click", function() {
        this.parentNode.classList.add("open");
    });
}

for (var i = 0; i < document.getElementsByClassName("close").length; i++) {
    document.getElementsByClassName("close")
        [i].addEventListener("click", function() {
        this.parentNode.parentNode.parentNode.classList.remove("open");
    });
}