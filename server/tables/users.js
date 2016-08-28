import azureMobileApps from 'azure-mobile-apps';

let table = azureMobileApps.table();

table.columns = {
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "uuid": "string",
    "password": "string"
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
                    sql: 'select id, createdAt, updatedAt, imageUrl, title, usersId from images where usersId = @usersId order by createdAt desc',
                    parameters: [
                        { name: 'usersId', value: item.id }
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
{ email: 'user@domain.com',
  firstName: null,
  lastName: null,
  uuid: null,
  password: '$2a$10$zWH.xT4CnLC9HJY4WI.oP.lUpbaOJQzACq0BNXyMaBEJJbd/VFWwK',
  id: '9c6d5470-b95b-4c0a-9be1-225433402547',
  createdAt: '2016-08-28T04:36:47.408Z',
  updatedAt: '2016-08-28T04:36:47.408Z',
  deleted: false },
{ email: 'person@domain.com',
  firstName: null,
  lastName: null,
  uuid: null,
  password: '$2a$10$vcQOfngTnfGbsy2QQ4BRoOY7GZzmascpiRW/CLUjl0NoJMvF2JRqO',
  id: '6311aa5d-fec6-4a6d-80df-c49ff8945d8c',
  createdAt: '2016-08-28T04:39:36.787Z',
  updatedAt: '2016-08-28T04:39:36.787Z',

  deleted: false },
{ email: 'man@domain.com',
  firstName: null,
  lastName: null,
  uuid: null,
  password: '$2a$10$viF5aWKJJTzYjPmeh7vth.XXbqN/Q4cHWXtrw.6D4DZAHue0/yPQG',
  id: '308ece1a-7c6a-4479-a91e-8d95ef1129ab',
  createdAt: '2016-08-28T04:42:42.446Z',
  updatedAt: '2016-08-28T04:42:42.446Z',
  deleted: false }
]

table.delete.access = 'disabled';

// Finally, export the table to the Azure Mobile Apps SDK - it can be
// read using the azureMobileApps.tables.import(path) method
export default table;
