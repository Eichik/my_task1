$(document).ready(function (){
    $('.template_user').addClass(function(i) {
        return "item-" + i;
    });
    $('button').attr('href', function(i){
        ++i;
        return i;
    });
    $('button').attr('data-about', function(i){
        return i;
    });
var template_user ='<div class="left span5">\
    <span>{{name}}</span> \
    </div><div class="center span3"> \
    <span>{{id}} </span></div>' ;
$.get("http://jsonplaceholder.typicode.com/users",  function(data){
      
    var result_0 = Mustache.render(template_user, data[0]);
    var result_1 = Mustache.render(template_user, data[1]);
    var result_2 = Mustache.render(template_user, data[2]);
    var result_3 = Mustache.render(template_user, data[3]);
    var result_4 = Mustache.render(template_user, data[4]);
    var result_5 = Mustache.render(template_user, data[5]);
    var result_6 = Mustache.render(template_user, data[6]);
    var result_7 = Mustache.render(template_user, data[7]);
    var result_8 = Mustache.render(template_user, data[8]);
    var result_9 = Mustache.render(template_user, data[9]);
            
    $('.item-0').html(result_0);
    $('.item-1').html(result_1);
    $('.item-2').html(result_2);
    $('.item-3').html(result_3);
    $('.item-4').html(result_4);
    $('.item-5').html(result_5);
    $('.item-6').html(result_6);
    $('.item-7').html(result_7);
    $('.item-8').html(result_8);
    $('.item-9').html(result_9);

});


$('.getInform').click(function (){ 
    var template = '<div class="modal-header">{{name}}</div>\
        <div class="modal-body">\
        <div id="user_username">{{username}} </div>\
        <div id="user_email" >{{email}} </div>\
        <div id="user_street">{{street}} </div>\
        <div id="user_suite">{{suite}} </div>\
        <div id="user_city">{{city}} </div>\
        <div id="user_phone">{{phone}} </div>\
        <div id="user_website">{{website}} </div>\
        <div id="user_company_name">{{name}} </div>\
        <div id="user_catchPhrase">{{catchPhrase}} </div>\
    </div>';
    var a = $(this).data("about");
    $.get("http://jsonplaceholder.typicode.com/users",  function(data){
    var renderer = Mustache.render(template, data[a]);
    $('#modal').html(renderer).modal; 
    //history.pushState(renderer, null, $(this).attr('href'));
    });
});
});

        
    

    