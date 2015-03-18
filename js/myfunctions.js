document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('js-modal'),
     cookie = 'seen',
 exipreDays = 120,
 expireTime = new Date(),
  openClass = 'is-open',
       body = document.body;

  expireTime.setTime(+expireTime + exipreDays * 864e+5);

  function readCookie(name) {
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
  }

  
  if (!readCookie(cookie) && body.classList.contains('home')) {
    document.cookie = cookie + '=step1; expires=' + expireTime;
  }

  if (readCookie(cookie) === "step1" && body.classList.contains('inner-page')) {
    document.cookie = cookie + '=step2; expires=' + expireTime;
  }

  if (readCookie(cookie) === "step2" && body.classList.contains('home')) {
    modal.classList.add(openClass);
  }

  document.getElementById('js-close').addEventListener('click', function() {
    modal.classList.remove(openClass);
    document.cookie = cookie + '=complete; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  });

});
