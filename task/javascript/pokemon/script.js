const createPokemonCard = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `  
    <p>#${pokemon.id}</p>
    <div class="front">
      <img src="${pokemon.sprites.front_default}" alt="Pokemon Image" />
      <h3>${pokemon.name}</h3>
      <h5>${pokemon.types[0].type.name}</h5>
    </div>
    <div class="back">
      <p>Abilities : ${pokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}</p>
    </div>`;
    return card;
  };

  const fetchPokemonTypes = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const pokemonTypes = await response.json();
      const pokemonCategory = pokemonTypes.results.map(
        (category) => category.name
      );
      //console.log(pokemonCategory);
      return pokemonCategory;
      // console.log(pokemonTypes);
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try after some time");
    }
  };
  fetchPokemonTypes();
  
  const renderPokemonTypes = async () => {
    const pokemonCategoryList = await fetchPokemonTypes();
    const pokemonType = document.getElementById("pokemonType");
  
    pokemonCategoryList.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.innerText = category;
      pokemonType.append(option);
    });
  };
  
  renderPokemonTypes();
  
  const fetchPokemonDetails = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      response.json()
    );
  };
  
  const arrayOfPokemonDetailPromises = [];
  
  for (let i = 1; i <= 151; i++) {
    const pokemonPromise = fetchPokemonDetails(i);
    arrayOfPokemonDetailPromises.push(pokemonPromise);
  }
  
  let pokemonList = [];
  const pokemonContainer = document.getElementById("pokemonContainer");
  
  Promise.all(arrayOfPokemonDetailPromises).then((pokemonDetails) => {
    //   console.log(pokemonDetails);
    pokemonList = pokemonDetails;
    console.log(window.location.search)
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("pokemonType")) {
      console.log(pokemonList);
      // filter(some to match type of pokemon in the array)
      // pokemonList.filter(pokemon => pokemon.)
    }
  
    pokemonList.forEach((pokemon) => {
      const pokemonCard = createPokemonCard(pokemon);
      pokemonContainer.append(pokemonCard);
    });
  });
  
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", (e) => {
    //   console.log(e.target.value);
    //   console.log(pokemonList);
    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    pokemonContainer.innerHTML = "";
    filteredPokemonList.forEach((pokemon) => {
      const pokemonCard = createPokemonCard(pokemon);
      pokemonContainer.append(pokemonCard);
    });
    //   console.log(filteredPokemonList);
  });
 

  const filterType = document.getElementById("filterType");
  filterType.addEventListener("click", () => {
    const selectedType = document.getElementById("pokemonType").value.toLowerCase();
  
    if (selectedType === 'all') {
      renderPokemonCards(pokemonList);
    } else {
      const filteredPokemons = pokemonList.filter(pokemon =>
        pokemon.types.map(type => type.type.name.toLowerCase()).includes(selectedType)
      );
      renderPokemonCards(filteredPokemons);
    }
  });
  
  const renderPokemonCards = (pokemonArray) => {
    pokemonContainer.innerHTML = "";
    pokemonArray.forEach((pokemon) => {
      const pokemonCard = createPokemonCard(pokemon);
      pokemonContainer.appendChild(pokemonCard);
    });
  };
  
  document.getElementById("filterType").addEventListener("click", () => {
    const selectedType = document.getElementById("pokemonType").value.toLowerCase();
  
    if (selectedType === 'all') {
      renderPokemonCards(pokemonList);
    } else {
      const filteredPokemons = pokemonList.filter(pokemon =>
        pokemon.types.map(type => type.type.name.toLowerCase()).includes(selectedType)
      );
      renderPokemonCards(filteredPokemons);
    }
  });

  