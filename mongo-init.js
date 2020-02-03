db.createUser({
  user: 'demoUser',
  pwd: 'd3m0p4ssw0rd',
  roles: [{
    role: 'readWrite',
    db: 'dbdemo'
  }]
})