import azureMobileApps from 'azure-mobile-apps';

let table = azureMobileApps.table();

table.columns = {
    "imageUrl": "string",
    "title": "string",
    "usersId": "string"
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
                    sql: 'select t.tag, t.id from images_tags it left join tags t on t.id = it.tagsId where it.imagesId = @imagesId',
                    parameters: [
                        { name: 'imagesId', value: item.id }
                    ]
                };
                context.data.execute(query)
                    .then(function (results) {
                        item.tags = results;
                        resolve(item);
                }, error => reject(error));
            });
            promiseArr.push(prom);
        })
        return Promise.all(promiseArr);

    });
});

table.insert((context) => {
    context.item.usersId = context.user.id;
    return context.execute();
});

table.seed = [
  {
    "createdAt": "2016-08-28T04:58:30.924Z",
    "imageUrl": "http://i.imgur.com/OZZlkBX.jpg",
    "title": "guy",
    "usersId": "9c6d5470-b95b-4c0a-9be1-225433402547",
    "id": "4c9113ee-d491-4aed-8e26-5dca88f33911",
    "updatedAt": "2016-08-28T04:58:30.924Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:57:50.512Z",
    "imageUrl": "http://i.imgur.com/aOScTPt.jpg",
    "title": "camera",
    "usersId": "9c6d5470-b95b-4c0a-9be1-225433402547",
    "id": "cc816343-2606-47b1-90c5-dd2033770448",
    "updatedAt": "2016-08-28T04:57:50.512Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:57:29.805Z",
    "imageUrl": "http://i.imgur.com/6x7ZRqn.jpg",
    "title": "people",
    "usersId": "9c6d5470-b95b-4c0a-9be1-225433402547",
    "id": "f1484e66-a7aa-4dbe-9e90-b958562c16ee",
    "updatedAt": "2016-08-28T04:57:29.805Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:56:18.698Z",
    "imageUrl": "http://i.imgur.com/WM0Iaix.jpg",
    "title": "bill",
    "usersId": "6311aa5d-fec6-4a6d-80df-c49ff8945d8c",
    "id": "9825f78f-861e-4cef-8000-155538ee2e23",
    "updatedAt": "2016-08-28T04:56:18.698Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:55:42.605Z",
    "imageUrl": "http://i.imgur.com/cOoWSQg.jpg",
    "title": "hotel",
    "usersId": "6311aa5d-fec6-4a6d-80df-c49ff8945d8c",
    "id": "f50f2860-7e8c-4f73-867c-c439df316990",
    "updatedAt": "2016-08-28T04:55:42.605Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:53:36.649Z",
    "imageUrl": "http://i.imgur.com/tYrzOhQ.jpg",
    "title": "max",
    "usersId": "308ece1a-7c6a-4479-a91e-8d95ef1129ab",
    "id": "9a82fe59-fa5d-46fd-9226-289e85aedd5e",
    "updatedAt": "2016-08-28T04:53:36.649Z",
    "version": "MQ==",
    "deleted": false
  },
  {
    "createdAt": "2016-08-28T04:51:46.931Z",
    "imageUrl": "http://i.imgur.com/LR6HHvA.jpg",
    "title": "old",
    "usersId": "308ece1a-7c6a-4479-a91e-8d95ef1129ab",
    "id": "16e37476-6b3b-4100-b59e-fbabea2ac5be",
    "updatedAt": "2016-08-28T04:51:46.931Z",
    "version": "MQ==",
    "deleted": false
  }
]

export default table;
