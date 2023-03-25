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
const extension = document.querySelector('.extension');
const feature = document.querySelector('.feature');
const featureImg = document.querySelector('#feature-img');
const featureTitle = document.querySelector('.info-box .title');
const featureDescription = document.querySelector('.info-box .description');
const featureImageLink = [`images/illustration-features-tab-1.svg`, `images/illustration-features-tab-2.svg`, `images/illustration-features-tab-3.svg`];
const featureTitleText = [`Bookmark in one click`, `Intelligent search`, `Share your bookmarks`];
const featureDescriptionText = [`Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.`,
                            `ur powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
                            `Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of the button.`];

indicators.forEach(indicator => {
  let indexOfIndicator = [...indicators].indexOf(indicator);
  
  indicator.addEventListener('click', () => {
    for(var i = 0; i < indicators.length; i++){

      indicators[i].classList.remove('active');
    }   
    
    indicator.classList.add('active');
    featureImg.src = featureImageLink[indexOfIndicator];
    featureTitle.innerHTML = featureTitleText[indexOfIndicator];
    featureDescription.innerHTML = featureDescriptionText[indexOfIndicator];
  });
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



/* Contact */

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



