let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }
}

setInterval(showSlide, 3000);
let search = document.getElementById("search");
let cards = document.querySelectorAll(".movie-card");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
let hearts = document.querySelectorAll(".heart");

window.onload = function() {

    let hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {

        heart.addEventListener("click", () => {

            if (heart.innerHTML === "🤍") {
                heart.innerHTML = "❤️";
            } else {
                heart.innerHTML = "🤍";
            }

        });

    });

};
let toggle = document.querySelector(".menu-toggle");
let nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
function filterMovies(category){

    let cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(category === "all"){
            card.style.display = "block";
        }
        else if(category === "action" && title.includes("batman")){
            card.style.display = "block";
        }
        else if(category === "drama" && title.includes("joker")){
            card.style.display = "block";
        }
        else if(category === "sci-fi" && title.includes("interstellar")){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}
function goToMovie(title){
    window.location.href = "movie.html?title=" + title;
}