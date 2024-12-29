import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Calendar, Mountain, Book, Camera, Music, Plane, 
  X, ChevronLeft, ChevronRight, MapPin, Star, Heart,
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import vof12 from '../images/vof/VOF12.jpg';   // Valley path
import vof13 from '../images/vof/VOF13.jpg';   // Orange flowers
import vof17 from '../images/vof/VOF17.jpg';   // Hemkund Lake
import vof1 from '../images/vof/VOF1.jpg';     // Stone path
import vof7 from '../images/vof/VOF7.jpg';     // Badrinath temple
import vof15 from '../images/vof/VOF15.jpg';   // Evening aarti
import vof14 from '../images/vof/VOF14.jpg';   // River valley
import vof11 from '../images/vof/VOF11.jpg';   // Rest stop
import vof16 from '../images/vof/VOF16.jpg';   // Group photo
import kk1 from '../images/kedarkantha/KK1.jpg';    // Shiva statue
import kk9 from '../images/kedarkantha/KK9.jpg';    // Silhouette at sunrise
import kk11 from '../images/kedarkantha/KK11.jpg';  // Standing against mountains
import kk7 from '../images/kedarkantha/KK7.jpg';    // Snow peaks panorama
import kk21 from '../images/kedarkantha/KK21.jpg';  // Snow mountain landscape
import kk8 from '../images/kedarkantha/KK8.jpg';    // Summit group at sunrise
import kk16 from '../images/kedarkantha/KK16.jpg';  // Large group photo
import kk17 from '../images/kedarkantha/KK17.JPG';  // Fun group shot
import kk18 from '../images/kedarkantha/KK18.jpg';  // Sunset silhouettes
import kk19 from '../images/kedarkantha/KK19.jpg';  // More silhouettes
import kk3 from '../images/kedarkantha/KK3.jpg';    // Forest sunset
import kk4 from '../images/kedarkantha/KK4.jpg';    // Starry night
import kk5 from '../images/kedarkantha/KK5.jpg';    // Night camping
import kk6 from '../images/kedarkantha/KK6.jpg';    // Sunset tents

