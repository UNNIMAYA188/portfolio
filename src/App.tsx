import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  User,
  Code,
  Mail,
  Phone,
  ExternalLink,
  Github,
  Menu,
  X,
  MapPin,
  Calendar,
  Globe,
  GraduationCap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }

      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 200); // Change threshold here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    {id: 'education', label: 'Education', icon: GraduationCap},
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Profile Image */}
            <div className="flex items-center space-x-3 relative">
              <div
                ref={profileRef}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-700 ease-in-out"
                style={{
                  transform: isScrolled
                    ? 'translateY(0) scale(1)'
                    : 'translateY(30px) scale(0)', // hide when at top
                  opacity: isScrolled ? 1 : 0,
                }}
              >
                <img
                  src=".../../src/logo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-800">
                Unnimaya KS
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-transparent bg-gradient-to-br from-red-50 via-white to-teal-50 relative"
      >

        <div className="absolute top-20 z-10">
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-700 ease-in-out"
            style={{
              transform: isScrolled
                ? 'translate(-150%, -120%) scale(0.4)'
                : 'translate(0, 0) scale(1)',
              transition: 'transform 0.7s ease-in-out',
            }}
          >

            
            <img
              src=".../../src/logo.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center mt-60 space-y-5">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Unnimaya KS
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Computer Science And Engineering Student
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Building innovative solutions with passion and creativity
          </p>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Learn More About Me</span>
            <User size={20} />
          </button>
        </div>
      </section>

 <section id="about" className="py-20 bg-transparent">
  <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-10">

    {/* Heading */}
 <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
        <h2 className="text-4xl font-bold text-black-900">About Me</h2>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-pulse"></div>
    </div>  

    {/* Grid Section */}
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* Left Column */}
      <div className="space-y-6">
        {/* Card: Student */}
        <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 p-8 rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md flex items-start gap-4">
          <img
            src="https://th.bing.com/th/id/OIP.uZZdg2bxvVgmLz_5KxpxawHaD5?w=329&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Student Icon"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Passionate Developer & Student
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm currently pursuing my Bachelor's degree in Computer Science and Engineering at Holy Grace Academy of Engineering, Mala. Now I'm in my 4th year. My journey in technology has been driven by curiosity and a desire to create meaningful solutions that make a difference.
            </p>
          </div>
        </div>

        {/* Info List */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <Calendar className="text-blue-600" size={20} />
            <span>4th Year BTech Student</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Code className="text-blue-600" size={20} />
            <span>Computer Science & Engineering</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Globe className="text-blue-600" size={20} />
            <span>Full-Stack Development Enthusiast</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Card: Skills */}
        <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500  p-8 rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md flex items-start gap-4">
          <img
            src="https://png.pngtree.com/png-vector/20220826/ourmid/pngtree-icon-of-chalkwhite-skills-and-abilities-on-a-black-background-vector-png-image_33503178.jpg"
            alt="Skills Icon"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Technical Skills & Interests
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I specialize in web development technologies including Angular, React, and modern JavaScript frameworks. My projects range from travel applications to entertainment platforms, each designed with user experience and functionality in mind.
            </p>
          </div>
        </div>

       {/* Skill Boxes */}
      <div className="grid grid-cols-2 gap-6">
        {/* Frontend Card */}
        <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 p-4 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg text-left">
          <img
            src="https://wallpaperaccess.com/full/4635737.jpg"
            alt="Frontend Icon"
            className="w-10 h-10 mb-2 border border-blue-500 rounded-full object-cover"
          />
          <h4 className="font-semibold text-black mb-1">Frontend</h4>
          <p className="text-sm text-gray-600">React, Angular, JavaScript, TypeScript</p>
        </div>

        {/* Backend Card */}
        <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 p-4 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg text-left">
          <img
            src="https://img.freepik.com/free-vector/backend-technology-concept-with-glowing-lines-background_1017-28405.jpg"
            alt="Backend Icon"
            className="w-10 h-10 mb-2 border border-blue-500 rounded-full object-cover"
          />
          <h4 className="font-semibold text-black mb-1">Backend</h4>
          <p className="text-sm text-gray-600">Node.js, APIs, Database Design</p>
        </div>
        </div>
      </div>
    </div>
  </div>

</section>

