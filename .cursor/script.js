/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
var answers = {
  service: null,
  timing:  null,
  budget:  null
};

/* ══════════════════════════════════════
   ROADMAP DATA PER SERVICE
══════════════════════════════════════ */
var roadmaps = {
  studio: [
    { label: 'אפיון הפרויקט',       desc: 'שיחה קצרה להבנת הצרכים והסגנון' },
    { label: 'קביעת מועד הקלטה',    desc: 'נמצא תאריך שנוח לשני הצדדים' },
    { label: 'יום ההקלטה באולפן',   desc: 'מיקרופון פתוח, מוכנים להקליט' },
    { label: 'עריכה ומסירה',        desc: 'מיקס, מאסטרינג ושליחת הקובץ הסופי' }
  ],
  dj: [
    { label: 'תיאום פרטי האירוע',   desc: 'תאריך, מקום, גיל קהל וסגנון מוזיקה' },
    { label: 'בניית תוכנית מוזיקלית', desc: 'פלייליסט מותאם אישית לאירוע שלכם' },
    { label: 'הגעה והתקנה',         desc: 'מגיעים שעה מראש לסאונד צ\'ק' },
    { label: 'הופעה חיה',           desc: 'ריקודים, אנרגיה ורגעים שלא ישכחו' }
  ],
  voice: [
    { label: 'קבלת הסקריפט',        desc: 'שלחו את הטקסט שצריך הקלטה' },
    { label: 'הקלטה באולפן',        desc: 'קריינות מקצועית בציוד HD' },
    { label: 'עריכה ומסירה',        desc: 'קובץ נקי ומוכן לשימוש תוך 48 שעות' }
  ],
  podcast: [
    { label: 'הכנה ותיאום',         desc: 'נקבע פורמט, משך ומבנה לפרק' },
    { label: 'הקלטת הפרק',         desc: 'אולפן מאובזר לשמע מושלם' },
    { label: 'עריכה ומיקס',        desc: 'חיתוך, מוזיקת רקע ואפקטים' },
    { label: 'מסירה ופרסום',       desc: 'קובץ מוכן לספוטיפיי, אפל פודקאסטס ועוד' }
  ],
  clip: [
    { label: 'פגישת אפיון',         desc: 'קונספט, לוקיישן וסגנון הקליפ' },
    { label: 'יום הצילום',          desc: 'צלם, ציוד ותאורה מקצועיים' },
    { label: 'עריכה ופוסט-פרודקשן', desc: 'ועריכה, גרפיקה ואפקטים' },
    { label: 'מסירה סופית',        desc: 'בפורמטים לרשתות חברתיות ויוטיוב' }
  ],
  other: [
    { label: 'שיחת היכרות',        desc: 'נבין יחד מה בדיוק אתם צריכים' },
    { label: 'הצעת מחיר מותאמת',   desc: 'הצעה ברורה ללא הפתעות' },
    { label: 'ביצוע הפרויקט',      desc: 'עובדים בצמוד עד לתוצאה מושלמת' },
    { label: 'מסירה ומעקב',        desc: 'לא נעזוב אתכם עד שאתם מרוצים' }
  ]
};

/* ══════════════════════════════════════
   WA MESSAGES PER SERVICE
══════════════════════════════════════ */
var waMessages = {
  studio:  'שלום יקיר! אני מעוניין בהקלטה באולפן',
  dj:      'שלום יקיר! אני מחפש DJ לאירוע שלי',
  voice:   'שלום יקיר! אני צריך שירותי קריינות',
  podcast: 'שלום יקיר! אני רוצה להקליט פודקאסט',
  clip:    'שלום יקיר! אני מעוניין בהפקת קליפ',
  other:   'שלום יקיר! אני מעוניין לשמוע על השירותים שלך'
};

/* ══════════════════════════════════════
   SELECT OPTION
══════════════════════════════════════ */
function selectOption(btn, field, value) {
  // deselect siblings
  var siblings = btn.parentElement.querySelectorAll('.opt-btn');
  siblings.forEach(function(s) {
    s.classList.remove('selected');
    s.setAttribute('aria-checked', 'false');
  });

  // select clicked
  btn.classList.add('selected');
  btn.setAttribute('aria-checked', 'true');

  // save answer
  answers[field] = value;

  // enable next button
  var stepMap = { service: 1, timing: 2, budget: 3 };
  var step = stepMap[field];
  if (step) {
    var nextBtn = document.getElementById('next' + step);
    if (nextBtn) nextBtn.disabled = false;
  }
}

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
function goNext(fromStep) {
  showStep(fromStep + 1);
}

