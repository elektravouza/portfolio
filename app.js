// ΤΟ ARRAY 'projects' ΑΦΑΙΡΕΘΗΚΕ - ΦΟΡΤΩΝΕΤΑΙ ΑΠΟ ΤΟ DATA.JS AUTOMATICALLY

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

let currentProjectIndex = 0;

function openProject(index) {
    currentProjectIndex = index;
    const project = projects[index];
    
    document.getElementById('p-title').innerText = project.title;
    document.getElementById('p-role').innerText = project.role;
    document.getElementById('p-date').innerText = project.date;
    
    const partnerWrapper = document.getElementById('p-partner-wrapper');
    if (project.partner && project.partner.trim() !== "") {
        partnerWrapper.style.display = "block";
        document.getElementById('p-partner').innerText = project.partner;
    } else {
        partnerWrapper.style.display = "none";
    }
    
    document.getElementById('p-desc').innerText = project.description || "";
    
    const mediaContainer = document.getElementById('p-media');
    mediaContainer.innerHTML = ''; 
    
    const mediaList = project.media && project.media.length > 0 ? project.media : [project.img]; 
    
    mediaList.forEach(item => {
        const itemWrapper = document.createElement('div');
        
        if (item.startsWith('<iframe') || item.startsWith('<div')) {
            itemWrapper.innerHTML = item;
        } 
        else if (item.endsWith('.mp4') || item.endsWith('.mov')) {
            const video = document.createElement('video');
            video.src = item; video.loop = true; video.muted = true; video.autoplay = true; video.playsInline = true;
            itemWrapper.appendChild(video);
        } 
        else {
            const img = document.createElement('img');
            img.src = item;
            itemWrapper.appendChild(img);
        }
        mediaContainer.appendChild(itemWrapper);
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
