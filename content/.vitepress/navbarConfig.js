// Navbar Configuration
export function navbar() {
    return [
        { text: 'Ruminations', link: '/Ruminations/' },
        { text: 'Expeditions', link: '/Expeditions/' },
        {
            text: 'Manifesto',
            items: [
                {
                    text: 'About Patrick Ambrose',
                    items: [
                        { text: "Who am I?", link: '/about-me/' },
                        { text: 'My Resumé', link: 'Patrick-Ambrose-Resume.pdf' },
                    ]
                },
                {
                    text: 'About Odysseus Ambrosia',
                    items: [
                        { text: 'What is this about?', link: '/showcase/patfolio/' },
                        { text: 'How did I build it?', link: '/guides/vitepress-portfolio/' }
                    ]
                },
                {
                    text: 'Current Projects',
                    items: [
                        { text: 'HomeLab', link: '/Showcase/HomeLab/' }
                    ]
                }
            ]
        }
    ]
}