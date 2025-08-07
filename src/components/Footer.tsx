import { Facebook, Github, Instagram, Twitter} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">🎬 MovieVault</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your go-to destination for everything movies — latest trailers, cast info, and more.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/movies" className="hover:text-white transition">Movies</a>
          <a href="/tvshows" className="hover:text-white transition">TV Shows</a>
          {/* <a href="/favorites" className="hover:text-white transition">Favorites</a> */}
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/sk.nayeem.922535" target="_blank" className="hover:text-white transition">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/sknayeem6906/" target="_blank" className="hover:text-white transition">
              <Instagram />
            </a>
            <a href="https://x.com/SknayeemIslam3" target="_blank" className="hover:text-white transition">
              <Twitter />
            </a>
            <a href="https://github.com/Nayeem0011" target="_blank" className="hover:text-white transition">
              <Github />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MovieVault. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;


