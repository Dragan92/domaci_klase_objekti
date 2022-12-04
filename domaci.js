let footballers = [ 
    {
firstName: "Vanja",
lastName: "Milinkovic-Savic",
age: 25,
position: "GK",
fullName: function() {
    return this.firstName + " " + this.lastName;
}
},

{
 firstName: "Strahinja",
lastName: "Pavlovic",
age: 22,
position: "CB",

fullName: function() {
    return this.firstName + " " + this.lastName;
}
},

{
firstName: "Sergej",
lastName: "Milinkovic-Savic",
age: 27,
position: "CM",
fullName: function() {
  return this.firstName + " " + this.lastName;
}
},

{
firstName: "Dusan",
lastName: "Tadic",
age: 32,
position: "AM",
fullName: function() {
    return this.firstName + " " + this.lastName;
}
},

{
firstName: "Aleksandar",
lastName: "Mitrovic",
age: 28,
position: "CF",
fullName: function() {
    return this.firstName + " " + this.lastName;
}
}

]
for (i = 0; i < footballers.length; i++) {
    console.log(footballers[i].firstName + " " + footballers[i].lastName + " " + footballers[i].position) // bez metoda sam uradio, u nastavku je sa metodom //
} 
for ( i = 0; i < footballers.length; i++) {
    console.log(footballers[i].fullName())
}

for(i = 0; i < footballers.length; i++) {
    if (footballers[i].age >= 28) {
        console.log (footballers[i].fullName() + " " + "stariji je od 27 godina");

    } else {
            console.log(footballers[i].fullName() + " " + "mladji je od 28 godina");
        }
}

