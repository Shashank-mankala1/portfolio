var bdcolor = "#2196f3";
var leftnavhover = "rgb(243, 242, 242)";

var typed = new Typed(".txtbg", {
  strings: ["Wow is the one"],
  typeSpeed: 50,
  loop: false,
  onComplete: function (self) {
    self.cursor.remove();
  },
});
setTimeout(() => {
  var typed = new Typed(".typing", {
    strings: ["I aim for."],
    typeSpeed: 50,
    loop: false,
  });
}, 1450);

// Theme color panel optimization

const coloronbtn = document.getElementById("panelbtncolor");
const panelcolors = [
    document.getElementById("colorradio0"),
    document.getElementById("colorradio1"),
    document.getElementById("colorradio2"),
    document.getElementById("colorradio3"),
    document.getElementById("colorradio4"),
    document.getElementById("colorradio5"),
];
const sitethemebg = document.getElementsByClassName("inthemeb");
const sitethemef = document.getElementsByClassName("inthemef");
const prtitle = document.getElementsByClassName("prtitle");
const expercardtitle = document.getElementsByClassName("expercardtitle");
const undlinecolor = document.querySelector(".txtbg");

function setcolor() {
    panelcolors.forEach((panel, idx) => {
        if (panel.checked) {
            coloronbtn.style.backgroundColor = panel.value;
            for (let i = 0; i < sitethemebg.length; i++) {
                sitethemebg[i].style.backgroundColor = panel.value;
                sitethemebg[i].style.color = (idx === 1 || idx === 3 || idx === 4) ? "black" : "white";
            }
            for (let i = 0; i < sitethemef.length; i++) {
                sitethemef[i].style.color = panel.value;
            }
            if (idx === 1) {
                for (let i = 0; i < prtitle.length; i++) {
                    prtitle[i].style.textShadow = "0 0 black";
                }
            }
            if (idx === 3) {
                for (let i = 0; i < expercardtitle.length; i++) {
                    expercardtitle[i].style.textShadow = "0.5px 0px 0px #7a7a7a";
                }
            }
            undlinecolor.style.textDecorationColor = panel.value;
            bdcolor = panel.value;
        }
    });
}

const panelbtn = document.getElementById("panelbtn");
const panelcolor = document.getElementById("panelcolorsdiv");
let isopened = false;
panelbtn.addEventListener("click", () => {
    panelcolor.style.display = isopened ? "none" : "flex";
    isopened = !isopened;
});

// Dark mode

const darkmodebg = document.getElementsByClassName("darkmodebg");
const darkmodefont = document.getElementsByClassName("darkmodefont");
const darkmodeshadow = document.getElementsByClassName("darkmodeshadow");
const darkmodebgcolorpanel = document.getElementsByClassName("darkmodebgcolorpanel");
const darkmodecheckbox = document.getElementById("darkmodecheckbox");
const righttabElem = document.getElementsByClassName("righttab")[0];
const ss = document.styleSheets[0];

darkmodecheckbox.addEventListener("click", () => {
    const isDark = darkmodecheckbox.checked;
    const bgColor = isDark ? "black" : "white";
    const panelBgColor = isDark ? "black" : "#d2cecd";
    const fontColor = isDark ? "white" : "black";
    const shadowColor = isDark ? "0px 3px 5px 1px #363535" : "0px 3px 5px 1px #aab4be";
    const rightTabBg = isDark ? "url(./img/renderimgdark.png) repeat" : "url(./img/renderimg.png) repeat";
    leftnavhover = isDark ? "rgb(92 89 89)" : "rgb(243, 242, 242)";

    Array.from(darkmodebg).forEach(el => el.style.backgroundColor = bgColor);
    Array.from(darkmodebgcolorpanel).forEach(el => el.style.backgroundColor = panelBgColor);
    Array.from(darkmodefont).forEach(el => el.style.color = fontColor);
    Array.from(darkmodeshadow).forEach(el => el.style.boxShadow = shadowColor);

    if (righttabElem) righttabElem.style.background = rightTabBg;

    if (isDark) {
        ss.insertRule("*::selection { color: black !important; background: white !important; }", 1);
    } else {
        ss.deleteRule(1);
    }
});

