CREATE TABLE Pieces (
    Piece_ID INT NOT NULL,
    Type char(15),
    Color INT NOT NULL,
    PRIMARY KEY (Piece_ID)
);

CREATE TABLE Games (
    Game_ID INT NOT NULL,
    PRIMARY KEY (Game_ID)
);

CREATE TABLE Full_Game (
    Game_ID INT NOT NULL,
    PRIMARY KEY (Game_ID),
    FOREIGN KEY (Game_ID) REFERENCES Games(Game_ID)
);

CREATE TABLE Simulated_Game (
    Game_ID INT NOT NULL,
    PRIMARY KEY (Game_ID),
    FOREIGN KEY (Game_ID) REFERENCES Games(Game_ID)
);

CREATE TABLE Moves (
    name_m char(30) Unique,
     -- ERROR 1074 (42000): Column length too big for column 'Sequence_moves' (max = 255); use BLOB or TEXT instead
    Sequence_moves char(255),
    PRIMARY KEY (name_m)
);

--Name is already a SQL type rename it to something else

CREATE TABLE End_Game (
    name_m char(30) Unique,
    Sequence_moves char(255),
    PRIMARY KEY (name_m),
    FOREIGN KEY (Sequence_moves) REFERENCES Moves(Sequence_moves),
    FOREIGN KEY (name_m) REFERENCES Moves(name_m)
);
CREATE TABLE Openings (
    name_m char(30) Unique,
    -- ERROR 1074 (42000): Column length too big for column 'Sequence_moves' (max = 255); use BLOB or TEXT instead
    Sequence_moves char(255),
    PRIMARY KEY (name_m),
    FOREIGN KEY (Sequence_moves) REFERENCES Moves(Sequence_moves),
    FOREIGN KEY (name_m) REFERENCES Moves(name_m)
);

CREATE TABLE Players (
    Username char(30) Unique,
    PRIMARY KEY (Username)
);

CREATE TABLE Users (
    Username char(30) Unique,
    Passwords char(30),
    PRIMARY KEY (Username),
    -- players not plazers
    FOREIGN KEY (Username) REFERENCES Players(Username)
);

CREATE TABLE Bot (
    Username char(30) Unique,
    Difficulty char(15),
    PRIMARY KEY (Username),
    FOREIGN KEY (Username) REFERENCES Players(Username)
);

CREATE TABLE Player_play_full_game (
    Game_ID INT NOT NULL,
    Username char(30) Unique,
    PRIMARY KEY (Username,Game_ID),
    FOREIGN KEY (Game_ID) REFERENCES Games(Game_ID),
    FOREIGN KEY (Username) REFERENCES Players(Username)
);

CREATE TABLE Moves_simulate_simulated_game (
    Game_ID INT NOT NULL,
    Name char(30) Unique,
    PRIMARY KEY (Name,Game_ID),
    FOREIGN KEY (Name) REFERENCES Moves(Name),
    FOREIGN KEY (Game_ID) REFERENCES Games(Game_ID)
);

CREATE TABLE Game_contains_Pieces (
    Piece_ID INT NOT NULL,
    Position char(2),
    Game_ID INT NOT NULL,
    PRIMARY KEY (Position,Piece_ID),
    FOREIGN KEY (Piece_ID) REFERENCES Pieces(Piece_ID),
    FOREIGN KEY (Game_ID) REFERENCES Games(Game_ID)
);