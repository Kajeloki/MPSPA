import MainNavigation from "../components/MainNavigation";


const ErrorPage = () =>{
    return <>
        <MainNavigation />
        <main>
            <h1>Wystąpił błąd!</h1>
            <p>Nie znaleziono strony o takim adresie</p>
        </main>
    </>
}

export default ErrorPage;