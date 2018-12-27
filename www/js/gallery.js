var projects = [
  {
    name: "Thermo Fisher - Precision Medicine",
    company: "Kaon Interactive",
    year: "2018",
    role: "Lead Front End Engineer (Contract)",
    description: "Thermo Fisher Scientific's Precision Medicine technology showcase app.",
    thumb: "/img/portfolio/thermofisher/thermo_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
  },
  {
    name: "Abbott Transformation",
    company: "Kaon Interactive",
    year: "2016",
    role: "Lead Engineer",
    description: "B2B sales showcase for Abbott Diagnostics' Transformation laboratory solutions.",
    thumb: "/img/portfolio/abbott/abbott_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74096955/Abbott-Transformation",
  },
  {
    name: "Dell OME Training Game",
    company: "Kaon Interactive",
    year: "2018",
    role: "Lead Front End Engineer (Contract)",
    description: "Dell's gamified experience to showcase their cutting-edge corporate server deployment application",
    thumb: "/img/portfolio/dell/dell_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
  },
  {
    name: "Kaon.com",
    company: "Kaon Interactive",
    year: "2017",
    role: "Senior Full Stack Engineer",
    description: "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point",
    thumb: "/img/portfolio/kaon/kaon_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74096433/Kaoncom",
    liveUrl: "http://www.kaon.com/",
  },
  {
    name: "DxMA Awards 2016 Catalog",
    company: "Kaon Interactive",
    year: "2016",
    role: "Front End Engineer",
    description: "The digital catalog for DxMA's best B2B apps award ceremony",
    thumb: "/img/portfolio/dxma/dxma_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
  },
  {
    name: "F5 Hybrid Cloud",
    company: "Kaon Interactive",
    year: "2016",
    role: "Front End Engineer",
    description: "A showcase app for F5 Networks' best practices on cloud computing and security",
    thumb: "/img/portfolio/f5/f5_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
    liveUrl: "http://m.kaon.com/c/f5",
  },
  {
    name: "Hyundai HB20s Launch",
    company: "HXD Smart Solutions",
    year: "2013",
    role: "Front End Engineer",
    description: "Hyundai's marketing app for the launch of HB20 and HB20s new models in Brazil",
    thumb: "/img/portfolio/hyundai/hyundai_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
  },
  {
    name: "Climatempo Weather Forecast",
    company: "HXD Smart Solutions",
    year: "2012",
    role: "Front End Engineer (Intern)",
    description: "The leading weather forecast cross-platform app in Brazil",
    thumb: "/img/portfolio/climatempo/climatempo_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
  },
  {
    name: "In a Haystack",
    company: "Worcester Polytechnic Institute",
    year: "2016",
    role: "Lead Engineer and Game Designer",
    description: "A graduate thesis proof-of-concept video game project implementation",
    thumb: "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097641/In-a-Haystack",
    liveUrl: "http://www.jezzlucena.com/haystackgame/",
  },
  {
    name: "Coca-Cola FM",
    company: "HXD Smart Solutions",
    year: "2012",
    role: "Generalist Software Engineer (Intern)",
    description: "Coca-Cola FM's official Smart TV app in Latin America",
    thumb: "/img/portfolio/coca-cola/coca_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
  },
  {
    name: "Pong! 4X",
    company: "Independent Project",
    year: "2014",
    role: "Lead Engineer and Game Designer",
    description: "Proof-of-concept computer game that takes the classic Pong to a whole new hectic multiplayer experience",
    thumb: "/img/portfolio/pong-4x/pong4x_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097689/Pong-4X",
    githubUrl: "https://github.com/jezzlucena/pong_4x",
  },
  {
    name: "Band IP",
    company: "HXD Smart Solutions",
    year: "2013",
    role: "Front End Engineer",
    description: "Band TV's leading video-on-demand multiplatform app in Brazil",
    thumb: "/img/portfolio/band-ip/band_thumb.jpg",
    thumbGif: "/img/portfolio/thumb.gif",
    behanceUrl: "https://www.behance.net/gallery/74097179/Band-IP",
  },
]

$(document).ready(function() {
  populatePortfolio();

  $('.title .toggle').click(function() {
    $(this).toggleClass('grid').toggleClass('list');

    let gallery = $(this).closest('.section').find('.gallery');
    gallery.addClass('hide');

    setTimeout(function() {
      gallery.toggleClass('grid');
      gallery.removeClass('hide');
    }, 1000);
  });
});

function populatePortfolio() {
  let template = $('.item.template');

  projects.forEach(item => {
    let element = template.clone();

    element.find('.name').html(item.name);
    element.find('.company').html(item.company);
    element.find('.role').html(item.role);
    element.find('.year').html(item.year);
    element.find('.thumb').attr('src', item.thumb);

    // TODO: Add gif preview to this project's thumbnails
    element.find('.thumbGif').attr('src', item.thumbGif);
    element.find('.thumbGif').css('display', 'none');

    element.find('.description').html(item.description);
    element.attr('href', item.behanceUrl);

    if (item.behanceUrl) {
      element.find('.moreLink.behance').attr('data-url', item.behanceUrl);
    } else {
      element.find('.moreLink.behance').addClass('disabled');
    }

    if (item.githubUrl) {
      element.find('.moreLink.github').attr('data-url', item.githubUrl);
    } else {
      element.find('.moreLink.github').addClass('disabled');
    }

    if (item.liveUrl) {
      element.find('.moreLink.live').attr('data-url', item.liveUrl);
    } else {
      element.find('.moreLink.live').addClass('disabled');
    }

    if (item.demoUrl) {
      element.find('.moreLink.demo').attr('data-url', item.demoUrl);
    } else {
      element.find('.moreLink.demo').addClass('disabled');
    }

    element.find('.moreBtn').click(function(event) {
      $('.moreDropdown').removeClass('open');
      element.find('.moreDropdown').addClass('open');

      event.preventDefault();
      event.stopPropagation();
    });

    element.find('.moreLink:not(.disabled)').click(function(event) {
      window.open($(this).attr('data-url'));

      event.preventDefault();
      event.stopPropagation();
    });

    $('body').click(closeDropdowns);

    element.removeClass('template');

    $('.gallery').append(element);
  });

  $('.gallery').removeClass('loading');
}

function closeDropdowns(event) {
  if ($('.moreDropdown.open').length > 0) {
    $('.moreDropdown.open').removeClass('open');

    event.preventDefault();
    event.stopPropagation();
  }
}
