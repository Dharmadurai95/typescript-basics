//  how to restrict the user choice 

// by default values will be 0,1,2, you change 3 then 3,4,5
enum USERPERMISSION {
    create,
    update,
    read
}
enum USERPERMISSIONONE {
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update'
}
enum USERPERMISSIONTWO {
    CREATE = 'create',
    READ = 5,
    UPDATE   // THIS VALUE AUTOMATICALLY WILL BE 6
}

const user = 'delete';
if (user === USERPERMISSIONONE.CREATE) { }
