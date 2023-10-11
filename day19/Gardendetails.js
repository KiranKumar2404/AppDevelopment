import React, { useState, useEffect } from 'react';
import './Gardendetails.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GardenDetails() {
  const userId = localStorage.getItem('userId');
  const [gardens, setGardens] = useState([]);
  const [newGarden, setNewGarden] = useState({
    garden_name: '',
    no_of_lights: '',
    no_of_plants: '',
    no_of_motors: '',
    user: {
      id: userId,
    },
  });
  const [userIdInput, setUserIdInput] = useState('');
  const authToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchGardens(userId);
    }
  }, [userId]);

  const fetchGardens = () => {
    axios
      .get(`http://localhost:8080/api/gardens/user?user_Id=${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setGardens(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGarden((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addGarden = () => {
    axios
      .post('http://localhost:8080/api/gardens', newGarden, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log('Garden created:', response.data);
        setGardens([...gardens, response.data]);
        setNewGarden({
          garden_name: '',
          no_of_lights: '',
          no_of_plants: '',
          no_of_motors: '',
          user: {
            id: userId,
          },
        });
        setUserIdInput('');
      })
      .catch((error) => {
        console.error('Error creating garden:', error);
      });
  };
  

  const editGarden = (index) => {
    setEditingIndex(index);
    const editedGarden = gardens[index];
    setNewGarden({
      garden_name: editedGarden.garden_name,
      no_of_lights: editedGarden.no_of_lights,
      no_of_plants: editedGarden.no_of_plants,
      no_of_motors: editedGarden.no_of_motors,
      user: {
        id: userId,
      },
    });
  };

  const updateGarden = () => {
    if (editingIndex === null) {
      return;
    }

    const updatedGarden = gardens[editingIndex];

    if (!updatedGarden || !updatedGarden.gid) {
      console.error('Invalid garden data for update:', updatedGarden);
      return;
    }

    axios
      .put(`http://localhost:8080/api/gardens/${updatedGarden.gid}`, newGarden, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const updatedGardens = [...gardens];
        updatedGardens[editingIndex] = response.data;
        setGardens(updatedGardens);

        setNewGarden({
          garden_name: '',
          no_of_lights: '',
          no_of_plants: '',
          no_of_motors: '',
          user: {
            id: userId,
          },
        });
        setEditingIndex(null);
      })
      .catch((error) => {
        console.error('Error updating garden:', error);
      });
  };

  const deleteGarden = (gardenId) => {
    axios
      .delete(`http://localhost:8080/api/gardens/${gardenId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(() => {
        const updatedGardens = [...gardens].filter((garden) => garden.gid !== gardenId);
        setGardens(updatedGardens);
      })
      .catch((error) => {
        console.error('Error deleting garden:', error);
      });
  };
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <div className="GardenDetails-container">
    <button className="home-buttonUG" onClick={navigateToDashboard}>
        Home
      </button>
      <h1 className="GardenDetails-title">Garden Details</h1>
      <div className="GardenDetails-element">
        <h2 className="GardenDetails-subtitle">Add Garden</h2>
        <input
          type="text"
          name="garden_name"
          className="GardenDetails-input"
          placeholder="Garden Name"
          value={newGarden.garden_name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="no_of_lights"
          className="GardenDetails-input"
          placeholder="Number of Lights"
          value={newGarden.no_of_lights}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="no_of_plants"
          className="GardenDetails-input"
          placeholder="Number of Plants"
          value={newGarden.no_of_plants}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="no_of_motors"
          className="GardenDetails-input"
          placeholder="Number of Motors"
          value={newGarden.no_of_motors}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="userIdInput"
          className="GardenDetails-input"
          placeholder={"User id : "+userId}
          value={userIdInput}
          readOnly
        />
        {editingIndex === null ? (
          <button className="GardenDetails-button" onClick={addGarden}>
            Add
          </button>
        ) : (
          <button className="GardenDetails-button" onClick={updateGarden}>
            Update
          </button>
        )}
      </div>
      <div className="GardenDetails-element">
        <h2 className="GardenDetails-subtitle">Garden List</h2>
        <div className="GardenDetails-table-container">
          <table className="GardenDetails-table">
            <thead>
              <tr>
                <th className="GardenDetails-th">Name</th>
                <th className="GardenDetails-th">Lights</th>
                <th className="GardenDetails-th">Plants</th>
                <th className="GardenDetails-th">Motors</th>
                <th className="GardenDetails-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {gardens.map((garden, index) => (
                <tr key={garden.gid}>
                  <td className="GardenDetails-td">{garden.garden_name}</td>
                  <td className="GardenDetails-td">{garden.no_of_lights}</td>
                  <td className="GardenDetails-td">{garden.no_of_plants}</td>
                  <td className="GardenDetails-td">{garden.no_of_motors}</td>
                  <td className="GardenDetails-td">
                    {editingIndex === index ? (
                      <button className="GardenDetails-button" onClick={updateGarden}>
                        Update
                      </button>
                    ) : (
                      <button className="GardenDetails-button" onClick={() => editGarden(index)}>
                        Edit
                      </button>
                    )}
                    <button
                      className="GardenDetails-button"
                      onClick={() => deleteGarden(garden.gid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GardenDetails;
