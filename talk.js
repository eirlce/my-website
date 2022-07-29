new TypeIt("#lywry", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("MUXX~~")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("很幸运能够遇到你")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();