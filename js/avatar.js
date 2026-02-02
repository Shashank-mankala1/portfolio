
// 3D Avatar Logic using Three.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('avatar-container');
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 200 / 300, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(200, 300);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // --- Assets & Materials ---
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd6a70b, metalness: 0.3, roughness: 0.4 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.5 }); // For envelope/seal
    
    // Hologram Texture
    function createHologramTexture(lines) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'rgba(20, 20, 40, 0.9)';
        ctx.beginPath();
        ctx.roundRect(10, 10, 236, 108, 10);
        ctx.fill();
        
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#d6a70b'; 
        ctx.stroke();

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        lines.forEach((line, i) => {
            ctx.fillText(line, 128, 55 + (i * 30));
        });
        
        return new THREE.CanvasTexture(canvas);
    }
    
    const defaultHoloTexture = createHologramTexture(['AI • ML', 'Data']);
    const holoMaterial = new THREE.MeshBasicMaterial({ 
        map: defaultHoloTexture, 
        transparent: true, 
        side: THREE.DoubleSide
    });

    // --- Character Construction ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.4, 1.2, 8), whiteMat);
    body.position.y = -0.2;
    robotGroup.add(body);
    
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.1), goldMat);
    chest.position.set(0, 0, 0.35);
    body.add(chest);

    // Head Group
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.9;
    robotGroup.add(headGroup);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat);
    headGroup.add(head);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.3), darkMat);
    visor.position.set(0, 0.1, 0.3);
    headGroup.add(visor);

    const antStem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3), whiteMat);
    antStem.position.y = 0.5;
    headGroup.add(antStem);
    
    const antBulb = new THREE.Mesh(new THREE.SphereGeometry(0.1), goldMat);
    antBulb.position.y = 0.2;
    antStem.add(antBulb);

    // Hands
    const handGeo = new THREE.SphereGeometry(0.25);
    const leftHand = new THREE.Mesh(handGeo, whiteMat);
    leftHand.position.set(-0.9, 0, 0);
    robotGroup.add(leftHand);

    const rightHand = new THREE.Mesh(handGeo, whiteMat);
    rightHand.position.set(0.9, 0, 0);
    robotGroup.add(rightHand);

    // --- PROPS ---

    // 1. Hologram Plane
    const holoPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), holoMaterial);
    holoPlane.position.set(0, 1.6, 0.5);
    holoPlane.visible = false;
    robotGroup.add(holoPlane);

    // 2. Skills Icons
    const skillsGroup = new THREE.Group();
    skillsGroup.visible = false;
    robotGroup.add(skillsGroup);
    
    const loader = new THREE.TextureLoader();
    const logoGeo = new THREE.PlaneGeometry(0.5, 0.5); // Slightly larger for visibility
    const skill1 = new THREE.Mesh(logoGeo, new THREE.MeshBasicMaterial({ map: loader.load('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'), transparent: true, side: THREE.DoubleSide }));
    const skill2 = new THREE.Mesh(logoGeo, new THREE.MeshBasicMaterial({ map: loader.load('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'), transparent: true, side: THREE.DoubleSide }));
    const skill3 = new THREE.Mesh(logoGeo, new THREE.MeshBasicMaterial({ map: loader.load('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'), transparent: true, side: THREE.DoubleSide }));
    skillsGroup.add(skill1, skill2, skill3);

    // 3. Helmet (Experience)
    const helmet = new THREE.Group();
    helmet.visible = false;
    headGroup.add(helmet);
    
    // Hard Hat Dome (Flattened slightly)
    const hardHat = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45), goldMat);
    hardHat.scale.y = 0.8; // Flatten top
    hardHat.position.y = 0.1;
    helmet.add(hardHat);
    
    // Brim (Wider and flat)
    const hatBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.05, 32), goldMat);
    hatBrim.position.y = 0;
    helmet.add(hatBrim);
    
    // Visor/Lamp mount
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.1), darkMat);
    lamp.position.set(0, 0.2, 0.5);
    helmet.add(lamp);

    // 4. Grad Cap (Education)
    const gradCap = new THREE.Group();
    gradCap.visible = false;
    gradCap.position.y = 0.5; 
    headGroup.add(gradCap);
    const capBoard = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.8), darkMat);
    gradCap.add(capBoard);
    const capSkull = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.3, 16), darkMat);
    capSkull.position.y = -0.15;
    gradCap.add(capSkull);
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4), goldMat);
    tassel.position.set(0.4, 0, 0.4);
    tassel.rotation.x = 0.5;
    gradCap.add(tassel);
    
    // 5. Trophy (Achievements)
    const trophy = new THREE.Group();
    trophy.visible = false;
    // Scale up for visibility
    trophy.scale.set(2, 2, 2); 
    trophy.position.set(0.6, 0, 0.5); 
    robotGroup.add(trophy);
    const cupBase = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.2, 0.1), goldMat);
    trophy.add(cupBase);
    const cupBody = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.1, 0.3), goldMat);
    cupBody.position.y = 0.2;
    trophy.add(cupBody);
    const cupBowl = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5), goldMat);
    cupBowl.position.y = 0.35;
    trophy.add(cupBowl);

    // 6. Envelope (Contact)
    const envelope = new THREE.Group();
    // Reset position to be held in hand, not inside body
    envelope.position.set(0.8, 0.5, 0.5); 
    envelope.rotation.set(0.2, -0.2, 0.1);
    envelope.visible = false;
    robotGroup.add(envelope); 
    
    const envBody = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), whiteMat);
    envelope.add(envBody);
    
    // Border for visibility against white body
    const envBorder = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.55), goldMat);
    envBorder.position.z = -0.01; // Behind
    envelope.add(envBorder);

    const seal = new THREE.Mesh(new THREE.CircleGeometry(0.08), redMat);
    seal.position.z = 0.02;
    envelope.add(seal);


    // --- Animation State ---
    let currentState = 'intro'; 
    let targetX = 0;
    let time = 0;

    // Intro Setup
    robotGroup.position.x = -5; 

    // Exposed Logic
    window.updateAvatarState = (state, data) => {
        if (state === 'project_hover') {
            currentState = 'project_hover';
            if (data && typeof data.index === 'number') {
                targetX = (data.index % 3 - 1) * 0.8; 
                const projectNames = ["Video AI", "LLM Engine", "TutorMind", "Forecast", "Analytics", "Automation"];
                const name = projectNames[data.index] || "Project";
                holoMaterial.map = createHologramTexture(["Preview:", name]);
            }
        } else if (state === 'nod') {
            // One-shot Nod
            // We can just overlay logic in loop
        } else {
            currentState = state;
            if (currentState !== 'project_hover') targetX = 0;
            if (state === 'about') holoMaterial.map = defaultHoloTexture;
        }
    };

    function animate() {
        requestAnimationFrame(animate);
        time += 0.05;

        // Position Interpolation
        robotGroup.position.x = THREE.MathUtils.lerp(robotGroup.position.x, targetX, 0.05);
        robotGroup.position.y = THREE.MathUtils.lerp(robotGroup.position.y, Math.sin(time) * 0.05, 0.1);

        // Reset Props visibility (each state enables what it needs)
        holoPlane.visible = false;
        skillsGroup.visible = false;
        helmet.visible = false;
        gradCap.visible = false;
        trophy.visible = false;
        envelope.visible = false;

        // State Machine
        switch (currentState) {
            case 'intro':
                robotGroup.position.x = THREE.MathUtils.lerp(robotGroup.position.x, 0, 0.05);
                robotGroup.rotation.z = Math.sin(time * 10) * 0.05;
                if (Math.abs(robotGroup.position.x) < 0.1) currentState = 'idle';
                break;

            case 'idle': 
                robotGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
                robotGroup.rotation.z = 0;
                leftHand.position.y = Math.sin(time) * 0.05;
                rightHand.position.y = Math.sin(time + 1) * 0.05;
                headGroup.rotation.set(0,0,0);
                break;

            case 'about':
                robotGroup.rotation.y = THREE.MathUtils.lerp(robotGroup.rotation.y, 0.3, 0.1);
                rightHand.position.set(0.6, 0.6, 0.4); 
                holoPlane.visible = true;
                holoPlane.position.y = 1.3 + Math.sin(time) * 0.05;
                headGroup.rotation.set(0,0,0);
                break;

            case 'skills':
                robotGroup.rotation.y = THREE.MathUtils.lerp(robotGroup.rotation.y, 0, 0.1);
                skillsGroup.visible = true;
                // Wider Juggling (Increased radius to 1.0)
                skill1.position.set(Math.sin(time) * 1.0, Math.abs(Math.cos(time)) * 0.8 + 0.6, 0.2);
                skill2.position.set(Math.sin(time + 2) * 1.0, Math.abs(Math.cos(time + 2)) * 0.8 + 0.6, 0.2);
                skill3.position.set(Math.sin(time + 4) * 1.0, Math.abs(Math.cos(time + 4)) * 0.8 + 0.6, 0.2);
                leftHand.position.set(-1.0, 0.4, 0.2);
                rightHand.position.set(1.0, 0.4, 0.2);
                headGroup.rotation.set(0,0,0);
                break;

            case 'projects': 
            case 'project_hover':
                robotGroup.rotation.y = THREE.MathUtils.lerp(robotGroup.rotation.y, 0.2, 0.1);
                rightHand.position.set(1.0, 0.2, 0.2); // Pointing
                leftHand.position.set(-0.8, -0.2, 0);
                if (currentState === 'project_hover') {
                    rightHand.position.set(0.6, 0.5, 0.5); // Thumbs Up
                    holoPlane.visible = true;
                }
                headGroup.rotation.set(0,0,0);
                break;

            case 'experience':
                helmet.visible = true;
                robotGroup.rotation.y = THREE.MathUtils.lerp(robotGroup.rotation.y, 0.2, 0.1);
                
                // Inspection Look + Salute
                const lookCycle = Math.sin(time * 0.5); // Slow look
                headGroup.rotation.y = lookCycle * 0.5;

                const saluteCycle = Math.sin(time * 3);
                if (Math.abs(lookCycle) < 0.2 && saluteCycle > 0.5) {
                    // Only salute when looking forward
                    rightHand.position.set(0.6, 0.6, 0.3); 
                    headGroup.rotation.x = -0.1; 
                } else {
                    rightHand.position.set(0.9, -0.2, 0); 
                    headGroup.rotation.x = 0;
                }
                leftHand.position.set(-0.9, -0.2, 0);
                
                robotGroup.position.y = 0; 
                break;

            case 'education':
                gradCap.visible = true;
                robotGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
                // Higher Cap Float
                gradCap.position.y = 0.8 + Math.max(0, Math.sin(time * 2) * 0.6); 
                gradCap.rotation.z = Math.sin(time * 5) * 0.2;

                // Hands "Success"
                rightHand.position.set(1.0, 0.6, 0);
                leftHand.position.set(-1.0, 0.6, 0);
                headGroup.rotation.x = -0.2; // Look up at cap
                break;

            case 'achievements':
                trophy.visible = true;
                robotGroup.rotation.y = 0;
                
                // Winner Pose (Holding trophy high)
                trophy.position.set(0, 1.8, 0); 
                trophy.rotation.y += 0.05; 

                // Hands cheering up
                rightHand.position.set(0.8, 1.0, 0);
                leftHand.position.set(-0.8, 1.0, 0);
                // Pump
                rightHand.position.y += Math.sin(time * 10) * 0.2;
                leftHand.position.y += Math.cos(time * 10) * 0.2;
                
                headingGroup = headGroup;
                headGroup.rotation.y = Math.sin(time * 2) * 0.2;
                break;

            case 'contact':
                envelope.visible = true;
                
                // Holding Envelope in LEFT hand to side
                leftHand.position.set(-0.9, 0.5, 0.4);
                envelope.position.set(-1.2, 0.7, 0.4); 
                envelope.rotation.set(0, 0, 0.2);

                // Exaggerated Wave with RIGHT hand
                rightHand.position.set(1.2, 0.8, 0.2);
                rightHand.rotation.z = Math.sin(time * 8) * 0.8; 
                
                break;
        }

        renderer.render(scene, camera);
    }
    
    animate();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let newState = 'idle';
                switch(entry.target.id) {
                    case 'home': newState = 'idle'; break;
                    case 'about': newState = 'about'; break;
                    case 'skills': newState = 'skills'; break;
                    case 'projects': newState = 'projects'; break;
                    case 'experience': newState = 'experience'; break;
                    case 'education': newState = 'education'; break;
                    case 'achievements': newState = 'achievements'; break;
                    case 'contact': newState = 'contact'; break;
                }
                // Only update if explicit match found, else keep previous (or default)
                if (newState) window.updateAvatarState(newState);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(s => observer.observe(s));
});
