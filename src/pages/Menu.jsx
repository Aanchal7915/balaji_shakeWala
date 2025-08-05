 // Menu.jsx
import React from 'react';

const menuData = {
  'Milkshakes': [
    {
      name: 'Oreo Shake',
      price: '₹120',
      description: 'Creamy Oreo milkshake topped with whipped cream & chocolate drizzle.',
      img: '/oreo-shake.jpeg',
      nutrition: 'Calories: 320, Protein: 8g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
    {
      name: 'KitKat Shake',
      price: '₹130',
      description: 'Rich chocolate shake blended with crunchy KitKat pieces.',
      img: '/kitkat-shake.jpeg',
      nutrition: 'Calories: 350, Protein: 9g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
    {
      name: 'Mango Shake',
      price: '₹110',
      description: 'Fresh Alphonso mango shake with a hint of saffron.',
      img: '/mango-shake.jpeg',
      nutrition: 'Calories: 280, Protein: 7g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
    {
      name: 'Kesar Badam Shake',
      price: '₹140',
      description: 'Traditional kesar badam shake with authentic flavors.',
      img: '/kesar-badam.jpeg',
      nutrition: 'Calories: 330, Protein: 10g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
  ],
  'Cold Coffee': [
    {
      name: 'Classic Cold Coffee',
      price: '₹100',
      description: 'Smooth cold coffee with a rich aroma and frothy top.',
      img: '/classic-coffee.jpeg',
      nutrition: 'Calories: 210, Protein: 6g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
    {
      name: 'Hazelnut Coffee',
      price: '₹130',
      description: 'Cold coffee infused with roasted hazelnut flavors.',
      img: '/hazelnut-coffee.jpeg',
      nutrition: 'Calories: 250, Protein: 7g',
      customization: ['Extra Thick', 'Add Toppings', 'Protein Boost'],
    },
  ],
  'Fruit Smoothies': [
    {
      name: 'Strawberry Smoothie',
      price: '₹120',
      description: 'Fresh strawberry smoothie with yogurt and honey.',
      img: '/strawberry.jpeg',
      nutrition: 'Calories: 220, Protein: 5g',
      customization: ['Add Toppings', 'Protein Boost'],
    },
    {
      name: 'Banana Smoothie',
      price: '₹110',
      description: 'Creamy banana smoothie with natural sweetness.',
      img: '/banana.jpeg',
      nutrition: 'Calories: 210, Protein: 5g',
      customization: ['Add Toppings', 'Protein Boost'],
    },
  ],
  'Ice Cream Specials': [
    {
      name: 'Chocolate Overload',
      price: '₹150',
      description: 'Decadent chocolate ice cream with fudge and nuts.',
      img: '/choco-overload.jpeg',
      nutrition: 'Calories: 400, Protein: 6g',
      customization: ['Add Toppings'],
    },
  ],
  'Add-ons': [
    {
      name: 'Extra Toppings',
      price: '₹30',
      description: 'Choose from nuts, chocolate chips, or sprinkles.',
      img: '/toppings.jpeg',
    },
    {
      name: 'Protein Boost',
      price: '₹50',
      description: 'Add extra protein for a health kick.',
      img: '/protein.jpeg',
    },
  ],
};

export default function Menu() {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary tracking-wide">
        Explore Our Delicious Menu
      </h1>

      {Object.entries(menuData).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-l-8 border-primary pl-4 text-primary">
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 md:h-56 lg:h-64 max-h-[256px] object-cover object-center rounded-t-3xl border-b border-primary-100 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-gray-700 flex-grow">{item.description}</p>
                  <p className="text-primary font-semibold mt-4">{item.price}</p>
                  {item.nutrition && (
                    <p className="text-sm text-gray-500 mt-2 italic">{item.nutrition}</p>
                  )}
                  {item.customization && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-primary mb-1">Customization:</h4>
                      <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
                        {item.customization.map((option, i) => (
                          <li
                            key={i}
                            className="bg-primary-200 rounded-full px-3 py-1 inline-block"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
