$(document).ready(function(){
  $('.payment_vietinbank').click(function(){
  $('.payment_vietinbank').css('border','2px solid #2195f3');	
  $('.payment_donga').css('border','1px solid #d7d7d7');	
  $('.payment_nama').css('border','1px solid #d7d7d7');
  $('.payment_sacom').css('border','1px solid #d7d7d7');
  });
});
$(document).ready(function(){
  $('.payment_donga').click(function(){
  $('.payment_donga').css('border','2px solid #2195f3');
  $('.payment_vietinbank').css('border','1px solid #d7d7d7');
  $('.payment_nama').css('border','1px solid #d7d7d7');
  $('.payment_sacom').css('border','1px solid #d7d7d7');		
  });
});
$(document).ready(function(){
  $('.payment_nama').click(function(){
  $('.payment_nama').css('border','2px solid #2195f3');
  $('.payment_vietinbank').css('border','1px solid #d7d7d7');	
  $('.payment_donga').css('border','1px solid #d7d7d7');	
  $('.payment_sacom').css('border','1px solid #d7d7d7');	
  });
});
$(document).ready(function(){
  $('.payment_sacom').click(function(){
  $('.payment_sacom').css('border','2px solid #2195f3');
  $('.payment_vietinbank').css('border','1px solid #d7d7d7');	
  $('.payment_donga').css('border','1px solid #d7d7d7');
  $('.payment_nama').css('border','1px solid #d7d7d7');		
  });
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 120) {
    document.getElementById("menu").className = "scroll_event_Add_class";
  } else {
    document.getElementById("menu").className = "";
  }
}

function move_login(){
  document.getElementById("login_box").style.display = 'block';
  document.getElementById("signup_box").style.display = 'none';
}
function move_signup(){
  document.getElementById("login_box").style.display = 'none';
  document.getElementById("signup_box").style.display = 'block';
}


$(document).ready(function(){

$('#menu_account_login').on('click',function(){
  $('.khung').toggleClass('menu_account_show');
});


});



function checkout(){
document.getElementById("payment_form").style.display = 'block';
document.getElementById("checkout_form").style.display = 'none';
}
var bank;
function viettinbank(){
bank = "viettinbank";
}
function donga(){
bank = "dongabank";
}
function nama(){
bank = "namabank";
}
function sacom(){
bank = "Nhận hàng thanh toán";
}


function management_web(){
document.getElementById("list_food_home").style.display = 'none';
document.getElementById("management_food").style.display = 'block';

}

function home_page(){
document.getElementById("list_food_home").style.display = 'block';
document.getElementById("management_food").style.display = 'none';
listFood();
}

