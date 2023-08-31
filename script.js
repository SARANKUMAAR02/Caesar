const outputtext1 = document.getElementById('cp-title');
const outputtext2 = document.getElementById('cp-plain');
const encryptbtn = document.getElementById('encryptButton')
const decryptbtn = document.getElementById('decryptButton')


encryptbtn.addEventListener('click',()=>{

    let plaintxt=String(document.getElementById('text-ec').value).toLowerCase();
    let key=Number(document.getElementById('key-ec').value);

    if(plaintxt && key == "" ){
        outputtext1.innerHTML = "Check Your Input" ;
    }

    else{

    let cipher="";

    for(let i=0;i<=plaintxt.length-1;i++){
        let temp = plaintxt.charCodeAt(i)-97 ;
        let c = (temp+key)%26;
        let ans = String.fromCharCode(c+65);
        cipher = cipher+ans;
    }
    if(plaintxt == ""){
        outputtext1.innerHTML = "" ;
        outputtext2.innerHTML = "" ; 
    }
    else{
        outputtext1.innerHTML = "Encrypted text :" ;
        outputtext2.innerHTML = `" ${cipher} "` ;
    }
    }
    
})

decryptbtn.addEventListener('click',()=>{

    let ciphertxt=String(document.getElementById('text-ec').value).toUpperCase();
    let key=Number(document.getElementById('key-ec').value);

    if(ciphertxt && key == "" ){
        outputtext1.innerHTML = "Check Your Input" ;
    }

    else{

    let plain="";

    for(let i=0;i<=ciphertxt.length-1;i++){
        let temp = ciphertxt.charCodeAt(i)-65 ;
        let l= (temp-key);
        
        if(l<0){
            l=26+l;
        }
        
        let p = l%26;
        let ans = String.fromCharCode(p+97);
        plain = plain+ans;
    }
    if(ciphertxt == ""){
        outputtext1.innerHTML = "" ;
        outputtext2.innerHTML = "" ; 
    }
    else{
        outputtext1.innerHTML = "Decrypted text :" ;
        outputtext2.innerHTML = `" ${plain} "` ;
    }
    }
})