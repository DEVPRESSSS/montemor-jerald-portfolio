import Profile from "../assets/profile.png"
import LinkedIn from "../assets/linked.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Github from "../assets/github.png"

export function Home() {

    const socials = [

        {
            image: LinkedIn,
            alt: "LinkedIn logo",
            link: "https://www.linkedin.com/in/jerald-montemor-4b1989289/"

        },
        {
            image: Facebook,
            alt: "Facebook logo",
            link: "https://www.facebook.com/montemorjerald"
        },
        {
            image: Instagram,
            alt: "Instagram logo",
            link: "https://www.instagram.com/devpress_101/"

        },
        {
            image: Github,
            alt: "Github logo",
            link: "https://github.com/DEVPRESSSS"

        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 mt-4 gap-4 items-center min-h-[80vh]">
            <div className="flex justify-center items-center py-4 px-2">
                <img
                    src={Profile}
                    className="rounded-b-full h-64 w-64 md:h-90 md:w-90 object-contain"
                    alt="Jerald Montemor"
                />
            </div>

            <div className="py-4 px-2">
                <h4 className="text-3xl  mb-1">Montemor, Jerald R.</h4>
                <p className="text-lg text-gray-500 mb-4">
                    .NET Developer | Quality Assurance
                </p>

                 <p className="text-gray-600 max-w-prose">
                    Fresh out of the gate as a developer, focused on writing clean code and building applications 
                    people actually enjoy using.
                </p>


                {/* CTA buttons */}
                <div className="flex flex-row justify-start gap-3 mt-6">
                    <a 
                        href="#projects"
                        className="px-5 py-2 text-center
                                 bg-black
                                  text-white transition-colors
                                   rounded-full font-medium"
                    >
                        View Projects
                    </a>
                
                </div>

                {/* Social links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 text-center">

                    {
                        socials.map((tech) =>(
                            <div key={tech.alt} className="flex justify-center items-center py-2 border  border-gray-300 rounded-xl">
                                 <a href={tech.link} target="_blank" rel="noopener noreferrer">
                                    <img src={tech.image} className="h-8 w-8 object-contain shrink-0" alt= "Linked" />    
                                 </a>
                                      
                           </div>

                        ))
                    }
               
                </div>
            </div>
        </div>
    );
}