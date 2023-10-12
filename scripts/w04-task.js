/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Lucas Rolando",
    photo: "images/mypic.jpg",
    favoriteFoods: [
        "Chicken",
        "Brazilian Strogonoff",
        "Piza",
        "Feijoada"
    ],
    hobbies: [
        "Basketball",
        "Videogames",
        "Animes",
        "Mangas",
        "Gym"
    ],
    placesLived: [],
    

};
myProfile.placesLived.push(
    {
        place: "Curitiba, Brazil",
        length: "23 years",        
    },{
        place: "Guararema, Brazil",
        length: "1 year",        
    },{
        place: "Guaratinguetá, Brazil",
        length: "1 year",        
    },
);

/* Populate Profile Object with placesLive objects */


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeInfo => {
    
    let dt = document.createElement('dt');
    dt.textContent = placeInfo.place;

    
    let dd = document.createElement('dd');
    dd.textContent = placeInfo.length;

    
    let placesLivedList = document.querySelector('#places-lived');

    
    let dl = document.createElement('dl');
    placesLivedList.appendChild(dl);
    dl.appendChild(dt);
    dl.appendChild(dd);
    
});


