const btn = document.querySelector(".btn");

btn.addEventListener("click", function (){
    getRandomImage();
});


const getRandomImage = async () => {
    const URL = await fetch("https://dog.ceo/api/breeds/image/random");
    let response = await URL.json();
    
    let fetchImage = document.querySelector(".image");
    fetchImage.src = response.message;

    fetchImage.onload = () => {
        const box = document.querySelector('.box');
        fetchImage.style.maxWidth = box.clientWidth + "px";
        fetchImage.style.maxHeight = box.clientHeight + "px";
    };

    breed(response);
}

function breed(response){
    const imageUrl = response.message;
    const breed = imageUrl.split("/")[4];

    const breedName = document.querySelector(".breed-name");
    breedName.innerText = breed; 
}