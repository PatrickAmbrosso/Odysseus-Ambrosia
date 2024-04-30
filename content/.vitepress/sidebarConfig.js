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
                        { text: 'Python', link: '/Expeditions/Science-and-Engineering/Programming-and-Scripting/Python/' },
                        { text: 'PowerShell', link: '/Expeditions/Science-and-Engineering/Programming-and-Scripting/PowerShell/' },
                        { text: 'Bash', link: '/Expeditions/Science-and-Engineering/Programming-and-Scripting/Bash/' },
                        { text: 'Golang', link: '/Expeditions/Science-and-Engineering/Programming-and-Scripting/Golang/' },
                    ] 
                },
                {
                    text: 'Software Development',
                    link: '/Expeditions/Science-and-Engineering/Software-Development/',
                    collapsed: true,
                    items: [
                        { text: 'Open Source', link: '/Expeditions/Science-and-Engineering/Software-Development/Open-Source/' },
                    ] 
                },
                {
                    text: 'Hardware',
                    link: '/Expeditions/Science-and-Engineering/Hardware/',
                    collapsed: true,
                    items: [
                        { text: 'History of Computing', link: '/Expeditions/Science-and-Engineering/Hardware/History-of-Computing' },
                        { text: 'Building Blocks', link: '/Expeditions/Science-and-Engineering/Hardware/Building-Blocks/' }        
                    ] 
                },
                {
                    text: 'Networking',
                    link: '/Expeditions/Science-and-Engineering/Networking/',
                    collapsed: true,
                    items: [
                        { text: 'Internet', link: '/Expeditions/Science-and-Engineering/Networking/Internet/' },
                        { text: 'Protocols of the Web', link: '/Expeditions/Science-and-Engineering/Networking/Web-Protocols/' }        
                    ] 
                },
                {
                    text: 'Cloud & DevOps',
                    link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/',
                    collapsed: true,
                    items: [
                        { text: 'The Linux OS', link: '/Expeditions/Linux/' },
                        { text: 'Docker', link: '/Expeditions/Docker/' }        
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
            text: 'About the Project', 
            link: '/Manifesto/About-Odysseus-Ambrosia/'
        }
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
        },
        {
            text: 'Odysseus Ambrosia', 
            link: '/Showcase/Odysseus-Ambrosia/',
            collapsed: true,
            items: [
                {text: 'Choosing Framework',link: '/Showcase/Odysseus-Ambrosia/Choosing-Framework/'},
                {text: 'Setting things Up',link: '/Showcase/Odysseus-Ambrosia/Setting-Things-Up/'},
                {text: 'Writing Content',link: '/Showcase/Odysseus-Ambrosia/Writing-Content/'},
                {text: 'Deployment',link: '/Showcase/Odysseus-Ambrosia/Deployment/'},
           ]
        },
        {
            text: 'S3 Uploader', 
            link: '/Showcase/S3-Uploader/',
            collapsed: true,
            items: [
                {text: 'The Code',link: '/Showcase/S3-Uploader/Hardware/'},
                {text: 'Future Prospects',link: '/Showcase/S3-Uploader/Services/'}
            ]
        }
    ]
}