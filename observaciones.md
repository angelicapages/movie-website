Angie, 

Felicitaciones! No solo por la entrega de tu TP, sino por haber concluido tu camino en Ada como desarrolladora front end. Ha sido muy hermoso compartir estos ultimos meses con vos y ser testigo de tu entusiasmo permanente, tus ganas de aprender, tu constante compañía y buena onda, y el enorme crecimiento que tuviste en los ultimos meses. 

Obviamente se nota que falto tiempo para este TP, pero se que lo hiciste en medio de una experiencia laboral novedosa y con poco tiempo de tu lado. Se que muchas de las cosas que te voy a comentar, ya las sabes: consideralas una guia para saber que cosas es prioritario ir mejorando si en algun momento tenes ganas de revisitar este trabajo y dejarlo aun mejor. La nota refleja esta falta de tiempo, y no tu talento ni compromiso: en eso siempre tuviste un 10. 

A nivel comportamiento, obviamente lo mas saliente es que no tenemos responsive, y esa deberia ser tu primera prioridad. Luego de eso, avanzaria con los componentes que te faltan - trailers, temporadas, etc, todo lo relativo al detalle de una pelicula, que es tambien la parte mas compleja de la app. 

Habria sido bueno que lograras los componentes de listado que se ven en el modelo de Home, y creo que eso deberia ser tambien una prioridad, ya que tu pagina se siente algo repetitiva con la misma estructura de peliculas en Home y en las distintas secciones. Para las tabs, creo que la priroidad deberia ser implementar el paginado. 

Otros detalles que podrias ir mejorando con el tiempo:
- Estilado, ya que tu web se siente algo basica y no refleja lo que podes hacer como maquetadora
- El buscador necesita amor, un poquito mas de estilo al input, separaciones con el icono, etc. 
- Las imagenes del carrusel a veces son muy grandes, a veces se repiten. Fijate de acomodarlas con object-fit. 
- Necesitas imagenes default para las ocasiones donde no hay imagen en la pelicula (en el buscador esto es mas evidente)
- Se nota el esfuerzo por eliminar warnings de la consola, marca de tu compromiso!! 

Con respecto al codigo, tengo que mencionar lo prolijo que esta, lo bien que reutilizas logica y componentes, lo sencillo y eficiente de tus hooks, la excelente manera en que manejas la arquitectura. Tu codigo es sorprendentemente sencillo para la app que dejas entregada, y muy facil de leer y recorrer: eso es una marca de una desarrolladora que ya puede ir pensando en estrategias de mejora del codigo, de reutilizacion, que tiene en mente la simpleza, y habla muy bien de vos. 

Tengo que mencionar lo bien que resolviste los estilos. Se nota tu talento aca, con algo mas de tiempo se que hubieras entregado una UI hermosa y muy bien construida. Con poquismos componentes reutilizables, y un excelente uso de props, logras hacer una app prolija y bien hecha. Excelente todo el uso de styled components, realmente lo aprovechaste muy bien. 

Tengo que mencionar lo bien resuelto del carrusel, especialmente porque no se suelen ver soluciones hechas a mano, la mayoria de los devs opta por una libreria. Fue una valiente, y muy bienvenida, decision la de implementarlo vos y creo que te quedo muy bien. 

Algunas observaciones generales:
- Saca todos los archivos que no uses como App.test, index.css, setupTests
- Repetis titulos h1: recorda que debe haber solo 1 por pagina
- Repetis style={{ textDecoration: 'none', color: 'white' }} en todos tus link, ahi correspondia un styled component para todos tus link. Un StyledLink por ejemplo que extienda el Link de React Router. 

Tu repo de github esta bien, y se nota el esfuerzo por trabajar en branches, pero necesita urgentemente un README! 

Nota final: 7
