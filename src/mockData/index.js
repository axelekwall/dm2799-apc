export default [
  {
    id: '1',
    title: 'DD1334 Database Technology',
    desc:
      'A continuation in computer science that covers the fundamentals of database technology.',
    type: 'root',
    state: 'auto',
    links: [],
    estimate: 1,
  },
  {
    id: '2',
    title: 'Learning Goal 1',
    desc: 'Schema and queries in relational database model using SQL',
    type: 'template',
    state: 'auto',
    links: ['1'],
    estimate: 1,
  },
  {
    id: '3',
    title: 'Learning Goal 2',
    desc:
      'The operation of constraints and triggers during  modifications of a SQL database',
    type: 'template',
    state: 'auto',
    links: ['1'],
    estimate: 1,
  },
  {
    id: '4',
    title: 'Learning Goal 3',
    desc:
      'How to avoid anomalies, preserve information and dependencies in the design of a relational databases',
    type: 'template',
    state: 'auto',
    links: ['1'],
    estimate: 1,
  },
  {
    id: '5',
    title: 'Learning Goal 4',
    desc:
      'The use of ER diagrams and design principles in relational database design',
    type: 'template',
    state: 'auto',
    links: ['1'],
    estimate: 1,
  },
  {
    id: '6',
    title: 'Learning Goal 5',
    desc: 'The XML database model, XML-schema DTD, and XQuery',
    type: 'template',
    state: 'auto',
    links: ['1'],
    estimate: 1,
  },
  {
    id: '7',
    title: 'Relational algebra',
    desc: 'I need to read about this subject and learn more',
    type: 'task',
    state: 'todo',
    links: ['2', '3', '5'],
    estimate: 1,
  },
  {
    id: '8',
    title: 'XML databases',
    desc: 'I need to read about this subject and learn more',
    type: 'task',
    state: 'todo',
    links: ['6'],
    estimate: 1,
  },
  {
    id: '9',
    title: 'Something in progress',
    desc: 'Description of the task',
    type: 'task',
    state: 'inProgress',
    links: ['7', '8'],
    estimate: 1,
  },
];
