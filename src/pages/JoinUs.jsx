import  { useState } from 'react';

const JoinUs = () => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cost, setCost] = useState(0);

  const handleUserTypeChange = (e) => {
    const selectedType = e.target.value;
    setUserType(selectedType);

    // Set cost based on user type
    switch (selectedType) {
      case 'innovator':
        setCost(10000);
        break;
      case 'ecoGreenBusiness':
        setCost(50000);
        break;
      case 'implementingPartner':
        setCost(1000000);
        break;
      default:
        setCost(0);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, User Type: ${userType}, Cost: ${cost} GCPS`);
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00796b',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    costDisplay: {
      marginTop: '10px',
      fontWeight: 'bold',
      color: '#00796b',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Join Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label style={styles.label} htmlFor="userType">Join as:</label>
          <select
            id="userType"
            style={styles.select}
            value={userType}
            onChange={handleUserTypeChange}
            required
          >
            <option value="">Select...</option>
            <option value="implementingPartner">Implementing Partner (1,000,000 GCPS)</option>
            <option value="ecoGreenBusiness">EcoGreenBusiness Enterprise (50,000 GCPS)</option>
            <option value="innovator">Innovator (10,000 GCPS)</option>
          </select>
        </div>

        {cost > 0 && (
          <div style={styles.costDisplay}>
            <p>Cost: {cost} GCPS</p>
          </div>
        )}

        <button style={styles.button} type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinUs;
