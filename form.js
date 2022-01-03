//-----form validation-----
const form=document.getElementById('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	if (formValidation()==false){
		window.open("index.html","_self");
        alert('Votre Message est Bien Reçu');
	}
});
const nom=document.getElementById('nom'),
email=document.getElementById('email'),
tel=document.getElementById('tel'),
sujet=document.getElementById('sujet'),
message=document.getElementById('message');

function  requiredElement(){
    if(nom.value==''){
        alert('Veuillez entrer votre nom ');
        nom.focus();
    }
    else{
        if(email.value==''){
            alert('Veuillez entrer votre E-mail ');
            email.focus();
        }
        else{
            if (tel.value=='') {
                alert('Veuillez entrer votre Téléphone ');
            tel.focus();
            }
            else{
               if (sujet.value=='') {
                alert('Veuillez entrer le sujet votre Message ');
                sujet.focus();    
               } 
               else{
                   if (message.value=='') {
                    alert('Veuillez saisir votre message ');
                    message.focus();                       
                   }
                   else{return (false);}
               }
            }
        }
    }
}
function emailValidation(email) {
    let mail=/\S+@\S+\.\S+/;
    return(mail.test(email));
}

function formValidation() {
    if (requiredElement()==false) {
        return(false) ;
    }
}
