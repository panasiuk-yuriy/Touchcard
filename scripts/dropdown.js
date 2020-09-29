
$(document).ready(function() {
  $('.header__list li').hover(function() {
    $('.dropdown', this).slideDown(200);
    $(this).addClass('bottom__link--selected');
  }, function() {
    $('.dropdown', this).stop().slideUp(200);
    $(this).removeClass('bottom__link--selected');
  });

  const forBusiness = [{
    text: 'QR Pay',
    img: './images/header/For business/1.svg',
    descr: 'Додаток QR Pay',
  },
  {
    text: 'Процесінг',
    img: './images/header/For business/2.svg',
    descr: 'Touchcard Tech',
  },
  {
    text: 'Вендінг NFC/QR',
    img: './images/header/For business/3.svg',
    descr: 'Cityhub',
  },
  {
    text: 'Нейромаркетинг',
    img: './images/header/For business/4.svg',
    descr: 'Neuratrack',
  },
  ];

  $.each(forBusiness, function(key, value) {
    const newElem = ($('<li>', {
      'class': 'dropdown__item',
    }));

    const newElem2 = ($('<div>', {
      'class': 'dropdown__text',
    })).append($('<p>', {
      'text': `${value.text}`,
    })).append($('<p>', {
      'text': `${value.descr}`,
    }));

    ($('<a>', {
      'class': 'dropdown__link',
      'href': '#',
    })).append($('<img>', {
      'class': 'dropdown__img--big',
      'src': `${value.img}`,
      'alt': `${value.text}`,
    })).append($(newElem2)).appendTo($(newElem));

    $('.for-bussines').append(newElem);
  });

  const instruments = [{
    text: 'Оплата за реквізитами',
    href: '#',
  },
  {
    text: 'Перекази с картки на картку',
    href: '#',
  },
  {
    text: 'Оплата по QR-коду',
    href: '#',
  },
  {
    text: 'Додаток iOS / Android',
    href: '#',
  },
  {
    text: 'Masterpass / Google Pay / Apple Pay',
    href: '#',
  },
  {
    text: 'Вітруальна картка',
    href: '#',
  },
  {
    text: 'Безконтактна оплата NFC',
    href: '#',
  },
  {
    text: 'Платіжний бот в Telegram та Viber',
    href: '#',
  },
  {
    text: 'Оплата за посиланням',
    href: '#',
  },
  {
    text: 'Платіжний додаток QR Pay',
    href: '#',
  },
  {
    text: 'Вітрина Touchcard',
    href: '#',
  },
  {
    text: 'iFrame оплата',
    href: '#',
  },
  {
    text: 'Модулі оплати NFC / QR Pay для вендінгу',
    href: '#',
  },
  {
    text: 'Оплата для сайту через Приват24',
    href: '#',
  },
  ];

  $.each(instruments, function(key, value) {
    const newElem = ($('<li>', {
      'class': 'dropdown__item',
    }));

    ($('<a>', {
      'class': 'dropdown__link',
      'href': '#',
      'text': `${value.text}`,
    })).appendTo($(newElem));

    $('.instruments').append(newElem);
  });

  const payments = [{
    text: 'Перекази з картки на картку',
    img: './images/header/Payments/1.svg',
    href: '#',
  },
  {
    text: 'Мобільний зв’язок',
    img: './images/header/Payments/2.svg',
    href: '#',
  },
  {
    text: 'Інтернет',
    img: './images/header/Payments/3.svg',
    href: '#',
  },
  {
    text: 'Погашення кредитів',
    img: './images/header/Payments/4.svg',
    href: '#',
  },
  {
    text: 'Благодійність',
    img: './images/header/Payments/5.svg',
    href: '#',
  },
  {
    text: 'Дистрибуція',
    img: './images/header/Payments/6.svg',
    href: '#',
  },
  {
    text: 'Платежі по бюджету',
    img: './images/header/Payments/7.svg',
    href: '#',
  },
  {
    text: 'Продаж товарів',
    img: './images/header/Payments/8.svg',
    href: '#',
  },
  {
    text: 'Розваги',
    img: './images/header/Payments/9.svg',
    href: '#',
  },
  {
    text: 'Таксі',
    img: './images/header/Payments/10.svg',
    href: '#',
  },
  {
    text: 'Фінансові послуги',
    img: './images/header/Payments/11.svg',
    href: '#',
  },
  {
    text: 'Штрафи',
    img: './images/header/Payments/12.svg',
    href: '#',
  },
  {
    text: 'Комунальні платежі',
    img: './images/header/Payments/13.svg',
    href: '#',
  },
  {
    text: 'Інше',
    img: './images/header/Payments/14.svg',
    href: '#',
  },

  ];

  $.each(payments, function(key, value) {
    const newElem = ($('<li>', {
      'class': 'dropdown__item',
    }));

    ($('<a>', {
      'class': 'dropdown__link',
      'href': '#',
    })).append($('<span>', {
      'style': `mask: url(${value.img});
      -webkit-mask: url(${value.img}) no-repeat 50% 50%;`,
      'class': 'dropdown__img',
    })).append($('<p>', {
      'text': `${value.text}`,
    })).appendTo($(newElem));

    $('.payments').append(newElem);
  });
});
