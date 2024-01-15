import { useRouteError } from "react-router-dom"
//https://reactrouter.com/en/main/hooks/use-route-error
export default function Error() {
    const error = useRouteError()
    
    return (
        <>
        <h1>Error: {error.message}</h1>
        <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}