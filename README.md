# 🔁 Profile View Booster (via Puppeteer)

Ce script Node.js utilise **Puppeteer** pour effectuer des rechargements automatisés d'une **page de profil** (ou autre URL), simulant ainsi des **vues**. Il permet de lancer plusieurs **navigateurs en parallèle** (multi-threads) pour intensifier le processus.

---

## 🚀 Fonctionnalités

- 📄 Recharge une page donnée un nombre défini de fois
- 🧵 Multi-threads (chaque thread utilise son propre navigateur)
- ⚡ Bloque les ressources inutiles (images, CSS, etc.) pour améliorer la vitesse
- 🕐 Cooldown entre les rechargements pour éviter les erreurs serveur

---

## 🛠️ Installation

```bash
git clone https://github.com/tonpseudo/profile-view-booster.git
cd profile-view-booster
npm install
