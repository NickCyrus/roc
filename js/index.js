    var pictureSource;    
    var destinationType;
    var strImgBase64
    var loginHTML
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
   
    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }
    
     
    function showScann(){
        
            cordova.plugins.barcodeScanner.scan(
            
               function (result) {
                    if(!result.cancelled){
                           // In this case we only want to process QR Codes
                           if(result.format == "QR_CODE"){
                                var value = result.text;
                                // This is the retrieved content of the qr code
                                searchRef(value);
                           } 
                    } 
                 },
                 function (error) {
                      alert("Ha ocurrido un error: " + error);
                 },
                  {
                      prompt : "Por favor ubique el QR en centro de la pantalla"
                  });
    }
     
    function searchRef($ref){
        
          $ref = ($ref) ? $ref : $('#ref').val();
          var id_user = $('#id_user').val();         
          
            $.ajax({

					beforeSend:function(){
                        
                        $('#reponse-action').addClass('loading')
                        
                    },
                    crossDomain: true,    
					data   : "option=serachREF&ref="+$ref+"&id_user="+id_user,
					url    : 'https://www.regalosonlinecolombia.com/app_ajax.php', 
					type   : "POST",
					dataType: 'json',
					success:function(response){
                            if (response.error){
                               $('#reponse-action').html(response.error);
                            }
                        
                            if (response.success){
                               $('#reponse-action').html(response.html);
                            }
                                
                    },complete:function(){
                        $('#reponse-action').removeClass('loading')
                    }
                    
                })  
        
        
        
    }
    
    function use_giftcard(){
        
          var id_user = $('#id_user').val();
          var id_ref  = $('#id_ref').val();
          var id_gift = $('#id_gift').val();
          
            $.ajax({

					beforeSend:function(){
                        $('#reponse-action').addClass('loading')
                    },
                    crossDomain: true,    
					data   : "option=use_giftcard&id_user="+id_user+"&id_ref="+id_ref+"&id_gift="+id_gift,
					url    : 'https://www.regalosonlinecolombia.com/app_ajax.php', 
					type   : "POST",
					dataType: 'json',
					success:function(response){
                            if (response.error){
                               $('#reponse-action').html(response.error);
                            }
                        
                            if (response.success){
                               $('#reponse-action').html(response.html);
                            }
                                
                    },complete:function(){
                        $('#reponse-action').removeClass('loading')
                    }
                    
                }) 
    }

    function login(){
        
        var U = $('#client_login').val();
        var P  = $('#client_pass').val();
        
        if (U && P){
                
                $.ajax({

					beforeSend:function(){
                    },
                    crossDomain: true,    
					data   : "option=login&U="+U+"&P="+P,
					url    : 'https://www.regalosonlinecolombia.com/app_ajax.php', 
					type   : "POST",
					dataType: 'json',
					success:function(response){
                            if (response.error){
                               set_error (response.error);
                             }
                        
                            if (response.success){
                               set_content(response.html);
                            }
                                
                    }
                    
                })
        }else{
           set_error('Todos los datos son requeridos.'); 
        }
        
    }

    function logout(){
         $('#contenidoApp').html(loginHTML)
    }
    
    function set_error(msg){
        $('#error_msg').html(msg)
    }
    
    function set_content(html){
        $('#contenidoApp').html(html)
    }
    
    $(function(){
         loginHTML = $('#login').html();
    })