import AddClientModel from "../components/AddClientModel"
import AddProjectModal from "../components/AddProjectModal"
import Clients from "../components/Clients"
import Projects from "../components/Projects"

const Home = () => {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModel />
                <AddProjectModal />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    )
}

export default Home