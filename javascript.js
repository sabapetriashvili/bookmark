/* Hamburger Menu */

const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');

hamburger.addEventListener("click", () => {  
 hamburger.classList.toggle('menu-active');
 logo.classList.toggle('menu-active');
 menu.classList.toggle('menu-active');
});


/* Features */

const indicators = document.querySelectorAll('.indicator');
const features = document.querySelectorAll('.feature');
const extension = document.querySelector('.extension');

indicators.forEach(indicator => {
  let indexOfIndicator = [...indicators].indexOf(indicator);
  
  indicator.addEventListener('click', () => {
    for(var i = 0; i < indicators.length; i++){

      indicators[i].classList.remove('active');
      features[i].classList.remove('active');
    }   
    
    indicator.classList.add('active');
    features[indexOfIndicator].classList.add('active');
    extension.style.marginTop = `${features[indexOfIndicator].clientHeight + 125}px`;
  });
}); 


/* Extensions  */


const featureActive = document.querySelector('.feature.active');
extension.style.marginTop = `${featureActive.clientHeight + 125}px`;

window.addEventListener('resize', () => {
  extension.style.marginTop = `${featureActive.clientHeight + 125}px`;
});



/* Questions */

const drop = document.querySelectorAll('#drop');
const question = document.querySelectorAll('.question-item');
const answerDiv = document.querySelectorAll('.answer');

const answers = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
                 `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
                 `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.`,
                 `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`];


question.forEach(faq => {
  faq.addEventListener('click', () => {
    let indexOfFaq = [...question].indexOf(faq);

    drop[indexOfFaq].classList.toggle('active');
    answerDiv[indexOfFaq].classList.toggle('active');

    if(answerDiv[indexOfFaq].classList.contains('active')) {
      answerDiv[indexOfFaq].innerHTML = answers[indexOfFaq];
    } else {
      setTimeout(function() {
        answerDiv[indexOfFaq].innerHTML = ``;
			}, 320)
    }
  })
});



/* footer */

const inputEmail = document.querySelector('.input-email');
const contactInput = document.querySelector('.email-input');
const contactBtn = document.querySelector('.contact-cta');
const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{1,4}$/;

function validation() {
  if(contactInput.value.match(pattern)) {
    inputEmail.classList.remove('message');
    contactInput.classList.remove('message');

  } else {
    inputEmail.classList.add('message');
    contactInput.classList.add('message');
  }
};

function validationSent() {
  const success = document.querySelector('.success-sent');

  if(contactInput.value.match(pattern)) {
    inputEmail.classList.remove('message');
    contactInput.classList.remove('message');

    success.style.animation = `success-animation 0.6s ease-in-out forwards`;
    contactInput.value = ``;


    setTimeout(function() {
      success.style.animation = `success-animation 0.6s ease-in-out backwards`;
    }, 3000);

  } else {
    inputEmail.classList.add('message');
    contactInput.classList.add('message');
  }
};

contactBtn.addEventListener('click', validationSent);
contactInput.addEventListener('keydown', validation);
contactInput.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    validationSent();
  } else {
    return;
  }
});



