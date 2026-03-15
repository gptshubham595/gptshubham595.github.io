(function () {
    "use strict";

    // —— Reveal observers ——
    const observerOptions = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("active");
        });
    }, observerOptions);

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".reveal, .reveal-left, .epic-reveal").forEach((el) => observer.observe(el));
    });

    // —— Hero Three.js: waves + 3D Android wobble ——
    let heroScene, heroCamera, heroRenderer, heroWaves, heroAndroid, heroClock;
    const heroCanvas = document.getElementById("hero-canvas");
    const androidContainer = document.getElementById("android-3d-container");

    function initHeroThree() {
        if (!heroCanvas || typeof THREE === "undefined") return;
        const width = heroCanvas.parentElement.offsetWidth;
        const height = heroCanvas.parentElement.offsetHeight;
        heroScene = new THREE.Scene();
        heroCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        heroCamera.position.set(0, 0, 8);
        heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
        heroRenderer.setSize(width, height);
        heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        heroRenderer.setClearColor(0xfefce8, 0);
        heroClock = new THREE.Clock();

        // Waves: plane with vertex displacement (BufferGeometry)
        const waveGeom = new THREE.PlaneGeometry(20, 12, 64, 48);
        const pos = waveGeom.attributes.position;
        const origZ = new Float32Array(pos.count);
        for (let i = 0; i < pos.count; i++) origZ[i] = pos.array[i * 3 + 2];
        waveGeom.userData.origZ = origZ;
        const waveMat = new THREE.MeshBasicMaterial({
            color: 0x22c55e,
            wireframe: true,
            transparent: true,
            opacity: 0.12,
        });
        heroWaves = new THREE.Mesh(waveGeom, waveMat);
        heroWaves.rotation.x = -Math.PI / 2.5;
        heroWaves.position.y = -2;
        heroWaves.position.z = -4;
        heroScene.add(heroWaves);

        // 3D Android: green rounded box (wobble + grow) — use BoxGeometry as fallback
        const androidGeom = new THREE.BoxGeometry(1.2, 1.2, 0.4);
        const androidMat = new THREE.MeshPhongMaterial({
            color: 0x3ddc84,
            shininess: 80,
            specular: 0x222222,
            emissive: 0x22c55e,
            emissiveIntensity: 0.2,
        });
        heroAndroid = new THREE.Mesh(androidGeom, androidMat);
        heroAndroid.position.set(-2, 0.2, 1.2);
        heroAndroid.scale.setScalar(0.85);
        heroScene.add(heroAndroid);

        const light = new THREE.DirectionalLight(0xffffff, 0.9);
        light.position.set(5, 5, 10);
        heroScene.add(light);
        heroScene.add(new THREE.AmbientLight(0xfefce8, 0.6));

        window.addEventListener("resize", onHeroResize);
        animateHero();
    }

    function onHeroResize() {
        if (!heroCanvas || !heroRenderer || !heroCamera) return;
        const width = heroCanvas.parentElement.offsetWidth;
        const height = heroCanvas.parentElement.offsetHeight;
        heroCamera.aspect = width / height;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(width, height);
    }

    function animateHero() {
        if (!heroRenderer || !heroScene || !heroCamera) return;
        requestAnimationFrame(animateHero);
        const t = heroClock.getElapsedTime();
        if (heroWaves && heroWaves.geometry.attributes.position) {
            const pos = heroWaves.geometry.attributes.position;
            const origZ = heroWaves.geometry.userData.origZ;
            const arr = pos.array;
            for (let i = 0; i < pos.count; i++) {
                const i3 = i * 3;
                const x = arr[i3], y = arr[i3 + 1];
                const base = origZ ? origZ[i] : 0;
                arr[i3 + 2] = base + 0.15 * Math.sin(x * 0.5 + t * 1.2) + 0.1 * Math.cos(y * 0.5 + t * 0.9);
            }
            pos.needsUpdate = true;
        }
        if (heroAndroid) {
            heroAndroid.rotation.y = 0.15 * Math.sin(t * 0.8);
            heroAndroid.rotation.z = 0.08 * Math.sin(t * 0.6);
            const grow = 0.92 + 0.08 * Math.sin(t * 0.5);
            heroAndroid.scale.setScalar(grow);
        }
        heroRenderer.render(heroScene, heroCamera);
    }

    // —— Hackers Arena Three.js: red wireframe 3D ——
    let hackersScene, hackersCamera, hackersRenderer, hackersMesh, hackersClock;
    const hackersCanvas = document.getElementById("hackers-canvas");

    function initHackersThree() {
        if (!hackersCanvas || typeof THREE === "undefined") return;
        const width = hackersCanvas.parentElement.offsetWidth;
        const height = hackersCanvas.parentElement.offsetHeight;
        hackersScene = new THREE.Scene();
        hackersCamera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        hackersCamera.position.set(0, 0, 6);
        hackersRenderer = new THREE.WebGLRenderer({ canvas: hackersCanvas, alpha: true, antialias: true });
        hackersRenderer.setSize(width, height);
        hackersRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        hackersRenderer.setClearColor(0x0a0a0a, 0);
        hackersClock = new THREE.Clock();

        const geom = new THREE.IcosahedronGeometry(1.8, 1);
        const mat = new THREE.MeshBasicMaterial({
            color: 0xdc2626,
            wireframe: true,
            transparent: true,
            opacity: 0.4,
        });
        hackersMesh = new THREE.Mesh(geom, mat);
        hackersMesh.position.set(0, 0, -2);
        hackersScene.add(hackersMesh);

        window.addEventListener("resize", onHackersResize);
        animateHackers();
    }

    function onHackersResize() {
        if (!hackersCanvas || !hackersRenderer || !hackersCamera) return;
        const w = hackersCanvas.parentElement.offsetWidth;
        const h = hackersCanvas.parentElement.offsetHeight;
        hackersCamera.aspect = w / h;
        hackersCamera.updateProjectionMatrix();
        hackersRenderer.setSize(w, h);
    }

    function animateHackers() {
        if (!hackersRenderer || !hackersScene || !hackersCamera) return;
        requestAnimationFrame(animateHackers);
        const t = hackersClock.getElapsedTime();
        if (hackersMesh) {
            hackersMesh.rotation.y = t * 0.15;
            hackersMesh.rotation.x = 0.2 * Math.sin(t * 0.1);
        }
        hackersRenderer.render(hackersScene, hackersCamera);
    }

    const hackersSection = document.getElementById("hackers-arena");
    const hackersObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !window.__hackersInit) {
                    window.__hackersInit = true;
                    initHackersThree();
                }
            });
        },
        { threshold: 0.2 }
    );
    if (hackersSection) hackersObserver.observe(hackersSection);

    // —— Projects carousel (CD-style zoom) ——
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    let carouselIndex = 0;
    const totalCards = cards.length;

    function updateCarousel() {
        if (!track || !cards.length) return;
        carouselIndex = (carouselIndex + totalCards) % totalCards;
        cards.forEach((card, i) => card.classList.toggle("active", i === carouselIndex));
        const cardWidth = 280;
        const gap = 24;
        const viewport = track.parentElement;
        const offset = -carouselIndex * (cardWidth + gap) + (viewport.offsetWidth / 2) - (cardWidth / 2);
        track.style.transform = "translateX(" + offset + "px)";
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { carouselIndex--; updateCarousel(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { carouselIndex++; updateCarousel(); });

    document.addEventListener("DOMContentLoaded", () => {
        initHeroThree();
        updateCarousel();
        if (lucide && typeof lucide.createIcons === "function") lucide.createIcons();
    });
})();
