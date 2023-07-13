# CI/CD con Github Actions

CI/CD con Github Actions es un proyecto desarrollado para entender el papel de la Integración Continua/Implementación Continua (CI/CD) y los flujos de trabajo automatizados en el desarrollo de software.

Este proyecto es el resultado del Curso [CI/CD for Software Developers](https://www.coursera.org/learn/codio-cicd-for-software-developers) de Coursera.


## Que aprendí en el curso y con el desarrollo de este proyecto?
- Comprender los procesos de automatización en el proceso de desarrollo de software.
- Automatizar procesos como la construcción, las pruebas, el control de calidad y el despliegue con Github y Github Actions.
- Administración de secretos, vaults y variables de entorno en los flujos de trabajo de Github Actions.
- Conectar eventos y acciones con Github Actions.
- Automatizar tareas usando npm.

## Proceso CI/CD
Para este proyecto se ha configurado un pipeline CI/CD con Github y Github Actions que realiza las siguientes acciones al crearse un evento de tipo push en la rama `main`. El resultado final es una aplicación web que se despliega automáticamente a Github Pages cada vez que se realiza un cambio en el código base. 

- **Build**: Construiremos manualmente una aplicación web utilizando Parcel, un paquete de aplicaciones web que simplifica el proceso de agrupación y optimización de activos web.
- **Lint**: Usaremos JSLint, una herramienta de calidad de código JavaScript, para verificar la base de código en busca de errores de estilo y sintaxis. Nos aseguraremos de que el código base esté limpio y siga las mejores prácticas para la codificación.
- **Test**: usaremos Jest, un marco de prueba de JavaScript, para escribir y ejecutar pruebas para el proyecto. Probaremos la funcionalidad y el comportamiento de la aplicación para asegurarnos de que funciona correctamente.
- **Deploy**: usaremos GitHub y GitHub Pages para implementar una versión funcional de nuestra aplicación.
- **Automate Commands**: automatizaremos los comandos para el proceso de CI/CD utilizando la sección de scripts de nuestro archivo package.json.
- **GitHub Actions**: Luego, configuraremos la canalización de CI/CD para el proyecto usando GitHub Actions para que cada vez que se realice un cambio en el código base, el proyecto se pruebe e implemente automáticamente.



## Instalación