[...document.getElementsByTagName("section"), ...document.getElementsByClassName("leftbar")].forEach(el => {
    el.addEventListener("click", () => {
        if (isopened) {
            panelcolor.style.display = "none";
            isopened = false;
        }
    });
});

// theme color panel END


const righttab = document.getElementById("righttab");
const leftwindow = document.getElementById("leftwindow");
const ham = document.getElementById("hamburger");
const closeleftwindow = document.getElementById("closeleftwindow");

righttab.addEventListener("click", () => leftwindow.style.display = "none");
ham.addEventListener("click", () => leftwindow.style.display = "block");
closeleftwindow.addEventListener("click", () => leftwindow.style.display = "none");

const leftWinLinks = [
    { id: "leftwinabout", target: "#aboutt" },
    { id: "leftwinprojects", target: "#projects" },
    { id: "leftwinskills", target: "#skillss" },
    { id: "leftwinexper", target: "#exper" },
    { id: "leftwinaward", target: "#awardss" },
    { id: "leftwincontact", target: "#contactt" }
];

leftWinLinks.forEach(link => {
    const elem = document.getElementById(link.id);
    if (elem) {
        elem.addEventListener("click", () => {
            document.location.href = link.target;
            leftwindow.style.display = "none";
        });
    }
});

//left pole END

const leftNavItems = [{ id: "labout" }, { id: "lproject" }, { id: "lskills" }, { id: "lexper" }, { id: "lawards" }, { id: "lcontact" }, { id: "lresume" }];

leftNavItems.forEach(item => {
    const elem = document.getElementById(item.id);
    if (!elem) return;
    elem.addEventListener("mouseover", () => {
        elem.setAttribute(
            "style",
            `background-color: ${leftnavhover};border-left: 3px solid ${bdcolor};`
        );
    }, false);
    elem.addEventListener("mouseout", () => {
        elem.setAttribute(
            "style",
            "background-color:transparent;border-left:none;"
        );
    }, false);
});

const sectionToLeftNav = [
    { sectionId: "aboutt", leftNavId: "labout" },
    { sectionId: "projects", leftNavId: "lproject" },
    { sectionId: "skillss", leftNavId: "lskills" },
    { sectionId: "exper", leftNavId: "lexper" },
    { sectionId: "awardss", leftNavId: "lawards" },
    { sectionId: "contactt", leftNavId: "lcontact" }
];

sectionToLeftNav.forEach(({ sectionId, leftNavId }) => {
    const sectionElem = document.getElementById(sectionId);
    const leftNavElem = document.getElementById(leftNavId);
    if (!sectionElem || !leftNavElem) return;

    sectionElem.addEventListener("mouseover", () => {
        leftNavElem.setAttribute(
            "style",
            `background-color: ${leftnavhover};border-left: 3px solid ${bdcolor};`
        );
    }, false);

    sectionElem.addEventListener("mouseout", () => {
        leftNavElem.setAttribute(
            "style",
            "background-color:transparent;border-left:none;"
        );
    }, false);
});


// Projects prs
const hoverMappings = [
    { elemId: "prs1", imgId: "prgifgif1", gifSrc: "./img/fb.gif", imgSrc: "./img/f1.png" },
    { elemId: "prs2", imgId: "prgifgif2", gifSrc: "./img/mp.gif", imgSrc: "./img/mp1.webp" },
    { elemId: "prs3", imgId: "prgifgif3", gifSrc: "./img/coup.gif", imgSrc: "./img/c1.png" },
    { elemId: "prs5", imgId: "prgifgif5", gifSrc: "./img/todo.gif", imgSrc: "./img/t1.webp" },
    { elemId: "prsn0", imgId: "prgifgifn0", gifSrc: "./img/playstore.gif", imgSrc: "./img/ps1.webp" },
    { elemId: "prsn1", imgId: "prgifgifn1", gifSrc: "./img/portfolio.gif", imgSrc: "./img/p1.webp" },
    { elemId: "prsn2", imgId: "prgifgifn2", gifSrc: "./img/easychat.gif", imgSrc: "./img/easychat.webp" }
];