<section id="education" className="py-20 bg-transparent">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-bold mb-4 text-center">Education</h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-12 animate-pulse"></div>


    <div className="grid md:grid-cols-3 gap-5">
      
      {/* B.Tech Card */}
      <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 rounded-2xl shadow-xl backdrop-blur-lg p-6 transition transform hover:-translate-y-1 ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-black-400">B.Tech in Computer Science</h3>
          <span className="text-sm text-white font-bold bg-blue-700 px-3 py-1 rounded-full">2022 - 2026</span>
        </div>
        <p className="text-gray-600 mb-2">Holy Grace Accademy Of Enginnering, Mala,. Thrissur Dist.</p>
        <p className="text-sm text-white font-medium mb-1">
          🎓 <span className="text-green-400">Currently Pursuing</span>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          CGPA: <span className="text-white font-bold bg-gray-800 px-2 py-1 rounded">7.09 / 10</span>
        </p>
        <p className="text-sm text-gray-600">Focused on full-stack development, problem solving, and AI systems.</p>
      </div>

      {/* Higher Secondary Card */}
      <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 rounded-2xl shadow-xl backdrop-blur-lg p-6 transition transform hover:-translate-y-1 ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-black-400">Higher Secondary Education</h3>
          <span className="text-sm text-white font-bold bg-blue-700 px-3 py-1 rounded-full">2020 - 2022</span>
        </div>
        <p className="text-gray-600 mb-2">gov. hss north paravur</p>
         <p className="text-sm text-white font-medium mb-1">
          🎓 <span className="text-green-400">Completed</span>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Percentage: <span className="text-white font-bold bg-gray-800 px-2 py-1 rounded">87%</span>
        </p>
        <p className="text-sm text-gray-600">Majored in biology, Physics, Chemistry, and Mathematics.</p>
      </div>

       <div className="bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 rounded-2xl shadow-xl backdrop-blur-lg p-6 transition transform hover:-translate-y-1 ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-black-400">Secondary Education</h3>
          <span className="text-sm text-white font-bold bg-blue-700 px-3 py-1 rounded-full">2020</span>
        </div>
        <p className="text-gray-600 mb-2">St. Philomenas Hss Koonammavu</p>
         <p className="text-sm text-white font-medium mb-1">
          🎓 <span className="text-green-400">Completed</span>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Percentage: <span className="text-white font-bold bg-gray-800 px-2 py-1 rounded">100%</span>
        </p>
        <p className="text-sm text-gray-600">Developed strong analytical and foundational skills in core science and mathematics subjects. Actively participated in coding clubs and secured top ranks in inter-school academic competitions.</p>
      </div>

    </div>
  </div>
</section>


