CREATE TABLE City (
    city_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
);

CREATE TABLE Landmark (
    landmark_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    city_id INT,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    FOREIGN KEY (city_id) REFERENCES City(city_id)
);

---
INSERT INTO City (id, name)
VALUES (26,"marrakech");

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Jamaaa el-fna ', 26, 31.625865, -7.989152);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Lbahia palace ', 26, 31.619619, -7.976001);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Koutoubia ', 26, 31.623885, -7.993851);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Menara gardens', 26, 31.607997568, -8.019666588);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Saadian Tombs', 26, 31.6319956, -7.9859984);