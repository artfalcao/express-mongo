// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('alura-books');

// Create a new document in the collection.
db.getCollection('users').insertMany([
    {
      "name": "Alice Johnson",
      "birthday": "1990-04-15",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001"
      },
      "email": "alice.johnson@example.com",
      "phone": "+1-555-123-4567",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Bob Smith",
      "birthday": "1985-08-25",
      "address": {
        "street": "456 Oak Ave",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105"
      },
      "email": "bob.smith@example.com",
      "phone": "+1-555-234-5678",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Charlie Davis",
      "birthday": "1992-11-05",
      "address": {
        "street": "789 Pine Rd",
        "city": "Chicago",
        "state": "IL",
        "zip": "60610"
      },
      "email": "charlie.davis@example.com",
      "phone": "+1-555-345-6789",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Diana Lee",
      "birthday": "1993-01-20",
      "address": {
        "street": "101 Maple Dr",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90001"
      },
      "email": "diana.lee@example.com",
      "phone": "+1-555-456-7890",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Edward Martinez",
      "birthday": "1988-06-30",
      "address": {
        "street": "202 Birch Blvd",
        "city": "Miami",
        "state": "FL",
        "zip": "33101"
      },
      "email": "edward.martinez@example.com",
      "phone": "+1-555-567-8901",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Fiona Garcia",
      "birthday": "1995-09-18",
      "address": {
        "street": "303 Cedar St",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101"
      },
      "email": "fiona.garcia@example.com",
      "phone": "+1-555-678-9012",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "George Brown",
      "birthday": "1982-12-03",
      "address": {
        "street": "404 Elm Ln",
        "city": "Houston",
        "state": "TX",
        "zip": "77001"
      },
      "email": "george.brown@example.com",
      "phone": "+1-555-789-0123",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Hannah Wilson",
      "birthday": "1998-07-22",
      "address": {
        "street": "505 Willow Dr",
        "city": "Austin",
        "state": "TX",
        "zip": "73301"
      },
      "email": "hannah.wilson@example.com",
      "phone": "+1-555-890-1234",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Ian Moore",
      "birthday": "1991-10-10",
      "address": {
        "street": "606 Pine Ln",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201"
      },
      "email": "ian.moore@example.com",
      "phone": "+1-555-901-2345",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    },
    {
      "name": "Jack Taylor",
      "birthday": "1987-02-14",
      "address": {
        "street": "707 Maple Ln",
        "city": "Denver",
        "state": "CO",
        "zip": "80202"
      },
      "email": "jack.taylor@example.com",
      "phone": "+1-555-012-3456",
      "created_at": "2025-01-09T12:00:00Z",
      "updated_at": "2025-01-09T12:00:00Z"
    }
]);
