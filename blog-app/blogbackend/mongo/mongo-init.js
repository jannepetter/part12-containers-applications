db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'the_database',
      },
    ],
  });

  db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'test',
      },
    ],
  });
  
  db.createCollection('blogs');
  db.createCollection('users');
  
//   db.blogs.insert({ text: 'Write code', done: true });
//   db.blogs.insert({ text: 'Learn about containers', done: false });