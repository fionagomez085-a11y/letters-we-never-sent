function filterLetters(category) {
  const letters = document.querySelectorAll('.letter');
  letters.forEach(letter => {
    if(letter.dataset.category === category || category === 'all'){
      letter.style.display = 'block';
    } else {
      letter.style.display = 'none';
    }
  });
}
