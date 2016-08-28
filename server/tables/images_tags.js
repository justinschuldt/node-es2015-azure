import azureMobileApps from 'azure-mobile-apps';

let table = azureMobileApps.table();

table.columns = {
    "imagesId": "string",
    "tagsId": "string"
};

table.seed = [
    { imagesId: '16e37476-6b3b-4100-b59e-fbabea2ac5be', tagsId: '8ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { imagesId: '16e37476-6b3b-4100-b59e-fbabea2ac5be', tagsId: 'fbe8fa2d-6493-49d3-9cf3-cd75cc7229c5' },
    { imagesId: '9a82fe59-fa5d-46fd-9226-289e85aedd5e', tagsId: '1eee86df-ef93-4d8c-bb1c-67df487d61ba' },
    { imagesId: '16e37476-6b3b-4100-b59e-fbabea2ac5be', tagsId: '67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb' },
    { imagesId: '9a82fe59-fa5d-46fd-9226-289e85aedd5e', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' },
    { imagesId: 'f50f2860-7e8c-4f73-867c-c439df316990', tagsId: 'fbe8fa2d-6493-49d3-9cf3-cd75cc7229c5' },
    { imagesId: '9a82fe59-fa5d-46fd-9226-289e85aedd5e', tagsId: '8ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { imagesId: '9825f78f-861e-4cef-8000-155538ee2e23', tagsId: '67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb' },
    { imagesId: '9825f78f-861e-4cef-8000-155538ee2e23', tagsId: 'fbe8fa2d-6493-49d3-9cf3-cd75cc7229c5' },
    { imagesId: 'f1484e66-a7aa-4dbe-9e90-b958562c16ee', tagsId: '1eee86df-ef93-4d8c-bb1c-67df487d61ba' },
    { imagesId: 'f50f2860-7e8c-4f73-867c-c439df316990', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' },
    { imagesId: 'cc816343-2606-47b1-90c5-dd2033770448', tagsId: '67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb' },
    { imagesId: 'f1484e66-a7aa-4dbe-9e90-b958562c16ee', tagsId: '8ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { imagesId: 'cc816343-2606-47b1-90c5-dd2033770448', tagsId: 'fbe8fa2d-6493-49d3-9cf3-cd75cc7229c5' },
    { imagesId: '4c9113ee-d491-4aed-8e26-5dca88f33911', tagsId: '1eee86df-ef93-4d8c-bb1c-67df487d61ba' },
    { imagesId: 'f1484e66-a7aa-4dbe-9e90-b958562c16ee', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' },
    { imagesId: '4c9113ee-d491-4aed-8e26-5dca88f33911', tagsId: '8ef05914-7ae9-4c15-8990-fb67f314b7ed' },
    { imagesId: 'cc816343-2606-47b1-90c5-dd2033770448', tagsId: 'ec7abe79-ebd8-4f80-8c86-dac753777b54' }
]

// Configure table options
table.access = 'authenticated';

// Finally, export the table to the Azure Mobile Apps SDK - it can be
// read using the azureMobileApps.tables.import(path) method
export default table;
