window.addEventListener("scroll",()=>{

    const cards =
    document.querySelectorAll(".glass-card");

    cards.forEach(card=>{

        const pos =
        card.getBoundingClientRect().top;

        if(pos < window.innerHeight - 100){

            card.style.opacity="1";
            card.classList.add("show-card");
        }

    });

});