const UploadYourImageButton = document.getElementById("UploadYourImageButton");

UploadYourImageButton.addEventListener("click", function(){
    document.getElementById("input").click();
})

document.getElementById("input").addEventListener("change", function(event) {
    let FileName = event.target.files[0];

    if(FileName){
        document.getElementById("UploadYourImageButton").textContent = FileName.name;
        UploadYourImageButton.style.fontSize = "2em";
    }
})