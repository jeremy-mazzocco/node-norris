const fs = require('fs/promises');
const fetch = require('node-fetch');

const fetchDataAndSave = async () => {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    const jsonFilePath = 'norrisDb.json';

    const response = await fetch(apiUrl);
    const battuta = await response.json();

    let norrisDb = [];

    const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
    norrisDb = JSON.parse(fileContent);

    norrisDb.push(battuta);

    await fs.writeFile(jsonFilePath, JSON.stringify(norrisDb, null, 2));


    console.log(`Nuova battuta: ${battuta.value}`);

};


fetchDataAndSave();
