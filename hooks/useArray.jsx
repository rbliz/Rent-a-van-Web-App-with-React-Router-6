import React from "react"
import { getVans } from "../api"

export default function useArray(initialValue = []){
    const [array, setArray] = React.useState(initialValue)
    // const [loading, setLoading] = React.useState(false)
    // const [error, setError] = React.useState(null)

        React.useEffect(() => {
            async function loadVans() {
                // setLoading(true)
                // try {
                    const data = await getVans()
                    setArray(data)
                // } catch (err) {
                    // setError(err)
                // } finally {
                    // setLoading(false)
                // }
            }
        loadVans()
        }, [])

        // if (loading) {
        //     return <h1>Loading...</h1>
        // }
        
        // if (error) {
        //     return <h1>There was an error: {error.message}</h1>
        // }

    return [array]
}