    var pictureSource;    
    var destinationType;
    var strImgBase64
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
   
    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
        QRScanner.show();
        
    }
    
    QRScanner.scan(function(err, contents){
      if(err){
        if(err.name === 'SCAN_CANCELED') {
          console.error('The scan was canceled before a QR code was found.');
        } else {
          console.error(err._message);
        }
      }
      console.log('Scan returned: ' + contents);
    });
    
     QRScanner.getStatus(function(status){
        alert(status);
     });

    
 
// Make the webview transparent so the video preview is visible behind it. 
