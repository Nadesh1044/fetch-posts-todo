document.getElementById('posts-button').addEventListener('click', fetchAndDisplayPosts);
document.getElementById('todos-button').addEventListener('click', fetchAndDisplayTodos);

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        displayError('content', error.message);
    }
}

function displayPosts(posts) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <button class="back-button" onclick="goHome()">Back to Home</button>
        ${posts.map(post => `
        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `).join('')}`;
}

async function fetchAndDisplayTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        displayError('content', error.message);
    }
}

function displayTodos(todos) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <button class="back-button" onclick="goHome()">Back to Home</button>
        ${todos.map(todo => `
        <div>
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            ${todo.title}
        </div>
    `).join('')}`;
}

function displayError(section, message) {
    const container = document.getElementById(section);
    container.innerHTML = `<p id="error">Error: ${message}</p>`;
}

function goHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const buttons = document.querySelector('.buttons');
    buttons.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.buttons');
    buttons.style.display = 'block';
});
