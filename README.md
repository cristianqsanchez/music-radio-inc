<div align="center">
    <img src="Frontend/public/ico.png" alt="Logo" width="80" height="80">
    <div>
    </div>
    <h2>Music Radio Inc</h2>
</div>

- [Resumen](#resumen)
- [Pasos a seguir](#pasos-a-seguir)
- [Estructura](#estructura)

### Resumen
Web para la compra de álbumes musicales, con autenticación de usuarios y un endpoint para
obtener un listado de álbumes, dicho endpoint exige un token jwt como autorización.
En el frontend simulé un carrito de compra

| Endpoints        |                                                                                   | 
|------------------|-----------------------------------------------------------------------------------|
| ``/user/login``  | [![Run in Hoppscotch](https://hopp.sh/badge.svg)](https://hopp.sh/r/UAurA0eXusjt) |
| ``/user/signup`` | [![Run in Hoppscotch](https://hopp.sh/badge.svg)](https://hopp.sh/r/OE5kUmJqat5M) |
| ``/api/albums``  | [![Run in Hoppscotch](https://hopp.sh/badge.svg)](https://hopp.sh/r/qwwUPTlQ8mDs) |

### Pasos a seguir

Clonar el repositorio
```bash
git clone https://github.com/cristianqsanchez/music-radio-inc.git && cd music-radio-inc 
```

Instalar dependencias y ejecutar backend 
```bash
cd Auth/
dotnet build
dotnet run
```

Instalar dependencias y ejecutar frontend 
```bash
cd Frontend/
npm install
npm run dev
```

### Estructura

```text
.
├── Auth
│  ├── Controllers
│  ├── DB
│  ├── Models
│  ├── Program.cs
│  └── Services
└── Frontend/src
   ├── auth
   ├── albums
   ├── ui
   └── App.tsx
```
