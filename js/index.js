var bdcolor="#2196f3";
var leftnavhover = 'rgb(243, 242, 242)';



function viewresume() {
    window.open('Resume.pdf', '_blank');
}
var typed = new Typed(".txtbg",{
    strings:["Wow is the one"],
    typeSpeed:50,
    loop:false,
    onComplete: function(self) {
        self.cursor.remove();
    }
});
setTimeout(() => {
    var typed = new Typed(".typing",{
        strings:["I aim for."],
        typeSpeed:50,
        loop:false
    });
}, 1450);
var coloronbtn = document.getElementById('panelbtncolor');
var panelcolor0 = document.getElementById('colorradio0');
var panelcolor1 = document.getElementById('colorradio1');
var panelcolor2 = document.getElementById('colorradio2');
var panelcolor3 = document.getElementById('colorradio3');
var panelcolor4 = document.getElementById('colorradio4');
var panelcolor5 = document.getElementById('colorradio5');
var sitethemebg = document.getElementsByClassName('inthemeb');
var sitethemef = document.getElementsByClassName('inthemef');
var prtitle = document.getElementsByClassName('prtitle');
var expercardtitle = document.getElementsByClassName('expercardtitle');
var undlinecolor = document.querySelector('.txtbg');



function setcolor() {
    if (panelcolor0.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor0.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor0.value;
            sitethemebg[i].style.color = "white";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor0.value;
        }
        undlinecolor.style.textDecorationColor = panelcolor0.value;
        bdcolor=panelcolor0.value;
    }
    if (panelcolor1.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor1.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor1.value;
            sitethemebg[i].style.color = "black";
            // sitethemebg[i].style.textShadow="0 0 black";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor1.value;
        }
        for (var i = 0; i < prtitle.length; i++) {
            prtitle[i].style.textShadow = "0 0 black";
        }
        undlinecolor.style.textDecorationColor = panelcolor1.value;
        bdcolor=panelcolor1.value;
    }
    if (panelcolor2.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor2.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor2.value;
            sitethemebg[i].style.color = "white";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor2.value;
        }
        undlinecolor.style.textDecorationColor = panelcolor2.value;
        bdcolor=panelcolor2.value;
    }
    if (panelcolor3.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor3.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor3.value;
            sitethemebg[i].style.color = "black";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor3.value;
        }
        for (var i = 0; i < expercardtitle.length; i++) {
            expercardtitle[i].style.textShadow = "0.5px 0px 0px #7a7a7a";
        }
        undlinecolor.style.textDecorationColor = panelcolor3.value;
        bdcolor=panelcolor3.value;
    }
    if (panelcolor4.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor4.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor4.value;
            sitethemebg[i].style.color = "black";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor4.value;
        }
        undlinecolor.style.textDecorationColor = panelcolor4.value;
        bdcolor=panelcolor4.value;
    }
    if (panelcolor5.checked == true) {
        coloronbtn.style.backgroundColor = panelcolor5.value;
        for (var i = 0; i < sitethemebg.length; i++) {
            sitethemebg[i].style.backgroundColor = panelcolor5.value;
            sitethemebg[i].style.color = "white";
        }
        for (var i = 0; i < sitethemef.length; i++) {
            sitethemef[i].style.color = panelcolor5.value;
        }
        undlinecolor.style.textDecorationColor = panelcolor5.value;
        bdcolor=panelcolor5.value;
    }
}

var panelbtn = document.getElementById('panelbtn');
var panelcolor = document.getElementById('panelcolorsdiv');
var isopened = false;
panelbtn.addEventListener('click', openclosecolors);
function openclosecolors() {
    if (isopened == false) {
        panelcolor.style.display = 'flex';
        isopened = true;
    }
    else {
        panelcolor.style.display = "none";
        isopened = false;
    }
}








// Dark mode

var darkmodebg = document.getElementsByClassName('darkmodebg');
var darkmodefont = document.getElementsByClassName('darkmodefont');
var darkmodeshadow = document.getElementsByClassName('darkmodeshadow');
var darkmodebgcolorpanel = document.getElementsByClassName('darkmodebgcolorpanel');
var darkmodecheckbox = document.getElementById('darkmodecheckbox');
var righttab = document.getElementsByClassName('righttab');

var ss = document.styleSheets[0];

darkmodecheckbox.addEventListener('click', activateDarkMode);

