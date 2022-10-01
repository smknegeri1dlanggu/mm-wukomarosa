const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
const contactForm = document.getElementById("contact-form");
const form = document.getElementById('contact-form');


showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors";
    }).then(()=> {
        // url thank you
        window.location.href='/thank-you.html';
    })
    .catch((e) => alert('Gagal Mengirim Pesan - Kode : ERR3312'))
});


form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
  
    // 👇️ Send data to server here
  
    // 👇️ Reset form here
    form.reset();
  });
  