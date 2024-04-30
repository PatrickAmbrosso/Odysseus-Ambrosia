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
                        { text: "Who am I?", link: '/Manifesto/About-Me/' },
                        { text: 'My Resumé', link: '/Patrick-Ambrose-Resume.pdf' },
                        { text: 'About the Project', link: '/Manifesto/About-Odysseus-Ambrosia/'}
                    ]
                },
                {
                    text: 'Current Projects',
                    items: [
                        { text: 'HomeLab', link: '/Showcase/HomeLab/' },
                        { text: 'AWS S3 Uploader', link: '/Showcase/S3-Uploader/' }
                    ]
                }
            ]
        }
    ]
}