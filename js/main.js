function randompickerbtn() {
  
    let result = document.getElementById('randomPicker'),
     random_val = document.getElementById('randomValuePara'),
     red = Math.floor(Math.random()*225),
     green = Math.floor(Math.random()*225),
     blue = Math.floor(Math.random()*225);

    let hex_red = parseInt(red).toString(16),
        hex_green = parseInt(green).toString(16),
        hex_blue = parseInt(blue).toString(16);

        result.style.background = `#${hex_red}${hex_green}${hex_blue}`;
        random_val.innerHTML = `#${hex_red}${hex_green}${hex_blue}`;

}

function hexFindbtn() {
    let hexInput = document.getElementById('hexInput').value;
    let result = document.getElementById('color-box');
     console.log(hexInput.length);
    
    if(hexInput.length == 7 && hexInput.includes('#')){
      result.style.background = `${hexInput}`;
    }
}

function RGBFindbtn() {
  
    let rInput = document.getElementById('RInput').value;
    let gInput = document.getElementById('GInput').value;
    let bInput = document.getElementById('BInput').value;
    let result = document.getElementById('rgb-color-box');

    if(!rInput==''||!gInput==''||!bInput==''){

        result.style.background =`rgb(${rInput},${gInput},${bInput})`
    }

}

function RangeSelector() {
  
    let red_range = document.getElementById('RrInput').value;
    let green_range = document.getElementById('GrInput').value;
    let blue_range = document.getElementById('BrInput').value;
    let result = document.getElementById('range-color-box');

    result.innerHTML= `RGB(${red_range},${green_range},${blue_range})`;
    result.style.background=`rgb(${red_range},${green_range},${blue_range})`

}

// hex to rgb converter
function hexConvbtn() {
    let hex_val = document.getElementById('hexCInp').value;
    let output = document.getElementById('hexCOut');

    if(hex_val.length == 6){
        let r = hex_val.substring(0,2);
        let g = hex_val.substring(2,4);
        let b = hex_val.substring(4,6);

        output.innerHTML = `rgb(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)})`
    }  
    else{
        alert('please enter 6 digit only')
    }
}

// rgb to hex converter
function rgbConvbtn() {

   let get_rInp = document.getElementById('RCInput').value;
   let get_gInp = document.getElementById('GCInput').value;
   let get_bInp = document.getElementById('BCInput').value;
   let display_rgb= document.getElementById('rgbCOut');

   if(!get_bInp || !get_rInp || !get_gInp)return;

   let redHex= parseInt(get_rInp).toString(16);
   let greenHex= parseInt(get_gInp).toString(16);
   let blueHex = parseInt(get_bInp).toString(16);

   redHex.length == 1? '0'+redHex : redHex;
   greenHex.length == 1?' 0'+greenHex : greenHex;
   blueHex.length == 1? '0'+blueHex : blueHex;

   display_rgb.innerHTML = `#${redHex}${greenHex}${blueHex}`;

}
