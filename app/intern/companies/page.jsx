import {useEffect, useState} from "react";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch(`/api/organizations`)
            .then(response => response.json())
            .then(data => {
                setCompanies(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
        <h1>Companies</h1>
        </div>
    );
}
