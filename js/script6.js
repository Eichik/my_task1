
    $(document).ready(function (){
        $('#getInform_6').click(function (){ 
          var data = {name: "Mrs. Dennis Schulist", id: "6"}; 
          history.pushState(data, null, $(this).attr('href'));
          $.get("http://jsonplaceholder.typicode.com/users", data,  success, "json" )
          function success(InformData) {
            $('.modal-header').html( InformData[0].name);
            $('#user_username').html("Username: " + InformData[0].username);
            $('#user_email').html("Email: " + InformData[0].email);
            $('#user_street').html("Street: " + InformData[0].address.street);
            $('#user_suite').html("Suite: " + InformData[0].address.suite);
            $('#user_city').html("City: " + InformData[0].address.city);
            
            $('#user_phone').html("Phone: " + InformData[0].phone);
            $('#user_website').html("Website: " + InformData[0].website);

            $('#user_company_name').html("Name: " + InformData[0].company.name);
            $('#user_catchPhrase').html("СatchPhrase: " + InformData[0].company.catchPhrase);
            
            
            
            $('#modal').modal();
           
          };
        });
    });