hoverMappings.forEach(({ elemId, imgId, gifSrc, imgSrc }) => {
    const elem = document.getElementById(elemId);
    const img = document.getElementById(imgId);
    if (elem && img) {
        elem.addEventListener("mouseover", () => { img.src = gifSrc; });
        elem.addEventListener("mouseout", () => { img.src = imgSrc; });
    }
});

// Optimized project show/hide logic

const projectConfigs = [
    { prefix: "n8" }, { prefix: "n7" }, { prefix: "n6" }, { prefix: "n5" }, { prefix: "n4" },
    { prefix: "n3" }, { prefix: "n2" }, { prefix: "n1" }, { prefix: "n0" },
    { prefix: "1" }, { prefix: "2" }, { prefix: "3" }, { prefix: "5" }, { prefix: "6" }
];

projectConfigs.forEach(cfg => {
    const p = cfg.prefix;
    
    const title = document.getElementById(`prp${p}`) || document.getElementById(`prpn${p}`);
    const gif = document.getElementById(`prgif${p}`) || document.getElementById(`prgifn${p}`);
    const option = document.getElementById(`proption${p}`) || document.getElementById(`proptionn${p}`);
    const hidden = document.getElementById(`prshidonoff${p}`) || document.getElementById(`prshidonoffn${p}`);
    const unhidden = document.getElementById(`prsonoff${p}`) || document.getElementById(`prsonoffn${p}`);
    const close = document.getElementById(`closeopt${p}`) || document.getElementById(`closeoptn${p}`);
    const pryear = document.getElementById(`pryear${p}`) || document.getElementById(`pryearn${p}`);

    if (title && gif && option && hidden && unhidden && close && pryear) {
        const showFn = () => {
            hidden.style.display = "block";
            unhidden.style.display = "none";
            pryear.style.display = "block";
            pryear.style.display = "none";
        };
        const hideFn = () => {
            hidden.style.display = "none";
            unhidden.style.display = "block";
            pryear.style.display = "none";
            pryear.style.display = "block";
        };
        title.addEventListener("click", showFn);
        gif.addEventListener("click", showFn);
        option.addEventListener("click", showFn);
        close.addEventListener("click", hideFn);
    }
}
);

// -- Project

