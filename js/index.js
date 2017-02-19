    var pictureSource;    
    var destinationType;
    var strImgBase64
    
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
                                return value;
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
    
    function set_error(msg){
        $('#error_msg').html(msg)
    }
    
    function set_content(html){
        $('#contenidoApp').html(html)
    }