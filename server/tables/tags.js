import azureMobileApps from 'azure-mobile-apps';

let table = azureMobileApps.table();

table.columns = {
    "tag": "string"
};
table.dynamicScheme = false;
table.access = 'authenticated';

table.read((context) => {
    context.query.orderByDescending('createdAt')
    return context.execute().then(result => {
        let promiseArr = []
        result.forEach(item => {
            var prom = new Promise(function(resolve, reject){
                var query = {
                    sql: 'select i.id, i.createdAt, i.updatedAt, i.imageUrl, i.title, i.usersId from images_tags it left join images i on i.id = it.imagesId where it.tagsId = @tagsId order by i.createdAt desc',
                    parameters: [
                        { name: 'tagsId', value: item.id }
                    ]
                };
                context.data.execute(query)
                    .then(function (results) {
                        item.images = results;
                        resolve(item);
                }, error => reject(error));
            });
            promiseArr.push(prom);
        })
        return Promise.all(promiseArr);
    });
});


table.seed = [
  {
    "tag": "node",
    "id": "67cd2d6a-69a9-4f26-85c1-451aa8f8f1fb",
    "createdAt": "2016-08-28T04:51:41.917Z",
    "updatedAt": "2016-08-28T04:51:41.917Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "tag": "es2015",
    "id": "ec7abe79-ebd8-4f80-8c86-dac753777b54",
    "createdAt": "2016-08-28T04:51:41.918Z",
    "updatedAt": "2016-08-28T04:51:41.918Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "tag": "azure",
    "id": "8ef05914-7ae9-4c15-8990-fb67f314b7ed",
    "createdAt": "2016-08-28T04:51:41.920Z",
    "updatedAt": "2016-08-28T04:51:41.920Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "tag": "babel",
    "id": "1eee86df-ef93-4d8c-bb1c-67df487d61ba",
    "createdAt": "2016-08-28T05:57:34.566Z",
    "updatedAt": "2016-08-28T05:57:34.566Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "tag": "express",
    "id": "fbe8fa2d-6493-49d3-9cf3-cd75cc7229c5",
    "createdAt": "2016-08-28T06:01:40.336Z",
    "updatedAt": "2016-08-28T06:01:40.336Z",
    "version": "MQ==",
    "deleted": false
  }
]

export default table;
 