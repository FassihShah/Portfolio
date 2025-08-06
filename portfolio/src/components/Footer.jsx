import { Github, Linkedin, TerminalSquare } from 'lucide-react';


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 font-mono">
      {/* Top border */}
      <div className="border-t border-gray-600 w-full"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Left Section: Info */}
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <TerminalSquare className="text-white" size={24} />
                <span className="text-white font-bold text-lg">Fassih</span>
              </div>
              <a href="mailto:fassihshah22@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                fassihshah22@gmail.com
              </a>
            </div>
            <p>AI/ML Developer and Full-Stack Engineer</p>
          </div>

          {/* Right Section: Media */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Media</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com/FassihShah" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/syed-fassih" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="text-center mt-16">
          <p>© Copyright 2025. Made by Fassih</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;