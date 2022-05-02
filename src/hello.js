
export function hello(request, response) {
    response.send('Hello. Is it me you\'re looking for?');
}

/*
or
export const hello = (request, response) => {
    response.send('Hello. Is it me you\'re looking for?');
}

export const helloPerson = (request, response) => { // collon adds a parameter 
    // const person = request.params.person
    const {person} = request.params; // here we extract person from the response
    response.send(`${person}, Yerrrrrrr 🫡`);
}
*/

export const helloPerson = (request, response) => {
    const {person} = request.params;
    response.send(`${person}, Yerrrrrrr 🫡`);
}

export const greetNewPerson = (request, response) => {
    const {firstName, lastName} = request.body;
    response.send(`Hello there, ${firstName} ${lastName}.`);
}