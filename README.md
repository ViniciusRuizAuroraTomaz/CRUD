# CRUD API - Express.js

A RESTful CRUD API built with JavaScript for managing products, clients and sales.

## Features

- CRUD for products and clients
- Sales registration with automatic stock updates
- SQLite database
- Data validation with Zod
- Layered architecture (Controllers, Services, Repositories and Middleware)

## Tech Stack

- Node.js
- Express.js
- JavaScript
- SQLite3
- Zod

## Project Structure

```
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── middlewares/
├── schemas/
├── database/
└── app.js
```

## Getting Started

```bash
git clone <repository-url>
cd CRUD
npm install
npm start
```

Server:

```
http://localhost:3000
```

---

# Products

Base URL

```
/api/products
```

| Method | Endpoint |
|--------|----------|
| GET | `/` |
| GET | `/low-stock` |
| GET | `/total-products-stock` |
| GET | `/total-value-stock` |
| GET | `/:id` |
| POST | `/` |
| PUT | `/:id` |
| PATCH | `/:id` |
| DELETE | `/:id` |

## Create / Update Body

```json
{
  "name": "Gan 356 M",
  "description": "3x3 magnetic speedcube",
  "purchase_price": 18.9,
  "selling_price": 29.99,
  "qty_in_stock": 74,
  "category": "Rubik's Cube"
}
```

## Patch Example

```json
{
  "selling_price": 35
}
```

---

# Clients

Base URL

```
/api/clients
```

| Method | Endpoint |
|--------|----------|
| GET | `/` |
| GET | `/:id` |
| GET | `/name/:name` |
| GET | `/phone-number/:phone_number` |
| POST | `/` |
| PUT | `/:id` |
| PATCH | `/:id` |
| DELETE | `/:id` |

## Create / Update Body

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

## Patch Example

```json
{
  "type": "vip"
}
```

---

# Sales

Base URL

```
/api/sales
```

| Method | Endpoint |
|--------|----------|
| GET | `/` |
| GET | `/:id` |
| GET | `/product/:product_id` |
| GET | `/client/:client_id` |
| POST | `/` |

## Create Body

```json
{
  "client_id": 1,
  "product_id": 1,
  "qty": 2
}
```