function viewproject(name) {
  var projectdict = {
    REPO_TUTOR: "https://github.com/Shashank-mankala1/tutormind",
    PR_TUTOR: "https://tutormindai.streamlit.app/",

    PR_HRTPDT: "https://shashank-mankala1.github.io/Heart-Attack-Prediction/",
    REPO_HRTPDT: "https://github.com/Shashank-mankala1/Heart-Attack-Prediction",
    ART_HRTPDT: "https://python.plainenglish.io/building-a-chatbot-dialogflow-fastapi-and-github-in-action-33f663578f79",
    MP4_HRTPDT: "https://drive.google.com/file/d/1GeRRJuizv08VJ1toyAkvEPiw79ZzVRvZ/view?usp=sharing",

    REPO_CRYP: "https://github.com/Shashank-mankala1/realtimecryptotradingdashboard",
    ART_CRYP: "https://medium.com/@shashankmankala/building-a-real-time-crypto-trading-pipeline-with-docker-and-python-8b49cd526269",

    REPO_DIAB: "https://github.com/Shashank-mankala1/diabetes-prediction-project",
    ART_DIAB: "https://medium.com/@shashankmankala/building-a-diabetes-prediction-system-a-step-by-step-guide-a293e4b9a9fd",

    PR_CHTBT: "https://shashank-mankala1.github.io/chatbot/",
    REPO_CHTBT: "https://github.com/Shashank-mankala1/chatbot",
    ART_CHTBT: "https://python.plainenglish.io/building-a-chatbot-dialogflow-fastapi-and-github-in-action-33f663578f79",
    MP4_CHTBT: "https://drive.google.com/file/d/1GeRRJuizv08VJ1toyAkvEPiw79ZzVRvZ/view?usp=sharing",

    PR_ROADDASH: "https://public.tableau.com/app/profile/shashank.mankala/viz/RoadAccidents_16858089535950/Dashboard1?publish=yes",
    REPO_ROADDASH: "https://github.com/Shashank-mankala1/Road-Accidents-Dashboard",

    PR_EASYCHAT: "http://easychat.lovestoblog.com/",

    PR_PORTFOLIO: "https://shashank-mankala1.github.io/portfolio/",
    REPO_PORTFOLIO: "https://github.com/Shashank-mankala1/portfolio",

    REPO_PLAYSTORE: "https://github.com/Shashank-mankala1/Google-Play-Store-Analysis",

    REPO_FACEBOOK: "https://github.com/Shashank-mankala1/facebookselfchallenge",

    PR_MUSICPLAYER: "https://shashank-mankala1.github.io/musicplayer/",
    REPO_MUSICPLAYER: "https://github.com/Shashank-mankala1/musicplayer",

    PR_CORONAUPDT: "https://shashank-mankala1.github.io/coronaliveupdate/",
    REPO_CORONAUPDT: "https://github.com/Shashank-mankala1/coronaliveupdate",

    PR_MUSICPLAYER: "https://shashank-mankala1.github.io/musicplayer/",
    REPO_MUSICPLAYER: "https://github.com/Shashank-mankala1/musicplayer",

    PR_MEALSWEB: "https://shashank-mankala1.github.io/ShashankMeals/",
    REPO_MEALSWEB: "https://github.com/Shashank-mankala1/ShashankMeals",

    PR_TODO: "https://shashank-mankala1.github.io/taskschecklist/",
    REPO_TODO: "https://github.com/Shashank-mankala1/taskschecklist",

    REPO_EMS: "https://github.com/Shashank-mankala1/Employee-Recruitment-System-Python",

    PR_ITWEB: "https://shashank-mankala1.github.io/Income_tax/",
    REPO_ITWEB: "https://github.com/Shashank-mankala1/Income_tax",
  };
  window.open(projectdict[name], "_blank");
}

// ---
var pageopendict = {
  mail: "mailto:shashankmankala.5@gmail.com",
  linkedin: "https://www.linkedin.com/in/shashankmankala/",
  github: "https://github.com/Shashank-mankala1",
  medium: "https://medium.com/@shashankmankala",
  frugaltesting: "https://frugaltesting.com/",
  coursera: "https://www.coursera.org/",
  lpu: "https://www.lpu.in/",
  shadowfax: "https://www.shadowfax.in/",
  UB: "https://www.buffalo.edu/",
};

function pageOpen(page) {
  window.open(pageopendict[page], "_blank");
}

//---

