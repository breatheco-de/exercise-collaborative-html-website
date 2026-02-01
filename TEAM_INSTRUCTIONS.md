# Instrucciones para el equipo — Sitio colaborativo

Breve guía para que los miembros del equipo colaboren, prueben localmente y desplieguen el sitio.

1) Clonar el fork del líder

   - Asegúrate de clonar el fork del líder (no el repo original):

```bash
git clone https://github.com/Gina260418/exercise-collaborative-html-website.git
cd exercise-collaborative-html-website
```

2) Flujo de trabajo recomendado (ramas y Pull Requests)

   - Crea una rama por tarea/archivo:

```bash
git checkout -b feature/<tu-nombre>-<parte>
```

   - Edita solo tu archivo asignado en `website/templates/` (por ejemplo `first_heading.html`).
   - Añade, commitea y pushea tu rama:

```bash
git add website/templates/<tu_archivo>.html
git commit -m "feat: aporte de <tu-nombre> - <parte>"
git push origin feature/<tu-nombre>-<parte>
```

   - Abre un Pull Request desde tu rama hacia `master` del fork del líder. El líder revisa y hace merge.

3) Mantener el fork actualizado

   - Antes de empezar una nueva tarea, sincroniza tu `master` con el remoto del fork:

```bash
git checkout master
git pull origin master
```

4) Probar localmente

   - Sirve el sitio estático con `http-server` (recomendado para ver cambios rápidamente):

```bash
npx http-server --yes -c-1
```

   - Abre la URL que te ofrece `http-server` en el navegador.

5) Despliegue (opciones rápidas)

   - Vercel: conectar el fork al panel de Vercel y desplegar (instalar desde GitHub). Seleccionar la rama `master`.
   - Netlify: conectar repositorio y publicar; seleccionar carpeta de publicación si aplica (por defecto root).
   - GitHub Pages: en Settings → Pages, seleccionar la rama `master` y la carpeta `/(root)` o `docs/` según estructura.

6) Asignación de archivos y comunicación

   - Cada miembro edita únicamente su archivo dentro de `website/templates/`.
   - Usa issues o el chat del equipo para coordinar cambios en CSS, rutas o dependencias.

7) Buenas prácticas

   - Mensajes de commit claros: `feat(<parte>): descripción corta`.
   - Evitar commitear archivos binarios o personales.
   - Si hay conflictos, notifica en el PR y deja que el líder coordine la resolución.

Contacto: líder del equipo — Gina
