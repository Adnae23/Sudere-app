const XLSX = require('xlsx');

// *************************** LECTURE DU FICHIER EXCEL
const readExcel = (file) => {
  const items = [];
  const data = [];
  const xlsFile = XLSX.readFile(file);
  // ********************************** ON RECUPERE LA LISTE DES ONGLETS
  const tab = xlsFile.SheetNames;
  // ********************************** ON RECHERCHE L'ONGLET "Affectation_Parc"
  const affectation = tab.filter((s) => s === 'Affectation_Parc');
  const one = affectation.length === 1 ? affectation.join('') : undefined;
  console.log(one);
};

readExcel('../Test.xlsm');
