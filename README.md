# priceSystemShopper
Desafio Proposto pela Shopper.

tenha um banco mysql na porta 3306
acesse o prompt
```
cd FrontEnd 
npm install 
npm run dev

```

Em outro prompt

```
cd BackEnd
npm install 
npx prisma generate
```

Em .env em BackEnd altere a url de acesso ao Banco "mysql://<seuUsuário>:<suaSenha>@localhost:3306/mydb"

pode alterar mydb para um existente mas o prisma pode excluir os dados

o db push irá criar o schema que definiu na url acima se não existir 

```
npx prisma db push
```



Necessário inserir os dados dentro do db

Na pasta BackEnd possui um scrip que adicionará os dados ao db 
```
npm run inserir
crtl + c  para encerrar nodemon
```
Ou pode inserilos no db manualmente com cadigo a seguir
```

INSERT INTO products VALUES (16,'AZEITE  PORTUGUES  EXTRA VIRGEM GALLO 500ML',18.44,20.49);
INSERT INTO products VALUES (18,'BEBIDA ENERGETICA VIBE 2L',8.09,8.99);
INSERT INTO products VALUES (19,'ENERGETICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);
INSERT INTO products VALUES (20,'ENERGETICO RED BULL ENERGY DRINK 355ML',9.71,10.79);
INSERT INTO products VALUES (21,'BEBIDA ENERGETICA RED BULL RED EDITION 250ML',10.71,11.71);
INSERT INTO products VALUES (22,'ENERGETICO  RED BULL ENERGY DRINK SEM ACUCAR 250ML',6.74,7.49);
INSERT INTO products VALUES (23,'AGUA MINERAL BONAFONT SEM GAS 1,5L',2.15,2.39);
INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);
INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUMINIO WYDA 30CMX7,5M',5.21,5.79);
INSERT INTO products VALUES (1000,'BEBIDA ENERGETICA VIBE 2L - 6 UNIDADES',48.54,53.94);
INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);


INSERT INTO packs (pack_id,product_id, qty) VALUES (1000,18,6);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,24,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,26,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,19,3);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,21,3);

```