// Skill data
const skillSections = [
  {
    heading: "Languages",
    skills: [
      { name: "Python", img: "img/python.png", dots: 5 },
      { name: "C++", img: "img/c++.png", dots: 5 },
      { name: "R programming", img: "img/Rlogo.png", dots: 5 },
      { name: "HTML", img: "img/html.png", dots: 5 },
      { name: "CSS", img: "img/css.png", dots: 5 },
      { name: "JavaScript", img: "img/js.png", dots: 4 },
      { name: "Matlab", img: "img/MATLAB.jpg", dots: 4 },
      { name: "Java", img: "img/java.png", dots: 3 }
    ]
  },
  {
    heading: "Backend",
    skills: [
      { name: "MySQL", img: "img/mysql.png", dots: 5 },
      { name: "Google Firebase", img: "img/firebase.png", dots: 5 },
      { name: "MongoDB", img: "img/mongodb.png", dots: 4 },
      { name: "GraphDB", img: "img/graphdb.png", dots: 4 },
      { name: "PHP", img: "img/php.png", dots: 4 },
      { name: "Node Js", img: "img/nodejs.png", dots: 3 }
    ]
  },
  {
    heading: "Tools",
    skills: [
      { name: "LangChain", img: "img/langchain.png", dots: 0 },
      { name: "Hugging Face", img: "img/huggingface.png", dots: 0 },
      { name: "Streamlit", img: "img/streamlit.jpg", dots: 0 },
      { name: "Docker", img: "img/docker.png", dots: 0 },
      { name: "DagsHub", img: "img/dagshub.png", dots: 0 },
      { name: "Apache Spark", img: "img/spark.png", dots: 0 },
      { name: "Apache Kafka", img: "img/kafka.png", dots: 0 },
      { name: "SPSS", img: "img/spss.png", dots: 0 },
      { name: "Tableau", img: "img/Tableau.png", dots: 0 },
      { name: "Power BI", img: "img/powerbi.png", dots: 0 }
    ]
  },
  {
    heading: "Cloud",
    skills: [
      { name: "Google Cloud", img: "img/gcp.png", dots: 4 },
      { name: "AWS", img: "img/aws.png", dots: 4 },
      { name: "Snowflake", img: "img/snowflake.png", dots: 3 },
      { name: "Databricks", img: "img/databricks.png", dots: 3 }
    ]
  }
];

// Rendering Logic
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.skillscontent');

  skillSections.forEach(section => {
    const sectionTemplate = document.getElementById('skill-section-template').content.cloneNode(true);
    sectionTemplate.querySelector('.typeheading p').textContent = section.heading;

    const cardsDiv = sectionTemplate.querySelector('.skillcards');

    section.skills.forEach(skill => {
      const cardTemplate = document.getElementById('skill-card-template').content.cloneNode(true);
      const imgTag = cardTemplate.querySelector('img');
      imgTag.src = skill.img;
      imgTag.alt = skill.name;

      cardTemplate.querySelector('h2').textContent = skill.name;

      const dotsDiv = cardTemplate.querySelector('.skilldots');
      if (skill.dots > 0) {
        for (let i = 0; i < 5; i++) {
          const dot = document.createElement('span');
          dot.className = 'dot' + (i < skill.dots ? ' filled' : '');
          dotsDiv.appendChild(dot);
        }
      }

      cardsDiv.appendChild(cardTemplate);
    });

    container.appendChild(sectionTemplate);
  });
});


