document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const commentSection = document.getElementById('commentSection');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

    commentSection.appendChild(newComment);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});
