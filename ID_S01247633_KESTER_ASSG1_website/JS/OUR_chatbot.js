
let msgBox = document.getElementById('messageBox')
let body = document.getElementById('chatBody') //! important
var main_bod = document.getElementById('chatbotWindow')
var minibot = document.getElementById('minimalBot')
//for now the valid promo codes are : ng2022, newyear2023

var isMax = false
var isInit = true
var closeDialog = false
var introduc=[`Hello`]
var responses = {
    "intro": {
        "answer": "Hi. Nice to meet you. <div id='letter'>Please choose from the options</div>below, to know more about us",
        "related": ["Options", "About us", "Services", "History", "Help","List","Promo"]
    },
    "options": {//gives the list of commands in the form of a btn  for user to click upon
        "answer": `These are the following commands and replys you can send me...`,
        "related": ["About Us", "Services", "History", `Help`,"Promo","List"]
    },
    "About Us": {
        "answer": "We are a singapore based company, that provides with a wider range of service that cater to information technology ",
        "related": ["Services","History",`Options`]
    },
    "skills": {
        "answer": "We provide with a wide area of services : from researching to pentesting, do take at our services, click on the services button",
        "related": ["Projects", "Fields", "Experience",`<a href="../HTML/Ca2_skill.html" id="link">Services</a>`]
    },
    "projects": {
        "answer": "In order to better myself in Programming, I have done certain projects over the months. Please do check them out.",
        "related": [`<a href="../HTML/Ca2_skill.html" id="link">Link</a>`, `<a href="../HTML/Ca2_contact.html" id="link">Contact</a>`]
    },
    "languages": {
        "answer": "WE are versed in a wide area of fields in IT, espeically in Cyber Security",
        "related": ["Experience", "History", "contact"]
    },
    "experience": {
        "answer": "We have been in this business for 10 years, and are still at the top of our market",
        "related": ["History", "Contact"]
    },
    "history": {
        "answer": "We have worked with numerous clients before, from NUS to google",
        "related": ["Option", `<a href="../HTML/Ca2_contact.html" id="link">Contact</a>`,`<a href="../HTML/Ca2_skill.html" id="link">Services</a>`]
    },

    "who am i" : {
        "answer" : "You are the user, nice to meet you...",
        "related" : ["About Me", "Skills", "History", `Help`]
    },
    "no" : {
        "answer" : "You think you are soooo funny huh... just choose",
        "related" : ["About Me", "Skills", "History", `Help`]
    },
    "help" :{
        "answer":"You can click on the following button...",
        "related":[`<a href="../HTML/Ca2_contact.html" id="link">Contact</a>`]
    },
    "list" : {
        "answer" :"You can click on the following list of links to be redirected to the sites of your wishes",
        "related" : [`<a href="../HTML/Ca2_contact.html" id="link">Contact</a>`,`<a href="../HTML/index.html" id="link">Homepage</a>`,`<a href="../HTML/aboutme.html" id="link">About Us</a>`,`<a href="../HTML/Ca2_skill.html" id="link">Sservices</a>`]
        },
    "promo" : {
            "answer" :"Please enter the Code ",
            "related" : [`<a href="../HTML/Ca2_contact.html" id="link">Contact</a>`,`<a href="../HTML/index.html" id="link">Homepage</a>`,`<a href="../HTML/aboutme.html" id="link">About Me</a>`,`<a href="../HTML/Ca2_skill.html" id="link">My Skills</a>`,`<a href="../HTML/Ca2_blog.html" id="link">Blog</a>`]
        },
    "ng2022" : {
        'answer' : 'Thanks for enter the valid code, you are eligible for the following : \n1. 20% Discount In all our service\n2. 10% Discount on our workshops\n Go to our contact page, type in your code and the discount you want',
        'related' : ['<a href="../HTML/Ca2_contact.html" id="link">Contact</a>']
    },    "newyear2023" : {
        'answer' : 'Thanks for enter the valid code, you are eligible for the following : \n1. 40% Discount In all our service\n2. 30% Discount on our workshops\n Go to our contact page, type in your code and the discount you want ',
        'related' : ['<a href="../HTML/Ca2_contact.html" id="link">Contact</a>']
    },
    getOption(t){
        var opt = t.target.innerText.toLowerCase()
        chatBody.innerHTML += usermsg(opt)
        if (responses[opt] === undefined) return com_msg(responses.intro)
        com_msg(responses[opt])
    }
    
} //! the responses object is the one that contains all queries' answers 
// to gain access to the link i need to add a seperate html line to it
const usermsg = (msg) => {
    return `<div class="userMessageWrap">
      <div class="userName">You</div>
      <div class="userMessage rounded">${msg}</div>
    </div>`
}
const spinnerBlock = (id) => {
    return `<div class="spinnerBlock" id="${id}">
      <div class="spinner-grow"></div>
      <div class="spinner-grow"></div>
      <div class="spinner-grow"></div>
    </div>`
}
//! the outerMesasge is considered as a formatter
const com_msg = (args) => {
    var html = `<div class="botMessageWrap">
      <div class="botName">ChatBot</div>
      <div class="botMessage rounded">${args.answer}</div>`
    if (args.related) {
        html += `<div class="suggestions">`
        var related = args.related
        for (var r of related) {
            html += `<div class="suggest" onclick="responses.getOption(event)">${r}</div>`
        }
        html += `</div>`
    }
    html += `</div>`
    var id = Math.random().toString(36).substring(3)
    chatBody.innerHTML += spinnerBlock(id)
    clearScroll()
    setTimeout(function () {
        document.getElementById(id).remove()
        chatBody.innerHTML += html
        clearScroll()
    },1000)
}




