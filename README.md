
# Minimarket-back

## Descripción del Proyecto

**Minimarket-back** es una API desarrollada en Node.js con Express, que proporciona servicios para gestionar categorías de productos y productos. Utiliza Sequelize con TypeScript para la interacción con la base de datos SQLite, incluyendo migraciones y semillas para el manejo de los datos. Además, la API cuenta con documentación interactiva generada por Swagger y valida los datos de entrada con Joi.

## Arquitectura

El proyecto sigue una arquitectura organizada en:

- **Model-Service-Controller (MSC)**: Los modelos interactúan con la base de datos, los servicios manejan la lógica de negocio, y los controladores gestionan las respuestas HTTP.
- **Patrón Repositorio**: Implementado para manejar las entidades de la base de datos, separando la lógica de acceso a datos del resto de la aplicación.

### Principios SOLID:

- **S - Responsabilidad Única**: Cada clase o módulo tiene una única responsabilidad (controladores, servicios, modelos y repositorios).
- **L - Sustitución de Liskov**: Uso de interfaces que permiten ser implementadas en la sustitución de multiples repositorios y facilitar el cambio de bases de datos sin alterar la aplicación.
- **D - Inversión de Dependencias**: Las dependencias se inyectan en los controladores y servicios utilizando **TypeDI** para manejar la inversión de control.

## Requisitos

- **Sistema Operativo**: Windows (recomendado)
- **Node.js**: v18.17.0 (mínimo)
- **npm**: v9.6.7

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/rodrigotrejolozano/minimarket-back.git
   ```

2. Navega a la carpeta del proyecto:
   ```bash
   cd minimarket-back
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto, basado en el archivo `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Ejecuta las migraciones para crear las tablas en la base de datos:
   ```bash
   npm run db:migrate
   ```

6. Llena la base de datos con datos de prueba:
   ```bash
   npm run db:seed
   ```

7. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
8. Accede a la aplicación en:
   ```
   http://localhost:3001/api/v1
   ```
   
## Uso en Producción

1. Compila el proyecto:
   ```bash
   npm run build
   ```

2. Inicia el servidor en modo producción:
   ```bash
   npm run start:production
   ```

3. Accede a la aplicación en:
   ```
   http://localhost:3001/api/v1
   ```

## Documentación de la API

La API está documentada utilizando **Swagger**. Una vez que el servidor esté en ejecución, puedes acceder a la documentación completa e interactiva en:
http://localhost:3001/api-docs

## Hecho por

Desarrollado con cariño por **rorodev** 🖤 ( ^///^ )
