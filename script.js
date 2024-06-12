document.getElementById('notify-success').style.display = 'none';
        document.getElementById('notify-fail').style.display = 'none';

const generateBtn = document.getElementsByClassName('generate-btn')[0];
var pinOut = document.getElementById('pinOut');

generateBtn.addEventListener('click', function () {
    const randomNum = Math.random() * 9000
    const token = Math.floor(1000 + randomNum)
    //console.log(token);
    pinOut.value = token ;
});

let pinIn = document.getElementById('pinIn');
let buttons = document.getElementsByClassName('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => { 
        let value = e.target.innerHTML;
        if(value == 'C'){
            string = "";
            pinIn.value = string;
        }
        else if(value == '&lt;'){
            string = string.slice(0,-1);
            pinIn.value = string;
        }
        else{
            string += value;
            pinIn.value = string;
        }
    })})
//try left area var declaration
    var tryLeft = document.getElementById('tryLeft')
var numTryLeft = parseInt(tryLeft.innerText);


  const submitBtn = document.getElementsByClassName('submit-btn')[0]
  submitBtn.addEventListener('click',function()
{
    //console.log('hello')
    if(pinOut.value == pinIn.value){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else{
        numTryLeft--;
        //console.log(numTryLeft);
        tryLeft.innerText = numTryLeft + ' try left';
        if(numTryLeft == 0)
            {
                submitBtn.disabled = true;
            }
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';

    }
})






