import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Calendar,Compass,Mountain, Book, Camera, Music, Plane, 
  X, ChevronLeft, ChevronRight, MapPin, Star, Heart,
  ArrowLeft, ArrowRight, Plus
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


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
      title: "Himalayan Trek",
      category: "adventure",
      icon: Mountain,
      location: "Nepal",
      date: "October 2023",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Conquered the challenging Annapurna Circuit, reaching an altitude of 5,416m.",
      highlights: ["14 days of trekking", "5,416m altitude reached", "Local community interactions"]
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
    'adventure': {
      story: `My journey to the Himalayas was more than just a trek; it was a transformative experience that challenged and changed me in ways I never expected.

Beginning in the bustling streets of Kathmandu, I spent the first days gathering supplies and meeting my fellow trekkers. The anticipation built as our guide briefed us on what lay ahead - 14 days of pushing our limits in some of the world's most breathtaking landscapes.

The early days of the trek took us through lush valleys and traditional villages, where we experienced the warmth of Nepalese hospitality. Each teahouse stay brought new friendships and insights into local culture. The sound of prayer flags fluttering in the wind became our constant companion.

As we gained altitude, the landscape transformed dramatically. Pine forests gave way to rugged terrain, and the air grew thinner. The sight of the Annapurna range emerging through the clouds for the first time left us speechless. Each step higher brought new challenges but also new rewards.

The most challenging days came as we approached the highest points. Waking up at 3 AM for the final push tested our resolve, but watching the sunrise paint the mountains in gold made every struggle worthwhile. Reaching 5,416 meters was a triumph of body and spirit.

This journey taught me the true meaning of perseverance and the importance of taking life one step at a time. The mountains have a way of humbling you while also showing you your own strength.`,
      timeline: [
        { date: 'Day 1-2', title: 'Preparation & Acclimatization', description: 'Arrived in Kathmandu, gathered supplies, and attended briefing sessions.' },
        { date: 'Day 3-5', title: 'Initial Trek', description: 'Started the trek through beautiful valleys and traditional villages.' },
        { date: 'Day 6-8', title: 'High Altitude Progress', description: 'Reached higher altitudes, witnessing breathtaking mountain views.' },
        { date: 'Day 9-11', title: 'Summit Push', description: 'Made the challenging push to reach higher camps and summit attempt.' },
        { date: 'Day 12-14', title: 'Descent & Reflection', description: 'Successfully descended and celebrated the achievement.' }
      ],
      learnings: [
        'Importance of mental preparation',
        'Value of proper equipment and planning',
        'Team collaboration in challenging conditions',
        'Respect for nature and local cultures'
      ],
      experiences: [
        'Encountered diverse wildlife',
        'Experienced local hospitality',
        'Witnessed stunning sunrise from high camps',
        'Developed lifelong friendships with team members'
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
    const content = journeyContent[experience.category];

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