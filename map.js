//3. Ceate a Map to stoe contact infomation (name, age, email, location) and implement a function to retieve contact details by name

const contact=new Map();
contact.set("Kamlesh",{age:20,email:"xyz@gmail.com",location:"Gujarat"})
contact.set("Ramesh",{age:21,email:"abc@gmail.com",location:"Chennai"})
contact.set("Suresh",{age:22,email:"mnp@gmail.com",location:"Banglore"})

function retrieveContact(name){
    return contact.get(name)
}
console.log(retrieveContact("Suresh"))