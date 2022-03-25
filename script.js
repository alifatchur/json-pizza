function tampilData () {
  $("#daftar-menu").html('')
  $.getJSON('./pizza.json', function(result) {
    let menu = result.menu;   
    // console.log(menu.length);
    $.each(menu, function (i, data){
      $("#daftar-menu").append(`<div class="col-md-4 mb-3"><div class="card shadow"><img src="./img/pizza/${data.gambar}" class="card-img-top" height="350"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h4 class="card-title mb-4">Rp. ${data.harga},-</h4><a href="#" class="btn btn-primary">Beli Sekarang</a></div></div></div>`);
    })
    
    // menu.forEach(function(m) {
    //   console.log(m.harga);
    // });
  })
}
tampilData();


$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All") {
    tampilData();
    return;
  }

  $.getJSON('pizza.json', function (result) {
    let menu = result.menu;
    let content = "";
    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += '<div class="col-md-4 mb-3"><div class="card shadow"><img src="./img/pizza/'+ data.gambar +'" class="card-img-top" height="350"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h4 class="card-title mb-4">Rp. '+ data.harga +',-</h4><a href="#" class="btn btn-primary">Beli Sekarang</a></div></div></div>';
      } 
    })
    $("#daftar-menu").html(content);
  })
})