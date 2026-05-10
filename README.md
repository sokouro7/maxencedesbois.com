# maxencedesbois.com — Guide complet

Ton site personnel, prêt à être déployé sur **GitHub Pages** avec ton domaine **maxencedesbois.com**.

---

## 📦 Contenu du dossier

```
maxencedesbois/
├── index.html          # Le site (structure)
├── style.css           # Le design (dark/light, orange brûlé)
├── script.js           # Logique (toggle thème, langue, animations)
└── README.md           # Ce guide
```

Trois fichiers, zéro dépendance, zéro framework. Pur HTML/CSS/JS.

---

## 🚀 Mettre le site en ligne — Pas à pas

### Étape 1 — Tester en local (2 min)

Ouvre simplement `index.html` dans ton navigateur (double-clic). Le site fonctionne déjà entièrement en local.

### Étape 2 — Créer le repo GitHub (5 min)

1. Va sur [github.com/new](https://github.com/new)
2. **Repository name** : `maxencedesbois.com` (important : ce nom exact pour la suite)
3. **Public** ✅ (c'est ce qui te permet d'utiliser GitHub Pages gratuitement, et c'est aussi un signal pro fort)
4. Ne coche pas "Add a README" (on en a déjà un)
5. **Create repository**

### Étape 3 — Pusher les fichiers (10 min)

**Option A — En ligne de commande (recommandé) :**

```bash
cd /chemin/vers/maxencedesbois
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sokouro7/maxencedesbois.com.git
git push -u origin main
```

**Option B — Via l'interface GitHub :**

Sur la page de ton repo vide, clique sur "uploading an existing file" et glisse les 3 fichiers (`index.html`, `style.css`, `script.js`).

### Étape 4 — Activer GitHub Pages (2 min)

1. Sur ton repo → **Settings** (en haut à droite)
2. Menu de gauche → **Pages**
3. **Source** : `Deploy from a branch`
4. **Branch** : `main` / `(root)` → **Save**
5. Attends ~1 min, le site sera disponible à `https://sokouro7.github.io/maxencedesbois.com/`

### Étape 5 — Acheter le nom de domaine (5 min, ~10 €/an)

Plusieurs options sérieuses :

- **OVH** (FR) : ~7 €/an pour `.com` la première année, ~12 €/an ensuite
- **Namecheap** (US) : ~10 €/an
- **Porkbun** (US, fiable et bon marché) : ~9 €/an
- **Cloudflare Registrar** : prix coûtant (~9 €/an), pas de marge — le moins cher à long terme

Recherche `maxencedesbois.com` sur l'un de ces sites, ajoute au panier, paye. Compte 5 minutes. **Active le renouvellement automatique** pour ne pas perdre le domaine bêtement.

### Étape 6 — Connecter le domaine à GitHub Pages (15 min)

**Sur le panneau DNS de ton registrar**, ajoute ces 4 enregistrements **A** + 1 **CNAME** :

| Type  | Nom (Host) | Valeur                  | TTL   |
|-------|------------|-------------------------|-------|
| A     | @          | `185.199.108.153`       | 3600  |
| A     | @          | `185.199.109.153`       | 3600  |
| A     | @          | `185.199.110.153`       | 3600  |
| A     | @          | `185.199.111.153`       | 3600  |
| CNAME | www        | `sokouro7.github.io`    | 3600  |

**Sur ton repo GitHub** :

1. Settings → Pages
2. **Custom domain** : tape `maxencedesbois.com` → Save
3. GitHub vérifie le DNS (peut prendre 5 min à 24 h selon le registrar — en général c'est rapide)
4. Une fois validé, coche **Enforce HTTPS** ✅

C'est terminé. Ton site est en ligne sur `https://maxencedesbois.com`.

---

## ✏️ Modifier le contenu plus tard

Tout le texte modifiable se trouve à deux endroits :

- **`index.html`** : la structure et le contenu anglais par défaut
- **`script.js`** : l'objet `I18N` qui contient toutes les traductions EN et FR

Pour modifier un texte, retrouve-le via la clé `data-i18n="..."` dans le HTML, puis modifie les valeurs correspondantes dans les blocs `en:` et `fr:` du `script.js`.

Pour ajouter une nouvelle expérience pro, duplique un bloc `<article class="track__item">` dans `index.html`.

Pour pusher une modification :

```bash
git add .
git commit -m "Update content"
git push
```

Le site se met à jour automatiquement en 1-2 minutes.

---

## 🎨 Design choices

- **Dark mode par défaut** + light mode (toggle en haut à droite, choix mémorisé)
- **Anglais par défaut** + français (toggle en haut à droite, détection automatique de la langue du navigateur au premier chargement)
- **Couleur signature** : orange brûlé `#D2691E`
- **Typographie** : Fraunces (serif éditoriale) + Inter (sans-serif) + JetBrains Mono (mono technique)
- **Texture** : grain SVG subtil pour la sensation print/éditoriale
- **Animations** : reveal au scroll, hover discrets, pulse sur le statut "Open to opportunities"

---

## 🛠 Maintenance

- **HTTPS** : géré gratuitement par GitHub via Let's Encrypt, renouvellement auto
- **Hébergement** : 0 €/mois, à vie
- **Domaine** : ~10 €/an
- **Performance** : Lighthouse 95-100 attendu

---

Tu as tout. Si tu bloques sur une étape, dis-le-moi.
