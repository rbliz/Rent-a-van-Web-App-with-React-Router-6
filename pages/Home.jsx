import React from "react"
import { Link } from "react-router-dom"
// import { getVans } from "../api"
import  useArray  from "../hooks/useArray";
import { Zoom  } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

export default function Home() {
    // const [vans, setVans] = React.useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)


    // React.useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setVans(data)
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     loadVans()
    // }, [])


    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    
    // if (error) {
    //     return <h1>There was an error: {error.message}</h1>
    // }
    
    
    const [vans] = useArray([])
    
   

    return (
    <>
        <div className="home-container">
            <h1>The Van you're looking for.</h1>
            <p>Join the fun! Rent the perfect van for your unbridled road trip!</p>
            <Link to="vans">Rent</Link>
        </div>
        <div className="slideshow-container">
            <div className="slideshow">
                <Zoom scale={1.4} indicators={true}>
                    {vans.map((each, index) => {
                    return(
                        <div key={index} style={{ width: "100%" }}>
                            <img style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "5px" }} alt="Slide Image" src={each.imageUrl} />
                        </div>
                    )
                    } )}
                </Zoom>
            </div>
        </div>
    </>
    )
};

