const moodButton = document.getElementById('openMoodBtn');
const moodModal = document.getElementById('moodModal');
const selectedMoodDisplay = document.getElementById('selectedMoodDisplay');
const historyList = document.getElementById('historyList');

const today = new Date().toISOString().split('T')[0];
let moodData = JSON.parse(localStorage.getItem('moodTracker')) || {};

// Function to update mood history
function updateMoodHistory() {
  historyList.innerHTML = '';
  const entries = Object.entries(moodData);
  const last5 = entries.slice(-5).reverse();
  last5.forEach(([date, mood]) => {
    const li = document.createElement('li');
    li.textContent = `${date}: ${mood}`;
    historyList.appendChild(li);
  });
}

// Function to save the mood
function saveMood(mood) {
  moodData[today] = mood;
  localStorage.setItem('moodTracker', JSON.stringify(moodData));
  selectedMoodDisplay.textContent = `Today's Mood: ${mood}`;
  updateMoodHistory();
}

// Function to toggle the modal (popup)
function toggleMoodModal() {
  moodModal.style.display = moodModal.style.display === 'none' || moodModal.style.display === '' ? 'block' : 'none';
}

// Initialize mood display if already saved for today
if (moodData[today]) {
  selectedMoodDisplay.textContent = `Today's Mood: ${moodData[today]}`;
}

updateMoodHistory();
