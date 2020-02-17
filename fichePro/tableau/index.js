var tableau = document.querySelector('table');

fetch('http://localhost:1337/apprenants')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            // console.log(data);
            console.log(data)
            
            
            
            let ligne = document.createElement('tr');

            let nom = document.createElement('td');
            nom.textContent = d.nom;

            let prenom = document.createElement('td');
            prenom.textContent = d.prenom;

            let mail = document.createElement('td');
            mail.textContent = d.mail;

            ligne.appendChild(nom);
            ligne.appendChild(prenom);
            ligne.appendChild(mail);
            tableau.append(ligne);




                let ligne2 = document.createElement('tr');
               for(let i = 0; i< d.competences_metiers.length;i++) {

    
                    let intitule = document.createElement('td');
                    intitule.textContent = d.competences_metiers[i].intitule;
                    ligne2.appendChild(intitule);

                    let categorie = document.createElement('td');
                    categorie.textContent = d.competences_metiers[i].categorie;
                    ligne2.appendChild(categorie);

                    let cell = document.createElement('td');
                    cell.textContent = d.competences_metiers[0].level_metier.Comprendre;
                    ligne2.appendChild(cell);

                    let cell1 = document.createElement('td');
                    cell1.textContent = d.competences_metiers[0].level_metier.duppliquer;
                    ligne2.appendChild(cell1);

                    let cell2 = document.createElement('td');
                    cell2.textContent = d.competences_metiers[0].level_metier.analyser;
                    ligne2.appendChild(cell2);

                    let cell3 = document.createElement('td');
                    cell3.textContent = d.competences_metiers[0].level_metier.evaluer;
                    ligne2.appendChild(cell3);

                    let cell4 = document.createElement('td');
                    cell4.textContent = d.competences_metiers[0].level_metier.concevoir;
                    ligne2.appendChild(cell4);

                    let cell5 = document.createElement('td');
                    cell5.textContent = d.competences_metiers[0].level_metier.inventer;
                    ligne2.appendChild(cell5);


                    
                }
            

                tableau.appendChild(ligne2)

              
                let ligne3 = document.createElement('tr');
                for(let i = 0; i< d.competences_techniques.length;i++) {

                    // for(let i=0; i<3; i++){
                    //     let cell1 = document.createElement('td');
                    //     Object.keys(d.competences_techniques[0].levelcomptech)
                    //     cell1.textContent = d.competences_techniques[0].levelcomptech.duppliquer;
                    //     ligne2.appendChild(cell1);
                
                    // }

    
                    let intitule = document.createElement('td');
                    intitule.textContent = d.competences_techniques[i].intitule;
                    ligne3.appendChild(intitule)

                    let cell6 = document.createElement('td');
                    cell6.textContent = d.competences_techniques[0].levelcomptech.Comprendre;
                    ligne3.appendChild(cell6);

                    let cell1 = document.createElement('td');
                    cell1.textContent = d.competences_techniques[0].levelcomptech.duppliquer;
                    ligne3.appendChild(cell1);

                    let cell2 = document.createElement('td');
                    cell2.textContent = d.competences_techniques[0].levelcomptech.analyser;
                    ligne3.appendChild(cell2);

                    let cell3 = document.createElement('td');
                    cell3.textContent = d.competences_techniques[0].levelcomptech.evaluer;
                    ligne3.appendChild(cell3);

                    let cell4 = document.createElement('td');
                    cell4.textContent = d.competences_techniques[0].levelcomptech.concevoir;
                    ligne3.appendChild(cell4);

                    let cell5 = document.createElement('td');
                    cell5.textContent = d.competences_techniques[0].levelcomptech.inventer;
                    ligne3.appendChild(cell5);

                }
                tableau.appendChild(ligne3)

                let ligne4 = document.createElement('tr');
                for(let i = 0; i< d.competence_humaines.length;i++) {

                    let qualite = document.createElement('td');
                    qualite.textContent = d.competence_humaines[i].qualite;
                    ligne4.appendChild(qualite)

                    let etat = document.createElement('td');
                    etat.textContent = d.competence_humaines[i].etat;
                    ligne4.appendChild(etat)

                }
                tableau.appendChild(ligne4)


        })



    });


  
    
    