const LifeBeyondCodePreview = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [selectedCategory, setSelectedCategory] = useState('adventure');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [selectedJourney, setSelectedJourney] = useState(null);
  
  // Categories data
  const categories = [
    { id: 'adventure', label: 'Adventures', icon: Mountain },
    { id: 'learning', label: 'Learning', icon: Book },
    { id: 'creative', label: 'Creative', icon: Camera },
    { id: 'hobby', label: 'Hobbies', icon: Music }
  ];

  // Featured experiences only
  const experiences = [
    {
      title: "Valley of Flowers Trek",
      category: "adventure",
      journeyKey: "vof-trek",
      icon: Mountain,
      location: "Uttarakhand, India",
      date: "2019",
      image: vof12,      // Main valley path image
  gallery: [
    vof12,           // Valley path
    vof13,           // Orange flowers
    vof17,           // Hemkund Lake
    vof1,            // Stone path
    vof7,            // Badrinath temple
    vof15,           // Evening aarti
    vof14,           // River valley
    vof11,           // Rest stop
    vof16            // Group photo
  ],
      description: "A remarkable journey through the UNESCO World Heritage site, witnessing over 300 species of wildflowers in the Himalayas.",
      highlights: [
        "9-day expedition",
        "15,200ft altitude at Hemkund Sahib",
        "Rare Himalayan flora & fauna",
        "World Heritage site exploration"
      ]
    },
    {
      title: "Kedarkantha Winter Trek",
      category: "adventure",
      journeyKey: "kk-trek",
      icon: Mountain,
      location: "Uttarkashi, Uttarakhand",
      date: "2022-23",
      image: kk9,
      gallery: [
        kk1,    // Shiva statue
        kk9,    // Silhouette at sunrise
        kk11,   // Standing against mountains
        kk7,    // Snow peaks panorama
        kk21,   // Snow mountain landscape
        kk8,    // Summit group at sunrise
        kk16,   // Large group photo
        kk17,   // Fun group shot
        kk18,   // Sunset silhouettes
        kk19,   // More silhouettes
        kk3,    // Forest sunset
        kk4,    // Starry night
        kk5,    // Night camping
        kk6     // Sunset tents
      ],
      description: "A breathtaking winter expedition through snow-covered peaks, ancient forests, and mythological sites, reaching an altitude of 12,500 ft in the Himalayas.",
      highlights: [
        "8-day winter expedition",
        "12,500ft summit altitude",
        "Ancient forests & meadows",
        "Mythological significance"
      ]
    }
  ];

  const journeyContent = {
    'vof-trek': {
      story: `My journey to the Valley of Flowers was an enchanting exploration of one of nature's most spectacular displays, where the convergence of Eastern and Western Himalayas creates a unique botanical paradise.
  
  Starting from the spiritual town of Rishikesh at just over 1,000 feet, our expedition began with a scenic drive to Joshimath, our gateway to this floral wonderland. The anticipation built as we prepared for our trek into a valley that remained hidden from the world until its discovery by Frank S Smith in 1931.
  
  The trek from Govindghat to Ghangaria tested our endurance as we ascended through diverse terrain, but the promise of witnessing over 300 species of wildflowers kept our spirits high. The transformation of the landscape as we gained altitude was remarkable - each turn revealing new varieties of flora against the backdrop of snow-capped peaks.
  
  The highlight came as we entered the Valley of Flowers National Park, a UNESCO World Heritage site spanning 87 square kilometers. The valley was a canvas of colors - rare blue poppies, the sacred Brahmakamal, and countless other species creating a natural masterpiece. The presence of elusive wildlife - from Himalayan black bears to flying squirrels - added to the valley's mystique.
  
  Our ascent to Hemkund Sahib at 15,200 feet was particularly challenging but deeply rewarding. The sight of the high-altitude lake surrounded by seven peaks, with the early morning sun reflecting off its surface, created moments of profound peace and connection with nature.
  
  This journey wasn't just about witnessing natural beauty - it was about understanding the delicate balance of high-altitude ecosystems and the importance of preserving these unique natural heritage sites for future generations.`,
      timeline: [
        { date: 'Day 1', title: 'Base Camp Arrival', description: 'Reported at Rishikesh base camp and completed preparation briefings.' },
        { date: 'Day 2-3', title: 'Journey to Ghangaria', description: 'Traveled to Joshimath and trekked to Ghangaria at 10,200 ft.' },
        { date: 'Day 4-5', title: 'Valley Exploration', description: 'Explored Valley of Flowers and ascended to Hemkund Sahib at 15,200 ft.' },
        { date: 'Day 6-7', title: 'Badrinath & Mana', description: 'Visited Badrinath temple and Mana village with Vasudhara falls trek.' },
        { date: 'Day 8-9', title: 'Return Journey', description: 'Descended back to Rishikesh, reflecting on the unique experience.' }
      ],
      learnings: [
        'High-altitude flora and ecosystem understanding',
        'Importance of UNESCO World Heritage conservation',
        'Himalayan geography and biodiversity',
        'Sustainable trekking practices'
      ],
      experiences: [
        'Witnessed over 300 wildflower species',
        'Explored highest Gurudwara at Hemkund Sahib',
        'Encountered rare Himalayan wildlife',
        'Experienced local Gharwali culture'
      ]
    },
    'kk-trek': {
      story: `My journey to Kedarkantha Peak was a transformative winter expedition that combined the thrill of high-altitude trekking with deep mythological significance. Beginning in the historic town of Mussoorie, our expedition took us through some of the most spectacular winter landscapes in the Himalayas.
    
    From the Mussoorie Transit Camp, we made our way to Naitwar base camp, where the real adventure began. The initial day of orientation and acclimatization walks proved crucial, giving us time to adapt to the altitude and prepare for the challenges ahead. The early morning briefings and training sessions built both our skills and team spirit.
    
    The trek from Naitwar to Ganka ka Thatch marked our first major ascent. As we climbed through ancient deodar and pine forests, each turn revealed new vistas of snow-capped peaks. The air grew crisper, and the landscape transformed into a winter wonderland. Our trek to Pukhrola Thatch at 10,800 feet tested our endurance but rewarded us with breathtaking views of the Kedarkantha summit.
    
    The summit day was the most challenging and rewarding. Starting before dawn, we made our push to the 12,500 feet summit. The early morning light painted the snow-covered peaks in hues of gold and pink, creating a magical atmosphere that made every step worthwhile. Standing at the summit, surrounded by the majestic peaks of Swargarohini, Bandarpoonch, and Kala Nag, was a moment of profound achievement and connection with nature.
    
    What made this trek special was its deep connection to Indian mythology. The land is known for its sacred sites, and the story of Duryodhana adds a layer of cultural richness to the natural beauty. The evening discussions around these stories, shared over warm cups of tea at our campsites, added depth to our understanding of the region's significance.
    
    The descent through Akhoti Thatch offered a different perspective of the landscape we had conquered. Each step down was a moment to reflect on our achievement and the bonds formed with fellow trekkers. The final celebration at base camp, complete with certificate distribution, marked not just the end of a trek, but the completion of a journey that tested our limits and expanded our horizons.
    
    Throughout the expedition, we experienced the true diversity of Himalayan winters - from star-filled nights in our tents to sunrises that turned the snow peaks into golden spires. The journey wasn't just about reaching a summit; it was about discovering the perfect harmony between adventure, nature, and ancient tradition.`,
    
      timeline: [
        {
          date: 'Day 1',
          title: 'Arrival at Mussoorie',
          description: 'Reported at Transit Camp Youth Hostel Mussoorie, preparing for the adventure ahead.'
        },
        {
          date: 'Day 2',
          title: 'Journey to Base',
          description: 'Traveled from Mussoorie to Naitwar base camp, setting the stage for our trek.'
        },
        {
          date: 'Day 3',
          title: 'Acclimatization',
          description: 'Orientation, training, and acclimatization walks to prepare for the ascent.'
        },
        {
          date: 'Day 4',
          title: 'First Trek Day',
          description: 'Trek from Naitwar to Ganka ka Thatch (8,900 ft), through beautiful forests.'
        },
        {
          date: 'Day 5',
          title: 'High Altitude Ascent',
          description: 'Climbed to Pukhrola Thatch (10,800 ft), with clear views of the summit ahead.'
        },
        {
          date: 'Day 6',
          title: 'Summit Day',
          description: 'Summit push to Kedarkantha (12,500 ft) and descent to Akhoti Thatch.'
        },
        {
          date: 'Day 7',
          title: 'Final Descent',
          description: 'Trek from Akhoti Thatch to base camp, celebration and certificate distribution.'
        },
        {
          date: 'Day 8',
          title: 'Journey Home',
          description: 'Departing from base camp with memories and achievements.'
        }
      ],
    
      learnings: [
        'Winter high-altitude trekking techniques',
        'Snow craft and safety measures',
        'Team dynamics and leadership',
        'Local mythology and cultural significance',
        'Himalayan ecosystem understanding',
        'Cold weather survival skills'
      ],
    
      experiences: [
        'Summit achievement at 12,500 feet',
        'Witnessing breathtaking Himalayan sunrises',
        'Night camping under starlit skies',
        'Cultural immersion in mountain communities',
        'Team bonding through challenges',
        'Photography in pristine winter conditions'
      ]
    }
  };

  // Filter experiences based on selected category
  const filteredExperiences = experiences.filter(exp => exp.category === selectedCategory);

  const ImageGallery = ({ images, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <div className="fixed inset-0 bg-gray-900/98 z-50 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={images[currentIndex]}
            alt="background"
            className="w-full h-full object-cover blur-2xl opacity-10 scale-110"
          />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4">
          <button 
            onClick={onClose}
            className="absolute -top-16 right-4 p-3 bg-amber-200/10 rounded-full 
                     hover:bg-amber-200/20 text-white transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative rounded-xl overflow-hidden bg-gray-900/50 
                       border border-amber-200/10 shadow-2xl">
            <img 
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full object-contain max-h-[80vh]"
            />

            <button 
              onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 
                       bg-gray-900/80 rounded-full text-white hover:bg-gray-900/90 
                       transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 
                       bg-gray-900/80 rounded-full text-white hover:bg-gray-900/90 
                       transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 
                         bg-gray-900/90 rounded-full text-white text-sm backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-200' 
                    : 'bg-amber-200/20 hover:bg-amber-200/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const JourneyModal = ({ experience, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const content = journeyContent[experience.journeyKey];  // Use journeyKey instead of category

    if (!content) return null;

    return (
      <div className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <button 
            onClick={onClose}
            className="fixed top-4 right-4 p-3 bg-amber-200/10 rounded-full 
                     hover:bg-amber-200/20 text-white transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200/20 overflow-hidden">
            <div className="p-8 space-y-12">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">{experience.title}</h2>
                <p className="text-xl text-amber-200/80">{experience.description}</p>
              </div>

              {/* Image Gallery */}
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <img 
                  src={experience.gallery[currentImageIndex]}
                  alt={`Journey moment ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 
                             group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? experience.gallery.length - 1 : prev - 1)}
                    className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-gray-900/90 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => (prev + 1) % experience.gallery.length)}
                    className="p-3 bg-gray-900/80 rounded-full text-white hover:bg-gray-900/90 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 
                             bg-gray-900/80 rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {experience.gallery.length}
                </div>
              </div>

              {/* Journey Timeline */}
              <div className="bg-gray-900/30 rounded-xl p-6 space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-amber-200/80" />
                  Journey Timeline
                </h3>
                <div className="space-y-6">
                  {content.timeline.map((event, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-32 shrink-0 text-amber-200/80 font-medium">{event.date}</div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings & Experiences */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/30 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-200/80" />
                    Key Learnings
                  </h3>
                  <ul className="space-y-3">
                    {content.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 bg-gray-800/50 rounded-lg p-3">
                        <Star className="w-5 h-5 text-amber-200/60 shrink-0 mt-1" />
                        <span>{learning}</span>
                      </li>
                      ))}
                      </ul>
                    </div>
    
                    <div className="bg-gray-900/30 rounded-xl p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-200/80" />
                        Memorable Experiences
                      </h3>
                      <ul className="space-y-3">
                        {content.experiences.map((experience, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300 bg-gray-800/50 rounded-lg p-3">
                            <Heart className="w-5 h-5 text-amber-200/60 shrink-0 mt-1" />
                            <span>{experience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
    
                  {/* Complete Journey Story */}
                  <div className="bg-gray-900/30 rounded-xl p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Book className="w-6 h-6 text-amber-200/80" />
                      The Complete Journey
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                        {content.story}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
    
      const ExperienceCard = ({ experience }) => {
        const Icon = experience.icon;
        
        return (
          <div className="group relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                        backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/10 
                        hover:border-amber-200/30 transition-all duration-500">
            <div className="relative h-56">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <img 
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover transform group-hover:scale-105 
                         transition-transform duration-700"
              />
              
              <div className="absolute top-4 right-4 px-4 py-2 bg-gray-900/90 backdrop-blur-sm 
                           rounded-full border border-amber-200/10 flex items-center gap-2">
                <Icon className="w-4 h-4 text-amber-200" />
                <span className="text-amber-200/80 text-sm">
                  {categories.find(cat => cat.id === experience.category)?.label}
                </span>
              </div>
    
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-200/10 rounded-lg backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-amber-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200/90 
                             transition-colors duration-300">
                    {experience.title}
                  </h3>
                </div>
    
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-200/60" />
                    {experience.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-200/60" />
                    {experience.date}
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-6 space-y-6">
              <p className="text-gray-300">{experience.description}</p>
    
              {experience.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {experience.gallery.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${experience.title} gallery ${index + 1}`}
                      className="aspect-square object-cover rounded-lg cursor-pointer 
                             hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedGalleryImage(experience.gallery)}
                    />
                  ))}
                  {experience.gallery.length > 3 && (
                    <button 
                      className="aspect-square bg-amber-200/10 rounded-lg flex flex-col 
                              items-center justify-center cursor-pointer hover:bg-amber-200/20 
                              transition-colors gap-1"
                      onClick={() => setSelectedGalleryImage(experience.gallery)}
                    >
                      <Camera className="w-5 h-5 text-amber-200" />
                      <span className="text-amber-200 text-sm">
                        +{experience.gallery.length - 3}
                      </span>
                    </button>
                  )}
                </div>
              )}
    
              <div className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <Star className="w-4 h-4 text-amber-200/40" />
                    {highlight}
                  </div>
                ))}
              </div>
    
              {experience.milestone && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/10 
                             rounded-lg text-amber-200 text-sm border border-amber-200/20">
                  <Heart className="w-4 h-4" />
                  {experience.milestone}
                </div>
              )}
    
              <button
                onClick={() => setSelectedJourney(experience)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 
                         bg-gradient-to-r from-amber-200/20 to-amber-200/10
                         hover:from-amber-200/30 hover:to-amber-200/20
                         rounded-xl text-white transition-all duration-300 group"
              >
                View Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );
      };
    
      return (
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl 
                           border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-amber-200/20 text-white border-amber-200/40'
                      : 'text-gray-400 border-amber-200/10 hover:border-amber-200/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
    
          <div className="grid md:grid-cols-2 gap-8">
            {filteredExperiences.map((experience, index) => (
              <div
                key={index}
                className="transform transition-all duration-500"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
    
          {/* View All Button */}
          <div className="text-center mt-16">
            <Link 
              to="/life"
              className="group inline-flex items-center gap-2 px-8 py-4 
                       bg-gradient-to-r from-amber-200/20 to-amber-200/10
                       hover:from-amber-200/30 hover:to-amber-200/20
                       rounded-xl text-white transition-all duration-300"
            >
              View My Journey Beyond Code
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
    
          {selectedGalleryImage && (
            <ImageGallery 
              images={selectedGalleryImage} 
              onClose={() => setSelectedGalleryImage(null)} 
            />
          )}
    
          {selectedJourney && (
            <JourneyModal
              experience={selectedJourney}
              onClose={() => setSelectedJourney(null)}
            />
          )}
        </div>
      );
    };
    
    export default LifeBeyondCodePreview;