# CulinarySoft API

API REST para gestión de restaurantes desarrollada con Node.js, Express y Supabase.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- Supabase
- Git/GitHub
- Postman

---

# Instalación

## Clonar repositorio

```bash
git clone <repo_url>
```

## Instalar dependencias

```bash
npm install
```

## Configurar variables de entorno

Crear archivo `.env`

```env
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
PORT=4000
```

## Ejecutar proyecto

```bash
npm run dev
```

---

# Endpoints

# Dishes

## Obtener todos los platillos

### Request

```http
GET /api/dishes
```

### Response

```json
[
  {
    "dish_id": 1,
    "name": "Hamburguesa",
    "price": 95,
    "category_id": 2
  }
]
```
---

## Obtener un platillo

### Request

```http
GET /api/dishes/:id
```

### Parámetros

| Parámetro | Tipo |
|---|---|
| id | number |

---

## Crear platillo

### Request

```http
POST /api/dishes
```

### Body

```json
{
    "name": "Hot Cakes",
    "price": 85,
    "category_id": 3
}
```

### Response

```json
{
    "dish_id": 9,
    "name": "Hot Cakes",
    "price": 85,
    "category_id": 3,
    "is_active": true
}
```

---

## Actualizar platillo

### Request

```http
PATCH /api/dishes/:id
```

### Body

```json
{
  "price": 200
}
```
### Response
```json
{
    "dish_id": 9,
    "name": "Hot Cakes",
    "price": 200,
    "category_id": 3,
    "is_active": true
}
```
---

## Eliminar platillo

### Request

```http
DELETE /api/dishes/:id
```
### Response
```json
{
    "dish_id": 8,
    "name": "Chilaquiles",
    "price": 85,
    "category_id": 2,
    "is_active": true
}
```
---

# Inventory

## Obtener inventario

```http
GET /api/products
```
### Response
```json
[
    {
        "product_id": 3,
        "name": "Pan hoggie",
        "stock": 1500,
        "unit": "gramos",
        "minimum_stock": 680,
        "is_active": true
    },
    {
        "product_id": 4,
        "name": "Jamón de pavo",
        "stock": 3000,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 5,
        "name": "Mantequilla",
        "stock": 5000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 6,
        "name": "Jitomate",
        "stock": 10000,
        "unit": "gramos",
        "minimum_stock": 2000,
        "is_active": true
    },
    {
        "product_id": 7,
        "name": "Lechuga",
        "stock": 3000,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 8,
        "name": "Sal",
        "stock": 5000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 9,
        "name": "Coca Cola",
        "stock": 10000,
        "unit": "ml",
        "minimum_stock": 2000,
        "is_active": true
    },
    {
        "product_id": 10,
        "name": "Carne de res",
        "stock": 80000,
        "unit": "gramos",
        "minimum_stock": 2000,
        "is_active": true
    },
    {
        "product_id": 11,
        "name": "Cebolla",
        "stock": 7000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 12,
        "name": "Jalapeños",
        "stock": 3000,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 13,
        "name": "Mayonesa",
        "stock": 1500,
        "unit": "gramos",
        "minimum_stock": 350,
        "is_active": true
    },
    {
        "product_id": 14,
        "name": "Chocolate en polvo",
        "stock": 700,
        "unit": "gramos",
        "minimum_stock": 150,
        "is_active": true
    },
    {
        "product_id": 15,
        "name": "Azúcar glass",
        "stock": 3000,
        "unit": "gramos",
        "minimum_stock": 300,
        "is_active": true
    },
    {
        "product_id": 16,
        "name": "Azúcar",
        "stock": 8000,
        "unit": "gramos",
        "minimum_stock": 300,
        "is_active": true
    },
    {
        "product_id": 17,
        "name": "Harina",
        "stock": 12000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 18,
        "name": "Huevo",
        "stock": 10000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 19,
        "name": "Papas",
        "stock": 8000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    },
    {
        "product_id": 20,
        "name": "Pan brioche",
        "stock": 3000,
        "unit": "gramos",
        "minimum_stock": 600,
        "is_active": true
    },
    {
        "product_id": 2,
        "name": "Queso americano",
        "stock": 50,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 1,
        "name": "Queso panela",
        "stock": 4000,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 21,
        "name": "Granos de Café",
        "stock": 20000,
        "unit": "gramos",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 24,
        "name": "Salsa Verde",
        "stock": 1800,
        "unit": "ml",
        "minimum_stock": 500,
        "is_active": true
    },
    {
        "product_id": 23,
        "name": "Agua",
        "stock": 10000,
        "unit": "ml",
        "minimum_stock": 2000,
        "is_active": false
    },
    {
        "product_id": 22,
        "name": "Tortillas",
        "stock": 10000,
        "unit": "gramos",
        "minimum_stock": 1000,
        "is_active": true
    }
]
```
---
## Obtener un producto
```http
GET /api/products/:id
```
### Response
```json
{
    "product_id": 23,
    "name": "Agua",
    "stock": 10000,
    "unit": "ml",
    "minimum_stock": 2000,
    "is_active": false
}
```
---

