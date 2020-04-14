import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import style from "./Sidebar.module.scss";
import { connect } from "react-redux";
import * as actionTypes from '../store/action/actionTypes';
import houseIcon from '../assets/svg/house.svg';
import carIcon from '../assets/svg/car.svg';
import electronicDevicesIcon from '../assets/svg/electronic-devices.svg';
import entertainmentIcon from '../assets/svg/entertainment.svg';
import homeApplianceIcon from '../assets/svg/home-appliance.svg';
import personalStuffIcon from '../assets/svg/personal-stuff.svg';
import recruitmentIcon from '../assets/svg/recruitment.svg';
import serviceIcon from '../assets/svg/service.svg';
import socialIcon from '../assets/svg/social.svg';
import businessIcon from '../assets/svg/business.svg';
import bazaar from '../assets/png/bazaar-badge.png';
import appstore from '../assets/png/appstore-badge.png';
import enamad from '../assets/png/enamad.png';

function Sidebar(props) {
    const Items = [
        {
            icon: houseIcon,
            link: 'real-estate',
            label: 'املاک',
            children: [
                {
                    link: 'buy-residential',
                    label: 'فروشی مسکونی',
                    children: [
                        {
                            link: 'buy-apartment',
                            label: 'آپارتمان'
                        },
                        {
                            link: 'buy-villa',
                            label: 'خانه و ویلا'
                        },
                        {
                            link: 'buy-old-house',
                            label: 'زمین و کلنگی'
                        },
                    ]
                },
                {
                    link: 'rent-residential',
                    label: 'اجاره مسکونی',
                    children: [
                        {
                            link: 'rent-apartment',
                            label: 'آپارتمان'
                        },
                        {
                            link: 'rent-villa',
                            label: 'خانه و ویلا'
                        }
                    ]
                },
                {
                    link: 'buy-commercial-property',
                    label: ' فروش اداری و تجاری',
                    children: [
                        {
                            link: 'buy-office',
                            label: 'دفتر کار، اتاق اداری و مطب'
                        },
                        {
                            link: 'buy-store',
                            label: 'مغازه و غرفه'
                        },
                        {
                            link: 'buy-industrial-agricultural-property',
                            label: 'صنعتی،‌ کشاورزی و تجاری'
                        }
                    ]
                },
                {
                    link: 'rent-commercial-property',
                    label: ' اجاره اداری و تجاری',
                    children: [
                        {
                            link: 'rent-office',
                            label: 'دفتر کار، اتاق اداری و مطب'
                        },
                        {
                            link: 'rent-store',
                            label: 'مغازه و غرفه'
                        },
                        {
                            link: 'rent-industrial-agricultural-property',
                            label: 'صنعتی،‌ کشاورزی و تجاری'
                        }
                    ]
                },
                {
                    link: 'rent-temporary',
                    label: ' اجاره کوتاه مدت',
                    children: [
                        {
                            link: 'rent-temporary-suite-apartment',
                            label: 'آپارتمان و سوئیت'
                        },
                        {
                            link: 'rent-temporary-villa',
                            label: 'ویلا و باغ'
                        },
                        {
                            link: 'rent-temporary-workspace',
                            label: 'دفتر کار و فضای آموزشی '
                        }
                    ]
                },
                {
                    link: 'real-estate-services',
                    label: 'خدمات املاک',
                    children: [
                        {
                            link: 'home-agencies',
                            label: 'آژانس املاک'
                        },
                        {
                            link: 'contribution-construction',
                            label: 'مشارکت در ساخت'
                        },
                        {
                            link: 'real-estate-financial-legal',
                            label: 'امور مالی و حقوقی'
                        },
                        {
                            link: 'pre-sell-home',
                            label: 'پیش‌فروش'
                        }
                    ]
                },
            ]

        },
        {
            icon: carIcon,
            link: 'vehicles',
            label: 'وسایل نقلیه',
            children: [
                {
                    link: 'auto',
                    label: 'خودرو',
                    children: [
                        {
                            link: 'car',
                            label: 'سواری'
                        },
                        {
                            link: 'classic-car',
                            label: 'کلاسیک'
                        },
                        {
                            link: 'rental-car',
                            label: 'اجاره ای'
                        },
                        {
                            link: 'heavy-car',
                            label: 'سنگین'
                        },
                    ]
                },
                {
                    link: 'car-accessories',
                    label: 'قطعات یدکی '

                },
                {
                    link: 'motorcycles',
                    label: ' موتورسیکلت و لوازم جانبی'
                },
                {
                    link: 'boat',
                    label: ' قایق و لوازم جانبی'
                }
            ]
        }
        ,
        {
            icon: electronicDevicesIcon,
            link: 'electronic-devices',
            label: ' لوازم الکترونیکی',
            children: [
                {
                    link: 'mobile-tablet',
                    label: 'موبایل و تبلت',
                    children: [
                        {
                            link: 'mobile-phones',
                            label: 'گوشی موبایل'
                        },
                        {
                            link: 'tablet',
                            label: 'تبلت'
                        },
                        {
                            link: 'mobile-tablet-accessories',
                            label: 'لوازم جانبی موبایل و تبلت'
                        },
                        {
                            link: 'sim-card',
                            label: 'سیم کارت'
                        },
                    ]
                },
                {
                    link: 'computers',
                    label: 'رایانه ',
                    children: [
                        {
                            link: 'laptop-notebook-macbook',
                            label: 'رایانه همراه'
                        },
                        {
                            link: 'desktop-computer',
                            label: 'رایانه رومیزی'
                        },
                        {
                            link: 'computer-parts-accessories',
                            label: 'قطعات و لوازم جانبی'
                        },
                        {
                            link: 'modem-network-equipments',
                            label: 'مودم و تجهیزات شبکه'
                        },
                        {
                            link: 'printer-scanner-fax',
                            label: 'پرینتر/اسکنر/کپی/فکس'
                        }
                    ]
                },
                {
                    link: 'game-consoles',
                    label: 'کنسول، بازی‌ ویدئویی و آنلاین'
                },
                {
                    link: 'video-audio-device',
                    label: 'صوتی و تصویری ',
                    children: [
                        {
                            link: 'film-music',
                            label: 'فیلم و موسیقی'
                        },
                        {
                            link: 'camera',
                            label: 'دوربین عکاسی و فیلم‌برداری'
                        },
                        {
                            link: 'headphone-speaker-microphone',
                            label: 'پخش کننده همراه'
                        },
                        {
                            link: 'home-audio-system',
                            label: 'سیستم صوتی خانگی'
                        },
                        {
                            link: 'dvd-bluray-player',
                            label: 'ویدئو و پخش کننده DVD'
                        },
                        {
                            link: 'tv-projector',
                            label: 'تلویزیون و پروژکتور'
                        },
                        {
                            link: 'cctv',
                            label: 'دوربین مداربسته'
                        }
                    ]
                },
                {
                    link: 'telephone',
                    label: 'تلفن رومیزی'
                },
            ]
        }
        ,
        {
            icon: homeApplianceIcon,
            link: 'home-and-kitchen',
            label: 'مربوط به خانه',
            children: [
                {
                    link: 'home-decor-furniture',
                    label: 'وسایل و تزئینات خانه',
                    children: [
                        {
                            link: 'art-decorative',
                            label: 'تزئینی و آثار هنری'
                        },
                        {
                            link: 'lighting',
                            label: 'لوازم روشنایی'
                        },
                        {
                            link: 'table-desk-chair',
                            label: 'میز و صندلی'
                        },
                        {
                            link: 'carpets',
                            label: 'فرش و گلیم'
                        },
                        {
                            link: 'closet-storage',
                            label: 'کمد و بوفه '
                        },
                        {
                            link: 'curtain-tablecloth',
                            label: 'پرده و رومیزی'
                        },
                        {
                            link: 'bedroom-accessories',
                            label: 'تخت و اتاق خواب'
                        },
                        {
                            link: 'sofa-armchair',
                            label: 'مبلمان و صندلی راحتی'
                        },
                        {
                            link: 'tv-stand',
                            label: 'میز تلویزیون و وسایل سیستم پخش'
                        },
                    ]
                },
                {
                    link: 'kitchen-appliances',
                    label: 'وسایل آشپزخانه',
                    children: [
                        {
                            link: 'dishwasher',
                            label: 'ماشین ظرف شویی'
                        },
                        {
                            link: 'refrigerator-freezer',
                            label: 'یخچال و فریزر'
                        },
                        {
                            link: 'kitchen-accessories',
                            label: 'وسایل آشپزی و غذاخوری'
                        },
                        {
                            link: 'microwave-stove',
                            label: 'مایکروویو و گاز'
                        },
                        {
                            link: 'washing-machine',
                            label: 'ماشین لباسشویی و خشک کننده'
                        }
                    ]
                },
                {
                    link: 'home-appliances',
                    label: 'ابزار',
                    children: [
                        {
                            link: 'vacuum-cleaner-sewing-machine-iron',
                            label: 'نظافت و خیاطی و اتو'
                        },
                        {
                            link: 'power-and-hand-tools',
                            label: 'تعمیرات'
                        }
                    ]
                },
                {
                    link: 'building-garden',
                    label: 'ساختمان و حیاط',
                    children: [
                        {
                            link: 'bathroom-fixtures',
                            label: 'سرویس بهداشتی و سونا'
                        },
                        {
                            link: 'heating-cooling-systems',
                            label: 'سیستم گرمایشی سرمایشی و گاز'
                        },
                        {
                            link: 'kitchen-equipments',
                            label: 'آشپزخانه'
                        },
                        {
                            link: 'patio-balcony',
                            label: 'حیاط و ایوان'
                        },
                        {
                            link: 'garden-tools',
                            label: 'ابزار باغبانی'
                        }
                    ]
                },

            ]
        },
        {
            icon: serviceIcon,
            link: 'services',
            label: 'خدمات',
            children: [
                {
                    link: 'vehicles-services',
                    label: 'موتور و ماشین',
                    children: []
                },
                {
                    link: 'catering-services',
                    label: 'پذیرایی/مراسم',
                    children: []
                },
                {
                    link: 'technology-services',
                    label: 'خدمات رایانه‌ای و موبایل',
                    children: [
                        {
                            link: 'domain-services',
                            label: 'فروش دامنه و سایت'
                        },
                        {
                            link: 'website-services',
                            label: 'میزبانی و طراحی سایت'
                        },
                        {
                            link: 'internet-services',
                            label: 'خدمات پهنای باند اینترنت'
                        },
                        {
                            link: 'computer-services',
                            label: 'خدمات نرم‌افزار و سخت‌افزار کامپیوتر'
                        },
                        {
                            link: 'mobile-services',
                            label: 'تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل'
                        }
                    ]
                },
                {
                    link: 'financial-services',
                    label: 'مالی/حسابداری/بیمه',
                    children: []
                },
                {
                    link: 'transport-logistic-services',
                    label: 'حمل و نقل',
                    children: []
                },
                {
                    link: 'craft-skill-services',
                    label: 'پیشه و مهارت',
                    children: []
                },
                {
                    link: 'beauty-services',
                    label: 'آرایشگری و زیبایی',
                    children: []
                },
                {
                    link: 'entertaining-services',
                    label: 'سرگرمی',
                    children: []
                },
                {
                    link: 'cleaning-services',
                    label: 'نظافت',
                    children: []
                },
                {
                    link: 'gardening-services',
                    label: 'باغبانی و درختکاری',
                    children: []
                },
                {
                    link: 'teaching-services',
                    label: 'آموزشی',
                    children: [
                        {
                            link: 'foreign-language',
                            label: 'زبان خارجی'
                        },
                        {
                            link: 'educational-teaching',
                            label: 'دروس مدرسه و دانشگاه'
                        },
                        {
                            link: 'software-teaching',
                            label: 'نرم‌افزار'
                        },
                        {
                            link: 'art-teaching',
                            label: 'هنری'
                        },
                        {
                            link: 'sports-teaching',
                            label: 'ورزشی'
                        },
                        {
                            link: 'educational-consulting',
                            label: 'مشاوره تحصیلی'
                        }
                    ]
                }
            ]
        },
        {
            icon: personalStuffIcon,
            link: 'personal-goods',
            label: 'وسایل شخصی',
            children: [
                {
                    link: 'apparel',
                    label: 'کیف، کفش و لباس',
                    children: [
                        {
                            link: 'bag-shoes-belt',
                            label: 'کیف/کفش/کمربند'
                        },
                        {
                            link: 'clothing',
                            label: 'لباس'
                        }
                    ]
                },
                {
                    link: 'accessories',
                    label: 'تزیینی',
                    children: [
                        {
                            link: 'watches',
                            label: 'ساعت'
                        },
                        {
                            link: 'jewellery',
                            label: 'جواهرات'
                        },
                        {
                            link: 'trinket',
                            label: 'بدلیجات'
                        }
                    ]
                },
                {
                    link: 'beauty-and-personal-care',
                    label: 'آرایشی، بهداشتی و درمانی',
                    children: []
                },
                {
                    link: 'child-apparel',
                    label: 'کفش و لباس بچه',
                    children: []
                },
                {
                    link: 'child-products',
                    label: 'وسایل بچه و اسباب بازی',
                    children: [
                        {
                            link: 'child-toys',
                            label: 'اسباب بازی'
                        },
                        {
                            link: 'stroller',
                            label: 'کالسکه و لوازم جانبی'
                        },
                        {
                            link: 'child-furniture',
                            label: 'صندلی بچه'
                        },
                        {
                            link: 'child-stuff',
                            label: 'اسباب و اثاث بچه'
                        }
                    ]
                },
                {
                    link: 'stationery',
                    label: 'لوازم التحریر',
                    children: []
                }
            ]
        },
        {
            icon: entertainmentIcon,
            link: 'entertainment',
            label: 'سرگرمی و فراغت',
            children: [
                {
                    link: 'ticket',
                    label: 'بلیط',
                    children: [
                        {
                            link: 'concert-ticket',
                            label: 'کنسرت'
                        },
                        {
                            link: 'theatre-cinema-ticket',
                            label: 'تئاتر و سینما'
                        },
                        {
                            link: 'discount-gift-card',
                            label: 'کارت هدیه و تخفیف'
                        },
                        {
                            link: 'match-sport-ticket',
                            label: 'اماکن و مسابقات ورزشی'
                        },
                        {
                            link: 'sport-ticket',
                            label: 'ورزشی'
                        },
                        {
                            link: 'travel-ticket',
                            label: 'اتوبوس، مترو و قطار'
                        }
                    ]
                },
                {
                    link: 'tours',
                    label: 'تور و چارتر',
                    children: []
                },
                {
                    link: 'publication',
                    label: 'کتاب و مجله',
                    children: [
                        {
                            link: 'educational-book',
                            label: 'آموزشی'
                        },
                        {
                            link: 'literary-book',
                            label: 'ادبی'
                        },
                        {
                            link: 'historical-book',
                            label: 'تاریخی'
                        },
                        {
                            link: 'religious-book',
                            label: 'مذهبی'
                        },
                        {
                            link: 'magazine',
                            label: 'مجلات'
                        }
                    ]
                },
                {
                    link: 'bike-skate-scooter',
                    label: 'دوچرخه/اسکیت/اسکوتر',
                    children: []
                },
                {
                    link: 'pets-animals',
                    label: 'حیوانات',
                    children: [
                        {
                            link: 'cats',
                            label: 'گربه'
                        },
                        {
                            link: 'rodents',
                            label: 'موش و خرگوش'
                        },
                        {
                            link: 'reptiles',
                            label: 'خزنده'
                        },
                        {
                            link: 'birds',
                            label: 'پرنده'
                        },
                        {
                            link: 'fishes',
                            label: 'ماهی'
                        },
                        {
                            link: 'pet-supplies',
                            label: 'لوازم جانبی'
                        },
                        {
                            link: 'farm-animals',
                            label: 'حیوانات مزرعه'
                        },
                        {
                            link: 'dogs',
                            label: 'سگ'
                        }
                    ]
                },
                {
                    link: 'collecting',
                    label: 'کلکسیون و سرگرمی',
                    children: [
                        {
                            link: 'stamp-coin-collecting',
                            label: 'سکه،تمبر و اسکناس'
                        },
                        {
                            link: 'antique-objects',
                            label: 'اشیای عتیقه'
                        }
                    ]
                },
                {
                    link: 'musical-instruments',
                    label: 'آلات موسیقی',
                    children: [
                        {
                            link: 'guitars',
                            label: 'گیتار، بیس و امپلیفایر'
                        },
                        {
                            link: 'wind-instrument',
                            label: 'سازهای بادی'
                        },
                        {
                            link: 'organ-piano-accordion',
                            label: 'پیانو/کیبورد/آکاردئون'
                        },
                        {
                            link: 'iranian-instruments',
                            label: 'سنتی'
                        },
                        {
                            link: 'percussion-instruments',
                            label: 'درام و پرکاشن'
                        },
                        {
                            link: 'violins',
                            label: 'ویولن'
                        }
                    ]
                },
                {
                    link: 'sport-entertainment',
                    label: 'ورزش و تناسب اندام',
                    children: [
                        {
                            link: 'ball-sports',
                            label: 'ورزش‌های توپی'
                        },
                        {
                            link: 'mountaineering-camping',
                            label: 'کوهنوردی و کمپینگ'
                        },
                        {
                            link: 'water-sports',
                            label: 'غواصی و ورزش‌های آبی'
                        },
                        {
                            link: 'fishing',
                            label: 'ماهیگیری'
                        },
                        {
                            link: 'sport-equipment',
                            label: 'تجهیزات ورزشی'
                        },
                        {
                            link: 'winter-sports',
                            label: 'ورزش‌های زمستانی'
                        },
                        {
                            link: 'horse-riding',
                            label: 'اسب و تجهیزات اسب سواری'
                        }
                    ]
                },
                {
                    link: 'game-and-toys',
                    label: 'اسباب بازی',
                    children: []
                }
            ]
        },
        {
            icon: socialIcon,
            link: 'social-services',
            label: 'اجتماعی',
            children: [
                {
                    link: 'event',
                    label: 'رویداد',
                    children: [
                        {
                            link: 'auction',
                            label: 'حراج'
                        },
                        {
                            link: 'seminars-conference',
                            label: 'گردهمایی و همایش'
                        },
                        {
                            link: 'music-theater',
                            label: 'موسیقی و تئاتر'
                        },
                        {
                            link: 'events-sports',
                            label: 'ورزشی'
                        }
                    ]
                },
                {
                    link: 'voluntary',
                    label: 'داوطلبانه',
                    children: [
                        {
                            link: 'education-research-partner',
                            label: 'تحقیقاتی'
                        }
                    ]
                },
                {
                    link: 'missing',
                    label: 'گم‌شده‌ها',
                    children: [
                        {
                            link: 'lost-animals',
                            label: 'حیوانات'
                        },
                        {
                            link: 'lost-objects',
                            label: 'اشیا'
                        }
                    ]
                }
            ]
        },
        {
            icon: businessIcon,
            link: 'businesses',
            label: 'برای کسب و کار',
            children: [
                {
                    link: 'business-equipment',
                    label: 'تجهیزات و ماشین‌آلات',
                    children: [
                        {
                            link: 'store-equipment',
                            label: 'فروشگاه و مغازه'
                        },
                        {
                            link: 'barber-shop-equipment',
                            label: 'آرایشگاه و سالن‌های زیبایی'
                        },
                        {
                            link: 'office-equipment',
                            label: 'دفتر کار'
                        },
                        {
                            link: 'industrial-equipment',
                            label: 'صنعتی'
                        },
                        {
                            link: 'restaurant-equipment',
                            label: 'کافی‌شاپ و رستوران'
                        },
                        {
                            link: 'medical-equipment',
                            label: 'پزشکی'
                        }
                    ]
                },
                {
                    link: 'wholesale',
                    label: 'عمده فروشی',
                    children: []
                }
            ]
        },
        {
            icon: recruitmentIcon,
            link: 'jobs',
            label: 'استخدام و کاریابی',
            children: [
                {
                    link: 'administrative-jobs',
                    label: 'اداری و مدیریت',
                    children: []
                },
                {
                    link: 'janitorial-jobs',
                    label: 'سرایداری و نظافت',
                    children: []
                },
                {
                    link: 'architect-jobs',
                    label: 'معماری، عمران و ساختمانی',
                    children: []
                },
                {
                    link: 'service-jobs',
                    label: 'خدمات فروشگاه و رستوران',
                    children: []
                },
                {
                    link: 'it-computer-jobs',
                    label: 'رایانه و فناوری اطلاعات',
                    children: []
                },
                {
                    link: 'finance-legal-jobs',
                    label: 'مالی و حسابداری و حقوقی',
                    children: []
                },
                {
                    link: 'marketing-jobs',
                    label: 'بازاریابی و فروش',
                    children: []
                },
                {
                    link: 'technical-jobs',
                    label: 'صنعتی و فنی و مهندسی',
                    children: []
                },
                {
                    link: 'teaching-jobs',
                    label: 'آموزشی',
                    children: []
                },
                {
                    link: 'transport-delivery-jobs',
                    label: 'حمل و نقل',
                    children: []
                },
                {
                    link: 'health-beauty-jobs',
                    label: 'درمانی و زیبایی و بهداشتی',
                    children: []
                },
                {
                    link: 'art-media-jobs',
                    label: 'هنری و رسانه',
                    children: []
                }
            ]
        }
    ];

    return (
        <div>
            <div className={style.navBar}>
                <ul className={style.navBar__list}>
                    <li className={style.navBar__list__categories}>
                        <p> دسته بندی ها</p>
                    </li>
                    <li className={style.navBar__list__all}>
                        <Link to={`/s/tehran`}>
                            <p> همه آگهی ها </p>
                        </Link>
                    </li>
                    {Items.map((Item, index) => {
                        return (
                            <li
                                key={index}
                                className={style.navBar__list__items}
                            >
                                <Link
                                    to={`/s/tehran/${Item.link}`}
                                    className={style.navBar__list__items__link}
                                >
                                    <img src={Item.icon} className={style.iconlist}></img>
                                    {Item.label}
                                </Link>

                            </li>
                        );
                    })
                    }

                </ul>
                <hr />
                <div className={style.CategorySection}>
                    <img className={style.CategoryLogo} src={bazaar} />
                    <img className={style.CategoryLogo} src={appstore} />
                </div>
                <div className={style.CategorySection}>
                    <img className={style.EnamadLogo} src={enamad} />
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        setItemSidebar: () => dispatch({ type: actionTypes.SET_CATEGORY }),
        changeCategory: () => dispatch({ type: actionTypes.SET_CATEGORY })

    };
};

const mapStateToProps = state => {
    return {
        fetchData: state.fetchData,
        category: state.category

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);



