create table jeu_1
(
    id       SERIAL PRIMARY KEY,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null,
    image    TEXT null
);
ALTER SEQUENCE jeu_1_id_seq RESTART 10000 Increment by 50;

create table jeu_2
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null
);
ALTER SEQUENCE jeu_2_id_seq RESTART 10000 Increment by 50;

create table jeu_3
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,

    reponse  TEXT not null
);
ALTER SEQUENCE jeu_3_id_seq RESTART 10000 Increment by 50;

create table jeu_4
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    reponse  TEXT not null,
    image    TEXT null
);
ALTER SEQUENCE jeu_4_id_seq RESTART 10000 Increment by 50;

create table jeu_5
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null
);
ALTER SEQUENCE jeu_5_id_seq RESTART 10000 Increment by 50;