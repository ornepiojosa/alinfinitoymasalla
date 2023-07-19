// Función para obtener la fecha de inicio (29 de agosto de 2021) en formato Date
function getStartDate() {
    return new Date('2021-08-29');
  }
  
  // Función para calcular el tiempo transcurrido desde la fecha de inicio hasta el momento actual
  function calculateTimeElapsed() {
    var startDate = getStartDate();
    var currentDate = new Date();
  
    var difference = currentDate - startDate;
    var timeElapsed = {};
  
    if (difference > 0) {
      timeElapsed.years = Math.floor(difference / (365 * 24 * 60 * 60 * 1000));
      difference %= 365 * 24 * 60 * 60 * 1000;
  
      timeElapsed.days = Math.floor(difference / (24 * 60 * 60 * 1000));
      difference %= 24 * 60 * 60 * 1000;
  
      timeElapsed.hours = Math.floor(difference / (60 * 60 * 1000));
      difference %= 60 * 60 * 1000;
  
      timeElapsed.minutes = Math.floor(difference / (60 * 1000));
      difference %= 60 * 1000;
  
      timeElapsed.seconds = Math.floor(difference / 1000);
    }
  
    return timeElapsed;
  }
  
  // Función para mostrar el tiempo transcurrido en un elemento HTML con el id "cuenta"
  function displayTimeElapsed() {
    var timeElapsed = calculateTimeElapsed();
  
    var countdownElement = document.getElementById('cuenta');
    countdownElement.innerHTML = `
      <div class="simply-section">
        <span class="simply-amount">${timeElapsed.years}</span>
        <span class="simply-word">${timeElapsed.years === 1 ? 'año' : 'años'}</span>
      </div>
      <div class="simply-section">
        <span class="simply-amount">${timeElapsed.days}</span>
        <span class="simply-word">${timeElapsed.days === 1 ? 'día' : 'días'}</span>
      </div>
      <div class="simply-section">
        <span class="simply-amount">${timeElapsed.hours}</span>
        <span class="simply-word">${timeElapsed.hours === 1 ? 'hora' : 'horas'}</span>
      </div>
      <div class="simply-section">
        <span class="simply-amount">${timeElapsed.minutes}</span>
        <span class="simply-word">${timeElapsed.minutes === 1 ? 'minuto' : 'minutos'}</span>
      </div>
      <div class="simply-section">
        <span class="simply-amount">${timeElapsed.seconds}</span>
        <span class="simply-word">${timeElapsed.seconds === 1 ? 'segundo' : 'segundos'}</span>
      </div>
    `;
  }
  
  // Actualizar el contador cada segundo
  setInterval(displayTimeElapsed, 1000);
  