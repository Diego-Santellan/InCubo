const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const pages = ["Privacy Policy", "Term Of Service", "Disclaimer", "Credit", "FAQ"];

export default function Footer() {
  return (
    <footer className="bg-[#141414] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <img src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/77d7fa0b2_logo.png" alt="Incubo" className="h-10 mb-5" />
          <p className="text-white/60 leading-relaxed max-w-md">Acompañamos cada proyecto de principio a fin, trabajando de manera cercana con nuestros clientes para entender sus necesidades y encontrar la mejor solución. Cada obra es única, y nuestro compromiso es hacerla realidad.



          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wide text-sm mb-5">Other Pages</h3>
          <ul className="space-y-2">
            {pages.map((p) =>
            <li key={p}>
                <a href="#" className="text-white/60 hover:text-[#f04a19] text-sm transition-colors">
                  {p}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-px mb-8">
        <img src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/bfe0f3c8c_WhatsAppImage2026-s-08at55718PM.jpeg" alt="" className="w-full h-32 object-cover" />
        <img src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/67fd379db__DSC9829.jpg" alt="" className="w-full h-32 object-cover" />
        <img src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/400ae64de_DJI_0770.jpg" alt="" className="w-full h-32 object-cover" />
      </div>
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-white/40 text-sm">Copyright 2026 © InCubo. All rights reserved | Powered by Lis Medina & Diego Santellan</p>
      </div>
    </footer>);

}