//opening the window
const toggleWindow = () => {
    if (isInit) {
        com_msg(responses.intro)
        isInit = false
    }
    if (isMax) {
        chatbotWindow.style.display = "none"
        minibot.style.display = "block"
    } else {
        chatbotWindow.style.display = "block"
        minibot.style.display = "none"
    }
    isMax = !isMax
}



//the closing the chat
const endChat = () => {
    isInit = true
    msgBox.disabled = true
    if (closeDialog) return
    closeDialog = true
    var id = Math.random().toString(36).substring(3)
    var html = `<div class="mt-4 card p-3 text-center" id="${id}">
    <h4 class="pt-2 pb-3">End chat ?</h4>
    <div class="d-flex">
      <button class="btn btn-danger w-100 me-1" onclick="closeDialog = false;closeChat()">OK</button>
      <button class="btn btn-outline-secondary w-100 ms-1" onclick="closeDialog = false;cancelClose('${id}')">Cancel</button>
    </div>
  </div>`
    chatBody.innerHTML += html
    clearScroll()
}


//after confitmation the chat is completely closed
const closeChat = () => {
    chatBody.innerHTML = ""
    msgBox.disabled = false
    toggleWindow()
}

//if cancel option is chosen
const cancelClose = (id) => {
    msgBox.disabled = false
    document.getElementById(id).remove()
}

const clearScroll = () => {
    chatBody.scrollTop = chatBody.scrollHeight
    msgBox.value = ""
}
const enterPressed = (e) => { //! to allow the postMessage when the enter btn is clicked
    if(e.key =='Enter'){
        postMessage()
    }
}

const postMessage = () => { //! the postMessage is used so that when the user types in anything other than what is expected then it gives the intro again
    var msg = msgBox.value.trim()
    if (msg === "") {
        return;
    }
    chatBody.innerHTML += usermsg(msg)   
    if (responses[msg] === undefined) {
        com_msg(responses.intro)
    } else {
        com_msg(responses[msg])
    }
    clearScroll()
}

document.addEventListener('keydown', enterPressed);