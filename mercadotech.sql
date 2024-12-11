CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    precio INTEGER NOT NULL
);

INSERT INTO productos (titulo, descripcion, stock, precio) VALUES
('Teclado', 'Un teclado muy bonito', 10,65000),
('Notebook', 'Un Notebook muy bonito', 20, 750000),
('Ipad', 'Un Ipad no tan bonito', 5, 650000);
