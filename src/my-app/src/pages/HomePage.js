import {useEffect, useState} from "react";
import {TeamTile} from "../components/TeamTile";
import './HomePage.scss'
export  const HomePage = () => {
    const [teams , setTeams]=  useState([])
    useEffect(() => {

        const fetchAllItems = async () => {
            const response = await fetch(`/team`);
            const data = await response.json();
            setTeams(data)
        }
        fetchAllItems() ;
    }, []);

    return(
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">Java Brains IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
)
}