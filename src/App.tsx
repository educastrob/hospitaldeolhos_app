import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Phone, Mail, Clock, MapPin, ChevronRight, Stethoscope, Users, Building2, X } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Cirurgia de Catarata",
      description: "A Cirurgia de Catarata é um procedimento seguro e eficaz para restaurar a visão comprometida pela catarata, uma condição em que o cristalino do olho fica opaco. Durante a cirurgia, o cristalino danificado é substituído por uma lente intraocular artificial, proporcionando melhora significativa na qualidade visual. O procedimento é rápido, indolor e realizado com anestesia local. A recuperação é simples, e a maioria dos pacientes retoma suas atividades normais em poucos dias."
    },
    {
      title: "Tratamento de Glaucoma",
      description: "O Tratamento de Glaucoma visa controlar essa doença silenciosa que pode causar perda progressiva da visão devido ao aumento da pressão intraocular. O tratamento pode incluir colírios específicos, laser ou cirurgia, dependendo do estágio da doença. O objetivo é reduzir a pressão ocular e prevenir danos ao nervo óptico. Diagnóstico precoce e acompanhamento regular são essenciais para preservar a visão."
    },
    {
      title: "Cirurgia de Córnea",
      description: "A Cirurgia de Córnea é indicada para tratar problemas como ceratocone, cicatrizes ou distrofias da córnea que afetam a visão. Entre os procedimentos mais comuns estão o transplante de córnea e a ceratoplastia. A cirurgia é realizada com técnicas modernas e minimamente invasivas, proporcionando recuperação mais rápida e resultados visuais satisfatórios. O procedimento é personalizado de acordo com as necessidades de cada paciente."
    },
    {
      title: "Exames de Retina",
      description: "Os Exames de Retina são fundamentais para avaliar a saúde da retina, uma parte crucial do olho responsável pela captação de imagens. Esses exames ajudam a diagnosticar doenças como retinopatia diabética, degeneração macular e descolamento de retina. Utilizamos equipamentos de alta tecnologia, como o OCT (Tomografia de Coerência Óptica), para obter imagens detalhadas e precisas da retina."
    },
    {
      title: "Fundo de Olho",
      description: "O exame de Fundo de Olho é um procedimento simples e indolor que permite ao oftalmologista visualizar as estruturas internas do olho, como a retina, o nervo óptico e os vasos sanguíneos. É essencial para detectar doenças oculares e sistêmicas, como diabetes e hipertensão. O exame é rápido e pode ser realizado durante uma consulta de rotina."
    },
    {
      title: "Mapeamento de Retina",
      description: "O Mapeamento de Retina é um exame detalhado que avalia a saúde da retina e identifica alterações como buracos, rasgaduras ou áreas de degeneração. É especialmente importante para pacientes com miopia alta, diabetes ou histórico familiar de doenças retinianas. O exame é indolor e utiliza um equipamento chamado oftalmoscópio indireto, que permite uma visão ampla e precisa da retina."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
		{/* Header */}
		<header className="bg-blue-600 text-white">
			<div className="container mx-auto px-4 py-2">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
						<div className="flex items-center space-x-2">
							<Phone size={16} />
							<span>(73) 3531-3722</span>
						</div>
						<div className="flex items-center space-x-2">
							<Mail size={16} />
							<span>clinicaipiau@yahoo.com.br</span>
						</div>
					</div>
					<div className="flex items-center space-x-2 mt-2 md:mt-0">
						<Clock size={16} />
						<span>Segunda à Sexta</span>
					</div>
				</div>
			</div>
		</header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-gray-800">Hospital de Olhos de Ipiaú</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">Sobre Nós</a>
              <a href="#team" className="text-gray-600 hover:text-blue-600">Equipe Médica</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Exames</a>
              <a href="#insurance" className="text-gray-600 hover:text-blue-600">Convênios</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
            </div>
          </div>
        </div>
      </nav>

	{/* Hero Section */}
	<section id="home" className="relative h-[600px]">
		<div className="absolute inset-0 overflow-hidden">
			<img
				src="/medicos/hospital-front.jpeg"
				alt="Eye examination"
				className="w-full h-full object-cover transform scale-110 object-left"
			/>
			<div className="absolute inset-0 bg-blue-900/70"></div>
		</div>
		<div className="relative container mx-auto px-4 h-full flex items-center">
			<div className="max-w-2xl text-white">
				<h1 className="text-5xl font-bold mb-6">Cuidando da Saúde dos Seus Olhos</h1>
				<p className="text-xl mb-8">Especialistas em córnea, retina, cirurgia de catarata, glaucoma e todos os exames de fundo de olho.</p>
				<a 
					href="https://wa.me/557335313722" 
					target="_blank" 
					rel="noopener noreferrer"
					className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
				>
					Agende sua Consulta
				</a>
			</div>
		</div>
	</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80"
                alt="Modern eye clinic"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                O Hospital de Olhos de Ipiaú é referência em tratamentos oftalmológicos na região,
                oferecendo atendimento especializado e tecnologia de ponta para garantir a melhor
                saúde ocular para nossos pacientes. Nossa equipe altamente qualificada está
                comprometida em proporcionar um atendimento humanizado e os melhores resultados
                em cada procedimento.
              </p>
            </div>
          </div>
        </div>
      </section>

		{/* Team Section */}
		<section id="team" className="py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe Médica</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{[
						{ name: "Dr. Edmar Ferraz", specialty: "Oftalmologista", image: "/medicos/edmar-ferraz.png" },
						{ name: "Dra. Maria Lucia Ribeiro", specialty: "Oftalmologista", image: "/medicos/maria-lucia.jpg" }
					].map((doctor, index) => (
						<div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
							<div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
								<img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-full" />
							</div>
							<h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
							<p className="text-gray-600">{doctor.specialty}</p>
						</div>
					))}
				</div>
			</div>
		</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Exames e Procedimentos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${selectedService === index ? 'scale-105 ring-2 ring-blue-500' : 'hover:shadow-xl hover:translate-y-[-5px]'}`}
                onClick={() => setSelectedService(index)}
              >
                <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                
                {selectedService !== index && (
                  <div className="flex items-center text-blue-600 mt-4">
                    <span className="mr-1 text-sm">Saiba mais</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
                
                {selectedService === index && (
                  <div className="mt-4 animate-fadeIn">
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <button 
                      className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(null);
                      }}
                    >
                      <X className="w-4 h-4 mr-1" />
                      <span className="text-sm">Fechar</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

		{/* Insurance Section */}
		<section id="insurance" className="py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Convênios</h2>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
					{[
						{ id: 1, image: "/convenios/bradesco.png" },
						{ id: 2, image: "/convenios/camed.png" },
						{ id: 3, image: "/convenios/cassi.png" },
						{ id: 4, image: "/convenios/sulamerica.webp" },
						{ id: 5, image: "/convenios/unimed.png" }
					].map((item) => (
						<div key={item.id} className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
							<img src={item.image} alt={`Convênio ${item.id}`} className="max-w-full max-h-16 object-contain" />
						</div>
					))}
				</div>
			</div>
		</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fale Conosco</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4" />
                    <p>Rua Marechal Floriano Peixoto n° 171, centro Ipiaú- BA</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" />
                    <p>(73) 3531-3722</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" />
                    <p>clinicaipiau@yahoo.com.br</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-4" />
                    <p>Segunda à Sexta</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Hospital de Olhos de Ipiaú</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2025 Hospital de Olhos de Ipiaú. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

{/* Instagram Button */}
<a 
	href="https://www.instagram.com/hospitaldeolhoshoip" 
	target="_blank" 
	rel="noopener noreferrer" 
	className="fixed bottom-20 right-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center custom-pulse"
	aria-label="Visite nosso Instagram"
>
	<FaInstagram className="w-8 h-8" />
</a>

{/* WhatsApp Button */}
<a 
	href="https://wa.me/557335313722" 
	target="_blank" 
	rel="noopener noreferrer" 
	className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center animate-pulse"
	aria-label="Contato via WhatsApp"
>
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 24 24" 
		fill="currentColor" 
		className="w-8 h-8"
	>
		<path 
			d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
		/>
	</svg>
</a>

<style jsx>{`
	@keyframes custom-pulse {
		0%, 100% {
			box-shadow: 0 0 0 0 rgba(219, 39, 119, 0.4);
		}
		50% {
			box-shadow: 0 0 0 20px rgba(219, 39, 119, 0);
		}
	}

	.custom-pulse {
		animation: custom-pulse 2s infinite;
	}
`}</style>
    </div>
  );
}

export default App;