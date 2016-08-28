module.exports = {
    // Use this to skip the API version check
    skipVersionCheck: true,

    logging: {
        // The debug level can be one of 'debug, 'info', 'verbose' and defines
        // the minimum level to be logged.  By default, it is set to 'info' or
        // 'debug' depending on the setting of the MS_DebugMode app settings or
        // the debug switch (when running locally)
        level: 'verbose'
    },
    
    debug: true,

    // CORS is configured in the Azure App Service normally.  This setting is only for
    // local development outside of Azure App Service
    cors: {
        origins: [
            '*'
        ]
    },

    // Explicitly enable the Azure Mobile Apps home page
    homePage: true


};
