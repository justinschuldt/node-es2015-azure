import express from 'express';
import azureMobileApps from 'azure-mobile-apps';
//import config from './azureMobile'

export default function application() {

    // Set up a standard Express app
    let app = express();

    // Configuration of the Azure Mobile Apps can be done via an object, the
    // environment or an auxiliary file.  You can check out the default object
    // within node_modules/azure-mobile-apps/index.js (look for defaults).  You
    // can also export an object using azureMobile.js.  In this sample, check
    // out the example azureMobile.js file
    let mobile = azureMobileApps();
    console.log('app.js');

    // Import the files from the api directory to configure the /api API
    mobile.api.import('./server/api');

    // Import the files from the tables directory to configure the /tables API
    mobile.tables.import('./server/tables');

    // Initialize the database before listening for incoming requests
    // The tables.initialize() method does the initialization asynchronously
    // and returns a Promise.
    return mobile.tables.initialize().then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        return app;
    });
}
