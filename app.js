// ============ БАЗА ВОПРОСОВ ============
// Пока 10 вопросов для теста. Позже заменишь на 120.
const questions = [
  { subject: "Математическая грамотность", text: "Если 3x + 5 = 20, чему равен x?", options: ["3", "5", "7", "15"], correct: 1, explanation: "3x = 15, значит x = 5" },
  { subject: "История Казахстана", text: "В каком году Казахстан провозгласил независимость?", options: ["1989", "1990", "1991", "1992"], correct: 2, explanation: "16 декабря 1991 года Казахстан провозгласил независимость." },
  { subject: "Грамотность чтения", text: "Что означает слово 'абайлау'?", options: ["Спешить", "Быть осторожным", "Молчать", "Кричать"], correct: 1, explanation: "'Абайлау' — быть внимательным, осторожным." },
  { subject: "Математическая грамотность", text: "Найдите 20% от 150.", options: ["20", "25", "30", "35"], correct: 2, explanation: "150 × 0.2 = 30" },
  { subject: "История Казахстана", text: "Кто был первым президентом Казахстана?", options: ["Н. Назарбаев", "К. Токаев", "Д. Кунаев", "А. Байтурсынов"], correct: 0, explanation: "Нурсултан Назарбаев был первым президентом (1991–2019)." },
  { subject: "Математическая грамотность", text: "Чему равна площадь квадрата со стороной 6 см?", options: ["12 см²", "24 см²", "36 см²", "30 см²"], correct: 2, explanation: "S = a² = 6 × 6 = 36 см²" },
  { subject: "История Казахстана", text: "Столица Казахстана с 1997 года?", options: ["Алматы", "Астана", "Шымкент", "Караганда"], correct: 1, explanation: "В 1997 году столица была перенесена из Алматы в Акмолу (позже Астана)." },
  { subject: "Грамотность чтения", text: "Синоним слова 'большой'?", options: ["Малый", "Огромный", "Узкий", "Тонкий"], correct: 1, explanation: "'Огромный' — синоним слова 'большой'." },
  { subject: "Математическая грамотность", text: "Сколько градусов в прямом угле?", options: ["45°", "90°", "180°", "360°"], correct: 1, explanation: "Прямой угол = 90°." },
  { subject: "История Казахстана", text: "Годы Великой Отечественной войны?", options: ["1939–1945", "1941–1945", "1914–1918", "1940–1944"], correct: 1, explanation: "ВОВ: 22 июня 1941 — 9 мая 1945." }
];

// ============ ПЕРЕМЕННЫЕ ============
let currentIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let seconds = 0;
let timerInterval = null;

// ============ СТАРТ ТЕСТА ============
function updateTimer() {
  seconds++;
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `⏱️ ${m}:${s}`;
}

