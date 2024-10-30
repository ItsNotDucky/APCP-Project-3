
window.addEventListener("load", addlistener);
var stagestate = 0, score = 0, questioncount = 0, questioncountmax = 20, outputstate = null, removequestion = true, displaycount = 1;
function addlistener() {
	document.getElementById("btnintroyes").addEventListener("click", introyes);
	document.getElementById("btnintrono").addEventListener("click", introyno);
	document.getElementById("btnyes").addEventListener("click", questionyes);
	document.getElementById("btnno").addEventListener("click", questionno);
	document.getElementById("btnprob").addEventListener("click", questionprob);
	document.getElementById("btnprobno").addEventListener("click", questionprobno);
	document.getElementById("btndk").addEventListener("click", questiondk);
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
			document.getElementById("btnintrono").name = "btnintro";
			document.getElementById("btnintrono").disabled = true;
			stagestate++;
			break;
		case 2:
			document.getElementById("introscreen").style.display = "none";
			document.getElementById("questionscreen").style.display = "block";
			setquestion();
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
function questionno() {displaycount++; questionindex();}
function questionyes() {displaycount++; score++; questionindex();}
function questionprob() {displaycount++; score += 0.5; questionindex();}
function questionprobno() {displaycount++; score += 0.25; questionindex();}
function questiondk() {removequestion = false; setquestion();}
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
	document.getElementById("lblquestion").textContent = "Question #" + displaycount + ": " + questionlist[randomIndex];
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
	"Do you often prefer talking rather than listening in conversations?",
	"Do you feel at ease in crowds?",
	"Do you often find yourself talking more than others in a group?",
	"Do you enjoy hosting parties?",
	"Do you easily connect with new acquaintances?",
	"Do you like being around people while working?",
	"Do you often take the lead in group settings?",
	"Do you find it enjoyable to chat on the phone?",
	"Do you actively seek out new friendships?",
	"Do you prefer face-to-face communication over text?",
	"Do you often join clubs or groups?",
	"Do you feel energized after socializing for hours?",
	"Do you tend to talk about your day with others?",
	"Do you like visiting busy cafes or restaurants?",
	"Do you feel comfortable giving advice to others?",
	"Do you seek input from others on decisions?",
	"Do you enjoy going out with people rather than staying home?",
	"Do you actively seek attention in social settings?",
	"Do you feel uneasy when you’re the last to speak?",
	"Do you enjoy mingling at social events?",
	"Do you like interacting with different groups of people?",
	"Do you find large gatherings fun?",
	"Do you feel confident initiating conversations?",
	"Do you often tell jokes to lighten the mood?",
	"Do you like to share your opinion on social issues?",
	"Do you find satisfaction in helping others socially?",
	"Do you enjoy debating or discussing various topics?",
	"Do you dislike quiet surroundings?",
	"Do you often attend networking events?",
	"Do you find it easy to make small talk?",
	"Do you like taking part in team-building activities?",
	"Do you feel awkward if there’s silence in a conversation?",
	"Do you like being a part of every conversation?",
	"Do you feel you thrive in busy environments?",
	"Do you seek out social events on weekends?",
	"Do you often tell people about your personal life?",
	"Do you prefer crowded places over quiet ones?",
	"Do you enjoy reconnecting with old friends?",
	"Do you feel more inspired when around others?",
	"Do you find it easy to make people laugh?",
	"Do you prefer direct communication over online chat?",
	"Do you enjoy working with others to solve problems?",
	"Do you like giving group presentations?",
	"Do you often talk to people you meet in line?",
	"Do you feel comfortable taking charge of group activities?",
	"Do you enjoy introducing yourself in new settings?",
	"Do you often recommend things to people?",
	"Do you enjoy attending public talks or lectures?",
	"Do you dislike feeling left out?",
	"Do you often remember names and faces?",
	"Do you feel comfortable in impromptu social situations?",
	"Do you find joy in making others feel included?",
	"Do you enjoy being part of big crowds?",
	"Do you often ask others for feedback?",
	"Do you dislike working in isolation?",
	"Do you feel more motivated with friends around?",
	"Do you like planning group outings?",
	"Do you often speak up in unfamiliar groups?",
	"Do you feel relaxed in noisy places?",
	"Do you often initiate group activities?",
	"Do you like telling people about your interests?",
	"Do you find it hard to be alone for long?",
	"Do you often meet new people through mutual friends?",
	"Do you enjoy being busy with social activities?",
	"Do you find it easy to make eye contact with strangers?",
	"Do you often make people feel comfortable?",
	"Do you enjoy brainstorming with others?",
	"Do you like to keep in touch with distant friends?",
	"Do you thrive when leading a group?",
	"Do you dislike staying home alone all day?",
	"Do you find it easy to share your ideas with others?",
	"Do you like hanging out with a variety of people?",
	"Do you enjoy crowded events?",
	"Do you feel comfortable asking for help?",
	"Do you enjoy sharing your thoughts openly?",
	"Do you find it fulfilling to engage others in conversation?",
	"Do you enjoy socializing with family?",
	"Do you dislike keeping to yourself?",
	"Do you often approach new people confidently?",
	"Do you enjoy doing group activities outside of work?",
	"Do you like reconnecting with old classmates?",
	"Do you feel drained if you don’t interact with others daily?",
	"Do you find it easy to talk to strangers in any setting?",
]
