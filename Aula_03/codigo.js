Please enter a MongoDB connection string (Default: mongodb://localhost/): mongosh
mongosh
Current Mongosh Log ID: 6a9762bf73d208550587f1c3
Connecting to:          mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.9.2
Using MongoDB:          8.3.7
Using Mongosh:          2.9.2
mongosh 2.10.0 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-08-25T19:26:38.715-03:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

mongosh> use store
switched to db store
store> db.create.Collection customers
Uncaught:
SyntaxError: Missing semicolon. (1:20)

> 1 | db.create.Collection customers
    |                     ^
  2 |

store> db.create.Collection("customers")
TypeError: db.create.Collection is not a function
store> db.createCollection("customers")
{ ok: 1 }
store> show collections
customers
store> db.customers.insertMany([  {
store> db.customers.insertMany([  {
store> db.customers.insertMany([  {
|     "name": "Ana",
store> db.customers.insertMany([  {
|     "name": "Ana",
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
store> db.customers.insertMany([  {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
|   {
|     "name": "Bruno",
|     "age": 32,
|     "city": "Feira de Santana",
|     "active": true,
|     "points": 300
|   },
|   {
|     "name": "Carlos",
|     "age": 28,
|     "city": "Salvador",
|     "active": false,
|     "points": 80
|   },
|   {
|     "name": "Daniela",
|     "age": 40,
|     "city": "São Paulo",
|     "active": true,
|     "points": 500
|   },
|   {
|     "name": "Eduarda",
|     "age": 22,
|     "city": "Rio de Janeiro",
|     "active": false,
|     "points": 50
|   }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a9769e373d208550587f1c4'),
    '1': ObjectId('6a9769e373d208550587f1c5'),
    '2': ObjectId('6a9769e373d208550587f1c6'),
    '3': ObjectId('6a9769e373d208550587f1c7'),
    '4': ObjectId('6a9769e373d208550587f1c8')
  }
}
store>

store> db.customers.find()
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c5'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true,
    points: 300
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c8'),
    name: 'Eduarda',
    age: 22,
    city: 'Rio de Janeiro',
    active: false,
    points: 50
  }
]
store> db.customers.find([
|   {
|     "name": "Ana",
|     "city": "Salvador"
|   },
|   {
|     "name": "Carlos",
|     "city": "Salvador"
|   }
| ])
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
store> db.customers.find([
|   {
|     "name": "Ana"}])
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
store> db.customers.find(
|   {
|     "name": "Ana"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  }
]
store> db.customers.find(
|   {
|     "name": "Ana"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  }
]
store>

store> db.customers.find({"city": "Salvador"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$et: {"active": true}})
MongoServerError: Unknown modifier: $et. Expected a valid update modifier or pipeline-style update specified as an array
store> db.costumers.updateOne({"name": "Carlos"}, {$set: {"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
store> db.customers.find({"city": "Salvador"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.customers.find({"name": "Carlos"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$set: {"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
store> db.customers.find({"name": "Carlos"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$set:{"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
store> db.customers.find({"name": "Carlos"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$set:{"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
store> db.customers.find({"name": "Carlos"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.customers.updateOne({"name": "Carlos"}, {$set:{"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.customers.find({"name": "Carlos"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80
  }
]
store> db.customers.updateMany({"city": "Salvador"}, {$set:{"state": "BA"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
store> db.customers.find({"state": "BA"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  }
]
store> db.customers.replaceOne({"name": "Ana"}, {$set:{"points": 170}})
MongoInvalidArgumentError: Replacement document must not contain atomic operators
store> db.customers.updateOne({"name": "Ana"}, {$set:{"points": 170}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.customers.find({"state": "BA"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 170,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  }
]
store> db.customers.insertOne({
|   "name": "Fernando",
|   "age": 29,
|   "city": "Recife",
|   "active": true,
|   "points": 90
| })
{
  acknowledged: true,
  insertedId: ObjectId('6a976fb473d208550587f1c9')
}
store> db.customers.find({"name": "Fernando"})
[
  {
    _id: ObjectId('6a976fb473d208550587f1c9'),
    name: 'Fernando',
    age: 29,
    city: 'Recife',
    active: true,
    points: 90
  }
]
store> db.customers.deleteOne({"name": "Eduarda"})
{ acknowledged: true, deletedCount: 1 }
store> db.customers.find()
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 170,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c5'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true,
    points: 300
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500
  },
  {
    _id: ObjectId('6a976fb473d208550587f1c9'),
    name: 'Fernando',
    age: 29,
    city: 'Recife',
    active: true,
    points: 90
  }
]
store> db.customers.updateOne({"name": "Daniela"}, {$set:{"vip": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.customers.find("name": "Daniela")
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.customers.find("name": "Daniela")
    |                         ^
  2 |

store> db.customers.find({"name": "Daniela"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500,
    vip: true
  }
]
store> db.customers.updateOne({"name": "Bruno"}, {$unset:{points: ""}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.customers.find({"name": "Daniela"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500,
    vip: true
  }
]
store> db.customers.find({"name": "Bruno"})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c5'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true
  }
]
store> db.customers.find().sort({idade: -1})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 170,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c5'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500,
    vip: true
  },
  {
    _id: ObjectId('6a976fb473d208550587f1c9'),
    name: 'Fernando',
    age: 29,
    city: 'Recife',
    active: true,
    points: 90
  }
]
store> db.customers.find().sort({age: -1})
[
  {
    _id: ObjectId('6a9769e373d208550587f1c7'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500,
    vip: true
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c5'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true
  },
  {
    _id: ObjectId('6a976fb473d208550587f1c9'),
    name: 'Fernando',
    age: 29,
    city: 'Recife',
    active: true,
    points: 90
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c6'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  },
  {
    _id: ObjectId('6a9769e373d208550587f1c4'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 170,
    state: 'BA'
  }
]
store> db.customers.find(
|   { active: true, age: { $gt: 30 } },
|   { name: 1, _id: 0 }
| )
[ { name: 'Bruno' }, { name: 'Daniela' } ]
store>
