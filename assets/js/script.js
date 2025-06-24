// Tableau global contenant des citations inspirantes
let citations = [
    "Le succès est la somme de petits efforts répétés chaque jour.",
    "N’abandonne jamais. Aujourd’hui est difficile, demain sera pire, mais après-demain, ce sera le soleil.",
    "L’échec est simplement l’opportunité de recommencer, cette fois de manière plus intelligente.",
    "La discipline est le pont entre les objectifs et les résultats.",
    "Si tu veux aller vite, marche seul. Si tu veux aller loin, marche avec les autres.",
    "Rêve grand, commence petit, agis maintenant.",
    "Fais de ton mieux jusqu’à ce que tu en saches plus. Ensuite, fais encore mieux."
  ];
  
  // Fonction qui choisit et affiche une citation au hasard
  function afficherCitation() {
    let index = Math.floor(Math.random() * citations.length);
    let citation = citations[index];
    document.getElementById("citation").textContent = citation;
  }
  