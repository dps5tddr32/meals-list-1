import { useState } from "react";
import './App.css';

// {
//   twoWords: "",
//   title: "",
//   mainImage: "",
//   otherImages: [],
//   whoIsMealFor: "NAE",
//   checkboxes: [
//     ""
//   ],
//   foodVolume: ,
//   bottom: ""
// },

/*

Jacket potato with baked beans and cheddar

MEAL FOR NAE, SO:
Up to 500 g of food,
692 kcal, 83 g carbs, 52 g protein, and 17 g fat.

[]  200 g (so 1 whole) jacket potato (160 kcal, 33 g carbs, 4 g protein, 0 g fat)
[]  205 g baked beans (184 kcal, 30 g carbs, 11 g protein, 1 g fat)
[]  60 g grated cheddar (251 kcal, 2 g carbs, 15 g protein, 20 g fat)
[]  28 g Cookies and Cream whey (112 kcal, 2 g carbs, 22 g protein, 2 g fat)

493 g food volume in total.

(total: 707 kcal, 67 g carbs, 52 g protein, 23 g fat)

*/

const data = [
  {
    type: 'breakfast',
    twoWords: "Toastie 1",
    title: "Toastie (version 1)",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx7MgevpWD2qUjzOTSGV585Gt_4qbeNL2fw&s",
    otherImages: [
      "https://images.ctfassets.net/royi30b2qd26/1sJDt7vClOLqibBeB03JgY/2a763c0e9a92fdff3c9b8ad9f6f7b8da/costa-recipes-loadedhamandcheesetoastie-684x400.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "100 g (so 2) Rowan Hill Thick White Toastie slices (240 kcal, 46 g carbs, 8 g protein, 2 g fat)",
      "44 g Utterly butterfly spread (168 kcal, 0 g carbs, 0 g protein, 18 g fat)",
      "One 25 g cheddar cheese slice (104 kcal, 0 g carbs, 6 g protein, 9 g fat)",
      "170 g (so 10) roasted turkey slices (180 kcal, 0 g carbs, 40 g protein, 0 g fat)"
    ],
    foodVolume: 339,
    bottom: "(total: 692 kcal, 46 g carbs, 54 g protein, 29 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Toastie 2",
    title: "Toastie (version 2)",
    mainImage: "https://assets.bonappetit.com/photos/59f9d40cdb75f001742688c2/1:1/w_2560%2Cc_limit/17_greypoupon_Toasties_1200x628_highrez.jpg",
    otherImages: [
      "https://images.ctfassets.net/uexfe9h31g3m/5eajzk7HQfI587Ed6gDYmm/0f853c9bc3a0969fa4ac6f5b483c584b/Yorkshire_Ham_and_Cheese_Toastie_1024x768.jpg?w=2000&h=1125&fm=webp&fit=thumb&q=100"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "200 g (so 4) Rowan Hill Thick White Toastie slices (480 kcal, 92 g carbs, 16 g protein, 4 g fat)",
      "4 g Utterly butterfly spread (16 kcal, 0 g carbs, 0 g protein, 2 g fat)",
      "12g (so 0.5) cheddar cheese slice (52 kcal, 0 g carbs, 3 g protein, 4 g fat)",
      "136 g (so 8) roasted turkey slices (144 kcal, 0 g carbs, 32 g protein, 0 g fat)"
    ],
    foodVolume: 352,
    bottom: "(total: 692 kcal, 92 g carbs, 51 g protein, 10 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Oreo Cereal",
    title: "Oreo cereal with milk",
    mainImage: "https://i0.wp.com/www.theimpulsivebuy.com/wordpress/wp-content/uploads/2019/06/Post-Mega-Stuf-Oreo-Os-Cereal-Bowl.jpg?resize=600%2C600&ssl=1",
    otherImages: [
      "https://www.fooddive.com/imgproxy/5jxLgv6ik_HFU2rESKGYNtkyslGJDm62kgO4DsW61j0/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlLzgwMjkxNzE4MDBfM2FmZTMwMjgwZV96LmpwZw==.webp"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "105 g Oreo cereal (400 kcal, 85 g carbs, 8 g protein, 2 g fat)",
      "150 g laciate (red) milk (90 kcal, 8 g carbs, 5 g protein, 5 g fat)",
      "49 g Cookies and Cream whey (202 kcal, 3 g carbs, 39 g protein, 3 g fat)",
    ],
    foodVolume: 304,
    bottom: "(total: 692 kcal, 96 g carbs, 52 g protein, 10 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Milk Oatmeal",
    title: "Oatmeal with milk and sugar",
    mainImage: "https://i0.wp.com/c1.staticflickr.com/1/466/18195408979_dd6cc21025_c.jpg?resize=800%2C800&ssl=1",
    otherImages: [
      "https://www.teaforturmeric.com/wp-content/uploads/2022/04/Oatmeal-with-milk-24.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "80 g simply oats (296 kcal, 45 g carbs, 9 g protein, 7 g fat)",
      "305 g laciate (red) milk (183 kcal, 16 g carbs, 10 g protein, 10 g fat)",
      "5 g table sugar (20 kcal, 5 g carbs, 0 g protein, 0 g fat)",
      "49 g Cookies and Cream whey (200 kcal, 3 g carbs, 38 g protein, 3 g fat)",
    ],
    foodVolume: 439,
    bottom: "(total: 699 kcal, 69 g carbs, 57 g protein, 20 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Jam Oatmeal",
    title: "Oatmeal with milk and jam",
    mainImage: "https://assets.bonappetit.com/photos/6411f8423d692fb2753d5044/1:1/w_3123,h_3123,c_limit/031423-suhoor-pbj-oats-lede.jpg",
    otherImages: [
      "https://cookieandkate.com/images/2014/02/toasted-oatmeal-with-strawberry-chia-jam-and-coconut-whipped-cream.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "74 g simply oats (273 kcal, 41 g carbs, 8 g protein, 6 g fat)",
      "281 g laciate (red) milk (169 kcal, 15 g carbs, 9 g protein, 9 g fat)",
      "30 g Hartleys raspberry seedless (72 kcal, 18 g carbs, 1 g protein, 1 g fat)",
      "44 g Cookies and Cream whey (179 kcal, 3 g carbs, 34 g protein, 3 g fat) ",
    ],
    foodVolume: 429,
    bottom: "(total: 693 kcal, 77 g carbs, 52 g protein, 19 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Cottage Cheese",
    title: "Wysokobialkowy cottage cheese meal",
    mainImage: "https://mwrzosek-prod-wp-static.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/08/06160957/15.png",
    otherImages: [
      "https://sniadaniowi.pl/wp-content/uploads/2024/06/Serek-wiejski-na-sniadanie-1.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "200 g wysokobialkowy Piatnica Serek Wiejski (190 kcal, 4 g carbs, 30 g protein, 6 g fat)",
      "3 g spring onions (1 kcal, 1 g carbs, 0 g protein, 0 g fat)",
      "20 g bell pepper (6 kcal, 1 g carbs, 1 g protein, 0 g fat)",
      "28 g olive oil (233 kcal, 0 g carbs, 0 g protein, 26 g fat)",
      "67 g Iced Latte Gainer (258 kcal, 33 g carbs, 21 g protein, 4 g fat)",
    ],
    foodVolume: 318,
    bottom: "(total: 688 kcal, 39 g carbs, 52 g protein, 36 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Banana Crepe",
    title: "Banana crepe",
    mainImage: "https://www.lecremedelacrumb.com/wp-content/uploads/2020/04/banana-crepe-filling-8sm-4-500x500.jpg",
    otherImages: [
      "https://www.lecremedelacrumb.com/wp-content/uploads/2020/04/banana-crepe-filling-7sm-5.jpg",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "35 g plain flour (120 kcal, 27 g carbs, 4 g protein, 1 g fat)",
      "8 g cornflour (28 kcal, 7 g carbs, 0 g protein, 0 g fat)",
      "4 g white normal sugar (16 kcal, 4 g carbs, 0 g protein, 0 g fat)",
      "16 g cubed butter (117 kcal, 0 g carbs, 0 g protein, 13 g fat)",
      "74 g milk (44 kcal, 3 g carbs, 2 g protein, 2 g fat)",
      "8 g Belbake caramel (26 kcal, 6 g carbs, 0 g protein, 0 g fat)",
      "118 g (so 1 whole) banana (105 kcal, 27 g carbs, 1 g protein, 0 g fat)",
      "58 g Cookies and Cream whey (236 kcal, 4 g carbs, 46 g protein, 4 g fat)",
    ],
    foodVolume: 321,
    bottom: "(total: 692 kcal, 78 g carbs, 53 g protein, 20 g fat)"
  },
  {
    type: 'breakfast',
    twoWords: "Bishkoff Crepe",
    title: "Lidl-bishkoff crepe",
    mainImage: "https://143191222.cdn6.editmysite.com/uploads/1/4/3/1/143191222/s188967706576041633_p206_i1_w888.jpeg",
    otherImages: [
      "https://i0.wp.com/walkingthroughlavenderfields.com/wp-content/uploads/2023/05/biscoff-caramelized-banana-vegan-crepes-16.jpeg?fit=1280%2C854&ssl=1",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "35 g plain flour (120 kcal, 27 g carbs, 4 g protein, 1 g fat)",
      "8 g cornflour (28 kcal, 7 g carbs, 0 g protein, 0 g fat)",
      "4 g white normal sugar (16 kcal, 4 g carbs, 0 g protein, 0 g fat)",
      "16 g cubed butter (117 kcal, 0 g carbs, 0 g protein, 13 g fat)",
      "74 g milk (44 kcal, 3 g carbs, 2 g protein, 2 g fat)",
      "19 g Mister Choc smooth spread (112 kcal, 12 g carbs, 1 g protein, 8 g fat)",
      "4 g (so half of 1) Speculoos biscuit (19 kcal, 3 g carbs, 0 g protein, 1 g fat)",
      "58 g Cookies and Cream whey (236 kcal, 4 g carbs, 46 g protein, 4 g fat)",
    ],
    foodVolume: 218,
    bottom: "(total: 692 kcal, 60 g carbs, 53 g protein, 29 g fat)"
  },
  {
    type: 'other',
    twoWords: "Jacket Potato",
    title: "Jacket potato with baked beans and cheddar",
    mainImage: "https://www.ocado.com/cmscontent/recipe_image_large/42801335.jpeg?dlCM",
    otherImages: [
      "https://www.easycheesyvegetarian.com/wp-content/uploads/2016/07/How-to-make-a-perfect-baked-potato-13.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "200 g (so 1 whole) jacket potato (160 kcal, 33 g carbs, 4 g protein, 0 g fat)",
      "205 g baked beans (184 kcal, 30 g carbs, 11 g protein, 1 g fat)",
      "60 g grated cheddar (251 kcal, 2 g carbs, 15 g protein, 20 g fat)",
      "28 g Cookies and Cream whey (112 kcal, 2 g carbs, 22 g protein, 2 g fat)",
    ],
    foodVolume: 493,
    bottom: "(total: 707 kcal, 67 g carbs, 52 g protein, 23 g fat)"
  },
  {
    type: 'other',
    twoWords: "Fufu Thighs",
    title: "Fufu with chicken thighs based on our complete recipe",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa93luAEBXq20A87mHuUDF5CyrZCptkT901A&s",
    otherImages: [
      "https://i.ytimg.com/vi/bnJvv2wNWkU/maxresdefault.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "250 g (including bone) Chicken Thighs with skin on (260 kcal, 0 g carbs, 25 g protein, 18 g fat)",
      "5 g (so 0.5 of one) Maggi cube (9 kcal, 2 g carbs, 1 g protein, 0 g fat)",
      "3 g Batts easy garlic (3 kcal, 0 g carbs, 0 g protein, 0 g fat)",
      "7 g Chicken gravy (2 kcal, 0 g carbs, 0 g protein, 0 g fat)",
      "20 g (so 1/8th of one) red onion (9 kcal, 2 g carbs, 0 g protein, 0 g fat)",
      "38 g (so 2.5 sticks) of okra (12 kcal, 3 g carbs, 1 g protein, 0 g fat)",
      "47 g (so 0.5 of one) big tomato (12 kcal, 2 g carbs, 1 g protein, 0 g fat)",
      "35 g (so 0.25 of one) red bell pepper (11 kcal, 2 g carbs, 1 g protein, 0 g fat)",
      "4 g Palm oil (34 kcal, 0 g carbs, 0 g protein, 4 g fat)",
      "75 g (raw uncooked weight) fufu (maize meal) (247 kcal, 53 g carbs, 6 g protein, 1 g fat)",
      "23 g Cookies and Cream whey (93 kcal, 2 g carbs, 18 g protein, 2 g fat)",
    ],
    foodVolume: 507,
    bottom: "(total: 692 kcal, 66 g carbs, 53 g protein, 25 g fat)"
  },
  {
    type: 'other',
    twoWords: "Orange Pasta",
    title: "Orange sauce non-dark pasta with grated red packet cheese and boiled/seasoned chicken breasts",
    mainImage: "https://www.hungryyvegann.co.uk/wp-content/uploads/2022/01/spicy-coconut-and-tomato-pasta.jpg",
    otherImages: [
      "https://www.the-pasta-project.com/wp-content/uploads/Pasta-with-tomato-sauce-allo-scarpariello-from-Naples-3.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "128 g (weighted boiled) Baresa Fusilli Durum Pasta (211 kcal, 43 g carbs, 6 g protein, 1 g fat)",
      "125 g Orange sauce (126 kcal, 9 g carbs, 3 g protein, 9 g fat)",
      "62 g grated red packet cheese (249 kcal, 0 g carbs, 21 g protein, 18 g fat)",
      "75 g (weighted boiled) chicken breast (106 kcal, 0 g carbs, 24 g protein, 1 g fat)",
    ],
    foodVolume: 390,
    bottom: "(total: 692 kcal, 52 g carbs, 54 g protein, 29 g fat)"
  },
  {
    type: 'other',
    twoWords: "Spag Bol",
    title: "Spaghetti Bolognese",
    mainImage: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg",
    otherImages: [
      "https://simplyveg.org.uk/wp-content/uploads/sites/2/2023/09/spagbol-hero.jpg"
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "73 g (weighted boiled) Linguine pasta (98 k.cal, 20 g carbs, 4 g protein, 0 g fat)",
      "10 g sunflower oil (82 kcal, 0 g carbs, 0 g protein, 8 g fat)",
      "50 g brown onion (20 kcal, 4 g carbs, 1 g protein, 0 g fat)",
      "15 g Batts easy garlic (13 kcal, 2 g carbs, 1 g protein, 0 g fat)",
      "70 g Birchwood British Beef Mince 25% Fat (197 kcal, 0 g carbs, 12 g protein, 17 g fat)",
      "100 g Dolmio Bolognese (47 kcal, 8 g carbs, 1 g protein, 1 g fat)",
      "30 g grated red packet cheese (125 kcal, 0 g carbs, 11 g protein, 9 g fat)",
      "27 g Cookies and Cream whey (110 kcal, 2 g carbs, 21 g protein, 2 g fat)",
    ],
    foodVolume: 375,
    bottom: "(total: 692 kcal, 36 g carbs, 51 g protein, 37 g fat)"
  },
  {
    type: 'other',
    twoWords: "Mince Broccoli",
    title: "Mince beef broccoli with rice",
    mainImage: "https://www.thecookierookie.com/wp-content/uploads/2021/08/featured-mongolian-beef-broccoli-recipe-500x500.jpg",
    otherImages: [
      "https://mommyshomecooking.com/wp-content/uploads/2023/03/Quick-Easy-Beef-and-Broccoli-Stir-Fry-45.jpg",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "150 g (weighed boiled) rice (207 kcal, 47 g carbs, 5 g protein, 0 g fat)",
      "60 g raw broccoli (21 kcal, 4 g carbs, 2 g protein, 0 g fat)",
      "3 g sunflower oil (24 kcal, 0 g carbs, 0 g protein, 3 g fat)",
      "50 g brown onion (20 kcal, 4 g carbs, 1 g protein, 0 g fat)",
      "78 g Birchwood British Beef Mince 25% Fat (221 kcal, 0 g carbs, 13 g protein, 18 g fat)",
      "15 g Dark Soy sauce (17 kcal, 4 g carbs, 0 g protein, 0 g fat)",
      "15 g Batts easy garlic (13 kcal, 2 g carbs, 1 g protein, 0 g fat)",
      "44 g Cookies and Cream whey (180 kcal, 3 g carbs, 35 g protein, 3 g fat)",
    ],
    foodVolume: 415,
    bottom: "(total: 703 kcal, 64 g carbs, 57 g protein, 24 g fat)"
  },
  {
    type: 'other',
    twoWords: "Lidl Wings",
    title: "Lidl frozen spicy wings",
    mainImage: "https://cdn.metro-group.com/de/de_pim_150250001001_01.png?w=400&h=400&mode=pad",
    otherImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgV9ZIWGx4NUmG5U2xD2Frri867vJEjB-hgw&s",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "307 g spicy wings (includes bones) (582 kcal, 5 g carbs, 52 g protein, 39 g fat)",
      "13 g sunflower oil (110 kcal, 0 g carbs, 0 g protein, 11 g fat)",
    ],
    foodVolume: 320,
    bottom: "(total: 692 kcal, 5 g carbs, 52 g protein, 50 g fat)"
  },
  {
    type: 'other',
    twoWords: "Iceland Wings",
    title: "Iceland frozen BBQ wings",
    mainImage: "https://goodmaison.com/cdn/shop/articles/BLOG-Air-fryer-cola-wings-SQ.jpg?v=1695021472",
    otherImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdyuz1-zSLHTcCjBM3dYQqMdQivUUY7pajA&s",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "276 g bbq wings (includes bones) (517 kcal, 13 g carbs, 52 g protein, 29 g fat)",
      "21 g sunflower oil (175 kcal, 0 g carbs, 0 g protein, 17 g fat)",
    ],
    foodVolume: 297,
    bottom: "(total: 692 kcal, 13 g carbs, 52 g protein, 46 g fat)"
  },
  {
    type: 'other',
    twoWords: "Lidl Pizza",
    title: "Lidl BBQ base pizza",
    mainImage: "https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza.jpg",
    otherImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86Doxdhgu1rDABAFgDEphlQLGwz9Eut4ZJg&s",
    ],
    whoIsMealFor: "NAE",
    checkboxes: [
      "205 g (so 4 out of 10 slices) bbq pizza (503 kcal, 72 g carbs, 21 g protein, 15 g fat)",
      "44 g Cookies and Cream whey (182 kcal, 3 g carbs, 35 g protein, 3 g fat)",
    ],
    foodVolume: 249,
    bottom: "(total: 685 kcal, 75 g carbs, 56 g protein, 18 g fat)"
  },
]

