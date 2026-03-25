
// @ts-nocheck
// console.log("coucou");
const uploadedImageDiv = document.getElementById("uploadedImage");
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", getImage, false);
let cropper = null;
const cropButton = document.getElementById("cropButton");
cropButton.addEventListener("click", cropImage);
let myGreatImage = null;
const croppedImage = document.getElementById("croppedImage");

function getImage() {
  console.log("images", this.files[0]);
  const imageToProcess = this.files[0];

  // display uploaded image
  let newImg = new Image(imageToProcess.width, imageToProcess.height);
  newImg.src = imageToProcess;
  // newImg.height = "100";
  // newImg.width = "100";
  newImg.src = URL.createObjectURL(imageToProcess);
  newImg.id = "myGreatImage";
  // uploadedImageDiv.style.border = "4px solid #FCB514";
  // uploadedImageDiv.innerHTML
  uploadedImageDiv.style.width = " 650px";
  uploadedImageDiv.style.height = "650px";
  uploadedImageDiv.appendChild(newImg);
  myGreatImage = document.getElementById("myGreatImage");

  processImage();
}

function processImage() {
  cropButton.style.display = "block";
  cropper = new Cropper(myGreatImage, {
    // aspectRatio: 1.5,
    // mouseWheelZoom: false,
    // touchDragZomm:false,
    // scrollwheel: false,
    // navigationControl: false,
    // mapTypeControl: false,
    // scaleControl: false,
    // draggable: false,   
    // toggleDragModeOnDblclick: false,
    // cropBoxMovable:false,
    // cropBoxResizable:false,
    // minCropBoxWidth:200,
    // minCropBoxHeight:200,
    //cropBoxMovable: false,
    // minContainerHeight  : 400,
    // minContainerWidth   : 400,
    // minCanvasWidth      : 200,
    // minCanvasHeight     : 200,
    // maxCropBoxWidth     : 100,
    // maxCropBoxHeight    : 100,
    // maxContainerHeight  : 200,
    // maxContainerWidth   : 200,
    // maxCanvasWidth      : 200,
    // maxCanvasHeight     : 200,
    aspectRatio:  650/650,  
    autoCropArea: 1,
    background: true,
    movable: false,
    resizable: false,
    checkOrientation: false,
    // zoomOnTouch: false,
    // zoomOnWheel: false,
    resizable: false,
    strict: false,
    guides: true,
    highlight: true,
    dragCrop: false,
    cropBoxResizable: true,
    checkOrientation: true,
    //cropBoxResizable: false,
    // dragMode: "move",
    // minCropBoxWidth: 100,
    // minCropBoxHeight: 156,
    viewMode: 2,

    data: {
      width: 1025,
      height:1025,
    },
    crop(event) {
      console.log(
        Math.round(event.detail.width),
        Math.round(event.detail.height)
      );
      const canvas = this.cropper.getCroppedCanvas();
      croppedImage.src = canvas.toDataURL("image/png");
    },
  });
}

function cropImage() {
  const imgurl = cropper.getCroppedCanvas().toDataURL();
  const img = document.createElement("img");
  img.src = imgurl;
  document.getElementById("cropResult").appendChild(img);
  draw();
}

function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = " 70px Roboto";
  ctx.textAlign = "center";
  ctx.fillStyle = 'black';

  // Draw slice
  ctx.drawImage(
    document.getElementById("croppedImage"),
    216,
    367,
    650,
    650
    // 900,
    // 0,
    // 900,
    // 900
  );

  // Draw frame
  ctx.drawImage(document.getElementById("frame"), 0, 0);
  ctx.fillText(document.getElementById("username").value, 696, 2272);
}

// downlad function

function download() {
  var download = document.getElementById("download");
  var image = document
    .getElementById("canvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  download.setAttribute("download", "Poster By Inspiro Creates.jpg");
}

// download button disaplay

$(function () {
  $("#cropButton").on("click", function () {
    $("#download").show();
  });
});


 // poster create button hide

 const toggleBtn = document.querySelector("#cropButton");
 const divList = document.querySelector("#poster");
 
 // action to be taken when clicked on hide list button
 toggleBtn.addEventListener("click", () => {
   if (divList.style.display === "none") {
     divList.style.display = "block";
     toggleBtn.innerHTML = "Hide List";
   } else {
     divList.style.display = "none";
     toggleBtn.innerHTML = "Show List";
   }
 });


// username hide 


 $(document).ready(function () {
  $("#cropButton").click(function () {
    $("#poster1").hide();
  });
});


// close button

$('#x').click(function () {
  location.reload();
});
// close button
$('#close').click(function () {
  location.reload();
});
// close button
$('#download').click(function () {
  location.reload();
});
