function toogleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

const body = document.body
const darkMods = document.querySelector('.darkMods')
const icons = document.querySelectorAll('i')
const changeTheme = document.getElementById('changeTheme')
body.classList.remove('dark'); // Add instead of remove
const linkedIn = document.querySelector('.fa-linkedin')
const down = document.getElementById('scrollDown')
const up = document.getElementById('ScrollUp')
const about = document.getElementById('about')

darkMods.addEventListener('click', () => {
    body.classList.toggle("dark");
    icons.forEach(icon => {
        if (body.classList.contains("dark")) {
            changeTheme.classList.remove("fa-sun");
                changeTheme.classList.add("fa-moon");
                icon.style.color = "#fff"
            } else {
                changeTheme.classList.remove("fa-moon");
                changeTheme.classList.add("fa-sun");
                icon.style.color = "#000"
            }
    });
    })

