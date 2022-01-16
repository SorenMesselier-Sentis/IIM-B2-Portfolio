const navSlide = () => {
    const burger = document.querySelector ('.burger');
    const nav = document.querySelector ('.links');
    const navLiens = document.querySelectorAll ('.links li');

    burger.addEventListener('click',()=>{

        //Toggle Nav
        nav.classList.toggle('active');

        //Animations
        navLiens.forEach((links, index) => {
            if(links.style.animation){
                //pour que l'animation se lance a chaque click sur le menu burger
                links.style.animation = ''
            }else{
                links.style.animation = `navLiensFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
    });
}

navSlide();