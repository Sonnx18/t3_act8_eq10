# YIN Soluciones — Sistema de Reparaciones (t3_act8_eq10)

Mini sistema en React que simula un login real contra una API de autenticación y una tabla de
datos con filtros, paginación y CRUD contra una API de terceros. Actividad 8 — Consumo de APIs de terceros.

## Integrantes

- Noel López Herrera
- Yhudiel Mendoza Sánchez

## API utilizada

- **Login / registro:** [DummyJSON Auth](https://dummyjson.com/docs/auth) (`/auth/login`, `/users/add`)
- **Tabla de datos (CRUD):** [DummyJSON Products](https://dummyjson.com/docs/products) (`/products`)

## Despliegue

Proyecto desplegado en: [http://168.119.237.117/t3_act8_eq10/](http://168.119.237.117/t3_act8_eq10/)

## Tecnologías

- React 19 + Vite
- React Router
- Axios

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Para compilar la versión de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
  components/   Componentes reutilizables (Login, Layout, Tabla)
  Hooks/        Hooks personalizados (useAuth)
  Pages/        Vistas/páginas de la aplicación
  Services/     Llamadas a las APIs externas (authService, productosService)
```