const awards = [
  {
    title: 'Data Analytics Essentials by Cisco',
    type: 'Certificate of Completion | Oct 2023',
    details: ['Completed with certification via Microsoft & LinkedIn Learning.'],
    onclick: "viewCertificate('DAECISCO')"
  },
  {
    title: 'Python and SQL for Data Science',
    type: 'Certificate of Excellence | Sep 2023',
    details: ['Earned certification in Python and SQL for Data Science through Scaler Academy.'],
    onclick: "viewCertificate('PYSQLDS')"
  },
  {
    title: 'Career Essentials in Data Analysis by Microsoft and LinkedIn Learning',
    type: 'Certificate of Completion | June 2023',
    details: ['Completed the data analysis track with certification from Microsoft and LinkedIn.'],
    onclick: "viewCertificate('DAMLL')"
  },
  {
    title: 'Top 50 SQL By Leetcode',
    type: 'Earned SQL badge | June 2023',
    details: ['Earned a badge for solving the top 50 SQL interview challenges on LeetCode.'],
    onclick: "viewCertificate('SQLL')"
  },
  {
    title: 'Advanced SQL Certificate by HackerRank',
    type: 'Certificate of Appreciation | April 2023',
    details: ['Cleared the Advanced SQL assessment and received HackerRank recognition.'],
    onclick: "viewCertificate('ASQLH')"
  },
  {
    title: 'MongoDB M001',
    type: 'Certificate of Completion | April 2022',
    details: ['Completed the M001 course and received certification from MongoDB University.'],
    onclick: "viewCertificate('MONGODB')"
  },
  {
    title: "GFG DSA self paced course",
    type: "Certificate of Completion | December 2021",
    details: ["Successfully completed and certified by GeeksforGeeks' for the DSA self-paced program."],
    onclick: "viewCertificate('GFGDSA')"
  },
  {
    title: "Codechef Snackdown 2021",
    type: "Certificate of Appreciation | December 2021",
    details: ["Qualified for the CodeChef SnackDown Round-1A in a global programming event."],
    onclick: "viewCertificate('CCHEFSNACK')"
  },
  {
    title: "JUMPSTART FINALE CONTESTANT",
    type: "Certificate of Appreciation | August 2021",
    details: ["Finalist among 150+ students in a national hackathon by Publicis Sapient."],
    onclick: "viewCertificate('JUMPSTART')"
  },
  {
    title: "MODERN BIG DATA ANALYSIS WITH SQL",
    type: "Certificate of Appreciation | July 2021",
    details: [
      "Completed a 3-course specialization in Big Data SQL with hands-on projects.",
      `<ul class="smalltext">
          <li>Course 1: Foundations for Big Data Analysis with SQL</li>
          <li>Course 2: Analyzing Big Data with SQL</li>
          <li>Course 3: Managing Big Data in Clusters and Cloud Storage</li>
      </ul>`
    ],
    onclick: "viewCertificate('MBDASQL')"
  },
  {
    title: "CRASH COURSE ON PYTHON",
    type: "Course Certificate by GOOGLE | May 2021",
    details: ["Gained hands-on experience in Python programming via Google's interactive course."],
    onclick: "viewCertificate('CRASHCPY')"
  },
  {
    title: "BEST #TOP 63 WORLD RANK IN HACKEREARTH PROGRAMMING",
    type: "Achievement | May 2021",
    details: ["Ranked in the top 63 worldwide on HackerEarth after 3 months of consistent coding."],
    onclick: ""
  },
  {
    title: "PROBLEM SOLVING CERTIFICATE BY HACKERRANK",
    type: "Certificate of Appreciation | October 2020",
    details: ["Earned HackerRank’s certification by completing the problem-solving challenge."],
    onclick: "viewCertificate('PSCH')"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.awardscontent');
  const template = document.getElementById('award-card-template');

  awards.forEach(award => {
    const clone = template.content.cloneNode(true);

    const titleElem = clone.querySelector('.awardtitle');
    titleElem.textContent = award.title;
    if (award.onclick) {
      titleElem.setAttribute('onclick', award.onclick);
      titleElem.style.cursor = "pointer";
    }

    clone.querySelector('.awardtype').textContent = award.type;

    const ul = clone.querySelector('ul');
    award.details.forEach(detail => {
      const li = document.createElement('li');
      if (detail.startsWith('<ul')) {
        li.innerHTML = detail;
      } else {
        li.textContent = detail;
      }
      ul.appendChild(li);
    });

    container.appendChild(clone);
  });
});

function viewCertificate(certId) {
  alert(`Open certificate: ${certId}`);
}



//---
const certificateiframe = document.getElementById("certificateiframe");
const certificatemodal = document.getElementById("certificatemodal");
const closecertificateframe = document.getElementById("closecertificateframe");

