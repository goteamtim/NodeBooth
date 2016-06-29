function takePictures(){
    let time = new Date().getTime();
    $.get("localhost:3000/takePictures/"+time, function(data, status){
        
    });
}