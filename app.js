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
    { 
        id: "03", 
        title: "Social Outkast", 
        role: "UI/UX", 
        date: "2024", 
        partner: "Vestart", 
        img: "./assets/social.mp4", 
        description: `UI/UX design for the Social Outkast e-shop, a platform built for a community that thrives on free expression and individuality.\n\nSocial Outkast represents slow fashion, designed and crafted with passion in Greece, made specifically for the streets. The concept embraces the philosophy that being authentic is the only way to go. The digital experience reflects this raw identity: sharp cuts, small-batch productions, and an uncompromised respect for people and art.\n\nCelebrating diversity and inclusion, the e-shop design mirrors a space for those who dress loud, think wild, and refuse to fit in. Welcome to a new era where style has a conscience and difference is the rule.`, 
        media: ["./assets/socialout.mp4"] 
    },
    { 
        id: "04", 
        title: "Femina", 
        role: "Art Direction", 
        date: "2024", 
        partner: "", 
        img: "./assets/femina.avif", 
        description: `FEMINA is an idea which stems from the recognition that women and femininities have historically faced numerous challenges, including sexism, fear, and marginalization. Many feel disempowered and disconnected due to these pervasive issues. FEMINA was created to address these problems by providing a safe, empowering e-community where women can feel supported and celebrated. Our e-magazine offers a fresh perspective on feminism, youth, and women's issues, aiming to uplift and inspire our readers by highlighting their strength and resilience. Through FEMINA, we aspire to create a space where women can thrive as powerful survivors, fostering a sense of belonging and empowerment.`,
        media: [
            "./assets/femina1.png",
            "./assets/femina2.png",
            "./assets/femina3.png",
            "./assets/femina4.png",
            "./assets/femina5.png",
            "./assets/femina6.png",
            `<iframe src="https://player.vimeo.com/video/1078110846?h=aef829c5d7&amp;badge=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`
        ]
    },
    { 
        id: "05", 
        title: "Game", 
        role: "360", 
        date: "2024", 
        partner: "", 
        img: "./assets/game.avif", 
        description: `This project focuses on the development of a fidget toy application. Fidget toys are small, handheld objects designed to provide sensory stimulation through touch, movement, and visual engagement. They are commonly used to promote relaxation, reduce stress, and improve focus, helping individuals stay concentrated while completing tasks.\n\nThe essence of these toys lies in their colors, textures, and shapes, which not only define their appearance but also determine how they are interacted with. The way a person plays with a fidget toy is inherently connected to these sensory characteristics, making the design of each element crucial to the overall experience.\n\nThe core idea of this project is to digitize the fidget toy experience by bringing various types of fidget toys into a single, accessible application. This digital solution aims to capture the calming and focusing benefits of physical fidget toys while leveraging the possibilities of technology to offer a versatile and convenient tool for relaxation and concentration.`, 
        media: [
            "./assets/toy1.png",
            "./assets/toy2.png",
            "./assets/toy3.png",
            "./assets/toy4.png",
            `<iframe src="https://player.vimeo.com/video/1072835024?h=b160ee7a15&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1072836306?h=5485f3a0c9&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture; fullscreen" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1072836961?h=a78a8d84fb&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture; fullscreen" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            `<iframe src="https://player.vimeo.com/video/1072837294?h=65088ce83c&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; picture-in-picture; fullscreen" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            "./assets/toyfinal.png",
            "./assets/toyfinal2.png"
        ]
    },
    { 
        id: "06", 
        title: "Softlikebutter", 
        role: "Management", 
        date: "2025", 
        partner: "Vestart", 
        img: "./assets/femina.avif", 
        description: `UI/UX design for Softlikebutter, a prominent cosmetics brand owned by one of Greece's top influencers. The core creative challenge was to build an interface that is exceptionally user-friendly, highly intuitive, and lightning-fast—optimized specifically for audiences who are not necessarily tech-savvy or familiar with complex e-commerce layouts.\n\nThis project reflects a personal philosophy towards digital design: commercial projects deserve the exact same creative focus, depth, and 100% dedication as abstract artistic explorations. By treating commercial constraints as a canvas for innovation, the design bridges accessibility with premium aesthetics, ensuring that everyday transactional friction is transformed into an elegant, fluid, and highly satisfying interactive journey.`, 
        media: ["./assets/femina.avif"] 
    },
    { 
        id: "07", 
        title: "Temporal Ethics", 
        role: "Creative Ideation, UX", 
        date: "2024", 
        partner: "Eleana Pandia, Panos Livadas", 
        img: "./assets/entropia.jpg", 
        description: `Temporal Ethics: AI and the Shifting Self\n\nThe Experiential Journey: Fostering Fun, Exploration, and Critical Thought in Human–AI Co-Creation\n\n\nImagine stepping into a world just beyond the horizon of the present: a post-anthropocentric society where questions of identity, agency, and responsibility are unsettled, and where your traveling companion is not another human, but an artificial general intelligence (AGI). This is the entry point to The Experiential Journey, a workshop that invites participants into a narrative of ethical exploration and playful co-creation. Here, winning or losing is irrelevant; what matters is what you discover about yourself, about others, and about the futures you might imagine together.\n\nThe journey begins with a simple yet disarming choice: do you walk forward as The Kid, full of untapped potential; as The Present Self, grounded in the present; or as The Old Man, seasoned by hindsight? This temporal self-simulation alters how the AGI speaks to you, reshaping dilemmas through the eyes of innocence, urgency, or wisdom. At each fork in the path, the AI poses new challenges, such as freshly conjured scenarios spun in real time through procedural content generation. These dilemmas draw you across three axes: into the depths of Self, the complexities of World, and the trajectories of Evolution.\n\nYour choices are of the utmost importance. The AGI weaves them into twists in the unfolding story that mirror your stance. With each step, you accumulate an "ethical fingerprint," a profile that quantifies not only how fair, sustainable, or hopeful your responses may be, but also what kind of world your decisions are building. At the end of this path, your fingerprint blossoms into a short filmic vignette: a glimpse of the future you have co-authored, a glimpse of your personalized fantasy world. It is abstract values and fleeting thoughts rendered as landscapes you can almost touch.\n\nThe journey does not end in solitude. As travelers return from their individual quests, they find others carrying different fingerprints. Some worlds harmonize while others clash. Here the story opens into a shared space: participants gather around a figurative "campfire" where worlds collide and intermingle. Guided by facilitators, they confront meta-dilemmas distilled from their collective data, weaving disparate threads into dialogue. Groups negotiate, debate, and ultimately begin sketching the outlines of a "meta-world", a collaborative design that embodies both tension and synthesis, echoing traditions of collective intelligence.\n\nBeneath its playful surface, the workshop is a live research platform. It collects empirical insights into how people reason morally across temporal identities and under conditions of uncertainty, building on work such as the Moral Machine experiment. It probes the potential of AI to serve as a reflective agent, facilitating rather than dictating ethical engagement. It also contributes to broader discussions of responsible AI by exploring co-creative processes where humans and machines jointly articulate values and futures.`, 
        media: ["./assets/chi2.jpg"] 
    },
    { id: "08", title: "Brotherakia", role: "UI/UX", date: "2024", partner: "Vestart", img: "./assets/where.avif", description: "Περιγραφή για το Brotherakia.", media: ["./assets/where.avif"] },
    { id: "09", title: "Treha Gireve", role: "UI/UX", date: "2024", partner: "Vestart", img: "./assets/game.avif", description: "Περιγραφή για το Treha Gireve.", media: ["./assets/game.avif"] },
    { 
        id: "10", 
        title: "Skadin", 
        role: "360", 
        date: "2024", 
        partner: "", 
        img: "./assets/where.avif", 
        description: `Skadin is a comprehensive digital transformation project designed for the hospitality sector. It features a custom-built website seamlessly integrated with an advanced, robust booking engine. The core objective of Skadin is to optimize the reservation ecosystem, allowing properties to handle direct bookings efficiently while providing an intuitive, seamless user experience for guests.\n\nFrom secure payment gateways to dynamic room availability management, the platform bridges high-end web design with complex back-end operations. By eliminating friction in the booking process, Skadin redefines how boutique hotels interact with customers, translating architectural elegance into a digital space that drives engagement and streamlines administrative workflows.`, 
        media: [
            `<iframe src="https://player.vimeo.com/video/1078441730?autoplay=1&amp;loop=1&amp;background=1&amp;muted=1&amp;h=ba11aac485" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>`,
            "./assets/skadin1.png",
            "./assets/skadin2.png",
            "./assets/skadin3.png",
            "./assets/skadin4.png",
            "./assets/skadin5.png"
        ]
    },
    { id: "11", title: "Lovale", role: "Creative Direction", date: "2024", partner: "Vestart", img: "./assets/entropia.jpg", description: "Περιγραφή για το Lovale.", media: ["./assets/entropia.jpg"] },
    { id: "12", title: "Brandsden", role: "PM, UI/UX", date: "2025", partner: "Vestart", img: "./assets/social.mp4", description: "Περιγραφή για το Brandsden.", media: ["./assets/social.mp4"] },
    { id: "13", title: "Stain", role: "PM, Creative Strategy, UI/UX", date: "2024", partner: "Vestart", img: "./assets/femina.avif", description: "Περιγραφή για το Stain.", media: ["./assets/femina.avif"] },
    { 
        id: "14", 
        title: "Cube is cubing", 
        role: "360", 
        date: "2026", 
        partner: "", 
        img: "./assets/Untitled.mp4", 
        description: `"Cube is cubing" is an exploration in creative coding developed using p5.js. The project serves as a visual bridge between the structured constraints of commercial design and the infinite freedom of abstract art. It is a creative medium that deconstructs familiar shapes to challenge how we perceive standard layouts.\n\nBy manipulating geometric properties through code, the project transforms something traditionally rigid and corporate into an unpredictable, fluid digital entity. It investigates the duality of digital interaction—showing how mathematical calculations and functional code can shift from serving a commercial purpose to birthing a purely artistic, generative experience.`,
        media: ["./assets/Untitled.mp4"] 
    },
    { 
        id: "15", 
        title: "Are you part of yourself?", 
        role: "360", 
        date: "2025", 
        partner: "Self", 
        img: "./assets/areyou.mp4", 
        description: `Identity in the Digital Age: Reflection or Projection?\n\nIdentity is multi-dimensional and continuously evolving through experiences and interactions. However, in our current era of social media and algorithmic dominance, individual identity faces an unprecedented crisis. Digital platforms have built a world where uniqueness blurs, and our authentic core is often replaced by mass-produced standards and automated trends.\n\n"ARE YOU PART OF YOURSELF?" is a provocative thesis project that invites viewers to reflect on their relationship with technology. It questions whether our essence has been commodified, collected, and replicated by modern networks, reducing individuality into sheer conformity. The project serves as a bold commentary on mass choice, urging a conscious return to our true selves amid the digital noise.\n\nVisual & Conceptual Execution:\nThe video triggers immediate emotional responses through a distorted, "broken" glitch aesthetic and monochromatic filters, symbolizing alienation. Abstract units transition into mass elements to mirror the loss of self. Key terminology from Wikipedia is intentionally integrated as a satirical nod to questionable mainstream data, highlighting how misinformation shapes personal truth. By exposing commercialized validation metrics, the project actively forces the viewer to shift from a passive observer to an active participant.\n\nTarget Audience:\nThis work addresses active social media users and individuals swept into modern echo chambers, bridging the gap for those experiencing an internal division between true existence ("being") and algorithmic performance ("appearing").`,
        media: [
            `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1203030012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="are_you_new"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
        ] 
    },
    { id: "16", title: "La Voltaira", role: "Brand Strategy", date: "2026", partner: "Vestart", img: "./assets/la.mp4", description: "Περιγραφή για το La Voltaira.", media: ["./assets/la.mp4"] }
];

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
