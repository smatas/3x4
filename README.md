# Método 3×4 — App de seguimiento

PWA (Progressive Web App) para hacer seguimiento del método de apuestas 3×4 con cuotas acumuladas por fase.

## Características

- Seguimiento en tiempo real de cada fase
- Cuota acumulada con anillo de progreso visual
- Cálculo automático del importe a apostar en cada paso
- Botones rápidos de cuotas (1.15 a 1.50)
- Guarda la sesión aunque cierres el navegador
- Funciona offline
- Instalable como app en iOS y Android

---

## Despliegue en Vercel (recomendado, gratis)

### Paso 1 — Subir a GitHub
1. Ve a [github.com](https://github.com) y crea una cuenta si no tienes
2. Crea un nuevo repositorio: botón **New** → ponle nombre (ej: `metodo-3x4`) → **Create repository**
3. Sube estos archivos arrastrándolos o usando el botón **Add file → Upload files**:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - carpeta `icons/` con `icon-192.png` e `icon-512.png`
4. Haz clic en **Commit changes**

### Paso 2 — Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com) y regístrate con tu cuenta de GitHub
2. Haz clic en **Add New Project**
3. Selecciona tu repositorio `metodo-3x4`
4. Sin cambiar nada, haz clic en **Deploy**
5. En ~30 segundos tendrás una URL tipo `metodo-3x4.vercel.app`

### Paso 3 — Instalar en el móvil

**En iPhone/iPad:**
1. Abre la URL en Safari
2. Toca el botón de compartir (cuadrado con flecha)
3. Selecciona **Añadir a pantalla de inicio**
4. La app aparecerá como un icono nativo

**En Android:**
1. Abre la URL en Chrome
2. Toca los tres puntos del menú
3. Selecciona **Añadir a pantalla de inicio** o **Instalar app**

---

## Estructura del proyecto

```
metodo-3x4/
├── index.html      ← Toda la app (HTML + CSS + JS)
├── manifest.json   ← Configuración PWA
├── sw.js           ← Service worker (offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## Personalización

Para cambiar los valores por defecto de stake y objetivos de cuota, edita estas líneas en `index.html`:

```html
<input type="number" id="cfg-stake" value="10" .../>   <!-- Stake por defecto -->
<input type="number" id="cfg-t1" value="2.15" .../>     <!-- Objetivo fase 1 -->
<input type="number" id="cfg-t2" value="2.12" .../>     <!-- Objetivo fase 2 -->
<input type="number" id="cfg-t3" value="2.16" .../>     <!-- Objetivo fase 3 -->
```
