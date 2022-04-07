const XLSX = require('xlsx');

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

const jsonToTrain = (row) => {
	const train = {};
	
	train.id = row["N° Rame"] ?? 0
	train.serie = row["Famille Série"] ?? ""
	train.line = rename(row["Axe"]) ?? ""
		
	return train;
}

const createArray = (excelFile) => {
    const items = []
    const data = []
    const lines = []
    const series = []

    const excelSheet = excelFile.Sheets['Affectation_Parc'];
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
}

const compare = (req, trainsFromDb) => {
    const data = createArray(req.xlsFile)
    req.lines = [...data[1]]
    req.series = [...data[2]]
    req.trains.add = []
    req.trains.update = []
    req.trains.delete = []
    data[0].map((train) => {
        const temp = {
            id : train.id,
            serie : train.serie,
            line : train.line}
        for(trainFromDb of trainsFromDb){
            if (trainFromDb.id === train.id)
                req.trains.update.push(temp)
            else
                req.trains.add.push(temp)
        }
    })
    trainsFromDb.map((train) => {
        for(trainFromData of data[0]){
            if (train != trainFromData)
                req.trains.delete.push(train.id)
        }
    })
    return req
}

module.exports = compare