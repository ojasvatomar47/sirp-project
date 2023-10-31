// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react' ;
import Hero from '../components/Hero' ;
import Services from '../components/Services' ;
import Container from '../components/Container' ;
import Instruct from '../components/Instruct';
import Notice from '../components/Notice'
const Home = () => {

  const { currentUser, logout } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const [notices, setNotices] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    if (currentUser) {

      const { role, hostel_name, student_id } = currentUser

      const fetchComplaints = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/complain`, { params: { hostel: hostel_name } })
          setComplaints(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchComplaints()

    }
  }, [currentUser])

  useEffect(() => {

    if (currentUser) {

      const { hostel_name } = currentUser

      const fetchNotices = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/notice`, { params: { hostel: hostel_name } })
          setNotices(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchNotices()

    }
  }, [currentUser])

  const handleLogout = async (event) => {
    event.preventDefault()

    try {
      await logout(currentUser.role)
      console.log("User has been logged out successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date} ${time}`;
  };

  return (
    <div>
      <Hero /> 
      <Instruct/>
      <Services /> 
      <Notice/>
      <Container />
    </div>
  );
};

export default Home;
