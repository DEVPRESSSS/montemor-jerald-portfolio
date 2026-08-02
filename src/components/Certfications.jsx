import CertASP from "../assets/mvc_cert.jpg"

export function Certifications(){
    const certifications = [
        {
            image: CertASP,
        }
    ];
    return(
        <div className="px-2 mt-4 min-h-[80vh] ">
            <div className="p-2 ">
                <h3 className="text-2xl font-semibold inline-block border-b-4 border-gray-400 dark:border-white dark:text-white pb-1">
                    CERTIFICATIONS
                </h3>
                    <p className="mt-1 text-gray-500 text-sm  dark:text-gray-200">
                        A mix of coursework, self-initiated builds, and things I made just to learn something new.
                    </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4 items-center">
                {
                    certifications.map((cert, index) => (
                    <div key={index} className="shadow-sm flex justify-center items-center rounded-sm">
                        <img src={cert.image}
                            className="object-contain rounded-lg"
                            loading="lazy"
                            decoding="async"
                            alt="Certificate" />
                    </div>
                    ))
                }
             
            </div>
          

        </div>
      
    )
}