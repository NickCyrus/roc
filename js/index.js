    var pictureSource;    
    var destinationType;
    var strImgBase64
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
    QRScanner.scan(displayContents);
 
    function displayContents(err, text){
      if(err){
        // an error occurred, or the scan was canceled (error code `6`) 
      } else {
        // The scan completed, display the contents of the QR code: 
        alert(text);
      }
    }

    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
        QRScanner.show();
        
    }

    

    
 
// Make the webview transparent so the video preview is visible behind it. 
