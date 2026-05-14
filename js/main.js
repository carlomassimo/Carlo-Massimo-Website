
function openLightbox(src){
  var lb=document.getElementById('lightbox');
  var img=document.getElementById('lightbox-img');
  img.src=src;
  lb.style.display='flex';
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  var lb=document.getElementById('lightbox');
  lb.style.display='none';
  document.getElementById('lightbox-img').src='';
  document.body.style.overflow='';
}
document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = new FormData(form);
      fetch('send_mail.php', {method:'POST', body:data})
        .then(r => r.json()).then(json => {
          if(json.success){
            var popup = document.getElementById('popup');
            popup.style.display='block';
          } else {
            alert('Error sending message.' + (json.error ? '\n'+json.error : ''));
          }
        }).catch(err=>{ alert('Network error'); });
    });
  }
  var closeBtn = document.querySelector('#popup .close');
  if(closeBtn) closeBtn.addEventListener('click', function(){ document.getElementById('popup').style.display='none'; });
});
