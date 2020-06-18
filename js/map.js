$(document).ready(function () {
    ymaps.ready(init);
    function init(){
        let map = new ymaps.Map("map", {
            center: [56.455, 84.974824],
            zoom: 15,
            controls: ['zoomControl']
        });
        let placemark = new ymaps.Placemark([56.452639, 84.974824], {
                balloonContent: "<p class='address'>Ул. Ф. Лыткина, дом 8</p>" +
                    "<p class='hours'>Часы работы:</p>" +
                    "<p>пн-пт - 9:00 - 18:30</p>" +
                    "<p>сб - 11:00 - 17:00</p>" +
                    "<p>вск - выходной</p>"}
            , {
                    iconLayout: 'default#image',
                    iconImageHref: './img/Vector.png',
                    iconShape: {
                        type: 'Circle',
                        coordinates: [0, -15],
                        radius: 20
                    },
                balloonCloseButton: false,
                hideIconOnBalloonOpen: false,
            });
        map.geoObjects.add(placemark);
    }
});

