
// Counter Animation
const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
    counter.innerText = '+0'; 

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace('+', ''); 

        const increment = target / 800; 

        if (current < target) {
            counter.innerText = `+${Math.ceil(current + increment)}`; 
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = `+${target}`; 
        }
    };

    updateCounter();
};


const observerOptions = {
    root: null, 
    threshold: 0.5 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countersInSection = entry.target.querySelectorAll('.counter');
            countersInSection.forEach(counter => runCounter(counter)); 
            observer.unobserve(entry.target); 
        }
    });
};

const sectionsToObserve = document.querySelectorAll('.stats-container');
const observer = new IntersectionObserver(observerCallback, observerOptions);

sectionsToObserve.forEach(section => observer.observe(section));



//mailto
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "Contact Us Inquiry from " + name;

    var mailto_link = 'mailto:anthonytannourydev@outlook.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
    
    window.location.href = mailto_link;
}

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.close-btn').style.display = 'block'; 
});


document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.close-btn').style.display = 'none'; 
});


document.querySelectorAll('.nav-links ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.close-btn').style.display = 'none'; 
    });
});
const darkModeToggle = document.getElementById('darkModeToggle');
const createProjectButton = document.querySelector('button.solid-dark-button');
const testimonialButton = document.querySelector('.secdiv .solid-dark-button'); 
const downArrow = document.querySelector('.down-arrows a'); 
const whatsappButton = document.getElementById('whatsappButton'); 
const darkModeIcon = darkModeToggle.querySelector('i'); 


if (localStorage.getItem('darkMode') === 'enabled') {
    activateDarkMode();
}


darkModeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
});

function activateDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
    document.querySelector('.footer').classList.add('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(el => el.classList.add('dark-mode')); 
    createProjectButton.classList.add('dark-mode'); 
    testimonialButton.classList.add('dark-mode'); 
    darkModeToggle.classList.add('dark-mode'); 
    downArrow.classList.add('dark-mode'); 
    whatsappButton.classList.add('dark-mode'); 

   
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun', 'fa-regular'); 

    localStorage.setItem('darkMode', 'enabled');
}

function deactivateDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('nav').classList.remove('dark-mode');
    document.querySelector('.footer').classList.remove('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('dark-mode'));
    createProjectButton.classList.remove('dark-mode'); 
    testimonialButton.classList.remove('dark-mode'); 
    darkModeToggle.classList.remove('dark-mode'); 
    downArrow.classList.remove('dark-mode'); 
    whatsappButton.classList.remove('dark-mode'); 

    
    darkModeIcon.classList.remove('fa-sun', 'fa-regular');
    darkModeIcon.classList.add('fa-moon'); 

    localStorage.setItem('darkMode', 'disabled');
}
