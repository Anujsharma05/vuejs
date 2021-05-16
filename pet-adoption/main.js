const pets = [
    {
       "name":"Fish",
       "breed":"tuxedo",
       "species":"cat",
       "gender":"male",
       "age":20,
       "color":"black/white",
       "weight":13,
       "location":"fourside",
       "notes":"Sweet kitty. He loves getting his belly rubbed."
    },
    {
       "name":"Henry",
       "breed":"tabby",
       "species":"cat",
       "gender":"male",
       "age":20,
       "color":"orange/white",
       "weight":17,
       "location":"threed",
       "notes":"Super friendly"
    },
    {
       "name":"Roger",
       "breed":"tabby",
       "species":"cat",
       "gender":"male",
       "age":20,
       "color":"gray",
       "weight":15,
       "location":"threed",
       "notes":"Super friendly"
    },
    {
       "name":"Kitkat",
       "breed":"bombay",
       "species":"cat",
       "gender":"female",
       "age":9,
       "color":"black",
       "weight":9,
       "location":"threed",
       "notes":"Super friendly"
    },
    {
        "name":"Sheeba",
        "breed":"collie",
        "gender":"female",
        "age":7,
        "color":"black/white",
        "weight":34,
        "location":"fourside",
        "notes":"Pure breed. Trained for competitions."
     },
     {
        "name":"Hillary",
        "breed":"mut",
        "gender":"female",
        "age":17,
        "color":"orange/white",
        "weight":37,
        "location":"threed",
        "notes":"Super friendly"
     },
     {
        "name":"Zeus",
        "breed":"afghan hound",
        "gender":"male",
        "age":9,
        "color":"gray",
        "weight":68,
        "location":"threed",
        "notes":"Super friendly"
     },
     {
        "name":"Katie",
        "breed":"golden retriever",
        "gender":"female",
        "age":2,
        "color":"black",
        "weight":44,
        "location":"threed",
        "notes":"Super friendly"
     }
 ];

 pets.forEach(pet => {
    // We need something to add our new element too
    let target = document.querySelector(".pets");
    // Now we have to create a NEW element
    let li = document.createElement('li');

    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    let img = document.createElement('img');
    img.src = './cat.jpg';

    imgContainer.appendChild(img);

    let description = document.createElement('div');
    description.className = 'description';

    let descName = document.createElement('span');
    descName.className = 'name';
    descName.innerHTML= pet.name;

    let descAge = document.createElement('span');
    descAge.className = 'age';
    descAge.innerHTML = '('+pet.age+' Months)';

    description.appendChild(descName);
    description.appendChild(descAge);

    li.appendChild(imgContainer);
    li.appendChild(description);
    target.appendChild(li); 
    let name = pet.name;
    li.addEventListener("click", function() {
       var petName = document.getElementById("pet-name");
       petName.innerHTML = pet.name;

       var petSpecies = document.getElementById("pet-species");
       petSpecies.innerHTML = pet.species;

       var petGender = document.getElementById("pet-gender");
       petGender.innerHTML = pet.gender;

      var petAge = document.getElementById("pet-age");
      petAge.innerHTML = pet.age;

       var petNotes = document.getElementById("pet-notes");
       petNotes.innerHTML = pet.notes;

       var modal = document.querySelector(".pet-details__modal");
       modal.style.display = 'block'
    });

    
})

// var selectPlanButtons = document.querySelectorAll(".pets > li");
// for (var i = 0; i < selectPlanButtons.length; i++) {
//    let x = i;
//    selectPlanButtons[i].addEventListener("click", function() {
     
//       console.log(selectPlanButtons[0])

//       console.log(pets[x].name);
//    });
//  }

 