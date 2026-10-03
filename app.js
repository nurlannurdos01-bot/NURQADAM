// ============ БАЗА ВОПРОСОВ ============
// Пока 10 вопросов для теста. Позже заменишь на 120.
const questions = [
  // ============ МАТЕМАТИЧЕСКАЯ ГРАМОТНОСТЬ (10) ============
  { subject: "Математическая грамотность", text: "В магазине скидка 25% на товар стоимостью 8000 тенге. Сколько нужно заплатить?", options: ["6000 тг", "6500 тг", "7000 тг", "7500 тг"], correct: 0, explanation: "Скидка 25% значит цена = 75% от начальной. 8000 × 0.75 = 6000 тенге." },
  { subject: "Математическая грамотность", text: "Решите уравнение: 2x − 7 = 3x + 5", options: ["−12", "−2", "2", "12"], correct: 0, explanation: "2x − 3x = 5 + 7; −x = 12; x = −12." },
  { subject: "Математическая грамотность", text: "Периметр прямоугольника 36 см, одна сторона 8 см. Найдите площадь.", options: ["64 см²", "80 см²", "96 см²", "128 см²"], correct: 1, explanation: "Полупериметр = 18 см. Вторая сторона = 18 − 8 = 10 см. Площадь = 8 × 10 = 80 см²." },
  { subject: "Математическая грамотность", text: "В коробке 5 красных и 3 синих шара. Какова вероятность вытащить синий шар?", options: ["3/8", "5/8", "3/5", "1/3"], correct: 0, explanation: "Всего 8 шаров, синих 3. Вероятность = 3/8." },
  { subject: "Математическая грамотность", text: "Найдите следующее число: 2, 6, 12, 20, 30, ...", options: ["36", "40", "42", "44"], correct: 2, explanation: "Разности: 4, 6, 8, 10, след. 12. 30 + 12 = 42." },
  { subject: "Математическая грамотность", text: "Автомобиль проехал 240 км за 3 часа. Найдите скорость.", options: ["60 км/ч", "70 км/ч", "80 км/ч", "90 км/ч"], correct: 2, explanation: "V = S/t = 240/3 = 80 км/ч." },
  { subject: "Математическая грамотность", text: "Одна труба наполняет бассейн за 6 ч, другая — за 12 ч. За сколько наполнят обе вместе?", options: ["3 ч", "4 ч", "5 ч", "9 ч"], correct: 1, explanation: "1/6 + 1/12 = 3/12 = 1/4. Время = 4 часа." },
  { subject: "Математическая грамотность", text: "Среднее арифметическое чисел 12, 15, 18, 21, 24:", options: ["16", "17", "18", "20"], correct: 2, explanation: "Сумма = 90. 90 / 5 = 18." },
  { subject: "Математическая грамотность", text: "Решите систему: x + y = 10, x − y = 4. Найдите x.", options: ["3", "5", "7", "9"], correct: 2, explanation: "Сложим: 2x = 14, x = 7." },
  { subject: "Математическая грамотность", text: "График функции y = 2x + 3 пересекает ось OY в точке:", options: ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"], correct: 1, explanation: "При x = 0: y = 3. Точка (0, 3)." },

  // ============ ГРАМОТНОСТЬ ЧТЕНИЯ (10) ============
  { subject: "Грамотность чтения", text: "Текст: «Вода — уникальное вещество. Она существует в трёх агрегатных состояниях: твёрдом, жидком и газообразном. Вода обладает высокой теплоёмкостью, что сглаживает климат прибрежных районов. Вода — универсальный растворитель. Без воды жизнь на Земле была бы невозможна». Сколько агрегатных состояний воды упоминается?", options: ["1", "2", "3", "4"], correct: 2, explanation: "В тексте указаны три состояния: твёрдое, жидкое, газообразное." },
  { subject: "Грамотность чтения", text: "Текст про воду. Почему океаны сглаживают климат?", options: ["Из-за солёности", "Из-за высокой теплоёмкости", "Из-за глубины", "Из-за течений"], correct: 1, explanation: "Автор прямо указывает на высокую теплоёмкость воды." },
  { subject: "Грамотность чтения", text: "Текст про воду. Что автор называет универсальным растворителем?", options: ["Лёд", "Пар", "Воду", "Океан"], correct: 2, explanation: "В тексте: «Вода — универсальный растворитель»." },
  { subject: "Грамотность чтения", text: "Текст про воду. Какая главная мысль текста?", options: ["Вода в трёх состояниях", "Вода — растворитель", "Без воды жизнь невозможна", "Вода сглаживает климат"], correct: 2, explanation: "Последнее предложение — главная мысль: без воды жизнь невозможна." },
  { subject: "Грамотность чтения", text: "Текст: «Психологи утверждают, что характер человека складывается из маленьких ежедневных решений. Не существует одного большого выбора, определяющего всё. Не ждите подходящего момента — начните с малого». Что формирует характер?", options: ["Большой выбор", "Маленькие ежедневные решения", "Чтение книг", "Общение с друзьями"], correct: 1, explanation: "Прямо указано: характер складывается из маленьких ежедневных решений." },
  { subject: "Грамотность чтения", text: "Текст про характер. Какая главная мысль?", options: ["Ждать подходящего момента", "Характер из маленьких решений", "Психологи изучают людей", "Не помогать друзьям"], correct: 1, explanation: "Главная мысль — характер формируется из ежедневных решений." },
  { subject: "Грамотность чтения", text: "Текст про характер. Что советует автор?", options: ["Ждать момента", "Начать с малого", "Прочитать книгу", "Посмотреть видео"], correct: 1, explanation: "Автор призывает: «Начните с малого»." },
  { subject: "Грамотность чтения", text: "Текст про характер. Какое утверждение соответствует тексту?", options: ["Есть один большой выбор", "Маленькие решения неважны", "Характер из ежедневных решений", "Не стоит меняться"], correct: 2, explanation: "Автор утверждает, что характер складывается из ежедневных решений." },
  { subject: "Грамотность чтения", text: "Текст: «Караганда основана в 1934 году в связи с разработкой угольного месторождения. В советское время — важный промышленный центр. Сегодня — современный город с университетами и культурными центрами». В каком году основана Караганда?", options: ["1930", "1934", "1940", "1950"], correct: 1, explanation: "Прямо указано в тексте: 1934 год." },
  { subject: "Грамотность чтения", text: "Текст про Караганду. Чем была Караганда в советское время?", options: ["Курортом", "Промышленным центром", "Аграрным регионом", "Военной базой"], correct: 1, explanation: "В тексте: «важный промышленный центр»." },

  // ============ ИСТОРИЯ КАЗАХСТАНА (20) ============
  { subject: "История Казахстана", text: "В каком году Казахстан провозгласил независимость?", options: ["1989", "1990", "1991", "1992"], correct: 2, explanation: "16 декабря 1991 года." },
  { subject: "История Казахстана", text: "Кто был первым президентом Казахстана?", options: ["Н. Назарбаев", "К. Токаев", "Д. Кунаев", "А. Букейханов"], correct: 0, explanation: "Нурсултан Назарбаев, 1991–2019." },
  { subject: "История Казахстана", text: "В каком году столица перенесена из Алматы в Астану?", options: ["1991", "1995", "1997", "2000"], correct: 2, explanation: "В 1997 году столица перенесена в Акмолу (позже Астана)." },
  { subject: "История Казахстана", text: "Какое ханство существовало на территории Казахстана в XV–XIX веках?", options: ["Казахское ханство", "Золотая Орда", "Моголистан", "Ногайская Орда"], correct: 0, explanation: "Казахское ханство образовано в 1465 году." },
  { subject: "История Казахстана", text: "Кто является основателем Казахского ханства?", options: ["Абылай хан", "Керей и Жанибек", "Тауке хан", "Касым хан"], correct: 1, explanation: "Керей и Жанибек в 1465 году." },
  { subject: "История Казахстана", text: "В каком году началась Великая Отечественная война?", options: ["1939", "1941", "1945", "1914"], correct: 1, explanation: "22 июня 1941 года." },
  { subject: "История Казахстана", text: "Проходили ли сражения на территории Казахстана в годы ВОВ?", options: ["Битва за Москву", "Оборона Бреста", "Битва за Сталинград", "Нет, не проходили"], correct: 3, explanation: "Казахстан был в тылу, но вносил огромный вклад (сырьё, солдаты)." },
  { subject: "История Казахстана", text: "Кто такой Абылай хан?", options: ["Основатель ханства", "Известный казахский хан XVIII века", "Первый президент", "Поэт"], correct: 1, explanation: "Абылай хан — выдающийся правитель XVIII века." },
  { subject: "История Казахстана", text: "Какое событие произошло в 1986 году в Алматы?", options: ["Декабрьские события", "Обретение независимости", "Основание города", "Открытие университета"], correct: 0, explanation: "Желтоқсан — декабрьские события 1986 года." },
  { subject: "История Казахстана", text: "В каком году Казахстан стал независимым?", options: ["1989", "1990", "1991", "1992"], correct: 2, explanation: "16 декабря 1991 года." },
  { subject: "История Казахстана", text: "Какая река самая длинная в Казахстане?", options: ["Сырдарья", "Ертис (Иртыш)", "Урал", "Или"], correct: 1, explanation: "Ертис — самая длинная река Казахстана." },
  { subject: "История Казахстана", text: "Что такое «Алтын адам»?", options: ["Золотой человек (археология)", "Золотая монета", "Название города", "Титул хана"], correct: 0, explanation: "Археологическая находка в Иссыкском кургане." },
  { subject: "История Казахстана", text: "В каком году принят первый гимн независимого Казахстана?", options: ["1991", "1992", "1993", "1995"], correct: 1, explanation: "Первый гимн — 1992 год." },
  { subject: "История Казахстана", text: "Кто написал «Слова назидания» (Қара сөз)?", options: ["Абай Кунанбаев", "Мухтар Ауэзов", "Чокан Валиханов", "Ыбырай Алтынсарин"], correct: 0, explanation: "Абай Кунанбаев, «Қара сөз»." },
  { subject: "История Казахстана", text: "Какая столица Казахстана была до Астаны?", options: ["Алматы", "Караганда", "Шымкент", "Тараз"], correct: 0, explanation: "Алматы была столицей до 1997 года." },
  { subject: "История Казахстана", text: "В каком году Казахстан вступил в ООН?", options: ["1991", "1992", "1993", "1995"], correct: 1, explanation: "2 марта 1992 года." },
  { subject: "История Казахстана", text: "Что означает слово «Желтоқсан» в истории?", options: ["Месяц декабрь", "Декабрьские события 1986 г.", "Название города", "Праздник"], correct: 1, explanation: "Желтоқсан оқиғасы — декабрьские события 1986 года." },
  { subject: "История Казахстана", text: "Кто такой Чокан Валиханов?", options: ["Учёный, путешественник", "Первый президент", "Хан", "Поэт"], correct: 0, explanation: "Чокан Валиханов — выдающийся казахский учёный и путешественник." },
  { subject: "История Казахстана", text: "Какое полезное ископаемое добывают в Караганде?", options: ["Нефть", "Газ", "Уголь", "Золото"], correct: 2, explanation: "Караганда — центр угольной промышленности." },
  { subject: "История Казахстана", text: "В каком году принята Конституция РК?", options: ["1991", "1993", "1995", "1998"], correct: 2, explanation: "30 августа 1995 года." }
];
// ============ ФИЗИКА (профиль) — 40 вопросов ============
const physicsQuestions = [
  { subject: "Физика", text: "Тело движется равномерно со скоростью 20 м/с. Какой путь пройдёт за 15 с?", options: ["150 м", "200 м", "300 м", "400 м"], correct: 2, explanation: "S = v × t = 20 × 15 = 300 м." },
  { subject: "Физика", text: "Ускорение свободного падения на Земле примерно:", options: ["8,8 м/с²", "9,8 м/с²", "10,8 м/с²", "11,8 м/с²"], correct: 1, explanation: "g ≈ 9,8 м/с²." },
  { subject: "Физика", text: "Единица измерения силы в СИ:", options: ["Джоуль", "Ньютон", "Ватт", "Паскаль"], correct: 1, explanation: "Сила измеряется в ньютонах (Н)." },
  { subject: "Физика", text: "Второй закон Ньютона:", options: ["F = ma", "F = mv", "F = m/a", "F = a/m"], correct: 0, explanation: "F = m × a." },
  { subject: "Физика", text: "Тело массой 5 кг движется с ускорением 2 м/с². Найдите силу.", options: ["2,5 Н", "5 Н", "10 Н", "20 Н"], correct: 2, explanation: "F = ma = 5 × 2 = 10 Н." },
  { subject: "Физика", text: "Кинетическая энергия тела массой 2 кг при скорости 4 м/с равна:", options: ["8 Дж", "16 Дж", "24 Дж", "32 Дж"], correct: 1, explanation: "Ek = mv²/2 = 2 × 16/2 = 16 Дж." },
  { subject: "Физика", text: "Работа силы 10 Н при перемещении 5 м равна:", options: ["2 Дж", "15 Дж", "50 Дж", "100 Дж"], correct: 2, explanation: "A = F × s = 10 × 5 = 50 Дж." },
  { subject: "Физика", text: "Мощность — это:", options: ["Работа", "Работа/время", "Сила × путь", "Масса × ускорение"], correct: 1, explanation: "P = A/t." },
  { subject: "Физика", text: "Плотность воды:", options: ["100 кг/м³", "500 кг/м³", "1000 кг/м³", "1500 кг/м³"], correct: 2, explanation: "ρ воды = 1000 кг/м³." },
  { subject: "Физика", text: "Давление на глубине 10 м в воде (ρ=1000 кг/м³):", options: ["10 кПа", "50 кПа", "100 кПа", "1000 кПа"], correct: 2, explanation: "p = ρgh = 1000 × 10 × 10 = 100000 Па = 100 кПа." },
  { subject: "Физика", text: "Первый закон Ньютона описывает:", options: ["Движение с ускорением", "Инерцию", "Тяготение", "Трение"], correct: 1, explanation: "Закон инерции." },
  { subject: "Физика", text: "Третий закон Ньютона:", options: ["F = ma", "Действие = противодействие", "Тело в покое", "F = mg"], correct: 1, explanation: "Сила действия равна силе противодействия." },
  { subject: "Физика", text: "Потенциальная энергия тела массой 3 кг на высоте 5 м (g=10):", options: ["15 Дж", "30 Дж", "150 Дж", "300 Дж"], correct: 2, explanation: "Ep = mgh = 3 × 10 × 5 = 150 Дж." },
  { subject: "Физика", text: "Единица измерения работы:", options: ["Ньютон", "Джоуль", "Ватт", "Паскаль"], correct: 1, explanation: "Работа в джоулях." },
  { subject: "Физика", text: "Как изменится сила тяготения при увеличении расстояния в 2 раза?", options: ["Увеличится в 2 раза", "Уменьшится в 2 раза", "Уменьшится в 4 раза", "Не изменится"], correct: 2, explanation: "F ~ 1/r². При r × 2: F уменьшится в 4 раза." },
  { subject: "Физика", text: "Скорость света в вакууме:", options: ["3 × 10⁶ м/с", "3 × 10⁸ м/с", "3 × 10¹⁰ м/с", "3 × 10¹² м/с"], correct: 1, explanation: "c ≈ 3 × 10⁸ м/с." },
  { subject: "Физика", text: "Удельная теплота плавления льда примерно:", options: ["2100 Дж/кг", "330000 Дж/кг", "4200 Дж/кг", "2260000 Дж/кг"], correct: 1, explanation: "λ льда ≈ 3,3 × 10⁵ Дж/кг." },
  { subject: "Физика", text: "При последовательном соединении резисторов:", options: ["Одинаково напряжение", "Одинаков ток", "Одинаково сопротивление", "Одинакова мощность"], correct: 1, explanation: "При последовательном соединении ток одинаков." },
  { subject: "Физика", text: "Закон Ома для участка цепи:", options: ["I = U × R", "I = U/R", "I = R/U", "I = U + R"], correct: 1, explanation: "I = U/R." },
  { subject: "Физика", text: "Сопротивление 10 Ом при напряжении 20 В. Найдите силу тока.", options: ["0,5 А", "2 А", "10 А", "200 А"], correct: 1, explanation: "I = U/R = 20/10 = 2 А." },
  { subject: "Физика", text: "Период колебаний маятника T = 2 с. Найдите частоту.", options: ["0,5 Гц", "1 Гц", "2 Гц", "4 Гц"], correct: 0, explanation: "ν = 1/T = 1/2 = 0,5 Гц." },
  { subject: "Физика", text: "Единица измерения частоты:", options: ["Секунда", "Герц", "Метр", "Ватт"], correct: 1, explanation: "Частота измеряется в герцах (Гц)." },
  { subject: "Физика", text: "Длина волны 2 м, частота 5 Гц. Найдите скорость.", options: ["2,5 м/с", "5 м/с", "10 м/с", "20 м/с"], correct: 2, explanation: "v = λ × ν = 2 × 5 = 10 м/с." },
  { subject: "Физика", text: "Абсолютный показатель преломления стекла примерно:", options: ["1,0", "1,5", "2,0", "3,0"], correct: 1, explanation: "n стекла ≈ 1,5." },
  { subject: "Физика", text: "Угол падения равен 30°. Чему равен угол отражения?", options: ["15°", "30°", "60°", "90°"], correct: 1, explanation: "Угол отражения = угол падения." },
  { subject: "Физика", text: "Первый закон термодинамики:", options: ["Q = A + ΔU", "Q = A − ΔU", "Q = ΔU", "Q = A"], correct: 0, explanation: "Q = A + ΔU." },
  { subject: "Физика", text: "КПД теплового двигателя 40%. Что это означает?", options: ["40% тепла уходит", "40% идёт в полезную работу", "40% теряется", "40% энергии"], correct: 1, explanation: "КПД — доля полезной работы от полученного тепла." },
  { subject: "Физика", text: "При повышении температуры сопротивление металла:", options: ["Уменьшается", "Увеличивается", "Не меняется", "Становится 0"], correct: 1, explanation: "У металлов R растёт с температурой." },
  { subject: "Физика", text: "Что такое электрический ток?", options: ["Движение атомов", "Направленное движение заряженных частиц", "Движение молекул", "Поток света"], correct: 1, explanation: "Ток — направленное движение заряженных частиц." },
  { subject: "Физика", text: "Электрический заряд измеряется в:", options: ["Амперах", "Вольтах", "Кулонах", "Омах"], correct: 2, explanation: "Заряд измеряется в кулонах (Кл)." },
  { subject: "Физика", text: "Формула закона Кулона:", options: ["F = kq₁q₂/r", "F = kq₁q₂/r²", "F = kq/r", "F = q₁q₂/r²"], correct: 1, explanation: "F = kq₁q₂/r²." },
  { subject: "Физика", text: "Сколько протонов в ядре атома водорода?", options: ["0", "1", "2", "3"], correct: 1, explanation: "Водород — 1 протон." },
  { subject: "Физика", text: "Что такое альфа-частица?", options: ["Электрон", "Ядро гелия", "Нейтрон", "Фотон"], correct: 1, explanation: "α-частица = ядро атома гелия (2 протона + 2 нейтрона)." },
  { subject: "Физика", text: "Что такое бета-частица?", options: ["Протон", "Электрон", "Нейтрон", "Ядро"], correct: 1, explanation: "β-частица = быстрый электрон." },
  { subject: "Физика", text: "Фотоэффект — это:", options: ["Излучение света", "Вырывание электронов светом", "Нагрев тела", "Преломление"], correct: 1, explanation: "Фотоэффект — вырывание электронов с поверхности под действием света." },
  { subject: "Физика", text: "Единица измерения энергии в СИ:", options: ["Ньютон", "Джоуль", "Ватт", "Паскаль"], correct: 1, explanation: "Энергия измеряется в джоулях." },
  { subject: "Физика", text: "При переходе из воздуха в воду скорость света:", options: ["Увеличивается", "Уменьшается", "Не меняется", "Становится 0"], correct: 1, explanation: "В более плотной среде скорость меньше." },
  { subject: "Физика", text: "Какое движение называется равноускоренным?", options: ["С постоянной скоростью", "С постоянным ускорением", "С постоянным путём", "С постоянным временем"], correct: 1, explanation: "Равноускоренное — с постоянным ускорением." },
  { subject: "Физика", text: "Импульс тела массой 4 кг при скорости 3 м/с равен:", options: ["7 кг·м/с", "12 кг·м/с", "1,3 кг·м/с", "0,75 кг·м/с"], correct: 1, explanation: "p = mv = 4 × 3 = 12 кг·м/с." },
  { subject: "Физика", text: "Закон сохранения импульса выполняется:", options: ["Всегда", "В замкнутых системах", "Только в вакууме", "Только на Земле"], correct: 1, explanation: "Только в замкнутых (закрытых) системах." }
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
  const commonQuestions = [...questions]; // 40 обязательных
  
  if (profileKey === 'physmath') {
    return [...commonQuestions, ...physicsQuestions];
  }
  if (profileKey === 'chembio') {
    return [...commonQuestions]; // Химию и Биологию добавим позже
  }
  if (profileKey === 'geomath') {
    return [...commonQuestions]; // Географию добавим позже
  }
  
  return commonQuestions;
}
let activeQuestions = [];