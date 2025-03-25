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
        const carouselSlide = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        
        if (carouselSlide && carouselTitle) {
            const slide = carouselArr[Carousel._sequence];

            carouselSlide.style.backgroundImage = `url('img/${slide.Image}')`;
            carouselSlide.style.backgroundSize = 'cover';
            carouselSlide.innerHTML = '';

            carouselTitle.innerHTML = `<a href="${slide.Url}">${slide.Title}</a>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};