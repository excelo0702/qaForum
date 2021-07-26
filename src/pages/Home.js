import AddQuestionForm from "../components/AddQuestionForm";
import { useAuth } from "../context/AuthContext";
import '../styles/Home.css';

const Home = () =>{
    
    return(
        <div className="home-main-container">
            <AddQuestionForm/>
        </div>
    );
}

export default Home;