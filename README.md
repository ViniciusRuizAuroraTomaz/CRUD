# CRUD - Express.js

A CRUD application built entirely with JavaScript, capable of managing products, clients, and sales.

## Features:
- Create, read, update, and delete products
- Create, read, update, and delete clients
- Register sales
- Data validation using Zod
- SQLite database integration
- Organized backend architecture using repositories, services, controllers, routes, and middleware

## Technologies used:
- Express.js
- JavaScript
- Node.js
- Zod
- SQLite3

## What I learned in this project:
- Backend architecture (repositories, services, controllers, routes, and middleware)
- How to build a functional CRUD application
- Data validation and error handling
- How to create and manage a database with SQLite3
- How to structure a backend project

## How to Run the Project

You need to install Node.js if you don't have it already.

Link: https://nodejs.org/en/download

After that, download the ZIP file and extract its contents. Then, open CMD and execute the following commands:

```bash
cd (your project path)
cd CRUD
npm install
npm run start
```

The application will be running at localhost:3000 and for testing the api I recommend using Postman or Thunder Client

# Products Routes

Base URL:

```
localhost:3000/api/products
```

## GET Requests

### Get all products

Returns a list of all products.

**Endpoint:**

```http
GET /api/products
```

---

### Get low stock products

Returns all products with stock <= 10.

**Endpoint:**

```http
GET /api/products/low-stock
```

---

### Get total products in stock

Returns the total quantity of products currently in stock.

**Endpoint:**

```http
GET /api/products/total-products-stock
```

---

### Get total value of stock

Returns the total monetary value of all products currently in stock.

**Endpoint:**

```http
GET /api/products/total-value-stock
```

---

### Get product by ID

Returns a specific product using its ID.

**Endpoint:**

```http
GET /api/products/{id}
```

**Example:**

```http
GET /api/products/1
```

---

# POST Requests

## Create a product

Creates a new product.

**Endpoint:**

```http
POST /api/products
```

**Request Body example:**

```json
{
  "name": "Gan 356 M", // Name is unique
  "description": "3x3 magnetic speedcube with smooth turning and adjustable tension system", //optional
  "purchase_price": 18.9,
  "selling_price": 29.99,
  "qty_in_stock": 74,
  "category": "rubik's cube"
}
```

---

# PUT Requests

## Update a product

Updates all product information.

**Endpoint:**

```http
PUT /api/products/{id}
```

**Example:**

```http
PUT /api/products/1
```

**Request Body example:**

```json
{
  "name": "Gan 356 M", 
  "description": "3x3 magnetic speedcube with smooth turning and adjustable tension system", //optional
  "purchase_price": 18.9,
  "selling_price": 29.99,
  "qty_in_stock": 74,
  "category": "rubik's cube"
}
```

---

# PATCH Requests

## Partially update a product

Updates only the provided product fields.

**Endpoint:**

```http
PATCH /api/products/{id}
```

**Example:**

```http
PATCH /api/products/1
```

**Request Body example:**

```json
{
  "selling_price": 200
}
```

---

# DELETE Requests

## Delete a product

Removes a product from the database.

**Endpoint:**

```http
DELETE /api/products/{id}
```

**Example:**

```http
DELETE /api/products/1
```

```markdown
# Clients Routes

Base URL:

```
localhost:3000/api/clients
```

## GET Requests

### Get all clients

Returns a list of all clients.

**Endpoint:**

```http
GET /api/clients
```

---

### Get client by ID

Returns a specific client using its ID.

**Endpoint:**

```http
GET /api/clients/{id}
```

**Example:**

```http
GET /api/clients/1
```

---

### Get clients by name

Returns clients that match the given name.

**Endpoint:**

```http
GET /api/clients/name/{name}
```

**Example:**

```http
GET /api/clients/name/João
```

---

### Get clients by phone number

Returns clients that match the given phone number.

**Endpoint:**

```http
GET /api/clients/phone-number/{phone_number}
```

**Example:**

```http
GET /api/clients/phone-number/+5511999999999
```

---

# POST Requests

## Create a client

Creates a new client.

**Endpoint:**

```http
POST /api/clients
```

**Request Body example:**

```json
{
  "name": "João Silva",
  "type": "normal",
  "phone_number": "+5511999999999",
  "email": "joao@email.com",
  "cpf": "12345678901",
  "address": "Rua das Flores, 123"
}
```

> `type` is optional (`"normal"` or `"vip"`, default: `"normal"`)  
> `cpf` must be unique and contain exactly 11 digits  
> `address` is optional

---

# PUT Requests

## Update a client

Updates all client information.

**Endpoint:**

```http
PUT /api/clients/{id}
```

**Example:**

```http
PUT /api/clients/1
```

**Request Body example:**

```json
{
  "name": "João Silva",
  "type": "vip",
  "phone_number": "+5511999999999",
  "email": "joao@email.com",
  "cpf": "12345678901",
  "address": "Rua das Flores, 123"
}
```

---

# PATCH Requests

## Partially update a client

Updates only the provided client fields.

**Endpoint:**

```http
PATCH /api/clients/{id}
```

**Example:**

```http
PATCH /api/clients/1
```

**Request Body example:**

```json
{
  "type": "vip"
}
```

---

# DELETE Requests

## Delete a client

Removes a client from the database.  
A client cannot be deleted if they have associated sales.

**Endpoint:**

```http
DELETE /api/clients/{id}
```

**Example:**

```http
DELETE /api/clients/1
```

---

# Sales Routes

Base URL:

```
localhost:3000/api/sales
```

## GET Requests

### Get all sales

Returns a list of all sales ordered by most recent.

**Endpoint:**

```http
GET /api/sales
```

---

### Get sale by ID

Returns a specific sale using its ID.

**Endpoint:**

```http
GET /api/sales/{id}
```

**Example:**

```http
GET /api/sales/1
```

---

### Get sales by product ID

Returns all sales related to a specific product.

**Endpoint:**

```http
GET /api/sales/product/{product_id}
```

**Example:**

```http
GET /api/sales/product/1
```

---

### Get sales by client ID

Returns all sales related to a specific client.

**Endpoint:**

```http
GET /api/sales/client/{client_id}
```

**Example:**

```http
GET /api/sales/client/1
```

---

# POST Requests

## Create a sale

Creates a new sale.  
The system automatically calculates the total price and decreases the product stock.  
It also validates if the product and client exist, and if there is enough stock.

**Endpoint:**

```http
POST /api/sales
```

**Request Body example:**

```json
{
  "client_id": 1,
  "product_id": 1,
  "qty": 2
}
```
````
