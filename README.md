<div align="center">

# 🧮 Calculadora Científica JS

**Una calculadora científica elegante construida con JavaScript vanilla, arquitectura MVC y soporte de modo oscuro/claro.**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![Math.js](https://img.shields.io/badge/Math.js-14.x-FF6B35?style=flat-square)](https://mathjs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

</div>

---

## ✨ ¿Por qué probarla?

> ¿Cansado de calculadoras aburridas? Esta tiene todo lo que necesitas sin instalar nada pesado.

- 🎨 **Modo oscuro y claro** — cambia con un clic, el tema se **recuerda** entre sesiones (localStorage)
- ⌨️ **Soporte de teclado físico** — usa los números, operadores, `Enter`, `Backspace` y `Esc` directamente
- 🔬 **Funciones científicas** — raíz cuadrada, logaritmos (base 10 y natural), potencias y más
- 🛡️ **Anti-fallos** — manejo robusto de errores: divisiones entre cero, expresiones inválidas y overflow numérico controlados
- 📐 **Arquitectura MVC** — código limpio y separado en Modelo, Vista y Controlador
- 📱 **Diseño responsive** — se adapta a distintos tamaños de pantalla
- ♿ **Accesible** — `aria-labels`, roles semánticos y navegación por teclado

---

## 🚀 Funcionalidades

| Operación | Símbolo / Botón | Ejemplo |
|---|---|---|
| Suma | `+` | `5 + 3` → `8` |
| Resta | `-` | `10 - 4` → `6` |
| Multiplicación | `*` | `7 * 6` → `42` |
| División | `/` | `9 / 3` → `3` |
| Potencia | `^` | `2 ^ 8` → `256` |
| Porcentaje | `%` | `50 % 8` → `2` |
| Raíz cuadrada | `sqrt(` | `sqrt(144)` → `12` |
| Logaritmo base 10 | `log10(` | `log10(1000)` → `3` |
| Logaritmo natural | `log(` | `log(e)` → `1` |
| Paréntesis | `( )` | `(2 + 3) * 4` → `20` |
| Borrar último | `del` / `Backspace` | — |
| Borrar todo | `ac` / `Esc` | — |

---

## 🛠️ Instalación y uso local

### Prerrequisitos

- [Node.js](https://nodejs.org/) **v18 o superior** (incluye `npm`)
- Conexión a internet la primera vez (para instalar dependencias)

---

### 🐧 Linux

```bash
# 1. Clona el repositorio
git clone https://github.com/Rafa-x64/Javascript-Calculadora.git
cd Javascript-Calculadora

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor local
npm start
```

Abre tu navegador en: **[http://localhost:3000](http://localhost:3000)**

> 💡 También puedes usar `npm run dev` — es un alias de `npm start`.

---

### 🪟 Windows

> Puedes usar **PowerShell**, **CMD** o **Git Bash** — cualquiera funciona.

```powershell
# 1. Clona el repositorio
git clone https://github.com/Rafa-x64/Javascript-Calculadora.git
cd Javascript-Calculadora

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor local
npm start
```

Abre tu navegador en: **[http://localhost:3000](http://localhost:3000)**

> ⚠️ Si `git` no está instalado en Windows, descárgalo desde [git-scm.com](https://git-scm.com/download/win)

---

### ⚡ Sin instalar nada (solo Node.js)

Si ya tienes Node.js, puedes usar `npx` directamente sin clonar:

```bash
npx serve . --listen 3000
```

---

## 📁 Estructura del proyecto

```
Javascript-Calculadora/
│
├── index.html              # Punto de entrada — interfaz principal
│
├── controller/
│   └── c_index.js          # Controlador: eventos, teclado, tema
│
├── model/
│   └── calculadora.js      # Modelo: lógica de evaluación matemática
│
├── view/
│   └── css/
│       ├── index.css        # Estilos modo oscuro
│       └── index_claro.css  # Estilos modo claro
│
├── package.json             # Configuración del proyecto y scripts
└── .gitignore
```

---

## 🧑‍💻 Tecnologías usadas

| Tecnología | Rol |
|---|---|
| **JavaScript ES6+ (Modules)** | Lógica de la aplicación |
| **[Math.js](https://mathjs.org)** | Motor de evaluación de expresiones matemáticas |
| **[Bootstrap 5.3](https://getbootstrap.com)** | Grid y utilidades de layout |
| **CSS3** | Estilos propios, temas y micro-animaciones |
| **[serve](https://www.npmjs.com/package/serve)** | Servidor estático para desarrollo local |

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una idea:

1. Haz un **fork** del repositorio
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Haz tus cambios y confirma: `git commit -m "feat: descripción"`
4. Haz push: `git push origin feature/mi-mejora`
5. Abre un **Pull Request**

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** — libre para usar, modificar y distribuir.

---

<div align="center">

Hecho con ❤️ por [Rafa-x64](https://github.com/Rafa-x64)

</div>
