import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => {
    return (
        <motion.div 
            key={category.name}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="mb-4 p-4 border rounded shadow"
        >
            <h2 className="text-xl font-bold">{category.name}</h2>
            {category.subcategories.map(sub => (
                <div key={sub.name}>
                    <h3 className="text-lg font-semibold">{sub.name}</h3>
                    <ul className="list-disc pl-5">
                        {sub.cities.map(city => (
                            <li key={city}>{city}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </motion.div>
    );
};

export default CategoryCard; 