// Achievements Data - Add URLs manually to the 'url' field
const achievementsData = [
    {
        icon: "article",
        color: "#3b82f6",
        title: "Data Analytics Essentials by Cisco",
        description: "Completed with certification via Microsoft & LinkedIn Learning. (2023)",
        url: "https://drive.google.com/file/d/1jlTWyV5hJHmOykudwNf6EPpOECWvDpkU/preview"
    },
    {
        icon: "article",
        color: "#3b82f6",
        title: "Python and SQL for Data Science",
        description: "Earned certification in Python and SQL for Data Science through Scaler Academy. (2023)",
        url: ""
    },
    {
        icon: "article",
        color: "#3b82f6",
        title: "Career Essentials in Data Analysis by Microsoft and LinkedIn Learning",
        description: "Completed the data analysis track with certification from Microsoft and LinkedIn. (2023)",
        url: "https://drive.google.com/file/d/10JzTrjJusUgaHkSpgLi86YcKf05Q3SIG/preview"
    },
    {
        icon: "badge",
        color: "#eab308",
        title: "Top 50 SQL By Leetcode",
        description: "Earned a badge for solving the top 50 SQL interview challenges on LeetCode. (2023)",
        url: "./img/Top_SQL_50.gif"
    },
    {
        icon: "article",
        color: "#eab308",
        title: "Advanced SQL Certificate by HackerRank",
        description: "Cleared the Advanced SQL assessment and received HackerRank recognition. (2023)",
        url: "https://drive.google.com/file/d/11GryK21HUoLx2oiigdnkpNYXWn_fIRH5/preview"
    },
    {
        icon: "lightbulb",
        color: "#22c55e",
        title: "MongoDB M001",
        description: "Completed the M001 course and received certification from MongoDB University. (2022)",
        url: "https://drive.google.com/file/d/11H1KG8y9fnCoD5uC1bsSP0kVIlbgOhTS/preview"
    },
    {
        icon: "emoji_events",
        color: "#eab308",
        title: "GFG DSA self paced course",
        description: "Successfully completed and certified by GeeksforGeeks' for the DSA self-paced program. (2021)",
        url: "https://drive.google.com/file/d/1zRfJbidOOwi65Yl4p_Dkt8LtNeqRioIV/preview"
    },
    {
        icon: "sports_score",
        color: "#3b82f6",
        title: "Codechef Snackdown 2021",
        description: "Qualified for the CodeChef SnackDown Round-1A in a global programming event. (2021)",
        url: "https://drive.google.com/file/d/1tws82HCe6O6cH_4SNV_G-m49WTNSljAy/preview"
    },
    {
        icon: "emoji_events",
        color: "#eab308",
        title: "JUMPSTART Finale Contestant",
        description: "PreFinalist among 150+ students in a national hackathon by Publicis Sapient. (2021)",
        url: "https://drive.google.com/file/d/1gbZHn8DSwDykiCGp_4n6s0NSDy2O5dZ6/preview"
    },
    {
        icon: "emoji_events",
        color: "#eab308",
        title: "Modern Big Data Analysis with SQL",
        description: "Specialization Certificate in Big Data SQL (2021)<br>Course 1: Foundations for Big Data Analysis with SQL<br>Course 2: Analyzing Big Data with SQL<br>Course 3: Managing Big Data in Clusters and Cloud Storage.",
        url: "https://drive.google.com/file/d/1XbJfGgd3bmYQLh40yb0D5-xBqzBcg0Qk/preview"
    },
    {
        icon: "article",
        color: "#3b82f6",
        title: "Crash Course on Python by Google",
        description: "Gained hands-on experience in Python programming via Google's interactive course. (2021)",
        url: "https://drive.google.com/file/d/1zyxaIvYkQNFRx2ibGIl_gNG4QFejwQAt/preview"
    },
    {
        icon: "emoji_events",
        color: "#22c55e",
        title: "Best #Top 63 World Rank in HackerEarth Programming",
        description: "Ranked in the top 63 worldwide on HackerEarth after 3 months of consistent coding. (2021)",
        url: ""
    },
    {
        icon: "article",
        color: "#22c55e",
        title: "Problem Solving Certificate by HackerRank",
        description: "Earned HackerRank's certification by completing the problem-solving challenge. (2020)",
        url: "https://drive.google.com/file/d/1T6btmjKz9dchBAK8_1B9Cbge3u-Xn_73/preview"
    }
];

// Render Achievements
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    achievementsData.forEach(achievement => {
        const row = document.createElement('div');
        row.className = 'achievement-row';

        if (achievement.url) {
            row.style.cursor = 'pointer';
            row.onclick = () => window.open(achievement.url, '_blank');
        }

        row.innerHTML = `
            <span class="material-symbols-outlined" style="font-size: 2rem; color: ${achievement.color};">${achievement.icon}</span>
            <div>
                <h4 style="font-size: 1.125rem; font-weight: 700;">${achievement.title}</h4>
                <p style="font-size: 0.875rem; color: var(--text-slate-500);">${achievement.description}</p>
            </div>
        `;

        container.appendChild(row);
    });
}

