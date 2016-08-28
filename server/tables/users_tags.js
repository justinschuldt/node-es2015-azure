import azureMobileApps from 'azure-mobile-apps';

let table = azureMobileApps.table();

table.columns = {
    "usersId": "string",
    "tagsId": "string"
};

table.seed = [
    { usersId: '9c6d5470-b95b-4c0a-9be1-225433402547', tagsId: '67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb' },
    { usersId: '9c6d5470-b95b-4c0a-9be1-225433402547', tagsId: 'ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { usersId: '6311aa5d-fec6-4a6d-80df-c49ff8945d8c', tagsId: 'ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { usersId: '6311aa5d-fec6-4a6d-80df-c49ff8945d8c', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' },
    { usersId: '308ece1a-7c6a-4479-a91e-8d95ef1129ab', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' },
    { usersId: '308ece1a-7c6a-4479-a91e-8d95ef1129ab', tagsId: '67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb' }
]

// Configure table options
table.access = 'authenticated';

// Finally, export the table to the Azure Mobile Apps SDK - it can be
// read using the azureMobileApps.tables.import(path) method
export default table;
