const catalog = {
  kettles: {
    name: "Electric Kettles",
    products: [
      {
        name: "Maxi",
        imageUrl: "",
        config: {
          headline: "1.2 Litres",
        },
      },
      {
        name: "Tevo",
        imageUrl: "",
        config: {
          headline: "1.5 Litres",
        },
      },
      {
        name: "United",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Sixer",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Twigo",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Drum",
        imageUrl: "",
        config: {
          headline: "1.2 Litres",
        },
      },
      {
        name: "Teka",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Vision",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Coco",
        imageUrl: "",
        config: {
          headline: "1.7 Litres",
        },
      },
      {
        name: "Mask",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
    ],
  },
  blenders: {
    name: "Nutri Blenders",
    products: [
      {
        name: "Blender X",
        imageUrl: "",
        config: {
          headline: "Blend fast",
        },
      },
    ],
  },
  toasters: {
    name: "Sandwich Toaster",
    products: [
      {
        name: "Black Beauty",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
      {
        name: "Orange Candy",
        imageUrl: "",
        config: {
          headline: "Waffle",
        },
      },
      {
        name: "Pink Panther",
        imageUrl: "",
        config: {
          headline: "Grill",
        },
      },
      {
        name: "2 Slice Toaster",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
      {
        name: "2 Slice Toaster",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
      {
        name: "2 Slice Transperent Toaster",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
      {
        name: "Panni Grill 2 Slice",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
      {
        name: "Panni 4 Slice",
        imageUrl: "",
        config: {
          headline: "Sandwich Maker",
        },
      },
    ],
  },
  cookers: {
    name: "Rice Cookers",
    products: [
      {
        name: "Hista",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Hector",
        imageUrl: "",
        config: {
          headline: "2.0 Litres",
        },
      },
      {
        name: "Hemberg",
        imageUrl: "",
        config: {
          headline: "1.8 Litres",
        },
      },
      {
        name: "Hemo",
        imageUrl: "",
        config: {
          headline: "2.8 Litres",
        },
      },
    ],
  },
  choppers: {
    name: "Wireless Chopper",
    products: [
      {
        name: "Smarty Plus",
        imageUrl: "",
        config: {
          headline: "30 Watts",
        },
      },
      {
        name: "Smarty",
        imageUrl: "",
        config: {
          headline: "30 Watts",
        },
      },
    ],
  },
  hand_blenders: {
    name: "Hand Blenders",
    products: [
      {
        name: "Vico",
        imageUrl: "",
        config: {
          headline: "180 Watts",
        },
      },
      {
        name: "Vema",
        imageUrl: "",
        config: {
          headline: "250 Watts",
        },
      },
      {
        name: "VPlus",
        imageUrl: "",
        config: {
          headline: "200 Watts",
        },
      },
      {
        name: "Vermoda",
        imageUrl: "",
        config: {
          headline: "400 Watts",
        },
      },
    ],
  },
};

const container = document.getElementById("portfolio-container");
const all_products_html_arr = [];

for (category in catalog) {
  const cat = catalog[category];
  cat["products"].forEach((product) => {
    console.log(product.name);
    all_products_html_arr.push(getProductHtml(category, cat.name, product));
  });
}

function getProductHtml(catId, catName, product) {
  return `
<div class="col-lg-4 col-md-6 portfolio-item filter-${catId}">
  <div class="portfolio-wrap">
    <img src="assets/img/portfolio/${catId}.png" class="img-fluid" alt="" />
    <div class="portfolio-links">
      <a
        href="assets/img/portfolio/${catId}.png"
        data-gallery="portfolioGallery"
        class="portfolio-lightbox"
        title="${product.name} ${product.config.headline}"
      >
        <i class="bi bi-plus"></i>
      </a>
      <a href="portfolio-details.html" title="More Details">
        <i class="bi bi-link"></i>
      </a>
    </div>
    <div class="portfolio-info">
      <h4>${product.name} - ${product.config.headline}</h4>
      <p>${catName}</p>
    </div>
  </div>
</div>
`;
}

container.innerHTML = all_products_html_arr.join("");