// Initialize achievements on DOM load
document.addEventListener('DOMContentLoaded', renderAchievements);

// Experience Data - Add/modify entries as needed
const experienceData = [
    {
        role: "Data Scientist | Supply Chain | Cost Price Prediction",
        year: "Feb 2026 - Present",
        company: "Tiger Analytics | Santa Clara, United States",
        companyUrl: "https://www.tigeranalytics.com/",
        description: "",
        bullets: [
        ],
        url: ""
    },
    {
        role: "Data Scientist | Supply Chain | Demand Forecasting",
        year: "Sep 2025 - Dec 2025",
        company: "New Era Cap | Buffalo, United States",
        companyUrl: "https://www.neweracap.com/",
        description: "Built and deployed an end-to-end demand forecasting system using Snowflake and Python, translating complex supply chain data into scalable, production-ready forecasting solutions. Focused on accuracy, automation, and stakeholder usability across large SKU portfolios.",
        bullets: [
            "Designed and deployed a demand forecasting pipeline with feature engineering and LightGBM, serving forecasts via Azure-backed infrastructure and Streamlit dashboards for planners.",
            "Automated vendor capacity and purchase buy planning through allocation logic and retraining pipelines, eliminating manual Excel workflows and improving forecast scalability and auditability.",
            "Collaborated with supply chain, sourcing, and engineering teams to design data schemas, implement ETL pipelines, validate models, and deliver stakeholder-ready documentation."
        ],
        url: "https://www.neweracap.com/"
    },
    {
        role: "Lead Data Analyst | Supply Chain | Last Mile",
        year: "Dec 2023 - Jul 2024",
        company: "Shadowfax | Bangalore, India",
        companyUrl: "https://www.shadowfax.in/",
        description: "Led data-driven cost, productivity, and performance optimization initiatives across regional operations, partnering closely with operations and leadership teams to translate analytics into measurable business outcomes.",
        bullets: [
            "Achieved 98% accuracy in employee database cleansing and validation, establishing a new company-wide benchmark for data quality and reporting reliability.",
            "Improved regional productivity by 60% through analytics-backed manpower allocation strategies and performance optimization across delivery hubs.",
            "Designed and delivered hub-level performance dashboards, enabling leadership to identify bottlenecks, track KPIs, and drive data-informed operational decisions."
        ],
        url: "https://www.shadowfax.in/"
    },
    {
        role: "Software Engineer Intern | FinTech | EdTech",
        year: "Jun 2022 - Jun 2023",
        company: "Frugal Testing | Hyderabad, India",
        companyUrl: "https://www.frugaltesting.com/",
        description: "Contributed to enterprise-scale software delivery for ONELERN and NPCI, working across automation, testing, and deployment workflows in regulated and high-reliability environments. Gained strong foundations in system quality, performance, and production readiness.",
        bullets: [
            "Designed and implemented automation frameworks across four large-scale projects, reducing manual QA effort by 30 percent and improving release reliability.",
            "Collaborated with cross-functional teams on the NPCI Central Bank Digital Currency (CBDC) platform, supporting deployment workflows, performance monitoring, and production readiness.",
            "Contributed to test strategy improvements through data-driven analysis, reducing testing cycle times and improving feedback loops across multiple enterprise systems."
        ],
        url: "https://www.frugaltesting.com/"
    }
];

// Render Experience
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    experienceData.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        if (exp.url) {
            item.style.cursor = 'pointer';
            item.onclick = () => window.open(exp.url, '_blank');
        }

        const dotClass = index === 0 ? 'timeline-dot active' : 'timeline-dot';
        const bulletsHtml = exp.bullets.map(bullet => `<li>${bullet}</li>`).join('');

        item.innerHTML = `
            <div class="${dotClass}"></div>
            <div class="timeline-header">
                <h3 class="timeline-role">${exp.role}</h3>
                <span class="timeline-year">${exp.year}</span>
            </div>
            <div class="timeline-company"><a href="${exp.companyUrl}" target="_blank">${exp.company} <span class="material-symbols-outlined" style="font-size: 0.875rem; margin: 0 0.25rem; vertical-align: middle;">open_in_new</span></a></div>
            <p style="color: var(--text-gray-300); margin-bottom: 1rem;">${exp.description}</p>
            <ul style="list-style-type: disc; list-style-position: inside; font-size: 0.875rem; color: var(--text-gray-400); padding-left: 0.5rem;">
                ${bulletsHtml}
            </ul>
        `;

        container.appendChild(item);
    });
}

// Initialize experience on DOM load
document.addEventListener('DOMContentLoaded', renderExperience);

var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("contact-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = '<span style="color: #4ade80;">Message sent successfully!</span>';
          form.reset()
          setTimeout(() => {
            status.innerHTML = '';
          }, 2000);
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = '<span style="color: #ef4444;">Oops! There was a problem submitting your form</span>';
            }
          })
        }
      }).catch(error => {
        status.innerHTML = '<span style="color: #ef4444;">Oops! There was a problem submitting your form</span>';
      });
    }
form.addEventListener("submit", handleSubmit)

