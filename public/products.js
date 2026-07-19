// products.js — données partagées entre le catalogue (index.html) et les fiches (produit.html)

const PRODUCTS = [
  {id:1, variantGroup:'iphone12', brand:'iPhone', name:'iPhone 12', spec:'64 Go', original:600, price:329, type:'phone', colors:[
    {name:'Violet', photo:'images/iphone12-violet.jpg', views:['images/iphone12-violet.jpg','images/iphone12-violet-face.jpg','images/iphone12-violet-photo.jpg']},
    {name:'Noir', photo:'images/iphone12-noir.jpg', views:['images/iphone12-noir.jpg','images/iphone12-noir-face.jpg','images/iphone12-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone12-blanc.jpg', views:['images/iphone12-blanc.jpg','images/iphone12-blanc-face.jpg','images/iphone12-blanc-photo.jpg']},
    {name:'Bleu', photo:'images/iphone12-bleu.jpg', views:['images/iphone12-bleu.jpg','images/iphone12-bleu-face.jpg','images/iphone12-bleu-photo.jpg']},
    {name:'Rouge', photo:'images/iphone12-rouge.jpg', views:['images/iphone12-rouge.jpg','images/iphone12-rouge-face.jpg','images/iphone12-rouge-photo.jpg']},
    {name:'Vert', photo:'images/iphone12-vert.jpg', hex:'#B9CBAE', views:['images/iphone12-vert.jpg','images/iphone12-vert-face.jpg','images/iphone12-vert-photo.jpg']}
  ]},
  {id:34, variantGroup:'iphone12', brand:'iPhone', name:'iPhone 12', spec:'128 Go', original:660, price:369, type:'phone', colors:[
    {name:'Violet', photo:'images/iphone12-violet.jpg', views:['images/iphone12-violet.jpg','images/iphone12-violet-face.jpg','images/iphone12-violet-photo.jpg']},
    {name:'Noir', photo:'images/iphone12-noir.jpg', views:['images/iphone12-noir.jpg','images/iphone12-noir-face.jpg','images/iphone12-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone12-blanc.jpg', views:['images/iphone12-blanc.jpg','images/iphone12-blanc-face.jpg','images/iphone12-blanc-photo.jpg']},
    {name:'Bleu', photo:'images/iphone12-bleu.jpg', views:['images/iphone12-bleu.jpg','images/iphone12-bleu-face.jpg','images/iphone12-bleu-photo.jpg']},
    {name:'Rouge', photo:'images/iphone12-rouge.jpg', views:['images/iphone12-rouge.jpg','images/iphone12-rouge-face.jpg','images/iphone12-rouge-photo.jpg']},
    {name:'Vert', photo:'images/iphone12-vert.jpg', hex:'#B9CBAE', views:['images/iphone12-vert.jpg','images/iphone12-vert-face.jpg','images/iphone12-vert-photo.jpg']}
  ]},
  {id:35, variantGroup:'iphone12', brand:'iPhone', name:'iPhone 12', spec:'256 Go', original:760, price:429, type:'phone', colors:[
    {name:'Violet', photo:'images/iphone12-violet.jpg', views:['images/iphone12-violet.jpg','images/iphone12-violet-face.jpg','images/iphone12-violet-photo.jpg']},
    {name:'Noir', photo:'images/iphone12-noir.jpg', views:['images/iphone12-noir.jpg','images/iphone12-noir-face.jpg','images/iphone12-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone12-blanc.jpg', views:['images/iphone12-blanc.jpg','images/iphone12-blanc-face.jpg','images/iphone12-blanc-photo.jpg']},
    {name:'Bleu', photo:'images/iphone12-bleu.jpg', views:['images/iphone12-bleu.jpg','images/iphone12-bleu-face.jpg','images/iphone12-bleu-photo.jpg']},
    {name:'Rouge', photo:'images/iphone12-rouge.jpg', views:['images/iphone12-rouge.jpg','images/iphone12-rouge-face.jpg','images/iphone12-rouge-photo.jpg']},
    {name:'Vert', photo:'images/iphone12-vert.jpg', hex:'#B9CBAE', views:['images/iphone12-vert.jpg','images/iphone12-vert-face.jpg','images/iphone12-vert-photo.jpg']}
  ]},
  {id:47, variantGroup:'iphone12pro', brand:'iPhone', name:'iPhone 12 Pro', spec:'128 Go', original:1039, price:469, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12pro-bleu.jpg', views:['images/iphone12pro-bleu.jpg','images/iphone12pro-bleu-face.jpg','images/iphone12pro-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12pro-graphite.jpg', views:['images/iphone12pro-graphite.jpg','images/iphone12pro-graphite-face.jpg','images/iphone12pro-graphite-photo.jpg']},
    {name:'Argent', photo:'images/iphone12pro-argent.jpg', views:['images/iphone12pro-argent.jpg','images/iphone12pro-argent-face.jpg','images/iphone12pro-argent-photo.jpg']},
    {name:'Or', photo:'images/iphone12pro-or.jpg', views:['images/iphone12pro-or.jpg','images/iphone12pro-or-face.jpg','images/iphone12pro-or-photo.jpg']}
  ]},
  {id:48, variantGroup:'iphone12pro', brand:'iPhone', name:'iPhone 12 Pro', spec:'256 Go', original:1139, price:529, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12pro-bleu.jpg', views:['images/iphone12pro-bleu.jpg','images/iphone12pro-bleu-face.jpg','images/iphone12pro-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12pro-graphite.jpg', views:['images/iphone12pro-graphite.jpg','images/iphone12pro-graphite-face.jpg','images/iphone12pro-graphite-photo.jpg']},
    {name:'Argent', photo:'images/iphone12pro-argent.jpg', views:['images/iphone12pro-argent.jpg','images/iphone12pro-argent-face.jpg','images/iphone12pro-argent-photo.jpg']},
    {name:'Or', photo:'images/iphone12pro-or.jpg', views:['images/iphone12pro-or.jpg','images/iphone12pro-or-face.jpg','images/iphone12pro-or-photo.jpg']}
  ]},
  {id:49, variantGroup:'iphone12pro', brand:'iPhone', name:'iPhone 12 Pro', spec:'512 Go', original:1339, price:629, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12pro-bleu.jpg', views:['images/iphone12pro-bleu.jpg','images/iphone12pro-bleu-face.jpg','images/iphone12pro-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12pro-graphite.jpg', views:['images/iphone12pro-graphite.jpg','images/iphone12pro-graphite-face.jpg','images/iphone12pro-graphite-photo.jpg']},
    {name:'Argent', photo:'images/iphone12pro-argent.jpg', views:['images/iphone12pro-argent.jpg','images/iphone12pro-argent-face.jpg','images/iphone12pro-argent-photo.jpg']},
    {name:'Or', photo:'images/iphone12pro-or.jpg', views:['images/iphone12pro-or.jpg','images/iphone12pro-or-face.jpg','images/iphone12pro-or-photo.jpg']}
  ]},
  {id:50, variantGroup:'iphone12promax', brand:'iPhone', name:'iPhone 12 Pro Max', spec:'128 Go', original:1139, price:489, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12promax-bleu.jpg', views:['images/iphone12promax-bleu.jpg','images/iphone12promax-bleu-face.jpg','images/iphone12promax-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12promax-graphite.jpg', views:['images/iphone12promax-graphite.jpg','images/iphone12promax-graphite-face.jpg','images/iphone12promax-graphite-photo.jpg']},
    {name:'Or', photo:'images/iphone12promax-or.jpg', views:['images/iphone12promax-or.jpg','images/iphone12promax-or-face.jpg','images/iphone12promax-or-photo.jpg']}
  ]},
  {id:51, variantGroup:'iphone12promax', brand:'iPhone', name:'iPhone 12 Pro Max', spec:'256 Go', original:1239, price:549, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12promax-bleu.jpg', views:['images/iphone12promax-bleu.jpg','images/iphone12promax-bleu-face.jpg','images/iphone12promax-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12promax-graphite.jpg', views:['images/iphone12promax-graphite.jpg','images/iphone12promax-graphite-face.jpg','images/iphone12promax-graphite-photo.jpg']},
    {name:'Or', photo:'images/iphone12promax-or.jpg', views:['images/iphone12promax-or.jpg','images/iphone12promax-or-face.jpg','images/iphone12promax-or-photo.jpg']}
  ]},
  {id:52, variantGroup:'iphone12promax', brand:'iPhone', name:'iPhone 12 Pro Max', spec:'512 Go', original:1439, price:649, type:'phone', colors:[
    {name:'Bleu Pacifique', photo:'images/iphone12promax-bleu.jpg', views:['images/iphone12promax-bleu.jpg','images/iphone12promax-bleu-face.jpg','images/iphone12promax-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone12promax-graphite.jpg', views:['images/iphone12promax-graphite.jpg','images/iphone12promax-graphite-face.jpg','images/iphone12promax-graphite-photo.jpg']},
    {name:'Or', photo:'images/iphone12promax-or.jpg', views:['images/iphone12promax-or.jpg','images/iphone12promax-or-face.jpg','images/iphone12promax-or-photo.jpg']}
  ]},
  {id:2, variantGroup:'iphone13', brand:'iPhone', name:'iPhone 13', spec:'128 Go', original:699, price:419, type:'phone', colors:[
    {name:'Bleu', photo:'images/iphone13-bleu.jpg', views:['images/iphone13-bleu.jpg','images/iphone13-bleu-face.jpg','images/iphone13-bleu-photo.jpg']},
    {name:'Minuit', photo:'images/iphone13-minuit.jpg', views:['images/iphone13-minuit.jpg','images/iphone13-minuit-face.jpg','images/iphone13-minuit-photo.jpg']},
    {name:'Rose', photo:'images/iphone13-rose.jpg', views:['images/iphone13-rose.jpg','images/iphone13-rose-face.jpg','images/iphone13-rose-photo.jpg']},
    {name:'Rouge', photo:'images/iphone13-rouge.jpg', views:['images/iphone13-rouge.jpg','images/iphone13-rouge-face.jpg','images/iphone13-rouge-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone13-starlight.jpg', views:['images/iphone13-starlight.jpg','images/iphone13-starlight-face.jpg','images/iphone13-starlight-photo.jpg']},
    {name:'Vert', photo:'images/iphone13-vert.jpg', views:['images/iphone13-vert.jpg','images/iphone13-vert-face.jpg','images/iphone13-vert-photo.jpg']}
  ]},
  {id:15, variantGroup:'iphone13', brand:'iPhone', name:'iPhone 13', spec:'256 Go', original:799, price:479, type:'phone', colors:[
    {name:'Bleu', photo:'images/iphone13-bleu.jpg', views:['images/iphone13-bleu.jpg','images/iphone13-bleu-face.jpg','images/iphone13-bleu-photo.jpg']},
    {name:'Minuit', photo:'images/iphone13-minuit.jpg', views:['images/iphone13-minuit.jpg','images/iphone13-minuit-face.jpg','images/iphone13-minuit-photo.jpg']},
    {name:'Rose', photo:'images/iphone13-rose.jpg', views:['images/iphone13-rose.jpg','images/iphone13-rose-face.jpg','images/iphone13-rose-photo.jpg']},
    {name:'Rouge', photo:'images/iphone13-rouge.jpg', views:['images/iphone13-rouge.jpg','images/iphone13-rouge-face.jpg','images/iphone13-rouge-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone13-starlight.jpg', views:['images/iphone13-starlight.jpg','images/iphone13-starlight-face.jpg','images/iphone13-starlight-photo.jpg']},
    {name:'Vert', photo:'images/iphone13-vert.jpg', views:['images/iphone13-vert.jpg','images/iphone13-vert-face.jpg','images/iphone13-vert-photo.jpg']}
  ]},
  {id:16, variantGroup:'iphone13', brand:'iPhone', name:'iPhone 13', spec:'512 Go', original:999, price:599, type:'phone', colors:[
    {name:'Bleu', photo:'images/iphone13-bleu.jpg', views:['images/iphone13-bleu.jpg','images/iphone13-bleu-face.jpg','images/iphone13-bleu-photo.jpg']},
    {name:'Minuit', photo:'images/iphone13-minuit.jpg', views:['images/iphone13-minuit.jpg','images/iphone13-minuit-face.jpg','images/iphone13-minuit-photo.jpg']},
    {name:'Rose', photo:'images/iphone13-rose.jpg', views:['images/iphone13-rose.jpg','images/iphone13-rose-face.jpg','images/iphone13-rose-photo.jpg']},
    {name:'Rouge', photo:'images/iphone13-rouge.jpg', views:['images/iphone13-rouge.jpg','images/iphone13-rouge-face.jpg','images/iphone13-rouge-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone13-starlight.jpg', views:['images/iphone13-starlight.jpg','images/iphone13-starlight-face.jpg','images/iphone13-starlight-photo.jpg']},
    {name:'Vert', photo:'images/iphone13-vert.jpg', views:['images/iphone13-vert.jpg','images/iphone13-vert-face.jpg','images/iphone13-vert-photo.jpg']}
  ]},
  {id:17, variantGroup:'iphone13promax', brand:'iPhone', name:'iPhone 13 Pro Max', spec:'128 Go', original:849, price:509, type:'phone', colors:[
    {name:'Bleu Sierra', photo:'images/iphone13promax-bleu.jpg', views:['images/iphone13promax-bleu.jpg','images/iphone13promax-bleu-face.jpg','images/iphone13promax-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone13promax-graphite.jpg', views:['images/iphone13promax-graphite.jpg','images/iphone13promax-graphite-face.jpg','images/iphone13promax-graphite-photo.jpg']},
    {name:'Or', photo:'images/iphone13promax-or.jpg', views:['images/iphone13promax-or.jpg','images/iphone13promax-or-face.jpg','images/iphone13promax-or-photo.jpg']},
    {name:'Argent', photo:'images/iphone13promax-argent.jpg', views:['images/iphone13promax-argent.jpg','images/iphone13promax-argent-face.jpg','images/iphone13promax-argent-photo.jpg']},
    {name:'Vert alpin', photo:'images/iphone13promax-vert.jpg', views:['images/iphone13promax-vert.jpg','images/iphone13promax-vert-face.jpg','images/iphone13promax-vert-photo.jpg']}
  ]},
  {id:18, variantGroup:'iphone13promax', brand:'iPhone', name:'iPhone 13 Pro Max', spec:'256 Go', original:949, price:569, type:'phone', colors:[
    {name:'Bleu Sierra', photo:'images/iphone13promax-bleu.jpg', views:['images/iphone13promax-bleu.jpg','images/iphone13promax-bleu-face.jpg','images/iphone13promax-bleu-photo.jpg']},
    {name:'Graphite', photo:'images/iphone13promax-graphite.jpg', views:['images/iphone13promax-graphite.jpg','images/iphone13promax-graphite-face.jpg','images/iphone13promax-graphite-photo.jpg']},
    {name:'Or', photo:'images/iphone13promax-or.jpg', views:['images/iphone13promax-or.jpg','images/iphone13promax-or-face.jpg','images/iphone13promax-or-photo.jpg']},
    {name:'Argent', photo:'images/iphone13promax-argent.jpg', views:['images/iphone13promax-argent.jpg','images/iphone13promax-argent-face.jpg','images/iphone13promax-argent-photo.jpg']},
    {name:'Vert alpin', photo:'images/iphone13promax-vert.jpg', views:['images/iphone13promax-vert.jpg','images/iphone13promax-vert-face.jpg','images/iphone13promax-vert-photo.jpg']}
  ]},
  {id:3, variantGroup:'iphone14', brand:'iPhone', name:'iPhone 14', spec:'128 Go', original:849, price:519, type:'phone', colors:[
    {name:'Rouge', photo:'images/iphone14-rouge.jpg', views:['images/iphone14-rouge.jpg','images/iphone14-rouge-face.jpg','images/iphone14-rouge-photo.jpg']},
    {name:'Violet', photo:'images/iphone14-violet.jpg', views:['images/iphone14-violet.jpg','images/iphone14-violet-face.jpg','images/iphone14-violet-photo.jpg']},
    {name:'Minuit', photo:'images/iphone14-minuit.jpg', views:['images/iphone14-minuit.jpg','images/iphone14-minuit-face.jpg','images/iphone14-minuit-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone14-starlight.jpg', views:['images/iphone14-starlight.jpg','images/iphone14-starlight-face.jpg','images/iphone14-starlight-photo.jpg']},
    {name:'Bleu', photo:'images/iphone14-bleu.jpg', views:['images/iphone14-bleu.jpg','images/iphone14-bleu-face.jpg','images/iphone14-bleu-photo.jpg']},
    {name:'Jaune', photo:'images/iphone14-jaune.jpg', views:['images/iphone14-jaune.jpg','images/iphone14-jaune-face.jpg','images/iphone14-jaune-photo.jpg']}
  ]},
  {id:36, variantGroup:'iphone14', brand:'iPhone', name:'iPhone 14', spec:'256 Go', original:949, price:579, type:'phone', colors:[
    {name:'Rouge', photo:'images/iphone14-rouge.jpg', views:['images/iphone14-rouge.jpg','images/iphone14-rouge-face.jpg','images/iphone14-rouge-photo.jpg']},
    {name:'Violet', photo:'images/iphone14-violet.jpg', views:['images/iphone14-violet.jpg','images/iphone14-violet-face.jpg','images/iphone14-violet-photo.jpg']},
    {name:'Minuit', photo:'images/iphone14-minuit.jpg', views:['images/iphone14-minuit.jpg','images/iphone14-minuit-face.jpg','images/iphone14-minuit-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone14-starlight.jpg', views:['images/iphone14-starlight.jpg','images/iphone14-starlight-face.jpg','images/iphone14-starlight-photo.jpg']},
    {name:'Bleu', photo:'images/iphone14-bleu.jpg', views:['images/iphone14-bleu.jpg','images/iphone14-bleu-face.jpg','images/iphone14-bleu-photo.jpg']},
    {name:'Jaune', photo:'images/iphone14-jaune.jpg', views:['images/iphone14-jaune.jpg','images/iphone14-jaune-face.jpg','images/iphone14-jaune-photo.jpg']}
  ]},
  {id:37, variantGroup:'iphone14', brand:'iPhone', name:'iPhone 14', spec:'512 Go', original:1149, price:699, type:'phone', colors:[
    {name:'Rouge', photo:'images/iphone14-rouge.jpg', views:['images/iphone14-rouge.jpg','images/iphone14-rouge-face.jpg','images/iphone14-rouge-photo.jpg']},
    {name:'Violet', photo:'images/iphone14-violet.jpg', views:['images/iphone14-violet.jpg','images/iphone14-violet-face.jpg','images/iphone14-violet-photo.jpg']},
    {name:'Minuit', photo:'images/iphone14-minuit.jpg', views:['images/iphone14-minuit.jpg','images/iphone14-minuit-face.jpg','images/iphone14-minuit-photo.jpg']},
    {name:'Lumière stellaire', photo:'images/iphone14-starlight.jpg', views:['images/iphone14-starlight.jpg','images/iphone14-starlight-face.jpg','images/iphone14-starlight-photo.jpg']},
    {name:'Bleu', photo:'images/iphone14-bleu.jpg', views:['images/iphone14-bleu.jpg','images/iphone14-bleu-face.jpg','images/iphone14-bleu-photo.jpg']},
    {name:'Jaune', photo:'images/iphone14-jaune.jpg', views:['images/iphone14-jaune.jpg','images/iphone14-jaune-face.jpg','images/iphone14-jaune-photo.jpg']}
  ]},
  {id:53, variantGroup:'iphone14pro', brand:'iPhone', name:'iPhone 14 Pro', spec:'128 Go', original:969, price:629, type:'phone', colors:[
    {name:'Or', photo:'images/iphone14pro-or.jpg', views:['images/iphone14pro-or.jpg','images/iphone14pro-or-face.jpg','images/iphone14pro-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14pro-noir.jpg', views:['images/iphone14pro-noir.jpg','images/iphone14pro-noir-face.jpg','images/iphone14pro-noir-arriere.jpg']}
  ]},
  {id:54, variantGroup:'iphone14pro', brand:'iPhone', name:'iPhone 14 Pro', spec:'256 Go', original:1099, price:719, type:'phone', colors:[
    {name:'Or', photo:'images/iphone14pro-or.jpg', views:['images/iphone14pro-or.jpg','images/iphone14pro-or-face.jpg','images/iphone14pro-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14pro-noir.jpg', views:['images/iphone14pro-noir.jpg','images/iphone14pro-noir-face.jpg','images/iphone14pro-noir-arriere.jpg']}
  ]},
  {id:55, variantGroup:'iphone14pro', brand:'iPhone', name:'iPhone 14 Pro', spec:'512 Go', original:1329, price:869, type:'phone', colors:[
    {name:'Or', photo:'images/iphone14pro-or.jpg', views:['images/iphone14pro-or.jpg','images/iphone14pro-or-face.jpg','images/iphone14pro-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14pro-noir.jpg', views:['images/iphone14pro-noir.jpg','images/iphone14pro-noir-face.jpg','images/iphone14pro-noir-arriere.jpg']}
  ]},
  {id:56, variantGroup:'iphone14pro', brand:'iPhone', name:'iPhone 14 Pro', spec:'1 To', original:1559, price:1029, type:'phone', colors:[
    {name:'Or', photo:'images/iphone14pro-or.jpg', views:['images/iphone14pro-or.jpg','images/iphone14pro-or-face.jpg','images/iphone14pro-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14pro-noir.jpg', views:['images/iphone14pro-noir.jpg','images/iphone14pro-noir-face.jpg','images/iphone14pro-noir-arriere.jpg']}
  ]},
  {id:57, variantGroup:'iphone14promax', brand:'iPhone', name:'iPhone 14 Pro Max', spec:'128 Go', original:1239, price:809, type:'phone', colors:[
    {name:'Violet intense', photo:'images/iphone14promax-violet.jpg', views:['images/iphone14promax-violet.jpg','images/iphone14promax-violet-face.jpg','images/iphone14promax-violet-arriere.jpg']},
    {name:'Or', photo:'images/iphone14promax-or.jpg', views:['images/iphone14promax-or.jpg','images/iphone14promax-or-face.jpg','images/iphone14promax-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14promax-noir.jpg', views:['images/iphone14promax-noir.jpg','images/iphone14promax-noir-face.jpg','images/iphone14promax-noir-arriere.jpg']}
  ]},
  {id:58, variantGroup:'iphone14promax', brand:'iPhone', name:'iPhone 14 Pro Max', spec:'256 Go', original:1369, price:899, type:'phone', colors:[
    {name:'Violet intense', photo:'images/iphone14promax-violet.jpg', views:['images/iphone14promax-violet.jpg','images/iphone14promax-violet-face.jpg','images/iphone14promax-violet-arriere.jpg']},
    {name:'Or', photo:'images/iphone14promax-or.jpg', views:['images/iphone14promax-or.jpg','images/iphone14promax-or-face.jpg','images/iphone14promax-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14promax-noir.jpg', views:['images/iphone14promax-noir.jpg','images/iphone14promax-noir-face.jpg','images/iphone14promax-noir-arriere.jpg']}
  ]},
  {id:59, variantGroup:'iphone14promax', brand:'iPhone', name:'iPhone 14 Pro Max', spec:'512 Go', original:1599, price:1049, type:'phone', colors:[
    {name:'Violet intense', photo:'images/iphone14promax-violet.jpg', views:['images/iphone14promax-violet.jpg','images/iphone14promax-violet-face.jpg','images/iphone14promax-violet-arriere.jpg']},
    {name:'Or', photo:'images/iphone14promax-or.jpg', views:['images/iphone14promax-or.jpg','images/iphone14promax-or-face.jpg','images/iphone14promax-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14promax-noir.jpg', views:['images/iphone14promax-noir.jpg','images/iphone14promax-noir-face.jpg','images/iphone14promax-noir-arriere.jpg']}
  ]},
  {id:60, variantGroup:'iphone14promax', brand:'iPhone', name:'iPhone 14 Pro Max', spec:'1 To', original:1829, price:1209, type:'phone', colors:[
    {name:'Violet intense', photo:'images/iphone14promax-violet.jpg', views:['images/iphone14promax-violet.jpg','images/iphone14promax-violet-face.jpg','images/iphone14promax-violet-arriere.jpg']},
    {name:'Or', photo:'images/iphone14promax-or.jpg', views:['images/iphone14promax-or.jpg','images/iphone14promax-or-face.jpg','images/iphone14promax-or-arriere.jpg']},
    {name:'Noir sidéral', photo:'images/iphone14promax-noir.jpg', views:['images/iphone14promax-noir.jpg','images/iphone14promax-noir-face.jpg','images/iphone14promax-noir-arriere.jpg']}
  ]},
  {id:45, variantGroup:'iphone15', brand:'iPhone', name:'iPhone 15', spec:'128 Go', original:1020, price:699, type:'phone', colors:[
    {name:'Rose', photo:'images/iphone15-rose.jpg', views:['images/iphone15-rose.jpg','images/iphone15-rose-face.jpg','images/iphone15-rose-photo.jpg']},
    {name:'Noir', photo:'images/iphone15-noir.jpg', views:['images/iphone15-noir.jpg','images/iphone15-noir-face.jpg','images/iphone15-noir-photo.jpg']},
    {name:'Bleu', photo:'images/iphone15-bleu.jpg', views:['images/iphone15-bleu.jpg','images/iphone15-bleu-face.jpg','images/iphone15-bleu-photo.jpg']},
    {name:'Vert', photo:'images/iphone15-vert.jpg', views:['images/iphone15-vert.jpg','images/iphone15-vert-face.jpg','images/iphone15-vert-photo.jpg']},
    {name:'Jaune', photo:'images/iphone15-jaune.jpg', views:['images/iphone15-jaune.jpg','images/iphone15-jaune-face.jpg','images/iphone15-jaune-photo.jpg']}
  ]},
  {id:4, variantGroup:'iphone15', brand:'iPhone', name:'iPhone 15', spec:'256 Go', original:1150, price:799, type:'phone', colors:[
    {name:'Rose', photo:'images/iphone15-rose.jpg', views:['images/iphone15-rose.jpg','images/iphone15-rose-face.jpg','images/iphone15-rose-photo.jpg']},
    {name:'Noir', photo:'images/iphone15-noir.jpg', views:['images/iphone15-noir.jpg','images/iphone15-noir-face.jpg','images/iphone15-noir-photo.jpg']},
    {name:'Bleu', photo:'images/iphone15-bleu.jpg', views:['images/iphone15-bleu.jpg','images/iphone15-bleu-face.jpg','images/iphone15-bleu-photo.jpg']},
    {name:'Vert', photo:'images/iphone15-vert.jpg', views:['images/iphone15-vert.jpg','images/iphone15-vert-face.jpg','images/iphone15-vert-photo.jpg']},
    {name:'Jaune', photo:'images/iphone15-jaune.jpg', views:['images/iphone15-jaune.jpg','images/iphone15-jaune-face.jpg','images/iphone15-jaune-photo.jpg']}
  ]},
  {id:46, variantGroup:'iphone15', brand:'iPhone', name:'iPhone 15', spec:'512 Go', original:1350, price:929, type:'phone', colors:[
    {name:'Rose', photo:'images/iphone15-rose.jpg', views:['images/iphone15-rose.jpg','images/iphone15-rose-face.jpg','images/iphone15-rose-photo.jpg']},
    {name:'Noir', photo:'images/iphone15-noir.jpg', views:['images/iphone15-noir.jpg','images/iphone15-noir-face.jpg','images/iphone15-noir-photo.jpg']},
    {name:'Bleu', photo:'images/iphone15-bleu.jpg', views:['images/iphone15-bleu.jpg','images/iphone15-bleu-face.jpg','images/iphone15-bleu-photo.jpg']},
    {name:'Vert', photo:'images/iphone15-vert.jpg', views:['images/iphone15-vert.jpg','images/iphone15-vert-face.jpg','images/iphone15-vert-photo.jpg']},
    {name:'Jaune', photo:'images/iphone15-jaune.jpg', views:['images/iphone15-jaune.jpg','images/iphone15-jaune-face.jpg','images/iphone15-jaune-photo.jpg']}
  ]},
  {id:19, variantGroup:'iphone15pro', brand:'iPhone', name:'iPhone 15 Pro', spec:'128 Go', original:1150, price:749, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15pro-bleu.jpg', views:['images/iphone15pro-bleu.jpg','images/iphone15pro-bleu-face.jpg','images/iphone15pro-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15pro-noir.jpg', views:['images/iphone15pro-noir.jpg','images/iphone15pro-noir-face.jpg','images/iphone15pro-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15pro-naturel.jpg', views:['images/iphone15pro-naturel.jpg','images/iphone15pro-naturel-face.jpg','images/iphone15pro-naturel-photo.jpg']}
  ]},
  {id:20, variantGroup:'iphone15pro', brand:'iPhone', name:'iPhone 15 Pro', spec:'256 Go', original:1280, price:839, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15pro-bleu.jpg', views:['images/iphone15pro-bleu.jpg','images/iphone15pro-bleu-face.jpg','images/iphone15pro-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15pro-noir.jpg', views:['images/iphone15pro-noir.jpg','images/iphone15pro-noir-face.jpg','images/iphone15pro-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15pro-naturel.jpg', views:['images/iphone15pro-naturel.jpg','images/iphone15pro-naturel-face.jpg','images/iphone15pro-naturel-photo.jpg']}
  ]},
  {id:21, variantGroup:'iphone15pro', brand:'iPhone', name:'iPhone 15 Pro', spec:'512 Go', original:1510, price:989, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15pro-bleu.jpg', views:['images/iphone15pro-bleu.jpg','images/iphone15pro-bleu-face.jpg','images/iphone15pro-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15pro-noir.jpg', views:['images/iphone15pro-noir.jpg','images/iphone15pro-noir-face.jpg','images/iphone15pro-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15pro-naturel.jpg', views:['images/iphone15pro-naturel.jpg','images/iphone15pro-naturel-face.jpg','images/iphone15pro-naturel-photo.jpg']}
  ]},
  {id:22, variantGroup:'iphone15pro', brand:'iPhone', name:'iPhone 15 Pro', spec:'1 To', original:1740, price:1149, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15pro-bleu.jpg', views:['images/iphone15pro-bleu.jpg','images/iphone15pro-bleu-face.jpg','images/iphone15pro-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15pro-noir.jpg', views:['images/iphone15pro-noir.jpg','images/iphone15pro-noir-face.jpg','images/iphone15pro-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15pro-naturel.jpg', views:['images/iphone15pro-naturel.jpg','images/iphone15pro-naturel-face.jpg','images/iphone15pro-naturel-photo.jpg']}
  ]},
  {id:23, variantGroup:'iphone15promax', brand:'iPhone', name:'iPhone 15 Pro Max', spec:'256 Go', original:1259, price:859, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15promax-bleu.jpg', views:['images/iphone15promax-bleu.jpg','images/iphone15promax-bleu-face.jpg','images/iphone15promax-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15promax-noir.jpg', views:['images/iphone15promax-noir.jpg','images/iphone15promax-noir-face.jpg','images/iphone15promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15promax-naturel.jpg', views:['images/iphone15promax-naturel.jpg','images/iphone15promax-naturel-face.jpg','images/iphone15promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone15promax-blanc.jpg', views:['images/iphone15promax-blanc.jpg','images/iphone15promax-blanc-face.jpg','images/iphone15promax-blanc-photo.jpg']}
  ]},
  {id:24, variantGroup:'iphone15promax', brand:'iPhone', name:'iPhone 15 Pro Max', spec:'512 Go', original:1489, price:999, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15promax-bleu.jpg', views:['images/iphone15promax-bleu.jpg','images/iphone15promax-bleu-face.jpg','images/iphone15promax-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15promax-noir.jpg', views:['images/iphone15promax-noir.jpg','images/iphone15promax-noir-face.jpg','images/iphone15promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15promax-naturel.jpg', views:['images/iphone15promax-naturel.jpg','images/iphone15promax-naturel-face.jpg','images/iphone15promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone15promax-blanc.jpg', views:['images/iphone15promax-blanc.jpg','images/iphone15promax-blanc-face.jpg','images/iphone15promax-blanc-photo.jpg']}
  ]},
  {id:25, variantGroup:'iphone15promax', brand:'iPhone', name:'iPhone 15 Pro Max', spec:'1 To', original:1719, price:1179, type:'phone', colors:[
    {name:'Titane bleu', photo:'images/iphone15promax-bleu.jpg', views:['images/iphone15promax-bleu.jpg','images/iphone15promax-bleu-face.jpg','images/iphone15promax-bleu-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone15promax-noir.jpg', views:['images/iphone15promax-noir.jpg','images/iphone15promax-noir-face.jpg','images/iphone15promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone15promax-naturel.jpg', views:['images/iphone15promax-naturel.jpg','images/iphone15promax-naturel-face.jpg','images/iphone15promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone15promax-blanc.jpg', views:['images/iphone15promax-blanc.jpg','images/iphone15promax-blanc-face.jpg','images/iphone15promax-blanc-photo.jpg']}
  ]},
  {id:26, variantGroup:'iphone16', brand:'iPhone', name:'iPhone 16', spec:'128 Go', original:869, price:569, type:'phone', colors:[
    {name:'Outremer', photo:'images/iphone16-outremer.jpg', views:['images/iphone16-outremer.jpg','images/iphone16-outremer-face.jpg','images/iphone16-outremer-photo.jpg']},
    {name:'Noir', photo:'images/iphone16-noir.jpg', views:['images/iphone16-noir.jpg','images/iphone16-noir-face.jpg','images/iphone16-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone16-blanc.jpg', views:['images/iphone16-blanc.jpg','images/iphone16-blanc-face.jpg','images/iphone16-blanc-photo.jpg']},
    {name:'Sarcelle', photo:'images/iphone16-sarcelle.jpg', views:['images/iphone16-sarcelle.jpg','images/iphone16-sarcelle-face.jpg','images/iphone16-sarcelle-photo.jpg']},
    {name:'Rose', photo:'images/iphone16-rose.jpg', views:['images/iphone16-rose.jpg','images/iphone16-rose-face.jpg','images/iphone16-rose-photo.jpg']}
  ]},
  {id:27, variantGroup:'iphone16', brand:'iPhone', name:'iPhone 16', spec:'256 Go', original:999, price:649, type:'phone', colors:[
    {name:'Outremer', photo:'images/iphone16-outremer.jpg', views:['images/iphone16-outremer.jpg','images/iphone16-outremer-face.jpg','images/iphone16-outremer-photo.jpg']},
    {name:'Noir', photo:'images/iphone16-noir.jpg', views:['images/iphone16-noir.jpg','images/iphone16-noir-face.jpg','images/iphone16-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone16-blanc.jpg', views:['images/iphone16-blanc.jpg','images/iphone16-blanc-face.jpg','images/iphone16-blanc-photo.jpg']},
    {name:'Sarcelle', photo:'images/iphone16-sarcelle.jpg', views:['images/iphone16-sarcelle.jpg','images/iphone16-sarcelle-face.jpg','images/iphone16-sarcelle-photo.jpg']},
    {name:'Rose', photo:'images/iphone16-rose.jpg', views:['images/iphone16-rose.jpg','images/iphone16-rose-face.jpg','images/iphone16-rose-photo.jpg']}
  ]},
  {id:28, variantGroup:'iphone16', brand:'iPhone', name:'iPhone 16', spec:'512 Go', original:1229, price:799, type:'phone', colors:[
    {name:'Outremer', photo:'images/iphone16-outremer.jpg', views:['images/iphone16-outremer.jpg','images/iphone16-outremer-face.jpg','images/iphone16-outremer-photo.jpg']},
    {name:'Noir', photo:'images/iphone16-noir.jpg', views:['images/iphone16-noir.jpg','images/iphone16-noir-face.jpg','images/iphone16-noir-photo.jpg']},
    {name:'Blanc', photo:'images/iphone16-blanc.jpg', views:['images/iphone16-blanc.jpg','images/iphone16-blanc-face.jpg','images/iphone16-blanc-photo.jpg']},
    {name:'Sarcelle', photo:'images/iphone16-sarcelle.jpg', views:['images/iphone16-sarcelle.jpg','images/iphone16-sarcelle-face.jpg','images/iphone16-sarcelle-photo.jpg']},
    {name:'Rose', photo:'images/iphone16-rose.jpg', views:['images/iphone16-rose.jpg','images/iphone16-rose-face.jpg','images/iphone16-rose-photo.jpg']}
  ]},
  {id:29, variantGroup:'iphone16promax', brand:'iPhone', name:'iPhone 16 Pro Max', spec:'256 Go', original:1419, price:929, type:'phone', colors:[
    {name:'Titane sable', photo:'images/iphone16promax-sable.jpg', views:['images/iphone16promax-sable.jpg','images/iphone16promax-sable-face.jpg','images/iphone16promax-sable-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone16promax-noir.jpg', views:['images/iphone16promax-noir.jpg','images/iphone16promax-noir-face.jpg','images/iphone16promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone16promax-naturel.jpg', views:['images/iphone16promax-naturel.jpg','images/iphone16promax-naturel-face.jpg','images/iphone16promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone16promax-blanc.jpg', views:['images/iphone16promax-blanc.jpg','images/iphone16promax-blanc-face.jpg','images/iphone16promax-blanc-photo.jpg']}
  ]},
  {id:30, variantGroup:'iphone16promax', brand:'iPhone', name:'iPhone 16 Pro Max', spec:'512 Go', original:1649, price:1069, type:'phone', colors:[
    {name:'Titane sable', photo:'images/iphone16promax-sable.jpg', views:['images/iphone16promax-sable.jpg','images/iphone16promax-sable-face.jpg','images/iphone16promax-sable-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone16promax-noir.jpg', views:['images/iphone16promax-noir.jpg','images/iphone16promax-noir-face.jpg','images/iphone16promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone16promax-naturel.jpg', views:['images/iphone16promax-naturel.jpg','images/iphone16promax-naturel-face.jpg','images/iphone16promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone16promax-blanc.jpg', views:['images/iphone16promax-blanc.jpg','images/iphone16promax-blanc-face.jpg','images/iphone16promax-blanc-photo.jpg']}
  ]},
  {id:31, variantGroup:'iphone16promax', brand:'iPhone', name:'iPhone 16 Pro Max', spec:'1 To', original:1879, price:1219, type:'phone', colors:[
    {name:'Titane sable', photo:'images/iphone16promax-sable.jpg', views:['images/iphone16promax-sable.jpg','images/iphone16promax-sable-face.jpg','images/iphone16promax-sable-photo.jpg']},
    {name:'Titane noir', photo:'images/iphone16promax-noir.jpg', views:['images/iphone16promax-noir.jpg','images/iphone16promax-noir-face.jpg','images/iphone16promax-noir-photo.jpg']},
    {name:'Titane naturel', photo:'images/iphone16promax-naturel.jpg', views:['images/iphone16promax-naturel.jpg','images/iphone16promax-naturel-face.jpg','images/iphone16promax-naturel-photo.jpg']},
    {name:'Titane blanc', photo:'images/iphone16promax-blanc.jpg', views:['images/iphone16promax-blanc.jpg','images/iphone16promax-blanc-face.jpg','images/iphone16promax-blanc-photo.jpg']}
  ]},
  {id:32, variantGroup:'iphone17', brand:'iPhone', name:'iPhone 17', spec:'256 Go', original:969, price:669, type:'phone', colors:[
    {name:'Sauge', photo:'images/iphone17-sauge.jpg', views:['images/iphone17-sauge.jpg','images/iphone17-sauge-face.jpg','images/iphone17-sauge-photo.jpg']},
    {name:'Lavande', photo:'images/iphone17-lavande.jpg', views:['images/iphone17-lavande.jpg','images/iphone17-lavande-face.jpg','images/iphone17-lavande-photo.jpg']},
    {name:'Brume', photo:'images/iphone17-brume.jpg', views:['images/iphone17-brume.jpg','images/iphone17-brume-face.jpg','images/iphone17-brume-photo.jpg']},
    {name:'Blanc', photo:'images/iphone17-blanc.jpg', views:['images/iphone17-blanc.jpg','images/iphone17-blanc-face.jpg','images/iphone17-blanc-photo.jpg']},
    {name:'Noir', photo:'images/iphone17-noir.jpg', views:['images/iphone17-noir.jpg','images/iphone17-noir-face.jpg','images/iphone17-noir-photo.jpg']}
  ]},
  {id:33, variantGroup:'iphone17', brand:'iPhone', name:'iPhone 17', spec:'512 Go', original:1199, price:849, type:'phone', colors:[
    {name:'Sauge', photo:'images/iphone17-sauge.jpg', views:['images/iphone17-sauge.jpg','images/iphone17-sauge-face.jpg','images/iphone17-sauge-photo.jpg']},
    {name:'Lavande', photo:'images/iphone17-lavande.jpg', views:['images/iphone17-lavande.jpg','images/iphone17-lavande-face.jpg','images/iphone17-lavande-photo.jpg']},
    {name:'Brume', photo:'images/iphone17-brume.jpg', views:['images/iphone17-brume.jpg','images/iphone17-brume-face.jpg','images/iphone17-brume-photo.jpg']},
    {name:'Blanc', photo:'images/iphone17-blanc.jpg', views:['images/iphone17-blanc.jpg','images/iphone17-blanc-face.jpg','images/iphone17-blanc-photo.jpg']},
    {name:'Noir', photo:'images/iphone17-noir.jpg', views:['images/iphone17-noir.jpg','images/iphone17-noir-face.jpg','images/iphone17-noir-photo.jpg']}
  ]},
  {id:38, variantGroup:'iphone17pro', brand:'iPhone', name:'iPhone 17 Pro', spec:'256 Go', original:1329, price:869, type:'phone', colors:[
    {name:'Bleu intense', photo:'images/iphone17pro-bleu.jpg', views:['images/iphone17pro-bleu.jpg','images/iphone17pro-bleu-face.jpg','images/iphone17pro-bleu-cote.jpg']},
    {name:'Orange cosmique', photo:'images/iphone17pro-orange.jpg', views:['images/iphone17pro-orange.jpg','images/iphone17pro-orange-cote.jpg']},
    {name:'Argent', photo:'images/iphone17pro-argent.jpg', views:['images/iphone17pro-argent.jpg','images/iphone17pro-argent-cote.jpg']}
  ]},
  {id:39, variantGroup:'iphone17pro', brand:'iPhone', name:'iPhone 17 Pro', spec:'512 Go', original:1559, price:1019, type:'phone', colors:[
    {name:'Bleu intense', photo:'images/iphone17pro-bleu.jpg', views:['images/iphone17pro-bleu.jpg','images/iphone17pro-bleu-face.jpg','images/iphone17pro-bleu-cote.jpg']},
    {name:'Orange cosmique', photo:'images/iphone17pro-orange.jpg', views:['images/iphone17pro-orange.jpg','images/iphone17pro-orange-cote.jpg']},
    {name:'Argent', photo:'images/iphone17pro-argent.jpg', views:['images/iphone17pro-argent.jpg','images/iphone17pro-argent-cote.jpg']}
  ]},
  {id:40, variantGroup:'iphone17pro', brand:'iPhone', name:'iPhone 17 Pro', spec:'1 To', original:1789, price:1179, type:'phone', colors:[
    {name:'Bleu intense', photo:'images/iphone17pro-bleu.jpg', views:['images/iphone17pro-bleu.jpg','images/iphone17pro-bleu-face.jpg','images/iphone17pro-bleu-cote.jpg']},
    {name:'Orange cosmique', photo:'images/iphone17pro-orange.jpg', views:['images/iphone17pro-orange.jpg','images/iphone17pro-orange-cote.jpg']},
    {name:'Argent', photo:'images/iphone17pro-argent.jpg', views:['images/iphone17pro-argent.jpg','images/iphone17pro-argent-cote.jpg']}
  ]},
  {id:41, variantGroup:'iphone17promax', brand:'iPhone', name:'iPhone 17 Pro Max', spec:'256 Go', original:1479, price:999, type:'phone', colors:[
    {name:'Orange cosmique', photo:'images/iphone17promax-orange.jpg', views:['images/iphone17promax-orange.jpg','images/iphone17promax-orange-face.jpg','images/iphone17promax-orange-photo.jpg']},
    {name:'Bleu intense', photo:'images/iphone17promax-bleu.jpg', views:['images/iphone17promax-bleu.jpg','images/iphone17promax-bleu-face.jpg','images/iphone17promax-bleu-photo.jpg']},
    {name:'Argent', photo:'images/iphone17promax-argent.jpg', views:['images/iphone17promax-argent.jpg','images/iphone17promax-argent-face.jpg','images/iphone17promax-argent-photo.jpg']}
  ]},
  {id:42, variantGroup:'iphone17promax', brand:'iPhone', name:'iPhone 17 Pro Max', spec:'512 Go', original:1709, price:1149, type:'phone', colors:[
    {name:'Orange cosmique', photo:'images/iphone17promax-orange.jpg', views:['images/iphone17promax-orange.jpg','images/iphone17promax-orange-face.jpg','images/iphone17promax-orange-photo.jpg']},
    {name:'Bleu intense', photo:'images/iphone17promax-bleu.jpg', views:['images/iphone17promax-bleu.jpg','images/iphone17promax-bleu-face.jpg','images/iphone17promax-bleu-photo.jpg']},
    {name:'Argent', photo:'images/iphone17promax-argent.jpg', views:['images/iphone17promax-argent.jpg','images/iphone17promax-argent-face.jpg','images/iphone17promax-argent-photo.jpg']}
  ]},
  {id:43, variantGroup:'iphone17promax', brand:'iPhone', name:'iPhone 17 Pro Max', spec:'1 To', original:1939, price:1299, type:'phone', colors:[
    {name:'Orange cosmique', photo:'images/iphone17promax-orange.jpg', views:['images/iphone17promax-orange.jpg','images/iphone17promax-orange-face.jpg','images/iphone17promax-orange-photo.jpg']},
    {name:'Bleu intense', photo:'images/iphone17promax-bleu.jpg', views:['images/iphone17promax-bleu.jpg','images/iphone17promax-bleu-face.jpg','images/iphone17promax-bleu-photo.jpg']},
    {name:'Argent', photo:'images/iphone17promax-argent.jpg', views:['images/iphone17promax-argent.jpg','images/iphone17promax-argent-face.jpg','images/iphone17promax-argent-photo.jpg']}
  ]},
  {id:44, variantGroup:'iphone17promax', brand:'iPhone', name:'iPhone 17 Pro Max', spec:'2 To', original:2399, price:1599, type:'phone', colors:[
    {name:'Orange cosmique', photo:'images/iphone17promax-orange.jpg', views:['images/iphone17promax-orange.jpg','images/iphone17promax-orange-face.jpg','images/iphone17promax-orange-photo.jpg']},
    {name:'Bleu intense', photo:'images/iphone17promax-bleu.jpg', views:['images/iphone17promax-bleu.jpg','images/iphone17promax-bleu-face.jpg','images/iphone17promax-bleu-photo.jpg']},
    {name:'Argent', photo:'images/iphone17promax-argent.jpg', views:['images/iphone17promax-argent.jpg','images/iphone17promax-argent-face.jpg','images/iphone17promax-argent-photo.jpg']}
  ]},
  {id:61, variantGroup:'galaxya56', brand:'Samsung', name:'Galaxy A56', spec:'128 Go', original:479, price:299, type:'phone', colors:[
    {name:'Vert', photo:'images/galaxya56-vert.jpg', views:['images/galaxya56-vert.jpg','images/galaxya56-vert-face.jpg']},
    {name:'Rose', photo:'images/galaxya56-rose.jpg', views:['images/galaxya56-rose.jpg','images/galaxya56-rose-derriere.jpg']},
    {name:'Gris', photo:'images/galaxya56-gris.jpg', views:['images/galaxya56-gris.jpg','images/galaxya56-gris-derriere.jpg']}
  ]},
  {id:62, variantGroup:'galaxya56', brand:'Samsung', name:'Galaxy A56', spec:'256 Go', original:539, price:329, type:'phone', colors:[
    {name:'Vert', photo:'images/galaxya56-vert.jpg', views:['images/galaxya56-vert.jpg','images/galaxya56-vert-face.jpg']},
    {name:'Rose', photo:'images/galaxya56-rose.jpg', views:['images/galaxya56-rose.jpg','images/galaxya56-rose-derriere.jpg']},
    {name:'Gris', photo:'images/galaxya56-gris.jpg', views:['images/galaxya56-gris.jpg','images/galaxya56-gris-derriere.jpg']}
  ]},
  {id:63, variantGroup:'galaxys25plus', brand:'Samsung', name:'Galaxy S25+', spec:'256 Go', original:1156, price:699, type:'phone', colors:[
    {name:'Argent', photo:'images/galaxys25plus-argent.jpg', views:['images/galaxys25plus-argent.jpg','images/galaxys25plus-argent-face.jpg','images/galaxys25plus-argent-photo.jpg']},
    {name:'Bleu', photo:'images/galaxys25plus-bleu.jpg', views:['images/galaxys25plus-bleu.jpg','images/galaxys25plus-bleu-face.jpg','images/galaxys25plus-bleu-photo.jpg']},
    {name:'Bleu foncé', photo:'images/galaxys25plus-bleufonce.jpg', views:['images/galaxys25plus-bleufonce.jpg','images/galaxys25plus-bleufonce-face.jpg','images/galaxys25plus-bleufonce-photo.jpg']},
    {name:'Vert', photo:'images/galaxys25plus-vert.jpg', views:['images/galaxys25plus-vert.jpg','images/galaxys25plus-vert-face.jpg','images/galaxys25plus-vert-photo.jpg']}
  ]},
  {id:69, variantGroup:'galaxys25plus', brand:'Samsung', name:'Galaxy S25+', spec:'512 Go', original:1286, price:769, type:'phone', colors:[
    {name:'Argent', photo:'images/galaxys25plus-argent.jpg', views:['images/galaxys25plus-argent.jpg','images/galaxys25plus-argent-face.jpg','images/galaxys25plus-argent-photo.jpg']},
    {name:'Bleu', photo:'images/galaxys25plus-bleu.jpg', views:['images/galaxys25plus-bleu.jpg','images/galaxys25plus-bleu-face.jpg','images/galaxys25plus-bleu-photo.jpg']},
    {name:'Bleu foncé', photo:'images/galaxys25plus-bleufonce.jpg', views:['images/galaxys25plus-bleufonce.jpg','images/galaxys25plus-bleufonce-face.jpg','images/galaxys25plus-bleufonce-photo.jpg']},
    {name:'Vert', photo:'images/galaxys25plus-vert.jpg', views:['images/galaxys25plus-vert.jpg','images/galaxys25plus-vert-face.jpg','images/galaxys25plus-vert-photo.jpg']}
  ]},
  {id:64, variantGroup:'galaxys25ultra', brand:'Samsung', name:'Galaxy S25 Ultra', spec:'256 Go', original:1269, price:759, type:'phone', colors:[
    {name:'Bleu', photo:'images/galaxys25ultra-bleu.jpg', views:['images/galaxys25ultra-bleu.jpg','images/galaxys25ultra-bleu-face.jpg','images/galaxys25ultra-bleu-derriere.jpg']},
    {name:'Or rose', photo:'images/galaxys25ultra-orrose.jpg', views:['images/galaxys25ultra-orrose.jpg','images/galaxys25ultra-orrose-face.jpg','images/galaxys25ultra-orrose-derriere.jpg']},
    {name:'Vert', photo:'images/galaxys25ultra-vert.jpg', views:['images/galaxys25ultra-vert.jpg','images/galaxys25ultra-vert-face.jpg','images/galaxys25ultra-vert-derriere.jpg']},
    {name:'Argent', photo:'images/galaxys25ultra-argent.jpg', views:['images/galaxys25ultra-argent.jpg','images/galaxys25ultra-argent-face.jpg','images/galaxys25ultra-argent-derriere.jpg']},
    {name:'Noir', photo:'images/galaxys25ultra-noir-face.jpg', views:['images/galaxys25ultra-noir-face.jpg','images/galaxys25ultra-noir.jpg','images/galaxys25ultra-noir-arriere.jpg']}
  ]},
  {id:65, variantGroup:'galaxys25ultra', brand:'Samsung', name:'Galaxy S25 Ultra', spec:'512 Go', original:1399, price:839, type:'phone', colors:[
    {name:'Bleu', photo:'images/galaxys25ultra-bleu.jpg', views:['images/galaxys25ultra-bleu.jpg','images/galaxys25ultra-bleu-face.jpg','images/galaxys25ultra-bleu-derriere.jpg']},
    {name:'Or rose', photo:'images/galaxys25ultra-orrose.jpg', views:['images/galaxys25ultra-orrose.jpg','images/galaxys25ultra-orrose-face.jpg','images/galaxys25ultra-orrose-derriere.jpg']},
    {name:'Vert', photo:'images/galaxys25ultra-vert.jpg', views:['images/galaxys25ultra-vert.jpg','images/galaxys25ultra-vert-face.jpg','images/galaxys25ultra-vert-derriere.jpg']},
    {name:'Argent', photo:'images/galaxys25ultra-argent.jpg', views:['images/galaxys25ultra-argent.jpg','images/galaxys25ultra-argent-face.jpg','images/galaxys25ultra-argent-derriere.jpg']},
    {name:'Noir', photo:'images/galaxys25ultra-noir-face.jpg', views:['images/galaxys25ultra-noir-face.jpg','images/galaxys25ultra-noir.jpg','images/galaxys25ultra-noir-arriere.jpg']}
  ]},
  {id:66, variantGroup:'galaxys25ultra', brand:'Samsung', name:'Galaxy S25 Ultra', spec:'1 To', original:1629, price:979, type:'phone', colors:[
    {name:'Bleu', photo:'images/galaxys25ultra-bleu.jpg', views:['images/galaxys25ultra-bleu.jpg','images/galaxys25ultra-bleu-face.jpg','images/galaxys25ultra-bleu-derriere.jpg']},
    {name:'Or rose', photo:'images/galaxys25ultra-orrose.jpg', views:['images/galaxys25ultra-orrose.jpg','images/galaxys25ultra-orrose-face.jpg','images/galaxys25ultra-orrose-derriere.jpg']},
    {name:'Vert', photo:'images/galaxys25ultra-vert.jpg', views:['images/galaxys25ultra-vert.jpg','images/galaxys25ultra-vert-face.jpg','images/galaxys25ultra-vert-derriere.jpg']},
    {name:'Argent', photo:'images/galaxys25ultra-argent.jpg', views:['images/galaxys25ultra-argent.jpg','images/galaxys25ultra-argent-face.jpg','images/galaxys25ultra-argent-derriere.jpg']},
    {name:'Noir', photo:'images/galaxys25ultra-noir-face.jpg', views:['images/galaxys25ultra-noir-face.jpg','images/galaxys25ultra-noir.jpg','images/galaxys25ultra-noir-arriere.jpg']}
  ]},
  {id:67, variantGroup:'galaxys26', brand:'Samsung', name:'Galaxy S26', spec:'256 Go', original:999, price:599, type:'phone', colors:[
    {name:'Bleu', photo:'images/galaxys26-bleu.jpg', views:['images/galaxys26-bleu.jpg','images/galaxys26-bleu-face.jpg']},
    {name:'Mauve', photo:'images/galaxys26-mauve.jpg', views:['images/galaxys26-mauve.jpg','images/galaxys26-mauve-face.jpg','images/galaxys26-mauve-derriere.jpg']},
    {name:'Noir', photo:'images/galaxys26-noir.jpg', views:['images/galaxys26-noir.jpg','images/galaxys26-noir-face.jpg']}
  ]},
  {id:68, variantGroup:'galaxys26', brand:'Samsung', name:'Galaxy S26', spec:'512 Go', original:1129, price:679, type:'phone', colors:[
    {name:'Bleu', photo:'images/galaxys26-bleu.jpg', views:['images/galaxys26-bleu.jpg','images/galaxys26-bleu-face.jpg']},
    {name:'Mauve', photo:'images/galaxys26-mauve.jpg', views:['images/galaxys26-mauve.jpg','images/galaxys26-mauve-face.jpg','images/galaxys26-mauve-derriere.jpg']},
    {name:'Noir', photo:'images/galaxys26-noir.jpg', views:['images/galaxys26-noir.jpg','images/galaxys26-noir-face.jpg']}
  ]},
  {id:70, variantGroup:'galaxyzflip6', brand:'Samsung', name:'Galaxy Z Flip 6', spec:'256 Go', original:1053, price:629, type:'phone', colors:[
    {name:'Jaune', photo:'images/galaxyzflip6-jaune.jpg', views:['images/galaxyzflip6-jaune.jpg','images/galaxyzflip6-jaune-face.jpg','images/galaxyzflip6-jaune-plier.jpg']},
    {name:'Noir', photo:'images/galaxyzflip6-noir.jpg', views:['images/galaxyzflip6-noir.jpg','images/galaxyzflip6-noir-face.jpg','images/galaxyzflip6-noir-plier.jpg']},
    {name:'Argent', photo:'images/galaxyzflip6-argent.jpg', views:['images/galaxyzflip6-argent.jpg','images/galaxyzflip6-argent-face.jpg','images/galaxyzflip6-argent-plier.jpg']},
    {name:'Bleu', photo:'images/galaxyzflip6-bleu.jpg', views:['images/galaxyzflip6-bleu.jpg','images/galaxyzflip6-bleu-face.jpg','images/galaxyzflip6-bleu-plier.jpg']},
    {name:'Vert', photo:'images/galaxyzflip6-vert-face.jpg', views:['images/galaxyzflip6-vert-face.jpg','images/galaxyzflip6-vert-plier.jpg']}
  ]},
  {id:71, variantGroup:'galaxyzflip6', brand:'Samsung', name:'Galaxy Z Flip 6', spec:'512 Go', original:1183, price:709, type:'phone', colors:[
    {name:'Jaune', photo:'images/galaxyzflip6-jaune.jpg', views:['images/galaxyzflip6-jaune.jpg','images/galaxyzflip6-jaune-face.jpg','images/galaxyzflip6-jaune-plier.jpg']},
    {name:'Noir', photo:'images/galaxyzflip6-noir.jpg', views:['images/galaxyzflip6-noir.jpg','images/galaxyzflip6-noir-face.jpg','images/galaxyzflip6-noir-plier.jpg']},
    {name:'Argent', photo:'images/galaxyzflip6-argent.jpg', views:['images/galaxyzflip6-argent.jpg','images/galaxyzflip6-argent-face.jpg','images/galaxyzflip6-argent-plier.jpg']},
    {name:'Bleu', photo:'images/galaxyzflip6-bleu.jpg', views:['images/galaxyzflip6-bleu.jpg','images/galaxyzflip6-bleu-face.jpg','images/galaxyzflip6-bleu-plier.jpg']},
    {name:'Vert', photo:'images/galaxyzflip6-vert-face.jpg', views:['images/galaxyzflip6-vert-face.jpg','images/galaxyzflip6-vert-plier.jpg']}
  ]},
  {id:72, variantGroup:'galaxyzfold7', brand:'Samsung', name:'Galaxy Z Fold 7', spec:'256 Go', original:2074, price:1249, type:'phone', colors:[
    {name:'Argent', photo:'images/galaxyzfold7-argent.jpg', views:['images/galaxyzfold7-argent.jpg','images/galaxyzfold7-argent-face.jpg','images/galaxyzfold7-argent-deplier.jpg']},
    {name:'Bleu', photo:'images/galaxyzfold7-bleu.jpg', views:['images/galaxyzfold7-bleu.jpg','images/galaxyzfold7-bleu-face.jpg','images/galaxyzfold7-bleu-derriere.jpg']},
    {name:'Noir', photo:'images/galaxyzfold7-noir.jpg', views:['images/galaxyzfold7-noir.jpg','images/galaxyzfold7-noir-face.jpg','images/galaxyzfold7-noir-interieur.jpg']},
    {name:'Vert', photo:'images/galaxyzfold7-vert.jpg', views:['images/galaxyzfold7-vert.jpg','images/galaxyzfold7-vert-deplier.jpg']}
  ]},
  {id:73, variantGroup:'galaxyzfold7', brand:'Samsung', name:'Galaxy Z Fold 7', spec:'512 Go', original:2204, price:1329, type:'phone', colors:[
    {name:'Argent', photo:'images/galaxyzfold7-argent.jpg', views:['images/galaxyzfold7-argent.jpg','images/galaxyzfold7-argent-face.jpg','images/galaxyzfold7-argent-deplier.jpg']},
    {name:'Bleu', photo:'images/galaxyzfold7-bleu.jpg', views:['images/galaxyzfold7-bleu.jpg','images/galaxyzfold7-bleu-face.jpg','images/galaxyzfold7-bleu-derriere.jpg']},
    {name:'Noir', photo:'images/galaxyzfold7-noir.jpg', views:['images/galaxyzfold7-noir.jpg','images/galaxyzfold7-noir-face.jpg','images/galaxyzfold7-noir-interieur.jpg']},
    {name:'Vert', photo:'images/galaxyzfold7-vert.jpg', views:['images/galaxyzfold7-vert.jpg','images/galaxyzfold7-vert-deplier.jpg']}
  ]},
  {id:74, variantGroup:'galaxyzfold7', brand:'Samsung', name:'Galaxy Z Fold 7', spec:'1 To', original:2434, price:1459, type:'phone', colors:[
    {name:'Argent', photo:'images/galaxyzfold7-argent.jpg', views:['images/galaxyzfold7-argent.jpg','images/galaxyzfold7-argent-face.jpg','images/galaxyzfold7-argent-deplier.jpg']},
    {name:'Bleu', photo:'images/galaxyzfold7-bleu.jpg', views:['images/galaxyzfold7-bleu.jpg','images/galaxyzfold7-bleu-face.jpg','images/galaxyzfold7-bleu-derriere.jpg']},
    {name:'Noir', photo:'images/galaxyzfold7-noir.jpg', views:['images/galaxyzfold7-noir.jpg','images/galaxyzfold7-noir-face.jpg','images/galaxyzfold7-noir-interieur.jpg']},
    {name:'Vert', photo:'images/galaxyzfold7-vert.jpg', views:['images/galaxyzfold7-vert.jpg','images/galaxyzfold7-vert-deplier.jpg']}
  ]},
  {id:6, brand:'Samsung', name:'Galaxy S22', spec:'128 Go', original:700, price:389, type:'phone'},
  {id:7, brand:'Samsung', name:'Galaxy S23', spec:'256 Go', original:900, price:549, type:'phone'},
  {id:8, brand:'Samsung', name:'Galaxy Z Flip 4', spec:'256 Go', original:850, price:459, type:'phone'},
  {id:9, brand:'Samsung', name:'Galaxy Tab S8', spec:'128 Go', original:650, price:379, type:'tablet'},
  {id:10, brand:'Mac', name:'MacBook Air M1', spec:'256 Go SSD · 8 Go RAM', original:1200, price:749, type:'laptop'},
  {id:11, brand:'Mac', name:'MacBook Air M2', spec:'256 Go SSD · 8 Go RAM', original:1500, price:999, type:'laptop'},
  {id:12, brand:'Mac', name:'MacBook Pro M1', spec:'512 Go SSD · 16 Go RAM', original:1700, price:1099, type:'laptop'},
  {id:13, brand:'Mac', name:'Mac Mini M2', spec:'256 Go SSD · 8 Go RAM', original:800, price:499, type:'desktop'},
  {id:14, brand:'Mac', name:'iMac 24" M1', spec:'256 Go SSD · 8 Go RAM', original:1500, price:899, type:'desktop'},
  {id:75, variantGroup:'macbookneo', brand:'Mac', name:'MacBook Neo', spec:'256 Go SSD · 8 Go RAM', original:799, price:479, type:'laptop', colors:[
    {name:'Argent', photo:'images/macbookneo-argent.jpg', views:['images/macbookneo-argent.jpg','images/macbookneo-argent-clavier.jpg','images/macbookneo-argent-cote.jpg']},
    {name:'Indigo', photo:'images/macbookneo-indigo.jpg', views:['images/macbookneo-indigo.jpg','images/macbookneo-indigo-clavier.jpg','images/macbookneo-indigo-cote.jpg']},
    {name:'Jaune agrume', photo:'images/macbookneo-jauneagrume.jpg', views:['images/macbookneo-jauneagrume.jpg','images/macbookneo-jauneagrume-clavier.jpg','images/macbookneo-jauneagrume-cote.jpg']},
    {name:'Rose poudre', photo:'images/macbookneo-rosepoudre.jpg', views:['images/macbookneo-rosepoudre.jpg','images/macbookneo-rosepoudre-clavier.jpg','images/macbookneo-rosepoudre-cote.jpg']}
  ]},
  {id:76, variantGroup:'macbookneo', brand:'Mac', name:'MacBook Neo', spec:'512 Go SSD · 8 Go RAM', original:929, price:559, type:'laptop', colors:[
    {name:'Argent', photo:'images/macbookneo-argent.jpg', views:['images/macbookneo-argent.jpg','images/macbookneo-argent-clavier.jpg','images/macbookneo-argent-cote.jpg']},
    {name:'Indigo', photo:'images/macbookneo-indigo.jpg', views:['images/macbookneo-indigo.jpg','images/macbookneo-indigo-clavier.jpg','images/macbookneo-indigo-cote.jpg']},
    {name:'Jaune agrume', photo:'images/macbookneo-jauneagrume.jpg', views:['images/macbookneo-jauneagrume.jpg','images/macbookneo-jauneagrume-clavier.jpg','images/macbookneo-jauneagrume-cote.jpg']},
    {name:'Rose poudre', photo:'images/macbookneo-rosepoudre.jpg', views:['images/macbookneo-rosepoudre.jpg','images/macbookneo-rosepoudre-clavier.jpg','images/macbookneo-rosepoudre-cote.jpg']}
  ]},
  {id:77, brand:'Mac', name:'MacBook Pro M5', spec:'1 To SSD · 16 Go RAM', original:2199, price:1429, type:'laptop', colors:[
    {name:'Noir sidéral', photo:'images/macbookprom5-noir.jpg', views:['images/macbookprom5-noir.jpg','images/macbookprom5-noir-cote.jpg']}
  ]},
];

// Descriptions + caractéristiques techniques, par modèle (partagées entre capacités)
const PRODUCT_INFO = {
  'iPhone 12 Pro Max': {
    desc: "L'iPhone 12 Pro Max, c'est le grand format Pro : \u00e9cran 6,7\" Super Retina XDR, ch\u00e2ssis en acier inoxydable, puce A14 Bionic et un syst\u00e8me photo Pro triple 12 Mpx avec stabilisation par d\u00e9calage de capteur et scanner LiDAR. Excellent pour la photo et la vid\u00e9o.",
    specs: [['\u00c9cran','6,7\" OLED Super Retina XDR'],['Puce','A14 Bionic'],['Ch\u00e2ssis','Acier inoxydable'],['Appareil photo','Pro : triple 12 Mpx + LiDAR'],['Autonomie','Jusqu\'\u00e0 20 h de lecture vid\u00e9o'],['R\u00e9seau','5G'],['S\u00e9curit\u00e9','Face ID'],['Syst\u00e8me','iOS']]
  },
  'iPhone 12 Pro': {
    desc: "L'iPhone 12 Pro allie un châssis en acier inoxydable, l'écran Super Retina XDR et la puce A14 Bionic. Son système photo Pro triple 12 Mpx avec scanner LiDAR et la 5G en font un excellent choix pour la photo et la vidéo.",
    specs: [['\u00c9cran','6,1\" OLED Super Retina XDR'],['Puce','A14 Bionic'],['Ch\u00e2ssis','Acier inoxydable'],['Appareil photo','Pro : triple 12 Mpx + LiDAR'],['Autonomie','Jusqu\'\u00e0 17 h de lecture vid\u00e9o'],['R\u00e9seau','5G'],['S\u00e9curit\u00e9','Face ID'],['Syst\u00e8me','iOS']]
  },
  'iPhone 12': {
    desc: "L'iPhone 12 inaugure le design à bords plats et l'écran Super Retina XDR OLED. Propulsé par la puce A14 Bionic et compatible 5G, il offre d'excellentes performances et un double appareil photo 12 Mpx pour des photos nettes de jour comme de nuit.",
    specs: [['Écran','6,1" OLED Super Retina XDR'],['Puce','A14 Bionic'],['Appareil photo','Double 12 Mpx (grand-angle + ultra grand-angle)'],['Autonomie','Jusqu\'à 17 h de lecture vidéo'],['Réseau','5G'],['Sécurité','Face ID'],['Système','iOS']]
  },
  'iPhone 13': {
    desc: "L'iPhone 13 embarque la puce A15 Bionic, un écran Super Retina XDR plus lumineux et une meilleure autonomie. Son double appareil photo avec stabilisation par décalage de capteur capture des photos et vidéos d'une grande qualité.",
    specs: [['Écran','6,1" OLED Super Retina XDR'],['Puce','A15 Bionic'],['Appareil photo','Double 12 Mpx + stabilisation capteur'],['Autonomie','Jusqu\'à 19 h de lecture vidéo'],['Réseau','5G'],['Sécurité','Face ID'],['Système','iOS']]
  },
  'iPhone 13 Pro Max': {
    desc: "Le modèle le plus abouti de la gamme 13 : grand écran ProMotion 120 Hz, système à trois appareils photo Pro avec téléobjectif et scanner LiDAR, et une autonomie record. Idéal pour la photo, la vidéo et le jeu.",
    specs: [['Écran','6,7" OLED ProMotion 120 Hz'],['Puce','A15 Bionic'],['Appareil photo','Triple 12 Mpx (télé, grand-angle, ultra) + LiDAR'],['Autonomie','Jusqu\'à 28 h de lecture vidéo'],['Réseau','5G'],['Sécurité','Face ID'],['Système','iOS']]
  },
  'iPhone 14': {
    desc: "L'iPhone 14 mise sur la fiabilité : puce A15 Bionic au top, appareil photo principal amélioré en basse lumière et nouvelles fonctions de sécurité comme la Détection des accidents. Un excellent équilibre performance / prix.",
    specs: [['Écran','6,1" OLED Super Retina XDR'],['Puce','A15 Bionic (5 cœurs GPU)'],['Appareil photo','Double 12 Mpx + Photonic Engine'],['Autonomie','Jusqu\'à 20 h de lecture vidéo'],['Réseau','5G'],['Sécurité','Face ID · Détection des accidents'],['Système','iOS']]
  },
  'iPhone 14 Pro': {
    desc: "L'iPhone 14 Pro introduit la Dynamic Island, l'écran Always-On et la puce A16 Bionic. Son capteur principal 48 Mpx capture des photos d'un détail impressionnant, même en basse lumière, avec le nouveau Photonic Engine.",
    specs: [['\u00c9cran','6,1\" OLED Super Retina XDR \u00b7 ProMotion 120 Hz \u00b7 Dynamic Island'],['Puce','A16 Bionic'],['Appareil photo','Pro : 48 Mpx + ultra grand-angle + t\u00e9l\u00e9objectif'],['Autonomie','Jusqu\'\u00e0 23 h de lecture vid\u00e9o'],['S\u00e9curit\u00e9','Face ID \u00b7 D\u00e9tection des accidents'],['Connectique','Lightning'],['R\u00e9seau','5G'],['Syst\u00e8me','iOS']]
  },
  'iPhone 14 Pro Max': {
    desc: "L'iPhone 14 Pro Max combine le plus grand \u00e9cran Pro, la Dynamic Island, l'\u00e9cran Always-On et la puce A16 Bionic. Son syst\u00e8me photo Pro 48 Mpx avec t\u00e9l\u00e9objectif offre une flexibilit\u00e9 photo in\u00e9gal\u00e9e et une autonomie except pour toute une journ\u00e9e intensive.",
    specs: [['\u00c9cran','6,7\" OLED Super Retina XDR \u00b7 ProMotion 120 Hz \u00b7 Dynamic Island'],['Puce','A16 Bionic'],['Appareil photo','Pro : 48 Mpx + ultra grand-angle + t\u00e9l\u00e9objectif'],['Autonomie','Jusqu\'\u00e0 29 h de lecture vid\u00e9o'],['S\u00e9curit\u00e9','Face ID \u00b7 D\u00e9tection des accidents'],['Connectique','Lightning'],['R\u00e9seau','5G'],['Syst\u00e8me','iOS']]
  },
  'iPhone 15': {
    desc: "L'iPhone 15 passe à l'USB-C et à la Dynamic Island. Sa puce A16 Bionic et son capteur principal 48 Mpx offrent des photos très détaillées avec un zoom 2x de qualité optique.",
    specs: [['Écran','6,1" OLED Super Retina XDR · Dynamic Island'],['Puce','A16 Bionic'],['Appareil photo','Principal 48 Mpx + ultra grand-angle'],['Autonomie','Jusqu\'à 20 h de lecture vidéo'],['Connectique','USB-C'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 15 Pro': {
    desc: "L'iPhone 15 Pro adopte un châssis en titane léger et robuste, la puce A17 Pro ultra-performante, un nouveau bouton Action personnalisable et l'USB-C. Son système photo Pro 48 Mpx avec téléobjectif capture des images d'une netteté exceptionnelle, de jour comme de nuit.",
    specs: [['Écran','6,1" OLED Super Retina XDR · ProMotion 120 Hz · Dynamic Island'],['Puce','A17 Pro'],['Châssis','Titane'],['Appareil photo','Pro : 48 Mpx + ultra grand-angle + téléobjectif 3x'],['Autonomie','Jusqu\'à 23 h de lecture vidéo'],['Connectique','USB-C (USB 3)'],['Nouveauté','Bouton Action'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 15 Pro Max': {
    desc: "L'iPhone 15 Pro Max, c'est tout le meilleur de la gamme Pro sur un grand écran de 6,7\". Châssis en titane, puce A17 Pro et un téléobjectif inédit avec zoom optique 5x pour des photos rapprochées d'une qualité impressionnante. La plus grande autonomie de tous les iPhone.",
    specs: [['Écran','6,7" OLED Super Retina XDR · ProMotion 120 Hz · Dynamic Island'],['Puce','A17 Pro'],['Châssis','Titane'],['Appareil photo','Pro : 48 Mpx + ultra grand-angle + téléobjectif 5x'],['Autonomie','Jusqu\'à 29 h de lecture vidéo'],['Connectique','USB-C (USB 3)'],['Nouveauté','Bouton Action'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 16': {
    desc: "L'iPhone 16 embarque la puce A18, le nouveau bouton Action et l'inédite Commande d'appareil photo pour lancer et régler vos prises de vue d'un simple geste. Double appareil photo Fusion 48 Mpx, USB-C et coloris éclatants.",
    specs: [['Écran','6,1" OLED Super Retina XDR'],['Puce','A18'],['Appareil photo','Double Fusion 48 Mpx + ultra grand-angle'],['Autonomie','Jusqu\'à 22 h de lecture vidéo'],['Nouveauté','Bouton Action · Commande d\'appareil photo'],['Connectique','USB-C'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 16 Pro Max': {
    desc: "Le sommet de la gamme : l'iPhone 16 Pro Max combine un immense écran de 6,9\", la puce A18 Pro, un châssis en titane et un système photo Pro 48 Mpx avec téléobjectif 5x. La Commande d'appareil photo et une autonomie record en font l'iPhone ultime.",
    specs: [['Écran','6,9" OLED Super Retina XDR · ProMotion 120 Hz'],['Puce','A18 Pro'],['Châssis','Titane'],['Appareil photo','Pro : 48 Mpx + ultra grand-angle 48 Mpx + téléobjectif 5x'],['Autonomie','Jusqu\'à 33 h de lecture vidéo'],['Nouveauté','Bouton Action · Commande d\'appareil photo'],['Connectique','USB-C (USB 3)'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 17': {
    desc: "L'iPhone 17 place la barre encore plus haut avec un écran ProMotion 120 Hz plus grand, la puissante puce A19 et un double appareil photo 48 Mpx. Design coloré, verre renforcé Ceramic Shield et USB-C : le tout dans un modèle standard plus abouti que jamais.",
    specs: [['Écran','6,3" OLED Super Retina XDR · ProMotion 120 Hz'],['Puce','A19'],['Appareil photo','Double Fusion 48 Mpx + ultra grand-angle 48 Mpx'],['Autonomie','Jusqu\'à 24 h de lecture vidéo'],['Protection','Ceramic Shield'],['Connectique','USB-C'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 17 Pro': {
    desc: "L'iPhone 17 Pro introduit un nouveau châssis en aluminium avec plateau caméra intégral, la puce A19 Pro pour des performances soutenues, et un système photo Pro triple 48 Mpx avec téléobjectif optique amélioré. Un bond en avant pour la photo comme pour le jeu.",
    specs: [['Écran','6,3" OLED Super Retina XDR · ProMotion 120 Hz'],['Puce','A19 Pro'],['Châssis','Aluminium · plateau caméra intégral'],['Appareil photo','Pro : triple 48 Mpx + téléobjectif'],['Autonomie','Jusqu\'à 27 h de lecture vidéo'],['Protection','Ceramic Shield 2'],['Connectique','USB-C (USB 3)'],['Réseau','5G'],['Système','iOS']]
  },
  'iPhone 17 Pro Max': {
    desc: "L'iPhone 17 Pro Max, c'est le summum : le plus grand écran, la puce A19 Pro, un châssis en aluminium avec plateau caméra intégral et un système photo Pro triple 48 Mpx avec le meilleur téléobjectif jamais vu sur iPhone. Une autonomie exceptionnelle pour tenir toute la journée et plus encore.",
    specs: [['Écran','6,9" OLED Super Retina XDR · ProMotion 120 Hz'],['Puce','A19 Pro'],['Châssis','Aluminium · plateau caméra intégral'],['Appareil photo','Pro : triple 48 Mpx + téléobjectif longue portée'],['Autonomie','Jusqu\'à 37 h de lecture vidéo'],['Protection','Ceramic Shield 2'],['Connectique','USB-C (USB 3)'],['Réseau','5G'],['Système','iOS']]
  },
  'Galaxy A56': {
    desc: "Le Galaxy A56 5G modernise la gamme A avec un écran Super AMOLED 120 Hz lumineux, la puce Exynos 1580 et un triple capteur photo 50 Mpx stabilisé. Une autonomie confortable et une charge rapide 45 W pour un usage quotidien sans compromis.",
    specs: [['Écran','6,7" Super AMOLED 120 Hz'],['Processeur','Exynos 1580'],['Appareil photo','Triple, principal 50 Mpx OIS'],['Batterie','5000 mAh · charge rapide 45 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy S25+': {
    desc: "Le Galaxy S25+ est le haut de gamme Samsung par excellence : grand écran Dynamic AMOLED 2X 120 Hz, châssis en titane, puce Snapdragon 8 Elite for Galaxy et triple capteur photo 50 Mpx boosté par l'IA Galaxy. Puissance, autonomie et finitions premium réunies.",
    specs: [['Écran','6,7" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon 8 Elite for Galaxy'],['Châssis','Titane'],['Appareil photo','Triple 50 Mpx + ultra grand-angle + téléobjectif'],['Batterie','4900 mAh · charge rapide 45 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy S25 Ultra': {
    desc: "Le Galaxy S25 Ultra est le fleuron absolu de Samsung : châssis en titane, écran Dynamic AMOLED 2X 120 Hz, S Pen intégré et système photo Pro 200 Mpx avec téléobjectif longue portée. Le Snapdragon 8 Elite for Galaxy et l'IA Galaxy en font l'appareil le plus puissant de la gamme.",
    specs: [['Écran','6,9" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon 8 Elite for Galaxy'],['Châssis','Titane'],['Appareil photo','Pro 200 Mpx + ultra grand-angle + double téléobjectif'],['Stylet','S Pen intégré'],['Batterie','5000 mAh · charge rapide 45 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy S26': {
    desc: "Le Galaxy S26 inaugure la nouvelle génération Samsung : design affiné, écran Dynamic AMOLED 2X 120 Hz éclatant et puce dernière génération optimisée pour l'IA Galaxy. Un triple capteur photo 50 Mpx et une autonomie solide pour un usage quotidien exigeant.",
    specs: [['Écran','6,3" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon dernière génération for Galaxy'],['Appareil photo','Triple 50 Mpx + ultra grand-angle + téléobjectif'],['Batterie','4300 mAh · charge rapide 25 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy Z Fold 7': {
    desc: "Le Galaxy Z Fold 7 est le pliant le plus abouti de Samsung : un écran interne 8\" façon tablette pour multitâche et création, un écran externe plein format pour un usage classique, et un châssis en titane ultra-fin. Puce Snapdragon dernière génération et système photo Pro pour ne jamais faire de compromis.",
    specs: [['Écran interne','8" Dynamic AMOLED 2X 120 Hz pliable'],['Écran externe','6,5" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon 8 Elite for Galaxy'],['Châssis','Titane'],['Appareil photo','Triple 50 Mpx + ultra grand-angle + téléobjectif'],['Batterie','4400 mAh · charge rapide 25 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy Z Flip 6': {
    desc: "Le Galaxy Z Flip 6 se plie pour tenir dans n'importe quelle poche et se déplie sur un grand écran Dynamic AMOLED 2X 120 Hz. Écran externe FlexWindow pratique pour les notifications et selfies, puce Snapdragon 8 Gen 3 for Galaxy et coloris pop pour se démarquer.",
    specs: [['Écran principal','6,7" Dynamic AMOLED 2X 120 Hz pliable'],['Écran externe','3,4" Super AMOLED FlexWindow'],['Processeur','Snapdragon 8 Gen 3 for Galaxy'],['Appareil photo','Double 50 Mpx + ultra grand-angle'],['Batterie','4000 mAh · charge rapide 25 W'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy S22': {
    desc: "Compact et haut de gamme, le Galaxy S22 combine un écran Dynamic AMOLED 2X 120 Hz, la puissance du Snapdragon 8 Gen 1 et un triple appareil photo 50 Mpx très polyvalent.",
    specs: [['Écran','6,1" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon 8 Gen 1'],['Appareil photo','Triple, principal 50 Mpx'],['Batterie','3700 mAh'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy S23': {
    desc: "Le Galaxy S23 pousse l'autonomie et les performances plus loin grâce au Snapdragon 8 Gen 2. Photos éclatantes de jour comme de nuit et écran ultra fluide 120 Hz.",
    specs: [['Écran','6,1" Dynamic AMOLED 2X 120 Hz'],['Processeur','Snapdragon 8 Gen 2 for Galaxy'],['Appareil photo','Triple, principal 50 Mpx'],['Batterie','3900 mAh'],['Réseau','5G'],['Système','Android']]
  },
  'Galaxy Z Flip 4': {
    desc: "Le Galaxy Z Flip 4 se plie pour tenir dans la poche et se déplie sur un grand écran 6,7\". Un écran externe pratique et un design iconique pour se démarquer.",
    specs: [['Écran principal','6,7" Dynamic AMOLED 120 Hz pliable'],['Écran externe','1,9" Super AMOLED'],['Processeur','Snapdragon 8+ Gen 1'],['Appareil photo','Double 12 Mpx'],['Batterie','3700 mAh'],['Système','Android']]
  },
  'Galaxy Tab S8': {
    desc: "La Galaxy Tab S8 est une tablette Android puissante avec S Pen inclus, parfaite pour le travail, le dessin et le divertissement sur un grand écran 120 Hz.",
    specs: [['Écran','11" LCD 120 Hz'],['Processeur','Snapdragon 8 Gen 1'],['Stylet','S Pen inclus'],['Batterie','8000 mAh'],['Connectivité','Wi-Fi'],['Système','Android']]
  },
  'MacBook Air M1': {
    desc: "Le MacBook Air M1 a marqué un tournant : silencieux (sans ventilateur), rapide et endurant. Idéal pour la bureautique, le web et les tâches créatives légères.",
    specs: [['Puce','Apple M1 (8 cœurs CPU)'],['Écran','13,3" Retina'],['Mémoire','8 Go RAM unifiée'],['Stockage','SSD 256 Go'],['Autonomie','Jusqu\'à 18 h'],['Système','macOS']]
  },
  'MacBook Air M2': {
    desc: "Plus fin et plus puissant, le MacBook Air M2 ajoute un écran Liquid Retina plus grand, la recharge MagSafe et la puce M2 pour un usage quotidien fluide et une grande autonomie.",
    specs: [['Puce','Apple M2'],['Écran','13,6" Liquid Retina'],['Mémoire','8 Go RAM unifiée'],['Stockage','SSD 256 Go'],['Autonomie','Jusqu\'à 18 h'],['Recharge','MagSafe'],['Système','macOS']]
  },
  'MacBook Pro M1': {
    desc: "Le MacBook Pro M1 combine la puce M1, un système de refroidissement actif pour tenir la charge, et 16 Go de RAM. Un vrai outil de travail pour les créatifs et développeurs.",
    specs: [['Puce','Apple M1'],['Écran','13,3" Retina'],['Mémoire','16 Go RAM unifiée'],['Stockage','SSD 512 Go'],['Autonomie','Jusqu\'à 20 h'],['Système','macOS']]
  },
  'Mac Mini M2': {
    desc: "Le Mac Mini M2 est un ordinateur de bureau compact et silencieux. Branchez votre écran, clavier et souris et profitez de la puissance de la puce M2. (Écran et périphériques non inclus.)",
    specs: [['Puce','Apple M2'],['Mémoire','8 Go RAM unifiée'],['Stockage','SSD 256 Go'],['Connectique','Thunderbolt 4, HDMI, USB-A'],['Réseau','Wi-Fi 6 · Gigabit Ethernet'],['Système','macOS']]
  },
  'iMac 24" M1': {
    desc: "L'iMac 24\" M1 est un tout-en-un élégant avec un superbe écran 4,5K Retina. Parfait pour toute la famille : design fin, couleurs vives et puce M1 rapide.",
    specs: [['Puce','Apple M1'],['Écran','24" 4,5K Retina'],['Mémoire','8 Go RAM unifiée'],['Stockage','SSD 256 Go'],['Webcam','FaceTime HD 1080p'],['Système','macOS']]
  },
  'MacBook Neo': {
    desc: "Le MacBook Neo réinvente l'ordinateur portable abordable d'Apple : ultra fin, ultra léger, avec un écran Liquid Retina éclatant et des coloris pop pour se démarquer. Silencieux (sans ventilateur) et endurant, il est parfait pour la bureautique, le web et un usage créatif léger au quotidien.",
    specs: [['Puce','Apple M4'],['Écran','13,6" Liquid Retina'],['Mémoire','8 Go RAM unifiée'],['Autonomie','Jusqu\'à 18 h'],['Connectique','USB-C · MagSafe'],['Système','macOS']]
  },
  'MacBook Pro M5': {
    desc: "Le MacBook Pro M5 pousse les performances au maximum grâce à la puce Apple M5 et son GPU nouvelle génération. Écran Liquid Retina XDR, châssis en aluminium robuste et autonomie exceptionnelle : la référence pour les créatifs et développeurs les plus exigeants.",
    specs: [['Puce','Apple M5 (CPU 10 cœurs · GPU 10 cœurs)'],['Écran','14,2" Liquid Retina XDR'],['Mémoire','16 Go RAM unifiée'],['Stockage','SSD 1 To'],['Autonomie','Jusqu\'à 24 h'],['Connectique','Thunderbolt 5 · MagSafe · HDMI'],['Système','macOS']]
  }
};

const COLOR_HEX = {
  'Violet':'#B7A9D6', 'Noir':'#1D1D1F', 'Blanc':'#F5F5F0',
  'Bleu':'#3E6488', 'Rouge':'#B91C2B', 'Vert':'#5B6E52',
  'Minuit':'#1D2233', 'Rose':'#E7C8CB', 'Lumière stellaire':'#EDE6D8',
  'Graphite':'#54514A', 'Or':'#F0E4C8', 'Argent':'#F2F2ED',
  'Bleu Sierra':'#A9C0D2', 'Vert alpin':'#4A5D4E', 'Jaune':'#F2E2A0',
  'Titane noir':'#3B3B3D', 'Titane bleu':'#4A5568', 'Titane naturel':'#C7BEB2', 'Titane blanc':'#E8E6E0',
  'Sarcelle':'#8FB3B0', 'Outremer':'#6B7DD6', 'Titane sable':'#C9B79C',
  'Sauge':'#9CAE8B', 'Lavande':'#C7BEDC', 'Brume':'#C5CED6',
  'Bleu intense':'#33415C', 'Orange cosmique':'#D8703B',
  'Bleu Pacifique':'#38566B', 'Noir sidéral':'#3A3A3C', 'Violet intense':'#4E4159',
  'Gris':'#B7B7B2', 'Bleu foncé':'#1E3A5F',
  'Or rose':'#D9AFA0', 'Mauve':'#6E6288',
  'Indigo':'#4A5FA5', 'Jaune agrume':'#D9E05B', 'Rose poudre':'#F0C4D4'
};

function productInfo(p){ return PRODUCT_INFO[p.name] || {desc:'', specs:[]}; }
function discountPct(p){ return Math.round((1 - p.price/p.original)*100); }

// ---------- Panier partagé (persistant via localStorage) ----------
function loadCart(){
  try { return JSON.parse(localStorage.getItem('psCart') || '{}') || {}; }
  catch(e){ return {}; }
}
function saveCart(c){
  try { localStorage.setItem('psCart', JSON.stringify(c)); } catch(e){}
}

// ---------- Illustrations SVG (fallback quand pas de photo) ----------
function illustration(type, size=48){
  return illustrationFor({type, brand:'', name:''}, size);
}
function illustrationFor(p, size=48){
  const ink = 'currentColor';
  const amber = '#F5A527';
  const name = (p.name||'').toLowerCase();
  const isIphone = p.brand === 'iPhone';
  const isSamsung = p.brand === 'Samsung';
  const isFlip = name.includes('flip');
  const isTablet = p.type === 'tablet';
  const isMini = name.includes('mini');
  const isImac = name.includes('imac');

  const bg = `<rect x="2" y="2" width="92" height="92" rx="20" fill="none" stroke="${ink}" stroke-width="1" stroke-opacity="0.08"/>`;

  if(p.type === 'phone' && !isFlip){
    if(isIphone){
      return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
        ${bg}
        <rect x="30" y="10" width="36" height="76" rx="9" stroke="${ink}" stroke-width="1.8"/>
        <rect x="41" y="17" width="14" height="5" rx="2.5" fill="${ink}"/>
        <circle cx="66" cy="19.5" r="1.3" fill="${amber}"/>
        <rect x="41" y="79" width="14" height="2.4" rx="1.2" fill="${ink}" opacity="0.55"/>
        <line x1="30" y1="30" x2="30" y2="40" stroke="${ink}" stroke-width="1.8"/>
      </svg>`;
    }
    if(isSamsung){
      return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
        ${bg}
        <rect x="30" y="10" width="36" height="76" rx="5" stroke="${ink}" stroke-width="1.8"/>
        <circle cx="48" cy="19" r="2.2" stroke="${ink}" stroke-width="1.4"/>
        <circle cx="48" cy="19" r="0.8" fill="${amber}"/>
        <rect x="65" y="34" width="1.6" height="10" fill="${ink}"/>
      </svg>`;
    }
  }
  if(isFlip){
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      ${bg}
      <rect x="28" y="14" width="40" height="30" rx="5" stroke="${ink}" stroke-width="1.8"/>
      <rect x="28" y="52" width="40" height="30" rx="5" stroke="${ink}" stroke-width="1.8"/>
      <line x1="26" y1="47" x2="70" y2="47" stroke="${ink}" stroke-width="2.4"/>
      <circle cx="48" cy="28" r="1.6" fill="${amber}"/>
    </svg>`;
  }
  if(isTablet){
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      ${bg}
      <rect x="20" y="8" width="56" height="80" rx="7" stroke="${ink}" stroke-width="1.8"/>
      <circle cx="48" cy="17" r="1.6" fill="${amber}"/>
      <rect x="41" y="78" width="14" height="2.4" rx="1.2" fill="${ink}" opacity="0.5"/>
    </svg>`;
  }
  if(p.type === 'laptop'){
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      ${bg}
      <path d="M32 20a4 4 0 014-4h24a4 4 0 014 4v38H32V20z" stroke="${ink}" stroke-width="1.8"/>
      <circle cx="48" cy="23" r="1.1" fill="${amber}"/>
      <path d="M18 66h60l6 12a3 3 0 01-2.8 4.2H14.8A3 3 0 0112 78.2z" stroke="${ink}" stroke-width="1.8"/>
      <line x1="30" y1="58" x2="66" y2="58" stroke="${ink}" stroke-width="1.4" opacity="0.5"/>
      <rect x="42" y="70" width="12" height="1.6" rx="0.8" fill="${ink}" opacity="0.4"/>
    </svg>`;
  }
  if(isMini){
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      ${bg}
      <rect x="20" y="38" width="56" height="14" rx="3" stroke="${ink}" stroke-width="1.8"/>
      <line x1="27" y1="45" x2="43" y2="45" stroke="${ink}" stroke-width="1.2" opacity="0.5"/>
      <circle cx="70" cy="45" r="1.2" fill="${amber}"/>
    </svg>`;
  }
  if(isImac){
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      ${bg}
      <rect x="18" y="12" width="60" height="42" rx="5" stroke="${ink}" stroke-width="1.8"/>
      <circle cx="48" cy="19" r="1.1" fill="${amber}"/>
      <line x1="48" y1="54" x2="48" y2="66" stroke="${ink}" stroke-width="1.8"/>
      <ellipse cx="48" cy="70" rx="16" ry="3.4" stroke="${ink}" stroke-width="1.8"/>
    </svg>`;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
    ${bg}
    <rect x="24" y="8" width="48" height="80" rx="6" stroke="${ink}" stroke-width="1.8"/>
    <line x1="34" y1="20" x2="62" y2="20" stroke="${ink}" stroke-width="1.4"/>
  </svg>`;
}
