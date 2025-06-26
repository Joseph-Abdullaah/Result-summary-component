document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const summaryItems = document.querySelector('.summary__items');
      const result_score = document.querySelector('.result__score-number');
      let totalScore = 0;

      data.forEach(item => {
        const div = document.createElement('div');
        div.className = `summary__item ${item.category.toLowerCase()}`;
        div.innerHTML = `
          <img class="summary__item-icon" src="${item.icon}" alt="${item.category} icon">
          <div class="summary__item-title">${item.category}</div>
          <div class="summary__item-score">${item.score} <span>/ 100</span></div>
        `;
        totalScore += item.score;
        summaryItems.appendChild(div);
      });

      result_score.textContent = (totalScore / data.length).toFixed(0); // Calculate average score
    
    } catch (error) {
      console.error('Error loading data:', error);
    }
  });