// ScrollSpy Implementation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          // Match link href with section id (e.g. href="#about")
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});





/* Chatbot Logic */
/* Chatbot Logic */
document.addEventListener('DOMContentLoaded', () => {
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    
    // Chips Data
    const chipsData = [
        { label: "What are his skills?", action: "skills" },
        { label: "Show me latest projects", action: "projects" },
        { label: "Experience highlights", action: "experience" },
        { label: "How to contact him?", action: "contact" }
    ];

    // Toggle Chat
    function toggleChat() {
        const isActive = chatbotWindow.classList.toggle('active');
        if (isActive) {
            chatbotToggle.innerHTML = '<span class="material-symbols-outlined">close</span>';
            setTimeout(() => chatbotInput.focus(), 300);
        } else {
            chatbotToggle.innerHTML = '<span class="material-symbols-outlined">smart_toy</span><span class="chatbot-toggle-text">Chat</span>';
        }
    }

    chatbotToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent document click from closing immediately
        toggleChat();
    });
    
    chatbotClose.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (chatbotWindow.classList.contains('active') && 
            !chatbotWindow.contains(e.target) && 
            !chatbotToggle.contains(e.target)) {
            toggleChat();
        }
    });

    chatbotWindow.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicks inside window from closing it
    });

    // Initial Chips Handling
    const initialChips = document.querySelectorAll('.chat-chip');
    initialChips.forEach(chip => {
        chip.addEventListener('click', () => handleChipClick(chip.getAttribute('data-action'), chip.textContent));
    });

    // Helper: Add Chips to Chat
    function appendChips() {
        const chipsContainer = document.createElement('div');
        chipsContainer.classList.add('chat-chips-container');
        chipsContainer.style.marginTop = "0.5rem";
        chipsContainer.style.marginBottom = "0.5rem";

        chipsData.forEach(data => {
            const chip = document.createElement('button');
            chip.classList.add('chat-chip');
            chip.setAttribute('data-action', data.action);
            chip.textContent = data.label;
            chip.addEventListener('click', () => handleChipClick(data.action, data.label));
            chipsContainer.appendChild(chip);
        });

        chatbotMessages.appendChild(chipsContainer);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleChipClick(action, text) {
        addMessage(text, 'user');
        setTimeout(() => {
            const reply = getBotResponse(action);
            addMessage(reply, 'bot');
            // Re-append chips after bot replies
            setTimeout(appendChips, 400); 
        }, 600);
    }

    // Add Message function
    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        msgDiv.textContent = text;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Bot Response Logic
    function getBotResponse(action) {
        let response = "I'm not sure about that, but feel free to contact Shashank!";
        
        switch(action) {
            case 'skills':
                response = "Shashank is proficient in Python, SQL, R, Machine Learning (PyTorch, TensorFlow), and Cloud Platforms like AWS & Azure.";
                 setTimeout(() => document.getElementById('skills').scrollIntoView({behavior: 'smooth'}), 100);
                break;
            case 'projects':
                response = "Check out his latest work! He's built an LLM Inference Engine, a Video Summarizer, and TutorMind (RAG app).";
                setTimeout(() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'}), 100);
                break;
            case 'experience':
                response = "He recently worked at New Era Cap in Demand Forecasting and previously led analytics at Shadowfax.";
                setTimeout(() => document.getElementById('experience').scrollIntoView({behavior: 'smooth'}), 100);
                break;
            case 'contact':
                response = "You can reach him at shashankmankala.5@gmail.com or via the contact form below!";
                setTimeout(() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'}), 100);
                break;
            default:
                const lower = action.toLowerCase();
                if(lower.includes('hello') || lower.includes('hi')) response = "Hello there! How can I help you today?";
                else if(lower.includes('resume') || lower.includes('cv')) response = "You can download his resume from the button in the header or contact section.";
                else if(lower.includes('email')) response = "His email is shashankmankala.5@gmail.com";
        }
        return response;
    }

    // Handle Text Input
    function handleSend() {
        const text = chatbotInput.value.trim();
        if(!text) return;
        
        addMessage(text, 'user');
        chatbotInput.value = '';
        
        setTimeout(() => {
            const reply = getBotResponse(text);
            addMessage(reply, 'bot');
             // Re-append chips after bot replies for text input too
             setTimeout(appendChips, 400);
        }, 600);
    }

    chatbotSend.addEventListener('click', handleSend);
    chatbotInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') handleSend();
    });

    // --- Avatar Interaction Events ---
    // Name Hover
    const nameLogo = document.querySelector('.logo-text');
    if (nameLogo) {
        nameLogo.addEventListener('mouseenter', () => window.updateAvatarState && window.updateAvatarState('nod'));
    }

    // Projects Hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
             // Calculate relative position for the bot to "walk" to
             // Simplification: We pass the index or just a generic 'project_hover' state with data
             if(window.updateAvatarState) window.updateAvatarState('project_hover', { index: index });
        });
        
        card.addEventListener('mouseleave', () => {
             if(window.updateAvatarState) window.updateAvatarState('projects');
        });
    });
});
