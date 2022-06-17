/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const XLSX = require('xlsx');

const rename = (name) => {
  // ********************************** Renomme les lines
  switch (name) {
    case 'SE_Tsee':
      return 'Sud-Est';

    case 'SE_Tlg':
      return 'Sud-Est';

    case 'ATL':
      return 'Atlantique';

    case 'BHM':
      return 'Bisheim';

    case 'FALBALA':
      return 'FALBALA (Espagne)';

    case 'FOREST':
      return 'FOREST (Belgique)';

    default:
      return name;
  }
};

const jsonToTrain = (row) => {
  // ********************************** Ajoute les trains (n° rame, serie et line) dans le Json
  const train = {};

  train.id = row['N° Rame'] ?? 0;
  train.serie = row['Famille Série'] ?? '';
  train.line = rename(row.Axe) ?? '';

  return train;
};

const createArray = (excelFile) => {
  let items = [];
  const data = [];
  const lines = [];
  const series = [];

  const excelSheet = excelFile.Sheets.Affectation_Parc;
  items = XLSX.utils.sheet_to_json(excelSheet);
  data.push(items.map((row) => {
    // ********************* SI L'AXE N'EST PAS PRESENT DANS LE TABLEAU => ON L'AJOUTE
    if (!lines.includes(rename(row.Axe))) { lines.push(rename(row.Axe)); }
    // ********************* SI LA SERIE N'EST PAS PRESENTE DANS LE TABLEAU => ON L'AJOUTE
    if (!series.includes(row['Famille Série'])) { series.push(row['Famille Série']); }
    // ********************* ON AJOUTE UN OBJET (rame, axe, serie)
    return jsonToTrain(row);
  }));
  data.push(lines);
  data.push(series);
  return data;
};

const compare = (req, trainsFromDb) => {
  // ******************************* compare les données du xls aux données de la db
  const data = createArray(req.xlsFile);
  req.lines = [...data[1]];
  req.series = [...data[2]];
  req.trainsReplace = [];
  req.trainsDelete = [];
  data[0].map((train) => {
    if (train.serie === 'Atlantique') { train.trailers = 9; } else { train.trailers = 7; }
    req.trainsReplace.push(train);
  });

  trainsFromDb.map((train) => {
    for (const trainFromData of data[0]) {
      if (train !== trainFromData) { req.trainsDelete.push(train.id); }
    }
  });
};

module.exports = { compare };