<section id="projects" className="py-20 bg-transparent">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading with Icon and Animation */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
        <h2 className="text-4xl font-bold text-black-900">My Projects</h2>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-pulse"></div>
    </div>

    {/* Project Cards */}
    <div className="grid md:grid-cols-3 gap-8 ">
      {[
        {
          name: "Vihara",
          subtitle: "Budget-Friendly Travel Website",
          description: `A comprehensive travel planning platform designed to help users discover 
          affordable destinations and plan budget-friendly trips. It provides guides, tips, and recommendations.`,
          tags: ["Travel", "Budget Planning", "Website", "Budget friendly travels"],
          link: "https://github.com/UNNIMAYA188/vihara-Explore_the_colors_of_india",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://static.vecteezy.com/system/resources/previews/000/279/639/original/location-pin-map-pin-flat-icon-vector-design.jpg" // Replace with actual image
        },
        {
          name: "IMDB Clone",
          subtitle: "Movie Database Application",
          description: `A movie database app built with Angular, featuring search, detailed movie pages, 
          ratings, and user reviews. Demonstrates modern frontend development practices.`,
          tags: ["Angular", "Movies", "API Integration"],
          link: "https://github.com/UNNIMAYA188/final_project",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png"
        },
        {
          name: "E-Commerce",
          subtitle: "Smart Grocery Shopping website",
          description: `A modern grocery shopping platform that allows users to browse, search, and add items to a cart, 
                track their expenses, and receive smart suggestions for weekly needs. Built with React and Firebase.`,
          tags: ["Shopping", "Smart Suggestions", "lower price"],
          link: "https://github.com/UNNIMAYA188/task5-ecommerce",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://img.freepik.com/premium-photo/grocery-trolley_439318-2963.jpg"
        },
        {
          name: " QR-Code generator",
          subtitle: "Generate your own qr code ",
          description: `A QR Code Generator is a tool or software application that allows users to create QR (Quick Response) codes. These are two-dimensional barcodes that can store information such as URLs, text, contact details, or Wi-Fi credentials. `,
          tags: ["Generate QR codes by using website URL'S, Wifi network etc", "Customizes background","Custom text"],
          link: "https://image-qr-code-maker.lovable.app/",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://tse1.mm.bing.net/th/id/OIP.tMguJ13n6SZVxRBHTh_VtwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
          name: "Zelion-Cricket",
          subtitle: "A perfect cricket items store",
          description: `Zelion Cricket stands out as a dedicated, Kerala‑based cricket gear specialist combining premium product curation, enthusiastic customer service, and a solid online presence. `,
          tags: ["Shopping", "Products", "lower price","Premium quality"],
          link: "https://project-zelion-cricket.netlify.app/",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://static.independent.co.uk/2022/06/06/13/newFile-4.jpg"
        },
        {
          name: "CredHex",
          subtitle: "Manage the digital certificates",
          description: `Securely upload and manage your digital certificates. Seamlessly secure, store, and access your most valuable certificates and credentials anytime, anywhere.`,
          tags: ["Upload certificates", "Delete", "view"],
          link: "https://project-zelion-cricket.netlify.app/",
          gradient: "from-orange-500 to-red-500",
          color: "blue",
          image: "https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2017/11/16/AWSCertificateManager_2-731x630.png"
        }
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl bg-gradient-to-br from-blue-200 to-teal-10 border border-blue-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden group relative animate-fade-up"
        >
<div className="bg-gradient-to-br from-fuchsia-100 to-cyan-100
 p-8 text-black">
            <div className="flex items-center justify-between mb-4">
              <img
                src={project.image}
                alt={`${project.name} icon`}
                className="w-10 h-10 rounded-full object-cover blue-200 "
              />
              <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className={`text-${project.color}-100`}>{project.subtitle}</p>
          </div>

          <div className="p-8">
            <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 bg-${project.color}-100 text-${project.color}-700 rounded-full text-sm font-medium animate-tag`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center space-x-2 text-${project.color}-600 hover:text-${project.color}-800 font-medium transition-all duration-300`}
              >
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                <span className="underline group-hover:no-underline">View Project</span>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-300"
              >
                <Github size={16} className="group-hover:rotate-6 transition-transform" />
                <span className="underline group-hover:no-underline">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     <section id="contact" className="py-20 bg-transparent">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading with icon and animation */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
        <h2 className="text-4xl font-bold text-gray-900 ">Get In Touch</h2>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-pulse"></div>
      <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
        I'm always interested in discussing new opportunities, collaborations, 
        or just having a conversation about technology and innovation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you have a project in mind, want to discuss opportunities, 
            or simply want to say hello, I'd love to hear from you. I am ready to work with  you!
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Card */}
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-fuchsia-100 to-cyan-100 border border-blue-500 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 p-3 rounded-full transition-colors duration-300 group-hover:bg-blue-700">
              <Mail className="text-white" size={20} />
            </div>
            <div>
              <h4 className=" font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">Email</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-blue-800">unnim2220@gmail.com</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-fuchsia-100 to-cyan-100 border border-blue-500 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-teal-600 p-3 rounded-full transition-colors duration-300 group-hover:bg-teal-700">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-teal-700">Phone</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-teal-800">+91 9534761584</p>
            </div>
          </div>
        </div>
        {/* Social Media Section */}
<div className="mt-10">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
  <div className="flex space-x-6 items-center">

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/unnimaya ks"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
        alt="LinkedIn"
        className="w-8 h-8 hover:scale-110 transition-transform"
      />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/UNNIMAYA188"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
        alt="GitHub"
        className="w-8 h-8 hover:scale-110 transition-transform"
      />
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/unni_maya_ks"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
        alt="Instagram"
        className="w-8 h-8 hover:scale-110 transition-transform"
      />
    </a>
  </div>
</div>

      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-br from-blue-200  to-teal-10 border border-blue-500 p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3  border border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3  border border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Unnimaya KS. Designed and built with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;