const XLSX = require('xlsx');


const readExcel = (file) => {
    let items = [];
	const xlsFile = XLSX.readFile(file);
	const tab = xlsFile.SheetNames;
	const affectation = tab.filter(s => s === 'Affectation_Parc');
	let one = affectation.length === 1 ? affectation.join('') : undefined;
	if (one) {
		const excelSheet = xlsFile.Sheets[one];
		items = XLSX.utils.sheet_to_json(excelSheet);
		return items.map(row => {
			return jsonToObject(row);
		})
	} else {
		throw new Error("Il n'existe pas de de table : Affectation_Parc");
	}
}

function jsonToObject(row) {
	const obj = {};
	obj.train = row["N° Rame"] ?? 0
	obj.serie = row["Famille Série"] ?? ""
	obj.line = rename(row["Axe"]) ?? ""
		
	return obj;
}

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
const rames = readExcel('../Test.xlsx');

console.log(rames)



