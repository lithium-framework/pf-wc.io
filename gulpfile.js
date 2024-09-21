const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const rename = require('gulp-rename');

// Chemins à vérifier et utiliser
const dependencies = [
  'unofficial-pf-v5-wc',
  '@patternfly/react-core'
];

// Chemins pour les fichiers à copier
const pfCoreCssPath = path.resolve(__dirname, 'node_modules/@patternfly/react-core/dist/styles/base.css');
const unofficialPfJsPackagePath = path.resolve(__dirname, 'node_modules/unofficial-pf-v5-wc/package.json');

// Cibles où copier les fichiers
const cssTargetPath = path.resolve(__dirname, 'static/css');
const jsTargetPath = path.resolve(__dirname, 'static/js');

// Vérifier si un module est installé ou est un symlink
function checkDependencies(cb) {
  let missingDeps = dependencies.filter(dep => !fs.existsSync(path.resolve(__dirname, 'node_modules', dep)));

  if (missingDeps.length > 0) {
    console.error(`Les dépendances suivantes sont manquantes : ${missingDeps.join(', ')}`);
    return cb(new Error('Dépendances manquantes.'));
  }
  
  cb();
}

// Résoudre un chemin qui pourrait être un symlink
function resolveSymlink(modulePath) {
  try {
    return fs.realpathSync(modulePath);
  } catch (err) {
    console.error(`Erreur en résolvant le chemin : ${modulePath}`, err);
    throw err;
  }
}

// Copier base.css depuis @patternfly/react-core
function copyPfCoreCss() {
  return gulp.src(pfCoreCssPath)
    .pipe(rename('pf-base.css'))  // Renommer base.css en pf-base.css
    .pipe(gulp.dest(cssTargetPath));  // Copier vers static/css
}

// Trouver et copier le fichier bundle.js depuis unofficial-pf-v5-wc, même avec symlink
function copyUnofficialPfBundle() {
  // Résoudre le chemin réel de unofficial-pf-v5-wc (qui pourrait être un symlink)
  const realUnofficialPfPath = resolveSymlink(path.resolve(__dirname, 'node_modules/unofficial-pf-v5-wc'));

  // Lire package.json pour trouver le champ 'main' (bundle.js)
  const packageJson = JSON.parse(fs.readFileSync(path.join(realUnofficialPfPath, 'package.json')));
  const bundleJsPath = path.resolve(realUnofficialPfPath, packageJson.main);

  return gulp.src(bundleJsPath)
    .pipe(rename('unofficial-pf-v5-wc.js'))  // Renommer bundle.js en unofficial-pf-v5-wc.js
    .pipe(gulp.dest(jsTargetPath));  // Copier vers static/js
}

// Tâche principale : vérifier les dépendances puis copier les fichiers
exports.default = gulp.series(
  checkDependencies,   // D'abord vérifier si les dépendances sont présentes
  gulp.parallel(copyPfCoreCss, copyUnofficialPfBundle)  // Ensuite copier les fichiers en parallèle
);