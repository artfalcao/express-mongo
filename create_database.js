const database = 'alura-books';
const collection = 'users';

use(database);
db.createCollection(collection);

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
