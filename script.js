window.addEventListener("load", addlistener);
var stagestate = 0, score = 0, questioncount = 0, questioncountmax = 20, outputstate = null, removequestion = true;
function addlistener() {
	document.getElementById("btnintroyes").addEventListener("click", introyes)
	document.getElementById("btnintrono").addEventListener("click", introyno)
	document.getElementById("btnyes").addEventListener("click", questionyes)
	document.getElementById("btnno").addEventListener("click", questionindex)
	document.getElementById("btnprob").addEventListener("click", questionprob)
	document.getElementById("btnprobno").addEventListener("click", questionprobno)
	document.getElementById("btndk").addEventListener("click", questiondk)
}
function screenchange() {
	switch (stagestate) {
		case 0:
			document.getElementById("imgakinatoe").src = "images/img9.png";
			document.getElementById("lblprompt").textContent = "Sure about that?";
			document.getElementById("btnintroyes").textContent = "Yes I am";
			document.getElementById("btnintrono").textContent = "Not really";
			stagestate++;
			break;
		case 1:
			document.getElementById("imgakinatoe").src = "images/img3.png";
			document.getElementById("lblprompt").textContent = "Let's test to make sure";
			document.getElementById("btnintroyes").textContent = "Okay sure";
			document.getElementById("btnintrono").textContent = "Please no";
			document.getElementById("btnintrono").name = "btnintro"
			document.getElementById("btnintrono").disabled = true;
			stagestate++;
			break;
		case 2:
			document.getElementById("introscreen").style.display = "none";
			document.getElementById("questionscreen").style.display = "block";
			setquestion()
			document.getElementById("imgakinatoe").src = "images/img1.png";
			stagestate++;
			break;
		case 3:
			let gaypercentage = (score / questioncountmax) * 100
			let revgaypercentage = 100 - gaypercentage
			document.getElementById("imgakinatoe").src = "images/img3.png";
			document.getElementById("questionscreen").style.display = "none";
			document.getElementById("btnintroyes").style.display = "none";
			document.getElementById("btnintrono").style.display = "none";
			document.getElementById("introscreen").style.display = "block";
			document.getElementById("introscreen").style.height = "38px";
			if (outputstate) {
				document.getElementById("lblprompt").textContent = "There is a " + revgaypercentage + "% chance you are not an extrovert";
			} else {
				document.getElementById("lblprompt").textContent = "There is a " + gaypercentage + "% chance you are extrovert";
			}
			break;
	}
}
function introyes() {
	if (stagestate == 0) {
		outputstate = true;
	}
	screenchange();
}
function introyno() {
	if (stagestate == 0) {
		outputstate = false;
	}
	screenchange();
}
function questiondk() {removequestion = false; setquestion();}
function questionyes() {score++; questionindex();}
function questionprob() {score += 0.5; questionindex();}
function questionprobno() {score += 0.25; questionindex();}
function questionindex() {
	questioncount++;
	if (questioncount == questioncountmax) {
		screenchange()
	} else {
		setquestion()
	}
}
function setquestion() {
	let randomIndex = Math.floor(Math.random() * questionlist.length);
	let akinatoridel = Math.floor(Math.random() * 9) + 1;
	document.getElementById("imgakinatoe").src = "images/img" + akinatoridel + ".png";
	document.getElementById("lblquestion").textContent = questionlist[randomIndex];
	if (removequestion) {
		questionlist.splice(randomIndex, 1);
	}
	removequestion = true;
}
var questionlist = [
	"Do you enjoy being in large groups of people?",
	"Do you often initiate conversations with strangers?",
	"Do you like being the center of attention?",
	"Do you find yourself energized after social gatherings?",
	"Do you often find it easy to approach new people?",
	"Do you enjoy going to parties?",
	"Do you like meeting new people frequently?",
	"Do you often organize social gatherings?",
	"Do you enjoy working in teams?",
	"Do you find it easy to express your opinions in groups?",
	"Do you prefer spending time with others over being alone?",
	"Do you enjoy public speaking?",
	"Do you get bored easily when you’re alone?",
	"Do you prefer to speak rather than listen?",
	"Do you feel confident in social situations?",
	"Do you dislike being alone for long periods?",
	"Do you enjoy sharing personal stories with others?",
	"Do you find it easy to make friends?",
	"Do you often seek out social events?",
	"Do you enjoy small talk?",
	"Do you often feel comfortable in unfamiliar places?",
	"Do you find it easy to adapt in social settings?",
	"Do you feel energized when around lots of people?",
	"Do you enjoy taking on leadership roles?",
	"Do you prefer speaking over texting or emailing?",
	"Do you often talk to strangers?",
	"Do you enjoy being spontaneous with others?",
	"Do you often invite people to events?",
	"Do you feel motivated when collaborating with others?",
	"Do you enjoy being around people most of the day?",
	"Do you get restless when you’re alone?",
	"Do you enjoy visiting crowded places?",
	"Do you often reach out to friends to make plans?",
	"Do you get easily bored without company?",
	"Do you feel comfortable around people you don’t know well?",
	"Do you find yourself talking more than listening?",
	"Do you feel recharged after socializing?",
	"Do you enjoy loud and lively environments?",
	"Do you have a wide circle of friends?",
	"Do you like sharing your thoughts with others frequently?",
	"Do you often start conversations with strangers?",
	"Do you feel comfortable in group activities?",
	"Do you prefer working in busy places?",
	"Do you find social gatherings more enjoyable than relaxing alone?",
	"Do you like to go out rather than stay in?",
	"Do you enjoy being the life of the party?",
	"Do you find it easy to express yourself in groups?",
	"Do you get excited about meeting new people?",
	"Do you feel more productive around others?",
	"Do you enjoy talking about yourself?",
	"Do you frequently check in on your friends?",
	"Do you enjoy entertaining people?",
	"Do you dislike spending evenings alone?",
	"Do you feel more focused in noisy environments?",
	"Do you find large gatherings refreshing?",
	"Do you like to talk to people in elevators?",
	"Do you often feel lonely when alone?",
	"Do you find networking enjoyable?",
	"Do you like chatting with your neighbors?",
	"Do you enjoy being part of a large group?",
	"Do you find group activities energizing?",
	"Do you enjoy mingling at social events?",
	"Do you often try new social activities?",
	"Do you enjoy being spontaneous in your social life?",
	"Do you often take the lead in conversations?",
	"Do you prefer being out in public places?",
	"Do you find silence awkward?",
	"Do you prefer fast-paced activities with others?",
	"Do you like to keep yourself busy with social activities?",
	"Do you enjoy talking to salespeople or service workers?",
	"Do you often call friends just to chat?",
	"Do you dislike spending a day without social interaction?",
	"Do you often make small talk with strangers?",
	"Do you like participating in group discussions?",
	"Do you feel most creative around people?",
	"Do you like attending public events?",
	"Do you often try to lighten the mood in group settings?",
	"Do you find one-on-one conversations limiting?",
	"Do you like meeting new people at events?",
	"Do you enjoy planning outings with friends?",
	"Do you feel isolated without daily social interaction?",
	"Do you enjoy performing in front of others?",
	"Do you prefer having a busy schedule?",
	"Do you dislike long periods of quiet?",
	"Do you enjoy meeting friends of friends?",
	"Do you like socializing with coworkers after hours?",
	"Do you prefer open, busy environments to quiet ones?",
	"Do you find it hard to relax alone?",
	"Do you often laugh and talk loudly in social settings?",
	"Do you enjoy learning about others’ lives?",
	"Do you feel confident around large groups of people?",
	"Do you dislike eating alone in public?",
	"Do you often take part in social media discussions?",
	"Do you find it easy to introduce yourself to others?",
	"Do you often change plans to join a group activity?",
	"Do you feel out of place in quiet settings?",
	"Do you enjoy attending weddings, parties, or other gatherings?",
	"Do you find yourself socializing on weekends?",
	"Do you look for ways to be around others daily?",
	"Do you often prefer talking rather than listening in conversations?"
]