function activateDarkMode(){
    if(darkmodecheckbox.checked){
        for (var i = 0; i < darkmodebg.length; i++) {
            darkmodebg[i].style.backgroundColor = "black";
        }
        for (var i = 0; i < darkmodebgcolorpanel.length; i++) {
            darkmodebgcolorpanel[i].style.backgroundColor = "black";
        }
        for (var i = 0; i < darkmodefont.length; i++) {
            darkmodefont[i].style.color = "white";
        }
        for (var i = 0; i < darkmodeshadow.length; i++) {
            darkmodeshadow[i].style.boxShadow = "0px 3px 5px 1px #363535";
        }
        righttab.style.background='url(../img/renderimgdark.jpg) repeat';
        leftnavhover = 'rgb(92 89 89)';

        ss.insertRule('*::selection { color: black !important; background: white !important; }', 1);
    }
    else{
        for (var i = 0; i < darkmodebg.length; i++) {
            darkmodebg[i].style.backgroundColor = "white";
        }
        for (var i = 0; i < darkmodebgcolorpanel.length; i++) {
            darkmodebgcolorpanel[i].style.backgroundColor = "#d2cecd";
        }
        for (var i = 0; i < darkmodefont.length; i++) {
            darkmodefont[i].style.color = "black";
        }
        for (var i = 0; i < darkmodeshadow.length; i++) {
            darkmodeshadow[i].style.boxShadow = "0px 3px 5px 1px #aab4be";
        }
        righttab.style.background='url(../img/renderimg.png) repeat';
        leftnavhover = 'rgb(243, 242, 242)'

        ss.deleteRule(1);
    }
}




var sections = document.getElementsByTagName('section');
for(var i=0;i<sections.length;i++){
    sections[i].addEventListener('click', closecolorpanel);
}


function closecolorpanel(){
    if (isopened == true)  {
        panelcolor.style.display = "none";
        isopened = false;
    }
}




// theme color panel END

// rightsidediv START 

// const api = `https://codeforces.com/api/user.info?handles=${Shashankmankala}`;

// fetch(api)
//         .then(response =>{
//             return response.json();
//         })
//         .then(data =>{
//             name.innerText = `Hello, ${data.result[0].handle}`;
//             currRating.innerText = `current rating : ${data.result[0].rating}`;
//             currRank.innerText = `current rank : ${data.result[0].rank}`;
//             maxRating.innerText = `max rating : ${data.result[0].maxRating}`;
//             maxRank.innerText = `max rank : ${data.result[0].maxRank}`;
//             if(!data.result[0].maxRating){
//                 currRating.innerText = `current rating : Unrated`;
//                 currRank.innerText = `current rank : 0`;
//                 maxRating.innerText = `max rating : Unrated`;
//                 maxRank.innerText = `max rank : 0`;
//             }
//         })

//  rightsidediv END 

var feedbackdiv=document.getElementById("feedbackdiv");
feedbackdiv.addEventListener('click',openfeedbackform);
function openfeedbackform(){
    window.open('Feedback.html','_self');
}
// Feedback btn
var righttab = document.getElementById("righttab");
righttab.addEventListener('click', closeanyopen);
function closeanyopen() {
    leftwindow.style.display = "none";
}
var leftwindow = document.getElementById("leftwindow");
var ham = document.getElementById("hamburger");
ham.addEventListener('click', openleftwindow);
function openleftwindow() {
    leftwindow.style.display = "block";
}

var closeleftwindow = document.getElementById("closeleftwindow");
closeleftwindow.addEventListener('click', closeleftwindowfun);
function closeleftwindowfun() {
    leftwindow.style.display = "none";
}
leftwinabout = document.getElementById("leftwinabout");
leftwinprojects = document.getElementById("leftwinprojects");
leftwinskills = document.getElementById("leftwinskills");
leftwinexper = document.getElementById("leftwinexper");
leftwinaward = document.getElementById("leftwinaward");
leftwincontact = document.getElementById("leftwincontact");


leftwinabout.addEventListener('click', () => {
    document.location.href = "#aboutt";
    leftwindow.style.display = "none";
})
leftwinprojects.addEventListener('click', () => {
    document.location.href = "#projects";
    leftwindow.style.display = "none";
})
leftwinskills.addEventListener('click', () => {
    document.location.href = "#skillss";
    leftwindow.style.display = "none";
})
leftwinexper.addEventListener('click', () => {
    document.location.href = "#exper";
    leftwindow.style.display = "none";
})
leftwinaward.addEventListener('click', () => {
    document.location.href = "#awardss";
    leftwindow.style.display = "none";
})
leftwincontact.addEventListener('click', () => {
    document.location.href = "#contactt";
    leftwindow.style.display = "none";
})

//left pole END
var leftabt = document.getElementById("labout");
var leftproj = document.getElementById("lproject");
var leftskil = document.getElementById("lskills");
var leftexp = document.getElementById("lexper");
var leftawa = document.getElementById("lawards");
var leftcont = document.getElementById("lcontact");
var leftresume = document.getElementById("lresume");

