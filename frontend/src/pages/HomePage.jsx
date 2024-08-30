import React, { useState } from 'react';
import Banner from '../components/Banner';
import BusinessCard from '../components/BusinessCard';
import ProductCard from '../components/productcard'; // Ensure the correct path and component name

const HomePage = () => {
  // Sample data for businesses
  const allBusinesses = [
    { id: 1, logoUrl: '/images/banner15.jpg', name: 'Jamdani Polli', years: 10, products: 100, likes: 200 },
    { id: 2, logoUrl: '/images/banner17.jpg', name: 'Jute Craft Bangladesh', years: 5, products: 85, likes: 350 },
    { id: 3, logoUrl: '/images/banner18.jpg', name: 'Monipuri village', years: 10, products: 100, likes: 140 },
    { id: 4, logoUrl: '/images/banner14.jpg', name: 'Soilpick', years: 3, products: 285, likes: 150 },
    { id: 5, logoUrl: '/images/banner2.jpg', name: 'Traditional pottery Bangladesh', years: 9, products: 895, likes: 240 },
    { id: 6, logoUrl: '/images/banner11.jpg', name: 'Art & Craft', years: 5, products: 85, likes: 150 },
    { id: 7, logoUrl: '/images/banner8.jpg', name: 'Bangla Kantha', years: 10, products: 120, likes: 240 },
    { id: 8, logoUrl: '/images/banner9.jpg', name: 'Suchuna Craft Work', years: 5, products: 85, likes: 150 },
    { id: 9, logoUrl: '/images/banner4.jpg', name: 'Cane Craft', years: 4, products: 200, likes: 180 },
    { id: 10, logoUrl: '/images/banner3.jpg', name: 'Clay pot business', years: 6, products: 150, likes: 170 },
    { id: 11, logoUrl: '/images/banner12.jpg', name: 'Glass Artist', years: 6, products: 150, likes: 170 },
    { id: 12, logoUrl: '/images/banner10.jpg', name: 'Lippon Artist', years: 6, products: 150, likes: 170 },
    // Add more businesses here...
  ];
// Sample data for products
const  featuredProducts= [
  { id: 1, imageUrl: '/images/s-l1200.jpg', name: 'Handcrafted Vase', price: '100tk' },
  { id: 2, imageUrl: '/images/bb.png', name: 'Bamboo Basket', price: '500tk' },
  { id: 3, imageUrl: '/images/pp.jpg', name: 'Clay Pot', price: '25tk' },
  { id: 4, imageUrl: '/images/jj.jpg', name: 'Jamdani Saree', price: '5000tk' },
  { id: 5, imageUrl: '/images/oo.jpg', name: 'Wooden Sculpture', price: '1000tk' },
  // Add more products here...
];

const [visibleCount, setVisibleCount] = useState(8); // Default to show the first 8 businesses

  const handleViewAll = () => {
    setVisibleCount(allBusinesses.length); // Show all businesses
  };

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Business Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allBusinesses.slice(0, visibleCount).map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
        {visibleCount < allBusinesses.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
            >
              See More
            </button>



          </div>
        )}
      </section>
     

      {/* Extra Sections */}

      <section className="bg-gray-100 dark:bg-gray-900 py-12">
      {/* Main headline centered */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Importance and History of Handicrafts in Bangladesh
      </h2>

      {/* Key points and descriptions aligned left */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Introduction */}
        <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
        Bangladeshi handicrafts are a significant aspect of the country's cultural and economic identity. These traditional crafts are deeply rooted in the history of Bangladesh and represent the creativity, heritage, and craftsmanship of its artisans.
        </p>

        {/* Ancient Period */}
        <p className="text-left text-orange-800 font-bold mb-2">
        Ancient Period:
        </p>
        <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
          <strong className="text-orange-800">Early Beginnings:</strong> The roots of Bangladeshi handicrafts can be traced back to the ancient Bengal region, which has a history of advanced civilization dating back to the 3rd century BCE. Archaeological findings from sites like Mahasthangarh and Wari-Bateshwar indicate that Bengal was an important trade hub, with a flourishing tradition of crafts such as pottery, metalwork, and textiles.
        </p>
        
        {!showMore && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowMore}
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
        )}

        {showMore && (
          <>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
              <strong className="text-orange-800">Bengal as a Craft Center:</strong> Bengal’s artisans were known for their skills in creating high-quality goods, especially textiles. The region was famous for its muslin fabric, an extremely fine cotton textile, which was highly prized by traders from around the world, including the Greeks, Romans, and later, the Mughals.
            </p>

            {/* Significance in Contemporary Times */}
            <p className="text-left text-orange-800 font-bold mb-2">
            Mughal Era (16th to 18th Century)
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
            Golden Age of Handicrafts: The Mughal period is often considered a golden age for Bangladeshi handicrafts. Bengal was an integral part of the Mughal Empire, and its artisans enjoyed royal patronage. During this time, the production of Jamdani (a type of muslin) reached its peak. The intricate and delicate patterns of Jamdani sarees became famous across the Mughal Empire and beyond.
            Expansion of Crafts: In addition to textiles, other crafts flourished during this period, including metalwork, wood carving, and jewelry making. The Mughal influence brought new designs and techniques, blending Persian, Islamic, and indigenous Bengali styles.
            </p>

            {/* British Colonial Period (18th to 20th Century) */}
            <p className="text-left text-orange-800 font-bold mb-2">
            British Colonial Period (18th to 20th Century):
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
            Decline of Traditional Crafts: The advent of British colonial rule in Bengal had a profound impact on the handicrafts sector. The British sought to control the lucrative textile trade, leading to the decline of traditional handloom industries like muslin production. The imposition of British goods, particularly machine-made textiles from Britain, severely affected the livelihoods of local artisans.
            Persistence of Artisans: Despite the hardships, many traditional crafts survived. In rural areas, artisans continued to produce pottery, metal goods, and woven products for local use. The Nakshi Kantha tradition of quilt-making, for example, became more widespread as women in rural communities kept the craft alive.
            </p>

            {/*Post-Independence Period (1971 Onwards)  */}
            <p className="text-left text-orange-800 font-bold mb-2">
            Post-Independence Period (1971 Onwards):
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
            Revival of Handicrafts: After gaining independence in 1971, Bangladesh began to recognize the economic potential of its handicrafts industry. The government and non-governmental organizations (NGOs) worked to support artisans and promote traditional crafts. Organizations like Aarong, founded by BRAC in 1978, played a key role in reviving the handicrafts sector by creating a platform for artisans to market their products both locally and internationally.
            Global Recognition: In recent decades, Bangladeshi handicrafts have gained international recognition for their quality, sustainability, and unique cultural appeal. Crafts such as Jamdani, Nakshi Kantha, and jute products are now exported to global markets, contributing to the country’s economy.
            </p>

            {/* Contemporary Period */}
            <p className="text-left text-gray-700 dark:text-gray-100">
            Modern Adaptation: Today, Bangladeshi handicrafts continue to evolve. Artisans are blending traditional techniques with modern designs to cater to contemporary tastes. The rise of eco-conscious consumers has also led to a renewed interest in handcrafted, sustainable products.
            Challenges and Opportunities: Despite the global demand, the handicrafts sector faces challenges, including competition from mass-produced goods, inadequate infrastructure, and limited access to global markets. However, with increasing interest in sustainable and ethically made products, the future holds significant opportunities for Bangladeshi artisans.
            </p>
            {/*Economic Significance */}
            <p className="text-left text-gray-700 dark:text-gray-100">
            Job Creation: Handicrafts provide employment to millions of people in Bangladesh, especially in rural areas. Many artisans rely on handicrafts as their primary source of income. The sector supports the livelihoods of individuals who may not have access to formal education or other employment opportunities.
Women Empowerment: A significant portion of the handicraft workforce consists of women, making the industry a critical driver of female economic empowerment. Women artisans often work from home, allowing them to earn a livelihood while managing household responsibilities. The income generated through handicrafts helps improve the financial independence and social standing of women in rural communities.
Export Revenue: Bangladeshi handicrafts have gained international recognition and are exported to various countries, contributing to the nation's export revenue. Products like Jamdani sarees, Nakshi Kantha, jute items, and terracotta crafts have found demand in global markets, particularly among eco-conscious consumers. This export potential strengthens the country’s economy.
2. Cultural Preservation
Safeguarding Heritage: Handicrafts are a vital means of preserving Bangladesh’s cultural heritage. Each craft carries centuries of tradition, storytelling, and indigenous knowledge passed down through generations. From the intricate patterns of Jamdani to the detailed stitching of Nakshi Kantha, these crafts reflect the unique identity of Bangladesh.
Reviving Ancient Techniques: Handicrafts help keep ancient techniques alive, ensuring that the artistry and craftsmanship developed over centuries are not lost. Organizations and artisans are continually working to revive forgotten skills and adapt them to modern designs, keeping traditional knowledge relevant and vibrant.
3. Social Impact
Community Development: The handicraft industry plays a crucial role in rural development by providing opportunities for collective work and community engagement. Many artisans work in cooperatives or collectives, fostering collaboration and shared economic growth within their communities.
Social Equality: The handicraft sector helps reduce social inequalities by providing economic opportunities to marginalized groups, including women, ethnic minorities, and rural populations. It creates a platform for these groups to contribute to the economy and achieve upward social mobility.
4. Environmental Sustainability
Eco-Friendly Products: Many Bangladeshi handicrafts are made from natural, sustainable materials like jute, clay, bamboo, and cotton. These materials are biodegradable, making handicrafts an environmentally friendly alternative to mass-produced, synthetic goods.
Low Carbon Footprint: Handcrafted products generally have a lower carbon footprint compared to industrially produced goods. Artisans often use traditional methods that require minimal energy, reducing the environmental impact of production. The focus on sustainability aligns with the global movement towards eco-friendly and ethically produced goods.
5. Promotion of Tourism
Cultural Tourism: Handicrafts are a significant attraction for cultural tourism in Bangladesh. Visitors are drawn to the rich heritage and traditional craftsmanship that the country has to offer. Tourists often purchase handicrafts as souvenirs, which helps boost local economies and promote Bangladesh’s cultural image abroad.
            </p>
            {/*Conclusion */}
            <p className="text-left text-orange-800 font-bold mb-2">
            Conclusion :
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
            Bangladeshi handicrafts are more than just products; they are deeply ingrained in the country’s economic, cultural, and social fabric. They provide livelihoods, preserve traditions, empower women, promote sustainability, and enhance the country’s global standing. As the world continues to embrace eco-friendly and artisanal goods, the importance of Bangladesh’s handicrafts will only grow, making the sector a crucial pillar of the nation’s future development.

            </p>


            <div className="text-center mt-8">
              <button
                onClick={toggleShowMore}
                className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
              >
                Show Less
              </button>
            </div>
          </>
        )}
      </div>
    </section>

      {/* Featured Products Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;