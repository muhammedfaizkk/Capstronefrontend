import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles/teamSwiper.css'; // Custom styles

const teamMembers = [
    {
        image: "./images/team/p02.png",
        name: "Mohamed Yousef",
        position: "Developer - Blogger",
        description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam.",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        image: "./images/team/p02.png",
        name: "Mohamed Yousef",
        position: "Developer - Blogger",
        description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in.",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        image: "./images/team/p02.png",
        name: "Mohamed Yousef",
        position: "Developer - Blogger",
        description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam.",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        image: "./images/team/p02.png",
        name: "Mohamed Yousef",
        position: "Developer - Blogger",
        description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam.",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        image: "./images/team/p02.png",
        name: "Mohamed Yousef",
        position: "Developer - Blogger",
        description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam.",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    // Add more members as needed
];

const TeamMembersSwiper = () => {
    return (
        <section className="team-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Meet Our Team</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    modules={[Navigation]}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="team-swiper"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className="item">
                            <div className="box">
                                <img className="rounded-circle" src={member.image} alt={member.name} />
                                <h3 className="name">{member.name}</h3>
                                <p className="title">{member.position}</p>
                                <p className="description">{member.description}</p>
                                <div className="social">
                                    <a href={member.social.facebook}><FaFacebookF /></a>
                                    <a href={member.social.twitter}><FaTwitter /></a>
                                    <a href={member.social.instagram}><FaInstagram /></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamMembersSwiper;
