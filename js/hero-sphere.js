
// Hero Sphere Animation (Three.js)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hero-sphere-container');
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 2; // Closer camera for impactful view

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Particle Sphere ---
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const radius = 1.2;
    const colorInside = new THREE.Color(0xd6a70b); // Gold
    const colorOutside = new THREE.Color(0xffffff); // White

    for (let i = 0; i < particlesCount; i++) {
        // Random point handling on sphere surface
        const phi = Math.acos(-1 + (2 * i) / particlesCount);
        const theta = Math.sqrt(particlesCount * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        // Add some noise
        posArray[i * 3] = x + (Math.random() - 0.5) * 0.1;
        posArray[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1;
        posArray[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1;

        // Color mix
        const mixedColor = colorInside.clone().lerp(colorOutside, Math.random());
        colorsArray[i * 3] = mixedColor.r;
        colorsArray[i * 3 + 1] = mixedColor.g;
        colorsArray[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Material
    const material = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    // Mesh
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Sphere Background (Subtle Glow)
    const glowGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xd6a70b,
        transparent: true,
        opacity: 0.05,
    });
    const glowSphere = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glowSphere);


    // --- Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    function animate() {
        const elapsedTime = clock.getElapsedTime();

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        // Smooth rotation
        particlesMesh.rotation.y += 0.005;
        particlesMesh.rotation.x += 0.002;

        // Mouse interaction eases
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        
        // Pulse effect
        const scale = 1 + Math.sin(elapsedTime * 2) * 0.02;
        particlesMesh.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
});