const certificatedict = {
    DAECISCO: "https://drive.google.com/file/d/1jlTWyV5hJHmOykudwNf6EPpOECWvDpkU/preview",
    DAMLL: "https://drive.google.com/file/d/10JzTrjJusUgaHkSpgLi86YcKf05Q3SIG/preview",
    SQLL: "./img/Top_SQL_50.gif",
    ASQLH: "https://drive.google.com/file/d/11GryK21HUoLx2oiigdnkpNYXWn_fIRH5/preview",
    MONGODB: "https://drive.google.com/file/d/11H1KG8y9fnCoD5uC1bsSP0kVIlbgOhTS/preview",
    GFGDSA: "https://drive.google.com/file/d/1zRfJbidOOwi65Yl4p_Dkt8LtNeqRioIV/preview",
    CCHEFSNACK: "https://drive.google.com/file/d/1tws82HCe6O6cH_4SNV_G-m49WTNSljAy/preview",
    JUMPSTART: "https://drive.google.com/file/d/1gbZHn8DSwDykiCGp_4n6s0NSDy2O5dZ6/preview",
    MBDASQL: "https://drive.google.com/file/d/1XbJfGgd3bmYQLh40yb0D5-xBqzBcg0Qk/preview",
    CRASHCPY: "https://drive.google.com/file/d/1zyxaIvYkQNFRx2ibGIl_gNG4QFejwQAt/preview",
    PSCH: "https://drive.google.com/file/d/1T6btmjKz9dchBAK8_1B9Cbge3u-Xn_73/preview",
    PYSQLDS: "https://drive.google.com/file/d/1QjPi0N7z2iUWSQ8oe2VAac1YljM5N3Ow/preview",
};

function viewCertificate(certificatename) {
    const src = certificatedict[certificatename];
    if (src) {
        certificatemodal.style.display = "flex";
        certificateiframe.src = src;
    }
}

closecertificateframe.onclick = () => {
    certificatemodal.style.display = "none";
    certificateiframe.src = "";
};

function sendemail(type) {
  url = "https://docs.google.com/forms/d/e/1FAIpQLScAe9LbVKVCSP6kfI_3ChMkPDD2CN9QlD_XJ_sBlQaTemNLcA/viewform?usp=sf_link";
  window.open(url);
}

// Hide site on very small screens and show a friendly message
window.addEventListener("DOMContentLoaded", () => {
    const fullpage = document.querySelector(".fullpage");
    if (window.innerWidth < 360) {
        if (fullpage) fullpage.style.display = "none";
        setTimeout(() => {
            alert("Your screen size is too small to display this site. Please use a larger device.");
        }, 500);
    }
});

// 2.0
// Optimize modal and nav logic

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navlink").forEach(link => {
        link.style.textDecoration = "none";
        link.style.outline = "none";
        link.addEventListener("click", function (e) {
            this.blur();
            this.style.outline = "none";
            e.preventDefault();
            const targetId = this.getAttribute("href")?.substring(1);
            if (targetId) {
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Modal config
    const modals = [
        { modal: "resumemodal", openers: ["lresume", "lresumewindow"], closers: ["closeresumeframe", "frameclosebtn"] },
        { modal: "feedbackmodal", openers: ["feedbackdiv"], closers: ["closefeedbackframe"] },
        { modal: "facebookmodal", openers: ["facebookdiv"], closers: ["closefacebookframe"] },
        { modal: "emppymodal", openers: ["emppydiv"], closers: ["closeemppyframe"] }
    ];

    modals.forEach(({ modal, openers, closers }) => {
        const modalElem = document.getElementById(modal);
        if (!modalElem) return;
        openers.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.onclick = () => { modalElem.style.display = "flex"; };
        });
        closers.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.onclick = () => { modalElem.style.display = "none"; };
        });
    });

    // Modal close on outside click
    window.onclick = function (event) {
        modals.forEach(({ modal }) => {
            const modalElem = document.getElementById(modal);
            if (modalElem && event.target === modalElem) {
                modalElem.style.display = "none";
            }
        });
        // Also handle certificate modal
        const certificatemodal = document.getElementById("certificatemodal");
        if (certificatemodal && event.target === certificatemodal) {
            certificatemodal.style.display = "none";
        }
    };
});

window.onmouseover = function (event) {
  if (event.target == emppymodal) {
    document.body.style.cursor = "url(./img/cursor1.png)";
  }
};
