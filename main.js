const searchInput = document.querySelector("#search")
const pokeSelect = document.querySelector(".select")
const pokeList = document.querySelector(".ota")
const serchBtn = document.querySelector("#button")





function renderPokemon(mulfilm){
pokeList.innerHTML = "";

if(mulfilm.length === 0){
    pokeList.className = "topilmadi"
    pokeList.innerHTML = "Pokemon topilmadi"
}


mulfilm.forEach(obyeklar => {
    const li = document.createElement("li")
    
    li.innerHTML += 
    
    `
    <div class="item">
    <h2>${obyeklar.name}</h2>
    <img src="${obyeklar.img}">
    <button class="bot">${obyeklar.name}</button>
    <span class="span">candy count:${obyeklar.candy_count}</span>\
    <span class="span"> ${obyeklar.weight}</span>
    <span class="fil">${obyeklar.weaknesses}</span>
    </div>
    `
    pokeList.appendChild(li)


    
    
});



}


renderPokemon(pokemons)



serchBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    const inputQimati = searchInput.value.toLowerCase();

    const filterLanganlar = pokemons.filter(item => {
        return item.name.toLowerCase().includes(inputQimati)
    })

    

        renderPokemon(filterLanganlar)
    
            

})


function sortirovka(obj, qiymat) {
    if(qiymat === "A-Z"){
        return obj.sort((a, b) => a.name.localeCompare(b.name));
    }else if (qiymat === "Z-A"){
        return obj.sort((a, b) => b.name.localeCompare(a.name));
    }
    return obj;
}




pokeSelect.addEventListener("change", () => {
    const val = pokeSelect.value;

    let sortedPokemons;


    if(val === "A-Z" || val === "Z-A"){
        sortedPokemons = sortirovka(pokemons, val)
    }else{
        sortedPokemons = pokemons;
    }


    renderPokemon(sortedPokemons)
})








