
function ad_2(aside) {          //    vertical add
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7262606129829883';
  script.setAttribute('crossorigin', 'anonymous');

  var ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.display = 'block';
  ins.setAttribute('data-ad-client', 'ca-pub-7262606129829883');
  ins.setAttribute('data-ad-slot', '7817736411');
  ins.setAttribute('data-ad-format', 'auto');
  ins.setAttribute('data-full-width-responsive', 'true');

  var pushCode = '(adsbygoogle = window.adsbygoogle || []).push({});';
  var pushScript = document.createElement('script');
  pushScript.innerHTML = pushCode;

  // var aside = document.getElementById('aside');
  if (aside != null) {
    aside.appendChild(script);
    aside.appendChild(ins);
    aside.appendChild(pushScript);
  }
};

function squre_ad(parrent_sq) {        //    Squre ads
  const scriptElement = document.createElement('script');
  scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7262606129829883";
  scriptElement.setAttribute('async', '');
  scriptElement.setAttribute('crossorigin', 'anonymous');

  const insElement = document.createElement('ins');
  insElement.className = 'adsbygoogle';
  insElement.style.display = 'block';
  insElement.setAttribute('data-ad-client', 'ca-pub-7262606129829883');
  insElement.setAttribute('data-ad-slot', '1007681837');
  insElement.setAttribute('data-ad-format', 'auto');
  insElement.setAttribute('data-full-width-responsive', 'true');

  const scriptElement2 = document.createElement('script');
  scriptElement2.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';

  if (parrent_sq != null) {
    parrent_sq.appendChild(scriptElement);
    parrent_sq.appendChild(insElement);
    parrent_sq.appendChild(scriptElement2);
  }
}


function setSize() {        //     set Sidebar Size after add ads
  var asideElement = document.querySelector('aside');
  var sectionElement = document.getElementById("cnf");
  sectionHeight = sectionElement.offsetHeight - 16;
  asideElement.style.height = sectionElement.offsetHeight - 16 + 'px';
}

function ad_1(parrent_ad) {            //    banner ads
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7262606129829883';
  script.setAttribute('crossorigin', 'anonymous');

  var ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.display = 'block';
  ins.setAttribute('data-ad-client', 'ca-pub-7262606129829883');
  ins.setAttribute('data-ad-slot', '4624612771');
  ins.setAttribute('data-ad-format', 'auto');
  ins.setAttribute('data-full-width-responsive', 'true');

  var pushCode = '(adsbygoogle = window.adsbygoogle || []).push({});';
  var pushScript = document.createElement('script');
  pushScript.innerHTML = pushCode;

  // const divAd = document.createElement('div');
  // divAd.style.height = '220px';
  // divAd.style.border = '1px solid black';
  if (parrent_ad != null) {
    // parrent_ad.appendChild(divAd);
    parrent_ad.appendChild(script);
    parrent_ad.appendChild(ins);
    parrent_ad.appendChild(pushScript);
  }
};

function createAd(parrent) {
  const title = document.createElement('text');
  title.setAttribute('id', 'adTitle');
  title.innerHTML = 'Advertisement';

  const div = document.createElement('div');
  div.setAttribute('id', 'adBlock');

  div.appendChild(title); //title added to adblock
  squre_ad(div);          // ad added to adblock (direct code to adblock)

  if (parrent != null) {
    parrent.appendChild(div);
  }
}

function createAd_2(parrent) {
  const title = document.createElement('text');
  title.setAttribute('id', 'adTitle');
  title.innerHTML = 'Advertisement';

  const div = document.createElement('div');
  div.setAttribute('id', 'adBlock');

  div.appendChild(title); //title added to adblock
  ad_2(div);          // ad added to adblock (direct code to adblock)
  if (parrent != null) {
    parrent.appendChild(div);
  }
}



function add_LH_SidebarAds() {
  let count = 0;
  if (sectionHeight > 1500) {
    count = Math.floor((sectionHeight - 1500) / 450); //how may ads can occup
  }
  for (let index = 0; index < count; index++) {
    createAd(document.getElementById('side'));
    if (index < 1) {
      // limiting number of ads.
      break;
    }
  }
}

function add_RH_SidebarAds() {
  let count = 0;
  //const rightAsideheight = document.getElementById('rightAside').offsetHeight;
  // console.log(rightAsideheight);
  if (sectionHeight > 450) {
    count = Math.floor((sectionHeight) / 450); //how may ads can occup
    // console.log(count);
  }
  for (let index = 0; index < count; index++) {
    createAd_2(document.getElementById('rightAside'));
    if (index < 1) {
      // limiting number of ads.
      break;
    }
  }
}


/*------Banner Ads Ok------*/
if (document.getElementById('section') != null) {
  ad_1(document.getElementById('section_adBlock'));
}
/*-------------------------*/

/*-------------aside ads--------------*/
var sectionHeight = 0;
sectionHeight = document.getElementById("cnf").offsetHeight - 16;

if (window.innerWidth > 480) {
  setSize();
  // add_LH_SidebarAds();
  // add_RH_SidebarAds();
  // document.getElementById('rightAside').style.height = document.getElementById("cnf").offsetHeight + 'px';
}

