import React from "react";
import ReactDOM from "react-dom/client"; 



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="Food Logo"
                    src="https://static.vecteezy.com/system/resources/previews/036/346/173/non_2x/fast-food-logo-design-vector.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({ resData }) => {
 
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, totalRatingsString, costForTwo } = resData.info;

  return (
      <div className="rest-card" style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "10px", margin: "10px", width: "250px" }}>
          <img 
              className="rest-logo" 
              alt="Restaurant Logo" 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} // Default image agar image na ho
              style={{ width: "100%", height: "150px", borderRadius: "10px" }}
          />
          <h3>{name}</h3>
          <h4>{cuisines?.join(", ")}</h4>
          <h4>Rating {avgRating} ⭐ ⭐️ ⭐ ⭐️ 🤩</h4>
          <h4>totalRatings {totalRatingsString}</h4>
          <h4>{costForTwo}</h4>
          
      </div>
  );
};




const resList =[
      {
        info: {
          id: "723574",
          name: "La Pino'z Pizza",
          cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
          locality: "Dhoomanganj",
          areaName: "Harwara",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          avgRating: 4.3,
          parentId: "4961",
          totalRatingsString: "2.8K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.5 km"
          },
          availability: {
            nextCloseTime: "2025-03-21 23:59:00",
            opened: true
          },
          isOpen: true,
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/allahabad/la-pinoz-pizza-dhoomanganj-harwara-rest723574",
          type: "WEBLINK"
        }
       },
       {
        info: {
          id: "711209",
          name: "Baskin Robbins - Ice Cream Desserts",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/d3100103-1e96-46ec-a468-b1abb27b20b5_711209.jpg",
          locality: "Gol Park Attarsuiya",
          areaName: "Meerapur",
          costForTwo: "₹250 for two",
          cuisines: ["Desserts", "Ice Cream"],
          avgRating: 4.2,
          veg: true,
          parentId: "5588",
          totalRatingsString: "144",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "7.0 km"
          },
          availability: {
            nextCloseTime: "2025-03-22 02:30:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                description: "Delivery!"
              }
            ]
          },
          isOpen: true,
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/allahabad/baskin-robbins-ice-cream-desserts-gol-park-attarsuiya-meerapur-rest711209",
          type: "WEBLINK"
        }
       },
       {
        info: {
          id: "496380",
          name: "NIC Ice Creams",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/3a1e6172-e4e4-44b4-ba3a-f0accdcda411_496380.jpg",
          locality: "GTB Nagar",
          areaName: "Kareli",
          costForTwo: "₹120 for two",
          cuisines: ["Ice Cream", "Desserts"],
          avgRating: 4.7,
          veg: true,
          parentId: "6249",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "5.0 km"
          },
          availability: {
            nextCloseTime: "2025-03-22 00:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                description: "Delivery!"
              }
            ]
          },
          isOpen: true,
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/allahabad/nic-ice-creams-gtb-nagar-kareli-rest496380",
          type: "WEBLINK"
        }
       },
       {
       info: {
        id: "779182",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a27e3a1a-7547-4f6c-818c-b675f3a3462c_779182.JPG",
        locality: "Meerapur",
        areaName: "Prayagraj",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 4.6,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.6",
        totalRatingsString: "220",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 6.9,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "6.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-03-21 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              description: "Delivery!"
            },
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
      },
      cta: {
        link: "https://www.swiggy.com/city/allahabad/the-belgian-waffle-co-meerapur-prayagraj-rest779182",
        type: "WEBLINK"
      }
    },
    {
     info: {
      id: "80315",
      name: "Eat On",
      cloudinaryImageId: "beufrlqdvkbwb5eb0xoo",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Rolls & Wraps"],
      avgRating: 4.5,
      parentId: "76053",
      avgRatingString: "4.5",
      totalRatingsString: "68K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "9.9K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/eat-on-civil-lines-rest80315",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "442056",
      name: "The Biryani Life",
      cloudinaryImageId: "uu7a0fqio5jygufj8lul",
      locality: "Stanley Road",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
      
      ],
      avgRating: 4.3,
      parentId: "8496",
      avgRatingString: "4.3",
      totalRatingsString: "798",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/the-biryani-life-stanley-road-civil-lines-rest442056",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80420",
      name: "Bikanervala",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/7d87d5cc-75c2-49eb-b0db-9c69e2bdbcc8_80420.jpg",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Street Food"],
      avgRating: 4.3,
      parentId: "45936",
      avgRatingString: "4.3",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
            description: "Delivery!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Chole%20Bhature.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chole%20Bhature.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "1.3K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/bikanervala-civil-lines-rest80420",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "124580",
      name: "Samira Restaurant",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/96d84d7d-4a90-4fc5-ba08-0c1ae01991d0_124580 (1).jpg",
      locality: "Katju Road",
      areaName: "Leader Road",
      costForTwo: "₹450 for two",
      cuisines: [
        "Indian",
        "Mughlai",
        "Biryani",
        "Lucknowi",
        "Thalis",
        "Tandoor"
      ],
      avgRating: 3.9,
      parentId: "176508",
      avgRatingString: "3.9",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/samira-restaurant-katju-road-leader-road-rest124580",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "442055",
      name: "The Good Bowl",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/382182e7-b4d7-4127-9168-1972545358ef_442055.jpg",
      locality: "Stanley Road",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "North Indian", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "7918",
      avgRatingString: "4.4",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/the-good-bowl-stanley-road-civil-lines-rest442055",
      type: "WEBLINK"
    }
  },
  
  {
    info: {
      id: "442053",
      name: "Sweet Truth",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/f889ed33-73a5-4a5e-889c-541ea2ca414e_442053.jpg",
      locality: "Stanley Road",
      areaName: "Civil Lines",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "4444",
      avgRatingString: "4.5",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-03-21 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-71bad652-9e16-4d01-82c7-5840a50a6e08"
    },
    cta: {
      link: "https://www.swiggy.com/city/allahabad/sweet-truth-stanley-road-civil-lines-rest442053",
      type: "WEBLINK"
    }
  },
  

    ];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
              {resList.map((restaurant) =>(
                <RestaurantCard  key={restaurant.info.id} resData={restaurant} />
              ))}
                          
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
