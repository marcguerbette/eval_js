
//Exercice 1 : total d'une commande

function totalCommande()
{

    var PAP;//Prix à payer
    var PORT;//Fraix de port
    var REM=1; //remise
    var PU=prompt("Veuillez rentrer le prix unitaire de votre produits"); //prix unitaire
    var QTECOM=prompt("Combien en voulez vous ? ");//Quantité commandée
    var TOT=PU*QTECOM;
    if(TOT>500)
        {
            PORT=0;
        }
        else
        {
            PORT=TOT*0.02; 
        }
    if (PORT>0 && PORT<6)
        {
            PORT=6
        }
    if(TOT>100 && TOT<200)
        {
            REM=1.05;
        }
        else if(TOT>200)
        {
            REM=1.1;
        }
    PAP=(TOT/REM)+PORT;
    console.log("Les frais de port s'éléve à " +PORT);
    console.log("Vous avez commandez "+QTECOM+" produit à "+ PU)
    console.log("Le prix a payer est de "+ PAP)
}


//Exercice 2 Somme des entiers inférieurs à n 



function intSum()
{
    var n=parseInt(prompt("Rentrez nombre"));
    var sum=0 ; 

        for(i=0;i<=n;i++)
        {
        sum+=i ;
        }

    console.log("La somme de 1 à "+n+" est "+sum) ;
}


//Exercice 3 Mini et maxi dans un tableau 


function numTable()
    {

    var numberTable=new Array(); // On se sert d'un tableau pour stocker des valeurs
    var average=Number() ; //correspond à la moyenne
    var sum=Number() ; //permet d'additioner la totalité des nombres 



    do  {
        var number=Number(prompt("Rentrez nombre")); //On entre un nombre
        numberTable.push(number) ; //On le pousse dans le tableau
        }while(number!=0);

    for(i=0 ;i<numberTable.length;i++) //On lie les valeurs une par une et on les additionne à sum
        {
        sum=sum+numberTable[i];
        }
  
        average=(sum/(numberTable.length-1)); //On calcule la moyenne en divisant sum par la longueur du tableau  
        numberTable.splice(numberTable.length-1,1);
        console.log(numberTable);
        console.log("La moyenne est de "+ average) ;//qui correspond au nombre de valeur dans le tableau 
        console.log("Le minimum est de "+ Math.min(...numberTable));
        console.log("Le maximum est de "+ Math.max(...numberTable));
    }


//Exercice 4 Calcule nombre jeunes , moyens , vieux
//On peut rajouter un tableau ici pour stocker les valeurs mais c'est optionnel
function calculAge()
    {
    //var ageTable=new Array();
    var age=0 // On définie l'âge à 0 pour pouvoir rentrer dans la boucle
    var jeune=0;
    var moyen=0;
    var vieux=0
    while(age<100)
        {
        age=prompt("Rentrez l'âge de la personne")  ;
        //ageTable.push(age) ; 
        if(age<20)
            {
            jeune++;
            }
        else if(age>20 && age<40)
            {
            moyen++
            }
        else // traite le cas où la personne a + de 40 ans
            {
            vieux++
            }

    }
    console.log("Il y a "+jeune+" jeunes, "+moyen+" moyens et "+vieux+" vieux");   
    }






//Exercice 5
function multiple(X)
    {
    
    
    var result=Number() ; 

    for(i=1 ; i<=10 ;  i++)
        {
        result=i*X ; 
        console.log(i +" * "+ X + " = "+ result) ; 

        } 
    }
    


//Exercice 6 Recherche d'un prénom dans un tableau 


function nameSearch()
    {
    console.log(tab)
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var name=prompt("Rentrez un nom");
    var stock;//variable de stockage


    for(i=0;i<tab.length;i++)
    {
        if (name==tab[i])
        {
            stock=tab[i];
            tab[i]=tab[i+1];
            tab.splice(i,1);// On supprime une case a l'index i
            tab.push("");// On push un élement vide par rapport à la consigne "en mettant à blanc la dernière case."
        
        }//On ne traite que le cas où l'entrée de l'utilisateur est valide car la consigne ne demande pas de traiter les autre cas
    }

    console.log(tab)
    }

//Exercice 7 Vérification d'un formulaire , voir dans le fichier form.js




var exo1=document.getElementById('exo1');
var exo2=document.getElementById('exo2');
var exo3=document.getElementById('exo3');
var exo4=document.getElementById('exo4');
var exo6=document.getElementById('exo6');

exo1.addEventListener("click",totalCommande);
exo2.addEventListener("click",intSum);
exo3.addEventListener("click",numTable);
exo4.addEventListener("click",calculAge);
exo6.addEventListener("click",nameSearch);