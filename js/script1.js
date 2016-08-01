$(document).ready(function (){
    var template_user ='<div class="left span5">\
        <span class="name_user">{{name}}</span> \
        </div><div class="center span3"> \
        <span>{{id}} </span></div>' ;
    $.get("http://jsonplaceholder.typicode.com/users",  function(data){
        data.forEach(function(entry){
        var result = Mustache.render(template_user, entry);
        $('.line').appeng($('.template_user')).html(result);
        //$('.template_user').append(result);
        });
    });
});























































   // $('#getInform_1').click(function (){ 

        
    //console.log(result);
        /*var template = '<div id="modal" class="modal hide fade">\
   <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
        <div class="modal-header">{{name}}</div>\
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
    </div></div>';*/
    
   
    
    //$.get("http://jsonplaceholder.typicode.com/users",  function(data){ 
        
//var renderer = Mustache.render(template, data);
    //console.log(renderer);
    //$('body').append('#modal').html(renderer).modal;  
    
  //  }
   // );
   // });
//});
    //history.pushState(data, null, $(this).attr('href')); 
    