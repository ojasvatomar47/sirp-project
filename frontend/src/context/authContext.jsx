import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (formData, role) => {
        let endpoint;

        // Determine the API endpoint based on the role
        if (role === "student") {
            endpoint = "http://localhost:8800/api/students/login";
        } else if (role === "caretaker") {
            endpoint = "http://localhost:8800/api/caretakers/login";
        } else if (role === "warden") {
            endpoint = "http://localhost:8800/api/wardens/login";
        }

        const res = await axios.post(endpoint, formData, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    const logout = async (role) => {
        let endpoint;

        // Determine the API endpoint based on the role
        if (role === "student") {
            endpoint = "http://localhost:8800/api/students/logout";
        } else if (role === "caretaker") {
            endpoint = "http://localhost:8800/api/caretakers/logout";
        } else if (role === "warden") {
            endpoint = "http://localhost:8800/api/wardens/logout";
        }

        const res = await axios.post(endpoint);
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
