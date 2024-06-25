import React,{ Children, createContext,useEffect,useState}from 'react'

export const MenuContext=createContext()

const MenuProvider = ({children}) => {

  // add to wishlist
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorite');
    if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
    }
}, []);

const addToFavorites=(item)=>{
  setFavorites((prevFav)=>[...prevFav,item])
  localStorage.setItem('favorite',JSON.stringify([...favorites,item]))
}

// remove from wishlist
const removeFromFavorites=(item)=>{
  const updateFav=favorites.filter((fav)=>fav.id!==item.id)
  setFavorites(updateFav)
  localStorage.setItem('favorite',JSON.stringify(updateFav))
}


  const [menu,setMenu]=useState([
    {
      id: 1,
      name: "MINT LIME",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252462/oregano/juice/qmtu6p9anlzcnaqd5fbo.jpg"],
      price: 50
    },
    {
      id: 2,
      name: "ORANGE",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252463/oregano/juice/hdwvh24qlgr3u9ti2erd.jpg"],
      price: 50
    },
    {
      id: 3,
      name: "MUSAMBI",
      category: "juice",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718267173/Mosambi_juice_qgf0cv.jpg"],
      price:50
    },
    {
      id: 4,
      name: "PINEAPPLE",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252468/oregano/juice/todrzzg7ethtpnsdore6.jpg"],
      price: 50
    },
    {
      id: 5,
      name: "PAPAYA",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718267411/Best_Gut_Healthy_Papaya_Juice_-_The_All_Natural_Vegan_nd8icu.jpg"],
      price: 50
    },
    {
      id: 6,
      name: "WATERMELON",
      category: "juice",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252482/oregano/juice/vtl3ybqtlx3bxwhlc1t9.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252489/oregano/juice/gk9mjv7npfkip7horcrm.jpg"],
      price: 50
    },
    {
      id: 7,
      name: "PINEAPPLE WITH LIME",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252466/oregano/juice/nzssbr6xs94wif2strlb.jpg"],
      price: 60
    },
    {
      id: 8,
      name: "POMEGRANATE",
      type:"drink",
      category: "juice",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718267528/The_Easiest_Way_to_Cut_Juice_a_Pomegranate_No_Mess_ychuvw.jpg"],
      price: 60
    },
    {
      id: 9,
      name: "CUSTARD APPLE",
      type:"drink",
      category: "seasonalfresh",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252456/oregano/juice/dwjgw7rrnqv8ixzebrwt.jpg"],
      oreganoSp:"yes",
      price: 100
    },
    {
      id: 10,
      name: "MANGO",
      type:"drink",
      category: "seasonalfresh",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276572/Mango_Shake_bmuofx.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276572/Easy_Mango_Milkshake_Recipe_nrm9gj.jpg"],
      price: 100
    },
    {
      id: 11,
      type:"drink",
      name: "STRAWBERRY",
      category: "seasonalfresh",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276707/Strawberry_Milkshake_Recipe_p2mgww.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276707/Strawberry_Banana_Smoothie_dsxgch.jpg"],
      price: 90
    },
    {
      id: 12,
      name: "KIWI",
      type:"drink",
      category: "seasonalfresh",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276796/Citrus_Kiwi_Smoothie_mswfud.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276796/The_Green_Samurai_Kiwi_Lime_Wasabi_Ginger_ivlw3x.jpg"],
      price: 90
    },
    {
      id: 13,
      name: "GUVA",
      category: "seasonalfresh",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276876/Dining___Japanese_Restaurant___Khmer_food___Sokha_Angkor_Resort_-_Siem_Reap_Cambodia_v0ptgy.jpg"],
      price: 80
    },
    {
      id: 14,
      name: "SHAMAM",
      type:"drink",
      category: "seasonalfresh",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252458/oregano/juice/suw7yzd7bymo7tm4okyo.jpg"],
      price: 80
    },
    {
      id: 15,
      name: "DATES",
      category: "refreshing",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276988/Date_Shake_etgqw8.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276989/Palm_Springs_Date_Shake_Recipe_-_Desserts_Drinks_wxq6lu.jpg"],
      price: 90
    },
    {
      id: 16,
      name: "BADAM",
      type:"drink",
      category: "refreshing",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252455/oregano/juice/sqfh52edvjtep7f0dlcn.jpg"],
      price: 100
    },
    {
      id: 17,
      name: "CASHEW(ROASTED",
      category: "refreshing",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252455/oregano/juice/oikk1r3umhkyb0h9hwep.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252455/oregano/juice/kzvk5ewtu3wep92eenc1.jpg"],
      price: 100
    },
    {
      id: 18,
      name: "FIG",
      category: "refreshing",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252459/oregano/juice/vaup97d79xgov80xdh4u.jpg"],
      price: 100
    },
    {
      id: 19,
      name: "DATES WITH BADAM",
      category: "refreshing",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718276988/Date_Shake_etgqw8.jpg"],
      price: 100
    },
    {
      id: 20,
      name: "PISTA",
      category: "refreshing",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252467/oregano/juice/rwujdt8akjfbhucfj9re.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252467/oregano/juice/t5brikoqjlkwgjwp61of.jpg"],
      price: 130
    },
    {
      id: 21,
      name: "COCKTAIL",
      type:"drink",
      category: "refreshing",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252458/oregano/juice/suw7yzd7bymo7tm4okyo.jpg"],
      price: 130
    },
    {
      id: 22,
      name: "MUNCH",
      type:"drink",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277342/Sharjah_Shake___Banana_Chocolate_Milkshake_-_Mozis_Menu_svlhtm.jpg"],
      price: 70
    },
    {
      id: 23,
      name: "GEMS",
      category: "shake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277435/Oreo_Cold_Coffee_e6mwsl.jpg"],
      price: 70
    },
    {
      id: 24,
      name: "OREO",
      category: "shake",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277523/Drink_r8hz0m.jpg"],
      price: 80,
      type:"drink",
    },
    {
      id: 25,
      name: "HIDE AND SEEK",
      category: "shake",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1718252462/oregano/juice/dfrjoh4tz9hixxuumkzr.jpg"],
      price: 80
    },
    {
      id: 26,
      name: "GALAXY",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277342/Sharjah_Shake___Banana_Chocolate_Milkshake_-_Mozis_Menu_svlhtm.jpg"],
      price: 100
    },
    {
      id: 27,
      name: "SNICKERS",
      type:"drink",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277838/Snickers_-_Milkshake_Recipe_nbzdvl.jpg"],
      price: 100
    },
    {
      id: 28,
      name: "KITKAT",
      type:"drink",
      category: "shake",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277633/KitKat_Shake_in_Mumbai_rrmtkd.jpg"],
      price: 100
    },
    {
      id: 29,
      name: "TWIX",
      type:"drink",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718850989/Easy_Twix_Milkshake_bw9mvk.jpg"],
      price: 110
    },
    {
      id: 30,
      name: "NUTELLA",
      category: "shake",
      type:"drink",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718278120/3_Ingredient_Nutella_Frappuccino_Nutella_Coffee_Slushie_bpkhqa.jpg"],
      price: 110
    },
    {
      id: 31,
      name: "PEANUT BUTTER",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277839/Peanut_Butter_Protein_Shake_rvc7te.jpg"],
      price: ""
    },
    {
      id: 32,
      name: "LOTUS BISCOFF",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277983/Lotus_biscoff_shake_djf0yc.jpg"],
      price: 1110
    },
    {
      id: 33,
      name: "PEANUT OREO",
      type:"drink",
      category: "shake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718278060/17_Best_Non-Alcoholic_Summer_Drinks_-_FoodMasta_mpop0m.jpg"],
      price: 130
    },
    {
      id: 34,
      name: "KITKAT NUTELLA",
      category: "shake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277633/KitKat_Shake_in_Mumbai_rrmtkd.jpg"],
      price: 130
    },
    {
      id: 35,
      name: "PASSION FRUIT",
      type:"drink",
      category: "mojito",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252466/oregano/juice/tiz2k402q7obfyrtilyi.jpg"],
      price: "80 / 100"
    },
    {
      id: 36,
      name: "MOJITO MINT",
      type:"drink",
      category: "mojito",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289125/Mojito_ep2h7c.jpg"],
      price: "80 / 100"
    },
    {
      id: 37,
      name: "WATER MELON",
      category: "mojito",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252482/oregano/juice/vtl3ybqtlx3bxwhlc1t9.jpg"],
      price: "80 / 100"
    },
    {
      id: 38,
      name: "GREEN APPLE",
      type:"drink",
      category: "mojito",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289125/2dda6c04-2e01-49d5-a97f-de4088d71ee3_dj5zfk.jpg"],
      price: "80 / 100"
    },
    {
      id: 39,
      name: "KIWI",
      type:"drink",
      category: "mojito",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289125/Kiwi_Mojito_-_Mixop_ybp8uw.jpg"],
      price: "80 / 100"
    },
    {
      id: 40,
      name: "BLUE CURACAO",
      category: "mojito",
      type:"drink",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719132295/Sip_on_theVibrant_Electric_Blue_Breeze_Cocktail_autiq7.jpg"],
      price: "80 / 100"
    },
    {
      id: 41,
      name: "BUBBLE GUM",
      category: "mojito",
      type:"drink",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718287343/Bubblegum_Mojito_Recipe___Cocktail_bqmuvb.jpg"],
      price: "80 / 100"
    },
    {
      id: 42,
      name: "SHARJAH",
      type:"drink",
      category: "smoothi",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718277839/Peanut_Butter_Protein_Shake_rvc7te.jpg"],
      price: 70
    },
    {
      id: 43,
      name: "CHIKKU",
      category: "smoothi",
      type:"drink",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289656/The_Best_Pomegranate_Smoothie_ijhqdw.jpg"],
      price: 80
    },
    {
      id: 44,
      name: "PAPAYA",
      category: "smoothi",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289656/Papaya_Banana_Smoothie_u8sbew.jpg"],
      price: 80
    },
    {
      id: 45,
      name: "COCKTAIL",
      category: "smoothi",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289827/Pineapple_Mango_Smoothie_with_a_boozy_option___Ambitious_Kitchen_zbai4x.jpg"],
      price: 80
    },
    {
      id: 46,
      name: "APPLE",
      category: "smoothi",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289655/Day_2___Apple_Pie_Smoothie_-_Fraiche_Living_ewaju6.jpg"],
      price: 90
    },
    {
      id: 47,
      name: "POMEGRANATE",
      category: "smoothi",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718289656/The_Best_Pomegranate_Smoothie_ijhqdw.jpg"],
      price: 100
    },
    {
      id: 48,
      name: "VANILA",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290263/Vanilla_Milkshake_-_Ice_Cream_From_Scratch_u5xalc.jpg"],
      price: 80
    },
    {
      id: 49,
      name: "STRAWBERRY",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290269/Strawberry_Coconut_Milk_Shake_vegan_paleo_cwucuy.jpg"],
      price: 80
    },
    {
      id: 50,
      name: "CHOCOLATE",
      oreganoSp:"yes",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290537/Boozy_S_mores_Milkshakes_ctnth0.jpg"],
      price: 80
    },
    {
      id: 51,
      name: "PISTA",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290265/Shamrock_Shake_Recipe_jwjjj8.jpg"],
      price: 80
    },
    {
      id: 52,
      name: "KULFI Icream shake",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290262/Kulfi_Recipe_3_Ways_iiw352.jpg"],
      price: 80
    },
    {
      id: 53,
      name: "BUTTER SCOTCH",
      oreganoSp:"yes",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719132367/3_Summer_Milkshakes_-_Bake_with_Shivesh_1_dihnoe.jpg"],
      price: 80
    },
    {
      id: 54,
      name: "ANJEER",
      category: "icecreamShake",
      type:"drink",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290537/Coconut_Shake_Recipe_ev4wrh.jpg"],
      price: 80
    },
    {
      id: 55,
      name: "MANGO",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290254/3_Summer_Milkshakes_-_Bake_with_Shivesh_dttkxb.jpg"],
      price: 80
    },
    {
      id: 56,
      name: "SPANISH DELIGHT",
      category: "icecreamShake",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290262/Dulce_de_Leche_Coffee_Milkshake_Recipe_r7xose.jpg"],
      price: 90
    },
    {
      id: 57,
      name: "TENDER COCONUT",
      type:"drink",
      category: "icecreamShake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290537/Coconut_Shake_Recipe_ev4wrh.jpg"],
      price: 90
    },
    {
      id: 58,
      name: "BLUEBERRY",
      type:"drink",
      category: "icecreamShake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290255/Blueberry_Milkshake_Recipe_-_Almost_Supermom_yeevft.jpg"],
      price: 120
    },
    {
      id: 59,
      name: "RED VELVET",
      type:"drink",
      category: "icecreamShake",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718290255/Red_Velvet_Milkshake_Recipe_-_5_Ingredients_Only_-_Bake_with_Shivesh_lmbafb.jpg"],
      price: 120
    },
    {
      id: 60,
      name: "PEANUT MOOS",
      category: "freaky",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/67686915-f88a-468d-b0af-448598df573f_lwxq1u.jpg"],
      price: 160
    },
  
    {
      id: 61,
      name: "NUTELLA",
      category: "freaky",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/Nutella_frappe_dszonw.jpg"],
      price: 160
    },
    {
      id: 62,
      name: "SAHARA",
      category: "freaky",
      type:"drink",
      image: [],
      price: 160
    },
    {
      id: 63,
      name: "BLAST",
      category: "freaky",
      image: [],
      type:"drink",
      price: 150
    },
    {
      id: 64,
      name: "MONSTER",
      category: "freaky",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718733821/Oregano_Monster_cafeoregano_cafe_kannur_kerala_xojvv1.jpg"],
      price: 170
    },
    {
      id: 65,
      name: "BURST",
      category: "freaky",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718712981/WhatsApp_Image_2024-06-14_at_16.34.14_240c6a15_ppij4v.jpg"],
      price: 170
    },
    {
      id: 66,
      name: "FRAPPE",
      category: "cold",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/Easy_Greek_Frappe_Instant_Iced_Coffee_wc4qd7.jpg"],
      price: 100
    },
    {
      id: 67,
      type:"drink",
      name: "FRENCH VANILLA",
      category: "cold",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/French_Vanilla_Iced_Coffee_sbwqpb.jpg"],
      price: 110
    },
    {
      id: 68,
      name: "DOUBLE CHOCOCHIP",
      category: "cold",
      type:"drink",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/ICED_CHOCOLATE_tvo1ek.jpg"],
      price: 120
    },
    {
      id: 69,
      type:"drink",
      name: "CARAMEL",
      category: "cold",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718703822/Easy_Salted_Caramel_Sauce_-_The_Perfect_Dessert_Topping_x4luas.jpg"],
      price: 120
    },
    {
      id: 70,
      name: "SNACK BOX",
      oreganoSp:"yes",
      category: "combo",
      description:"2 Pc Chicken, 2 Bun 1 Garlic Paste, Fries",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_8_vdewoz.png"],
      price: 190
    },
    {
      id: 71,
      name: "DINNER MEAL",
      category: "combo",
      description:"3 Pc Chicken, 3 Bun, 1 Garlic Paste, Fries",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_8_vdewoz.png"],
      price: 300
    },
    {
      id: 72,
      name: "ROYAL BOX",
      category: "combo",
      description:"6 Pc Chicken, 5 Bun,1 Coleslow 1 Garlic Paste, Fries,750 ml Coke",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_5_r3ee1k.png"],
      price: 700
    },
    {
      id: 73,
      name: "FAMILY PACK",
      category: "combo",
      description:"9 Pc Chicken, 6 Bun,2 Coleslow 2 Garlic Paste, Fries,750 ml Coke",
      price:950,
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_2_qhdj52.png","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_5_r3ee1k.png"]
    },
    {
      id: 74,
      name: "FAMILY SPECIAL",
      category: "combo",
      description:"12 Pc Chicken, 6 Bun,3 Coleslow, 3 Garlic Paste, Fries, 1.50 ltr Coke",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718708913/Untitled_design_2_qhdj52.png"],
      price: 1150
    },
    {
      id: 75,
      name: "JAMBO PACK",
      oreganoSp:"yes",
      category: "combo",
      description:"15 Pc Chicken, 12 Bun,3 Coleslow, 4 Garlic Paste, Fries,2.25 ltr Coke",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718709858/Untitled_design_10_a0qeou.png"],
      price: 1300
    },
    {
      id: 76,
      name: "KING JUMBO",
      category: "combo",
      description:"20 Pc Chicken, 15 Bun,4 Coleslow, 5 Garlic Paste, Fries,2.25 ltr Coke",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718709858/Untitled_design_10_a0qeou.png"],
      price: 1800
    },
    {
      id: 77,
      name: "CHICKPOP",
      category: "starter",
      oreganoSp:"yes",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718709957/Vegan_KFC_Fried_Chicken_Copycat_lew3bd.jpg"],
      price: "110 / 150"
    },
    {
      id: 78,
      name: "NUGGETS",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718710129/Premium_Photo___Homemade_chicken_nuggets_battered_with_panko_xv4tsn.jpg"],
      price: "100 / 130"
    },
    {
      id: 79,
      name: "FRESH FRIES",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718712968/The_Best_Homemade_French_Fries_iqivxc.jpg"],
      price: "80/ 120"
    },
    {
      id: 80,
      name: "PERIPERI FRIES",
     
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718712982/WhatsApp_Image_2024-06-14_at_18.11.40_6bd91240_stz95w.jpg"],
      price: 150
    },
    {
      id: 81,
      name: "CREAMY FRIES",
      oreganoSp:"yes",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718713707/Homemade_Garlic_Fries_-_Happy_Snackcidents_d0tzik.jpg"],

      price: 120
    },
    {
      id: 82,
      name: "OREGANO SALAD(VEG/NON VEG",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718713891/15_Bright_Vibrant_Seasonal_Salad_Recipes_To_Enjoy_This_Summer___Rachel_Phipps_glljyy.jpg",""],
      price: "100 / 110"
    },
    {
      id: 83,
      name: "CRISPY CHICKEN WITH BBQ SAUCE",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714466/BBQ_Chicken_Wings_xqknlj.jpg"],
      price: 140
    },
    {
      id: 84,
      name: "POTATO WEDGES",
     category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714466/Baked_Potato_Wedges_jddqpo.jpg"],
      price: 100
      
    },
    {
      id: 85,
      name: "CHICKEN LOLLIPOP",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714465/Premium_Photo___Chicken_lollipop_is_Indian_Chinese_appetizer_which_is_a_frenched_chicken_winglet_ijxhya.jpg"],
      price: 170

    },
    {
      id: 86,
      name: "CHEESY FRIES",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718713016/Cheese_Fries_The_Ultimate_Comfort_Food_jdnuov.jpg"],
      price: 100

    },
    {
      id: 87,
      name: "JOPPIE FRIES",
      category: "starter",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1718714214/IMG_7001_TIF_xrkhs2.jpg"],
      price: 100

    },
    {
      id: 88,
      name: "CRISPY CHICKEN",
      category: "pizza",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714657/Chicken_Bacon_Ranch_Pizza_metnl7.jpg"],
      price: "240 / 370"

    },
    {
      id: 89,
      name: "BBQ CHICKEN",
      oreganoSp:"yes",
      category: "pizza",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714203/IMG_6997_TIF_vwan8u.jpg"],
      price: "260 / 390"

    },
    {
      id: 90,
      name: "TANDOORI CHICKEN",
      category: "pizza",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714657/70a368ce-a8e3-4a05-8302-8aa6bacd8644_rn0de2.jpg"],
      price: "260 / 390"

    },
    {
      id:91,
      name: "BEEF SUPREME",
      category: "pizza",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714655/Homemade_Supreme_Pizza_bqulkd.jpg"],
      price: "250 / 420"
      
    },
    {
      id: 92,
      name: "VEGGIES",
      category: "pizza",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718714655/Veggie_Deluxe_Pizza_cb2ptq.jpg"],
      price: "210 / 360"
    },
    {
      id: 93,
      name: "KIDS BURGER",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726929/Young_Boy_Eating_Chessburger_Stock_Image_-_Image_of_lettuce_food__7035745_lrnimt.jpg"],
      price: 70
    },
    {
      id: 94,
      name: "VEG Burger",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726913/Vegan_Guacamole_Crunch_Burgers_kl3fck.jpg"],
      price: 100
    },
    {
      id: 95,
      name: "ZINGER",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726921/Kanapka_a_la_Zinger_burger_z_kurczakiem_qf4yuk.jpg"],
      price: 120
    },
    {
      id: 96,
      name: "PATTY BURGER",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726913/The_best_home_made_by_Chicken_Burger_vixnzc.jpg"],
      price: 120
    },
    {
      id: 97,
      name: "CRUNCHY BURGER",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726922/Crispy_Chicken_Burger_Recipe_by_SooperChef_nv0ced.jpg"],
      price: 130
    },
    {
      id: 98,
      name: "CLASSIC CHEESE",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726913/Burger__Food__Cheese__Cheese_Burger_sqpbcz.jpg"],
      price: 140
    },
    {
      id: 99,
      name: "SOUTHERN SPICE",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726913/Smash_Burgers_agiymc.jpg"],
      price: 130
    },
    {
      id: 101,
      name: "BBQ",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726912/Double_BBQ_Cheddar_Burger_tvdg4c.jpg"],
      price: 130
    },
    {
      id:102,
      name: "strawberry",
      category: "freaky",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718712985/WhatsApp_Image_2024-06-14_at_16.34.15_194969ef_wxyeqc.jpg"],
      price: 170
    },
    {
      id:103,
      name: "DOCTOR",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718733820/Doctor_Burger......Looking_for_more_saucy_burger_Just_try_out_Doctor_Burger_cafeoregano66CAFE_OREGANO_TASTE_THE_VIRGIN_cafeoregano66_doctorburger_sauce_chicken_yummy_cheese_doubledouble_healthydiet_oilfre_h3q27j.jpg"],
      price: 140
    },
    {
      id:104,
      name: "BEEF",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718726921/Best_Hamburger_Patty_Recipe___A_Spicy_Perspective_fvepdq.jpg"],
      price: 160
    },
    {
      id:105,
      name: "NEGRISTO",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718727285/6ad77370-1238-4bce-9e8a-790b1ef4a662_luizex.jpg"],
      price: 170
    },
    {
      id:106,
      name: "DOUBLE DECKER",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1718714208/IMG_6999_TIF_t6gqg3.jpg"],
      price: 200
    },
    {
      id:107,
      name: "SLIDE",
      category: "burger",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718727381/I_dag_kan_du_s%C3%A6tte_t%C3%A6nderne_i_en_hot_nyhed_1_avzjtc.jpg"],
      price: 200
    },
    {
      id:108,
      name: "JUMBOO",
      category: "wrap",
      image: [""],
      price: 140
    },
    {
      id:109,
      name: "CRUNCHY SPICE",
      category: "wrap",
      image: [],
      price: 130
    },
    {
      id:110,
      name: "SOUTHERN SPICE",
      category: "wrap",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718728411/BBQ_Chicken_Wraps_Homemade_Coleslaw___Don_t_Go_Bacon_My_Heart_adyhqy.jpg"],
      price: 130
    },
    {
      id:111,
      name: "CLASSIC",
      category: "wrap",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718728410/Shredded_Buffalo_Chicken_Wraps___Don_t_Go_Bacon_My_Heart_kiurlg.jpg"],
      price: 110
    },
    {
      id:112,
      name: "ZINGER",
      oreganoSp:"yes",
      category: "wrap",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718728416/Crunchy_Chicken_Wrap_Recipe_-_romxhg.jpg"],
      price: 120
    },
    {
      id:113,
      name: "BBQ",
      category: "wrap",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718728553/Crispy_BBQ_Chicken_Wraps_25_Minutes_ldk4td.jpg"],
      price: 130
    },
    {
      id:114,
      name: "SOUTHERN SPICE",
      category: "sandwich",
      image: [],
      price: "120 / 150"
    },
    {
      id:115,
      name: "BBQ",
      category: "sandwich",
      image: [],
      price: "120 / 160"
    },
    {
      id:116,
      name: "CLASSIC CLUB",
      category: "sandwich",
      image: [],
      price:" 110 /150"
    },
    {
      id:117,
      name: "ZINGER CLUB",
      category: "sandwich",
      image: [],
      price: "110 / 140"
    },
    {
      id:118,
      name: "GARDEN FRESH VEG",
      category: "sandwich",
      image: [],
      price: "100 / 130"
    },
    {
      id:119,
      name: "WHITE SAUCE",
      category: "pasta",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718732367/White_Sauce_Pasta_B%C3%A9chamel_Sauce_Pasta_-_Spice_Up_The_Curry_cvzw4p.jpg"],
      veg_price: 180,
      Nonveg_price: 200
    },
    {
      id:120,
      name: "RED SAUCE",
      category: "pasta",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718731948/Classic_Tomato_Sauce_Pasta_Recipe_qht6gd.jpg"],
      veg_price: 180,
      Nonveg_price: 200
    },
    {
      id:121,
      name: "MASHROOM SAUCE",
      category: "pasta",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718731948/Rigatoni_with_creamy_Mushroom_sauce_pmnvsf.jpg"],
      veg_price: 180,
      Nonveg_price: 220
      
    },
    {
      id:122,
      name: "CREAMY RED SAUCE",
      category: "pasta",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718731949/Creamy_Tomato_Pasta_Sauce___Slimming_Eats_Recipes_lfqlw7.jpg"],
      veg_price: 180,
      Nonveg_price: 220
    },
    {
      id:123,
      name: "1pc CHICKEN",
      category: "addon",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718346234/Fried_Chicken_Sticker_by_emilyyummy-removebg-preview_fuv3ny.png"],
      price: 90
    },
    {
      id:124,
      name: "1pc BUN",
      category: "addon",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718346234/accord_filekasux6-removebg-preview_n77ptf.png"],
      price: 10
    },
    {
      id:125,
      name: "GARLIC PASTE",
      category: "addon",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718346234/How_To_Make_Toum__the_Lebanese_Garlic_Sauce_You_ll_Want_to_Eat_on_Everything-removebg-preview_lgoalg.png"],
      price: 40
    },
    {
      id:126,
      name: "COLESLAW",
      category: "addon",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718346234/SoCal-Based_Cooking__Lifestyle___DIY_Blog___Oh_So_Delicioso-removebg-preview_1_h2lryr.png"],
      price: 40
    },
    {
      id:127,
      name: "FALOODA",
      category: "exoticFalooda",
      image: [],
      price: 90
    },
    {
      id:128,
      name: "KULFISM",
      category: "exoticFalooda",
      image: ["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718733820/KULFISM......TASTE_THE_VIRGIN_cafeoregano66_icecream_falooda_yummymummies_bestmix_dryfruits_healthyfood_healthydiet_cafeoregano_special_pazhayangadi_kannur_jtsnww.jpg"],
      price: 120
    },
    {
      id:129, 
      name: "ROYAL FALOODA",
      category: "exoticFalooda",
      image: [],
      price:130
    },
    {
      id:130,
      name: "BROWNIE FALOODA",
      category: "exoticFalooda",
      image: [],
      price: 130
    },
    {
      id:131,
      name: "PISTACHIO",
      category: "exoticFalooda",
      image: [],
      price: 130
    },
    {
      id:132,
      name: "ELANEER FALOODA",
      category: "exoticFalooda",
      image: [],
      price: 130
    },
    {
      id:133,
      name: "TENDER PERSIAN MIX",
      category: "exoticFalooda",
      image: [],
      price: 140
    },
    {
      id:134, 
      name: "FIG HONEY FALOODA",
      category: "exoticFalooda",
      image: [],
      price: 140
    },
    {
      id:135,
      name: "OREGANO FALOODA",
      category: "exoticFalooda",
      image: [],
      price: 250
    },
    
  ])
  return (
  <MenuContext.Provider value={{menu,setMenu,addToFavorites,removeFromFavorites,favorites}}>
    {children}
  </MenuContext.Provider>
  )
}

export default MenuProvider
