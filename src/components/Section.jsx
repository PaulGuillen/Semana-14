const Section = ({ title, description, items, bgColor }) => {
    return (
      <div
        className={`p-6 border-2 rounded-lg shadow-md hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300 mb-6 ${bgColor}`}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
            />
          </svg>
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="pl-2">
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Ver más
        </button>
      </div>
    );
  };
  
  export default Section;
  