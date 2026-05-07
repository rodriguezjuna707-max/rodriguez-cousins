
/*** Navbar ***/






/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');
const themeIcon = themeButton.querySelector('i');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('bi-sun-fill', isDark);
    themeIcon.classList.toggle('bi-moon-fill', !isDark);
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling ***/

// Step 1: Select the submit button
const rsvpButton = document.getElementById('rsvp-button');

// Step 3: Register a click event listener for the submit button — replaced by validateForm below



/*** Form Validation ***

  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;

    var rsvpInputs = document.getElementById('rsvp-form').elements;

    for (let i = 0; i < rsvpInputs.length; i++) {
        if (rsvpInputs[i].value.length < 2) {
            containsErrors = true;
            rsvpInputs[i].classList.add('error');
        } else {
            rsvpInputs[i].classList.remove('error');
        }
    }

    // TODO: If no errors, call addParticipant() and clear fields
    if (containsErrors == false) {
        const person = {
            name: rsvpInputs[0].value.trim(),
            phone: rsvpInputs[1].value.trim(),
            email: rsvpInputs[2].value.trim()
        };

        toggleModal(person);

        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener('click', validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/


/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById('success-modal');
    let modalContent = document.getElementById('modal-item');

    // Update modal display to flex
    modal.style.display = 'flex';

    // Update modal text to personalized message
    modalContent.textContent = `Thanks for signing up, ${person.name}! We'll send deals and specials straight to your inbox!`;

    // Animate image every 500ms
    let intervalId = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 5000);
}

const closeModalButton = document.getElementById('close-modal-button');

const closeModal = () => {
    document.getElementById('success-modal').style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);

let rotateFactor = 0;
let modalImage = document.getElementById('modal-image');

const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}


/*** Full Menu Image Lightbox ***/

const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('image-lightbox__img');
const lightboxClose = document.querySelector('.image-lightbox__close');
const fullMenuImages = document.querySelectorAll('.full-menu-image');

const openLightbox = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.style.display = 'flex';
}

const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
}

fullMenuImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightbox.addEventListener('click', closeLightbox);
lightboxClose.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});


/*** Floating Action Button — collapsible speed-dial ***/

const fabContainer = document.getElementById('floating-actions');
const fabToggle = document.getElementById('fab-toggle');

const closeFab = () => {
    fabContainer.classList.remove('is-open');
    fabToggle.setAttribute('aria-expanded', 'false');
};

fabToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = fabContainer.classList.toggle('is-open');
    fabToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.addEventListener('click', (e) => {
    if (fabContainer.classList.contains('is-open') && !fabContainer.contains(e.target)) {
        closeFab();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fabContainer.classList.contains('is-open')) {
        closeFab();
    }
});


/*** Menu Item Price Modal ***/

