const XLSX = require('xlsx');


const readExcel = (file) => {
    let items = [];
	let data = []
	const xlsFile = XLSX.readFile(file);
	const tab = xlsFile.SheetNames;
	const affectation = tab.filter(s => s === 'Affectation_Parc');
	let one = affectation.length === 1 ? affectation.join('') : undefined;
	if (one) {
		const excelSheet = xlsFile.Sheets[one];
		items = XLSX.utils.sheet_to_json(excelSheet);
		data.push(items.map(row => {
			return jsonToTrain(row);
		}))
		let lines = []
		let series = []
		items.map(row => {
			if(!lines.includes(rename(row["Axe"])))
				lines.push(rename(row["Axe"]))
		})
		items.map(row => {
			if(!series.includes(row["Famille Série"]))
				series.push(row["Famille Série"])
		})
		data.push(lines)
		data.push(series)
		return data
	} else {
		throw new Error("Il n'existe pas de de table : Affectation_Parc");
	}
}

function jsonToTrain(row) {
	const train = {};
	
	train.id = row["N° Rame"] ?? 0
	train.serie = row["Famille Série"] ?? ""
	train.line = rename(row["Axe"]) ?? ""
		
	return train;
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
const rames = readExcel('../Test.xlsm');

console.log(rames)

module.exports= rames

