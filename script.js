const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
}

const callback = (entries, observer) => {
    const videoObserver = entries[0];

    if (videoObserver.isIntersecting) {
        videoObserver.target.play();
    } else {
        videoObserver.target.pause();
    }
}

const observer = new IntersectionObserver(callback, options);
observer.observer(document.querySelector("vieo"));