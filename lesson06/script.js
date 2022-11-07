const cursor = document.getElementById('cursor')

window.onmousemove = (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
}