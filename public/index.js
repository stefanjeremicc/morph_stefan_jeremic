const inputFields = document.querySelectorAll('.form_input');
const radioFields = document.querySelectorAll('.contact-field');
const headerSpan = document.querySelector('.header_span');

// check form names.length
const formFieldInner = document.querySelectorAll('.form_fieldwrap-inner *');
let names = [];

formFieldInner.forEach(fieldInner => {
  if (fieldInner.getAttribute('name') != undefined && fieldInner.getAttribute('name') != "") {
    names.push(fieldInner.getAttribute('name'));
  }
})

let unique = names.filter((v, i, a) => a.indexOf(v) === i);
let max = 100;

// input field event listener on focusout
inputFields.forEach(field => {
  field.addEventListener('focusout', e => {
    document.getElementById(e.target.dataset.decoraterId).classList.remove('border-primary');

    if (field.value.length > 0) {
      document.getElementById(e.target.dataset.decoraterId).classList.add('border-primary');
      document.getElementById(e.target.dataset.decoraterId).classList.add('calculate');
    } else {
      document.getElementById(e.target.dataset.decoraterId).classList.remove('calculate');
    }

    countCalculateClasses();
  })
})

// radio field event listener on click
radioFields.forEach(field => {
  field.addEventListener('click', e => {
    document.getElementById(e.target.dataset.decoraterId).classList.remove('border-primary');

    if (e.target.checked) {
        document.getElementById(e.target.dataset.decoraterId).classList.add('border-primary');
        document.getElementById(e.target.dataset.decoraterId).classList.add('calculate');
    } else {
      document.getElementById(e.target.dataset.decoraterId).classList.remove('calculate');
    }

    countCalculateClasses();
  })
})

// count how many 'calculate' classes do we have 
function countCalculateClasses() {
  const calc = document.getElementsByClassName('calculate');

  let result = calc.length * max / unique.length;

  headerSpan.textContent = `${result}%`;
  headerSpan.setAttribute('data-fill', result);
}