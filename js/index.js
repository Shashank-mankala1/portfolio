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
