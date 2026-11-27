// Workbench technologies.
const technologies = {
    top: [
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ],
    middle: [
        { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'ASP.NET Core MVC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Entity Framework Core', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' }
    ],
    bottom: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Visual Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'CMake', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg' },
        { name: 'IntelliJ IDEA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'npm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
    ]
};

function createTechPill(technology) {
    const pill = document.createElement('div');
    pill.className = 'tech-pill';

    if (technology.logo) {
        const image = document.createElement('img');
        image.src = technology.logo;
        image.alt = '';
        image.decoding = 'async';
        image.addEventListener('error', () => {
            image.style.visibility = 'hidden';
        });
        pill.append(image);
    } else {
        pill.classList.add('no-icon');
    }

    const label = document.createElement('span');
    label.textContent = technology.name;
    pill.append(label);
    return pill;
}

function buildTechTrack(trackId, items) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const group = document.createElement('div');
    group.className = 'tech-group';
    items.forEach(item => group.append(createTechPill(item)));
    track.append(group);

    // Repeat enough copies to cover even an ultrawide viewport.
    function updateCopies() {
        const width = group.getBoundingClientRect().width;
        if (!width) return;

        const copies = Math.ceil(track.parentElement.clientWidth / width) + 1;
        while (track.children.length > copies) track.lastElementChild.remove();
        while (track.children.length < copies) {
            const duplicate = group.cloneNode(true);
            duplicate.setAttribute('aria-hidden', 'true');
            duplicate.querySelectorAll('img').forEach(image => {
                image.addEventListener('error', () => {
                    image.style.visibility = 'hidden';
                });
            });
            track.append(duplicate);
        }

        track.style.setProperty('--loop-distance', `-${width}px`);
        track.style.setProperty('--loop-duration', `${width / 48}s`);
    }

    updateCopies();
    const observer = new ResizeObserver(updateCopies);
    observer.observe(track.parentElement);
    observer.observe(group);
}

// Project content and media paths.
const projects = [
    {
        title: 'ClickTrack Software',
        category: 'Desktop application',
        description: 'A desktop application for musicians to organize and play click tracks for rehearsals and live performances. Built with C#, Windows Forms, and NAudio.',
        tags: ['C#', '.NET', 'NAudio'],
        video: 'assets/videos/clicktrack.mp4',
        thumbnail: 'assets/thumbnails/ClickTrackTN.png',
        repo: 'https://github.com/RyanMacDonald845/Backing-Track-Player',
        icon: '♫'
    },
    {
        title: 'Tic-tac-toe',
        category: 'Game / algorithm',
        description: 'A tic-tac-toe project featuring a computer opponent built with my own game-playing logic.',
        tags: ['Programming', 'Game logic', 'Algorithms'],
        video: 'assets/videos/tictactoe.mp4',
        thumbnail: 'assets/thumbnails/TicTacToeTN.png',
        repo: '',
        icon: '✕'
    }
];

const grid = document.getElementById('project-grid');
const video = document.getElementById('featured-video');
const videoArea = document.getElementById('video-area');
const repo = document.getElementById('project-repo');
const formatNumber = number => String(number).padStart(2, '0');

function selectProject(index) {
    const project = projects[index];

    video.pause();
    video.removeAttribute('src');
    video.removeAttribute('poster');
    videoArea.classList.toggle('has-video', Boolean(project.video));

    if (project.video) {
        video.src = project.video;
        if (project.thumbnail) video.poster = project.thumbnail;
    }
    video.load();

    document.getElementById('placeholder-title').textContent = project.title;
    document.getElementById('project-category').textContent =
        `${project.category.toUpperCase()} / ${formatNumber(index + 1)}`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;

    repo.hidden = !project.repo;
    if (project.repo) {
        repo.href = project.repo;
    } else {
        repo.removeAttribute('href');
    }

    document.getElementById('project-tags').replaceChildren(
        ...project.tags.map(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            return span;
        })
    );

    Array.from(grid.children).forEach((button, i) => {
        const active = i === index;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function createProjectButton(project, index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-choice';
    button.setAttribute('aria-label', `Show ${project.title}`);
    button.setAttribute('aria-pressed', 'false');

    const thumb = document.createElement('span');
    thumb.className = 'thumb';
    const symbol = document.createElement('span');
    symbol.textContent = project.icon;
    thumb.append(symbol);

    if (project.thumbnail) {
        const image = document.createElement('img');
        image.alt = '';
        image.loading = 'lazy';
        image.addEventListener('error', () => image.remove());
        image.src = project.thumbnail;
        thumb.append(image);
    }

    const info = document.createElement('span');
    info.className = 'choice-info';
    const title = document.createElement('strong');
    title.textContent = project.title;
    const category = document.createElement('small');
    category.textContent = project.category;
    info.append(title, category);

    const number = document.createElement('span');
    number.className = 'choice-number';
    number.textContent = formatNumber(index + 1);

    button.append(thumb, info, number);
    button.addEventListener('click', () => selectProject(index));
    return button;
}

video.addEventListener('error', () => {
    videoArea.classList.remove('has-video');
});

document.getElementById('menu-count').textContent = `${formatNumber(projects.length)} / BUILDS`;
projects.forEach((project, index) => grid.append(createProjectButton(project, index)));
selectProject(0);

// Mobile navigation.
const menu = document.getElementById('menu');
const links = document.getElementById('navlinks');

function setMenuOpen(open) {
    links.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
}

menu.addEventListener('click', () => setMenuOpen(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

// Fall back to the portrait illustration if the photo is missing.
const profileImage = document.getElementById('profile-image');
profileImage.addEventListener('error', () => { profileImage.hidden = true; });
if (profileImage.complete && !profileImage.naturalWidth) profileImage.hidden = true;


buildTechTrack('tech-track-top', technologies.top);
buildTechTrack('tech-track-middle', technologies.middle);
buildTechTrack('tech-track-bottom', technologies.bottom);

document.getElementById('year').textContent = new Date().getFullYear();
