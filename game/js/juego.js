//Arreglo que contiene las preguntas
const preguntas = [
        {
            "id": 1,
            "Pregunta": "¿Qué protege la Constitución de Colombia para todos los ciudadanos?",
            "opcionA": "El derecho a tener mascotas",
            "opcionB": "La privacidad y los derechos fundamentales",
            "opcionC": "El derecho a elegir un trabajo",
            "opcionD": "El derecho a tener vacaciones",
            "correcta": "b"
        },
        {
            "id": 2,
            "Pregunta": "¿Qué tipo de derechos están garantizados en el primer título de la Constitución de Colombia?",
            "opcionA": "Derechos laborales",
            "opcionB": "Derechos inviolables",
            "opcionC": "Derechos de los estudiantes",
            "opcionD": "Derechos de propiedad",
            "correcta": "b"
        },
        {
            "id": 3,
            "Pregunta": "¿Cómo se llaman los derechos que no pueden ser violados según la Constitución?",
            "opcionA": "Derechos Temporales",
            "opcionB": "Derechos Inviolables",
            "opcionC": "Derechos Condicionales",
            "opcionD": "Derechos Alternativos",
            "correcta": "b"
        },
        {
            "id": 4,
            "Pregunta": "¿Qué debe hacer el Estado para proteger a sus ciudadanos según la Constitución?",
            "opcionA": "Construir parques",
            "opcionB": "Asegurar que se respeten los derechos fundamentales",
            "opcionC": "Organizar eventos deportivos",
            "opcionD": "Proveer comida gratuita",
            "correcta": "b"
        },
        {
            "id": 5,
            "Pregunta": "¿Qué garantiza la Constitución sobre el acceso a la justicia?",
            "opcionA": "Que todos puedan visitar a los jueces",
            "opcionB": "Que cada persona puede defender sus derechos",
            "opcionC": "Que todos tienen derecho a un abogado famoso",
            "opcionD": "Que las decisiones judiciales sean rápidas",
            "correcta": "b"
        },
        {
            "id": 6,
            "Pregunta": "¿Qué establece la Constitución sobre la libertad de expresión?",
            "opcionA": "Solo los políticos pueden hablar libremente",
            "opcionB": "Todos los ciudadanos tienen el derecho a expresarse libremente",
            "opcionC": "La libertad de expresión solo aplica en redes sociales",
            "opcionD": "Solo se puede hablar sobre temas permitidos por el gobierno",
            "correcta": "b"
        },
        {
            "id": 7,
            "Pregunta": "Según la Constitución, ¿qué se debe hacer si se viola un derecho fundamental?",
            "opcionA": "Esperar a que pase el tiempo",
            "opcionB": "Hacer una queja en una tienda",
            "opcionC": "Buscar ayuda legal y presentar una denuncia",
            "opcionD": "Hablar con amigos",
            "correcta": "c"
        },
        {
            "id": 8,
            "Pregunta": "¿Qué dice la Constitución sobre la igualdad ante la ley?",
            "opcionA": "Solo los ricos tienen derechos iguales",
            "opcionB": "Todos los ciudadanos deben ser tratados igual por la ley",
            "opcionC": "Solo los extranjeros tienen derechos iguales",
            "opcionD": "La igualdad solo se aplica en la escuela",
            "correcta": "b"
        },
        {
            "id": 9,
            "Pregunta": "¿Qué papel tienen las autoridades según la Constitución en relación con los derechos fundamentales?",
            "opcionA": "Hacer leyes nuevas",
            "opcionB": "Respetar y proteger los derechos fundamentales",
            "opcionC": "Elegir los jueces",
            "opcionD": "Prohibir ciertas actividades",
            "correcta": "b"
        },
        {
            "id": 10,
            "Pregunta": "¿Qué asegura la Constitución para todas las personas en Colombia en términos de salud y educación?",
            "opcionA": "Que todos puedan estudiar en el extranjero",
            "opcionB": "Que cada persona reciba servicios básicos de salud y educación",
            "opcionC": "Que cada niño tenga una computadora",
            "opcionD": "Que todos tengan una escuela cerca de casa",
            "correcta": "b"
        },
        {
            "id": 11,
            "Pregunta": "¿Qué garantiza el Título 2 de la Constitución de Colombia a los ciudadanos?",
            "opcionA": "El derecho a tener una mascota",
            "opcionB": "La protección y promoción de los derechos fundamentales",
            "opcionC": "El acceso a tiendas de comida",
            "opcionD": "La libertad para viajar al extranjero",
            "correcta": "b"
        },
        {
            "id": 12,
            "Pregunta": "¿Cuál es uno de los propósitos del Título 2 según la Constitución?",
            "opcionA": "Promover la construcción de edificios",
            "opcionB": "Garantizar el respeto y la protección de los derechos de las personas",
            "opcionC": "Organizar eventos culturales",
            "opcionD": "Facilitar el transporte público",
            "correcta": "b"
        },
        {
            "id": 13,
            "Pregunta": "¿Qué derechos se promueven en el Título 2 de la Constitución?",
            "opcionA": "Derechos laborales",
            "opcionB": "Derechos humanos y fundamentales",
            "opcionC": "Derechos de los estudiantes",
            "opcionD": "Derechos de propiedad privada",
            "correcta": "b"
        },
        {
            "id": 14,
            "Pregunta": "Según el Título 2, ¿qué puede hacer cualquier persona si sus derechos son violados?",
            "opcionA": "Esperar a que las cosas se solucionen solas",
            "opcionB": "Presentar una queja ante las autoridades competentes",
            "opcionC": "Publicar en redes sociales",
            "opcionD": "Hablar con amigos",
            "correcta": "b"
        },
        {
            "id": 15,
            "Pregunta": "¿Qué función tienen las autoridades según el Título 2 de la Constitución?",
            "opcionA": "Organizar ferias",
            "opcionB": "Proteger y respetar los derechos de los ciudadanos",
            "opcionC": "Crear nuevas leyes de tráfico",
            "opcionD": "Supervisar la televisión",
            "correcta": "b"
        },
        {
            "id": 16,
            "Pregunta": "¿Qué debe hacer el Estado para asegurar el respeto de los derechos según la Constitución?",
            "opcionA": "Construir más edificios",
            "opcionB": "Asegurar que todos los ciudadanos conozcan sus derechos",
            "opcionC": "Ofrecer descuentos en tiendas",
            "opcionD": "Facilitar el acceso a actividades recreativas",
            "correcta": "b"
        },
        {
            "id": 17,
            "Pregunta": "¿Qué derecho fundamental se asegura en el Título 2 en relación con la educación?",
            "opcionA": "El derecho a asistir a clases particulares",
            "opcionB": "El derecho a una educación básica y de calidad",
            "opcionC": "El derecho a elegir a los profesores",
            "opcionD": "El derecho a tener una computadora en casa",
            "correcta": "b"
        },
        {
            "id": 18,
            "Pregunta": "¿Qué establece la Constitución sobre el derecho a la salud?",
            "opcionA": "Que todos deben pagar por su atención médica",
            "opcionB": "Que el Estado debe garantizar servicios de salud accesibles para todos",
            "opcionC": "Que solo las personas ricas pueden acceder a buena salud",
            "opcionD": "Que solo se puede recibir atención médica en hospitales privados",
            "correcta": "b"
        },
        {
            "id": 19,
            "Pregunta": "¿Cuál es uno de los deberes de los ciudadanos según el Título 2?",
            "opcionA": "Participar en concursos",
            "opcionB": "Conocer y respetar las leyes",
            "opcionC": "Colaborar en proyectos escolares",
            "opcionD": "Ahorrar dinero en el banco",
            "correcta": "b"
        },
        {
            "id": 20,
            "Pregunta": "¿Qué papel juegan las leyes en la protección de los derechos según el Título 2?",
            "opcionA": "Hacer que los ciudadanos paguen impuestos",
            "opcionB": "Asegurar que los derechos fundamentales sean respetados",
            "opcionC": "Decidir sobre los horarios de trabajo",
            "opcionD": "Regular el uso de tecnología",
            "correcta": "b"
        },
        {
            "id": 21,
            "Pregunta": "¿Qué se debe hacer si una persona siente que su derecho a la educación ha sido violado?",
            "opcionA": "Hablar con amigos",
            "opcionB": "Esperar a que se solucione",
            "opcionC": "Buscar asesoría legal y presentar una queja",
            "opcionD": "Publicar en redes sociales",
            "correcta": "c"
        },
        {
            "id": 22,
            "Pregunta": "¿Qué establece la Constitución en relación con la protección de los derechos de las minorías?",
            "opcionA": "Que no se les debe prestar atención",
            "opcionB": "Que deben ser respetados y protegidos",
            "opcionC": "Que tienen menos derechos que los demás",
            "opcionD": "Que solo pueden ser escuchados en elecciones",
            "correcta": "b"
        },
        {
            "id": 23,
            "pregunta": "¿Qué establece el Título 11 de la Constitución de Colombia?",
            "opcionA": "Las reglas para la educación",
            "opcionB": "La administración de los recursos y el sistema financiero del país",
            "opcionC": "Cómo se deben construir las viviendas",
            "opcionD": "La organización de eventos culturales",
            "correcta": "B"
          },
        {
            "id": 24,
            "pregunta": "¿Cuál es el propósito principal del Título 11?",
            "opcionA": "Regular los eventos deportivos",
            "opcionB": "Establecer cómo se deben administrar los recursos del país y organizar el sistema financiero",
            "opcionC": "Controlar la producción de alimentos",
            "opcionD": "Definir cómo se deben celebrar las festividades nacionales",
            "correcta": "B"
          },
        {
            "id": 25,
            "pregunta": "¿Qué características tiene la administración de los recursos según el Título 11?",
            "opcionA": "Solo se enfoca en eventos culturales",
            "opcionB": "Debe ser transparente, eficiente, y adecuada para el desarrollo del país",
            "opcionC": "Solo se ocupa de las escuelas",
            "opcionD": "Solo se encarga de los recursos naturales",
            "correcta": "B"
          },
        {
            "id": 26,
            "pregunta": "¿Quién es el responsable de llevar a cabo las disposiciones del Título 11?",
            "opcionA": "Solo el Congreso",
            "opcionB": "El Presidente de la República y los organismos encargados de la administración financiera",
            "opcionC": "Solo los jueces",
            "opcionD": "Los ciudadanos en sus hogares",
            "correcta": "B"
          },
        {
            "id": 27,
            "pregunta": "¿Cómo se organiza el sistema financiero del país según el Título 11?",
            "opcionA": "A través de eventos culturales",
            "opcionB": "Mediante un sistema de control y supervisión que incluye instituciones como el Banco de la República y la Contraloría General",
            "opcionC": "Solo con la administración local",
            "opcionD": "A través de las redes sociales",
            "correcta": "B"
          },
        {
            "id": 28,
            "pregunta": "¿Qué función tiene el Banco de la República según el Título 11?",
            "opcionA": "Organizar eventos nacionales",
            "opcionB": "Administrar la política monetaria y los recursos financieros del país",
            "opcionC": "Supervisar la educación",
            "opcionD": "Manejar el presupuesto de salud",
            "correcta": "B"
          },
        {
            "id": 29,
            "pregunta": "¿Qué papel juega la Contraloría General en el sistema financiero del país?",
            "opcionA": "Crear nuevas leyes",
            "opcionB": "Supervisar y controlar la administración de los recursos públicos para asegurar su uso correcto",
            "opcionC": "Organizar festivales",
            "opcionD": "Decidir sobre la política exterior",
            "correcta": "B"
          },
        {
            "id": 30,
            "pregunta": "¿Qué se busca promover con las disposiciones del Título 11?",
            "opcionA": "La uniformidad en todos los aspectos del país",
            "opcionB": "La transparencia y la eficiencia en la administración de los recursos y el sistema financiero",
            "opcionC": "La centralización de todas las decisiones",
            "opcionD": "La reducción de la participación ciudadana",
            "correcta": "B"
          },
        {
            "id": 31,
            "pregunta": "¿Por qué es importante la administración adecuada de los recursos según el Título 11?",
            "opcionA": "Porque asegura que todos los eventos deportivos sean exitosos",
            "opcionB": "Porque permite un desarrollo equilibrado y eficiente del país y la correcta gestión de los recursos públicos",
            "opcionC": "Porque solo se deben atender las necesidades de las grandes ciudades",
            "opcionD": "Porque se evita la participación de los ciudadanos en la toma de decisiones",
            "correcta": "B"
        },
        {
            "id": 32,
            "pregunta": "¿Qué tipo de gobierno se busca promover según el Título 7?",
            "opcionA": "Un gobierno que solo se enfoque en el entretenimiento",
            "opcionB": "Un gobierno que administre de manera eficiente y con responsabilidad",
            "opcionC": "Un gobierno que se encargue solo de las fiestas",
            "opcionD": "Un gobierno que ignore las leyes",
            "correcta": "B"
          },
          {
            "id": 33,
            "pregunta": "¿Qué establece el Título 8 de la Constitución de Colombia?",
            "opcionA": "La organización de los eventos culturales",
            "opcionB": "La organización territorial del país y los órganos de gobierno relacionados",
            "opcionC": "Las reglas para los deportes",
            "opcionD": "Cómo deben ser las escuelas",
            "correcta": "B"
          },
          {
            "id": 34,
            "pregunta": "¿Cuáles son los órganos de gobierno que se encargan de los asuntos territoriales según el Título 8?",
            "opcionA": "Solo el Presidente y los ministros",
            "opcionB": "Solo los jueces",
            "opcionC": "Los departamentos, municipios, y distritos",
            "opcionD": "Solo el Congreso",
            "correcta": "C"
          },
          {
            "id": 35,
            "pregunta": "¿Qué aspecto relacionado con los territorios aborda el Título 8?",
            "opcionA": "Cómo se deben construir las casas",
            "opcionB": "Cómo se dividen y organizan los territorios del país",
            "opcionC": "Cómo se deben celebrar las fiestas nacionales",
            "opcionD": "Cómo se deben hacer los exámenes escolares",
            "correcta": "B"
          },
          {
            "id": 36,
            "pregunta": "¿Qué se promueve en la organización territorial del país según el Título 8?",
            "opcionA": "La centralización del poder",
            "opcionB": "La descentralización y la autonomía de los territorios para mejorar la gestión local",
            "opcionC": "La uniformidad en todas las ciudades",
            "opcionD": "La reducción de la cantidad de territorios",
            "correcta": "B"
          },
          {
            "id": 37,
            "pregunta": "¿Qué papel juegan los departamentos en la organización territorial según el Título 8?",
            "opcionA": "Organizan eventos deportivos",
            "opcionB": "Administran y gestionan los asuntos locales y regionales",
            "opcionC": "Manejan el presupuesto nacional",
            "opcionD": "Controlan los medios de comunicación",
            "correcta": "B"
          },
          {
            "id": 38,
            "pregunta": "¿Qué hacen los municipios en la organización territorial del país?",
            "opcionA": "Resuelven conflictos internacionales",
            "opcionB": "Administran y gestionan los asuntos locales de sus áreas",
            "opcionC": "Deciden sobre la política exterior",
            "opcionD": "Organizan la educación a nivel nacional",
            "correcta": "B"
          },
          {
            "id": 39,
            "pregunta": "¿Qué función tienen los distritos en el contexto territorial de Colombia?",
            "opcionA": "Supervisan las universidades",
            "opcionB": "Se encargan de la gestión local en áreas urbanas específicas",
            "opcionC": "Controlan el comercio internacional",
            "opcionD": "Administran el sistema de transporte",
            "correcta": "B"
          },
          {
            "id": 40,
            "pregunta": "¿Qué importancia tiene la descentralización en la organización territorial?",
            "opcionA": "Permite que el gobierno central tenga todo el control",
            "opcionB": "Mejora la gestión local y permite que los territorios tomen decisiones importantes sobre su desarrollo",
            "opcionC": "Hace que todos los territorios sean iguales",
            "opcionD": "Limita la participación de los ciudadanos",
            "correcta": "B"
          },
          {
            "id": 41,
            "pregunta": "¿Cómo se dividen los territorios en Colombia según el Título 8?",
            "opcionA": "En barrios y vecindarios",
            "opcionB": "En departamentos, municipios y distritos",
            "opcionC": "En regiones deportivas",
            "opcionD": "En zonas de entretenimiento",
            "correcta": "B"
          },
          {
            "id": 42,
            "pregunta": "¿Qué busca asegurar la organización territorial establecida en el Título 8?",
            "opcionA": "Que todos los territorios sean iguales en todos los aspectos",
            "opcionB": "Que cada territorio tenga la capacidad de gestionar sus propios asuntos de manera eficiente",
            "opcionC": "Que solo el gobierno central tome decisiones",
            "opcionD": "Que las ciudades tengan más poder que las zonas rurales",
            "correcta": "B"
          },
          {
            "id": 42,
            "pregunta": "¿Qué establece el Título 12 de la Constitución de Colombia?",
            "opcionA": "Las reglas para las elecciones",
            "opcionB": "El proceso para hacer reformas a la Constitución",
            "opcionC": "Cómo se deben construir las viviendas",
            "opcionD": "La organización de eventos culturales",
            "correcta": "B"
          },
          {
            "id": 43,
            "pregunta": "¿Quién puede proponer una reforma a la Constitución según el Título 12?",
            "opcionA": "Solo el Presidente de la República",
            "opcionB": "Solo el Congreso",
            "opcionC": "El Presidente, el Congreso, y en algunos casos, los ciudadanos a través de una iniciativa popular",
            "opcionD": "Solo los jueces",
            "correcta": "C"
          },
          {
            "id": 44,
            "pregunta": "¿Qué se necesita para aprobar una reforma constitucional según el Título 12?",
            "opcionA": "La firma del Presidente solamente",
            "opcionB": "La aprobación de la mayoría de los ciudadanos en un referendo",
            "opcionC": "La aprobación de la reforma por una mayoría calificada en el Congreso y, en algunos casos, la aprobación en un referendo",
            "opcionD": "Solo la aprobación de un comité especial",
            "correcta": "C"
          },
          {
            "id": 45,
            "pregunta": "¿Por qué es importante el proceso de reformas constitucionales?",
            "opcionA": "Para cambiar las reglas de los deportes",
            "opcionB": "Para adaptar la Constitución a las necesidades y cambios en la sociedad y asegurar que siga siendo relevante",
            "opcionC": "Para organizar eventos culturales",
            "opcionD": "Para definir cómo se deben construir las viviendas",
            "correcta": "B"
          },
          {
            "id": 46,
            "pregunta": "¿Qué papel tiene el Congreso en el proceso de reforma constitucional?",
            "opcionA": "Solo organiza eventos culturales",
            "opcionB": "Discute, debate y vota sobre las propuestas de reforma a la Constitución",
            "opcionC": "Controla el comercio internacional",
            "opcionD": "Supervisa la educación",
            "correcta": "B"
          },
          {
            "id": 47,
            "pregunta": "¿Qué es necesario para que una reforma sea aprobada en el Congreso?",
            "opcionA": "Solo una mayoría simple",
            "opcionB": "Una mayoría calificada, que es más del 50% de los votos en ambas cámaras del Congreso",
            "opcionC": "La firma del Presidente solamente",
            "opcionD": "La aprobación de un comité especial",
            "correcta": "B"
          },
          {
            "id": 48,
            "pregunta": "¿En qué casos puede ser necesaria la participación de los ciudadanos en el proceso de reforma constitucional?",
            "opcionA": "Cuando se organizan eventos nacionales",
            "opcionB": "Cuando la reforma debe ser aprobada en un referendo después de ser aprobada por el Congreso",
            "opcionC": "Solo en la creación de leyes nacionales",
            "opcionD": "En la organización de festivales",
            "correcta": "B"
          },
          {
            "id": 49,
            "pregunta": "¿Qué sucede si una reforma constitucional es aprobada en un referendo?",
            "opcionA": "Se convierte en una ley ordinaria",
            "opcionB": "Se incorpora a la Constitución y se convierte en una parte oficial de la misma",
            "opcionC": "Se organiza un evento especial",
            "opcionD": "Se envía a otro país para su aprobación",
            "correcta": "B"
          },
          {
            "id": 50,
            "pregunta": "¿Cómo asegura el proceso de reformas que la Constitución se mantenga relevante?",
            "opcionA": "Cambiando constantemente las reglas de los deportes",
            "opcionB": "Permitiendo que se adapten a los cambios en la sociedad y las necesidades del país",
            "opcionC": "Solo enfocándose en la educación",
            "opcionD": "Limitando la participación ciudadana",
            "correcta": "B"
          },
          {
            "id": 51,
            "pregunta": "¿Qué se necesita para que el Congreso pueda iniciar una reforma constitucional?",
            "opcionA": "La aprobación de un festival",
            "opcionB": "La propuesta de una reforma por parte de los congresistas, el Presidente, o a través de una iniciativa popular",
            "opcionC": "Solo una firma del Presidente",
            "opcionD": "La creación de nuevas leyes nacionales",
            "correcta": "B"
          },
          {
            "id": 52,
            "pregunta": "¿Qué establece el Título 13 de la Constitución de Colombia?",
            "opcionA": "Las reglas para las elecciones presidenciales",
            "opcionB": "La organización y administración de los asuntos locales",
            "opcionC": "Cómo se deben construir las viviendas",
            "opcionD": "La organización de eventos culturales",
            "correcta": "B"
          },
          {
            "id": 53,
            "pregunta": "¿Cuál es el propósito principal del Título 13?",
            "opcionA": "Controlar la producción de alimentos",
            "opcionB": "Establecer cómo se debe organizar y administrar localmente los municipios y departamentos para mejorar la gestión local",
            "opcionC": "Regular los eventos deportivos",
            "opcionD": "Definir las reglas para el comercio internacional",
            "correcta": "B"
          },
          {
            "id": 54,
            "pregunta": "¿Quién es responsable de llevar a cabo las disposiciones del Título 13?",
            "opcionA": "Solo el Presidente de la República",
            "opcionB": "Los organismos locales y regionales como los alcaldes y gobernadores",
            "opcionC": "Solo el Congreso",
            "opcionD": "Solo los jueces",
            "correcta": "B"
          },
          {
            "id": 55,
            "pregunta": "¿Qué nivel de gobierno se encarga de la administración local según el Título 13?",
            "opcionA": "El gobierno nacional",
            "opcionB": "El gobierno local, a través de los municipios y departamentos",
            "opcionC": "El gobierno internacional",
            "opcionD": "Los gobiernos de otros países",
            "correcta": "B"
          },
          {
            "id": 56,
            "pregunta": "¿Cómo se organizan los municipios según el Título 13?",
            "opcionA": "Solo con un alcalde",
            "opcionB": "Con un alcalde y un concejo municipal, que trabajan juntos en la administración local",
            "opcionC": "Solo con el Congreso",
            "opcionD": "Solo con los jueces",
            "correcta": "B"
          },
          {
            "id": 57,
            "pregunta": "¿Qué papel tienen los alcaldes en la administración local según el Título 13?",
            "opcionA": "Organizan eventos nacionales",
            "opcionB": "Dirigen y administran los asuntos del municipio, implementando políticas y servicios locales",
            "opcionC": "Deciden sobre la política exterior",
            "opcionD": "Supervisan el comercio internacional",
            "correcta": "B"
          },
          {
            "id": 58,
            "pregunta": "¿Qué papel juegan los concejos municipales en la administración local?",
            "opcionA": "Supervisan el sistema educativo",
            "opcionB": "Participan en la creación de leyes locales y en la supervisión del alcalde",
            "opcionC": "Controlan la producción de alimentos",
            "opcionD": "Organizan eventos culturales",
            "correcta": "B"
          },
          {
            "id": 59,
            "pregunta": "¿Qué se busca asegurar con la organización y administración local establecida en el Título 13?",
            "opcionA": "Que todos los municipios tengan los mismos recursos",
            "opcionB": "Una administración eficiente y cercana a las necesidades de los ciudadanos locales",
            "opcionC": "La centralización de todos los poderes",
            "opcionD": "La eliminación de los gobiernos locales",
            "correcta": "B"
          },
          {
            "id": 60,
            "pregunta": "¿Qué importancia tiene la administración local según el Título 13?",
            "opcionA": "Hace que todos los municipios funcionen de manera uniforme",
            "opcionB": "Permite una mejor gestión de los recursos y servicios de acuerdo con las necesidades específicas de cada localidad",
            "opcionC": "Limita la participación de los ciudadanos",
            "opcionD": "Solo se enfoca en la educación",
            "correcta": "B"
          },
          {
            "id": 61,
            "pregunta": "¿Qué debe hacer el gobierno local para cumplir con las disposiciones del Título 13?",
            "opcionA": "Limitar la participación ciudadana",
            "opcionB": "Implementar políticas y administrar recursos de manera eficiente para atender las necesidades locales",
            "opcionC": "Solo enfocarse en eventos culturales",
            "opcionD": "Controlar todos los aspectos de la política exterior",
            "correcta": "B"
          }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

let opcionSeleccionada = false;

function agregarEventListenerBoton(e) {
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    // Controlo si la respuesta es correcta
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    // Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    // Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta);
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });
    
    // Marca que se ha seleccionado una opción
    opcionSeleccionada = true;
    
    // Habilita el botón "Siguiente"
    btnSiguiente.disabled = false;
}


cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente");

// Deshabilita el botón "Siguiente" por defecto
btnSiguiente.disabled = true;

btnSiguiente.addEventListener("click", () => {
    if (!opcionSeleccionada) {
        // No hacer nada si no se ha seleccionado una opción
        return;
    }
    
    // Restablece la variable de estado
    opcionSeleccionada = false;

    numPreguntaActual++;
    if (numPreguntaActual <= 4) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        console.log(categoriasJugadasLS.length);
        if (parseInt(categoriasJugadasLS.length) < 6) {
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        } else {
            // Lo mando a la pantalla final
            location.href = "final.html";
        }
    }
});