function goBack(fromStep) {
  showStep(fromStep - 1);
}

function showStep(step) {
  // hide all question blocks
  var blocks = document.querySelectorAll('.question-block');
  blocks.forEach(function(b) { b.classList.remove('active'); });

  // show target
  var target = document.getElementById('q' + step);
  if (target) target.classList.add('active');

  // update progress bar
  var fill = document.getElementById('progressFill');
  var bar  = document.querySelector('.progress-bar');
  var pct  = ((step - 1) / 4) * 100;
  if (fill) fill.style.width = pct + '%';
  if (bar)  bar.setAttribute('aria-valuenow', pct);

  // update mic step icons
  for (var i = 1; i <= 4; i++) {
    var icon = document.getElementById('step-icon-' + i);
    if (!icon) continue;
    icon.classList.remove('active', 'done');
    if (i === step)  icon.classList.add('active');
    if (i < step)    icon.classList.add('done');
  }

  // hide sticky WA while in quiz (steps 1-4)
  if (step >= 1 && step <= 4) {
    document.body.classList.add('quiz-active');
  } else {
    document.body.classList.remove('quiz-active');
  }

  // scroll to top of card
  var card = document.getElementById('quizCard');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ══════════════════════════════════════
   FORM VALIDATION
══════════════════════════════════════ */
function validateForm() {
  var valid = true;

  var name     = document.getElementById('inp-name');
  var phone    = document.getElementById('inp-phone');
  var valName  = document.getElementById('val-name');
  var valPhone = document.getElementById('val-phone');

  // name
  if (!name.value.trim() || name.value.trim().length < 2) {
    valName.classList.add('show');
    name.focus();
    valid = false;
  } else {
    valName.classList.remove('show');
  }

  // phone — basic IL validation
  var phoneVal = phone.value.trim().replace(/[\s\-]/g, '');
  var phoneOk  = /^(\+972|972|0)[0-9]{8,9}$/.test(phoneVal);
  if (!phoneOk) {
    valPhone.classList.add('show');
    if (valid) phone.focus();
    valid = false;
  } else {
    valPhone.classList.remove('show');
  }

  return valid;
}

/* ══════════════════════════════════════
   SUBMIT
══════════════════════════════════════ */
function submitForm() {
  if (!validateForm()) return;

  var name    = document.getElementById('inp-name').value.trim();
  var phone   = document.getElementById('inp-phone').value.trim();
  var msg     = document.getElementById('inp-msg').value.trim();
  var email   = document.getElementById('inp-email') ? document.getElementById('inp-email').value.trim() : '';
  var service = answers.service || 'other';
  var timing  = answers.timing  || '';
  var budget  = answers.budget  || '';

  var serviceLabels = {
    studio:  'הקלטה באולפן',
    dj:      'DJ לאירוע',
    voice:   'קריינות',
    podcast: 'הקלטת פודקאסט',
    clip:    'הפקת קליפ / וידאו',
    other:   'שירות אחר'
  };
  var timingLabels = {
    urgent:   'דחוף — השבוע',
    month:    'תוך חודש',
    flexible: 'גמיש',
    future:   'עתידי'
  };
  var budgetLabels = {
    minimal:   'מינימליסטי ומדויק',
    standard:  'סטנדרט מקצועי',
    fullpower: 'הפקה הוליוודית'
  };

  // ── שליחה ל-Web3Forms ──
  var formData = new FormData();
  formData.append('access_key', '636e046c-45b4-4011-a947-1ffe575b5bb1');
  formData.append('name',    name);
  formData.append('email',   email || 'callwebboss@gmail.com');
  formData.append('subject', 'פנייה חדשה מהאתר — ' + (serviceLabels[service] || service));
  formData.append('message',
    'שם: '         + name + '\n' +
    'טלפון: '      + phone + '\n' +
    'מייל: '       + (email || '—') + '\n' +
    'שירות: '      + (serviceLabels[service] || service) + '\n' +
    'תזמון: '      + (timingLabels[timing]   || timing || '—') + '\n' +
    'רמת הפקה: '   + (budgetLabels[budget]   || budget || '—') + '\n' +
    'הודעה: '      + (msg || '—')
  );

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(function(res) { return res.json(); })
  .then(function(data) {
    if (data.success) {
      console.log('Web3Forms: נשלח בהצלחה');
    } else {
      console.warn('Web3Forms error:', data);
    }
  })
  .catch(function(err) {
    console.warn('Web3Forms fetch error:', err);
  });
  // ── סוף שליחה ──

  // hide all question blocks + show success
  var blocks = document.querySelectorAll('.question-block');
  blocks.forEach(function(b) { b.classList.remove('active'); });

  var success = document.getElementById('successState');
  success.style.display = 'block';

  // fill progress to 100%
  var fill = document.getElementById('progressFill');
  var bar  = document.querySelector('.progress-bar');
  if (fill) fill.style.width = '100%';
  if (bar)  bar.setAttribute('aria-valuenow', 100);

  // mark all icons done
  for (var i = 1; i <= 4; i++) {
    var icon = document.getElementById('step-icon-' + i);
    if (icon) {
      icon.classList.remove('active');
      icon.classList.add('done');
    }
  }

  // show roadmap
  buildRoadmap(service);

  // update WA link with context
  updateWaLink(name, service, timing, budget, msg);

  // restore sticky WA
  document.body.classList.remove('quiz-active');

  // scroll to top of card
  var card = document.getElementById('quizCard');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ══════════════════════════════════════
   BUILD ROADMAP
══════════════════════════════════════ */
function buildRoadmap(service) {
  var steps   = roadmaps[service] || roadmaps['other'];
  var container = document.getElementById('roadmapSteps');
  if (!container) return;

  container.innerHTML = '';
  steps.forEach(function(step, i) {
    var div = document.createElement('div');
    div.className = 'rm-step';
    div.innerHTML =
      '<div class="rm-num">' + (i + 1) + '</div>' +
      '<div class="rm-content">' +
        '<div class="rm-label">' + step.label + '</div>' +
        '<div class="rm-desc">'  + step.desc  + '</div>' +
      '</div>';
    container.appendChild(div);
  });
}

/* ══════════════════════════════════════
   UPDATE WA LINK
══════════════════════════════════════ */
function updateWaLink(name, service, timing, budget, msg) {
  var baseMsg = waMessages[service] || waMessages['other'];

  var timingLabels = {
    urgent:   'דחוף — השבוע',
    month:    'תוך חודש',
    flexible: 'גמיש',
    future:   'עתידי'
  };

  var budgetLabels = {
    minimal:   'מינימליסטי ומדויק',
    standard:  'סטנדרט מקצועי',
    fullpower: 'הפקה הוליוודית'
  };

  var text = baseMsg + '\n';
  text += 'שם: ' + name + '\n';
  if (timing) text += 'תזמון: ' + (timingLabels[timing] || timing) + '\n';
  if (budget) text += 'רמת הפקה: ' + (budgetLabels[budget] || budget) + '\n';
  if (msg)    text += 'הודעה: ' + msg;

  var encoded = encodeURIComponent(text);
  var waBtn   = document.getElementById('waBtn');
  if (waBtn) waBtn.href = 'https://wa.me/972587555456?text=' + encoded;
}

/* ══════════════════════════════════════
   RESET QUIZ
══════════════════════════════════════ */
function resetQuiz() {
  // reset answers
  answers = { service: null, timing: null, budget: null };

  // clear inputs
  ['inp-name','inp-phone','inp-msg'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });

  // hide validation messages
  document.querySelectorAll('.val-msg').forEach(function(v) {
    v.classList.remove('show');
  });

  // hide success, deselect options
  document.getElementById('successState').style.display = 'none';
  document.querySelectorAll('.opt-btn').forEach(function(b) {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });

  // disable next buttons
  ['next1','next2','next3'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.disabled = true;
  });

  // go to step 1
  showStep(1);
}

/* ══════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════ */
function toggleFaq(btn) {
  var item     = btn.closest('.faq-item');
  var isOpen   = item.classList.contains('open');

  // close all
  document.querySelectorAll('.faq-item').forEach(function(f) {
    f.classList.remove('open');
    var q = f.querySelector('.faq-q');
    if (q) q.setAttribute('aria-expanded', 'false');
  });

  // open clicked if it was closed
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ══════════════════════════════════════
   STICKY WA — hide when quiz visible on mobile
══════════════════════════════════════ */
(function() {
  var card = document.getElementById('quizCard');
  var body = document.body;

  if (!card || !window.IntersectionObserver) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        body.classList.add('quiz-active');
      } else {
        body.classList.remove('quiz-active');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(card);
})();

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  // make sure step 1 is shown and progress is at 0
  showStep(1);
});