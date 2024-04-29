// Sidebar Configuration - Ruminations Section
export function sidebarRuminations() {
    return [
        {
            text: 'Theology',
            link: '/Ruminations/Theology/',
            items: [
                { text: 'Christian', link: '/Ruminations/Theology/Christian/' },
            ]
        }
    ];
}

// Sidebar Configuration - Expeditions Section
export function sidebarExpeditions() {
    return [
        {
            text: 'Lifestyle and Productivity',
            link: '/Expeditions/Lifestyle-and-Productivity/',
            items: [
                {
                    text: 'The Library',
                    link: '/Expeditions/Lifestyle-and-Productivity/The-Library/ ',
                    collapsed: true,
                    items: [
                        { text: 'Technical', link: '/Expeditions/Golang/' },
                        { text: 'Non-Fiction', link: '/Expeditions/Python/' },
                        { text: 'Biographies', link: '/Expeditions/PowerShell/' },
                        { text: 'Fiction', link: '/Expeditions/Bash/' },
                    ] 
                },
                {
                    text: 'Frameworks',
                    collapsed: true,
                    link: '/Expeditions/Lifestyle-and-Productivity/Frameworks/',
                    items: [
                        { text: 'Getting Things Done', link: '/Expeditions/Lifestyle-and-Productivity/Frameworks/GTD' },
                        { text: 'PARA', link: '/Expeditions/Lifestyle-and-Productivity/Frameworks/PARA/' }        
                    ] 
                }
            ]
        },
        {
            text: 'Science and Engineering',
            link: '/Expeditions/Science-and-Engineering/',
            items: [
                {
                    text: 'Programming & Scripting',
                    link: '/Expeditions/Science-and-Engineering/Programming-and-Scripting/',
                    collapsed: true,
                    items: [
                        { text: 'Python', link: '/Expeditions/Python/' },
                        { text: 'PowerShell', link: '/Expeditions/PowerShell/' },
                        { text: 'Bash', link: '/Expeditions/Bash/' },
                        { text: 'Golang', link: '/Expeditions/Golang/' },
                    ] 
                },
                {
                    text: 'Cloud & DevOps',
                    collapsed: true,
                    items: [
                        { text: 'The Linux OS', link: '/Expeditions/Linux/' },
                        { text: 'Docker', link: '/Expeditions/Docker/' }        
                    ] 
                },
                {
                    text: 'Networking',
                    collapsed: true,
                    items: [
                        { text: 'Internet', link: '/Expeditions/Internet/' },
                        { text: 'Protocols of the Web', link: '/Expeditions/Web-Protocols/' }        
                    ] 
                },
                {
                    text: 'Hardware',
                    collapsed: true,
                    items: [
                        { text: 'History of Computing', link: '/Expeditions/sds/' },
                        { text: 'Building Blocks', link: '/Expeditions/sdsafsf/' }        
                    ] 
                }
            ]
        },
    ];
}

// Sidebar Configuration - Manifesto Section
export function sidebarManifesto () {
    return [
        {
            text: 'About the Author', 
            link: '/Manifesto/About-Me/'
        },
        {
            text: 'Are you Talkin to Me?', 
            link: '/Manifesto/Contact-Me/'
        },
        {
            text: 'About the Project', 
            link: '/Manifesto/About-Odysseus-Ambrosia/'
        },
        {
            text: 'Building a Portfolio', 
            link: '/Manifesto/Building-a-Portfolio/'
        },
    ]
}

// Sidebar Configuration - Showcase Section
export function sidebarShowcase () {
    return [
        {
            text: 'HomeLab', 
            link: '/Showcase/HomeLab/',
            collapsed: true,
            items: [
                {text: 'Hardware',link: '/Showcase/HomeLab/Hardware/'},
                {text: 'Services',link: '/Showcase/HomeLab/Services/'},
                {text: 'Setting Up',link: '/Showcase/HomeLab/Setting-Up/'},
                {text: 'Maintainence',link: '/Showcase/HomeLab/Preventive-Maintenance/'},
            ]
        }
    ]
}