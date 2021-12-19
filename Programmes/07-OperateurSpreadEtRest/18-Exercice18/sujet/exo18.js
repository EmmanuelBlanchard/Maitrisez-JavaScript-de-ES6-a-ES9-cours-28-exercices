/*

    Sujet

    Créer une fonction générique permettant de faire une requete de type << select >>
    sur n'importe quelle table et en rajoutant des clauses << where >> associé par des << and >> :
    
    Exemples :

        select * from livre where type = "policier"

        select * from livre where type = "policier" and auteur = "Milo"

        select * from livre where type = "policier" and auteur = "Milo" and couleur = "bleu"


    -> Vous devez utilisez ici l'opérateur << rest >> 
    
*/