const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const displayBox = document.querySelector('.display');


const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)
    isHungry: 4,
    sleep: function () {
      console.log(`${this.name} needs nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    },
    hungry: function () {
      console.log(`${this.name} is hungry.`);
      this.isHungry += 2;
    },
    feed: function () {
      if (this.isHungry > 0) {
        console.log("Feed me! I'm starving");
        this.isHungry -= 2;
      } else {
        console.log("I'm not hungry right now.");
      }
    }

  };

  return pet;
};

function generateStatus(pet) {
    let status = `${pet.name} the ${pet.species} - Tiredness: ${pet.isTired} - Hunger: ${pet.isHungry}`;
    
    if (pet.isTired >= 6) {
        status +=  ` - ${pet.name} Needs rest`;
    } else if (pet.isTired <= 3) {
        status +=  ` - ${pet.name} is Energetic`;
    }

    if (pet.isHungry >= 7) {
        status += ` - ${pet.name}'s belly is content`;
    } else if (pet.isHungry <= 3) {
        status += ` - ${pet.name} wants food`;
    }
    
    return status;
}

function showStatus(){
   displayBox.innerHTML = "";

   const petsArray = [sora, clover, baxter, cleo, francine];
   petsArray.forEach(pet => {
    const statusInfo = document.createElement("p");
    statusInfo.textContent = generateStatus(pet);
    displayBox.appendChild(statusInfo);
   });
};


statusButton.addEventListener("click", showStatus);


const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");


clover.play();
baxter.sleep();
cleo.sleep();
clover.feed();
baxter.feed();
cleo.feed();
francine.play();

