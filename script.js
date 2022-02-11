let categories = [
    { 
        exemplar: "😀",
        label: "Smileys and People",
        name:"smileys_and_people"
    }, 
    { 
        exemplar: "🐱",
        label: "Animals and Nature",
        name:"animals_and_nature"
    }, 
    { 
        exemplar: "🍕",
        label: "Food and Drink",
        name:"food_and_drink"
    }, 
    { 
        exemplar: "🚋",
        label: "Travel and Places",
        name:"travel_and_places"
    }, 
    { 
        exemplar: "🚲",
        label: "Activities",
        name:"activities"}, 
    { 
        exemplar: "📕",
        label: "Objects",
        name:"objects"}, 
    { 
        exemplar: "🔣",
        label: "Symbols",
        name:"symbols"
    }, 
    { 
        exemplar: "🏴",
        label:"Flags",
        name:"flags"
    }
];


const navigation = document.querySelector('nav#menu');
const mainContainer = document.querySelector('main#result');



categories.forEach((category)=>{
    let menuItem = document.createElement('a');
    menuItem.setAttribute('id', category.name );
    menuItem.innerHTML = 
        `<span class="emoji">${category.exemplar}</span>
         <span class="label">${category.label}</span>`;
     
    menuItem.addEventListener('click', (e)=>{
        getRandomEmoji(category.name);
    })
    navigation.appendChild(menuItem);

})


const getRandomEmoji = (category)=>{
    let endpoint = 'https://emojihub.herokuapp.com/api/random/category_'+category
    axios.get(endpoint) 
        .then( (response) => {
            // handle success
            let resultEmoji = response.data.htmlCode[0];

            mainContainer.innerHTML = resultEmoji;

            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

