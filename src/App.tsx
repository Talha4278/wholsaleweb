import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CategoriesPage from './components/CategoriesPage';
import CategoryDetailsPage from './components/CategoryDetailsPage';
import SuppliersPage from './components/SuppliersPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategoryDetails, setShowCategoryDetails] = useState(false);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'categories', 'suppliers', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {!showCategoryDetails && (
        <Header 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      
      {showCategoryDetails ? (
        <CategoryDetailsPage 
          targetSlug={selectedCategorySlug || undefined}
          onBack={() => {
            setShowCategoryDetails(false);
            setTimeout(() => {
              const homeElement = document.getElementById('home');
              if (homeElement) {
                homeElement.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }} 
          onContactUs={() => {
            setShowCategoryDetails(false);
            // Scroll to contact section after returning to main page
            setTimeout(() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        />
      ) : (
        <main>
          <HomePage />
          <AboutPage />
          <CategoriesPage onLearnMore={(slug) => {
            setSelectedCategorySlug(slug);
            setShowCategoryDetails(true);
          }} />
          <SuppliersPage />
          <ContactPage />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;