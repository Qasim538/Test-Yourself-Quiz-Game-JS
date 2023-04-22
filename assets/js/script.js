
// All Id are here

var highScoreLink = document.getElementById('highscores');
var timer = document.getElementById('time');
var startQuizBtn = document.getElementById('start-quiz-btn');
var questionDisplay = document.getElementById('question-title');
var answerChoices = document.getElementById('choices');
var finalScore = document.getElementById('final-score');
var initialInput = document.getElementById('initials');
var submitIniBtn = document.getElementById('submit');
var highScores = document.getElementById('highscores');
var clearHighScore = document.getElementById('clear');

// Questions to be asked as a lits  with correct answers strings

const questions = [
    {
        'question': 'String values must be enclosed within ______ when being assigned to variables.',
        'answers': ['commas','curly brackets','quotes','parentheses'],
        'correct_index': 2
    }, {
        'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
        'answers': ['for loops','console.log','terminal / bash','JavaScript'],
        'correct_index': 1
    }, {
        'question': 'Commonly used data types DO NOT include:',
        'answers': ['alerts','numbers','strings','booleans'],
        'correct_index': 0
    }, {
        'question': 'The condition in an if/else statement is enclosed within ______.',
        'answers': ['quotes','curly brackets','square brackets','parentheses'],
        'correct_index': 3
    }, {
        'question': 'Which program is used by web clients to view the web pages?',
        'answers': ['Web browser','Protocol','Web server','Search Engine'],
        'correct_index': 0
    }, {
        'question': 'The ______ attribute is used to identify the values of variables.',
        'answers': ['text','http-equiv','content','name'],
        'correct_index': 2
    }, {
        'question': 'Which tag is used to identify the keywords describing the site?',
        'answers': ['Comment tag','Title tag','Meta tag','Anchor tag'],
        'correct_index': 2
    }, {
        'question': 'Which are used with a tag to modify its function?',
        'answers': ['Files','Functions','Attributes','Documents'],
        'correct_index': 2
    }, {
        'question': 'This is a declaration that IS NOT an html tag.  it is an instruction to the web browser about what version of HTML a web page is written in.',
        'answers': ['html','doctype','head','body'],
        'correct_index': 1
    }, {
        'question': 'Content information that appears between the oppening and closing ______ tags will show up in a browser view.',
        'answers': ['body','html','head','table'],
        'correct_index': 0
    }, {
        'question': 'What tag element will display a line across the screen?',
        'answers': ['br','a','hr','line'],
        'correct_index': 2
    }, {
        'question': 'In a/an ______ list numbers and roman numerals can appear.',
        'answers': ['Unordered','Ordered','Definition','Straight line'],
        'correct_index': 1
    }, {
        'question': 'This is a language used for describing the look and formatting of a document written in markup language.',
        'answers': ['HTML','CSS','JSON','XML'],
        'correct_index': 1
    }, {
        'question': 'There are ______ characters in the hexidecimal color code combining color shades of red, green, and blue.',
        'answers': ['4','5','6','7'],
        'correct_index': 2
    }, {
        'question': 'Which HTML tag is used to communicate with search engines and describe the Web page\'s content?',
        'answers': ['meta','html','body','head'],
        'correct_index': 0
    }, {
        'question': 'Which term describes the skeletal layout of a Web page, without colors or graphics? ',
        'answers': ['A wireframe','Mind map','Template','Goals'],
        'correct_index': 0
    }

]

// score tracking variables

const startingTime = 15;
var remainingTime;
var timer;
var score;

// Event Listeners to all

function init() {
    startQuizBtn.addEventListener('click', event => {
        event.preventDefault();
        displayQuestionPage()
    })
    answerChoices.addEventListener('click', function(event){
        event.preventDefault()
        if(event.target.matches('button')) {
            var button = event.target
            if (button.classList.cointain('correct')) {
                answerChoices.textContent+"correct!";
                score++
            } else {
                answerChoices.textContent = "Wrong!";
            }

            if (remainingTime > 0) dispplayNextQuestion()
            else displayGetNamePage()
        }
    })

}