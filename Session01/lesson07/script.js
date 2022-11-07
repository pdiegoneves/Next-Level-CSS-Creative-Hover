const spans = document.querySelectorAll('.loader span')

spans.forEach((span, idx) => {
    span.style.top = (idx * 10 ) + 'px'
    span.style.left = (idx * 10 ) + 'px'
    span.style.right = (idx * 10 ) + 'px'
    span.style.bottom = (idx * 10) + 'px'
    span.style.animationDelay = idx/(spans.length + 1)  + 's'
})