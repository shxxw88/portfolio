import GraphicProjectLayout from './GraphicProjectLayout';
import HTMLFlipBook from 'react-pageflip';
import { useRef, useState } from 'react';

const pages = [
  '/images/iceland/iceland-page-1.jpg',
  '/images/iceland/iceland-page-2.jpg',
  '/images/iceland/iceland-page-3.jpg',
  '/images/iceland/iceland-page-4.jpg',
  '/images/iceland/iceland-page-5.jpg',
  '/images/iceland/iceland-page-6.jpg',
  '/images/iceland/iceland-page-7.jpg',
  '/images/iceland/iceland-page-8.jpg',
  '/images/iceland/iceland-page-9.jpg',
  '/images/iceland/iceland-page-10.jpg',
  '/images/iceland/iceland-page-11.jpg',
  '/images/iceland/iceland-page-12.jpg',
];

function IcelandFlipbook() {
  const flipBook = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const goNext = () => flipBook.current?.pageFlip().flipNext();
  const goPrev = () => flipBook.current?.pageFlip().flipPrev();

  return (
    <div className="flipbook-wrapper">
      <HTMLFlipBook
        ref={flipBook}
        width={420}
        height={578}
        size="stretch"
        minWidth={200}
        maxWidth={500}
        minHeight={300}
        maxHeight={700}
        showCover={true}
        mobileScrollSupport={true}
        flippingTime={800}
        useMouseEvents={true}
        className="flipbook"
        onFlip={(e) => setCurrentPage(e.data + 1)}
      >
        {pages.map((page, index) => (
          <div key={index} className="flipbook-page">
            <img src={page} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Controls */}
      <div className="flipbook-controls">
        <button className="flipbook-btn" onClick={goPrev}>‹</button>
        <span className="flipbook-indicator">{currentPage} / {pages.length}</span>
        <button className="flipbook-btn" onClick={goNext}>›</button>
      </div>
    </div>
  );
}

function IcelandGuideProject() {
  const projectData = {
    title: "Iceland Travel Guidebook",
    concept: [
      "This guide to Iceland is designed for travellers who prefer intention over itineraries. Each route, stop, and pause is chosen to highlight Iceland's raw landscapes without over-structuring the experience.",
      "The design emphasizes clarity, simplicity and negative space to allow the environment to lead."
    ],
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Adobe Stock", "Unsplash"],
    heroImage: "/images/iceland-hero.png"
  };

  return (
    <GraphicProjectLayout {...projectData}>
      <div className="iceland-details">
        <img src="/images/iceland-details.png" alt="Iceland Travel Guidebook Details" />
      </div>

      <IcelandFlipbook />
    </GraphicProjectLayout>
  );
}

export default IcelandGuideProject;