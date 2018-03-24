
var sum = 0;

const employeeDetails = [
    {id: 1, name: "Kristen", challengeSteps: 1},
    {id: 2, name: "Matt", challengeSteps: 27654},
    {id: 3, name: "Ja'mez", challengeSteps: 38005},
    {id: 4, name:"Jennifer", challengeSteps: 98754},
    {id: 5, name:"Elisia", challengeSteps: 64875}
]
function updateDetails(){
        employeeDetails.forEach(function(i){ 
        sum = sum + +i.challengeSteps;
                            
    });
                            
};
updateDetails();
const details = [
    {id: 1, name: "Microsoft", totalSteps: sum,
    logo: "/images/microsoft.png"}, 
    {id: 2, name: "Little Ceasers",
    totalSteps: "50876",
    logo: "/images/lc.jpg"}, 
    {id: 3, name: "Under Armour",
    totalSteps: "30765",
    logo: "/images/ua.png"},
    {id:4,name: "Quicken Loans",
    totalSteps: "78967",
    logo: "/images/ql.jpg"},
    {id:5,name: "Grand Circus", totalSteps: "100285",
    logo: "/images/nike.png"}];

   

module.exports = {
    details,
    currentID: 5,
    employeeDetails
}