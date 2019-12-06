import uuid from 'uuid/v4';

let ids = Array(9).fill(null);

ids = ids.map(() => uuid());

export default {
  [ids[0]]: {
    id: ids[0],
    title: 'DD1334 Database Technology',
    desc:
      'A continuation in computer science that covers the fundamentals of database technology.',
    type: 'root',
    state: 'auto',
    links: [],
    estimate: 1,
  },
  [ids[1]]: {
    id: ids[1],
    title: 'Learning Goal 1',
    desc: 'Schema and queries in relational database model using SQL',
    type: 'template',
    state: 'auto',
    links: [ids[0]],
    estimate: 1,
  },
  [ids[2]]: {
    id: ids[2],
    title: 'Learning Goal 2',
    desc:
      'The operation of constraints and triggers during  modifications of a SQL database',
    type: 'template',
    state: 'auto',
    links: [ids[0]],
    estimate: 1,
  },
  [ids[3]]: {
    id: ids[3],
    title: 'Learning Goal 3',
    desc:
      'How to avoid anomalies, preserve information and dependencies in the design of a relational databases',
    type: 'template',
    state: 'auto',
    links: [ids[0]],
    estimate: 1,
  },
  [ids[4]]: {
    id: ids[4],
    title: 'Learning Goal 4',
    desc:
      'The use of ER diagrams and design principles in relational database design',
    type: 'template',
    state: 'auto',
    links: [ids[0]],
    estimate: 1,
  },
  [ids[5]]: {
    id: ids[5],
    title: 'Learning Goal 5',
    desc: 'The XML database model, XML-schema DTD, and XQuery',
    type: 'template',
    state: 'auto',
    links: [ids[0]],
    estimate: 1,
  },
  [ids[6]]: {
    id: ids[6],
    title: 'Relational algebra',
    desc: 'I need to read about this subject and learn more',
    type: 'task',
    state: 'todo',
    links: [ids[1], ids[2], ids[4]],
    estimate: 1,
  },
  [ids[7]]: {
    id: ids[7],
    title: 'XML databases',
    desc: 'I need to read about this subject and learn more',
    type: 'task',
    state: 'todo',
    links: [ids[5]],
    estimate: 1,
  },
  [ids[8]]: {
    id: ids[8],
    title: 'Something in progress',
    desc: 'Description of the task',
    type: 'task',
    state: 'inProgress',
    links: [ids[6], ids[7]],
    estimate: 1,
  },
};
