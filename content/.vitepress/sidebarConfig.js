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
                        { text: 'Technical', link: '/Expeditions/Lifestyle-and-Productivity/The-Library/Technical/' },
                        { text: 'Non-Fiction', link: '/Expeditions/Lifestyle-and-Productivity/The-Library/Non-Fiction/' },
                        { text: 'Biographies', link: '/Expeditions/Lifestyle-and-Productivity/The-Library/Biographies/' },
                        { text: 'Fiction', link: '/Expeditions/Lifestyle-and-Productivity/The-Library/Fiction/' },
                    ] 
                },
                {
                    text: 'Frameworks',
                    collapsed: true,
                    link: '/Expeditions/Lifestyle-and-Productivity/Frameworks/',
                    items: [
                        { text: 'Getting Things Done', link: '/Expeditions/Lifestyle-and-Productivity/Frameworks/GTD/' },
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
                        { text: 'Version Control Systems', link: '/Expeditions/Science-and-Engineering/Software-Development/Version-Control-Systems/' },
                        { text: 'Git', link: '/Expeditions/Science-and-Engineering/Software-Development/Git-VCS/' },
                    ] 
                },
                {
                    text: 'Hardware',
                    link: '/Expeditions/Science-and-Engineering/Computer-Hardware/',
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
                    text: 'Operating Systems',
                    link: '/Expeditions/Science-and-Engineering/Operating-Systems/',
                    collapsed: true,
                    items: [
                        { text: 'GNU/Linux', link: '/Expeditions/Science-and-Engineering/Operating-Systems/Linux/' },        
                        { text: 'Windows', link: '/Expeditions/Science-and-Engineering/Operating-Systems/Windows/' }
                    ] 
                },
                {
                    text: 'Cloud & DevOps',
                    link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/',
                    collapsed: true,
                    items: [
                        { text: 'AWS', link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/AWS/' },
                        { text: 'Ansible', link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/Ansible/' },
                        { text: 'Docker', link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/Docker/' },
                        { text: 'Kubernetes', link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/Kubernetes/' },
                        { text: 'Terraform', link: '/Expeditions/Science-and-Engineering/Cloud-and-DevOps/Terraform/' },
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
        },
        {
            text: 'Get in Touch', 
            link: '/Manifesto/Get-in-Touch/'
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