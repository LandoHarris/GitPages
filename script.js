const book = document.querySelector('.book');

book.addEventListener('click', function() {
    if (this.classList.contains('open')) {
        this.classList.remove('open');
        this.classList.add('closed');
    } else {
        this.classList.remove('closed');
        this.classList.add('open');
    }
});
