import pandas as pd

# Load CSV data
df = pd.read_csv('landmarks.csv')

# Function to generate the INSERT SQL query
def generate_insert_query(row):
    query = f"""
    INSERT INTO Landmark (name, city_id, latitude, longitude)
    VALUES ('{row['name']}',`{row['city_id']}, {row['latitude']}, {row['longitude']});
    """
    return query

# Generate and print SQL queries for each row in the DataFrame
for index, row in df.iterrows():
    print(generate_insert_query(row))


"""INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Jamaaa el-fna ', 26, 31.625865, -7.989152);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Lbahia palace ', 26, 31.619619, -7.976001);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Koutoubia ', 26, 31.623885, -7.993851);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Menara gardens', 26, 31.607997568, -8.019666588);

INSERT INTO Landmark (name, city_id, latitude, longitude)
VALUES ('Saadian Tombs', 26, 31.6319956, -7.9859984);
"""