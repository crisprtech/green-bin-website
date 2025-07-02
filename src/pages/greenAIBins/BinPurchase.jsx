import React from 'react';

const SingleProductPage = ({ product }) => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      color: '#00796b',
      margin: '10px 0',
    },
    featuresList: {
      listStyleType: 'none',
      padding: '0',
      textAlign: 'left',
      margin: '20px 0',
    },
    listItem: {
      padding: '10px 0',
      fontSize: '1.2rem',
      color: '#555',
      borderBottom: '1px solid #e0e0e0',
    },
  };

  return (
    <div style={styles.container}>
      <div className="interactive-model">
        <img src="path/to/360-model.png" alt="360° Smart AI Bin" style={styles.image} />
      </div>
      <h3 style={styles.title}>{product.name}</h3>
      <ul style={styles.featuresList}>
        <li style={styles.listItem}>AI-Powered Sorting (Glass, Plastic, Organic)</li>
        <li style={styles.listItem}>Connects to App (Track waste habits)</li>
        <li style={styles.listItem}>Earns Green Carbon Points</li>
      </ul>
    </div>
  );
};

export default SingleProductPage;