// ============ РЕНДЕР ВОПРОСА ============
 function renderQuestion() {
  const q = activeQuestions[currentIndex];
  document.getElementById('questionText').textContent = q.text;
  document.getElementById('subject').textContent = q.subject;
  document.getElementById('counter').textContent = `Вопрос ${currentIndex + 1} из ${activeQuestions.length}`;

  const percent = ((currentIndex + 1) / activeQuestions.length) * 100;
  document.getElementById('progress').style.width = percent + '%';

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
    if (userAnswers[currentIndex] === i) btn.classList.add('selected');
    btn.onclick = () => {
      userAnswers[currentIndex] = i;
      renderQuestion();
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').textContent =
    currentIndex === activeQuestions.length - 1 ? 'Завершить ✓' : 'Далее →';
}

// ============ НАВИГАЦИЯ ============
document.addEventListener('DOMContentLoaded', () => {
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.onclick = () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); } };
  if (next) next.onclick = () => {
    if (currentIndex < activeQuestions.length - 1) { currentIndex++; renderQuestion(); }
    else finishTest();
  }
});
function finishTest() {
  clearInterval(timerInterval);
  const results = activeQuestions.map((q, i) => ({
    subject: q.subject, text: q.text,
    options: q.options, correct: q.correct,
    userAnswer: userAnswers[i],
    isCorrect: userAnswers[i] === q.correct,
    explanation: q.explanation
  }));
  localStorage.setItem('nurqadam_results', JSON.stringify(results));
  localStorage.setItem('nurqadam_time', seconds);
  window.location.href = 'result.html';
}
// ============ РЕЗУЛЬТАТЫ ============
function showResults() {
  const results = JSON.parse(localStorage.getItem('nurqadam_results') || '[]');
  const time = parseInt(localStorage.getItem('nurqadam_time') || '0');

  if (results.length === 0) {
    document.querySelector('.result-container').innerHTML =
      '<h1>Нет данных 😕</h1><p style="text-align:center;margin:20px 0;"><a href="index.html" class="btn-primary">Пройти тест</a></p>';
    return;
  }

  const correctCount = results.filter(r => r.isCorrect).length;
  const total = results.length;
  const percent = Math.round((correctCount / total) * 100);
  // Формула: 140 баллов максимум
  const score = Math.round((correctCount / total) * 140);

  document.getElementById('scoreBig').textContent = score;
  document.getElementById('percentVal').textContent = percent + '%';
  document.getElementById('correctVal').textContent = correctCount;
  document.getElementById('wrongVal').textContent = total - correctCount;
  const m = Math.floor(time / 60), s = time % 60;
  document.getElementById('timeVal').textContent = `${m}:${String(s).padStart(2, '0')}`;

  // Ошибки
  const mistakesDiv = document.getElementById('mistakes');
  mistakesDiv.innerHTML = '';
  const wrong = results.filter(r => !r.isCorrect);

  if (wrong.length === 0) {
    mistakesDiv.innerHTML = '<div class="mistake-card" style="border-left-color:#27ae60;"><h4>🎉 Ошибок нет! Отличная работа!</h4></div>';
    return;
  }

  wrong.forEach((r, idx) => {
    const card = document.createElement('div');
    card.className = 'mistake-card';
    card.innerHTML = `
      <h4>${idx + 1}. ${r.subject}</h4>
      <p><b>Вопрос:</b> ${r.text}</p>
      <p class="wrong">❌ Твой ответ: ${r.userAnswer !== null ? r.options[r.userAnswer] : 'Не отвечено'}</p>
      <p class="right">✅ Правильный: ${r.options[r.correct]}</p>
      <div class="explain">💡 <b>Разбор:</b> ${r.explanation}</div>
    `;
    mistakesDiv.appendChild(card);
  });
}
// ============ ВЫБОР ПРОФИЛЯ ============
let selectedProfile = null;

function showProfileScreen() {
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('profileScreen').style.display = 'block';
  window.scrollTo(0, 0);
}

function backToHome() {
  document.getElementById('profileScreen').style.display = 'none';
  document.getElementById('homeScreen').style.display = 'block';
  window.scrollTo(0, 0);
}

function selectProfile(profileKey) {
  selectedProfile = profileKey;
  localStorage.setItem('nurqadam_profile', profileKey);
  document.getElementById('profileScreen').style.display = 'none';
  document.getElementById('testScreen').style.display = 'block';
  startTestWithProfile(profileKey);
  window.scrollTo(0, 0);
}

function startTestWithProfile(profileKey) {
  // Формируем список вопросов по профилю
  const profileQuestions = buildQuestionList(profileKey);
  
  // Сброс переменных
  currentIndex = 0;
  userAnswers = new Array(profileQuestions.length).fill(null);
  activeQuestions = profileQuestions;
  seconds = 0;
  
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  
  renderQuestion();
}

// Профильные вопросы (пока заглушки — заполним на следующем шаге)
function buildQuestionList(profileKey) {
  const commonQuestions = questions; // 10 базовых вопросов
  
  // Пока возвращаем просто базовые — на следующем шаге добавим профильные
  return commonQuestions;
}

let activeQuestions = [];