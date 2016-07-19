 window.onload(function() {
            var currentState = history.state;
            if (currentState != null) {
              $('#modal').html(currentState);
              $('#modal').modal();
            }
            else 
              return location.href;
                        
            });