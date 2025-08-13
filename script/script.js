   const openBtn = document.getElementById('open');
    const box = document.getElementById('msg');
    openBtn.addEventListener('click', ()=>{
      box.classList.add('open');
      openBtn.disabled = true;
      openBtn.textContent = 'Відкрито';

      startPetals();
   
      if (window.navigator.vibrate) navigator.vibrate(10);
    });

   
    const musicBtn = document.getElementById('music');
    const audio = document.getElementById('audio');
    let playing = false;
    musicBtn.addEventListener('click', ()=>{
      if (!audio.src) {

        alert('Додай свій файл мелодії: у коді знайди <audio id="audio"> і вкажи src на mp3.');
        return;
      }
      playing = !playing;
      if (playing) { audio.play(); musicBtn.textContent = 'Мелодія ❚❚'; musicBtn.setAttribute('aria-pressed','true'); }
      else { audio.pause(); musicBtn.textContent = 'Мелодія ▷'; musicBtn.setAttribute('aria-pressed','false'); }
    });

    let petalsTimer;
    function startPetals(){
      const makePetal = () => {
        const el = document.createElement('span');
        el.className = 'petal';
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const x = Math.random() * vw;
        const dur = 8 + Math.random()*6; 
        const drift = (Math.random() * 40 - 20) + 'vw';
        const rot = (Math.random()*540 - 270) + 'deg';
        el.style.left = x + 'px';
        el.style.animationDuration = dur + 's';
        el.style.setProperty('--dx', drift);
        el.style.setProperty('--rot', rot);
        document.body.appendChild(el);
        setTimeout(()=> el.remove(), (dur+1)*1000);
      };
    
      for (let i=0;i<24;i++) setTimeout(makePetal, i*120);
    
      clearInterval(petalsTimer);
      petalsTimer = setInterval(makePetal, 500);

      setTimeout(()=> clearInterval(petalsTimer), 15000);
    }