const menuData = {
    'burgers': {
        title: 'Burgers',
        items: [
            { name: 'Hamburger', price: '$5' },
            { name: 'Cheese Burger', price: '$6' },
            { name: 'Cheese Burger Deluxe', price: '$6' },
            { name: 'Bacon Cheese Burger', price: '$7' },
            { name: 'Double Cheese Burger', price: '$8' },
            { name: 'Double Bacon Cheese Burger', price: '$10' },
            { name: 'Bacon Cheese Burger Deluxe', price: '$9' }
        ]
    },
    'cheesesteak': {
        title: 'Cheesesteak',
        items: [
            { name: 'Plain Steak', price: '$6' },
            { name: 'Cheese Steak', price: '$7' },
            { name: 'Cheese Steak Hoagies', price: '$9' },
            { name: 'Cheese Steak Mushrooms', price: '$9' },
            { name: 'Chicken Steak', price: '$6' },
            { name: 'Chicken Cheese Steak', price: '$7' },
            { name: 'Bacon Cheese Steak', price: '$10' },
            { name: 'Chicken Cheese Steak Hoagie', price: '$8' },
            { name: 'Double Cheese Steak', price: '$11' },
            { name: 'Double Cheese Steak Hoagie', price: '$12' },
            { name: 'Double Chicken Cheese Steak', price: '$10' }
        ]
    },
    'hoagies': {
        title: 'Hoagies',
        sized: true,
        items: [
            { name: 'Smoked Turkey', small: '$7', large: '$9' },
            { name: 'Turkey Breast', small: '$7', large: '$9' },
            { name: 'Turkey Ham', small: '$7', large: '$9' },
            { name: 'Ham', small: '$7', large: '$9' },
            { name: 'Regular', small: '$7', large: '$9' },
            { name: 'Italian', small: '$8', large: '$10' },
            { name: 'Chicken Salad', small: '$8', large: '$10' },
            { name: 'Liverwurst', small: '$7', large: '$8' },
            { name: 'Tuna Fish', small: '$8', large: '$10' },
            { name: 'Roast Beef', small: '$8', large: '$10' },
            { name: 'Corn Beef', small: '$8', large: '$10' },
            { name: 'Gourmet Turkey', small: '$7', large: '$9' },
            { name: 'Honey Turkey', small: '$7', large: '$9' },
            { name: 'Buffalo Chicken', small: '$7', large: '$9' },
            { name: 'Hard Salami', small: '$7', large: '$9' },
            { name: 'Spicy Ham', small: '$7', large: '$9' },
            { name: 'Cheese', small: '$7', large: '$9' },
            { name: 'Bologna', small: '$7', large: '$9' },
            { name: 'Beef Bologna', small: '$7', large: '$9' },
        
        ]
    },
    'sandwiches': {
        title: 'Breakfast Sandwiches',
        sized: true,
        items: [
            { name: 'Egg & Cheese', small: '$4', large: '$5' },
            { name: 'Sausage & Egg', small: '$6', large: '$8' },
            { name: 'Sausage, Egg & Cheese', small: '$6', large: '$8' },
            { name: 'Ham & Cheese on Grill', small: '$4', large: '$6' }
        ],
    },
    'platters': {
        title: 'Platters',
        items: [
            { name: 'Cheese Steak', price: '$10' },
            { name: 'Plain Steak', price: '$9' },
            { name: 'Double Cheese Steak', price: '$13' },
            { name: 'Chicken Steak', price: '$9' },
            { name: 'Chicken Cheese Steak', price: '$9' },
            { name: 'Double Chicken Cheese Steak', price: '$12' },
            { name: 'Hamburger', price: '$6' },
            { name: 'Cheese Burger', price: '$7' },
            { name: 'Cheese Burger Deluxe', price: '$8' },
            { name: 'Double Cheese Burger', price: '$10' },
            { name: 'Chicken Nuggets (6 pcs)', price: '$4' },
            { name: 'Chicken Fingers (3 pcs)', price: '$8' },
            { name: 'Chicken Wings (3 pcs)', price: '$8' },
            { name: 'Buffalo Wings (6 pcs)', price: '$7' },
            { name: 'Mozzarella Sticks (6 pcs)', price: '$7' },
            { name: 'Tostones & Salami', price: '$10' }
        ]
    },
    'breakfast': {
        title: 'Breakfast',
        sized: true,
        items: [
            { name: 'Egg & Cheese', small: '$4', large: '$5' },
            { name: 'Sausage & Egg', small: '$6', large: '$8' },
            { name: 'Sausage, Egg & Cheese', small: '$6', large: '$8' },
            { name: 'Ham & Cheese on Grill', small: '$4', large: '$6' }
        ],
        footnote: 'All Hot Sandwiches — $5'
    },
    'breakfast-platters': {
        title: 'Breakfast Platters',
        items: [
            { name: 'Home Fries, Egg, Cheese & Bacon or Sausage', price: '$10' },
            { name: 'Pancake, Egg, Cheese & Bacon or Sausage', price: '$10' },
            { name: 'French Toast, Egg, Cheese & Bacon or Sausage', price: '$10' }
        ]
    },
    'smoothies': {
        title: 'Smoothies',
        items: [
            { name: 'Papaya-Strawberry', price: '$5' },
            { name: 'Mango-Banana', price: '$5' },
            { name: 'Peach-Blueberry', price: '$5' },
            { name: 'Pineapple', price: '$5' }
        ],
        footnote: 'All Smoothies — $5'
    }
};

const menuModal = document.getElementById('menu-modal');
const menuModalTitle = document.getElementById('menu-modal__title');
const menuModalNote = document.getElementById('menu-modal__note');
const menuModalBody = document.getElementById('menu-modal__body');
const menuModalClose = menuModal.querySelector('.menu-modal__close');
const menuItems = document.querySelectorAll('.menu-item[data-category]');

const renderMenuModal = (data) => {
    menuModalTitle.textContent = data.title;
    menuModalNote.textContent = data.note || '';
    menuModalBody.innerHTML = '';

    if (data.sized) {
        const header = document.createElement('div');
        header.className = 'menu-modal__header';
        header.innerHTML = '<span>Item</span><span>Small</span><span>Large</span>';
        menuModalBody.appendChild(header);

        data.items.forEach((item) => {
            const row = document.createElement('div');
            row.className = 'menu-modal__row--sized';
            row.innerHTML = `
                <span class="menu-modal__row-name">${item.name}</span>
                <span class="price-cell">${item.small}</span>
                <span class="price-cell">${item.large}</span>
            `;
            menuModalBody.appendChild(row);
        });
    } else {
        data.items.forEach((item) => {
            const row = document.createElement('div');
            row.className = 'menu-modal__row';
            row.innerHTML = `
                <span class="menu-modal__row-name">${item.name}</span>
                <span class="menu-modal__row-price">${item.price}</span>
            `;
            menuModalBody.appendChild(row);
        });
    }

    if (data.footnote) {
        const foot = document.createElement('div');
        foot.className = 'menu-modal__footnote';
        foot.textContent = data.footnote;
        menuModalBody.appendChild(foot);
    }
};

const openMenuModal = (category) => {
    const data = menuData[category];
    if (!data) return;
    renderMenuModal(data);
    menuModal.classList.add('is-open');
};

const closeMenuModal = () => {
    menuModal.classList.remove('is-open');
};

menuItems.forEach((item) => {
    item.addEventListener('click', () => openMenuModal(item.dataset.category));
});

menuModalClose.addEventListener('click', closeMenuModal);
menuModal.addEventListener('click', (e) => {
    if (e.target === menuModal) closeMenuModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuModal.classList.contains('is-open')) {
        closeMenuModal();
    }
});


