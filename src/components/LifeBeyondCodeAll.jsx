import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Calendar,Compass,Mountain, Book, Camera, Music, Plane, 
  X, ChevronLeft, ChevronRight, MapPin, Star, Heart,
  ArrowLeft, ArrowRight, Plus
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

// Import Kedarkantha images
import kk1 from '../images/kedarkantha/KK1.jpg';    
import kk9 from '../images/kedarkantha/KK9.jpg';    
import kk11 from '../images/kedarkantha/KK11.jpg';  
import kk7 from '../images/kedarkantha/KK7.jpg';    
import kk21 from '../images/kedarkantha/KK21.jpg';  
import kk8 from '../images/kedarkantha/KK8.jpg';    
import kk16 from '../images/kedarkantha/KK16.jpg';  
import kk17 from '../images/kedarkantha/KK17.JPG';  
import kk18 from '../images/kedarkantha/KK18.jpg';  
import kk19 from '../images/kedarkantha/KK19.jpg';  
import kk3 from '../images/kedarkantha/KK3.jpg';    
import kk4 from '../images/kedarkantha/KK4.jpg';    
import kk5 from '../images/kedarkantha/KK5.jpg';    
import kk6 from '../images/kedarkantha/KK6.jpg';  




const LifeBeyondCodeAll = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);

  // Categories data
  const categories = [
    { id: 'all', label: 'All', icon: Globe },
    { id: 'adventure', label: 'Adventures', icon: Mountain },
    { id: 'learning', label: 'Learning', icon: Book },
    { id: 'creative', label: 'Creative', icon: Camera },
    { id: 'hobby', label: 'Hobbies', icon: Music }
  ];

  // Full experiences data
  const experiences = [
    {
      title: "Valley of Flowers Trek",
      category: "adventure",
      journeyKey: "vof-trek",
      icon: Mountain,
      location: "Uttarakhand, India", 
      date: "2024",
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
        kk1, kk9, kk11, kk7, kk21, kk8, kk16, kk17, kk18, kk19, kk3, kk4, kk5, kk6
      ],
      description: "A breathtaking winter expedition through snow-covered peaks, ancient forests, and mythological sites, reaching an altitude of 12,500 ft in the Himalayas.",
      highlights: [
        "8-day winter expedition",
        "12,500ft summit altitude",
        "Ancient forests & meadows",
        "Mythological significance"
      ]
    },
    {
      title: "Japanese Language",
      category: "learning",
      icon: Book,
      location: "Self-Study & Classes",
      date: "2022 - Present",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Dedicated to mastering Japanese language and culture.",
      milestone: "JLPT N4 Certified",
      highlights: ["Daily language practice", "Cultural workshops", "Language exchange meetups"]
    },
    {
      title: "Rock Climbing",
      category: "adventure",
      icon: Mountain,
      location: "Various Locations",
      date: "2021 - Present",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Exploring vertical challenges and pushing physical limits through rock climbing.",
      highlights: ["Multiple 5.11 routes completed", "Outdoor lead climbing", "Climbing community events"]
    },
    {
      title: "Traditional Art",
      category: "creative",
      icon: Camera,
      location: "Studio & Outdoors",
      date: "Ongoing",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Exploring various traditional art forms and techniques.",
      highlights: ["Watercolor mastery", "Traditional pottery", "Art exhibitions"]
    },
    {
      title: "Meditation Retreat",
      category: "learning",
      icon: Book,
      location: "Various Centers",
      date: "Periodic",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Regular meditation retreats for inner exploration and growth.",
      highlights: ["10-day silent retreats", "Various traditions", "Daily practice"]
    },
    {
      title: "Urban Photography",
      category: "creative",
      icon: Camera,
      location: "Global Cities",
      date: "2020 - Present",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Documenting urban life and architecture through street photography.",
      highlights: ["Street life documentation", "Architecture series", "Photo exhibitions"]
    },
    {
      title: "Classical Guitar",
      category: "hobby",
      icon: Music,
      location: "Home Studio",
      date: "2019 - Present",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Mastering classical guitar through dedicated practice and performance.",
      highlights: ["Weekly performances", "Classical repertoire", "Music theory study"]
    },
    {
      title: "Desert Expedition",
      category: "adventure",
      icon: Mountain,
      location: "Sahara Desert",
      date: "September 2023",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Week-long desert trek experiencing the majesty of the Sahara.",
      highlights: ["Camel trek", "Star navigation", "Bedouin culture"]
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
    { 
      date: 'Day 1',
      title: 'Base Camp Arrival',
      description: 'Reported at Rishikesh base camp and completed preparation briefings.'
    },
    {
      date: 'Day 2-3',
      title: 'Journey to Ghangaria',
      description: 'Traveled to Joshimath and trekked to Ghangaria at 10,200 ft.'
    },
    {
      date: 'Day 4-5',
      title: 'Valley Exploration',
      description: 'Explored Valley of Flowers and ascended to Hemkund Sahib at 15,200 ft.'
    },
    {
      date: 'Day 6-7',
      title: 'Badrinath & Mana',
      description: 'Visited Badrinath temple and Mana village with Vasudhara falls trek.'
    },
    {
      date: 'Day 8-9',
      title: 'Return Journey',
      description: 'Descended back to Rishikesh, reflecting on the unique experience.'
    }
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

What made this trek special was its deep connection to Indian mythology. The land is known for its sacred sites, and the story of Duryodhana adds a layer of cultural richness to the natural beauty. The evening discussions around these stories, shared over warm cups of tea at our campsites, added depth to our understanding of the region's significance.`,
      timeline: [
        { date: 'Day 1', title: 'Arrival at Mussoorie', description: 'Reported at Transit Camp Youth Hostel Mussoorie, preparing for the adventure ahead.' },
        { date: 'Day 2', title: 'Journey to Base', description: 'Traveled from Mussoorie to Naitwar base camp, setting the stage for our trek.' },
        { date: 'Day 3', title: 'Acclimatization', description: 'Orientation, training, and acclimatization walks to prepare for the ascent.' },
        { date: 'Day 4', title: 'First Trek Day', description: 'Trek from Naitwar to Ganka ka Thatch (8,900 ft), through beautiful forests.' },
        { date: 'Day 5', title: 'High Altitude Ascent', description: 'Climbed to Pukhrola Thatch (10,800 ft), with clear views of the summit ahead.' },
        { date: 'Day 6', title: 'Summit Day', description: 'Summit push to Kedarkantha (12,500 ft) and descent to Akhoti Thatch.' },
        { date: 'Day 7', title: 'Final Descent', description: 'Trek from Akhoti Thatch to base camp, celebration and certificate distribution.' },
        { date: 'Day 8', title: 'Journey Home', description: 'Departing from base camp with memories and achievements.' }
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
    },

    'learning': {
      story: `My journey into Japanese language and culture began with a simple fascination but evolved into a deep passion for understanding a completely different way of thinking and expressing oneself.

The initial months were both exciting and daunting. Learning hiragana and katakana opened up a new world of written expression, while the first kanji characters seemed like artistic puzzles waiting to be solved. Each small victory, like successfully ordering food in Japanese or understanding a simple conversation, felt immensely rewarding.

As my studies progressed, I discovered that learning Japanese wasn't just about memorizing vocabulary and grammar patterns - it was about understanding a mindset. The way the language treats context and relationship nuances revealed fascinating aspects of Japanese culture and social dynamics.

Cultural workshops became a highlight of my journey. Through calligraphy sessions, tea ceremonies, and traditional art classes, I gained insights that textbooks could never provide. Language exchange meetups turned into lasting friendships, offering authentic practice and cultural exchange.

The path to JLPT N4 certification was challenging but deeply fulfilling. It required consistent dedication, from early morning flashcard reviews to late-night grammar practice. Each level of progress unveiled new layers of understanding, not just of the language, but of myself as a learner.

Today, this journey continues. Whether I'm watching Japanese films without subtitles, reading manga in its original form, or conversing with native speakers, each interaction adds another dimension to my understanding and appreciation of this rich language and culture.`,
      timeline: [
        { date: 'Month 1-2', title: 'Foundations', description: 'Mastered basic grammar and essential vocabulary.' },
        { date: 'Month 3-4', title: 'Intermediate Skills', description: 'Developed reading and writing abilities.' },
        { date: 'Month 5-6', title: 'Advanced Practice', description: 'Engaged in conversation practice and cultural studies.' },
        { date: 'Month 7-8', title: 'Certification Prep', description: 'Prepared for and achieved JLPT certification.' }
      ],
      learnings: [
        'Systematic approach to language acquisition',
        'Cultural insights through language',
        'Importance of consistent practice',
        'Value of language exchange partners'
      ],
      experiences: [
        'Participated in language exchange meetups',
        'Attended cultural workshops',
        'Connected with native speakers',
        'Explored Japanese media and literature'
      ]
    },
    'creative': {
      story: `My street photography journey began as a simple desire to capture urban life but evolved into an exploration of humanity's daily stories through my lens.

Starting with just a basic camera and an eye for interesting moments, I wandered through city streets, learning to anticipate fleeting expressions and interactions. Early morning shoots taught me about the magical quality of first light, while evening sessions revealed the city's transformation under artificial illumination.

Each neighborhood brought its own character and challenges. Markets bustled with raw energy and color, while business districts offered studies in geometry and reflection. I learned that great street photography isn't just about technical skills - it's about developing intuition and connecting with your environment.

Documentation projects pushed me to dig deeper into urban narratives. One memorable series captured the gradual changes in a historic neighborhood, telling stories of tradition meeting modernity. Another focused on street vendors, revealing the often-overlooked backbone of city life.

Exhibitions were both terrifying and exhilarating. Sharing my perspective with others led to fascinating discussions about urban life and social dynamics. Teaching workshops helped me articulate my process while learning from others' unique viewpoints.

This ongoing journey has taught me that every street corner holds potential for storytelling, and every passing moment could be the next compelling image. It's about patience, observation, and being ready when these moments present themselves.`,
      timeline: [
        { date: 'Phase 1', title: 'Learning the Basics', description: 'Mastered camera settings and basic composition.' },
        { date: 'Phase 2', title: 'Street Photography', description: 'Developed candid photography techniques.' },
        { date: 'Phase 3', title: 'Portfolio Building', description: 'Created cohesive series of urban landscapes.' },
        { date: 'Phase 4', title: 'Exhibition Prep', description: 'Curated and displayed work in local galleries.' }
      ],
      learnings: [
        'Technical mastery of equipment',
        'Understanding of light and composition',
        'Storytelling through images',
        'Urban exploration techniques'
      ],
      experiences: [
        'First photo exhibition',
        'Street photography workshops',
        'City exploration projects',
        'Photography community events'
      ]
    },
    'hobby': {
      story: `My journey with classical guitar began as a simple curiosity but grew into a profound exploration of music, discipline, and artistic expression.

The early days were filled with basic exercises and simple pieces, each note a step toward understanding the instrument. Hours were spent developing calluses, learning proper posture, and mastering fundamental techniques. Every small achievement, from playing a clean scale to executing a proper rest stroke, felt like a significant milestone.

As my skills progressed, I discovered the rich history and tradition of classical guitar. Each composer opened new worlds of musical expression - Bach's logical precision, Tarrega's romantic sensibility, Villa-Lobos's Brazilian flair. The instrument became a gateway to understanding different cultural and historical perspectives through music.

Regular practice sessions evolved into a meditative ritual. Early morning hours before work became sacred time for technique development, while evenings were dedicated to repertoire building. The discipline required for consistent practice taught valuable lessons about patience and perseverance.

Joining a classical guitar society opened new dimensions to the journey. Monthly meetups provided opportunities to perform, receive feedback, and learn from fellow enthusiasts. These gatherings fostered a sense of community and shared passion for the instrument.

Today, this journey continues to unfold. Whether practicing a challenging piece, performing at community events, or simply exploring new repertoire, each interaction with the instrument brings new insights and joys. The classical guitar has become not just a hobby, but a lifelong companion in musical exploration.`,
      timeline: [
        { date: 'Year 1', title: 'Foundation Building', description: 'Mastered basic techniques and simple pieces.' },
        { date: 'Year 2', title: 'Intermediate Works', description: 'Explored standard repertoire and music theory.' },
        { date: 'Year 3', title: 'Advanced Studies', description: 'Tackled complex pieces and performance techniques.' },
        { date: 'Year 4', title: 'Performance Focus', description: 'Regular recitals and community performances.' }
      ],
      learnings: [
        'Technical mastery of classical guitar',
        'Music theory and composition',
        'Performance techniques',
        'Historical music perspectives'
      ],
      experiences: [
        'Monthly recitals',
        'Guitar society meetups',
        'Master classes',
        'Community performances'
      ]
    }
  };

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
              className="w-full

              object-contain max-h-[80vh]"
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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                         bg-gray-900/90 px-4 py-2 rounded-full text-white 
                         text-sm backdrop-blur-sm">
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
    const content = journeyContent[experience.journeyKey];

        // Debug logging
        console.log('Journey Key:', experience.journeyKey);
        console.log('Content:', content);

        if (!content) {
          console.log('No content found for journey key:', experience.journeyKey);
          return null;
        }

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
                
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
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

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900/80 rounded-full text-white text-sm">
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm 
                   rounded-full border border-amber-200/20 text-white hover:bg-gray-800/70 
                   transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Compass className="w-8 h-8 text-amber-200/80" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Life Beyond Code</h1>
          </div>
          <p className="text-xl text-amber-200/60 mb-8">Adventures, Learning & Creative Pursuits</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>

        {/* Experiences Grid */}
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {experiences
            .filter(exp => selectedCategory === 'all' || exp.category === selectedCategory)
            .map((experience, index) => (
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
      </div>

      {/* Modals */}
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

      {/* Background Decorations */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default LifeBeyondCodeAll;