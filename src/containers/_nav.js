export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Principal"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Ventas",
    to: "/purchases",
    icon: "cil-cart",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cotizaciones",
    to: "/currencys",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Otros"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Gastos",
    to: "/expenses",
    icon: "cil-chart-line",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Registrar",
    route: "/settings",
    icon: "cil-settings",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Productos",
        to: "/settings/products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Usuarios",
        to: "/settings/users",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Domenico",
        to: "/settings/domenico",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Clientes",
        to: "/settings/customers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Proveedores",
        to: "/settings/providers",
      },
    ],
  },
];
