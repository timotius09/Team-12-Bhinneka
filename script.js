let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });   
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

function myalert() { 
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Dersik Shirt Navy"); 
}

function myalert2() {
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Wool Overshirt Gray");
}

function myalert3() {
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Line Knit Top Green");
}

function myalert4() {
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Cozy Pants Navy");
}

function myalert5() {
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Cozy Pants Black");
}

function myalert6() {
  alert("Terima Kasih!\n " + 
      "Anda telah membeli Cozy Pants Maroon");
}