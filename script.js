const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

let targetScroll = window.scrollY;
let currentScroll = window.scrollY;

function openTab(tab) {
    targetScroll = 0;


    tabs.forEach(function (item) {
        item.classList.remove("active");
    });

  tab.classList.add("active");

  if (tab.textContent === "Главная") {
    document.body.style.background = "rgb(20, 20, 30)";
    content.innerHTML = `
        <div class="home">
            <h1>FC BARCELONA</h1>
            <h2>Més que un club</h2>
            <img src="images/camp-nou.jpg">
            <h2>Добро пожаловать на сайт Barcelona!</h2>
            <p>
                FC Barcelona — один из самых известных футбольных клубов мира.
                Здесь ты можешь узнать больше об истории клуба,
                его трофеях, легендах, составе и громких новостях.
            </p>

            <div class="home-sections">

                <div class="home-sections legends-section">
                    <h2>⭐ Легенды клуба</h2>
                    <p>
                    Игроки, которые стали частью истории Barcelona.
                    </p>
                    <div class="legends-cards">

                        <div class="legend-card">
                            <img src="images/messi.jpg" alt="Lionel Messi">
                            <h3>Lionel Messi</h3>
                            <p>Легендарный нападающий клуба.</p>
                        </div>

                        <div class="legend-card">
                            <img src="images/neymar.jpg" alt="Neymar Jr.">
                            <h3>Neymar Jr.</h3>
                            <p>Это чистая магия футбола.</p>
                        </div>

                        <div class="legend-card">
                            <img src="images/xavi.jpg" alt="Xavi">
                            <h3>Xavi</h3>
                            <p>Мастер передач и контроля мяча.</p>
                        </div>

                    </div>

                    <button class="section-btn" id="all-legends-btn">
                        Все легенды →
                    </button>
                    
                </div>
            

                <div class="home-section">
                    <h2>🏆 Трофеи FC Barcelona</h2>

                    <p>
                    Клуб с великой историей и коллекцией престижных титулов.
                    </p>

                    <div class="trophies-preview">

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">🏆</div>
                            <h3>Лига чемпионов</h3>
                            <p>5 побед в главном еврокубке.</p>
                        </div>

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">🇪🇸</div>
                            <h3>Ла Лига</h3>
                            <p>Чемпионские титулы Испании.</p>
                        </div>

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">🥇</div>
                            <h3>Кубок Испании</h3>
                            <p>Победы в национальном кубке.</p>
                        </div>

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">🌍</div>
                            <h3>Клубный чемпионат мира</h3>
                            <p>Победы на мировой клубной арене.</p>
                        </div>

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">🏅</div>
                            <h3>Суперкубок Испании</h3>
                            <p>Трофеи в матчах за Суперкубок.</p>
                        </div>

                        <div class="trophy-preview-card">
                            <div class="trophy-emoji">⭐</div>
                            <h3>Суперкубок УЕФА</h3>
                            <p>Победы в европейском суперкубке.</p>
                        </div>
                    </div>

                    <button class="section-btn" id="all-trophies-btn">
                        Все трофеи →
                    </button>
                </div>
            </div>
        
        <div class="barca-ending">
            <h2>VISCA EL BARÇA!</h2>
            <h3>VISCA CATALUNYA!</h3>
            <img src="images/crest.jpg" alt="FC Barcelona"
        </div>

        </div>
        `;
  } else if (tab.textContent === "Трофеи") {
    document.body.style.background = "rgb(20, 20, 30)";
    content.innerHTML = `
        <div class="home">
            <h1>🏆 ТРОФЕИ BARÇA</h1>
            <h2>История великих побед</h2>

            <p>
                FC Barcelona — один из самых титулованных клубов мира.
                За свою историю Barça завоевала национальные и международные
                трофеи, оставив яркий след в истории футбола.
            </p>

            <div class="trophies-preview">

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">🏆</div>
                    <h3>Лига чемпионов</h3>
                    <h2>5 побед</h2>
                    <p>
                        Главный клубный турнир Европы. Barcelona побеждала
                        в 1992, 2006, 2009, 2011 и 2015 годах.
                    </p>
                </div>

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">🇪🇸</div>
                    <h3>Ла Лига</h3>
                    <h2>29 титулов</h2>
                    <p>
                        Чемпионат Испании. Для победы нужно показать
                        стабильность на протяжении всего сезона.
                        Последний титул на данный момент — сезон 2025/26.
                    </p>
                </div>

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">🥇</div>
                    <h3>Кубок Испании</h3>
                    <h2>32 титула</h2>
                    <p>
                        Copa del Rey — национальный кубковый турнир,
                        в котором Barcelona неоднократно становилась
                        победителем. Последняя победа — сезон 2024/25.
                    </p>
                </div>

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">🌍</div>
                    <h3>Клубный чемпионат мира</h3>
                    <h2>3 титула</h2>
                    <p>
                        Barcelona выигрывала турнир в 2009, 2011 и 2015 годах,
                        подтверждая свой статус одного из сильнейших клубов мира.
                    </p>
                </div>

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">🏅</div>
                    <h3>Суперкубок Испании</h3>
                    <h2>16 титулов</h2>
                    <p>
                        Турнир между ведущими испанскими командами.
                        Barcelona завоевала трофей и в сезоне 2025/26.
                    </p>
                </div>

                <div class="trophy-preview-card">
                    <div class="trophy-emoji">⭐</div>
                    <h3>Суперкубок УЕФА</h3>
                    <h2>5 титулов</h2>
                    <p>
                        Европейский трофей, за который борются победители
                        главных клубных турниров Европы.
                        Barcelona выигрывала его пять раз.
                    </p>
                </div>      
            </div>
            <div class="home-section">
                <h2>✨ Легендарные сезоны</h2>
                <h3>2008/09 — исторический требл</h3>
                <p>
                    Под руководством Пепа Гвардиолы Barcelona выиграла
                    Ла Лигу, Кубок Испании и Лигу чемпионов.
                    Команда начала эпоху, которая навсегда изменила
                    современный футбол.
                </p>

                <h3>2014/15 — новая европейская вершина</h3>
                <p>
                    Команда Луиса Энрике снова выиграла Ла Лигу,
                    Кубок Испании и Лигу чемпионов.
                    В атаке блистало знаменитое трио
                    Лионель Месси, Луис Суарес и Неймар.
                </p>

                <h3>2024/25 — три внутренних трофея</h3>
                <p>
                    Под руководством Ханси Флика Barcelona выиграла
                    чемпионат Испании, Кубок Испании и Суперкубок Испании.
                    Сезон стал одним из самых ярких в новейшей истории клуба.
                </p>

                <h3>2025/26 — снова чемпионы</h3>
                <p>
                    Barcelona защитила титул Ла Лиги и стала чемпионом
                    Испании второй сезон подряд при Ханси Флике.
                </p>
            </div>

            <div class="home-section">
                <h2>🔵🔴 Больше, чем клуб</h2>
                <p>
                    Каждый трофей — это результат работы игроков,
                    тренеров и болельщиков. От первых побед в Испании
                    до триумфов в Европе Barcelona продолжает создавать
                    историю и бороться за новые титулы.
                </p>
                <h2>VISCA EL BARÇA! ❤️💙</h2>
            </div>
        </div>
            `;
  } else if (tab.textContent === "Легенды клуба") {
    document.body.style.background = "rgb(20, 20, 30)"
    content.innerHTML = `
        <div class="home legends-page">
            <h1>⭐ ЛЕГЕНДЫ BARÇA</h1>
            <h2>Игроки, которые вошли в историю</h2>

            <p>
                От волшебного дриблинга Роналдиньо до гениальных
                передач Хави и невероятных голов Месси — эти игроки
                подарили болельщикам незабываемые моменты.
                Каждый из них оставил собственный след в истории клуба.
            </p>

            <div class="legends-cards">
                <div class="legend-card">
                    <img src="images/messi.jpg" alt="Lionel Messi">
                    <h3>Lionel Messi</h3>
                    <p><b>Позиция:</b> Нападающий</p>
                    <p><b>Период:</b> 2004–2021</p>
                    <p>
                        Месси прошёл путь от юного таланта академии
                        La Masia до величайшего бомбардира в истории
                        Barcelona. Он поражал соперников дриблингом,
                        точными ударами, передачами и умением решать
                        исход важнейших матчей.
                    </p>
                    <p>
                        Вместе с клубом он выиграл четыре Лиги чемпионов
                        и множество национальных титулов. Месси стал
                        символом целой эпохи и рекордсменом клуба
                        по количеству забитых голов.
                    </p>
                </div>

                <div class="legend-card">
                    <img src="images/neymar.jpg" alt="Neymar Jr.">
                    <h3>Neymar Jr.</h3>
                    <p><b>Позиция:</b> Нападающий</p>
                    <p><b>Период:</b> 2013–2017</p>
                    <p>
                        Бразильский футболист прославился техникой,
                        скоростью, финтами и смелой игрой один на один.
                        В Barcelona он стал частью знаменитого атакующего
                        трио MSN вместе с Месси и Луисом Суаресом.
                    </p>
                    <p>
                        В сезоне 2014/15 Neymar помог команде выиграть
                        Ла Лигу, Кубок Испании и Лигу чемпионов.
                        Его голы и комбинации сделали атаку Barça
                        одной из самых опасных в Европе.
                    </p>
                </div>

                <div class="legend-card">
                    <img src="images/xavi.jpg" alt="Xavi Hernández">
                    <h3>Xavi Hernández</h3>
                    <p><b>Позиция:</b> Полузащитник</p>
                    <p><b>Период:</b> 1998–2015</p>
                    <p>
                        Хави — мастер коротких передач, контроля мяча
                        и управления темпом игры. Воспитанник La Masia,
                        он стал одним из главных символов футбольного
                        стиля Barcelona, основанного на владении мячом
                        и командном взаимодействии.
                    </p>
                    <p>
                        Вместе с Андресом Иньестой и Серхио Бускетсом
                        он сформировал легендарную полузащиту.
                        Хави выиграл множество трофеев с клубом,
                        включая четыре Лиги чемпионов.
                        Позже он также возглавлял Barcelona как тренер.
                    </p>
                </div>

                <div class="legend-card">
                    <img src="images/ronaldinho.jpg" alt="Ronaldinho">
                    <h3>Ronaldinho</h3>
                    <p><b>Позиция:</b> Атакующий полузащитник</p>
                    <p><b>Период:</b> 2003–2008</p>
                    <p>
                        Роналдиньо вернул Barcelona уверенность,
                        яркость и футбольное волшебство. Его финты,
                        неожиданные передачи и улыбка стали символом
                        команды начала 2000-х годов.
                    </p>
                    <p>
                        В 2005 году он получил «Золотой мяч»,
                        а в 2006 году помог Barça выиграть Лигу чемпионов.
                        Его выступления вдохновили новое поколение
                        игроков и болельщиков, в том числе юного Месси.
                    </p>
                </div>

                <div class="legend-card">
                    <img src="images/lewandowski.jpg" alt="Robert Lewandowski">
                    <h3>Robert Lewandowski</h3>
                    <p><b>Позиция:</b> Центральный нападающий</p>
                    <p><b>Период:</b> 2022-2026</p>
                    <p>
                        Польский форвард присоединился к Barcelona
                        летом 2022 года. Он известен великолепным
                        выбором позиции, игрой в штрафной площади,
                        сильным ударом и умением забивать разными способами.
                    </p>
                    <p>
                        Уже в первом сезоне он стал лучшим бомбардиром
                        Ла Лиги и помог команде завоевать чемпионский титул.
                        Его опыт и голевое чутьё стали важной частью
                        обновлённой атаки Barça.
                    </p>
                </div>

                <div class="legend-card">
                    <img src="images/puyol.jpg" alt="Carles Puyol">
                    <h3>Carles Puyol</h3>
                    <p><b>Позиция:</b> Защитник</p>
                    <p><b>Период:</b> 1999–2014</p>
                    <p>
                        Карлес Пуйоль был капитаном, который никогда
                        не сдавался. Он прославился самоотверженными
                        подкатами, смелостью, игрой головой и готовностью
                        бороться за каждый мяч.
                    </p>
                    <p>
                        Пуйоль стал одним из главных лидеров команды
                        и олицетворением преданности клубу. Он выиграл
                        три Лиги чемпионов и множество чемпионских
                        титулов Испании, оставаясь примером для защитников.
                    </p>
                </div>
            </div>

            <div class="home-section">
                <h2>🔵🔴 Наследие Barça</h2>
                <p>
                    Эти футболисты играли в разные годы и обладали
                    разными талантами, но всех их объединяет одно —
                    стремление побеждать и любовь болельщиков.
                    Их истории продолжают вдохновлять новое поколение.
                </p>
                <h2>VISCA EL BARÇA!</h2>
            </div>
        </div>
    `;
    

  } else if (tab.textContent === "Громкие новости") {
    document.body.style.background = "rgb(20, 20, 30)";
    content.innerHTML = `
        <h1 class="center_text">🔥 Громкие новости Barça</h1>

        <p class="news-intro">
            Скандалы и события, изменившие историю клуба.
        </p>

        <div class="news-grid">

            <article class="news-card">
                <img src="images/negreira.jpg" alt="Дело Негрейры">
                <div class="news-info">
                    <span class="news-tag">РАССЛЕДОВАНИЕ</span>
                    <h2>Дело Негрейры</h2>
                    <p>
                        Дело связано с выплатами компаниям, ассоциированным
                        с бывшим вице-президентом технического комитета арбитров
                        Испании. «Барселона» заявляла, что платила за аналитические
                        отчёты об арбитрах, и отрицала покупку судейских решений.
                        Сам факт выплат не доказывает манипуляцию результатами матчей.
                    </p>
                </div>
            </article>

            <article class="news-card">
                <img src="images/finance.jpg" alt="Финансовый кризис Барселоны">
                <div class="news-info">
                    <span class="news-tag">ФИНАНСЫ</span>
                    <h2>Финансовый кризис</h2>
                    <p>
                        В 2021 году «Барселона» сообщила о долге примерно
                        в 1,35 миллиарда евро. Высокие расходы, зарплаты и
                        последствия пандемии усилили финансовые трудности.
                        Кризис ограничил возможности клуба на трансферном рынке
                        и осложнил регистрацию новых игроков.
                    </p>
                </div>
            </article>

            <article class="news-card">
                <img src="images/leave-messi.jpg" alt="Лионель Месси">
                <div class="news-info">
                    <span class="news-tag">ФИНАНСЫ</span>
                    <h2>Уход Лионеля Месси</h2>
                    <p>
                        В августе 2021 года «Барселона» объявила, что не сможет
                        продлить контракт с Месси. Несмотря на желание сторон
                        продолжить сотрудничество, финансовые ограничения и правила
                        регистрации Ла Лиги помешали оформить соглашение.
                        Так завершилась целая эпоха в истории клуба.
                    </p>
                </div>
            </article>
        </div>
      `;
  } else if (tab.textContent.trim() === "Состав") {
    document.body.style.background = "rgb(20, 20, 30)";
    content.innerHTML = `
            <h1 class="center_text">🔵🔴 FC BARCELONA</h1>
            <p class="center_text">Стартовый состав · Схема 4–3–3</p>

        <div class="formation">

            <div class="coach">
                <img src="images/hansi.jpg">
                <h2>Coach: Hansi Flick</h2>
                <p>Nationality: Germany</p>
            </div>

            <div class="field">

                <div class="penalty-area"></div>
                <div class="goal-area"></div>
                <div class="penalty-spot"></div>
                <div class="penalty-arc"></div>

                <div class="players">

                    <div class="row">
                        <div class="player">
                            <img src="images/joan_garcia.jpg">
                            <span>Joan Garcia</span>

                            <div class="player-info">
                                <h3>Joan Garcia</h3>
                                <p>Number: 1</p>
                                <p>Position: Goalkeeper</p>
                                <p>Nationality: Spain</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="player">
                            <img src="images/kounde.jpg">
                            <span>Jules Kounde</span>

                            <div class="player-info">
                                <h3>Jules Kounde</h3>
                                <p>Number: 23</p>
                                <p>Position: Right defender</p>
                                <p>Nationality: France</p>
                            </div>
                        </div>
                        <div class="player">
                            <img src="images/cubarsi.jpg">
                            <span>Pau Cubarsí</span>

                            <div class="player-info">
                                <h3>Pau Cubarsí</h3>
                                <p>Number: 5</p>
                                <p>Position: Central defender</p>
                                <p>Nationality: Spain</p>
                            </div>
                        </div>
                        <div class="player">
                            <img src="images/eric_garcia.jpg">
                            <span>Eric Garcia</span>

                            <div class="player-info">
                                <h3>Eric Garcia</h3>
                                <p>Number: 24</p>
                                <p>Position: Central defender</p>
                                <p>Nationality: Spain</p>
                            </div>
                        </div>
                        <div class="player">
                            <img src="images/cancelo.jpg">
                            <span>João Cancelo</span>

                            <div class="player-info">
                                <h3>João Cancelo</h3>
                                <p>Number: 2</p>
                                <p>Position: Left defender</p>
                                <p>Nationality: Portugal</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="player">
                            <img src="images/jong.jpg">
                            <span>Frenkie de Jong</span>

                            <div class="player-info">
                                <h3>Frenkie de Jong</h3>
                                <p>Number: 21</p>
                                <p>Position: Midfielder</p>
                                <p>Nationality: Netherlands</p>
                            </div>
                        </div>
                        <div class="player">
                            <img src="images/gavi.jpg">
                            <span>Gavi</span>

                            <div class="player-info">
                                <h3>Gavi</h3>
                                <p>Number: 6</p>
                                <p>Position: Midfielder</p>
                                <p>Nationality: Spain</p>
                            </div>

                        </div>
                        <div class="player">
                            <img src="images/pedri.jpg">
                            <span>Pedri</span>

                            <div class="player-info">
                                <h3>Pedri</h3>
                                <p>Number: 8</p>
                                <p>Position: Midfielder</p>
                                <p>Nationality: Spain</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="player">
                            <img src="images/gordon.jpg">
                            <span>Anthony Gordon</span>

                            <div class="player-info">
                                <h3>Anthony Gordon</h3>
                                <p>Number: 17</p>
                                <p>Position: Left winger</p>
                                <p>Nationality: England</p>
                            </div>
                        </div>

                        <div class="player">
                            <img src="images/rafinha.jpg">
                            <span>Rafinha</span>
                        

                            <div class="player-info">
                                <h3>Rafinha</h3>
                                <p>Number: 11</p>
                                <p>Position: Forward</p>
                                <p>Nationality: Brazil</p>
                            </div>
                        </div>

                        <div class="player">
                            <img src="images/yamal.jpg">
                            <span>Lamine Yamal</span>

                            <div class="player-info">
                                <h3>Lamine Yamal</h3>
                                <p>Number: 10</p>
                                <p>Position: Right winger</p>
                                <p>Nationality: Spain</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    openTab(tab);
  });
});

openTab(tabs[0]);

content.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button) return;

  if (button.id === "all-legends-btn") {
    const legendsTab = Array.from(tabs).find(function (tab) {
      return tab.textContent.trim() === "Легенды клуба";
    });
    if (legendsTab) openTab(legendsTab);
  }

  if (button.id === "all-trophies-btn") {
    const trophiesTab = Array.from(tabs).find(function (tab) {
      return tab.textContent.trim() === "Трофеи";
    });
    if (trophiesTab) openTab(trophiesTab);
  }
});

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();

    targetScroll += event.deltaY * 1.5;

    targetScroll = Math.max(
      0,
      Math.min(
        targetScroll,
        document.documentElement.scrollHeight - window.innerHeight,
      ),
    );
  },
  { passive: false },
);

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.12;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();