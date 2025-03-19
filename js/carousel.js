//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static _sequence = 0;
    static _size = 0;
    static _interval;

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

    static Next(arr) {
        const carouselDiv = document.getElementById('carousel');
        const carouselTitleDiv = document.getElementById('carousel-title');

        if (carouselDiv && carouselTitleDiv) {
            const currentSlide = arr[Carousel._sequence];

            carouselDiv.style.backgroundImage = `url('img/${currentSlide.Image}')`;
            carouselDiv.style.backgroundSize = 'cover';
            carouselDiv.innerHTML = '';

            carouselTitleDiv.innerHTML = `<a href="${currentSlide.Url}">${currentSlide.Title}</a>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};