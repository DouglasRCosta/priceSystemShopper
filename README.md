# priceSystemShopper
Desafio Proposto pela Shopper.

acesse o prompt
```
cd FrontEnd 
npm install 
npm run dev

```

Em outro prompt
```
cd BackEnd
```
Em .env altere a url de acesso ao Banco "mysql://<seu usuário>:<sua senha>@localhost:3306/<seu schema>"
pode altera o mydb no final mas saiba que o prisma, criar caso não exista apagando se dados que estiverem lá .

```
npm install 
````


``
npx prisma generate
npx prisma migrate deploy

```


Pular está parte se os dados já estiverem no db
Necessário inserir os dados dentro do db
```

INSERT INTO products VALUES (16,'AZEITE  PORTUGU�S  EXTRA VIRGEM GALLO 500ML',18.44,20.49);
INSERT INTO products VALUES (18,'BEBIDA ENERG�TICA VIBE 2L',8.09,8.99);
INSERT INTO products VALUES (19,'ENERG�TICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);
INSERT INTO products VALUES (20,'ENERG�TICO RED BULL ENERGY DRINK 355ML',9.71,10.79);
INSERT INTO products VALUES (21,'BEBIDA ENERG�TICA RED BULL RED EDITION 250ML',10.71,11.71);
INSERT INTO products VALUES (22,'ENERG�TICO  RED BULL ENERGY DRINK SEM A��CAR 250ML',6.74,7.49);
INSERT INTO products VALUES (23,'�GUA MINERAL BONAFONT SEM G�S 1,5L',2.15,2.39);
INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);
INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUM�NIO WYDA 30CMX7,5M',5.21,5.79);
INSERT INTO products VALUES (1000,'BEBIDA ENERG�TICA VIBE 2L - 6 UNIDADES',48.54,53.94);
INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);


INSERT INTO packs (pack_id,product_id, qty) VALUES (1000,18,6);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,24,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,26,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,19,3);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,21,3);

```