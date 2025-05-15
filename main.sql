-- Criar a Tabela de Produtos
CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único do produto
    nome TEXT NOT NULL,                   -- Nome do produto
    preco_por_quilo REAL NOT NULL,        -- Preço de venda por quilo
    categoria TEXT NOT NULL               -- Categoria do produto
);

-- Inserir Dados na Tabela Produtos
INSERT INTO produtos (nome, preco_por_quilo, categoria) VALUES 
('Latinhas de Bebidas', 8.50, 'Metálicos'),
('Latas de Conservas', 3.00, 'Metálicos'),
('Potes de Conservas Metálicas', 3.00, 'Metálicos'),
('Marmitas de Isopor Higienizadas', 1.00, 'Isopor'),
('Marmitas de Isopor Não Higienizadas', 0.45, 'Isopor'),
('Garrafas PET', 2.50, 'Plásticos'),
('Embalagens de Plástico', 2.50, 'Plásticos'),
('Canudos Plásticos', 2.50, 'Plásticos'),
('Marmitas Plásticas', 2.50, 'Plásticos'),
('Papel', 2.00, 'Papel'),
('Canudos de Papel', 2.00, 'Papel'),
('Embalagens de Papel', 2.00, 'Papel'),
('Papelão', 2.00, 'Papel'),
('Lixo Orgânico', 3.00, 'Orgânico');