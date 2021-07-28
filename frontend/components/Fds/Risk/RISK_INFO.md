# faire une table M2M recete de molecules

voire le tableau recette csv

# Risk

### Liquide inflamable

-- non existant

flashpoint calculé et prendre la valeur miminal
Liquide inflamable = valeur du flashpoint du produit final
caté 3 prend le dessus

### Toxicité aigue (rare)

car on traite sans nicotine car produit a part
idem pour booster frais
-- non existant

### iritant peau (rare)

H314
-- non existant

H315
-- non existant

## irritation occulaire

H318
-- non existant

H319
-- non existant

# senssi respi cutan

H334
-- non existant

H317 -1 | H317-1b
calculé just la retenue de mol avc ce risk avec sont ratio dans le mix (ex: mangue/fraise = retenu/2)

calculé la recette (concentration dans le mix) en molécule => (Res)concentration comparé avec le risk SI H317
si somme de la molecule unique est sup ega est a 1% on la classe H317 si inf a 1% pas classé

> Si la concentration est sup = 0.1 => "EUH208(valeur mention)"
> `contient map(${molecule qui es H317} (${num CAS})). peut produire une réaction allergique`

if true === H317

H317-1a
pour 1-a
si (res)concentration sup eg a 0.1% classé H317-1a

> Si la concentration est sup = 0.01 => "EUH208(valeur mention)"
> `contient map(${molecule qui es H317} (${num CAS})). peut produire une réaction allergique`

if true === H317

H361
-- non existant

H362
-- non existant

H370
-- non existant

H371
-- non existant

H335
-- non existant

H336
-- non existant

H372
-- non existant

H373
-- non existant

H304
-- non existant

# Milieu aquatique

H400
-- non existant

H410
-- non existant

H411
-- non existant

H412
somme des H410 *100 + somme H411 *10 + somme H412 = x sup= 25% => H412

H413 fruit du dragon et ornage
somme des H410 *100 + somme H411 *10 + somme H412 + somme H413 = x sup= 25% => H413

si H412 il n'es pas 413
si 413 verifier si il est 413

H226
-- non existant
