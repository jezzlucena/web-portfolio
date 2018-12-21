var projects = [
  {
    name: "ThermoFisher - Precision Medicine",
    company: "Kaon Interactive",
    year: "2018",
    role: "Lead Front End Engineer (Contract)",
    description: "Precision medicine holds the promise to change how medicine is practiced. A collaborative ecosystem leveraging technology is required to scale precision medicine.",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "Dell OME Training Game",
    company: "Kaon Interactive",
    year: "2018",
    role: "Lead Full Stack Engineer (Contract)",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "Kaon.com Responsive Website",
    company: "Kaon Interactive",
    year: "2017",
    role: "Senior Full Stack Engineer",
    description: "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point.",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "DxMA Awards 2016 Catalog",
    company: "Kaon Interactive",
    year: "2016",
    role: "Front End Engineer",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "How to be Cloud-Ready with F5",
    company: "Kaon Interactive",
    year: "2016",
    role: "Front End Engineer",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "Hyundai HB20s Launch App",
    company: "HXD Smart Solutions",
    year: "2013",
    role: "Front End Engineer",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "Climatempo Weather Forecast App",
    company: "HXD Smart Solutions",
    year: "2012",
    role: "Front End Engineer (Intern)",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
  {
    name: "In A Haystack - Grad Thesis Project",
    company: "Worcester Polytechnic Institute",
    year: "2016",
    role: "Lead Engineer and Game Designer",
    description: "",
    thumb: "/img/portfolio/thumb.png",
    thumbGif: "/img/portfolio/thumb.gif",
  },
]

function populatePortfolio() {
  let template = $('.item.template');

  projects.forEach(item => {
    let element = template.clone();

    element.find('.name').html(item.name);
    element.find('.company').html(item.company);
    element.find('.role').html(item.role);
    element.find('.year').html(item.year);
    element.find('.thumb').attr('src', item.thumb);
    element.find('.thumbGif').attr('src', item.thumbGif);
    element.find('.description').html(item.description);

    element.removeClass('template');

    $('.gallery').append(element);
  });

  $('.gallery').removeClass('loading');
}

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
