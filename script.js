const quizData = [
    { question: "第九条①：国権の発動たる戦争と、武力による威嚇又は武力の行使は、`[ ]`を解決する手段としては、永久にこれを放棄する。", choices: ["国内紛争", "国際紛争", "経済摩擦", "領土問題"], answer: 1, explanation: "9条1項は「国際紛争」を解決する手段としての戦争を放棄しています。" },
    { question: "第九条②：国の`[ ]`は、これを認めない。", choices: ["統帥権", "自衛権", "交戦権", "警察権"], answer: 2, explanation: "9条2項は戦力の不保持と共に「交戦権」を否認しています。" },
    { question: "第十条：日本国民たる要件は、`[ ]`でこれを定める。", choices: ["政令", "条例", "法律", "勅令"], answer: 2, explanation: "国籍に関する要件は国会が定める「法律」（国籍法）で規定されます。" },
    { question: "第十一条：この憲法が国民に保障する基本的人権は、侵すことのできない`[ ]`として、現在及び将来の国民に与へられる。", choices: ["永久の権利", "天賦の権利", "自然権", "不可侵の権利"], answer: 0, explanation: "11条の条文上の表現は「永久の権利」です。" },
    { question: "第十二条：この憲法が国民に保障する自由及び権利は、国民の`[ ]`によつて、これを保持しなければならない。", choices: ["遵法精神", "自由な意思", "団結した行動", "不断の努力"], answer: 3, explanation: "12条は、人権は国民自身の「不断の努力」によって保持すべきものだと示しています。" },
    { question: "第十三条：すべて国民は、`[ ]`として尊重される。", choices: ["国民", "人間", "個人", "臣民"], answer: 2, explanation: "13条は一人ひとりがかけがえのない「個人」として尊重されることを定めています。" },
    { question: "第十四条①：「法の下に平等」であり、人種、信条、性別、社会的身分又は`[ ]`により差別されない。", choices: ["国籍", "門地", "財産", "職業"], answer: 1, explanation: "14条1項に明記されているのは「門地」です。" },
    { question: "第十四条②：栄誉、勲章その他の栄典の授与は、いかなる`[ ]`も伴はない。", choices: ["義務", "年金", "特権", "責任"], answer: 2, explanation: "14条3項により、栄典にはいかなる「特権」も伴いません。" },
    { question: "第十五条①：`[ ]`を選定し、及びこれを罷免することは、国民固有の権利である。", choices: ["天皇", "総理大臣", "裁判官", "公務員"], answer: 3, explanation: "15条1項は「公務員」の選定・罷免権を国民固有の権利としています。" },
    { question: "第十五条②：同条3項で保障されている選挙の原則は何か。", choices: ["平等選挙", "直接選挙", "自由選挙", "普通選挙"], answer: 3, explanation: "15条3項は「成年者による普通選挙」を保障しています。" },
    { question: "第十六条：平穏に国や地方公共団体に要望を述べる権利は何か。", choices: ["異議申立権", "請願権", "請求権", "審査権"], answer: 1, explanation: "16条で保障されているのは「請願権」です。" },
    { question: "第十七条：公務員の`[ ]`により、損害を受けたときは、…国又は公共団体に、その賠償を求めることができる。", choices: ["不法行為", "職務怠慢", "不当な処分", "権力濫用"], answer: 0, explanation: "17条は、公務員の「不法行為」に対する国家賠償責任を定めています。" },
    { question: "第十八条：犯罪に因る処罰の場合を除いては、その`[ ]`に服させられない。", choices: ["強制労働", "意に反する苦役", "懲役または禁錮", "奉仕活動"], answer: 1, explanation: "18条は「意に反する苦役」からの自由を保障しています。" },
    { question: "第十九条：保障される自由として、条文に明記されているものは何か。", choices: ["思想及び良心の自由", "政治活動の自由", "プライバシーの権利", "信仰の自由"], answer: 0, explanation: "19条は「思想及び良心の自由」を保障しています。" },
    { question: "第二十条①：`[ ]`は、何人に対してもこれを保障する。", choices: ["思想の自由", "表現の自由", "信教の自由", "学問の自由"], answer: 2, explanation: "20条1項は「信教の自由」を保障しています。" },
    { question: "第二十条②：国と宗教との関わりを禁じる原則を一般に何と呼ぶか。", choices: ["思想・信条の自由", "祭政一致の禁止", "宗教法人格の否定", "政教分離の原則"], answer: 3, explanation: "20条3項などに基づく、国と宗教の分離を「政教分離の原則」と言います。" },
    { question: "第二十一条①：集会、結社及び言論、出版その他一切の`[ ]`は、これを保障する。", choices: ["表現の自由", "政治活動", "経済活動", "知る権利"], answer: 0, explanation: "21条1項は「表現の自由」を保障しています。" },
    { question: "第二十一条②：同条2項で明確に禁止されている行為は何か。", choices: ["事前抑制", "差別的表現", "検閲", "虚偽報道"], answer: 2, explanation: "21条2項は、発表前の内容審査である「検閲」を絶対的に禁止しています。" },
    { question: "第二十二条①：何人も、公共の福祉に反しない限り、居住、移転及び`[ ]`を有する。", choices: ["財産処分の自由", "職業選択の自由", "契約の自由", "営業の自由"], answer: 1, explanation: "22条1項は居住・移転の自由とともに「職業選択の自由」を保障しています。" },
    { question: "第二十二条②：何人も、外国に移住し、又は`[ ]`する自由を侵されない。", choices: ["永住権を取得", "国籍を離脱", "亡命を申請", "二重国籍を保持"], answer: 1, explanation: "22条2項は「国籍を離脱」する自由を保障しています。" },
    { question: "第二十三条：一行で簡潔に保障している自由は何か。", choices: ["表現の自由", "思想の自由", "学問の自由", "信教の自由"], answer: 2, explanation: "23条は「学問の自由」を保障しています。" },
    { question: "第二十四条①：婚姻は、`[ ]`のみに基いて成立し…", choices: ["戸籍法の届出", "親権者の同意", "両性の合意", "個人の尊厳"], answer: 2, explanation: "24条1項は、婚姻が当事者である「両性の合意」のみで成立することを定めています。" },
    { question: "第二十四条②：法律は、個人の尊厳と`[ ]`に立脚して、制定されなければならない。", choices: ["両性の本質的平等", "伝統的な家族観", "社会の安寧秩序", "夫婦の相互協力"], answer: 0, explanation: "24条2項のキーワードは「個人の尊厳」と「両性の本質的平等」です。" },
    { question: "第二十五条①：すべて国民は、`[ ]`な最低限度の生活を営む権利を有する。", choices: ["平和で安定した", "必要で合理的な", "清潔で衛生的な", "健康で文化的な"], answer: 3, explanation: "25条1項が保障するのは「健康で文化的な」最低限度の生活です。" },
    { question: "第二十五条②：国は、社会福祉、`[ ]`及び公衆衛生の向上及び増進に努めなければならない。", choices: ["雇用対策", "医療制度", "社会保障", "所得再分配"], answer: 2, explanation: "25条2項は国の社会的使命として社会福祉、「社会保障」、公衆衛生を挙げています。" },
    { question: "第二十六条①：すべて国民は、…その`[ ]`に応じて、ひとしく教育を受ける権利を有する。", choices: ["希望", "年齢", "財産", "能力"], answer: 3, explanation: "26条1項は「能力」に応じてひとしく教育を受ける権利を保障しています。" },
    { question: "第二十六条②：同条2項で無償とすると定められているのは何か。", choices: ["普通教育", "公教育", "義務教育", "高等教育"], answer: 2, explanation: "無償とされるのは「義務教育」です（親が子に受けさせる義務があるのは「普通教育」）。" },
    { question: "第二十七条①：勤労について、国民が有するものと負うものの正しい組み合わせは何か。", choices: ["権利のみ有する", "義務のみ負う", "権利を有し、義務を負う", "自由を有し、責任を負う"], answer: 2, explanation: "27条1項は、勤労の「権利」と「義務」の両方を定めています。" },
    { question: "第二十七条②：賃金、就業時間等の勤労条件に関する基準は、`[ ]`でこれを定める。", choices: ["政令", "条例", "法律", "労使協定"], answer: 2, explanation: "勤労条件の基準は国会が定める「法律」（労働基準法など）で規定されます。" },
    { question: "第二十八条：労働三権に含まれないものはどれか。", choices: ["団結権", "団体交渉権", "団体行動権", "解雇規制権"], answer: 3, explanation: "労働三権は団結権、団体交渉権、団体行動権です。「解雇規制権」は含まれません。" },
    { question: "第二十九条①：`[ ]`は、これを侵してはならない。", choices: ["財産権", "所有権", "営業の自由", "契約の自由"], answer: 0, explanation: "29条1項は「財産権」の不可侵を定めています。" },
    { question: "第二十九条②：私有財産は、`[ ]`の下に、これを公共のために用ひることができる。", choices: ["国会の議決", "法律の定め", "正当な補償", "所有者の同意"], answer: 2, explanation: "29条3項により、財産権を公共のために制約する際には「正当な補償」が必要です。" },
    { question: "第三十条：定められている国民の義務は何か。", choices: ["兵役の義務", "勤労の義務", "教育の義務", "納税の義務"], answer: 3, explanation: "30条は「納税の義務」を定めています。三大義務の一つです。" }
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionNumberEl = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const questionTextEl = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');

const scoreTextEl = document.getElementById('score-text');
const messageTextEl = document.getElementById('message-text');
const wrongAnswersContainer = document.getElementById('wrong-answers-container');

let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    // 古い選択肢をクリア
    choicesContainer.innerHTML = '';

    const currentQuestion = quizData[currentQuestionIndex];
    questionNumberEl.textContent = `第 ${currentQuestionIndex + 1} 問 / ${quizData.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
    questionTextEl.innerHTML = currentQuestion.question.replace('`[ ]`', '<span style="color: #c62828; font-weight: bold;">[ 　 ]</span>');

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('div');
        choiceButton.classList.add('choice');
        choiceButton.textContent = `（${index + 1}）${choice}`;
        choiceButton.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(choiceButton);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.answer;
    
    const choiceButtons = document.querySelectorAll('.choice');
    
    if (isCorrect) {
        score++;
        choiceButtons[selectedIndex].classList.add('correct');
    } else {
        choiceButtons[selectedIndex].classList.add('wrong');
        choiceButtons[currentQuestion.answer].classList.add('correct');
        wrongAnswers.push({
            question: currentQuestion.question,
            yourAnswer: currentQuestion.choices[selectedIndex],
            correctAnswer: currentQuestion.choices[currentQuestion.answer],
            explanation: currentQuestion.explanation
        });
    }

    // 他の選択肢を無効化
    choiceButtons.forEach(button => button.classList.add('disabled'));

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    const percentage = Math.round((score / quizData.length) * 100);
    scoreTextEl.textContent = `正解数: ${score} / ${quizData.length} (${percentage}%)`;

    if (percentage === 100) {
        messageTextEl.textContent = "素晴らしい！全問正解です！完璧な理解度です。";
    } else if (percentage >= 80) {
        messageTextEl.textContent = "おしい！あと少しで完璧です。間違えた問題を確認しましょう。";
    } else if (percentage >= 50) {
        messageTextEl.textContent = "よく頑張りました。復習して知識を定着させましょう。";
    } else {
        messageTextEl.textContent = "まだまだ伸びしろがありますね。間違えた問題をしっかり確認しましょう。";
    }

    if (wrongAnswers.length > 0) {
        wrongAnswers.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('wrong-answer-item');
            itemEl.innerHTML = `
                <p class="question">Q: ${item.question}</p>
                <p>あなたの回答: ${item.yourAnswer}</p>
                <p class="answer">正解: ${item.correctAnswer}</p>
                <p>解説: ${item.explanation}</p>
            `;
            wrongAnswersContainer.appendChild(itemEl);
        });
    } else {
        wrongAnswersContainer.innerHTML = '<h3>全問正解です！</h3>';
    }
}