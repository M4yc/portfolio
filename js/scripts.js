const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
}


window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Chama a função para garantir o ajuste inicial

// Letras do Matrix Rain
const letters = ["日", "ﾊ", "ﾐ", "ﾋ", "ｰ", "ｳ", "ｼ", "ﾅ", "ﾓ", "ﾆ", "ｻ", "ﾜ", "ﾂ", "ｵ", "ﾘ", "ｱ", "ﾎ", "ﾃ", "ﾏ", "ｹ", "ﾒ", "ｴ", "ｶ", "ｷ", "ﾑ", "ﾕ", "ﾗ", "ｾ", "ﾈ", "ｽ", "ﾀ", "ﾇ", "ﾍ", ":", "・", ".", "=", "*", "+", "-", "<", ">", "¦", "｜", "ﾘ"];
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#8800ff";
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    window.requestAnimationFrame(draw);
}

draw();

document.addEventListener('DOMContentLoaded', () => {
    // Dados das experiências
    const experiences = {
        'naja-cursos': {
            title: 'Monitor de Cursos',
            date: 'Dez 2021 - Mar 2022 (4 Meses)',
            company: 'Naja Cursos',
            description: 'Na Naja Cursos, atuei como monitor de aulas nos cursos de informática, incluindo Word, Excel e PowerPoint. Além disso, ministrei aulas sobre montagem e manutenção de computadores, proporcionando uma base sólida para os alunos em tecnologia. Também desempenhei a função de fiscal de provas para a FGV, garantindo a integridade e o bom andamento dos exames.'
        },
        'nero': {
            title: 'Estágio Voluntário',
            date: 'Jun 2023 - Fev 2024 (9 Meses)',
            company: 'Nero',
            description: 'Durante meu tempo no NERO, desempenhei um papel fundamental no projeto e fabricação de placas de circuito impresso. Além disso, desenvolvi código para microcontroladores, o que incluiu a programação de robôs educacionais. Essa experiência me permitiu aprimorar minhas habilidades técnicas e adquirir um conhecimento valioso na integração de hardware e software.'
        },
        'sm-marketing': {
            title: 'Estágio SM Marketing',
            date: 'Fev 2024 - (Atualmente)',
            company: 'SM Marketing',
            description: 'Na SM Marketing, atuo como designer e editor de vídeos. Minha função envolve a criação de designs visuais impactantes e a edição de vídeos para campanhas e conteúdos promocionais. Essa experiência me permite combinar criatividade com habilidades técnicas para entregar materiais de alta qualidade e engajantes.'
        }
    };

    // Referências aos elementos DOM
    const titleElement = document.getElementById('experience-title');
    const dateElement = document.getElementById('experience-date');
    const companyElement = document.getElementById('experience-company');
    const descriptionElement = document.getElementById('experience-description');

    // Adiciona event listeners aos títulos
    document.querySelectorAll('.company').forEach(item => {
        item.addEventListener('click', event => {
            const experienceId = event.currentTarget.getAttribute('data-experience');
            const experience = experiences[experienceId];

            if (experience) {
                titleElement.textContent = experience.title;
                dateElement.textContent = experience.date;
                companyElement.textContent = experience.company;
                descriptionElement.textContent = experience.description;
            }
        });
    });
});
