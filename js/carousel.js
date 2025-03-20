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
        const carouselDiv = document.getElementById('carousel');
        const carouselTitleDiv = document.getElementById('carousel-title');

        if (carouselDiv && carouselTitleDiv) {
            const slide = carouselArr[Carousel._sequence];

            carouselDiv.style.backgroundImage = `url('img/${slide.Image}')`;
            carouselDiv.style.backgroundSize = 'cover';
            carouselDiv.innerHTML = '';

            carouselTitleDiv.innerHTML = `<a href="${slide.Url}">${slide.Title}</a>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};