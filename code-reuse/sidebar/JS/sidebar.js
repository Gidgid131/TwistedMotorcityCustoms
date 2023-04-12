const title = document.querySelector('.title');
const categories = document.querySelector('.categories');
const rotateBtn = document.querySelector('.rotate-btn');
const categoryData = [
  {
    title: 'New Motorcycle Parts',
    categories: [
      {
        title: 'Frames',
        subcategories: [
          'Sportbike Frames',
          'Cruiser Frames',
          'Custom Frames'
        ]
      },
      {
        title: 'Handlebars',
        subcategories: [
          'Sportbike Handlebars',
          'Cruiser Handlebars',
          'Custom Handlebars'
        ]
      },
      {
        title: 'Handlebar Risers',
        subcategories: [
          'Sportbike Risers',
          'Cruiser Risers',
          'Custom Risers'
        ]
      }
    ]
  },
  {
    title: 'New Car Parts',
    categories: [
      {
        title: 'Engine Parts',
        subcategories: [
          'Cylinder Heads',
          'Camshafts',
          'Pistons'
        ]
      },
      {
        title: 'Suspension Parts',
        subcategories: [
          'Coilovers',
          'Strut Bars',
          'Sway Bars'
        ]
      },
      {
        title: 'Body Parts',
        subcategories: [
          'Bumpers',
          'Hoods',
          'Grilles'
        ]
      }
    ]
  },
  {
    title: 'Used Vehicles',
    categories: [
      {
        title: 'Cars',
        subcategories: [
          'Sedans',
          'Coupes',
          'Hatchbacks'
        ]
      },
      {
        title: 'Trucks',
        subcategories: [
          'Pickup Trucks',
          'SUVs',
          'Vans'
        ]
      },
      {
        title: 'Motorcycles',
        subcategories: [
          'Sport Bikes',
          'Cruisers',
          'Touring Bikes'
        ]
      }
    ]
  },
  {
    title: 'Used Parts',
    categories: [
      {
        title: 'Engines',
        subcategories: [
          'Gasoline Engines',
          'Diesel Engines',
          'Hybrid Engines'
        ]
      },
      {
        title: 'Transmissions',
        subcategories: [
          'Manual Transmissions',
          'Automatic Transmissions',
          'CVT Transmissions'
        ]
      },
      {
        title: 'Suspension Parts',
        subcategories: [
          'Springs',
          'Shocks',
          'Struts'
        ]
      }
    ]
  }
];

let currentCategory = 0;

function updateCategories() {
  categories.innerHTML = '';
  const currentData = categoryData[currentCategory];
  title.textContent = currentData.title;
  currentData.categories.forEach(category => {
    const categoryItem = document.createElement('li');
    const categoryLink = document.createElement('a');
    categoryLink.textContent = category.title;
    categoryItem.appendChild(categoryLink);
    if (category.subcategories.length > 0) {
      const subcategories = document.createElement('ul');
      category.subcategories.forEach(subcategory => {
        const subcategoryItem = document.createElement('li');
        const subcategoryLink = document.createElement('a');
        subcategoryLink.textContent = subcategory;
        subcategoryItem.appendChild(subcategoryLink);
        subcategories.appendChild(subcategoryItem);
      });
      categoryItem.appendChild(subcategories);
    }
    categories.appendChild(categoryItem);
  });
  categories.classList.remove('rotate1', 'rotate2', 'rotate3', 'rotate4');
  categories.classList.add(`rotate${currentCategory + 1}`);
}

updateCategories();

rotateBtn.addEventListener('click', function() {
  currentCategory = (currentCategory + 1) % categoryData.length;
  updateCategories();
});