var userSurname=document.getElementById('nom');
var userName=document.getElementById('prenom');
var birthDate=document.getElementById('ddn');
var postalCode=document.getElementById('cp');
var mailAdress=document.getElementById('mail');
var adress=document.getElementById('adresse');
var formValid=document.getElementById('send') ;
var textArea=document.getElementById('question');
var select=document.getElementById('select');
var radioGender=document.getElementById('sex');
var formCheck=document.getElementById('accept')



var nameRGEX=/^[^\s@+=,?;.:!§&#|><\]\\\d[{}][^@+=,?;.:!§&#|><\]\\\d[{}]+$/;
var birthDateREGX=/^\d{4}-\d{2}-\d{2}$/;
var postalCodeREGX=/^[0-9]{5,5}$/;
var mailREGX=/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
var adressREGX=/^[\w\'\-]+(\s[\w\'\-]+)*$/;
var textREGX=/^[^\ ]+[^@+=|><\][{}]+$/;
//On récupére les id du formulaire et on définie nos regex ici

formValid.addEventListener("click",validate) ; //On crée l'évenement on click depuis ici 

function validate(event)
    {
     
        var surnameResult=nameRGEX.test(userSurname.value);
        var nameResult=nameRGEX.test(userName.value);
        var postalResult=postalCodeREGX.test(postalCode.value);
        var mailResult=mailREGX.test(mailAdress.value);
        var adressResult=adressREGX.test(adress.value);
        var birthResult=birthDateREGX.test(birthDate.value);
        var textResult=textREGX.test(textArea.value);
        //Ici on teste tout nos regex 
        if(userSurname.value=="")
        {
            event.preventDefault();
            surname_span.textContent='Champ non renseigné';
            surname_span.style.color='red';
            
        }
    else if (surnameResult==false)
        {   event.preventDefault();     
            surname_span.textContent='Format incorrecte';
            surname_span.style.color='orange';
            
        }
    else
        {
            surname_span.textContent='Ok';
            surname_span.style.color='green';
        }

        if(userName.value=="")
        {
            event.preventDefault();
            name_span.textContent='Champ non renseigné';
            name_span.style.color='red';
            
        }
    else if (nameResult==false)
        {   event.preventDefault();     
            name_span.textContent='Format incorrecte';
            name_span.style.color='orange';
            
        }
    else
        {
            name_span.textContent='Ok';
            name_span.style.color='green';
        }


        if(birthDate.value=="")
        {
            event.preventDefault();
            birth_span.textContent='Champ non renseigné';
            birth_span.style.color='red';
            
        }
    else if (birthResult==false)
        {   event.preventDefault();     
            birth_span.textContent='Format incorrecte';
            birth_span.style.color='orange';
            
        }
    else
        {
            birth_span.textContent='Ok';
            birth_span.style.color='green';
        }
        
    if(postalCode.value=="")
        {
            event.preventDefault();
            postal_span.textContent='Champ non renseigné';
            postal_span.style.color='red';
            
        }
    else if (postalResult==false)
        {   event.preventDefault();     
            postal_span.textContent='Format incorrecte';
            postal_span.style.color='orange';
            
        }
    else
        {
            postal_span.textContent='Ok';
            postal_span.style.color='green';
        }
        if(adress.value=="")
        {
            event.preventDefault();
            adress_span.textContent='Champ non renseigné';
            adress_span.style.color='red';
            
        }
    else if (adressResult==false)
        {   event.preventDefault();     
            adress_span.textContent='Format incorrecte';
            adress_span.style.color='orange';
            
        }
    else
        {
            adress_span.textContent='Ok';
            adress_span.style.color='green';
        }
        if(mailAdress.value=="")
        {
            event.preventDefault();
            mail_span.textContent='Champ non renseigné';
            mail_span.style.color='red';
            
        }
    else if (mailResult==false)
        {   event.preventDefault();     
            mail_span.textContent='Format incorrecte';
            mail_span.style.color='orange';
            
        }
    else
        {
            mail_span.textContent='Ok';
            mail_span.style.color='green';
        }

        if(textArea.value=="")
        {
            event.preventDefault();
            textarea_span.textContent='Champ non renseigné';
            textarea_span.style.color='red';
            
        }
    else if (textResult==false)
        {   event.preventDefault();     
            textarea_span.textContent='Format incorrecte';
            textarea_span.style.color='orange';
            
        }
    else
        {
            textarea_span.textContent='Ok';
            textarea_span.style.color='green';
        }
        
        if(select.options[select.selectedIndex].value=="empty")
        {
            event.preventDefault();
            select_span.textContent='Veuillez choisir un sujet'
            select_span.style.color='red'
        }
        else
        {
            select_span.textContent='Ok';
            select_span.style.color='green';
        }

        if(radioGender.validity.valueMissing)
        {
            event.preventDefault();
            gender_span.textContent='Choissisez';
            gender_span.style.color='red';
            
        }
  
        
        else
        {
            gender_span.textContent='Ok';
            gender_span.style.color='green';
        }
       
        if(formCheck.validity.valueMissing)
        {
            event.preventDefault();
            check_span.textContent='Accepter le traitement de vos données';
            check_span.style.color='red';
        }
        else
        {
            check_span.textContent='Ok';
            check_span.style.color='green';
        }
    }