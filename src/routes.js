import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));

const Purchases = React.lazy(() => import("./views/Purchases"));

const Products = React.lazy(() => import("./views/Settings/Products"));
const Domenico = React.lazy(() => import("./views/Domenico"));
const Users = React.lazy(() => import("./views/Settings/Users"));
const Customers = React.lazy(() => import("./views/Settings/Customers"));
const Providers = React.lazy(() => import("./views/Settings/Providers"));
const TheForm = React.lazy(() => import("./containers/TheForm"));
const Usuarios = React.lazy(() => import("./views/Settings/Users"));

const routes = [
  { path: "/", exact: true, name: "Home" },

  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/purchases", name: "Ventas", component: Purchases },

  { path: "/settings", exact: true, name: "Registrar", component: Products },
  { path: "/settings/products", name: "Productos", component: Products },
  { path: "/settings/users", name: "Usuarios", component: Users },
  { path: "/settings/domenico", name: "Usuarios", component: Domenico },
  { path: "/settings/customers", name: "Clientes", component: Customers },
  { path: "/settings/providers", name: "Proveedores", component: Providers },
  { path: "/settings/form/:price", name: "Formulario", component: TheForm },
];

export default routes;
