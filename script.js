document.querySelectorAll('.comment-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.querySelector('input[name="name"]').value;
      const comment = form.querySelector('textarea[name="comment"]').value;
  
      if (name && comment) {
        const commentList = form.previousElementSibling;
        const newComment = document.createElement('li');
        newComment.textContent = `${name}: ${comment}`;
        commentList.appendChild(newComment);
  
        form.reset();
      } else {
        alert('Please fill out both fields.');
      }
    });
  });
  