    var pictureSource;    
    var destinationType;
    var strImgBase64
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
   
    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
       // QRScanner.show();
        
    }

    
     QRScanner.getStatus(function(status){
        alert(status);
     });

    
 
// Make the webview transparent so the video preview is visible behind it. 
