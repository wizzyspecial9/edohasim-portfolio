const typed = new Typed(".multiple-text", {
    strings: [
        "Computer Science Student",
        "Frontend Developer",
        "Web Designer",
        "Future Software Engineer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .logo', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img', {
    origin: 'right'
});

ScrollReveal().reveal('.about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.about-content', {
    origin: 'right'
});

ScrollReveal().reveal('.about', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000
});

ScrollReveal().reveal('.education', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000
});

ScrollReveal().reveal('.skills', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000
});

ScrollReveal().reveal('.projects', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(){
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Academic Planner

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

if (taskInput && addTaskBtn && taskList) {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function showTasks() {

        taskList.innerHTML = '';

        tasks.forEach((task, index) => {

            const li = document.createElement('li');

            li.innerHTML = `
                <span>${task}</span>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">🗑</button>
            `;

            taskList.appendChild(li);

            li.querySelector('.complete-btn').onclick = function () {
                li.classList.toggle('completed');
            };

            li.querySelector('.delete-btn').onclick = function () {
                tasks.splice(index, 1);
                saveTasks();
            };

        });
    }


    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        showTasks();
    }


    function addTask() {

        if (taskInput.value.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        tasks.push(taskInput.value);

        saveTasks();

        taskInput.value = '';
    }


    addTaskBtn.onclick = addTask;


    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    });


    showTasks();

}

// Contact Form Validation

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function(e){

        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();


        if(name === '' || email === '' || phone === '' || message === ''){
            alert('Please fill in all fields.');
            return;
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            alert('Please enter a valid email address.');
            return;
        }


        if(!/^\d+$/.test(phone)){
            alert('Phone number must contain only digits.');
            return;
        }


        alert('Message sent successfully!');

        contactForm.reset();

    });

}