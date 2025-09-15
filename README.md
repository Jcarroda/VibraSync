# 🎵 VibraSync

## Usuario de prueba ✨
User: user_test |
Password: 123

## Creador de prueba ✨
User: creator_test |
Password: 123

## Admin de prueba ✨
User: admin_test |
Password: 123


**Tu plataforma de música personalizada sin anuncios**

VibraSync es una aplicación web moderna que te permite disfrutar de música de forma personalizada, organizar tu biblioteca musical y crear una experiencia de escucha única. Con una interfaz elegante y funcionalidades avanzadas, VibraSync te ofrece control total sobre tu música.

## ✨ Características Principales

- 🎶 **Reproductor de música avanzado** con controles intuitivos
- 📚 **Biblioteca personal** para organizar tus canciones
- 🎨 **Temas personalizables** para personalizar la experiencia
- 📤 **Subida de música** para agregar tus propias canciones
- 👤 **Sistema de usuarios** con perfiles personalizados
- 🔐 **Autenticación segura** con JWT
- 📱 **Diseño responsivo** que se adapta a cualquier dispositivo
- 🚫 **100% sin anuncios** para una experiencia pura

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones fluidas
- **Axios** - Cliente HTTP
- **Lucide React** - Iconos modernos

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MySQL** - Base de datos relacional
- **JWT** - Autenticación
- **Multer** - Manejo de archivos
- **Bcrypt** - Encriptación de contraseñas
- **Nodemailer** - Envío de emails

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- MySQL (versión 8.0 o superior)
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd VibraSync
```

### 2. Configurar la Base de Datos
1. Crea una base de datos MySQL llamada `vibra_sync`
2. Importa el archivo `vibra-sync_bd.sql` en tu base de datos:
```bash
mysql -u tu_usuario -p vibra_sync < vibra-sync_bd.sql
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

```env
# Base de datos
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=vibra_sync

# JWT
JWT_SECRET=tu_clave_secreta_jwt

# Servidor
PORT=3001

# Email (opcional)
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_email
```

### 4. Instalar Dependencias

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 5. Ejecutar la Aplicación

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
El backend estará disponible en `http://localhost:3001`

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
El frontend estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
VibraSync/
├── backend/                 # Servidor Node.js/Express
│   ├── config/             # Configuración de la base de datos
│   ├── controllers/        # Controladores de la API
│   ├── middleware/         # Middlewares de autenticación
│   ├── models/            # Modelos de datos
│   ├── routes/            # Rutas de la API
│   ├── uploads/           # Archivos subidos (audio/imágenes)
│   └── utils/             # Utilidades (email, etc.)
├── frontend/              # Aplicación Next.js
│   ├── src/
│   │   ├── app/           # Páginas de la aplicación
│   │   ├── components/    # Componentes reutilizables
│   │   ├── hooks/         # Hooks personalizados
│   │   └── utils/         # Utilidades del frontend
│   └── public/            # Archivos estáticos
└── vibra-sync_bd.sql      # Script de la base de datos
```

## 🎯 Funcionalidades Detalladas

### 🎵 Reproductor de Música
- Reproducción de archivos de audio
- Controles de play/pause, siguiente/anterior
- Barra de progreso interactiva
- Modo loop y reproducción automática
- Visualización de información de la canción

### 📚 Gestión de Biblioteca
- Organización de canciones por carpetas
- Sistema de favoritos
- Búsqueda y filtrado de música
- Estadísticas de reproducción

### 👤 Sistema de Usuarios
- Registro e inicio de sesión
- Perfiles de usuario personalizables
- Roles de usuario (usuario/admin)
- Panel de administración

### 🎨 Personalización
- Temas de colores personalizables
- Interfaz adaptativa
- Animaciones fluidas

## 🔧 Scripts Disponibles

### Backend
```bash
npm start          # Ejecutar en producción
npm run dev        # Ejecutar en desarrollo con nodemon
```

### Frontend
```bash
npm run dev        # Servidor de desarrollo
npm run build      # Construir para producción
npm run start      # Ejecutar en producción
npm run lint       # Ejecutar linter
```

## 🌐 API Endpoints

### Autenticación
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión
- `POST /auth/logout` - Cerrar sesión

### Canciones
- `GET /api/songs` - Obtener todas las canciones
- `POST /api/songs` - Subir nueva canción
- `DELETE /api/songs/:id` - Eliminar canción

### Perfiles
- `GET /api/profile` - Obtener perfil del usuario
- `PUT /api/profile` - Actualizar perfil

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

##📃 Documentación

[ Para más información del proyecto entra aquí ](https://github.com/Jcarroda/VibraSync/blob/master/Memoria%20del%20Proycto.pdf)

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

**¡Disfruta de tu música con VibraSync! 🎵✨**
