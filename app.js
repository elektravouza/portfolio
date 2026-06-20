const projects = [
    { 
        id: "01", title: "Entropia", role: "360", date: "2025", partner: "", img: "./assets/entropia.jpg",
        description: "Περιγραφή για το Entropia.",
        media: ["./assets/entropia.jpg"] 
    },
    { 
        id: "02", 
        title: "Where", 
        role: "360", 
        date: "2024", 
        partner: "", 
        img: "./assets/where.avif",
        description: `The inspiration for the "WHERE" experiment stems from a remarkable event in China, where one robot managed to influence and persuade others to follow its lead. This unusual reversal, where the mass became the follower instead of the guide, challenges our understanding of influence and conformity.\n\nDrawing from this phenomenon, the "WHERE" experiment reimagines the classic Asch conformity study in the context of 2024/2025. It investigates whether individuals are still significantly affected by the majority or if we have entered an era where people can act independently, free from the sway of the mass. By creating a digital platform that simulates social pressure through moving bots, the experiment explores whether modern users make decisions influenced by the collective or assert their autonomy in an increasingly interconnected world.\n\nThe name of the experiment, WHERE, has both a literal and a metaphorical meaning. The literal meaning lies in its connection to the main and only question posed to the user: “Where should the box/robot go?” Metaphorically, however, it brings to the surface a more allegorical dimension, seeking answers to deeper questions such as:\n“Where are you going?”, “Do you want to be the mass?”, “Do you want to follow the others?”, “Where is your opinion?”, “Where is your voice?”, “Where are you?”`,
        media: [
            "./assets/where1.webp",
            `<iframe src="https://player.vimeo.com/video/1052616300?h=eb12c5ffc4&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1050344174?h=0191884278&amp;autoplay=1&amp;loop=1&amp;background=1&amp;muted=1" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1049584612?h=fbcba533a3&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            "./assets/where2.png",
            "./assets/where3.png",
            `<iframe src="https://player.vimeo.com/video/1041558154?autoplay=1&amp;loop=1&amp;muted=1&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            "./assets/where4.png",
            `<iframe src="https://player.vimeo.com/video/1052624710?h=295b635d24&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1&amp;badge=0" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1052626682?h=be2e6c9fd5&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1&amp;badge=0" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            "./assets/where-5.png",
            "./assets/where.png",
            "./assets/where6.png"
        ]
    },
    { id: "03", title: "Social Outkast", role: "UI/UX", date: "2024", partner: "Vestart", img: "./assets/social.mp4", description: "Περιγραφή για το Social Outkast.", media: ["./assets/social.mp4"] },
    { id: "04", title: "Femina", role: "Art Direction", date: "2024", partner: "", img: "./assets/femina.avif", description: "Περιγραφή για το Femina.", media: ["./assets/femina.avif"] },
    { id: "05", title: "Game", role: "UI/UX", date: "2024", partner: "", img: "./assets/game.avif", description: "Περιγραφή για το Game.", media: ["./assets/game.avif"] },
    { id: "06", title: "Softlikebutter", role: "Management", date: "2025", partner: "Vestart", img: "./assets/femina.avif", description: "Περιγραφή για το Softlikebutter.", media: ["./assets/femina.avif"] },
    { id: "07", title: "Temporal Ethics", role: "Ideation", date: "2024", partner: "Eleana Pafiti", img: "./assets/entropia.jpg", description: "Περιγραφή για το Temporal Ethics.", media: ["./assets/entropia.jpg"] },
    { id: "08", title: "Back2K", role: "Creative Dir", date: "2024", partner: "Vestart", img: "./assets/social.mp4", description: "Περιγραφή για το Back2K.", media: ["./assets/social.mp4"] },
    { id: "09", title: "Brotherakia", role: "UI/UX", date: "2024", partner: "Vestart", img: "./assets/where.avif", description: "Περιγραφή για το Brotherakia.", media: ["./assets/where.avif"] },
    { id: "10", title: "Treha Gireve", role: "UI/UX", date: "2024", partner: "Vestart", img: "./assets/game.avif", description: "Περιγραφή για το Treha Gireve.", media: ["./assets/game.avif"] },
    { id: "11", title: "Skadin", role: "360", date: "2024", partner: "", img: "./assets/where.avif", description: "Περιγραφή για το Skadin.", media: ["./assets/where.avif"] },
    { id: "12", title: "Lovale", role: "Creative Dir", date: "2024", partner: "Vestart", img: "./assets/entropia.jpg", description: "Περιγραφή για το Lovale.", media: ["./assets/entropia.jpg"] },
    { id: "13", title: "Brandsden", role: "Management", date: "2025", partner: "Vestart", img: "./assets/social.mp4", description: "Περιγραφή για το Brandsden.", media: ["./assets/social.mp4"] },
    { id: "14", title: "Stain", role: "Strategy", date: "2024", partner: "Vestart", img: "./assets/femina.avif", description: "Περιγραφή για το Stain.", media: ["./assets/femina.avif"] },
    { id: "15", title: "Cube is cubing", role: "Creative Coding", date: "2026", partner: "", img: "./assets/Untitled.mp4", description: "Περιγραφή για το Cube is cubing.", media: ["./assets/Untitled.mp4"] },
    { id: "16", title: "Are you part of yourself?", role: "Thesis", date: "2026", partner: "Self", img: "./assets/areyou.mp4", description: "Περιγραφή για το Are you part of yourself?.", media: ["./assets/areyou.mp4"] },
    { id: "17", title: "La Voltaira", role: "Brand Strategy", date: "2026", partner: "Vestart", img: "./assets/la.mp4", description: "Περιγραφή για το La Voltaira.", media: ["./assets/la.mp4"] }
];

// THREE.JS SETUP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

let pixelToUnit, itemSpacing;
const baseHeight = 3.9;

function updateSizes() {
    const fov = camera.fov * (Math.PI / 180);
    const visibleHeight = 2 * Math.tan(fov / 2) * camera.position.z;
    pixelToUnit = visibleHeight / window.innerHeight;
    itemSpacing = baseHeight + (55 * pixelToUnit); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

const vertexShader = `
    uniform float uVelocity; 
    varying vec2 vUv; 
    void main() { 
        vUv = uv; 
        vec3 pos = position; 
        vec4 viewPos = modelViewMatrix * vec4(pos, 1.0); 
        float dist = length(viewPos.xy); 
        float hyperDist = cosh(dist * 0.45) * 0.45; 
        pos.z += hyperDist * (abs(uVelocity) / (1.0 + abs(uVelocity) * 0.02) * 0.1); 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); 
    }`;

const fragmentShader = `
    uniform sampler2D tMap; 
    uniform float uOpacity; 
    varying vec2 vUv; 
    void main() { 
        vec4 tex = texture2D(tMap, vUv); 
        gl_FragColor = vec4(tex.rgb, tex.a * uOpacity * 0.98); 
    }`;

const items = [];
const textureLoader = new THREE.TextureLoader();
const menuContainer = document.getElementById('menu-container');

projects.forEach((p, i) => {
    let texture;
    if (p.img.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = p.img; video.loop = true; video.muted = true; video.playsInline = true;
        video.load(); video.play().catch(() => {});
        texture = new THREE.VideoTexture(video);
    } else {
        texture = textureLoader.load(p.img);
    }

    const mat = new THREE.ShaderMaterial({ 
        vertexShader, fragmentShader, 
        uniforms: { tMap: { value: texture }, uVelocity: { value: 0.0 }, uOpacity: { value: 0.0 } }, 
        transparent: true 
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 3.9, 64, 64), mat);
    scene.add(mesh);
    items.push(mesh);

    const row = document.createElement('div');
    row.className = 'project-row';
    row.innerHTML = `<div>${p.id}</div><div>${p.title}</div><div>${p.role}</div><div>${p.date}</div><div>${p.partner}</div>`;
    
    row.onmouseenter = () => { 
        targetY = i * itemSpacing; 
        gsap.to(globalOpacity, { value: 1, duration: 0.4 }); 
        document.getElementById('hover-overlay').style.opacity = "1"; 
        document.getElementById('body').classList.add('is-hovering'); 
        document.querySelectorAll('.project-row').forEach((r, idx) => r.classList.toggle('active', idx === i)); 
    };

    row.onclick = () => { openProject(i); };
    menuContainer.appendChild(row);
});

document.getElementById('grid-trigger').onmouseleave = () => { 
    gsap.to(globalOpacity, { value: 0, duration: 0.4 }); 
    document.getElementById('hover-overlay').style.opacity = "0"; 
    document.getElementById('body').classList.remove('is-hovering'); 
    document.querySelectorAll('.project-row').forEach(r => r.classList.remove('active')); 
};

let targetY = 0, currentY = 0, smoothedVelocity = 0, globalOpacity = { value: 0 }; 
function animate() {
    requestAnimationFrame(animate);
    const lastY = currentY; 
    currentY += (targetY - currentY) * 0.15;
    const rawVelocity = (currentY - lastY) / pixelToUnit;
    smoothedVelocity += (rawVelocity - smoothedVelocity) * 0.2;
    items.forEach((mesh, i) => { 
        mesh.position.y = (-i * itemSpacing) + currentY; 
        mesh.material.uniforms.uVelocity.value = smoothedVelocity * 8.0; 
        mesh.material.uniforms.uOpacity.value = globalOpacity.value; 
    });
    renderer.render(scene, camera);
}

// ΛΕΙΤΟΥΡΓΙΑ ΠΡΟΒΟΛΗΣ PROJECT
let currentProjectIndex = 0;

function openProject(index) {
    currentProjectIndex = index;
    const project = projects[index];
    
    document.getElementById('p-title').innerText = project.title;
    document.getElementById('p-role').innerText = project.role;
    document.getElementById('p-date').innerText = project.date;
    document.getElementById('p-partner').innerText = project.partner || "None";
    document.getElementById('p-desc').innerText = project.description || "";
    
    const mediaContainer = document.getElementById('p-media');
    mediaContainer.innerHTML = ''; 
    
    const mediaList = project.media && project.media.length > 0 ? project.media : [project.img]; 
    
    mediaList.forEach(item => {
        // Αν είναι iframe (Vimeo)
        if (item.startsWith('<iframe')) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = item;
            mediaContainer.appendChild(wrapper.firstChild);
        } 
        // Αν είναι βίντεο mp4
        else if (item.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.src = item; video.loop = true; video.muted = true; video.autoplay = true; video.playsInline = true;
            mediaContainer.appendChild(video);
        } 
        // Αν είναι εικόνα
        else {
            const img = document.createElement('img');
            img.src = item;
            mediaContainer.appendChild(img);
        }
    });
    
    const pView = document.getElementById('project-view');
    pView.style.display = 'block';
    pView.scrollTo(0,0);
    
    gsap.to(pView, { opacity: 1, duration: 0.5 });
    window.location.hash = `project-${project.id}`;
}

function closeProject() {
    const pView = document.getElementById('project-view');
    gsap.to(pView, { opacity: 0, duration: 0.4, onComplete: () => {
        pView.style.display = 'none';
        window.location.hash = '';
    }});
}

document.getElementById('next-project-btn').onclick = (e) => {
    e.stopPropagation();
    let nextIndex = (currentProjectIndex + 1) % projects.length;
    openProject(nextIndex);
};

document.getElementById('prev-project-btn').onclick = (e) => {
    e.stopPropagation();
    let prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    openProject(prevIndex);
};

window.onhashchange = () => {
    if (!window.location.hash) closeProject();
};

function clock() { document.getElementById('clock').innerText = `${new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Athens', hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date())} Athens, Greece`; }
setInterval(clock, 1000); clock();

window.addEventListener('resize', updateSizes);
updateSizes(); 
animate();
