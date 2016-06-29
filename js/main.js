function takePictures(){
    let time = new Date().getTime();
    //setInterval and use the interval id to stop it?
}

function takePicture(time){
    $.get("localhost:3000/takePictures/"+time, function(data, status){
        
    });
}