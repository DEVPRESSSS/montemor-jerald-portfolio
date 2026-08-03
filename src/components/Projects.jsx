import Github from "../assets/github.png"
export function Projects() {
    const projects = {
        
       academic_project: [
            {
                projectId: 1,
                name:"Point Of Sale",
                category: "thesis",
                description: "Built a point of sale system for a small shoes business.",
                applicationType: "Desktop App",
                link: "",
                repository: "https://github.com/DEVPRESSSS/VB.NET_THESIS_THIRYEAR_WPF",
                tags: [
                    "VB.NET",
                    "WPF",
                    "SQL Server",
                    "XAML",
                    "Windows Application"
                ],
                role: "Leader/Programmer"
            },
            {
                projectId: 2,
                name:"Kitchen Display System",
                category: "thesis",
                description: "Built a kitchen display system using firebase to automate real time ordering.",
                applicationType: "Desktop App",
                link: "",
                repository: "https://github.com/DEVPRESSSS/KDS-THESIS-PROJECT-2ND-YEAR",
                tags: [
                    "Python",
                    "Firebase",
                    "MySQL",
                    "Customtkinter"
                ],
                 role: "Leader/Programmer"
            },
            {
                projectId: 3,
                name:"Point Of Sale",
                category: "thesis",
                description: "Customize and improved an existing POS website with more secure coding practices.",
                applicationType: "Web App",
                link: "http://devpresstech.runasp.net/Admin",
                repository: "https://github.com/DEVPRESSSS/POS-SE101-PROJECT",
                tags: [
                    "ASP",
                    "Ef Core",
                    "Bootstrap",
                    "SQL Server",
                    "Javascript",
                    "DrinkPDF",
                    "IdentityServer"
                ],
                 role: "Solo/Programmer"
            },
            {
                projectId: 4,
                name:"Learning Website",
                category: "thesis",
                description: "Developed a simple learning website for students at The University of Manila.",
                applicationType: "Web App",
                link: "http://lms-v7.runasp.net/",
                repository: "",
                tags: [
                    "ASP",
                    "Ef Core",
                    "Bootstrap",
                    "SQL Server",
                    "Javascript",
                    "IdentityServer",
                    "Quill"
                ],
                 role: "Leader/BackEnd developer"
            },

            {
                projectId: 5,
                name:"Hotel Management System",
                category: "thesis",
                description: "Developed a HMS to steamline daily operations of a hotel with reservation tracking, payment, and 2d mapping!!!",
                applicationType: "Web App",
                link: "",
                repository: "https://github.com/DEVPRESSSS/hotel-management-system-go-lang-thesis",
                tags: [
                    "Go",
                    "Gin",
                    "TailwindCSS",
                    "Flatpckr",
                    "Full Calendar",
                    "Javascript",
                    "JWT",
                    "RBAC",
                ],
                role: "Solo/Programmer"
            },
            
            {
                projectId: 6,
                name:"Hotel Management System",
                category: "Personal Project",
                description: "Consumed an api from my ASP.NET core web api backend.",
                applicationType: "Web App",
                link: "",
                repository: "https://github.com/DEVPRESSSS/hotel-management-system-go-lang-thesis",
                tags: [
                    "Backend - ASP.NET CORE WEB API",
                    "Frontend - React",
                    "TailwindCSS",
                    "Ef Core",
                    "SQL server",
                    "RBAC",
                ],
                role: "Fullstack"
            },
       ]

        
    }

    return (
        <div className="px-2 mt-4 gap-4 min-h-[80vh]">
            <div className="p-2">
                <h3 className="text-2xl font-semibold inline-block 
                    dark:text-white
                     dark:border-white
                    border-b-4 border-gray-400 pb-1">
                    ACADEMIC AND PERSONAL PROJECTS
                </h3>
                    <p className="mt-1 text-gray-500 text-sm  dark:text-white">
                        A mix of coursework, self-initiated builds, and things I made just to learn something new.
                    </p>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 rounded-lg   dark:text-gray-200 ">
                {
                    projects.academic_project.map((project) =>(
                    <div key={project.projectId} class="w-full border border-gray-200  dark:border-gray-700 rounded-sm">
                            <div  className="flex">
                              <div className="w-30 flex-none flex flex-col h-full px-2 py-3 bg-gray-950 text-white rounded-s-md">
                                    <div>
                                        <h5 className="text-xs md:text-sm  dark:text-white">
                                            {project.name} <span className="text-xs">-({project.category})</span>
                                        </h5>
                                    </div>

                                    {/* Repository Page*/}
                                    <div className="mt-auto flex items-center justify-center pt-3">
                                        <a href= {project.repository} className="bg-white rounded-full hand-pointer">
                                            <img
                                                src={Github}
                                                className="object-contain"
                                                loading="lazy"
                                                decoding="async"
                                                alt="Github Logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div class="flex flex-1 px-2">
                                    {/* ApplicationType */}
                                    <div >
                                        <div className="border-b py-3 border-gray-200">
                                             <h6 className="text-center">{project.applicationType}</h6>

                                        </div>

                                        {/* Description & Tags */}
                                        <div className="mb-2">
                                            <div className="border-b border-gray-200 dark:border-gray-700">
                                                 <p className="text-sm text-gray-600  dark:text-gray-200 ">{project.description}</p>
                                            </div>
                                            {
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((name, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-center h-7  px-3 rounded-2xl"
                                                    >
                                                        <p className="text-xs whitespace-nowrap 
                                                            border-b border-gray-200 
                                                             dark:text-gray-200 ">{name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            }
                                          
                                        </div>
                                    </div>
                                    {/* link */}
                               <div className="flex-1 flex items-start justify-end border-b text-end border-gray-200 dark:border-none py-2">
                                    {project.link && project.link.trim() !== "" ? (
                                        
                                        <a href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full py-2 px-2 cursor-pointer hover:bg-black hover:text-white"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                        </a>
                                    ) : (
                                        <button
                                        onClick={() => alert('No link available!!')}
                                        className="rounded-full py-2 px-2 cursor-pointer hover:bg-black hover:text-white"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                        </button>
                                    )}
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    ))
                }
            </div>
            
        </div>
    )
}