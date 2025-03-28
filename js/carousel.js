//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(arr);
                Carousel._interval = setInterval(function () { Carousel.Next(arr); }, 2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static Next(carouselArr) {
        const slide = carouselArr[Carousel._sequence];

        document.getElementById('carousel').style.background = `url('img/${slide.Image}') center/cover`;
        document.getElementById('carousel-title').innerHTML = `<a href="${slide.Url}">${slide.Title}</a>`;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }


};

function vozAcessibilidade() {
    if (responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Bem-vindo ao site da Ford. Utilize os recursos de acessibilidade.", "Brazilian Portuguese Female");
    } else {
        alert("O seu navegador não suporta síntese de voz.");
    }
}