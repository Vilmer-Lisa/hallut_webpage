import React, { useContext } from 'react';
import { DataContext } from '../strapi-data/BookPageProvider'; 

const BookPage: React.FC = () => {
  const { BookPage } = useContext(DataContext);
  console.log("BookPage in page", BookPage); 

  if (!BookPage) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{BookPage.BookName}</h1>
      <p className="mb-4">{BookPage.ShortDescription}</p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Key Themes</h2>
        <ul className="list-disc pl-6">
          {BookPage.keythemes.map((theme, idx) => (
            <li key={idx}>
              <strong>{theme.title}:</strong> {theme.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Chapters</h2>
        <ul className="list-disc pl-6">
          {BookPage.chapters.map((chapter, idx) => (
            <li key={idx}>
              <strong>{chapter.name}:</strong> {chapter.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <img
          src={`http://localhost:1337${BookPage.image.url}`}
          alt="Book cover"
          className="w-64 rounded"
        />
      </div>

      <div className="prose">
        <p>{BookPage.paragraph1}</p>
        <p>{BookPage.paragraph2}</p>
        <p>{BookPage.paragraph3}</p>
      </div>
    </div>
  );
};

export default BookPage;

