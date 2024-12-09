# 9-decembre

## 1. Exercices Flexbox 

### A. Barre de navigation responsive (30-45 min)

```html
<!-- Structure de base -->
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

#### Consignes :

- Aligner les éléments horizontalement avec justify-content
- Espacer le logo et les liens avec space-between
- Rendre le menu responsive (vertical en mobile)
- Bonus : Ajouter un bouton burger en version mobile

### B. Galerie de cards (45 min)

```html

  <!-- Répéter pour 6 cards -->
</section>
```

#### Consignes :

- Créer une grille de cards (3 par ligne)
- Utiliser flex-wrap pour la responsive
- Aligner le contenu des cards verticalement
- Bonus : Ajouter des effets hover

### C. Formulaire aligné (30-45 min)

```html
<form class="contact-form">
  <div class="form-group">
    <label for="name">Nom</label>
    <input type="text" id="name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Envoyer</button>
</form>
```

#### Consignes :

- Aligner labels et inputs côte à côte
- Gérer les espacements uniformément
- Adapter en version mobile (colonnes)

## 2. Exercices Grid 

### A. Grille basique (30 min)

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

#### Consignes :

- Créer une grille 2x2
- Ajouter des gaps
- Faire une version 3x3
- Bonus : Faire varier les tailles des cellules

### B. Layout blog (45 min)

```html
<div class="blog-layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main-content">
    <article>Article principal</article>
    <article>Article secondaire</article>
  </main>
  <footer class="footer">Footer</footer>
</div>
```

#### Consignes :

- Structurer avec grid-template-areas
- Créer un layout classique de blog
- Gérer la responsive

### C. Layout combiné Flexbox/Grid (45 min)

```html
<div class="page-container">
  <header class="header">
    <nav class="navbar"><!-- Navigation avec Flexbox --></nav>
  </header>
  <main class="content">
    <div class="cards-grid"><!-- Cards avec Grid --></div>
  </main>
  <aside class="sidebar">
    <div class="widget"><!-- Widgets avec Flexbox --></div>
  </aside>
  <footer class="footer"><!-- Footer avec Flexbox --></footer>
</div>
```

#### Consignes :

- Utiliser Grid pour la structure générale
- Intégrer des éléments Flexbox dans chaque zone
- Rendre le tout responsive
- Bonus : Ajouter un système de thème clair/sombre