## Crear producto

```http
POST /api/products
```

### Body

```json
{
    "name": "Leche",
    "stock": 2000,
    "unit": "ml",
    "minimum_stock": 500
}
```
---
### Response
```json
{
    "product_id": 25,
    "name": "Leche",
    "stock": 2000,
    "unit": "ml",
    "minimum_stock": 500,
    "is_active": true
}
```

## Actualizar producto
```http
PATCH /api/products/:id
```

### Body

```json
{
    "stock": 1800
}
```
---
### Response
```json
{
    "product_id": 24,
    "name": "Salsa Verde",
    "stock": 1800,
    "unit": "ml",
    "minimum_stock": 500,
    "is_active": true
}
```
## Eliminar producto
```http
PATCH /api/products/:id/delete
```
---
### Response
```json
{
    "product_id": 24,
    "name": "Salsa Verde",
    "stock": 1800,
    "unit": "ml",
    "minimum_stock": 500,
    "is_active": false
}
```
---

# Orders
## Get Orders
```http
GET /api/orders
```
### Response
```json
{
        "order_id": 1,
        "client_name": "Carlos López",
        "total": 150,
        "created_at": "2026-04-28T03:39:13.733532",
        "user_id": 1,
        "state_id": 1,
        "type_id": 2,
        "is_active": true
    }
```

## Get Order
```http
GET /api/orders/:id
```
### Response
```json
{
    "order_id": 2,
    "client_name": "Vanessa",
    "total": 0,
    "created_at": "2026-05-07T00:09:24.592",
    "user_id": 2,
    "state_id": 1,
    "type_id": 2,
    "is_active": false
}
```

## Crear orden

```http
POST /api/orders
```

### Body

```json
{
    "client_name": "Sophia",
    "user_id": 2,
    "state_id": 1,
    "type_id": 1
}
```
## Response

```json
{
    "order_id": 3,
    "client_name": "Sophia",
    "total": 0,
    "created_at": "2026-05-12T04:35:05.147",
    "user_id": 2,
    "state_id": 1,
    "type_id": 1,
    "is_active": true
}
```
---
## Actualizar orden
```http
PATCH /api/orders/:id
```

### Body

```json
{
    "user_id": 1
}
```
## Response

```json
{
    "order_id": 3,
    "client_name": "Sophia",
    "total": 0,
    "created_at": "2026-05-12T04:35:05.147",
    "user_id": 1,
    "state_id": 1,
    "type_id": 1,
    "is_active": true
}
```
---
## Eliminar orden
```http
PATCH /api/orders/:id/cancel
```
## Response

```json
{
    "order_id": 2,
    "client_name": "Vanessa",
    "total": 0,
    "created_at": "2026-05-07T00:09:24.592",
    "user_id": 2,
    "state_id": 1,
    "type_id": 2,
    "is_active": false
}
```
---

# Tickets

## Get Tickets
```http
GET /api/tickets
```
### Response
```json
[
    {
        "ticket_id": 1,
        "amount_of_clients": 2,
        "total": 135,
        "created_at": "2026-04-28T03:36:17.034059",
        "user_id": 1,
        "table_id": 3,
        "is_active": true
    },
    {
        "ticket_id": 2,
        "amount_of_clients": 4,
        "total": 0,
        "created_at": "2026-05-05T23:22:57.74",
        "user_id": 2,
        "table_id": 1,
        "is_active": true
    }
]
```

## Get Ticket
```http
GET /api/tickets/:id
```
### Response
```json
{
    "ticket_id": 2,
    "amount_of_clients": 4,
    "total": 0,
    "created_at": "2026-05-05T23:22:57.74",
    "user_id": 2,
    "table_id": 1,
    "is_active": true
}
```

## Crear ticket

```http
POST /api/tickets
```

### Body

```json
{
    "table_id": 4,
    "user_id": 1,
    "amount_of_clients": 2
}
```
## Response

```json
{
    "ticket_id": 4,
    "amount_of_clients": 2,
    "total": 0,
    "created_at": "2026-05-12T04:52:54.54",
    "user_id": 1,
    "table_id": 4,
    "is_active": true
}
```
---
## Actualizar ticket
```http
PATCH /api/tickets/:id
```

### Body

```json
{
    "user_id": 1
}
```
## Response

```json
{
    "ticket_id": 3,
    "amount_of_clients": 1,
    "total": 0,
    "created_at": "2026-05-05T23:44:21.747",
    "user_id": 1,
    "table_id": 2,
    "is_active": false
}
```
---
## Eliminar ticket
```http
PATCH /api/tickets/:id/close
```
## Response

```json
{
    "message": "Ticket cerrado e inventario actualizado",
    "ticket": {
        "ticket_id": 4,
        "amount_of_clients": 2,
        "total": 0,
        "created_at": "2026-05-12T04:52:54.54",
        "user_id": 1,
        "table_id": 4,
        "is_active": false
    }
}
```
---
#### Puedes importar docs/CulinarySoft.postman_collection.json en Postman para probar los endpoints.