const App = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isModalOnPhotos, setIsModalOnPhotos] = useState(false);

  let currentRecipeData = null;

  if (currentRecipe) {
    currentRecipeData = data.find(item => item.twoWords === currentRecipe);
  }

  console.log({currentRecipe})
  console.log({currentRecipeData})

  return (
    <div className="App">
      <div className="breakfast-title">
        Breakfasts:
      </div>
      <div className="food-items-wrapper">
        {data.filter(item => item.type === 'breakfast').map(item => {
          if (!item.mainImage) {
            return (
              <div
                className="food-item-text"
                onClick={() => setCurrentRecipe(item.twoWords)}
              >
                {item.twoWords}
              </div>
            )
          }

          return (
            <div
              className="food-item-photo-wrapper"
              onClick={() => setCurrentRecipe(item.twoWords)}
            >
              <img className="food-item-photo" src={item.mainImage} />
            </div>
          )
        }
        )}
      </div>
      <br/>
      <br/>
      <br/>
      <div className="breakfast-title">
        Other:
      </div>
      <div className="food-items-wrapper">
        {data.filter(item => item.type === 'other').map(item => {
          if (!item.mainImage) {
            return (
              <div
                className="food-item-text"
                onClick={() => setCurrentRecipe(item.twoWords)}
              >
                {item.twoWords}
              </div>
            )
          }

            return (
              <div
                className="food-item-photo-wrapper"
                onClick={() => setCurrentRecipe(item.twoWords)}
              >
                <img className="food-item-photo" src={item.mainImage} />
              </div>
            )
          }
        )}
      </div>

      {currentRecipeData && (
        <div className='modal'>
          <div className="modal-content">

            <div className="modal-header">
              <div
                className="back-button"
                onClick={() => setCurrentRecipe(null)}
              >
                Back
              </div>
              <div
                className="toggle-button"
                onClick={() => setIsModalOnPhotos(!isModalOnPhotos)}
              >
                {isModalOnPhotos ? 'Recipe' : 'Photos'}
              </div>
            </div>

            {!isModalOnPhotos && (
              <div className='modal-recipe'>
                <h3>{currentRecipeData.title}</h3>
                {currentRecipeData.whoIsMealFor === "NAE" && (
                  <>
                    <div>MEAL FOR NAE, SO:</div>
                    <div>Up to 500 g of food,</div>
                    <div>692 kcal, 83 g carbs, 52 g protein, and 17 g fat.</div>
                  </>
                )}
                <br />
                <br/>
                {currentRecipeData.checkboxes.map((checkbox) => (
                  <>
                    <div className='checkbox-wrapper'>
                      <input type="checkbox" name="packersOff" id={checkbox} value="1"/>
                      <label htmlFor={checkbox} className="strikethrough">{checkbox}</label>
                    </div>
                    <br/>
                  </>
                ))}
                <br />
                <div>
                  {`${currentRecipeData.foodVolume} g food volume in total.`}
                </div>
                <br />
                <div>
                  {currentRecipeData.bottom}
                </div>
                <br />
              </div>
            )}

            {isModalOnPhotos && (
              <div className='images-wrapper'>
                <img style={{ width: '100%', marginBottom: 16 }} src={currentRecipeData.mainImage} />
                {currentRecipeData.otherImages.map((otherImage) => (
                  <img style={{ width: '100%', marginBottom: 16 }} src={otherImage} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
