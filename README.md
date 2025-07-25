Anuncio Interactivo para CapiBobba

Este proyecto es una página de aterrizaje (landing page) moderna y responsiva creada para CapiBobba, un servicio de entrega de bebidas. La página funciona como un anuncio digital interactivo, diseñado para captar la atención del cliente y facilitar el proceso de pedido a través de llamadas a la acción claras.

El sitio está desplegado y se puede ver en vivo aquí:
Ver Demo en Vivo

🚀 Características Principales
Diseño Atractivo y Responsivo: La interfaz se adapta perfectamente a dispositivos móviles, tabletas y computadoras de escritorio.

Llamadas a la Acción (CTA) Claras:

"¡Pide Ahora!": Un botón que redirige directamente a un chat de WhatsApp para agilizar los pedidos.

"Ver Menú": Enlace a una página externa donde los clientes pueden consultar el menú completo.

Modal Interactivo: Una barra inferior informa sobre el servicio a domicilio gratuito y, al hacer clic, abre un modal con la lista de todos los fraccionamientos que tienen cobertura.

Optimización para Producción: El proyecto está configurado con Vite para un rendimiento óptimo y se despliega automáticamente a través de GitHub Actions.

🛠️ Tecnologías Utilizadas
Este proyecto fue construido utilizando un stack de tecnologías modernas de desarrollo web:

React: Biblioteca principal para construir la interfaz de usuario interactiva.

Vite: Herramienta de desarrollo de frontend de última generación que proporciona un entorno de desarrollo rápido y compila el código para producción.

Tailwind CSS: Framework de CSS "utility-first" para un diseño rápido, responsivo y personalizable.

GitHub Pages: Plataforma de hosting donde se despliega el sitio.

GitHub Actions: Sistema de Integración Continua y Despliegue Continuo (CI/CD) para automatizar la compilación y el despliegue del sitio cada vez que se actualiza el código.

⚙️ Cómo Empezar Localmente
Si deseas clonar este repositorio y ejecutarlo en tu propia máquina, sigue estos pasos:

Clona el repositorio:

git clone https://github.com/FeyoMx/CapiBobba-Principal.git

Navega a la carpeta del proyecto:

cd CapiBobba-Principal

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

npm run dev

¡Abre http://localhost:5173 (o la URL que aparezca en tu terminal) en tu navegador para ver el proyecto en acción!

📦 Proceso de Despliegue
Este repositorio está configurado para un despliegue automático. Cualquier push a la rama main activará el workflow de GitHub Actions definido en .github/workflows/deploy.yml.

El workflow realiza los siguientes pasos:

Descarga el código.

Configura Node.js.

Instala las dependencias con npm ci.

Compila el proyecto para producción con npm run build.

Despliega la carpeta dist resultante en GitHub Pages.
