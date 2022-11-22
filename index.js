const menu = document.querySelectorAll('.menu');
const msg = document.querySelectorAll('.message');
const msgSearch = document.querySelector('#messages-search');

const messagessNotification = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');

const acceptBtn1 = document.getElementById('req-1');
const acceptBtn2 = document.getElementById('req-2');
const acceptBtn3 = document.getElementById('req-3');

const numberOfRequest = document.getElementsByClassName('message-requests');

const theme = document.querySelector('#themes');
const cust_theme = document.querySelector('.theme-popup'); 

const fontsizes = document.querySelectorAll('.choose-size span');

const pricolor = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');

var root = document.querySelector(':root');

let count = 4;
let req = "Request";

setMessageRequestHTML();

// This function is for side bar 

const changemenuactive = () => {
    menu.forEach(item => {
        item.classList.remove('active');
    })
};

menu.forEach(item => {
    item.addEventListener('click', () => {
        changemenuactive();
        item.classList.add('active');
        if (item.id == 'notifications') {
            document.querySelector('.notifications-popups').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popups').style.display = 'none';
        }
    })
});

// search messages

const searchMsg = () => {
    const val = msgSearch.value.toLowerCase();
    msg.forEach(char => {
        let name = char.querySelectorAll('h5')[0].innerHTML.toLocaleLowerCase();
        if (name.indexOf(val) != -1) {
            char.style.display ='flex';
        } else {
            char.style.display = 'none';
        }
    });
};


msgSearch.addEventListener('keyup', searchMsg);

// MESSAGES

messagessNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--primary-color)';
    messagessNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
});

// Accept / Decline

acceptBtn1.addEventListener('click', () => {
    acceptBtn1.style.display = 'none';
    setMessageRequestHTML();
});

acceptBtn2.addEventListener('click', () => {
    acceptBtn2.style.display = 'none';
    setMessageRequestHTML();
});

acceptBtn3.addEventListener('click', () => {
    acceptBtn3.style.display = 'none';
    setMessageRequestHTML();
});

// Request Count

function setMessageRequestHTML() {
    count--;
    numberOfRequest[0].innerHTML = req + `(${count})`;
}


// THEME

const opencustomtheme = () => {
    cust_theme.style.display = 'grid'
}

const closethemepopup = (item) => {
    if (item.target.classList.contains('theme-popup')){
        cust_theme.style.display = 'none';
    }
}

cust_theme.addEventListener('click',closethemepopup);

theme.addEventListener('click', opencustomtheme);

// font size

const removeactive = () => {
    fontsizes.forEach(item => {
        item.classList.remove('active')
    })
}

fontsizes.forEach(size => {
    size.addEventListener('click', () => {
        removeactive();
        let fontsize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size1')){
            fontsize = '10px';
            root.style.setProperty('--sticky-topleft', '5.4rem');
            root.style.setProperty('--sticky-topright', '5.4rem');
        } else if (size.classList.contains('font-size2')){
            fontsize = '13px';
            root.style.setProperty('--sticky-topleft', '5.4rem');
            root.style.setProperty('--sticky-topright', '-7rem');
        } else if (size.classList.contains('font-size3')){
            fontsize = '16px';
            root.style.setProperty('--sticky-topleft', '-2rem');
            root.style.setProperty('--sticky-topright', '-17rem');
        } else if (size.classList.contains('font-size4')){
            fontsize = '19px';
            root.style.setProperty('--sticky-topleft', '-5rem');
            root.style.setProperty('--sticky-topright', '-25rem');
        } else if (size.classList.contains('font-size5')){
            fontsize = '22px';
            root.style.setProperty('--sticky-topleft', '-12rem');
            root.style.setProperty('--sticky-topright', '-35rem');
        }
    document.querySelector('html').style.fontSize = fontsize;
    })
})

// primary color

const changeactive = () => {
    pricolor.forEach(pickcolor => {
        pickcolor.classList.remove('active');
    })
}

pricolor.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeactive();

        if (color.classList.contains('color1')){
            primary = 55;
        }
        else if (color.classList.contains('color2')){
            primary = 326;
        }
        else if (color.classList.contains('color3')){
            primary = 34;
        }
        else if (color.classList.contains('color4')){
            primary = 152;
        }
        else if (color.classList.contains('color5')){
            primary = 202;
        }
        else if (color.classList.contains('color6')){
            primary = 276;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary);
    })
})

// Background Color

let lightlightness;
let darklightness;
let whitelightness;

const changebg = () => {
    root.style.setProperty('--lightcolor-lightness', lightlightness);
    root.style.setProperty('--darkcolor-lightness', darklightness);
    root.style.setProperty('--whitecolor-lightness', whitelightness);
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click', () => {
    lightlightness = '15%';
    darklightness = '95%';
    whitelightness = '20%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
})

bg3.addEventListener('click', () => {
    lightlightness = '0%';
    darklightness = '95%';
    whitelightness = '10%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
})