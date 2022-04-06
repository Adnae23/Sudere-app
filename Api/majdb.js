const XLSX = require('xlsx');

// *************************** LECTURE DU FICHIER EXCEL
const readExcel = (file) => {
    let items = [];
	let data = []
	const xlsFile = XLSX.readFile(file);
	// ********************************** ON RECUPERE LA LISTE DES ONGLETS
	const tab = xlsFile.SheetNames;
	// ********************************** ON RECHERCHE L'ONGLET "Affectation_Parc"
	const affectation = tab.filter(s => s === 'Affectation_Parc');
	let one = affectation.length === 1 ? affectation.join('') : undefined;
	let lines = []
	let series = []
	// ********************************** SI PRESENT => ON RECUPERE LES DONNEES SUR DIFFERENTES COLONNES 
	if (one) {
		const excelSheet = xlsFile.Sheets[one];
		items = XLSX.utils.sheet_to_json(excelSheet);
		data.push(items.map(row => {
			// ********************* SI L'AXE N'EST PAS PRESENT DANS LE TABLEAU => ON L'AJOUTE
			if(!lines.includes(rename(row["Axe"])))
				lines.push(rename(row["Axe"]))
			// ********************* SI LA SERIE N'EST PAS PRESENTE DANS LE TABLEAU => ON L'AJOUTE
			if(!series.includes(row["Famille Série"]))
				series.push(row["Famille Série"])
			// ********************* ON AJOUTE UN OBJET (rame, axe, serie)
			return jsonToTrain(row);
		}))
		data.push(lines)
		data.push(series)
		return data
	} else {
		// ************************ SI L'ONGLET N'EXISTE PAS ON LE SIGNALE
		throw new Error("Il n'existe pas de de table : Affectation_Parc");
	}
}

// *************************** CREATION DE L'OBJET
function jsonToTrain(row) {
	const train = {};
	
	train.id = row["N° Rame"] ?? 0
	train.serie = row["Famille Série"] ?? ""
	train.line = rename(row["Axe"].replace(/[éèê]/g,"e")) ?? ""
		
	return train;
}

// *************************** RENOMME LES AXES
const rename =(name) => {
    switch(name) {

        case 'SE_Tsee':
            return 'Sud-Est'
            
        case 'SE_Tlg':
            return 'Sud-Est'
            
        case 'ATL':
            return 'Atlantique'
            
        case 'BHM':
            return 'Bisheim'
            
        case 'FALBALA':
            return 'FALBALA (Espagne)'
            
        case 'FOREST':
            return 'FOREST (Belgique)'
            
        default:
            return name
    }
}
const rames = readExcel('../Test.xlsm');

console.log(rames)

module.exports= rames

