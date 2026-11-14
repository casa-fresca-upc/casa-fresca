# Casa Fresca

**Tu hogar más fresco, tu consumo bajo control.**

Casa Fresca es una propuesta de emprendimiento digital que ayuda a gestionar el confort térmico y a entender el consumo eléctrico en hogares de Lima Metropolitana. Este repositorio contiene la **Landing Page** del proyecto.

> Trabajo final del curso **1ASI0385 – IHC y Tecnologías Móviles**
> Docente: Salazar Ruiz, Kevin Edgar

## Información del proyecto

Casa Fresca es una aplicación móvil que orienta al usuario sobre ventilación, protección solar y uso de equipos (ventiladores, aire acondicionado), considerando las características de su vivienda y sus preferencias. Además, muestra el consumo, el costo y las emisiones estimadas de cada alternativa antes de decidir.

Principios del producto:

- Las **mediciones** se distinguen siempre de las **estimaciones**.
- La automatización solo aplica a dispositivos compatibles y acciones autorizadas, y el usuario puede pausarla o deshacerla.
- Modelo de negocio planteado: funciones básicas gratuitas y servicios de pago por evaluar (freemium).

> Los valores de temperatura y consumo que aparecen en la landing son **ilustrativos** y no representan mediciones reales.

## Autores

| Apellidos y nombres | Código |
| --- | --- |
| Abad Janampa, Farid Favio | U20241D439 |
| Aquino Torres, Joaquin Leonel | U202419093 |
| Baltazar Obregón, Angel Eduardo | U202424205 |
| Carlos Gamboa, Piero Valentino | U202419823 |
| Chavez Echevarria, Yerson Manuel | U20241C159 |
| Quispe Perez, Eder Edu | U202324623 |

## Segmentos objetivo

- **Inquilinos de departamentos y cuartos pequeños:** viven en espacios que se calientan rápido, no pueden hacer obras ni cambiar ventanas, pagan la electricidad directamente y son sensibles al costo.
- **Estudiantes universitarios que estudian desde casa:** pasan muchas horas en su vivienda, incluso en las horas de mayor calor, con presupuesto limitado y poca ventilación.

## Principales características

- Recomendaciones contextualizadas de ventilación, cortinas y uso de equipos.
- Comparador de alternativas con consumo, costo y emisiones estimadas.
- Automatización según las preferencias del usuario, con pausa y deshacer.
- Seguimiento del consumo estimado y registro de ahorro acumulado.
- Alertas de calor.
- Opción "¿Por qué?" para ver datos, supuestos y limitaciones de cada estimación.
- No requiere obras en la vivienda; vincular dispositivos es opcional.

## Estructura del proyecto

```
casa-fresca/
├── README.md
└── public/
    ├── index.html
    ├── favicon.ico
    └── assets/
        ├── styles/styles.css
        ├── images/
        └── scripts/main.js
```

## Flujo de trabajo con Git (GitFlow)

- `main`: versión estable.
- `develop`: integración del desarrollo.
- `feature/<nombre>`: nuevas funcionalidades, siempre creadas a partir de `develop`.
- `release/<version>`: preparación de una entrega.
- `hotfix/<nombre>`: correcciones urgentes sobre `main`.

## Cómo ejecutarlo

Es un sitio estático: abre `public/index.html` en el navegador (en WebStorm, clic derecho sobre el archivo → *Open in Browser*).
