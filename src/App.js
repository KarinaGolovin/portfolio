import React, {useState} from 'react';
import {WorkItem} from './components/WorkItem';
import {useInViewport} from './hooks/useInViewport';
import './App.css';


function App() {
    const [activeIndex, setActiveIndex] = useState(null);
    const ref = React.createRef();
    const isMenuInViewport = useInViewport({ref: ref});

    return (
        <div className="App">
            <div className="divider divider-top"></div>
            <section className="portfolio-header">
                <div className="logo">
                    <div className="name">Karina Golovin</div>
                    <div className="position">digital designer</div>
                </div>
                <div className="navigation" ref={ref}>
                    <ul>
                        <li><a href="#works">works</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#contacts">contacts</a></li>
                    </ul>
                </div>
            </section>
            <section className={`portfolio-header-sticky ${!isMenuInViewport ? 'portfolio-header-sticky--active' : ''}`}>
                <div className="navigation navigation--secondary">
                    <ul>
                        <li><a href="#works">works</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#contacts">contacts</a></li>
                    </ul>
                </div>
            </section>
            <section id="hello">
                <div className="title visuallyhidden">
                    hello word
                </div>
                <div className="content-text">
                    <div>
                        Hi, I am Karina.
                        <br/><br/>
                        I am passionate about making people life easier via converting chaotically looking information into structured and slick UIs.
                    </div>
                    <div className="item-bottom">
                        I believe that analysing data and user behaviour helps to create better user experience .
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <section id="works">
                <div className="title">
                    works
                </div>

                {workItems.map((props, index) => {
                    return <WorkItem
                        key={props.title}
                        index={index}
                        active={index === activeIndex}
                        onShowDescriptionClick={() => {
                            setActiveIndex(activeIndex === index ? null : index);
                        }}
                        {...props}
                    />;
                })}
            </section>
            <div className="divider"></div>
            <section id="about">
                <div className="title">
                    About
                </div>
                <div className="content-text">
                    <div className="column-first">
                        <div className="content-title">Skills</div>
                        <div>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                                <li>Sketch</li>
                                <li>Illustrator</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-second">
                        <div className="content-title">Like</div>
                        <div>
                            <ul>
                                <li>Research</li>
                                <li>Analize</li>
                                <li>Prototype</li>
                                <li>Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-last">
                        I am an artist-animator in the past, now a web designer.
                        <br/>
                        Love trace the user's path and find out how improve the interaction with the product. Like create and use style guides and component libraries.
                        <br/>
                        Also could speak CSS/HTML/JS on basic level.
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <div className="container">
                <section id="contacts">
                    <div className="title">
                        contacts
                    </div>
                    <div className="social">
                        <ul className="social-list">
                            <li className="social-item social-item-mail">
                                <a href="mailto:karina.golovin@gmail.com">
                                    <img src="/media/icons/icon-mail-light.svg" alt="email icon"/>
                                </a>
                            </li>
                            <li className="social-item social-item-linkedin">
                                <a href="https://www.linkedin.com/in/karina-golovin-9a108110b/" target="_blank">
                                    <img src="/media/icons/icon-linkedin-light.svg" alt="linkedin icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="content-text">
                        <div>
                            I am always glad to new opportunities, collaborations and interesting projects.
                            <br/><br/>
                            Contact me to work together!
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const workItems = [
    {
        images: [
            {src: '/media/Jutupaunik-3.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Jutupaunik.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Jutupaunik-2.png', alt: 'design project work by Karina Golovin'},
        ],
        title: 'Jutupaunik',
        text: 'Online platform for teaching children languages through watching video stories.',
        description: 'Used friendly colors and given opportunity to change the color palette to create the atmosphere of the game. Large clear interface elements added for quick navigation through site options.',
    },
    {
        images: [
            {src: '/media/Juridica.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Juridica-2.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Juridica-3.png', alt: 'design project work by Karina Golovin'},
        ],
        link: 'https://juridicainternational.eu/',
        title: 'Juridica International',
        text: 'Digital edition with purpose search and read large amounts of juridical text from any common device format.',
        description: 'Added features, which helps magazine adapt to user needs: font settings and dark theme, quick footnotes, navigation allow finding sections with less click as possible.',
    },
    {
        images: [
            {src: '/media/Juura.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Juura-2.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/Juura-3.png', alt: 'design project work by Karina Golovin'},
        ],
        link: 'https://juuraveeb.ee/',
        title: 'Juura veeb',
        text: 'Three platforms combined: printed edition e-shop, digital publications and law commentary.',
        description: 'A unified style was developed. Color accents were added for each edition for user convenience. Each issue has quick navigation throug chapters and paragraphs, both from desktop and mobile.',
    },
    {
        images: [
            {src: '/media/TLT.png', alt: 'design project work by Karina Golovin'},
            {src: '/media/TLT-2.png', alt: 'design project work by Karina Golovin'},
        ],
        link: 'https://tlt.ee/',
        title: 'Tallinn city transport',
        text: 'Public transport website designed primarily for passengers and customers.',
        description: 'Developed recognizable and friendly corporate identity based on the customer\'s company interests. Most important interface parts, such as schedules and trip planner, warnings made more visible. Illustrations was added to make design non-formal and friendly.',
    },
    {
        images: [
            {src: '/media/card-2020.jpg', alt: 'design project work by Karina Golovin'},
            {src: '/media/card-2020-red.png', alt: 'design project work by Karina Golovin'},
        ],
        title: 'TV tower',
        text: 'Christmas card with brand elements.',
        underConstruction: false
    }
];

export default App;
