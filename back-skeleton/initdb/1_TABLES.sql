create table jeu_1
(
    id       SERIAL PRIMARY KEY,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null,
    image    TEXT null
);

create table jeu_2
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null
);

create table jeu_3
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,

    reponse  TEXT not null
);

create table jeu_4
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    reponse  TEXT not null,
    image    TEXT null
);

create table jeu_5
(
    id       SERIAL PRIMARY KEY,
    question TEXT not null,
    option_1 TEXT not null,
    option_2 TEXT not null,
    option_3 TEXT not null,
    reponse  TEXT not null
);