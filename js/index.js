    var pictureSource;    
    var destinationType;
    var strImgBase64
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
   
    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
        cordova.plugins.barcodeScanner.scan(
            
               function (result) {
                    if(!result.cancelled){
                           // In this case we only want to process QR Codes
                           if(result.format == "QR_CODE"){
                                var value = result.text;
                                // This is the retrieved content of the qr code
                                console.log(value);
                           }else{
                              alert("Sorry, only qr codes this time ;)");
                           }
                    }else{
                      alert("The user has dismissed the scan");
                    }
                 },
                 function (error) {
                      alert("An error ocurred: " + error);
                 }
            );
        
    }
    
     

    
 
// Make the webview transparent so the video preview is visible behind it. 
