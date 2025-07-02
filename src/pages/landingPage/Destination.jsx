import React from 'react';

const  DifferentDestinations = () => {
  const styles = {
    container: {
      marginTop: '3rem',
      marginBottom: '3rem',
    },
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    description: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    card: {
      marginBottom: '1.5rem',
    },
    button: {
      marginTop: '1.5rem',
    },
  };

  return (
    <div style={styles.container} className="container">
      <h2 style={styles.title} className="text-center mb-4">Green Impact Areas</h2>
      <p style={styles.description} className="text-center mb-5">
        Discover how GreenBin Foundation is driving sustainable innovations across different sectors to create a greener future.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={styles.card}>
            <img src="students.jpg" className="card-img-top" alt="Students" />
            <div className="card-body">
              <h5 className="card-title">Eco Scholars</h5>
              <p className="card-text">
                Empowering students with research resources and sustainability-focused learning materials.
              </p>
              <a href="#" className="btn btn-success" style={styles.button}>Join the Movement</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={styles.card}>
            <img src="entrepreneurs.jpg" className="card-img-top" alt="Entrepreneurs" />
            <div className="card-body">
              <h5 className="card-title">Eco Entrepreneurs</h5>
              <p className="card-text">
                Supporting green startups with insights, funding opportunities, and networking.
              </p>
              <a href="#" className="btn btn-success" style={styles.button}>Get Involved</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={styles.card}>
            <img src="innovators.jpg" className="card-img-top" alt="Innovators" />
            <div className="card-body">
              <h5 className="card-title">Sustainable Innovators</h5>
              <p className="card-text">
                Encouraging groundbreaking ideas that contribute to environmental conservation and eco-tech advancements.
              </p>
              <a href="#" className="btn btn-success" style={styles.button}>Be a Changemaker</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="btn btn-primary">Explore More Green Initiatives</a>
      </div>
    </div>
  );
};

export default  DifferentDestinations;
