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
### Success Response
### Error Response
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
  "name": "Pizza",
  "price": 180,
  "category_id": 1
}
```

### Response

```json
{
  "dish_id": 5,
  "name": "Pizza",
  "price": 180,
  "category_id": 1
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

---

## Eliminar platillo

### Request

```http
DELETE /api/dishes/:id
```

---

# Inventory

## Obtener inventario

```http
GET /api/inventory
```

---

## Crear producto

```http
POST /api/inventory
```

### Body

```json
{
  "name": "Queso",
  "stock": 5000,
  "unit": "gramos",
  "minimum_stock": 500
}
```

---

# Orders

## Crear orden

```http
POST /api/orders
```

### Body

```json
{
  "client_name": "Vanessa",
  "user_id": 1,
  "state_id": 1,
  "type_id": 1
}
```

---

# Tickets

## Crear ticket

```http
POST /api/tickets
```

### Body

```json
{
  "amount_of_clients": 4,
  "user_id": 2,
  "table_id": 5
}
```
---
#### Puedes importar docs/CulinarySoft.postman_collection.json en Postman para probar los endpoints.
