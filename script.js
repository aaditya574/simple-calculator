let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        var key = e.target.innerHTML;
        process(key);
    }
    )
}
)
document.addEventListener('onkeypress', (e)=>{
    var key = e.key;
    process(key);
})
function process(key){
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['(', ')', '+', '-', '*', '/', '.'];
    const undefs = ['Infinity', '-Infinity', 'undefined', 'NaN'];
    if(key == 'CL'){
        let string = "";
        document.querySelector('.screen').innerHTML = string;
    }
    else if(key == 'BK'){
        let string = document.querySelector('.screen').innerHTML;
        if(undefs.includes(string)) string  = "";
        else string = string.slice(0, -1);
        document.querySelector('.screen').innerHTML = string;
    }
    else if(key == 'EV'){
        let string = document.querySelector('.screen').innerHTML;
        if(undefs.includes(string)) string  = "";
        else string = eval(string);
        document.querySelector('.screen').innerHTML = string;
    }
    else{
        let string = document.querySelector('.screen').innerHTML;
        if(undefs.includes(string)) string  = "";
        if(numbers.includes(key) || symbols.includes(key))string = string + key;
        document.querySelector('.screen').innerHTML = string;
    }
}