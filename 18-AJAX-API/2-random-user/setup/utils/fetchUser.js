const getUser = async(URL) =>{
    try{
        const response = await fetch(URL);
        const data = await response.json();
        //destructure
        console.log(data);

        const person = data.results[0];
        const {gender, email, phone} = person;
        const image = person.picture.large;
        const {password} = person.login;
        const {title, first, last} = person.name;
        const {dob:{age}} = person;              // its same as 'const {age} = person.age;'
        const {street:{number, name}, city} = person.location;   // here 'city' is inside location but not street. 

        return{
            phone, 
            email, 
            image, 
            password, 
            age, 
            street: `${name} ${number}` , 
            name: `${title} ${first} ${last}` // name: `${title} ${first} ${last}` this means we are combining 3 values and making it a sentence and returning as 'name'.
        }
    }catch(err){
        console.log(`Unable to fetch user data: ${err}`);
    }
}

export default getUser;