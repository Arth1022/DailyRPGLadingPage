import {FaEnvelope, FaInstagram, FaLinkedin, FaFacebook, } from 'react-icons/fa';

function SocialMidia() {
    const socialLinks = [
        { 
            id: 1, 
            icon: FaInstagram, 
            url: "https://www.instagram.com/arth_22_/",
            name: "Instagram",
            color: "text-amber-300" 
        },
        { 
            id: 2, 
            icon: FaLinkedin, 
            url: "https://www.linkedin.com/in/arthuralexteixeira/", 
            name: "LinkedIn",
            color: "text-amber-300" 
        },
        { 
            id: 3, 
            icon: FaFacebook, 
            url: "https://www.facebook.com/arthur.alexandre.5011516/", 
            name: "Facebook",
            color: "text-amber-300" 
        },
        {
            id: 4,
            icon: FaEnvelope,
            url: "mailto:arthurteixeira.1337@gmail.com",
            name: "Email",
            color: "text-amber-300"
        }
    ];

    return (
        <div className="flex justify-center items-center gap-6">
            
            {socialLinks.map((item) => (
                <a 
                    key={item.id}
                    href={item.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-3xl hover:opacity-75 transition-opacity ${item.color}`}
                    title={`Visite nosso ${item.name}`}
                >
                    <item.icon />
                </a>
            ))}
            
        </div>
    );
}

export default SocialMidia;