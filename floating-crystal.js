body {
    background:('https://github.com/FireflyPathGallery/interactive-gown-gallery/blob/main/background.png') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
}

@keyframes shimmer {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
}

.fireflies {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.firefly {
    position: absolute;
    width: 5px;
    height: 5px;
    background: rgba(255, 215, 0, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    animation: shimmer 3s infinite alternate;
}
