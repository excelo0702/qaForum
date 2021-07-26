import { useAuth } from "../context/AuthContext";

const Profile = ()=>{

    const { currentUser } = useAuth();

    return(
        <div>
            Profile page
        </div>
    );
}

export default Profile;