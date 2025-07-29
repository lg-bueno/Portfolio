const fs = require('fs');
const path = require('path');

// Função para ofuscar strings simples
function obfuscateString(str) {
  return str.split('').map(char => {
    return '\\x' + char.charCodeAt(0).toString(16).padStart(2, '0');
  }).join('');
}

// Função para ofuscar nomes de variáveis
function obfuscateVariableName(name) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < name.length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Função para ofuscar um arquivo JavaScript
function obfuscateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ofuscar strings sensíveis
    content = content.replace(/(['"])(\/api\/images\?hash=)([^'"]+)(['"])/g, 
      (match, quote1, prefix, hash, quote2) => {
        return quote1 + obfuscateString(prefix) + hash + quote2;
      });
    
    // Ofuscar nomes de funções sensíveis
    content = content.replace(/generateDynamicHash/g, obfuscateVariableName('generateDynamicHash'));
    content = content.replace(/getImageUrl/g, obfuscateVariableName('getImageUrl'));
    
    fs.writeFileSync(filePath, content);
    console.log(`Ofuscado: ${filePath}`);
  } catch (error) {
    console.error(`Erro ao ofuscar ${filePath}:`, error.message);
  }
}

// Função para processar diretório recursivamente
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      obfuscateFile(filePath);
    }
  });
}

// Executar ofuscação
if (require.main === module) {
  const buildDir = path.join(__dirname, '..', '.next');
  if (fs.existsSync(buildDir)) {
    console.log('Iniciando ofuscação do código...');
    processDirectory(buildDir);
    console.log('Ofuscação concluída!');
  } else {
    console.log('Diretório .next não encontrado. Execute "npm run build" primeiro.');
  }
}

module.exports = { obfuscateFile, processDirectory }; 