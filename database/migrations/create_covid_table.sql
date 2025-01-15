CREATE TABLE covid (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  status ENUM('positive', 'recovered', 'dead') NOT NULL,
  out_date_at DATE
);
