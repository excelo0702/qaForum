import AddQuestionForm from "../components/AddQuestionForm";
import QuestionsList from "../components/QuestionsList";
import { useAuth } from "../context/AuthContext";
import '../styles/Home.css';

const Home = () =>{
    
    return(
        <div className="home-main-container">
            <AddQuestionForm/>
            <QuestionsList/>
        </div>
    );
}

export default Home;