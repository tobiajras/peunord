export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: '399autos',
  name: '399 Autos',
  adress: 'Av. Juan Bautista Alberdi 7008',
  city: 'CABA',
  email: null,
  instagram: '399autos',
  facebook: 'https://www.facebook.com/profile.php?id=100012245970804',
  whatsapp: ['1146874719', '1134823380'],
  googlemapsLink: 'https://maps.app.goo.gl/BqHo1WqKGHRjtKfv6',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.825100484302!2d-58.5122071!3d-34.6591197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8fe90125e47%3A0x2adfb422322ced5d!2sAUTOS%20399!5e0!3m2!1sen!2sar!4v1755779597393!5m2!1sen!2sar',
  openDays: [
    { day: 'Lunes', hours: ['10:00 a 19:00hs'] },
    { day: 'Martes', hours: ['10:00 a 19:00hs'] },
    { day: 'Miércoles', hours: ['10:00 a 19:00hs'] },
    { day: 'Jueves', hours: ['10:00 a 19:00hs'] },
    { day: 'Viernes', hours: ['10:00 a 19:00hs'] },
    { day: 'Sábado', hours: ['09:00 a 12:30hs'] },
    // { day: 'Domingo', hours: ['09:00 a 13:00hs'] },
  ],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://399autos.vercel.app/',
  title: '399 Autos - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencias bancarias y financiación a través de entidades financieras. También trabajamos con permutas y consignaciones. Consultanos para conocer las opciones disponibles según el vehículo.',
  },
  {
    id: 'preg-2',
    question: '¿Los vehículos están revisados?',
    answer:
      'Sí, todos nuestros vehículos pasan por una revisión técnica antes de ser ofrecidos. Verificamos el estado mecánico, documentación y funcionamiento general para garantizar la calidad.',
  },
  {
    id: 'preg-3',
    question: '¿Dan garantía en los vehículos?',
    answer:
      'Ofrecemos garantía según el estado y antigüedad del vehículo. Los términos específicos se acuerdan al momento de la compra, siempre priorizando la transparencia con nuestros clientes.',
  },
  {
    id: 'preg-4',
    question: '¿Puedo ir a ver los autos?',
    answer:
      '¡Por supuesto! Estamos ubicados en Av. Juan Bautista Alberdi 7008, CABA. Te invitamos a visitarnos en nuestro horario de atención para conocer nuestros vehículos personalmente.',
  },
  {
    id: 'preg-5',
    question: '¿Hacen permutas y consignaciones?',
    answer:
      'Sí, trabajamos con permutas y consignaciones. Evaluamos tu vehículo y te ofrecemos las mejores condiciones. Contactanos para coordinar una evaluación sin compromiso.',
  },
];

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: false,
  },
];
