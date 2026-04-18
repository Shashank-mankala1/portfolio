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