leftabt.addEventListener('mouseover', lactabtover, false);
leftabt.addEventListener('mouseout', lactabtout, false);
function lactabtover() {
    leftabt.setAttribute("style", `background-color: ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactabtout() {
    leftabt.setAttribute("style", "background-color:transparent;border-left:none;")
}

leftproj.addEventListener('mouseover', lactprojover, false);
leftproj.addEventListener('mouseout', lactprojout, false);
function lactprojover() {
    leftproj.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactprojout() {
    leftproj.setAttribute("style", "background-color:transparent;border-left:none;")
}

leftskil.addEventListener('mouseover', lactskilover, false);
leftskil.addEventListener('mouseout', lactskilout, false);
function lactskilover() {
    leftskil.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactskilout() {
    leftskil.setAttribute("style", "background-color:transparent;border-left:none;")
}

leftexp.addEventListener('mouseover', lactexpover, false);
leftexp.addEventListener('mouseout', lactexpout, false);
function lactexpover() {
    leftexp.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactexpout() {
    leftexp.setAttribute("style", "background-color:transparent;border-left:none;")
}
leftawa.addEventListener('mouseover', lactawaover, false);
leftawa.addEventListener('mouseout', lactawaout, false);
function lactawaover() {
    leftawa.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactawaout() {
    leftawa.setAttribute("style", "background-color:transparent;border-left:none;")
}
leftcont.addEventListener('mouseover', lactcontover, false);
leftcont.addEventListener('mouseout', lactcontout, false);
function lactcontover() {
    leftcont.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactcontout() {
    leftcont.setAttribute("style", "background-color:transparent;border-left:none;")
}

leftresume.addEventListener('mouseover', lactresumeover, false);
leftresume.addEventListener('mouseout', lactresumeout, false);
function lactresumeover() {
    leftresume.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function lactresumeout() {
    leftresume.setAttribute("style", "background-color:transparent;border-left:none;")
}

var secabt = document.getElementById("aboutt");
var secproj = document.getElementById("projects");
var secskil = document.getElementById("skillss");
var secexper = document.getElementById("exper");
var secaward = document.getElementById("awardss");
var seccont = document.getElementById("contactt");

secabt.addEventListener('mouseover', actabtover, false);
secabt.addEventListener('mouseout', actabtout, false);
function actabtover() {
    leftabt.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actabtout() {
    leftabt.setAttribute("style", "background-color:transparent;border-left:none;")
}

secproj.addEventListener('mouseover', actprojover, false);
secproj.addEventListener('mouseout', actprojout, false);
function actprojover() {
    leftproj.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actprojout() {
    leftproj.setAttribute("style", "background-color:transparent;border-left:none;")
}

secskil.addEventListener('mouseover', actskilover, false);
secskil.addEventListener('mouseout', actskilout, false);
function actskilover() {
    leftskil.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actskilout() {
    leftskil.setAttribute("style", "background-color:transparent;border-left:none;")
}

secexper.addEventListener('mouseover', actexpover, false);
secexper.addEventListener('mouseout', actexpout, false);
function actexpover() {
    leftexp.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actexpout() {
    leftexp.setAttribute("style", "background-color:transparent;border-left:none;")
}

secaward.addEventListener('mouseover', actawaover, false);
secaward.addEventListener('mouseout', actawaout, false);
function actawaover() {
    leftawa.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actawaout() {
    leftawa.setAttribute("style", "background-color:transparent;border-left:none;")
}

seccont.addEventListener('mouseover', actcontover, false);
seccont.addEventListener('mouseout', actcontout, false);
function actcontover() {
    leftcont.setAttribute("style", `background-color:  ${leftnavhover};border-left: 3px solid ${bdcolor};`)
}
function actcontout() {
    leftcont.setAttribute("style", "background-color:transparent;border-left:none;")
}

// Right drawer for programming profiles
// var overlayfull=document.getElementById("overlayfull");
// var rightdivbtn=document.getElementById("rightdivbtn");
// var rightsidediv=document.getElementById("rightsidediv");
// rightdivbtn.addEventListener('click',openrightdraw);
// var isrightdrawopen=false;
// function openrightdraw(){
//     if(isrightdrawopen){
//         overlayfull.style.display="block";
//         rightsidediv.setAttribute("style", "transform: translateX(0); z-index: 6");
//         isrightdrawopen=false;
//     }
//     else{
//         overlayfull.style.display="none";
//         rightsidediv.setAttribute("style", "transform: translateX(93%);");
//         isrightdrawopen=true;
//     }
// }




// Projects prs 
var prs1=document.getElementById("prs1");
var prs2=document.getElementById("prs2");
var prs3=document.getElementById("prs3");
var prs4=document.getElementById("prs4");
var prs5=document.getElementById("prs5");
var prs6=document.getElementById("prs6");
var prs7=document.getElementById("prs7");
var prsn1=document.getElementById("prsn1");
var prsn2=document.getElementById("prsn2");
var prsn3=document.getElementById("prsn3");

var prgifgif1=document.getElementById("prgifgif1");
var prgifgif2=document.getElementById("prgifgif2");
var prgifgif3=document.getElementById("prgifgif3");
var prgifgif4=document.getElementById("prgifgif4");
var prgifgif5=document.getElementById("prgifgif5");
// var prgifgif6=document.getElementById("prgifgif6");
var prgifgif7=document.getElementById("prgifgif7");
var prgifgifn0=document.getElementById("prgifgifn0");
var prgifgifn1=document.getElementById("prgifgifn1");
var prgifgifn2=document.getElementById("prgifgifn2");
var prgifgifn3=document.getElementById("prgifgifn3");


prsn2.addEventListener("mouseover",repgifn2);
prsn2.addEventListener("mouseout",repimgn2);
function repgifn2(){
    prgifgifn2.src="./img/easychat.gif";
}
function repimgn2(){
    prgifgifn2.src="./img/easychat.webp";
}

prsn1.addEventListener("mouseover",repgifn1);
prsn1.addEventListener("mouseout",repimgn1);
function repgifn1(){
    prgifgifn1.src="./img/portfolio.gif";
}
function repimgn1(){
    prgifgifn1.src="./img/p1.webp";
}

prsn0.addEventListener("mouseover",repgifn0);
prsn0.addEventListener("mouseout",repimgn0);
function repgifn0(){
    prgifgifn0.src="./img/playstore.gif";
}
function repimgn0(){
    prgifgifn0.src="./img/ps1.webp";
}

prs1.addEventListener("mouseover",repgif1);
prs1.addEventListener("mouseout",repimg1);
function repgif1(){
    prgifgif1.src="./img/fb.gif";
}
function repimg1(){
    prgifgif1.src="./img/f1.png";
}
prs2.addEventListener("mouseover",repgif2);
prs2.addEventListener("mouseout",repimg2);
function repgif2(){
    prgifgif2.src="./img/mp.gif";
}
function repimg2(){
    prgifgif2.src="./img/mp1.webp";
}
prs3.addEventListener("mouseover",repgif3);
prs3.addEventListener("mouseout",repimg3);
function repgif3(){
    prgifgif3.src="./img/coup.gif";
}
function repimg3(){
    prgifgif3.src="./img/c1.png";
}
prs4.addEventListener("mouseover",repgif4);
prs4.addEventListener("mouseout",repimg4);
function repgif4(){
    prgifgif4.src="./img/meals.gif";
}
function repimg4(){
    prgifgif4.src="./img/m1.webp";
}
prs5.addEventListener("mouseover",repgif5);
prs5.addEventListener("mouseout",repimg5);
function repgif5(){
    prgifgif5.src="./img/todo.gif";
}
function repimg5(){
    prgifgif5.src="./img/t1.webp";
}
prs7.addEventListener("mouseover",repgif7);
prs7.addEventListener("mouseout",repimg7);
function repgif7(){
    prgifgif7.src="./img/incometax.gif";
}
function repimg7(){
    prgifgif7.src="./img/i1.webp";
}
var sharebtn=document.getElementById("sharebtn");
sharebtn.addEventListener("mouseover",repgifcon);
sharebtn.addEventListener("mouseout",repimgcon);
function repgifcon(){
    sharebtn.src="./img/send.gif";
}
function repimgcon(){
    sharebtn.src="./img/send.png";
}


// n3
var titlen3 = document.getElementById("prpn3");
var gifn3 = document.getElementById("prgifn3");
var optionn3 = document.getElementById("proptionn3");
var hiddenn3 = document.getElementById("prshidonoffn3");
var unhiddenn3 = document.getElementById("prsonoffn3");
var closen3 = document.getElementById("closeoptn3");

titlen3.addEventListener('click', myFunctionn3);
gifn3.addEventListener('click', myFunctionn3);
optionn3.addEventListener('click', myFunctionn3);

function myFunctionn3() {
    hiddenn3.style.display = 'block';
    unhiddenn3.style.display = 'none';
}

closen3.addEventListener('click', myFunctionrn3);
function myFunctionrn3() {
    hiddenn3.style.display = 'none';
    unhiddenn3.style.display = 'block';
}

var viewprojn3 = document.getElementById("viewprojectn3");
viewprojn3.addEventListener('click', viewpn3);
function viewpn3() {
    window.open('https://public.tableau.com/app/profile/shashank.mankala/viz/RoadAccidents_16858089535950/Dashboard1?publish=yes', '_blank');
}
var viewrepn3 = document.getElementById("viewrepon3");
viewrepn3.addEventListener('click', viewrn3);
function viewrn3() {
    window.open('https://github.com/Shashank-mankala1/Road-Accidents-Dashboard', '_blank');
}
//---


// n2
var titlen2 = document.getElementById("prpn2");
var gifn2 = document.getElementById("prgifn2");
var optionn2 = document.getElementById("proptionn2");
var hiddenn2 = document.getElementById("prshidonoffn2");
var unhiddenn2 = document.getElementById("prsonoffn2");
var closen2 = document.getElementById("closeoptn2");

titlen2.addEventListener('click', myFunctionn2);
gifn2.addEventListener('click', myFunctionn2);
optionn2.addEventListener('click', myFunctionn2);

function myFunctionn2() {
    hiddenn2.style.display = 'block';
    unhiddenn2.style.display = 'none';
}

closen2.addEventListener('click', myFunctionrn2);
function myFunctionrn2() {
    hiddenn2.style.display = 'none';
    unhiddenn2.style.display = 'block';
}

var viewprojn2 = document.getElementById("viewprojectn2");
viewprojn2.addEventListener('click', viewpn2);
function viewpn2() {
    window.open('http://easychat.lovestoblog.com/', '_blank');
}
//---



// n1
var titlen1 = document.getElementById("prpn1");
var gifn1 = document.getElementById("prgifn1");
var optionn1 = document.getElementById("proptionn1");
var hiddenn1 = document.getElementById("prshidonoffn1");
var unhiddenn1 = document.getElementById("prsonoffn1");
var closen1 = document.getElementById("closeoptn1");

titlen1.addEventListener('click', myFunctionn1);
gifn1.addEventListener('click', myFunctionn1);
optionn1.addEventListener('click', myFunctionn1);

function myFunctionn1() {
    hiddenn1.style.display = 'block';
    unhiddenn1.style.display = 'none';
}

closen1.addEventListener('click', myFunctionrn1);
function myFunctionrn1() {
    hiddenn1.style.display = 'none';
    unhiddenn1.style.display = 'block';
}

var viewprojn1 = document.getElementById("viewprojectn1");
viewprojn1.addEventListener('click', viewpn1);
function viewpn1() {
    window.open('https://shashank-mankala1.github.io/portfolio/', '_blank');
}
var viewrepn1 = document.getElementById("viewrepon1");
viewrepn1.addEventListener('click', viewrn1);
function viewrn1() {
    window.open('https://github.com/Shashank-mankala1/portfolio', '_blank');
}
//---
// n0
var titlen0 = document.getElementById("prpn0");
var gifn0 = document.getElementById("prgifn0");
var optionn0 = document.getElementById("proptionn0");
var hiddenn0 = document.getElementById("prshidonoffn0");
var unhiddenn0 = document.getElementById("prsonoffn0");
var closen0 = document.getElementById("closeoptn0");

titlen0.addEventListener('click', myFunctionn0);
gifn0.addEventListener('click', myFunctionn0);
optionn0.addEventListener('click', myFunctionn0);

function myFunctionn0() {
    hiddenn0.style.display = 'block';
    unhiddenn0.style.display = 'none';
}

closen0.addEventListener('click', myFunctionrn0);
function myFunctionrn0() {
    hiddenn0.style.display = 'none';
    unhiddenn0.style.display = 'block';
}

// var viewprojn0 = document.getElementById("viewprojectn0");
// viewprojn0.addEventListener('click', viewpn0);
// function viewpn0() {
//     window.open('https://shashank-mankala1.github.io/portfolio/', '_blank');
// }
var viewrepn0 = document.getElementById("viewrepon0");
viewrepn0.addEventListener('click', viewrn0);
function viewrn0() {
    window.open('https://github.com/Shashank-mankala1/Google-Play-Store-Analysis', '_blank');
}
//---
// 1
var title1 = document.getElementById("prp1");
var gif1 = document.getElementById("prgif1");
var option1 = document.getElementById("proption1");
var hidden1 = document.getElementById("prshidonoff1");
var unhidden1 = document.getElementById("prsonoff1");
var close1 = document.getElementById("closeopt1");

title1.addEventListener('click', myFunction1);
gif1.addEventListener('click', myFunction1);
option1.addEventListener('click', myFunction1);

function myFunction1() {
    hidden1.style.display = 'block';
    unhidden1.style.display = 'none';
    // hidden1.style.height='100%';
}

close1.addEventListener('click', myFunctionr1);
function myFunctionr1() {
    hidden1.style.display = 'none';
    unhidden1.style.display = 'block';
}

var viewproj1 = document.getElementById("viewproject1");
viewproj1.addEventListener('click', viewp1);
function viewp1() {
    window.open('fbreason.html', '_blank');
}
var viewrep1 = document.getElementById("viewrepo1");
viewrep1.addEventListener('click', viewr1);
function viewr1() {
    window.open('https://github.com/Shashank-mankala1/facebookselfchallenge', '_blank');
}
// ---
// 2
var title2 = document.getElementById("prp2");
var gif2 = document.getElementById("prgif2");
var option2 = document.getElementById("proption2");
var hidden2 = document.getElementById("prshidonoff2");
var unhidden2 = document.getElementById("prsonoff2");
var close2 = document.getElementById("closeopt2");

title2.addEventListener('click', myFunction2);
gif2.addEventListener('click', myFunction2);
option2.addEventListener('click', myFunction2);

function myFunction2() {
    hidden2.style.display = 'block';
    unhidden2.style.display = 'none';
}

close2.addEventListener('click', myFunctionr2);
function myFunctionr2() {
    hidden2.style.display = 'none';
    unhidden2.style.display = 'block';
}

var viewproj2 = document.getElementById("viewproject2");
viewproj2.addEventListener('click', viewp2);
function viewp2() {
    window.open('https://shashank-mankala1.github.io/musicplayer/', '_blank');
}
var viewrep2 = document.getElementById("viewrepo2");
viewrep2.addEventListener('click', viewr2);
function viewr2() {
    window.open('https://github.com/Shashank-mankala1/musicplayer', '_blank');
}
// ---
// 3
var title3 = document.getElementById("prp3");
var gif3 = document.getElementById("prgif3");
var option3 = document.getElementById("proption3");
var hidden3 = document.getElementById("prshidonoff3");
var unhidden3 = document.getElementById("prsonoff3");
var close3 = document.getElementById("closeopt3");

title3.addEventListener('click', myFunction3);
gif3.addEventListener('click', myFunction3);
option3.addEventListener('click', myFunction3);

function myFunction3() {
    hidden3.style.display = 'block';
    unhidden3.style.display = 'none';
}

close3.addEventListener('click', myFunctionr3);
function myFunctionr3() {
    hidden3.style.display = 'none';
    unhidden3.style.display = 'block';
}

var viewproj3 = document.getElementById("viewproject3");
viewproj3.addEventListener('click', viewp3);
function viewp3() {
    window.open('https://shashank-mankala1.github.io/coronaliveupdate/', '_blank');
}
var viewrep3 = document.getElementById("viewrepo3");
viewrep3.addEventListener('click', viewr3);
function viewr3() {
    window.open('https://github.com/Shashank-mankala1/coronaliveupdate', '_blank');
}
// ---
// 4
var title4 = document.getElementById("prp4");
var gif4 = document.getElementById("prgif4");
var option4 = document.getElementById("proption4");
var hidden4 = document.getElementById("prshidonoff4");
var unhidden4 = document.getElementById("prsonoff4");
var close4 = document.getElementById("closeopt4");

title4.addEventListener('click', myFunction4);
gif4.addEventListener('click', myFunction4);
option4.addEventListener('click', myFunction4);

function myFunction4() {
    hidden4.style.display = 'block';
    unhidden4.style.display = 'none';
}

close4.addEventListener('click', myFunctionr4);
function myFunctionr4() {
    hidden4.style.display = 'none';
    unhidden4.style.display = 'block';
}

var viewproj4 = document.getElementById("viewproject4");
viewproj4.addEventListener('click', viewp4);
function viewp4() {
    window.open('https://shashank-mankala1.github.io/ShashankMeals/', '_blank');
}
var viewrep4 = document.getElementById("viewrepo4");
viewrep4.addEventListener('click', viewr4);
function viewr4() {
    window.open('https://github.com/Shashank-mankala1/ShashankMeals', '_blank');
}
// ---
// 5
var title5 = document.getElementById("prp5");
var gif5 = document.getElementById("prgif5");
var option5 = document.getElementById("proption5");
var hidden5 = document.getElementById("prshidonoff5");
var unhidden5 = document.getElementById("prsonoff5");
var close5 = document.getElementById("closeopt5");

title5.addEventListener('click', myFunction5);
gif5.addEventListener('click', myFunction5);
option5.addEventListener('click', myFunction5);

function myFunction5() {
    hidden5.style.display = 'block';
    unhidden5.style.display = 'none';
}

close5.addEventListener('click', myFunctionr5);
function myFunctionr5() {
    hidden5.style.display = 'none';
    unhidden5.style.display = 'block';
}

var viewproj5 = document.getElementById("viewproject5");
viewproj5.addEventListener('click', viewp5);
function viewp5() {
    window.open('https://shashank-mankala1.github.io/taskschecklist/', '_blank');
}
var viewrep5 = document.getElementById("viewrepo5");
viewrep5.addEventListener('click', viewr5);
function viewr5() {
    window.open('https://github.com/Shashank-mankala1/taskschecklist', '_blank');
}
// ---
// 6
var title6 = document.getElementById("prp6");
var gif6 = document.getElementById("prgif6");
var option6 = document.getElementById("proption6");
var hidden6 = document.getElementById("prshidonoff6");
var unhidden6 = document.getElementById("prsonoff6");
var close6 = document.getElementById("closeopt6");

title6.addEventListener('click', myFunction6);
gif6.addEventListener('click', myFunction6);
option6.addEventListener('click', myFunction6);

function myFunction6() {
    hidden6.style.display = 'block';
    unhidden6.style.display = 'none';
}

close6.addEventListener('click', myFunctionr6);
function myFunctionr6() {
    hidden6.style.display = 'none';
    unhidden6.style.display = 'block';
}

// var viewproj6 = document.getElementById("viewproject6");
// viewproj6.addEventListener('click', viewp6);
// function viewp6() {
//     window.open('ERSpythonreason.html', '_blank');
// }
var viewrep6 = document.getElementById("viewrepo6");
viewrep6.addEventListener('click', viewr6);
function viewr6() {
    window.open('https://github.com/Shashank-mankala1/Employee-Recruitment-System-Python', '_blank');
}
// ---
// 7
var title7 = document.getElementById("prp7");
var gif7 = document.getElementById("prgif7");
var option7 = document.getElementById("proption7");
var hidden7 = document.getElementById("prshidonoff7");
var unhidden7 = document.getElementById("prsonoff7");
var close7 = document.getElementById("closeopt7");

title7.addEventListener('click', myFunction7);
gif7.addEventListener('click', myFunction7);
option7.addEventListener('click', myFunction7);

function myFunction7() {
    hidden7.style.display = 'block';
    unhidden7.style.display = 'none';
}

close7.addEventListener('click', myFunctionr7);
function myFunctionr7() {
    hidden7.style.display = 'none';
    unhidden7.style.display = 'block';
}

var viewproj7 = document.getElementById("viewproject7");
viewproj7.addEventListener('click', viewp7);
function viewp7() {
    window.open('https://shashank-mankala1.github.io/Income_tax/', '_blank');
}
var viewrep7 = document.getElementById("viewrepo7");
viewrep7.addEventListener('click', viewr7);
function viewr7() {
    window.open('https://github.com/Shashank-mankala1/Income_tax', '_blank');
}
// ---

var viewcareeressmicrosoft= document.getElementById("certicareeressmicrosoft");
var viewsqlleetcode= document.getElementById("certisqlleetcode");
var viewcertiadvsql= document.getElementById("certiadvsql");
var viewmongo= document.getElementById("certimongo");
var viewgfg= document.getElementById("certigfg");
var viewsnackdown = document.getElementById("certisnackdown");
var viewjumpstart = document.getElementById("certijumpstart");
var viewmodern = document.getElementById("certimodern");
var viewcrash = document.getElementById("certicrash");
var viewproblemSol = document.getElementById("certiproblemsol");


viewcareeressmicrosoft.addEventListener('click', ccareermicrosoft);
viewsqlleetcode.addEventListener('click', csqlleetcode);
viewcertiadvsql.addEventListener('click', cadvsql);
viewmongo.addEventListener('click', cmongo);
viewgfg.addEventListener('click', cgfg);
viewsnackdown.addEventListener('click', csnackdown);
viewjumpstart.addEventListener('click', cjumpstart);
viewmodern.addEventListener('click', cmodern);
viewcrash.addEventListener('click', ccrash);
viewproblemSol.addEventListener('click', cproblem);

function ccareermicrosoft() {
    window.open('https://drive.google.com/file/d/1aVLrxgY3tWsWoDRguyGYdCzodlVhT2xB/view?usp=sharing', '_blank');
}

function csqlleetcode() {
    window.open('./img/Top_SQL_50.gif', '_blank');
}

function cadvsql() {
    window.open('https://drive.google.com/file/d/1-rVzff0koq_dlMpteJs6gIu8hm6aAoEp/view?usp=sharing', '_blank');
}
function cmongo() {
    window.open('https://drive.google.com/file/d/1wn9kKFqMDsFP6dg7bRUU9x-FhNdrATN-/view?usp=sharing', '_blank');
}
function cgfg() {
    window.open('https://drive.google.com/file/d/1ekCK86dcg00hYUSau5H2xyLbDseozH6Z/view?usp=sharing', '_blank');
}
function csnackdown() {
    window.open('https://drive.google.com/file/d/1ag9XE4Rc2Ob47I7PstDIZb_ynI4Hl_Fp/view?usp=sharing', '_blank');
}
function cjumpstart() {
    window.open('https://drive.google.com/file/d/1XuHZXW10OXnKD5v8psMz8CD2RiFf4nCN/view?usp=sharing', '_blank');
}
function cmodern() {
    window.open('https://drive.google.com/file/d/1yOh00RgIk7a5_83aBusAq7A7YKlZDJ-l/view?usp=sharing', '_blank');
}
function ccrash() {
    window.open('https://drive.google.com/file/d/1CXRi0UTb0iYy9zjcIYfxJE12RDMokA1j/view?usp=sharing', '_blank');
}
function cproblem() {
    window.open('https://www.hackerrank.com/certificates/2bff8c03c48b', '_blank');
}


//share

var sharebtn = document.getElementById("sharebtn");
var shareask = document.getElementById("shareask");
var shareclosei = document.getElementById("shareclosei");
var shareoptqr = document.getElementById("shareoptqr");
var shareoptlink = document.getElementById("shareoptlink");
var sharelinkcontainer = document.getElementById("sharelinkcontainer");
var sharelinkcontainer2 = document.getElementById("sharelinkcontainer2");
var sharelinkcontainer3 = document.getElementById("sharelinkcontainer3");

sharebtn.addEventListener('click', openshareopts);
shareclosei.addEventListener('click', closeshareopts);

function openshareopts() {
    setSharelinks();
    shareask.style.display = "block";
    sharebtn.style.display = "none";
    sharelinkcontainer.style.display = "flex";
    sharelinkcontainer2.style.display = "none";
    sharelinkcontainer3.style.display = "none";
}
function closeshareopts() {
    shareask.style.display = "none";
    sharebtn.style.display = "block";
    sharelinkcontainer2.style.display = "none";
    sharelinkcontainer3.style.display = "none";
}

shareoptqr.addEventListener('click', () => {
    sharelinkcontainer.style.display = "none";
    sharelinkcontainer2.style.display = "flex";
    sharelinkcontainer3.style.display = "none";
})
shareoptlink.addEventListener('click', () => {
    sharelinkcontainer.style.display = "none";
    sharelinkcontainer2.style.display = "none";
    sharelinkcontainer3.style.display = "flex";
})

var socialwhtqr = document.getElementById("socialwhtqr");
var socialfbqr = document.getElementById("socialfbqr");
var socialmaiqr = document.getElementById("socialmaiqr");
var sociallinqr = document.getElementById("sociallinqr");
var socialwhtlink = document.getElementById("socialwhtlink");
var socialfblink = document.getElementById("socialfblink");
var socialmailink = document.getElementById("socialmailink");
var sociallinlink = document.getElementById("sociallinlink");
var qrcodeimg = document.getElementById("qrcodeimg");

function socialwindowscreen(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=yes,toolbar=yes,status=yes,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url, "NewWindow", params);
}
function setSharelinks() {
    var pageURL = encodeURIComponent("https://shashank-mankala1.github.io/portfolio/");
    // var tweet = encodeURIComponent($("meta[property=]"))

    var imgURL = encodeURIComponent("https://drive.google.com/file/d/1BAB-UlHK7BsZkCo5Cx5pQX-ugf2bcAXr/view?usp=sharing");

    socialwhtqr.addEventListener('click', () => {
        url = 'https://wa.me/?text=' + imgURL;
        socialwindowscreen(url);
    })
    socialfbqr.addEventListener('click', () => {
        url = "https://www.facebook.com/sharer.php?u=" + imgURL;
        socialwindowscreen(url);
    })
    socialmaiqr.addEventListener('click', () => {
        url = "mailto:?subject=Portfolio_QRCode&body=Scan QR code from here " + imgURL;
        socialwindowscreen(url);
    })
    sociallinqr.addEventListener('click', () => {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + imgURL;
        socialwindowscreen(url);
    })



    socialwhtlink.addEventListener('click', () => {
        url = "https://wa.me/?text=" + pageURL;
        socialwindowscreen(url);
    })
    socialfblink.addEventListener('click', () => {
        url = "https://www.facebook.com/sharer.php?u=" + pageURL;
        socialwindowscreen(url);
    })
    socialmailink.addEventListener('click', () => {
        url = "mailto:?subject=Portfolio_Link&body=Check out this site " + pageURL;
        socialwindowscreen(url);
    })
    sociallinlink.addEventListener('click', () => {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageURL;
        socialwindowscreen(url);
    })


}


//small-start
var sshareimg = document.getElementById("sshareimg");
var sshareimgin = document.getElementById("sshareimgin");
var sshareoptsdiv = document.getElementById("sshareoptsdiv");
var sshareoptwht = document.getElementById("sshareoptwht");
var sshareoptmail = document.getElementById("sshareoptmail");
var sshareoptlink = document.getElementById("sshareoptlink");
var sshareoptfb = document.getElementById("sshareoptfb");
//small-end

sshareimg.addEventListener('click', () => {
    setSharelinkssmall();
    sshareoptsdiv.style.display = "flex";
    sshareimg.style.display = "none";
})
sshareimgin.addEventListener('click', () => {
    sshareoptsdiv.style.display = "none";
    sshareimg.style.display = "block";
})

function socialwindowscreensmall(url) {
    var left = (screen.width - 70) / 2;
    var top = (screen.height - 70) / 2;
    var width = (screen.width) * 0.75;
    var height = (screen.height) * 0.5;
    var params = `menubar=yes,toolbar=yes,status=yes,width=${width},height=${height},top=${top},left=${left}`;
    window.open(url, "NewWindow", params);
}
function setSharelinkssmall() {
    var pageURL = encodeURIComponent("https://shashank-mankala1.github.io/portfolio/");
    sshareoptwht.addEventListener('click', () => {
        url = "https://wa.me/?text=" + pageURL;
        socialwindowscreensmall(url);
    })
    sshareoptfb.addEventListener('click', () => {
        url = "https://www.facebook.com/sharer.php?u=" + pageURL;
        socialwindowscreensmall(url);
    })
    sshareoptmail.addEventListener('click', () => {
        url = "mailto:?subject=Portfolio_Link&body=Check out this site " + pageURL;
        socialwindowscreensmall(url);
    })
    sshareoptlink.addEventListener('click', () => {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageURL;
        socialwindowscreensmall(url);
    })
}


//very small screen display off
var fullpage = document.querySelector(".fullpage");
window.onload = function checkscreenwidth() {
    if (screen.width < 368) {
        fullpage.style.display = "none";
        setTimeout(() => { alert("Please open this site on another device as your screen size is very small to display"); }, 500);
    }
}

