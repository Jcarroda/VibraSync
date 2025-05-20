const Link = require("next/link");

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Pregunta central */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">¿A DÓNDE QUIERES IR?</p>
        </div>

        {/* Navegación principal */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12 text-sm">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="/musicApp" className="hover:text-white transition-colors">Escuchar</Link>
          <Link href="conoceme/" className="hover:text-white transition-colors">Conoceme</Link>
          <Link href="/subeMusica" className="hover:text-white transition-colors">Sube Tu Musica</Link>
        </div>

        {/* Información legal y contacto */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 mb-8">
          <span>© 2025 VibraSync</span>
          <Link href="/terminos-de-uso" className="hover:text-white transition-colors">Términos y Privacidad</Link>
          <Link href="mailto:contacto@vibrasync.com" className="hover:text-white transition-colors">contacto@vibrasync.com</Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-600 mb-0">
          copyright©VibraSync. Todos los derechos reservados.
        </div>


      </div>
    </footer>
  );
}

module.exports = Footer;
